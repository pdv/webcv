(ns webcv.api
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.midi :as midi]
            [webcv.keyboard :as keyboard]
            [webcv.feedback :as feedback]
            [webcv.envelope :as envelope]
            [webcv.metronome :as metronome]
            [webcv.ctx-ctrls :as ctrls]
            [webcv.components :as components]))

(def ratom r/atom)

(def make-synth synthdef/make-synth)

(def out audio/out)
(def gain audio/gain)
(def mix audio/mix)
(def const audio/const)
(def sin-osc audio/sin-osc)
(def saw audio/saw)
(def square audio/square)
(def tri-osc audio/tri-osc)
(def lfo audio/lfo)
(def lpf audio/lpf)
(def hpf audio/hpf)
(def bpf audio/bpf)

(def hz midi/hz)
(def gate midi/gate)
(def ctrl midi/ctrl)

(def dub-delay feedback/dub-delay)

(def kb keyboard/kb)

(def adsr envelope/adsr)
(def perc envelope/perc)
(def env-gen envelope/env-gen)

(def metro metronome/metro)

(def audio-ctx-ctrl ctrls/audio-controls)
(def midi-ctx-ctrl ctrls/midi-controls)

(def slider components/slider)

(def init-forms
  ["(defonce audio-ctx (ratom nil))"
   "(defonce midi-ctx (ratom nil))"
   "(defn render [synthdef]"
   "  (make-synth (merge @audio-ctx @midi-ctx) synthdef))"
   "[:div"
   "  [audio-ctx-ctrl audio-ctx]"
   "  [midi-ctx-ctrl midi-ctx]]"])

(def init-text
  (string/join "\n" init-forms))

(defn demo-synth []
  (-> (saw 110)
      (gain (env-gen (adsr 0.1 0.3 0.3 0.4) (metro 100)))
      (out)))

(def demo-forms
  [
   "(defonce nodes (ratom nil))"
   "[:div"
   "  [:button"
   "   {:on-click #(reset! nodes (render (demo-synth)))}"
   "   \"run\"]]"
   ])

(def demo-text
  (string/join "\n" demo-forms))

