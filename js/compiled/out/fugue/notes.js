// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.notes');
goog.require('cljs.core');
fugue.notes.chords = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dim","dim",-497244536),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),(3)], null),new cljs.core.Keyword(null,"maj","maj",-2096718516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.Keyword(null,"aug","aug",-172132737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null);
fugue.notes.chord = (function fugue$notes$chord(root,name){
return cljs.core.reductions.call(null,cljs.core._PLUS_,root,cljs.core.cycle.call(null,fugue.notes.chords.call(null,name)));
});
fugue.notes.modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"maj","maj",-2096718516),(0),new cljs.core.Keyword(null,"dor","dor",1890307828),(1),new cljs.core.Keyword(null,"mix","mix",480842236),(4),new cljs.core.Keyword(null,"min","min",444991522),(5)], null);
fugue.notes.mode = (function fugue$notes$mode(root,name){
return cljs.core.reductions.call(null,cljs.core._PLUS_,root,cljs.core.drop.call(null,fugue.notes.modes.call(null,name),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null))));
});
fugue.notes.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"c#","c#",1780831315),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"d#","d#",-97310400),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"f#","f#",-734555085),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"g#","g#",604660353),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a#","a#",-1635132371),new cljs.core.Keyword(null,"b","b",1482224470)], null);
fugue.notes.intervals = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"M3","M3",1558535424),new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.Keyword(null,"M6","M6",-1118766484),new cljs.core.Keyword(null,"m6","m6",1005261460),new cljs.core.Keyword(null,"P5","P5",-891969450),new cljs.core.Keyword(null,"M7","M7",-303592298),new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.Keyword(null,"P4","P4",1692387000),new cljs.core.Keyword(null,"TT","TT",563424953),new cljs.core.Keyword(null,"M2","M2",-621079714),new cljs.core.Keyword(null,"m7","m7",-1570491073)],[(4),(3),(9),(8),(7),(11),(1),(5),(6),(2),(10)]);
fugue.notes.overtones = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(7),(0),(4),(7),(10),(0),(2),(4)], null);
fugue.notes.undertones = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(5),(0),(8),(5),(2),(0),(10),(8)], null);
fugue.notes.harmonics = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12),(19),(24),(28),(31),(34),(36),(38),(40)], null);

//# sourceMappingURL=notes.js.map?rel=1610381661204
