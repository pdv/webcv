(ns webcv.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [webcv.engine :as engine]))

(defn v [volts] (/ volts 10))

(defn greeting [message]
  [:h1 message])

(defn main []
  (enable-console-print!)
  (engine/reset!)
  (rdom/render [greeting "howdy"] (js/document.getElementById "app")))

(main)

