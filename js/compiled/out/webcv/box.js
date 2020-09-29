// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.box');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('cljs.repl');
webcv.box.editor = (function webcv$box$editor(init,on_change){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = ({"mode": "clojure", "lineNumbers": true});
var cm = CodeMirror.fromTextArea(node,settings);
cm.on("change",((function (node,settings,cm){
return (function (p1__27091_SHARP_){
return on_change.call(null,p1__27091_SHARP_.getValue());
});})(node,settings,cm))
);

return setTimeout(((function (node,settings,cm){
return (function (){
return on_change.call(null,init);
});})(node,settings,cm))
,(5));
})], null));
});
webcv.box.top_text = (function webcv$box$top_text(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
webcv.box.output_box = (function webcv$box$output_box(p__27092){
var map__27093 = p__27092;
var map__27093__$1 = (((((!((map__27093 == null))))?(((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var value = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.vector_QMARK_.call(null,value)){
return value;
} else {
if(cljs.core.truth_(error)){
return webcv.box.top_text.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)));
} else {
return webcv.box.top_text.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27095_27099 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27096_27100 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27097_27101 = true;
var _STAR_print_fn_STAR__temp_val__27098_27102 = ((function (_STAR_print_newline_STAR__orig_val__27095_27099,_STAR_print_fn_STAR__orig_val__27096_27100,_STAR_print_newline_STAR__temp_val__27097_27101,sb__4661__auto__,map__27093,map__27093__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27095_27099,_STAR_print_fn_STAR__orig_val__27096_27100,_STAR_print_newline_STAR__temp_val__27097_27101,sb__4661__auto__,map__27093,map__27093__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27097_27101;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27098_27102;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27096_27100;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27095_27099;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

}
}
});
webcv.box.box = (function webcv$box$box(init,eval_fn){
var output = reagent.core.atom.call(null,null);
var cb = ((function (output){
return (function (in_str){
return eval_fn.call(null,in_str,cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(output))
;
return ((function (output,cb){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-top","div.box-top",-2099572035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.output_box,cljs.core.deref.call(null,output)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-bottom","div.box-bottom",-1627591847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.editor,init,cb], null)], null)], null);
});
;})(output,cb))
});

//# sourceMappingURL=box.js.map?rel=1601406057089
