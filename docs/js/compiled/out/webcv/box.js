// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.box');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('cljs.repl');
goog.require('cljs.js');
webcv.box.editor = (function webcv$box$editor(init,on_change){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = ({"mode": "clojure", "lineNumbers": true});
var cm = CodeMirror.fromTextArea(node,settings);
cm.on("change",((function (node,settings,cm){
return (function (p1__34986_SHARP_){
return on_change.call(null,p1__34986_SHARP_.getValue());
});})(node,settings,cm))
);

return setTimeout(((function (node,settings,cm){
return (function (){
return on_change.call(null,init);
});})(node,settings,cm))
,(5));
})], null));
});
webcv.box.state = cljs.js.empty_state.call(null);
webcv.box.eval_settings = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"load","load",-1318641184),(function (p__34989,cb){
var map__34990 = p__34989;
var map__34990__$1 = (((((!((map__34990 == null))))?(((((map__34990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34990):map__34990);
var path = cljs.core.get.call(null,map__34990__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return window.fetch(["js/compiled/out/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".js"].join('')).then(((function (map__34990,map__34990__$1,path){
return (function (p1__34987_SHARP_){
return p1__34987_SHARP_.text();
});})(map__34990,map__34990__$1,path))
).then(((function (map__34990,map__34990__$1,path){
return (function (p1__34988_SHARP_){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),p1__34988_SHARP_], null));
});})(map__34990,map__34990__$1,path))
);
})], null);
webcv.box.evaluate = (function webcv$box$evaluate(source,cb){
return cljs.js.eval_str.call(null,webcv.box.state,source,null,webcv.box.eval_settings,cb);
});
webcv.box.top_text = (function webcv$box$top_text(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
webcv.box.output_box = (function webcv$box$output_box(p__34992){
var map__34993 = p__34992;
var map__34993__$1 = (((((!((map__34993 == null))))?(((((map__34993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34993):map__34993);
var value = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.vector_QMARK_.call(null,value)){
return value;
} else {
if(cljs.core.truth_(error)){
return webcv.box.top_text.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)));
} else {
return webcv.box.top_text.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34995_34999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34996_35000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34997_35001 = true;
var _STAR_print_fn_STAR__temp_val__34998_35002 = ((function (_STAR_print_newline_STAR__orig_val__34995_34999,_STAR_print_fn_STAR__orig_val__34996_35000,_STAR_print_newline_STAR__temp_val__34997_35001,sb__4661__auto__,map__34993,map__34993__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34995_34999,_STAR_print_fn_STAR__orig_val__34996_35000,_STAR_print_newline_STAR__temp_val__34997_35001,sb__4661__auto__,map__34993,map__34993__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34997_35001;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34998_35002;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34996_35000;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34995_34999;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

}
}
});
webcv.box.box = (function webcv$box$box(init){
var output = reagent.core.atom.call(null,null);
var cb = ((function (output){
return (function (in_str){
return webcv.box.evaluate.call(null,in_str,cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(output))
;
return ((function (output,cb){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-top","div.box-top",-2099572035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.output_box,cljs.core.deref.call(null,output)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-bottom","div.box-bottom",-1627591847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.editor,init,cb], null)], null)], null);
});
;})(output,cb))
});

//# sourceMappingURL=box.js.map?rel=1601261553613
