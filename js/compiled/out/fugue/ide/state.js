// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.state');
goog.require('cljs.core');
goog.require('fugue.ide.layout');
goog.require('clojure.set');
goog.require('clojure.string');
fugue.ide.state.init_state = (function fugue$ide$state$init_state(init_files){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064),new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053),new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),new cljs.core.Keyword("fugue.ide.state","toggles","fugue.ide.state/toggles",2117803982),new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346),new cljs.core.Keyword("fugue.ide.state","prev","fugue.ide.state/prev",1590915229),new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199)],[cljs.core.list((1)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(1),null,new cljs.core.PersistentArrayMap(null, 1, [(1),"fugue.user"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vim","vim",764723904),true,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),false], null),null,null,cljs.core.merge.call(null,init_files,new cljs.core.PersistentArrayMap(null, 1, ["fugue.user","(ns fugue.user)\n\n(+ 1 2)"], null))]);
});
fugue.ide.state.directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"above","above",-1286866470),null,new cljs.core.Keyword(null,"before","before",-1633692388),null,new cljs.core.Keyword(null,"below","below",-926774883),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
fugue.ide.state.next_window_id = (function fugue$ide$state$next_window_id(state){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15682_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986).cljs$core$IFn$_invoke$arity$1(state),p1__15682_SHARP_)));
}),cljs.core.range.call(null,(1),(10))));
});
fugue.ide.state.in_popup_QMARK_ = (function fugue$ide$state$in_popup_QMARK_(state){
return new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346).cljs$core$IFn$_invoke$arity$1(state);
});
fugue.ide.state.in_minibuffer_QMARK_ = (function fugue$ide$state$in_minibuffer_QMARK_(state){
return new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763).cljs$core$IFn$_invoke$arity$1(state);
});
fugue.ide.state.in_shortcuts_QMARK_ = (function fugue$ide$state$in_shortcuts_QMARK_(state){
var and__4120__auto__ = fugue.ide.state.in_popup_QMARK_.call(null,state);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,fugue.ide.state.in_minibuffer_QMARK_.call(null,state));
} else {
return and__4120__auto__;
}
});
fugue.ide.state.open_popup = (function fugue$ide$state$open_popup(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346),cljs.core.PersistentVector.EMPTY);
});
fugue.ide.state.close_popup = (function fugue$ide$state$close_popup(state){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346),null),new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),null);
});
fugue.ide.state.get_toggle = (function fugue$ide$state$get_toggle(state,name){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","toggles","fugue.ide.state/toggles",2117803982),name], null));
});
fugue.ide.state.flip_toggle = (function fugue$ide$state$flip_toggle(state,name){
return cljs.core.update_in.call(null,fugue.ide.state.close_popup.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","toggles","fugue.ide.state/toggles",2117803982),name], null),cljs.core.not);
});
fugue.ide.state.activate = (function fugue$ide$state$activate(state,id){
return fugue.ide.state.close_popup.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("fugue.ide.state","prev","fugue.ide.state/prev",1590915229),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053),((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986).cljs$core$IFn$_invoke$arity$1(state),id))?id:new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state))));
});
fugue.ide.state.go_back = (function fugue$ide$state$go_back(state){
return fugue.ide.state.activate.call(null,state,new cljs.core.Keyword("fugue.ide.state","prev","fugue.ide.state/prev",1590915229).cljs$core$IFn$_invoke$arity$1(state));
});
fugue.ide.state.active_file_name = (function fugue$ide$state$active_file_name(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state)], null));
});
fugue.ide.state.rename_active_file = (function fugue$ide$state$rename_active_file(state,new_name){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state)], null),new_name),new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199),clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([fugue.ide.state.active_file_name.call(null,state),new_name]));
});
fugue.ide.state.file_contents = (function fugue$ide$state$file_contents(state,name){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199),name], null));
});
fugue.ide.state.active_file = (function fugue$ide$state$active_file(state){
return fugue.ide.state.file_contents.call(null,state,fugue.ide.state.active_file_name.call(null,state));
});
fugue.ide.state.open_file = (function fugue$ide$state$open_file(state,name,direction){
var id = fugue.ide.state.next_window_id.call(null,state);
return fugue.ide.state.activate.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),id], null),name),new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064),fugue.ide.layout.insert_node,direction,new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state),id),id);
});
fugue.ide.state.split = (function fugue$ide$state$split(state,direction){
return fugue.ide.state.open_file.call(null,state,fugue.ide.state.active_file_name.call(null,state),direction);
});
fugue.ide.state.write_file = (function fugue$ide$state$write_file(state,name,value){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199),name], null),value);
});
fugue.ide.state.kill_window = (function fugue$ide$state$kill_window(state,id){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064),fugue.ide.layout.remove_node,id),new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),cljs.core.dissoc,id);
});
fugue.ide.state.kill_active_window = (function fugue$ide$state$kill_active_window(state){
return fugue.ide.state.activate.call(null,fugue.ide.state.kill_window.call(null,state,new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("fugue.ide.state","prev","fugue.ide.state/prev",1590915229).cljs$core$IFn$_invoke$arity$1(state));
});
fugue.ide.state.popup_menu = (function fugue$ide$state$popup_menu(state){
return cljs.core.map.call(null,(function (p1__15683_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__15683_SHARP_),(function (){var or__4131__auto__ = new cljs.core.Keyword("fugue.ide.state","group-name","fugue.ide.state/group-name",-1339069829).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15683_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var name = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15683_SHARP_)));
var args = clojure.string.join.call(null," ",new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15683_SHARP_)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('');
}
})()],null));
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.string_QMARK_,cljs.core.first),cljs.core.get_in.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346).cljs$core$IFn$_invoke$arity$1(state))));
});
fugue.ide.state.add_action = (function fugue$ide$state$add_action(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15687 = arguments.length;
var i__4731__auto___15688 = (0);
while(true){
if((i__4731__auto___15688 < len__4730__auto___15687)){
args__4736__auto__.push((arguments[i__4731__auto___15688]));

var G__15689 = (i__4731__auto___15688 + (1));
i__4731__auto___15688 = G__15689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fugue.ide.state.add_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fugue.ide.state.add_action.cljs$core$IFn$_invoke$arity$variadic = (function (state,name,arg_types){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),cljs.core.keyword.call(null,name)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294),name,new cljs.core.Keyword("fugue.ide.state","arg-types","fugue.ide.state/arg-types",-161306337),arg_types], null));
});

fugue.ide.state.add_action.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fugue.ide.state.add_action.cljs$lang$applyTo = (function (seq15684){
var G__15685 = cljs.core.first.call(null,seq15684);
var seq15684__$1 = cljs.core.next.call(null,seq15684);
var G__15686 = cljs.core.first.call(null,seq15684__$1);
var seq15684__$2 = cljs.core.next.call(null,seq15684__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15685,G__15686,seq15684__$2);
});

fugue.ide.state.add_shortcut_group = (function fugue$ide$state$add_shortcut_group(state,path,name){
return cljs.core.assoc_in.call(null,state,cljs.core.cons.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),cljs.core.conj.call(null,path,new cljs.core.Keyword("fugue.ide.state","group-name","fugue.ide.state/group-name",-1339069829))),name);
});
fugue.ide.state.add_shortcut = (function fugue$ide$state$add_shortcut(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15694 = arguments.length;
var i__4731__auto___15695 = (0);
while(true){
if((i__4731__auto___15695 < len__4730__auto___15694)){
args__4736__auto__.push((arguments[i__4731__auto___15695]));

var G__15696 = (i__4731__auto___15695 + (1));
i__4731__auto___15695 = G__15696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fugue.ide.state.add_shortcut.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fugue.ide.state.add_shortcut.cljs$core$IFn$_invoke$arity$variadic = (function (state,path,action_name,args){
return cljs.core.assoc_in.call(null,state,cljs.core.cons.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),path),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294),action_name,new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359),args], null));
});

fugue.ide.state.add_shortcut.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fugue.ide.state.add_shortcut.cljs$lang$applyTo = (function (seq15690){
var G__15691 = cljs.core.first.call(null,seq15690);
var seq15690__$1 = cljs.core.next.call(null,seq15690);
var G__15692 = cljs.core.first.call(null,seq15690__$1);
var seq15690__$2 = cljs.core.next.call(null,seq15690__$1);
var G__15693 = cljs.core.first.call(null,seq15690__$2);
var seq15690__$3 = cljs.core.next.call(null,seq15690__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15691,G__15692,G__15693,seq15690__$3);
});

fugue.ide.state.minibuffer_options = (function fugue$ide$state$minibuffer_options(state){
var map__15697 = new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763).cljs$core$IFn$_invoke$arity$1(state);
var map__15697__$1 = (((((!((map__15697 == null))))?(((((map__15697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15697):map__15697);
var action_name = cljs.core.get.call(null,map__15697__$1,new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294));
var args = cljs.core.get.call(null,map__15697__$1,new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359));
var arg_types = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),action_name,new cljs.core.Keyword("fugue.ide.state","arg-types","fugue.ide.state/arg-types",-161306337)], null));
var arg_type = cljs.core.first.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,args),arg_types));
if(cljs.core._EQ_.call(null,action_name,new cljs.core.Keyword(null,"execute","execute",-129499188))){
return cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.keys.call(null,new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477).cljs$core$IFn$_invoke$arity$1(state)));
} else {
if(cljs.core._EQ_.call(null,arg_type,new cljs.core.Keyword(null,"file","file",-1269645878))){
return cljs.core.keys.call(null,new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199).cljs$core$IFn$_invoke$arity$1(state));
} else {
if(cljs.core.set_QMARK_.call(null,arg_type)){
return arg_type;
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
});
fugue.ide.state.interactive = (function fugue$ide$state$interactive(state,action_name,args,swap_cb,action_cb){
var arg_types = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),action_name,new cljs.core.Keyword("fugue.ide.state","arg-types","fugue.ide.state/arg-types",-161306337)], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"execute","execute",-129499188),action_name)){
return swap_cb.call(null,cljs.core.assoc,new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294),cljs.core.keyword.call(null,cljs.core.first.call(null,args)),new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359),null], null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),cljs.core.count.call(null,arg_types))){
return cljs.core.apply.call(null,action_cb,action_name,args);
} else {
return swap_cb.call(null,cljs.core.assoc,new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294),action_name,new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359),args], null));

}
}
});
fugue.ide.state.on_minibuffer_submit = (function fugue$ide$state$on_minibuffer_submit(state,swap_cb,action_cb,value){
var map__15699 = new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763).cljs$core$IFn$_invoke$arity$1(state);
var map__15699__$1 = (((((!((map__15699 == null))))?(((((map__15699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15699):map__15699);
var action_name = cljs.core.get.call(null,map__15699__$1,new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294));
var args = cljs.core.get.call(null,map__15699__$1,new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359));
return fugue.ide.state.interactive.call(null,state,action_name,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)),swap_cb,action_cb);
});
fugue.ide.state.on_key = (function fugue$ide$state$on_key(state,key,swap_cb,action_cb){
var new_seq = cljs.core.conj.call(null,new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346).cljs$core$IFn$_invoke$arity$1(state),key);
var shortcut = cljs.core.get_in.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579).cljs$core$IFn$_invoke$arity$1(state),new_seq);
if(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new_seq)) && (cljs.core.not.call(null,fugue.ide.state.in_popup_QMARK_.call(null,state))))){
return swap_cb.call(null,fugue.ide.state.open_popup);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new_seq);
if(and__4120__auto__){
return fugue.ide.state.in_popup_QMARK_.call(null,state);
} else {
return and__4120__auto__;
}
})())){
return swap_cb.call(null,cljs.core.assoc,new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294),new cljs.core.Keyword(null,"execute","execute",-129499188),new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("fugue.ide.state","group-name","fugue.ide.state/group-name",-1339069829).cljs$core$IFn$_invoke$arity$1(shortcut))){
return swap_cb.call(null,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346)], null),cljs.core.conj,key);
} else {
if((shortcut == null)){
return swap_cb.call(null,fugue.ide.state.close_popup);
} else {
var map__15701 = shortcut;
var map__15701__$1 = (((((!((map__15701 == null))))?(((((map__15701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15701):map__15701);
var action_name = cljs.core.get.call(null,map__15701__$1,new cljs.core.Keyword("fugue.ide.state","action-name","fugue.ide.state/action-name",-580654294));
var args = cljs.core.get.call(null,map__15701__$1,new cljs.core.Keyword("fugue.ide.state","args","fugue.ide.state/args",275674359));
return fugue.ide.state.interactive.call(null,state,action_name,args,swap_cb,action_cb);

}
}
}
}
});
fugue.ide.state.layout = (function fugue$ide$state$layout(state,window_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.layout.container,fugue.ide.layout.map_values.call(null,(function (id){
var filename = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),id], null));
var value = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199),filename], null));
var active = ((cljs.core._EQ_.call(null,id,new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not.call(null,fugue.ide.state.in_popup_QMARK_.call(null,state))));
return window_fn.call(null,id,filename,value,active);
}),new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064).cljs$core$IFn$_invoke$arity$1(state))], null);
});
fugue.ide.state.on_upload = (function fugue$ide$state$on_upload(state,name,file){
return fugue.ide.state.open_file.call(null,fugue.ide.state.write_file.call(null,state,name,file),name,new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=state.js.map?rel=1611104219651
