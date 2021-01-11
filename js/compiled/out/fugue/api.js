// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.api');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs.repl');
goog.require('reagent.core');
goog.require('fugue.synthdef');
goog.require('fugue.audio');
goog.require('fugue.buffer');
goog.require('fugue.midi');
goog.require('fugue.keyboard');
goog.require('fugue.feedback');
goog.require('fugue.envelope');
goog.require('fugue.metronome');
goog.require('fugue.sequencer');
goog.require('fugue.sampler');
goog.require('fugue.convolver');
goog.require('fugue.ctx_ctrls');
goog.require('fugue.midi_monitor');
goog.require('fugue.colors');
goog.require('fugue.cantor');
goog.require('fugue.components');
fugue.api.ratom = reagent.core.atom;
fugue.api.make_synth = fugue.synthdef.make_synth;
fugue.api.out = fugue.audio.out;
fugue.api.in$ = fugue.audio.in$;
fugue.api.gain = fugue.audio.gain;
fugue.api.mix = fugue.audio.mix;
fugue.api.const$ = fugue.audio.const$;
fugue.api.sin_osc = fugue.audio.sin_osc;
fugue.api.saw = fugue.audio.saw;
fugue.api.square = fugue.audio.square;
fugue.api.tri_osc = fugue.audio.tri_osc;
fugue.api.lfo = fugue.audio.lfo;
fugue.api.lpf = fugue.audio.lpf;
fugue.api.hpf = fugue.audio.hpf;
fugue.api.bpf = fugue.audio.bpf;
fugue.api.panner = fugue.audio.panner;
fugue.api.compressor = fugue.audio.compressor;
fugue.api.hz = fugue.midi.hz;
fugue.api.gate = fugue.midi.gate;
fugue.api.ctrl = fugue.midi.ctrl;
fugue.api.dub_delay = fugue.feedback.dub_delay;
fugue.api.kb = fugue.keyboard.kb;
fugue.api.adsr = fugue.envelope.adsr;
fugue.api.perc = fugue.envelope.perc;
fugue.api.pulse = fugue.envelope.pulse;
fugue.api.slide = fugue.envelope.slide;
fugue.api.env_gen = fugue.envelope.env_gen;
fugue.api.bpm = fugue.metronome.bpm;
fugue.api.metro = fugue.metronome.metro;
fugue.api.sequencer = fugue.sequencer.sequencer;
fugue.api.sampler = fugue.sampler.sampler;
fugue.api.conv = fugue.convolver.convolver;
fugue.api.make_midi_ctx = fugue.midi.make_ctx;
fugue.api.midi_context_manager = fugue.ctx_ctrls.midi_ctx_ctrls;
fugue.api.midi_input_monitor = fugue.midi_monitor.input_monitor;
fugue.api.audio_ctx_ctrls = fugue.ctx_ctrls.audio_ctx_ctrls;
fugue.api.buffer_ctrl = fugue.ctx_ctrls.buffer_ctrl;
fugue.api.slider = fugue.components.slider;
fugue.api.picker = fugue.components.picker;
fugue.api.format = goog.string.format;
fugue.api.make_renderer = (function fugue$api$make_renderer(actx_atom,mctx_atom,buffer_cache_atom){
return (function (synthdef){
var ctx = cljs.core.merge.call(null,cljs.core.deref.call(null,actx_atom),cljs.core.deref.call(null,mctx_atom),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.deref.call(null,buffer_cache_atom)], null));
return fugue.api.make_synth.call(null,ctx,synthdef);
});
});
fugue.api.cantor_demo = "(defn note->hz [note]\n  (as-> note v\n    (- v 69.0)\n    (/ v 12)\n    (js/Math.pow 2.0 v)\n    (* v 440.0)))\n\n(defn hz->note [freq]\n  (as-> freq v\n    (/ v 440)\n    (.log2 js/Math v)\n    (* v 12)\n    (+ v 69)))\n\n(def note-names [\"C\" \"Db\" \"D\" \"Eb\" \"E\" \"F\" \"F#\" \"G\" \"Ab\" \"A\" \"Bb\" \"B\"])\n\n(defn cantor [root harmonics color-fn]\n  (let [root-hz (note->hz root)]\n    [:table\n     {:style {:border-collapse \"collapse\"}}\n     [:thead\n      (for [i (range harmonics)] [:th (if (not= 0 i) i)])\n      (for [denominator (range 1 harmonics)]\n        [:tr\n         [:th denominator]\n         (for [numerator (range 1 harmonics)\n               :let [freq (/ (* root-hz numerator) denominator)\n                     note (hz->note freq)\n                     closest (.round js/Math note)]]\n           [:td\n            {:style {:backgroundColor (color-fn note)\n                     :height \"60px\" :width \"60px\"\n                     :border \"1px solid black\"\n                     :text-align \"center\"}}\n            (str (nth note-names (mod closest 12)) (int (/ closest 12)))\n            [:br]\n            (format \"%.2f\" (- note root))\n            [:br]\n            (format \"%.2f\" freq)])])]]))\n\n(def color-fns\n  {\"none\" (constantly \"#fff\")\n   \"cents\" colors/color-by-cents\n   \"note\" colors/color-by-note})\n\n(defn component []\n  (let [root (ratom 60)\n        harmonics (ratom 8)\n        colors (ratom \"none\")]\n    (fn []\n      [:div\n        \"Root\"\n        [slider root 0 120]\n        \"Harmonics\"\n        [slider harmonics 1 30]\n        \"Colors\"\n        [picker colors (keys color-fns)]\n        [cantor @root @harmonics (get color-fns @colors)]])))\n\n[component]\n";
fugue.api.midi_monitor_demo = "\n(def names\n  [[\"C\" 0] [\"G\" 7] [\"D\" 2] [\"A\" 9] [\"E\" 4] [\"B\" 11]\n   [\"F#\" 6] [\"Db\" 1] [\"Ab\" 8] [\"Eb\" 3] [\"Bb\" 10] [\"F\" 5]])\n\n(defn cof [midi-notes]\n  (let [intervals (into #{} (map #(mod % 12) midi-notes))]\n    [:div.cof-container>div.cof>ul\n    (for [[name interval] names]\n      [:li>i\n       {:class (if (contains? intervals interval) \"active\" \"inactive\")}\n       name])]))\n\n(defn component []\n  (let [midi-ctx (ratom nil)\n        notes (ratom #{})]\n    (fn []\n      [:div\n        (if-let [mctx @midi-ctx]\n          [midi-input-monitor @midi-ctx (partial reset! notes)]\n          [:button {:on-click #(midi/make-ctx (partial reset! midi-ctx))}\n            (str (if @midi-ctx \"reset\" \"create\") \" midi context\")])\n        [cof @notes]])))\n\n[component]\n";
fugue.api.mary_had_a_little_synth = (function fugue$api$mary_had_a_little_synth(tempo,decay,cutoff){
var m = fugue.api.metro.call(null,tempo);
var freq_gate = fugue.api.hz.call(null,fugue.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(62),(60),(62),(64),(64),(64),(64)], null),m));
var freq_env = fugue.api.env_gen.call(null,fugue.api.slide.call(null,0.01),freq_gate);
var gain_gate = fugue.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(0)], null),m);
var gain_env = fugue.api.env_gen.call(null,fugue.api.perc.call(null,0.1,decay),gain_gate,0.5);
return fugue.api.out.call(null,fugue.api.panner.call(null,fugue.api.lpf.call(null,fugue.api.gain.call(null,fugue.api.saw.call(null,freq_env),gain_env),cutoff,(2)),(0)));
});
fugue.api.aww = (function fugue$api$aww(){
return fugue.api.out.call(null,fugue.api.sampler.call(null,"pumpthat.wav",fugue.api.metro.call(null,(2000)),(0)));
});
fugue.api.demo_text = "hello";

//# sourceMappingURL=api.js.map?rel=1610334750958
