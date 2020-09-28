// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.midi');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('webcv.synthdef');
goog.require('webcv.chan');
cljs.core._add_method.call(null,webcv.chan.chan_node_spec,new cljs.core.Keyword("webcv.midi","midi-in","webcv.midi/midi-in",1504142596),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34485){
return cljs.core.map_QMARK_.call(null,G__34485);
}),(function (G__34485){
return cljs.core.contains_QMARK_.call(null,G__34485,new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145));
})], null),(function (G__34485){
return ((cljs.core.map_QMARK_.call(null,G__34485)) && (cljs.core.contains_QMARK_.call(null,G__34485,new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.midi","midi-in","webcv.midi/midi-in",1504142596),(function (p__34486,p__34487){
var map__34488 = p__34486;
var map__34488__$1 = (((((!((map__34488 == null))))?(((((map__34488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34488):map__34488);
var ins = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462));
var map__34489 = p__34487;
var map__34489__$1 = (((((!((map__34489 == null))))?(((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var input_name = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145));
var midi_chan = cljs.core.get.call(null,ins,input_name);
var out_chan = cljs.core.async.chan.call(null,(1));
cljs.core.async.tap.call(null,midi_chan,out_chan);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out_chan)], null);
}));
/**
 * Returns a stateful transducer that maps midi events to midi notes based on
 *   priority-fn, which selects from a list of notes currently down.
 */
webcv.midi.midi_x_note = (function webcv$midi$midi_x_note(priority_fn){
return (function (rf){
var v_down = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (v_down){
return (function() {
var G__34496 = null;
var G__34496__0 = (function (){
return rf.call(null);
});
var G__34496__1 = (function (result){
return rf.call(null,result);
});
var G__34496__2 = (function (result,midi){
var map__34494 = midi;
var map__34494__$1 = (((((!((map__34494 == null))))?(((((map__34494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34494):map__34494);
var note = cljs.core.get.call(null,map__34494__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34494__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
var note_on = (velocity > (0));
var op = ((note_on)?cljs.core.conj:((function (map__34494,map__34494__$1,note,velocity,note_on,v_down){
return (function (p1__34493_SHARP_,p2__34492_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([p2__34492_SHARP_]),p1__34493_SHARP_);
});})(map__34494,map__34494__$1,note,velocity,note_on,v_down))
);
var down = op.call(null,cljs.core.deref.call(null,v_down),note);
cljs.core.vreset_BANG_.call(null,v_down,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,down));

var temp__5718__auto__ = priority_fn.call(null,down);
if(cljs.core.truth_(temp__5718__auto__)){
var output = temp__5718__auto__;
return rf.call(null,result,output);
} else {
return result;
}
});
G__34496 = function(result,midi){
switch(arguments.length){
case 0:
return G__34496__0.call(this);
case 1:
return G__34496__1.call(this,result);
case 2:
return G__34496__2.call(this,result,midi);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34496.cljs$core$IFn$_invoke$arity$0 = G__34496__0;
G__34496.cljs$core$IFn$_invoke$arity$1 = G__34496__1;
G__34496.cljs$core$IFn$_invoke$arity$2 = G__34496__2;
return G__34496;
})()
;})(v_down))
});
});
webcv.midi.note__GT_hz = (function webcv$midi$note__GT_hz(note){
return (440.0 * Math.pow(2.0,((note - 69.0) / 12.0)));
});
webcv.midi.midi_x_hz = cljs.core.comp.call(null,webcv.midi.midi_x_note.call(null,cljs.core.last),cljs.core.map.call(null,webcv.midi.note__GT_hz));
/**
 * Returns a stateful transducer that maps midi events to midi velocities,
 *   retriggering if retrigger is truthful
 */
webcv.midi.midi_x_velo = (function webcv$midi$midi_x_velo(retrigger){
return (function (rf){
var v_down_count = cljs.core.volatile_BANG_.call(null,(0));
return ((function (v_down_count){
return (function() {
var G__34499 = null;
var G__34499__0 = (function (){
return rf.call(null);
});
var G__34499__1 = (function (result){
return rf.call(null,result);
});
var G__34499__2 = (function (result,midi){
var map__34497 = midi;
var map__34497__$1 = (((((!((map__34497 == null))))?(((((map__34497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34497):map__34497);
var type = cljs.core.get.call(null,map__34497__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var velocity = cljs.core.get.call(null,map__34497__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
var note_on = ((cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.midi","note-on","webcv.midi/note-on",-513092971),type)) && ((velocity > (0))));
var prev_down_count = cljs.core.deref.call(null,v_down_count);
cljs.core._vreset_BANG_.call(null,v_down_count,((note_on)?cljs.core.inc:cljs.core.dec).call(null,cljs.core._deref.call(null,v_down_count)));

if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = note_on;
if(and__4120__auto__){
var and__4120__auto____$1 = retrigger;
if(cljs.core.truth_(and__4120__auto____$1)){
return ((1) > prev_down_count);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((((note_on) && (cljs.core._EQ_.call(null,(0),prev_down_count)))) || ((((!(note_on))) && (cljs.core._EQ_.call(null,(1),prev_down_count)))));
}
})())){
return rf.call(null,result,velocity);
} else {
return result;
}
});
G__34499 = function(result,midi){
switch(arguments.length){
case 0:
return G__34499__0.call(this);
case 1:
return G__34499__1.call(this,result);
case 2:
return G__34499__2.call(this,result,midi);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34499.cljs$core$IFn$_invoke$arity$0 = G__34499__0;
G__34499.cljs$core$IFn$_invoke$arity$1 = G__34499__1;
G__34499.cljs$core$IFn$_invoke$arity$2 = G__34499__2;
return G__34499;
})()
;})(v_down_count))
});
});
/**
 * Naive monophonic algorithm, outputs [0, 1)
 */
webcv.midi.midi_x_gate = cljs.core.comp.call(null,webcv.midi.midi_x_velo.call(null,true),cljs.core.map.call(null,(function (p1__34500_SHARP_){
return (p1__34500_SHARP_ / (128));
})));
cljs.core._add_method.call(null,webcv.chan.make_transducer,new cljs.core.Keyword("webcv.midi","midi-x-hz","webcv.midi/midi-x-hz",1634580645),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644)),webcv.midi.midi_x_hz);
}));
cljs.core._add_method.call(null,webcv.chan.make_transducer,new cljs.core.Keyword("webcv.midi","midi-x-gate","webcv.midi/midi-x-gate",1907706552),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644)),webcv.midi.midi_x_gate);
}));
webcv.midi.map_to_range = (function webcv$midi$map_to_range(x,in_min,in_max,out_min,out_max){
return (out_min + ((out_max - out_min) * ((x - in_min) / in_max)));
});
cljs.core._add_method.call(null,webcv.chan.make_transducer,new cljs.core.Keyword("webcv.midi","midi-x-ctrl","webcv.midi/midi-x-ctrl",-1467867453),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__34501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544).cljs$core$IFn$_invoke$arity$1(p1__34501_SHARP_),new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644).cljs$core$IFn$_invoke$arity$1(p1__34501_SHARP_)));
})),cljs.core.map.call(null,(function (p1__34502_SHARP_){
return webcv.midi.map_to_range.call(null,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644).cljs$core$IFn$_invoke$arity$1(p1__34502_SHARP_)),(0),(127),new cljs.core.Keyword("webcv.midi","min","webcv.midi/min",687650234).cljs$core$IFn$_invoke$arity$1(p1__34502_SHARP_),new cljs.core.Keyword("webcv.midi","max","webcv.midi/max",892449532).cljs$core$IFn$_invoke$arity$1(p1__34502_SHARP_));
})));
}));
webcv.midi.msg_type = new cljs.core.PersistentArrayMap(null, 4, [(144),new cljs.core.Keyword("webcv.midi","note-on","webcv.midi/note-on",-513092971),(128),new cljs.core.Keyword("webcv.midi","note-off","webcv.midi/note-off",802543303),(224),new cljs.core.Keyword("webcv.midi","bend","webcv.midi/bend",2141330852),(176),new cljs.core.Keyword("webcv.midi","ctrl","webcv.midi/ctrl",1825926)], null);
/**
 * Converts a js MIDIMessageEvent into a midi message
 */
webcv.midi.event__GT_msg = (function webcv$midi$event__GT_msg(e){
var js_arr = Array.from(e.data);
var vec__34503 = cljs.core.js__GT_clj.call(null,js_arr);
var status = cljs.core.nth.call(null,vec__34503,(0),null);
var note = cljs.core.nth.call(null,vec__34503,(1),null);
var velocity = cljs.core.nth.call(null,vec__34503,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868),webcv.midi.msg_type.call(null,(status & (240))),new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544),note,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691),velocity], null);
});
webcv.midi.event_x_msg = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__34506_SHARP_){
return cljs.core._EQ_.call(null,(3),p1__34506_SHARP_.data.length);
})),cljs.core.map.call(null,webcv.midi.event__GT_msg));
/**
 * This is probably wrong
 */
webcv.midi.msg__GT_event = (function webcv$midi$msg__GT_event(p__34507){
var map__34508 = p__34507;
var map__34508__$1 = (((((!((map__34508 == null))))?(((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508):map__34508);
var type = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return Array.from(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,note,velocity], null));
});
/**
 * Returns a mult'd chan of midi messages from a js MIDIInput
 */
webcv.midi.midi_in_chan = (function webcv$midi$midi_in_chan(midi_in){
var c = cljs.core.async.chan.call(null,(1),webcv.midi.event_x_msg);
midi_in.onmidimessage = cljs.core.partial.call(null,cljs.core.async.put_BANG_,c);

return cljs.core.async.mult.call(null,c);
});
/**
 * Returns a chan that passes midi messages to a MIDIOutput
 */
webcv.midi.midi_out_chan = (function webcv$midi$midi_out_chan(midi_out){
var c = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,webcv.midi.msg__GT_event));
var c__31547__auto___34527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___34527,c){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___34527,c){
return (function (state_34518){
var state_val_34519 = (state_34518[(1)]);
if((state_val_34519 === (1))){
var state_34518__$1 = state_34518;
var statearr_34520_34528 = state_34518__$1;
(statearr_34520_34528[(2)] = null);

(statearr_34520_34528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (2))){
var state_34518__$1 = state_34518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34518__$1,(4),c);
} else {
if((state_val_34519 === (3))){
var inst_34516 = (state_34518[(2)]);
var state_34518__$1 = state_34518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34518__$1,inst_34516);
} else {
if((state_val_34519 === (4))){
var inst_34512 = (state_34518[(2)]);
var inst_34513 = midi_out.send(inst_34512);
var state_34518__$1 = (function (){var statearr_34521 = state_34518;
(statearr_34521[(7)] = inst_34513);

return statearr_34521;
})();
var statearr_34522_34529 = state_34518__$1;
(statearr_34522_34529[(2)] = null);

(statearr_34522_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__31547__auto___34527,c))
;
return ((function (switch__31452__auto__,c__31547__auto___34527,c){
return (function() {
var webcv$midi$midi_out_chan_$_state_machine__31453__auto__ = null;
var webcv$midi$midi_out_chan_$_state_machine__31453__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null,null];
(statearr_34523[(0)] = webcv$midi$midi_out_chan_$_state_machine__31453__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var webcv$midi$midi_out_chan_$_state_machine__31453__auto____1 = (function (state_34518){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_34518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e34524){if((e34524 instanceof Object)){
var ex__31456__auto__ = e34524;
var statearr_34525_34530 = state_34518;
(statearr_34525_34530[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34531 = state_34518;
state_34518 = G__34531;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
webcv$midi$midi_out_chan_$_state_machine__31453__auto__ = function(state_34518){
switch(arguments.length){
case 0:
return webcv$midi$midi_out_chan_$_state_machine__31453__auto____0.call(this);
case 1:
return webcv$midi$midi_out_chan_$_state_machine__31453__auto____1.call(this,state_34518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$midi$midi_out_chan_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$midi$midi_out_chan_$_state_machine__31453__auto____0;
webcv$midi$midi_out_chan_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$midi$midi_out_chan_$_state_machine__31453__auto____1;
return webcv$midi$midi_out_chan_$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___34527,c))
})();
var state__31549__auto__ = (function (){var statearr_34526 = f__31548__auto__.call(null);
(statearr_34526[(6)] = c__31547__auto___34527);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___34527,c))
);


return c;
});
/**
 * The Web MIDI Api uses 'maplike' for its MIDIInputMap and MIDIOutputMap
 */
webcv.midi.maplike__GT_seq = (function webcv$midi$maplike__GT_seq(m){
return cljs.core.js__GT_clj.call(null,Array.from(m.values()));
});
/**
 * Maps port name to a channel that sends/receives on that port
 */
webcv.midi.port_map = (function webcv$midi$port_map(ports_maplike,chan_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__34532_SHARP_){
return p1__34532_SHARP_.name;
}),chan_fn),webcv.midi.maplike__GT_seq.call(null,ports_maplike)));
});
webcv.midi.ports = (function webcv$midi$ports(midi_access){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462),webcv.midi.port_map.call(null,midi_access.inputs,webcv.midi.midi_in_chan),new cljs.core.Keyword("webcv.midi","outs","webcv.midi/outs",838958117),webcv.midi.port_map.call(null,midi_access.outputs,webcv.midi.midi_out_chan)], null);
});
webcv.midi.make_ctx = (function webcv$midi$make_ctx(cb){
return navigator.requestMIDIAccess().then((function (midi_access){
return cb.call(null,webcv.midi.ports.call(null,midi_access));
}));
});
webcv.midi.midi_in = (function webcv$midi$midi_in(name){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.midi","midi-in","webcv.midi/midi-in",1504142596),new cljs.core.Keyword("webcv.midi","input-name","webcv.midi/input-name",80810145),name], null),cljs.core.PersistentArrayMap.EMPTY);
});
webcv.midi.hz = (function webcv$midi$hz(in$){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163),new cljs.core.Keyword("webcv.midi","midi-x-hz","webcv.midi/midi-x-hz",1634580645)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});
webcv.midi.gate = (function webcv$midi$gate(in$){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163),new cljs.core.Keyword("webcv.midi","midi-x-gate","webcv.midi/midi-x-gate",1907706552)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});
webcv.midi.ctrl = (function webcv$midi$ctrl(var_args){
var G__34534 = arguments.length;
switch (G__34534) {
case 2:
return webcv.midi.ctrl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return webcv.midi.ctrl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.midi.ctrl.cljs$core$IFn$_invoke$arity$2 = (function (in$,note){
return webcv.midi.ctrl.call(null,in$,note,(0),(1));
});

webcv.midi.ctrl.cljs$core$IFn$_invoke$arity$4 = (function (in$,note,min,max){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163),new cljs.core.Keyword("webcv.midi","midi-x-ctrl","webcv.midi/midi-x-ctrl",-1467867453)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("webcv.chan","input","webcv.chan/input",1319946644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [note], null),new cljs.core.Keyword("webcv.midi","min","webcv.midi/min",687650234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [min], null),new cljs.core.Keyword("webcv.midi","max","webcv.midi/max",892449532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max], null)], null));
});

webcv.midi.ctrl.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=midi.js.map?rel=1601312567055