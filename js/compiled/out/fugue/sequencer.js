// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.sequencer');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('fugue.synthdef');
goog.require('fugue.chan');
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.sequencer","sequencer","fugue.sequencer/sequencer",1466842645),(function (_,___$1){
return (function (rf){
var v_index = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (v_index){
return (function() {
var G__34819 = null;
var G__34819__0 = (function (){
return rf.call(null);
});
var G__34819__1 = (function (result){
return rf.call(null,result);
});
var G__34819__2 = (function (result,p__34816){
var map__34817 = p__34816;
var map__34817__$1 = (((((!((map__34817 == null))))?(((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var sequence = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword("fugue.sequencer","sequence","fugue.sequencer/sequence",66776449));
var gate = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword("fugue.sequencer","gate","fugue.sequencer/gate",-1803738846));
cljs.core._vreset_BANG_.call(null,v_index,(cljs.core._deref.call(null,v_index) + (1)));

return rf.call(null,result,cljs.core.assoc.call(null,gate,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,sequence,cljs.core.mod.call(null,cljs.core.deref.call(null,v_index),cljs.core.count.call(null,sequence)))));
});
G__34819 = function(result,p__34816){
switch(arguments.length){
case 0:
return G__34819__0.call(this);
case 1:
return G__34819__1.call(this,result);
case 2:
return G__34819__2.call(this,result,p__34816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34819.cljs$core$IFn$_invoke$arity$0 = G__34819__0;
G__34819.cljs$core$IFn$_invoke$arity$1 = G__34819__1;
G__34819.cljs$core$IFn$_invoke$arity$2 = G__34819__2;
return G__34819;
})()
;})(v_index))
});
}));
fugue.sequencer.sequencer = (function fugue$sequencer$sequencer(sequence,gate){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.sequencer","sequencer","fugue.sequencer/sequencer",1466842645)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sequencer","gate","fugue.sequencer/gate",-1803738846),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gate], null),new cljs.core.Keyword("fugue.sequencer","sequence","fugue.sequencer/sequence",66776449),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sequence], null)], null));
});

//# sourceMappingURL=sequencer.js.map?rel=1610147342144