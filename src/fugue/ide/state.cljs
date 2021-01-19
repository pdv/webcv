(ns fugue.ide.state
  (:require [fugue.ide.layout :as layout]
            [clojure.set :refer [rename-keys]]))

(defn init-state [init-files]
  {::layout '(1)
   ::active 1
   ::prev nil
   ::windows {1 "fugue.user"}
   ::key-seq nil
   ::shortcuts {}
   ::actions {}
   ::minibuffer nil
   ::toggles {:vim true
              :line-numbers false}
   ::files (merge init-files {"fugue.user" "(ns fugue.user)\n\n(+ 1 2)"})})

(defn next-window-id [state]
  (first (filter #(not (contains? (::windows state) %)) (range 1 10))))

(defn in-popup? [state]
  (::key-seq state))

(defn in-minibuffer? [state]
  (::minibuffer state))

(defn in-shortcuts? [state]
  (and (in-popup? state) (not (in-minibuffer? state))))

(defn open-popup [state]
  (assoc state ::key-seq []))

(defn close-popup [state]
  (-> state
      (assoc ::key-seq nil)
      (assoc ::minibuffer nil)))

(defn get-toggle [state name]
  (get-in state [::toggles name]))

(defn flip-toggle [state name]
  (-> state
      (close-popup)
      (update-in [::toggles name] not)))

(defn activate [state id]
  (-> state
      (assoc ::prev (::active state))
      (assoc ::active (if (contains? (::windows state) id)
                        id
                        (::active state)))
      (close-popup)))

(defn go-back [state]
  (activate state (::prev state)))

(defn active-file-name [state]
  (get-in state [::windows (::active state)]))

(defn rename-active-file [state new-name]
  (-> state
      (assoc-in [::windows (::active state)] new-name)
      (update ::files rename-keys {(active-file-name state) new-name})))

(defn file-contents [state name]
  (get-in state [::files name]))

(defn active-file [state]
  (file-contents state (active-file-name state)))

(defn open-file-in-active-window [state name]
  (-> state
      (assoc-in [::windows (::active state)] name)
      (close-popup)))

(defn open-file [state name direction]
  (let [id (next-window-id state)]
    (-> state
        (assoc-in [::windows id] name)
        (update ::layout layout/insert-node direction (::active state) id)
        (activate id))))

(defn split [state direction]
  (open-file state (active-file-name state) direction))

(defn write-file [state name value]
  (assoc-in state [::files name] value))

(defn kill-window [state id]
  (-> state
      (update ::layout layout/remove-node id)
      (update ::windows dissoc id)))

(defn kill-active-window [state]
  (-> state
      (kill-window (::active state))
      (activate (::prev state))))

(defn popup-menu [state]
  (->> (get-in (::shortcuts state) (::key-seq state))
       (filter (comp string? first))
       (map #(vector (first %) (or (::group-name (second %))
                                   (clj->js (::action-name (second %))))))))

(defn add-shortcut-group [state path name]
  (assoc-in state (cons ::shortcuts (conj path ::group-name)) name))

(defn add-shortcut [state path action-name & args]
  (assoc-in state (cons ::shortcuts path) {::action-name action-name
                                           ::args args}))

(defn add-interactive-shortcut [state path action-name arg-type]
  (assoc-in state (cons ::shortcuts path) {::action-name action-name
                                           ::interactive-arg-type arg-type}))

(defn add-action [state action-name action]
  (assoc-in state [::actions action-name] action))

(defn perform-action [state name & args]
  (apply (get-in state [::actions (keyword name)]) args))

(defn minibuffer-options [state]
  (case (get-in state [::minibuffer ::interactive-arg-type])
    :action (map clj->js (keys (::actions state)))
    :file (keys (::files state))
    []))

(defn on-minibuffer-submit [state value]
  (let [action-name (get-in state [::minibuffer ::action-name])]
    (perform-action state action-name value)))

(defn on-key [state key cb]
  (let [new-seq (conj (::key-seq state) key)
        shortcut (get-in (::shortcuts state) new-seq)]
    (cond
      ;; open popup
      (and (= [" "] new-seq) (not (in-popup? state)))
      (cb open-popup)
      ;; another menu
      (::group-name shortcut)
      (cb update-in [::key-seq] conj key)
      ;; no action, close popup
      (nil? shortcut)
      (cb close-popup)
      ;;
      (::interactive-arg-type shortcut)
      (cb assoc ::minibuffer shortcut)
      :else
      (let [{::keys [action-name args]} shortcut]
        (apply perform-action state action-name args)))))

(defn layout [state window-fn]
  [layout/container
   (layout/map-values
     (fn [id]
       (let [filename (get-in state [::windows id])
             value (get-in state [::files filename])
             active (and (= id (::active state))
                         (not (in-popup? state)))]
         (window-fn id filename value active)))
     (::layout state))])

(defn on-upload [state name file]
  (-> state
      (write-file name file)
      (open-file name :after)))