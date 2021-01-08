// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35317){
var map__35318 = p__35317;
var map__35318__$1 = (((((!((map__35318 == null))))?(((((map__35318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35318):map__35318);
var m = map__35318__$1;
var n = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35320_35352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35321_35353 = null;
var count__35322_35354 = (0);
var i__35323_35355 = (0);
while(true){
if((i__35323_35355 < count__35322_35354)){
var f_35356 = cljs.core._nth.call(null,chunk__35321_35353,i__35323_35355);
cljs.core.println.call(null,"  ",f_35356);


var G__35357 = seq__35320_35352;
var G__35358 = chunk__35321_35353;
var G__35359 = count__35322_35354;
var G__35360 = (i__35323_35355 + (1));
seq__35320_35352 = G__35357;
chunk__35321_35353 = G__35358;
count__35322_35354 = G__35359;
i__35323_35355 = G__35360;
continue;
} else {
var temp__5720__auto___35361 = cljs.core.seq.call(null,seq__35320_35352);
if(temp__5720__auto___35361){
var seq__35320_35362__$1 = temp__5720__auto___35361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35320_35362__$1)){
var c__4550__auto___35363 = cljs.core.chunk_first.call(null,seq__35320_35362__$1);
var G__35364 = cljs.core.chunk_rest.call(null,seq__35320_35362__$1);
var G__35365 = c__4550__auto___35363;
var G__35366 = cljs.core.count.call(null,c__4550__auto___35363);
var G__35367 = (0);
seq__35320_35352 = G__35364;
chunk__35321_35353 = G__35365;
count__35322_35354 = G__35366;
i__35323_35355 = G__35367;
continue;
} else {
var f_35368 = cljs.core.first.call(null,seq__35320_35362__$1);
cljs.core.println.call(null,"  ",f_35368);


var G__35369 = cljs.core.next.call(null,seq__35320_35362__$1);
var G__35370 = null;
var G__35371 = (0);
var G__35372 = (0);
seq__35320_35352 = G__35369;
chunk__35321_35353 = G__35370;
count__35322_35354 = G__35371;
i__35323_35355 = G__35372;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35373 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35373);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35373)))?cljs.core.second.call(null,arglists_35373):arglists_35373));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35324_35374 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35325_35375 = null;
var count__35326_35376 = (0);
var i__35327_35377 = (0);
while(true){
if((i__35327_35377 < count__35326_35376)){
var vec__35338_35378 = cljs.core._nth.call(null,chunk__35325_35375,i__35327_35377);
var name_35379 = cljs.core.nth.call(null,vec__35338_35378,(0),null);
var map__35341_35380 = cljs.core.nth.call(null,vec__35338_35378,(1),null);
var map__35341_35381__$1 = (((((!((map__35341_35380 == null))))?(((((map__35341_35380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35341_35380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35341_35380):map__35341_35380);
var doc_35382 = cljs.core.get.call(null,map__35341_35381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35383 = cljs.core.get.call(null,map__35341_35381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35379);

cljs.core.println.call(null," ",arglists_35383);

if(cljs.core.truth_(doc_35382)){
cljs.core.println.call(null," ",doc_35382);
} else {
}


var G__35384 = seq__35324_35374;
var G__35385 = chunk__35325_35375;
var G__35386 = count__35326_35376;
var G__35387 = (i__35327_35377 + (1));
seq__35324_35374 = G__35384;
chunk__35325_35375 = G__35385;
count__35326_35376 = G__35386;
i__35327_35377 = G__35387;
continue;
} else {
var temp__5720__auto___35388 = cljs.core.seq.call(null,seq__35324_35374);
if(temp__5720__auto___35388){
var seq__35324_35389__$1 = temp__5720__auto___35388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35324_35389__$1)){
var c__4550__auto___35390 = cljs.core.chunk_first.call(null,seq__35324_35389__$1);
var G__35391 = cljs.core.chunk_rest.call(null,seq__35324_35389__$1);
var G__35392 = c__4550__auto___35390;
var G__35393 = cljs.core.count.call(null,c__4550__auto___35390);
var G__35394 = (0);
seq__35324_35374 = G__35391;
chunk__35325_35375 = G__35392;
count__35326_35376 = G__35393;
i__35327_35377 = G__35394;
continue;
} else {
var vec__35343_35395 = cljs.core.first.call(null,seq__35324_35389__$1);
var name_35396 = cljs.core.nth.call(null,vec__35343_35395,(0),null);
var map__35346_35397 = cljs.core.nth.call(null,vec__35343_35395,(1),null);
var map__35346_35398__$1 = (((((!((map__35346_35397 == null))))?(((((map__35346_35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35346_35397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346_35397):map__35346_35397);
var doc_35399 = cljs.core.get.call(null,map__35346_35398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35400 = cljs.core.get.call(null,map__35346_35398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35396);

cljs.core.println.call(null," ",arglists_35400);

if(cljs.core.truth_(doc_35399)){
cljs.core.println.call(null," ",doc_35399);
} else {
}


var G__35401 = cljs.core.next.call(null,seq__35324_35389__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__35324_35374 = G__35401;
chunk__35325_35375 = G__35402;
count__35326_35376 = G__35403;
i__35327_35377 = G__35404;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__35348 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35349 = null;
var count__35350 = (0);
var i__35351 = (0);
while(true){
if((i__35351 < count__35350)){
var role = cljs.core._nth.call(null,chunk__35349,i__35351);
var temp__5720__auto___35405__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35405__$1)){
var spec_35406 = temp__5720__auto___35405__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35406));
} else {
}


var G__35407 = seq__35348;
var G__35408 = chunk__35349;
var G__35409 = count__35350;
var G__35410 = (i__35351 + (1));
seq__35348 = G__35407;
chunk__35349 = G__35408;
count__35350 = G__35409;
i__35351 = G__35410;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35348);
if(temp__5720__auto____$1){
var seq__35348__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35348__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35348__$1);
var G__35411 = cljs.core.chunk_rest.call(null,seq__35348__$1);
var G__35412 = c__4550__auto__;
var G__35413 = cljs.core.count.call(null,c__4550__auto__);
var G__35414 = (0);
seq__35348 = G__35411;
chunk__35349 = G__35412;
count__35350 = G__35413;
i__35351 = G__35414;
continue;
} else {
var role = cljs.core.first.call(null,seq__35348__$1);
var temp__5720__auto___35415__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35415__$2)){
var spec_35416 = temp__5720__auto___35415__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35416));
} else {
}


var G__35417 = cljs.core.next.call(null,seq__35348__$1);
var G__35418 = null;
var G__35419 = (0);
var G__35420 = (0);
seq__35348 = G__35417;
chunk__35349 = G__35418;
count__35350 = G__35419;
i__35351 = G__35420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35421 = cljs.core.conj.call(null,via,t);
var G__35422 = cljs.core.ex_cause.call(null,t);
via = G__35421;
t = G__35422;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35425 = datafied_throwable;
var map__35425__$1 = (((((!((map__35425 == null))))?(((((map__35425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35425):map__35425);
var via = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35426 = cljs.core.last.call(null,via);
var map__35426__$1 = (((((!((map__35426 == null))))?(((((map__35426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35426):map__35426);
var type = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35427 = data;
var map__35427__$1 = (((((!((map__35427 == null))))?(((((map__35427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35427):map__35427);
var problems = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35428 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35428__$1 = (((((!((map__35428 == null))))?(((((map__35428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35428):map__35428);
var top_data = map__35428__$1;
var source = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35433 = phase;
var G__35433__$1 = (((G__35433 instanceof cljs.core.Keyword))?G__35433.fqn:null);
switch (G__35433__$1) {
case "read-source":
var map__35434 = data;
var map__35434__$1 = (((((!((map__35434 == null))))?(((((map__35434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35434):map__35434);
var line = cljs.core.get.call(null,map__35434__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35434__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35436 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35436__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35436,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35436);
var G__35436__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35436__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35436__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35436__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35436__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35437 = top_data;
var G__35437__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35437,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35437);
var G__35437__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35437__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35437__$1);
var G__35437__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35437__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35437__$2);
var G__35437__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35437__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35437__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35437__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35437__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35438 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35438,(0),null);
var method = cljs.core.nth.call(null,vec__35438,(1),null);
var file = cljs.core.nth.call(null,vec__35438,(2),null);
var line = cljs.core.nth.call(null,vec__35438,(3),null);
var G__35441 = top_data;
var G__35441__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35441,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35441);
var G__35441__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35441__$1);
var G__35441__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35441__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35441__$2);
var G__35441__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35441__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35441__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35441__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35441__$4;
}

break;
case "execution":
var vec__35442 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35442,(0),null);
var method = cljs.core.nth.call(null,vec__35442,(1),null);
var file = cljs.core.nth.call(null,vec__35442,(2),null);
var line = cljs.core.nth.call(null,vec__35442,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35442,source__$1,method,file,line,G__35433,G__35433__$1,map__35425,map__35425__$1,via,trace,phase,map__35426,map__35426__$1,type,message,data,map__35427,map__35427__$1,problems,fn,caller,map__35428,map__35428__$1,top_data,source){
return (function (p1__35424_SHARP_){
var or__4131__auto__ = (p1__35424_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35424_SHARP_);
}
});})(vec__35442,source__$1,method,file,line,G__35433,G__35433__$1,map__35425,map__35425__$1,via,trace,phase,map__35426,map__35426__$1,type,message,data,map__35427,map__35427__$1,problems,fn,caller,map__35428,map__35428__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35445 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35445__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35445,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35445);
var G__35445__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35445__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35445__$1);
var G__35445__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__35445__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35445__$2);
var G__35445__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35445__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35445__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35445__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35445__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35433__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35449){
var map__35450 = p__35449;
var map__35450__$1 = (((((!((map__35450 == null))))?(((((map__35450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35450):map__35450);
var triage_data = map__35450__$1;
var phase = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35452 = phase;
var G__35452__$1 = (((G__35452 instanceof cljs.core.Keyword))?G__35452.fqn:null);
switch (G__35452__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35453_35462 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35454_35463 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35455_35464 = true;
var _STAR_print_fn_STAR__temp_val__35456_35465 = ((function (_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35455_35464;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35456_35465;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,_STAR_print_fn_STAR__temp_val__35456_35465,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,_STAR_print_fn_STAR__temp_val__35456_35465,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35447_SHARP_){
return cljs.core.dissoc.call(null,p1__35447_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,_STAR_print_fn_STAR__temp_val__35456_35465,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35453_35462,_STAR_print_fn_STAR__orig_val__35454_35463,_STAR_print_newline_STAR__temp_val__35455_35464,_STAR_print_fn_STAR__temp_val__35456_35465,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35454_35463;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35453_35462;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35457_35466 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35458_35467 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35459_35468 = true;
var _STAR_print_fn_STAR__temp_val__35460_35469 = ((function (_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35459_35468;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35460_35469;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,_STAR_print_fn_STAR__temp_val__35460_35469,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,_STAR_print_fn_STAR__temp_val__35460_35469,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35448_SHARP_){
return cljs.core.dissoc.call(null,p1__35448_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,_STAR_print_fn_STAR__temp_val__35460_35469,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35457_35466,_STAR_print_fn_STAR__orig_val__35458_35467,_STAR_print_newline_STAR__temp_val__35459_35468,_STAR_print_fn_STAR__temp_val__35460_35469,sb__4661__auto__,G__35452,G__35452__$1,loc,class_name,simple_class,cause_type,format,map__35450,map__35450__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35458_35467;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35457_35466;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35452__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610066032085
