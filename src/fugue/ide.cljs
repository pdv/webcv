(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.api :refer [cantor-demo]]
            [fugue.components :refer [picker]]
            [fugue.editor :refer [editor output-box]]))

(def demos
  {"cantor harmonies" cantor-demo})

(defn welcome [reset-input]
  (let [selected-demo (r/atom (first (keys demos)))]
    (fn []
      [:div
       [:h2 "welcome to fugue"]
       [picker selected-demo (keys demos)]
       [:button {:on-click #(reset-input (get demos @selected-demo))}
        "load demo"]
       [:p "click 'eval' to evaluate the buffer"]
       [:p "then click 'render' to display the ui"]])))

(defn ide [eval-fn]
  (let [input (r/atom "")
        selected (r/atom "")
        render-out (r/atom nil)
        eval-out (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (if-let [component (:value @render-out)]
          component
          [welcome (partial reset! input)])]
       [:div.ide-right
        [editor @input
         (partial reset! input)
         (partial reset! selected)
         #(eval-fn @selected (partial reset! eval-out))
         {:keyMap (if @vim-on "vim" "default")}]
        [:div.ide-toolbar
         [:button
          {:on-click #(eval-fn @input (partial reset! eval-out))}
          "eval"]
         [:button
          {:on-click #(eval-fn @selected (partial reset! eval-out))
           :disabled (empty? @selected)}
          "eval selection (ctrl-shift-space)"]
         [:button
          {:on-click #(reset! render-out @eval-out)
           :disabled (not (vector? (:value @eval-out)))}
          "render"]
         [:button
          {:on-click #(swap! vim-on not)}
          (str (if @vim-on "disable" "enable") " vim bindings")]]
        [output-box @eval-out]]])))
