// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.popup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('fugue.ide.editor');
fugue.ide.popup.mini_buffer = (function fugue$ide$popup$mini_buffer(options,on_esc,on_submit){
var filtered = reagent.core.atom.call(null,options);
var highlighted = reagent.core.atom.call(null,(0));
return ((function (filtered,highlighted){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup.focused","div.popup.focused",1034008686),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.editor.editor,"","",true,((function (filtered,highlighted){
return (function (text){
return cljs.core.reset_BANG_.call(null,filtered,cljs.core.filter.call(null,((function (filtered,highlighted){
return (function (p1__18523_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__18523_SHARP_,text);
});})(filtered,highlighted))
,options));
});})(filtered,highlighted))
,((function (filtered,highlighted){
return (function (){
return cljs.core.List.EMPTY;
});})(filtered,highlighted))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),"base16-ocean",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),({"Esc": on_esc, "Up": ((function (filtered,highlighted){
return (function (){
return cljs.core.swap_BANG_.call(null,highlighted,((function (filtered,highlighted){
return (function (p1__18524_SHARP_){
var x__4219__auto__ = (0);
var y__4220__auto__ = (p1__18524_SHARP_ - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});})(filtered,highlighted))
);
});})(filtered,highlighted))
, "Down": ((function (filtered,highlighted){
return (function (){
return cljs.core.swap_BANG_.call(null,highlighted,((function (filtered,highlighted){
return (function (p1__18525_SHARP_){
var x__4222__auto__ = (cljs.core.count.call(null,cljs.core.deref.call(null,filtered)) - (1));
var y__4223__auto__ = (p1__18525_SHARP_ + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(filtered,highlighted))
);
});})(filtered,highlighted))
, "Tab": ((function (filtered,highlighted){
return (function (cm){
cm.setValue(cljs.core.nth.call(null,cljs.core.deref.call(null,filtered),cljs.core.deref.call(null,highlighted)));

return cm.setCursor(cm.lineCount(),(0));
});})(filtered,highlighted))
, "Enter": ((function (filtered,highlighted){
return (function (){
return on_submit.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,filtered),cljs.core.deref.call(null,highlighted)));
});})(filtered,highlighted))
})], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,filtered)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),cljs.core.deref.call(null,highlighted)], null),(function (){var iter__4523__auto__ = ((function (filtered,highlighted){
return (function fugue$ide$popup$mini_buffer_$_iter__18526(s__18527){
return (new cljs.core.LazySeq(null,((function (filtered,highlighted){
return (function (){
var s__18527__$1 = s__18527;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18527__$1);
if(temp__5720__auto__){
var s__18527__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18527__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18527__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18529 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18528 = (0);
while(true){
if((i__18528 < size__4522__auto__)){
var vec__18530 = cljs.core._nth.call(null,c__4521__auto__,i__18528);
var i = cljs.core.nth.call(null,vec__18530,(0),null);
var option = cljs.core.nth.call(null,vec__18530,(1),null);
cljs.core.chunk_append.call(null,b__18529,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,highlighted)))?"minibuffer-selected":"")], null),option], null));

var G__18536 = (i__18528 + (1));
i__18528 = G__18536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18529),fugue$ide$popup$mini_buffer_$_iter__18526.call(null,cljs.core.chunk_rest.call(null,s__18527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18529),null);
}
} else {
var vec__18533 = cljs.core.first.call(null,s__18527__$2);
var i = cljs.core.nth.call(null,vec__18533,(0),null);
var option = cljs.core.nth.call(null,vec__18533,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,highlighted)))?"minibuffer-selected":"")], null),option], null),fugue$ide$popup$mini_buffer_$_iter__18526.call(null,cljs.core.rest.call(null,s__18527__$2)));
}
} else {
return null;
}
break;
}
});})(filtered,highlighted))
,null,null));
});})(filtered,highlighted))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,filtered)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul>li","ul>li",819311387),"no results"], null))], null);
});
;})(filtered,highlighted))
});
fugue.ide.popup.shortcuts_popup = (function fugue$ide$popup$shortcuts_popup(options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup.focused>ul","div.popup.focused>ul",-437545703),(function (){var iter__4523__auto__ = (function fugue$ide$popup$shortcuts_popup_$_iter__18537(s__18538){
return (new cljs.core.LazySeq(null,(function (){
var s__18538__$1 = s__18538;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18538__$1);
if(temp__5720__auto__){
var s__18538__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18538__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18538__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18540 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18539 = (0);
while(true){
if((i__18539 < size__4522__auto__)){
var vec__18541 = cljs.core._nth.call(null,c__4521__auto__,i__18539);
var key = cljs.core.nth.call(null,vec__18541,(0),null);
var name = cljs.core.nth.call(null,vec__18541,(1),null);
cljs.core.chunk_append.call(null,b__18540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null));

var G__18547 = (i__18539 + (1));
i__18539 = G__18547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18540),fugue$ide$popup$shortcuts_popup_$_iter__18537.call(null,cljs.core.chunk_rest.call(null,s__18538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18540),null);
}
} else {
var vec__18544 = cljs.core.first.call(null,s__18538__$2);
var key = cljs.core.nth.call(null,vec__18544,(0),null);
var name = cljs.core.nth.call(null,vec__18544,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),fugue$ide$popup$shortcuts_popup_$_iter__18537.call(null,cljs.core.rest.call(null,s__18538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.first,options));
})()], null);
});

//# sourceMappingURL=popup.js.map?rel=1611088689084
