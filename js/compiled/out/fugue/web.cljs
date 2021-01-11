(ns fugue.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [fugue.bootstrap :as bootstrap]
            [fugue.ide :as ide]))

(defn ide []
  [ide/ide bootstrap/eval-str])

(defn app [] [ide])

(defn -main []
  (enable-console-print!)
  (rdom/render [app] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)