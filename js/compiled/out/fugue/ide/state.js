// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.state');
goog.require('cljs.core');
goog.require('fugue.ide.layout');
fugue.ide.state.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064),new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053),new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),new cljs.core.Keyword("fugue.ide.state","toggles","fugue.ide.state/toggles",2117803982),new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346),new cljs.core.Keyword("fugue.ide.state","prev","fugue.ide.state/prev",1590915229),new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199)],[cljs.core.list((1)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(1),false,new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"default-text","default-text",-631230836)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vim","vim",764723904),true,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),false], null),null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),"(+ 1 2)"], null)]);
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
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346),null),new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),false);
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
fugue.ide.state.active_window_name = (function fugue$ide$state$active_window_name(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state)], null));
});
fugue.ide.state.file_contents = (function fugue$ide$state$file_contents(state,name){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","files","fugue.ide.state/files",970131199),name], null));
});
fugue.ide.state.active_window_file_contents = (function fugue$ide$state$active_window_file_contents(state){
return fugue.ide.state.file_contents.call(null,state,fugue.ide.state.active_window_name.call(null,state));
});
fugue.ide.state.open_file = (function fugue$ide$state$open_file(state,name,direction){
var id = fugue.ide.state.next_window_id.call(null,state);
return fugue.ide.state.activate.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","windows","fugue.ide.state/windows",-1118495986),id], null),name),new cljs.core.Keyword("fugue.ide.state","layout","fugue.ide.state/layout",-1014388064),fugue.ide.layout.insert_node,direction,new cljs.core.Keyword("fugue.ide.state","active","fugue.ide.state/active",787267053).cljs$core$IFn$_invoke$arity$1(state),id),id);
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
return cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,p1__15683_SHARP_));
}
})()],null));
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.string_QMARK_,cljs.core.first),cljs.core.get_in.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346).cljs$core$IFn$_invoke$arity$1(state))));
});
fugue.ide.state.add_shortcut_group = (function fugue$ide$state$add_shortcut_group(state,path,name){
return cljs.core.assoc_in.call(null,state,cljs.core.cons.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),cljs.core.conj.call(null,path,new cljs.core.Keyword("fugue.ide.state","group-name","fugue.ide.state/group-name",-1339069829))),name);
});
fugue.ide.state.add_shortcut = (function fugue$ide$state$add_shortcut(state,path,action_name){
return cljs.core.assoc_in.call(null,state,cljs.core.cons.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579),path),action_name);
});
fugue.ide.state.add_action = (function fugue$ide$state$add_action(state,action_name,action){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),action_name], null),action);
});
fugue.ide.state.action_names = (function fugue$ide$state$action_names(state){
return cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.keys.call(null,new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477).cljs$core$IFn$_invoke$arity$1(state)));
});
fugue.ide.state.perform_action = (function fugue$ide$state$perform_action(var_args){
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
return fugue.ide.state.perform_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fugue.ide.state.perform_action.cljs$core$IFn$_invoke$arity$variadic = (function (state,name,args){
return cljs.core.apply.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","actions","fugue.ide.state/actions",-1920139477),cljs.core.keyword.call(null,name)], null)),args);
});

fugue.ide.state.perform_action.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fugue.ide.state.perform_action.cljs$lang$applyTo = (function (seq15684){
var G__15685 = cljs.core.first.call(null,seq15684);
var seq15684__$1 = cljs.core.next.call(null,seq15684);
var G__15686 = cljs.core.first.call(null,seq15684__$1);
var seq15684__$2 = cljs.core.next.call(null,seq15684__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15685,G__15686,seq15684__$2);
});

fugue.ide.state.on_key = (function fugue$ide$state$on_key(state,key,cb){
var new_seq = cljs.core.conj.call(null,new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346).cljs$core$IFn$_invoke$arity$1(state),key);
var shortcut = cljs.core.get_in.call(null,new cljs.core.Keyword("fugue.ide.state","shortcuts","fugue.ide.state/shortcuts",677225579).cljs$core$IFn$_invoke$arity$1(state),new_seq);
if(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new_seq)) && (cljs.core.not.call(null,fugue.ide.state.in_popup_QMARK_.call(null,state))))){
return cb.call(null,fugue.ide.state.open_popup);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new_seq);
if(and__4120__auto__){
return fugue.ide.state.in_popup_QMARK_.call(null,state);
} else {
return and__4120__auto__;
}
})())){
return cb.call(null,cljs.core.assoc,new cljs.core.Keyword("fugue.ide.state","minibuffer","fugue.ide.state/minibuffer",-653667763),true);
} else {
if(cljs.core.map_QMARK_.call(null,shortcut)){
return cb.call(null,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ide.state","key-seq","fugue.ide.state/key-seq",1092364346)], null),cljs.core.conj,key);
} else {
if((shortcut == null)){
return cb.call(null,fugue.ide.state.close_popup);
} else {
if(cljs.core.vector_QMARK_.call(null,shortcut)){
return cljs.core.apply.call(null,fugue.ide.state.perform_action,state,cljs.core.first.call(null,shortcut),cljs.core.rest.call(null,shortcut));
} else {
return fugue.ide.state.perform_action.call(null,state,shortcut);

}
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

//# sourceMappingURL=state.js.map?rel=1611069718975