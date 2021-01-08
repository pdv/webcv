(ns fugue.chords)

(def chord-names
  {:dim7 #{0 3 6 9}
   :min7 #{0 3 7 10}
   :min9 #{0 2 3 7 10}
   :7 #{0 4 7 10}
   :7b9 #{0 1 4 7 10}
   :maj7 #{0 4 7 11}
   :maj9 #{0 2 4 7 11}
   :aug #{0 4 8}
   :maj6 #{0 4 7 9}})

(def note-names [:C :Db :D :Eb :E :F :F# :G :Ab :A :Bb :B])

(defn possible-chords [notes]
  (into #{}
  (mapcat (fn [root]
            (let [relative (map #(mod (- % root) 12) notes)]
              (->> chord-names
                   (filter (fn [[_ chord]]
                             (every? #(contains? chord %) relative)))
                   (map (fn [[name _]]
                          [(nth note-names (mod root 12)) name])))))
          notes)))