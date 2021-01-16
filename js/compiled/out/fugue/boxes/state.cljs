(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes   '(1)
   :active  1
   :next-id 2
   :files   {1 "(+ 1 23)"}
   :key-seq nil})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn activate [state id]
  (-> state
      (assoc :active id)
      (assoc :key-seq [])))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes b/insert :after (:active state) (:next-id state))
      (activate (:next-id state))
      (update :next-id inc)))

(defn window-count [state]
  (- (:next-id state) 1))

(defn multiple-windows? [state]
  (< 1 (window-count state)))

(defn kill-window [state id]
  (-> state
      (update :boxes b/remove id)
      (activate (dec id))))

(defn kill-active-window [state]
  (kill-window state (:active state)))

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] {"b" "eval current buffer"}
   [" " "w"] {"x" "kill buffer and window"}})

(defn eval-action [eval-state]
  (fn [state cb]
    (let [[source settings] ((juxt current-buffer-text eval-settings) state)
          on-result (fn [result] (cb #(on-eval % result)))]
      (cljs.js/eval-str eval-state source nil settings on-result))))

(defn default-keymap [eval-state]
  {[" " "w" "x"] (fn [_ cb]
                   (cb kill-active-window))
   [" " "e" "b"] (eval-action eval-state)})

