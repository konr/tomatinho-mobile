goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__10826 = {};
var G__10827__10828 = cljs.core.seq.call(null,m);
if(G__10827__10828)
{var G__10830__10832 = cljs.core.first.call(null,G__10827__10828);
var vec__10831__10833 = G__10830__10832;
var k__10834 = cljs.core.nth.call(null,vec__10831__10833,0,null);
var v__10835 = cljs.core.nth.call(null,vec__10831__10833,1,null);
var G__10827__10836 = G__10827__10828;
var G__10830__10837 = G__10830__10832;
var G__10827__10838 = G__10827__10836;
while(true){
var vec__10839__10840 = G__10830__10837;
var k__10841 = cljs.core.nth.call(null,vec__10839__10840,0,null);
var v__10842 = cljs.core.nth.call(null,vec__10839__10840,1,null);
var G__10827__10843 = G__10827__10838;
(out__10826[cljs.core.name.call(null,k__10841)] = v__10842);
var temp__3974__auto____10844 = cljs.core.next.call(null,G__10827__10843);
if(temp__3974__auto____10844)
{var G__10827__10845 = temp__3974__auto____10844;
{
var G__10846 = cljs.core.first.call(null,G__10827__10845);
var G__10847 = G__10827__10845;
G__10830__10837 = G__10846;
G__10827__10838 = G__10847;
continue;
}
} else
{}
break;
}
} else
{}
return out__10826;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__10849 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__10849);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__10850){
var v = cljs.core.first(arglist__10850);
var text = cljs.core.rest(arglist__10850);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__10856){
var vec__10857__10858 = p__10856;
var k__10859 = cljs.core.nth.call(null,vec__10857__10858,0,null);
var v__10860 = cljs.core.nth.call(null,vec__10857__10858,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__10859),clj__GT_js.call(null,v__10860));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
