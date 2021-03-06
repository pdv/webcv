(ns fugue.midi
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oset!+]]
            [fugue.synthdef :as synthdef]
            [fugue.chan :as chan]))

(defmethod chan/chan-node-spec ::midi-in [_]
  (s/keys :req [::input-name]))

(defmethod chan/make-chan-node ::midi-in
  [{::keys [ins]} {::keys [input-name]}]
  (let [midi-chan (get ins input-name)
        out-chan (async/chan 1)]
    (async/tap midi-chan out-chan)
    {::chan/mult-out (async/mult out-chan)}))

(defn note->hz [note]
  (as-> note v
        (- v 69.0)
        (/ v 12)
        (js/Math.pow 2.0 v)
        (* v 440.0)))

(defn hz->note [freq]
  (as-> freq v
        (/ v 440)
        (.log2 js/Math v)
        (* v 12)
        (+ v 69)))

(defn note-on? [midi-msg]
  (and (= :note-on (:type midi-msg))
       (not= 0 (:velocity midi-msg))))

(defn note-off? [midi-msg]
  (case (:type midi-msg)
    :note-off true
    :note-on (= 0 (:velocity midi-msg))
    false))

(defn midi-x-note
  "Returns a stateful transducer that maps midi events to midi notes based on
  priority-fn, which selects from a list of notes currently down."
  [priority-fn]
  (fn [rf]
    (let [v-down (volatile! [])]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result midi]
         (let [{:keys [note velocity]} midi
               note-on (> velocity 0)
               op (if note-on conj #(remove #{%2} %1))
               down (op @v-down note)]
           (vreset! v-down (into [] down))
           (if-let [output (priority-fn down)]
             (rf result output)
             result)))))))

(defn midi-x-velo
  "Returns a stateful transducer that maps midi events to midi velocities,
  retriggering if retrigger is truthful"
  [retrigger]
  (fn [rf]
    (let [v-down-count (volatile! 0)]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result midi]
         (let [{:keys [type velocity]} midi
               note-on (and (= :note-on type) (> velocity 0))
               prev-down-count @v-down-count]
           (vswap! v-down-count (if note-on inc dec))
           (if (or (and note-on retrigger (> 1 prev-down-count))
                   (and note-on (= 0 prev-down-count))
                   (and (not note-on) (= 1 prev-down-count)))
             (rf result velocity)
             result)))))))

(def midi-x-gate
  "Naive monophonic algorithm, outputs [0, 1)"
  (comp
    (midi-x-velo true)
    (map #(/ % 128))))

(defmethod chan/make-transducer ::note-x-hz [_ _ ]
  (comp (map ::chan/input) (map :value) (map note->hz)))
(defmethod chan/make-transducer ::midi-x-note [_ _]
  (comp (map ::chan/input) (midi-x-note last)))
(defmethod chan/make-transducer ::midi-x-gate [_ _]
  (comp (map ::chan/input) midi-x-gate))

(defn map-to-range [x in-min in-max out-min out-max]
  (+ out-min (* (- out-max out-min)
                (/ (- x in-min) in-max))))

(defmethod chan/make-transducer ::midi-x-ctrl [_ _]
  (comp
    (filter #(= (:note %) (::note (::chan/input %))))
    (map #(map-to-range (:velocity (::chan/input %))
                        0 127
                        (::min %) (::max %)))))

;;

(def msg-type
  {144 :note-on
   128 :note-off
   224 :bend
   176 :ctrl})

(defn event->msg
  "Converts a js MIDIMessageEvent into a midi message"
  [e]
  (let [js-arr (.from js/Array (.-data e))
        [status note velocity] (js->clj js-arr)]
    {:type (msg-type (bit-and status 0xf0))
     :note note
     :velocity velocity}))

(def event-x-msg
  (comp
    (filter #(= 3 (.-length (.-data %))))
    (map event->msg)))

(defn msg->event
  "This is probably wrong"
  [{:keys [type note velocity]}]
  (.from js/Array [type note velocity]))

(defn midi-in-chan
  "Returns a mult'd chan of midi messages from a js MIDIInput"
  [midi-in]
  (let [c (async/chan 1 event-x-msg)]
    (set! (.-onmidimessage midi-in)
          (partial async/put! c))
    (async/mult c)))

(defn midi-out-chan
  "Returns a chan that passes midi messages to a MIDIOutput"
  [midi-out]
  (let [c (async/chan 1 (map msg->event))]
    (async/go-loop []
      (let [msg (async/<! c)]
        (.send midi-out msg)
        (recur)))
    c))

(defn- maplike->seq
  "The Web MIDI Api uses 'maplike' for its MIDIInputMap and MIDIOutputMap"
  [m]
  (js->clj (.from js/Array (.values m))))

(defn- port-map
  "Maps port name to a channel that sends/receives on that port"
  [ports-maplike chan-fn]
  (into {} (map (juxt #(.-name %) chan-fn)
                (maplike->seq ports-maplike))))

(defn- ports [midi-access]
  {::ins (port-map (.-inputs midi-access) midi-in-chan)
   ::outs (port-map (.-outputs midi-access) midi-out-chan)})

(defn make-ctx [cb]
  (.then (.requestMIDIAccess js/navigator)
         (fn [midi-access]
           (cb (ports midi-access)))))

;;

(defn midi-in [name]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::midi-in
     ::input-name name}
    {}))

(defn note [in]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::midi-x-note}
    {::chan/input [in]}))

(defn hz [note-in]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::note-x-hz}
    {::chan/input [note-in]}))

(defn gate [in]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::midi-x-gate}
    {::chan/input [in]}))

(defn ctrl
  ([in note] (ctrl in note 0 1))
  ([in note min max]
   (synthdef/synthdef
     {::synthdef/node-type ::chan/chan-node
      ::chan/chan-node-type ::chan/transducer
      ::chan/xform ::midi-x-ctrl}
     {::chan/input [in]
      ::note        [note]
      ::min        [min]
      ::max        [max]})))
