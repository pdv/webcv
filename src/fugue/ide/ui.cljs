(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.ide.util :refer [log]]
            [fugue.ide.popup :as popup]
            [fugue.ide.actions :as a]
            [fugue.ide.editor :as editor]
            [fugue.ide.file :as file]
            [fugue.ide.state :as s]))

(defn in-text-area? []
  (= "TEXTAREA" (.. js/document -activeElement -tagName)))

(defn windows-layout [state {:keys [on-box-click on-text-change on-shortcut]}]
  (s/layout
    state
    (fn [id name value active]
      (print (::s/toggles state))
      [:div {:class-name (if active "window focused" "window")
             :on-mouse-down #(on-box-click id)}
       (cond
         (vector? value) [:div.output value]
         ;;
         (string? value)
         [editor/editor value active (partial on-text-change id) #()
          {:keyMap (if (s/get-toggle state :vim) "vim" "default")
           :theme "base16-ocean"
           :lineNumbers (s/get-toggle state :line-numbers)
           :extraKeys #js {"Shift-Ctrl-Space" on-shortcut}}]
         ;;
         (map? value)
         [:div.output>p.value-box
          (str (or (:value value)
                   (if-let [error (:error value)]
                     (.. error -cause -message))))]
         :else
         [:div.output>p.value-box (str value)])
       [:div.status-bar
        [:a id]
        [:span name]]])))

(defn add-jumps [state swap-cb]
  (reduce (fn [acc i]
            (s/add-shortcut acc [(str i)] [:jump-to-window i]))
          (s/add-action state :jump-to-window (partial swap-cb s/activate))
          (range 1 10)))

(defn setup-actions [state eval-state is-file-upload]
  (-> @state
      (add-jumps (partial swap! state))
      (s/add-shortcut-group ["t"] "toggle")
      (s/add-shortcut ["t" "v"] [:flip-toggle :vim])
      (s/add-shortcut ["t" "l"] [:flip-toggle :line-numbers])
      (s/add-action :flip-toggle (partial swap! state s/flip-toggle))
      (s/add-shortcut-group ["w"] "window")
      (s/add-shortcut ["w" "x"] :kill-active-window)
      (s/add-action :kill-active-window
                    #(swap! state s/kill-active-window))
      (s/add-shortcut-group ["e"] "eval")
      (s/add-shortcut ["e" "w"] :eval-active-window)
      (s/add-action :eval-active-window
                    #(a/eval-action @state eval-state (partial swap! state)))
      (s/add-shortcut-group ["f"] "file")
      (s/add-shortcut ["f" "d"] :file-download)
      (s/add-action :file-download
                    #(apply file/download ((juxt s/active-window-name s/active-window-file-contents) @state)))
      (s/add-shortcut ["f" "u"] :file-upload)
      (s/add-action :file-upload
                    (fn []
                      (print "here")
                      (reset! is-file-upload true)))))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom s/init-state)
        is-file-upload (r/atom false)]
    (defn on-key-down [e]
      (when-not (in-text-area?)
        (.preventDefault e)
        (s/on-key @state (.-key e) (partial swap! state))))
    (.addEventListener js/document "keydown" on-key-down)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state s/open-popup))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (reset! state (setup-actions state eval-state is-file-upload))
    (fn []
      [:div.ide
       [file/file-upload @is-file-upload (fn [name file]
                                           (reset! is-file-upload false)
                                           (swap! state s/on-upload name file))]
       [windows-layout
        @state
        {:on-box-click #(swap! state s/activate %)
         :on-text-change (partial swap! state s/write-file)
         :on-shortcut #(swap! state s/open-popup)}]
       (if (s/in-shortcuts? @state)
         [popup/shortcuts-popup (s/popup-menu @state)])
       (if (s/in-minibuffer? @state)
         [popup/mini-buffer
          (s/action-names @state)
          #(swap! state s/close-popup)
          (partial s/perform-action @state)])])))

