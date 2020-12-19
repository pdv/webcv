// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.audio');
goog.require('fugue.buffer');
goog.require('fugue.chan');
goog.require('fugue.ramp');
goog.require('fugue.synthdef');
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35036){
return cljs.core.map_QMARK_.call(null,G__35036);
}),(function (G__35036){
return cljs.core.contains_QMARK_.call(null,G__35036,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35036){
return ((cljs.core.map_QMARK_.call(null,G__35036)) && (cljs.core.contains_QMARK_.call(null,G__35036,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35037,p__35038){
var map__35039 = p__35037;
var map__35039__$1 = (((((!((map__35039 == null))))?(((((map__35039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35039):map__35039);
var actx = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35040 = p__35038;
var map__35040__$1 = (((((!((map__35040 == null))))?(((((map__35040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35040):map__35040);
var buffer_name = cljs.core.get.call(null,map__35040__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35043 = actx.createConstantSource();
G__35043.start();

return G__35043;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35044_35052 = node;
var _STAR_runtime_state_STAR__orig_val__35046_35053 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35047_35054 = oops.state.prepare_state.call(null,target_obj_35044_35052,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35047_35054;

try{var parent_obj_35045_35055 = target_obj_35044_35052;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35045_35055,(0),"buffer",true,true,true)){
(parent_obj_35045_35055["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35046_35053;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35048 = node;
var _STAR_runtime_state_STAR__orig_val__35050 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35051 = oops.state.prepare_state.call(null,target_obj_35048,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35051;

try{var next_obj_35049 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35048,(0),"detune",true,true,false))?(target_obj_35048["detune"]):null);
return next_obj_35049;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35050;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35056){
var map__35057 = p__35056;
var map__35057__$1 = (((((!((map__35057 == null))))?(((((map__35057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35057):map__35057);
var param_name = cljs.core.get.call(null,map__35057__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35059 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35061 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35062 = oops.state.prepare_state.call(null,target_obj_35059,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35062;

try{var next_obj_35060 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35059,(0),"context",true,true,false))?(target_obj_35059["context"]):null);
return next_obj_35060;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35061;
}})();
var detune_param = (function (){var target_obj_35063 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35065 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35066 = oops.state.prepare_state.call(null,target_obj_35063,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35066;

try{var next_obj_35064 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35063,(0),"offset",true,true,false))?(target_obj_35063["offset"]):null);
return next_obj_35064;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35065;
}})();
var c__32673__auto___35095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name){
return (function (state_35080){
var state_val_35081 = (state_35080[(1)]);
if((state_val_35081 === (1))){
var state_35080__$1 = state_35080;
var statearr_35082_35096 = state_35080__$1;
(statearr_35082_35096[(2)] = null);

(statearr_35082_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (2))){
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35080__$1,(4),ch);
} else {
if((state_val_35081 === (3))){
var inst_35078 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35080__$1,inst_35078);
} else {
if((state_val_35081 === (4))){
var inst_35069 = (state_35080[(2)]);
var state_35080__$1 = (function (){var statearr_35083 = state_35080;
(statearr_35083[(7)] = inst_35069);

return statearr_35083;
})();
var G__35084_35097 = param_name;
var G__35084_35098__$1 = (((G__35084_35097 instanceof cljs.core.Keyword))?G__35084_35097.fqn:null);
switch (G__35084_35098__$1) {
case "fugue.sampler/trigger":
var statearr_35085_35100 = state_35080__$1;
(statearr_35085_35100[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35086_35101 = state_35080__$1;
(statearr_35086_35101[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35084_35098__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (5))){
var inst_35075 = (state_35080[(2)]);
var state_35080__$1 = (function (){var statearr_35087 = state_35080;
(statearr_35087[(8)] = inst_35075);

return statearr_35087;
})();
var statearr_35088_35102 = state_35080__$1;
(statearr_35088_35102[(2)] = null);

(statearr_35088_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (6))){
var inst_35070 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35080__$1 = state_35080;
var statearr_35089_35103 = state_35080__$1;
(statearr_35089_35103[(2)] = inst_35070);

(statearr_35089_35103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (7))){
var inst_35069 = (state_35080[(7)]);
var inst_35072 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35069);
var state_35080__$1 = state_35080;
var statearr_35090_35104 = state_35080__$1;
(statearr_35090_35104[(2)] = inst_35072);

(statearr_35090_35104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name))
;
return ((function (switch__32578__auto__,c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32579__auto__ = null;
var fugue$sampler$state_machine__32579__auto____0 = (function (){
var statearr_35091 = [null,null,null,null,null,null,null,null,null];
(statearr_35091[(0)] = fugue$sampler$state_machine__32579__auto__);

(statearr_35091[(1)] = (1));

return statearr_35091;
});
var fugue$sampler$state_machine__32579__auto____1 = (function (state_35080){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_35080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e35092){if((e35092 instanceof Object)){
var ex__32582__auto__ = e35092;
var statearr_35093_35105 = state_35080;
(statearr_35093_35105[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_35080;
state_35080 = G__35106;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
fugue$sampler$state_machine__32579__auto__ = function(state_35080){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32579__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32579__auto____1.call(this,state_35080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32579__auto____0;
fugue$sampler$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32579__auto____1;
return fugue$sampler$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name))
})();
var state__32675__auto__ = (function (){var statearr_35094 = f__32674__auto__.call(null);
(statearr_35094[(6)] = c__32673__auto___35095);

return statearr_35094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___35095,ch,actx,detune_param,map__35057,map__35057__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35107 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35109 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35110 = oops.state.prepare_state.call(null,target_obj_35107,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35110;

try{var next_obj_35108 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35107,(0),"offset",true,true,false))?(target_obj_35107["offset"]):null);
return next_obj_35108;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35109;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35111){
var map__35112 = p__35111;
var map__35112__$1 = (((((!((map__35112 == null))))?(((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var param_name = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35114 = dest;
var _STAR_runtime_state_STAR__orig_val__35115 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35116 = oops.state.prepare_state.call(null,target_obj_35114,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35116;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35114,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35115;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1608403393152