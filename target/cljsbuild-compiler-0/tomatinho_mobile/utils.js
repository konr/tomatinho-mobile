goog.provide('tomatinho.utils');
goog.require('cljs.core');
goog.require('shoreleave.browser.storage.localstorage');
goog.require('goog.date.DateTime');
tomatinho.utils.storage = shoreleave.browser.storage.localstorage.storage.call(null);
tomatinho.utils.s__GT_ms = (function s__GT_ms(s){
return (s * 1000);
});
tomatinho.utils.ms__GT_s = (function ms__GT_s(ms){
return (ms / 1000);
});
tomatinho.utils.make_time = (function make_time(unix){
var date = (new goog.date.DateTime());
date.setTime(unix);
return date;
});
tomatinho.utils.format_time = (function format_time(unix){
var date = tomatinho.utils.make_time.call(null,unix);
return cljs.core.format.call(null,"%02d:%02d",date.getHours(),date.getMinutes());
});
tomatinho.utils.now = (function now(){
return tomatinho.utils.make_time.call(null,goog.now());
});
tomatinho.utils.aggregate_time_blocks = (function aggregate_time_blocks(history,pomodoro_length,timer_object){
var now = cljs.core.ObjMap.fromObject(["\uFDD0'end","\uFDD0'kind","\uFDD0'duration"],{"\uFDD0'end":goog.now(),"\uFDD0'kind":"\uFDD0'current","\uFDD0'duration":timer_object});
var max_distance = pomodoro_length;
var with_distance = cljs.core.map.call(null,(function (p__2880){
var vec__2881 = p__2880;
var map__2882 = cljs.core.nth.call(null,vec__2881,0,null);
var map__2882__$1 = ((cljs.core.seq_QMARK_.call(null,map__2882))?cljs.core.apply.call(null,cljs.core.hash_map,map__2882):map__2882);
var original = map__2882__$1;
var e1 = cljs.core._lookup.call(null,map__2882__$1,"\uFDD0'end",null);
var map__2883 = cljs.core.nth.call(null,vec__2881,1,null);
var map__2883__$1 = ((cljs.core.seq_QMARK_.call(null,map__2883))?cljs.core.apply.call(null,cljs.core.hash_map,map__2883):map__2883);
var e2 = cljs.core._lookup.call(null,map__2883__$1,"\uFDD0'end",null);
var d2 = cljs.core._lookup.call(null,map__2883__$1,"\uFDD0'duration",null);
return cljs.core.assoc.call(null,original,"\uFDD0'distance",((e2 - d2) - e1));
}),cljs.core.partition.call(null,2,1,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,history),now),now)));
var G__2885 = with_distance;
var vec__2886 = G__2885;
var h = cljs.core.nth.call(null,vec__2886,0,null);
var t = cljs.core.nthnext.call(null,vec__2886,1);
var all = vec__2886;
var current = cljs.core.PersistentVector.EMPTY;
var saved = cljs.core.PersistentVector.EMPTY;
var G__2885__$1 = G__2885;
var current__$1 = current;
var saved__$1 = saved;
while(true){
var vec__2887 = G__2885__$1;
var h__$1 = cljs.core.nth.call(null,vec__2887,0,null);
var t__$1 = cljs.core.nthnext.call(null,vec__2887,1);
var all__$1 = vec__2887;
var current__$2 = current__$1;
var saved__$2 = saved__$1;
if(cljs.core.empty_QMARK_.call(null,all__$1))
{return ((function (G__2885__$1,current__$1,saved__$1,vec__2887,h__$1,t__$1,all__$1,current__$2,saved__$2){
return (function (p1__2871_SHARP_){
return cljs.core.map.call(null,cljs.core.reverse,p1__2871_SHARP_);
});})(G__2885__$1,current__$1,saved__$1,vec__2887,h__$1,t__$1,all__$1,current__$2,saved__$2))
.call(null,cljs.core.reverse.call(null,cljs.core.conj.call(null,saved__$2,current__$2)));
} else
{if(((new cljs.core.Keyword("\uFDD0'distance")).call(null,h__$1) < max_distance))
{{
var G__2888 = t__$1;
var G__2889 = cljs.core.conj.call(null,current__$2,h__$1);
var G__2890 = saved__$2;
G__2885__$1 = G__2888;
current__$1 = G__2889;
saved__$1 = G__2890;
continue;
}
} else
{{
var G__2891 = t__$1;
var G__2892 = cljs.core.PersistentVector.EMPTY;
var G__2893 = cljs.core.conj.call(null,saved__$2,cljs.core.conj.call(null,current__$2,h__$1));
G__2885__$1 = G__2891;
current__$1 = G__2892;
saved__$1 = G__2893;
continue;
}
}
}
break;
}
});
tomatinho.utils.find_first = (function find_first(function$,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,function$,coll));
});
tomatinho.utils.yes_or_no = (function yes_or_no(question){
return confirm(question);
});
/**
* @param {...*} var_args
*/
tomatinho.utils.log = (function() { 
var log__delegate = function (al){
return console.log(cljs.core.clj__GT_js.call(null,al));
};
var log = function (var_args){
var al = null;
if (goog.isDef(var_args)) {
  al = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, al);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__2894){
var al = cljs.core.seq(arglist__2894);;
return log__delegate(al);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
tomatinho.utils.date_string = (function date_string(date){
return cljs.core.format.call(null,"%02d/%02d",date.getDate(),date.getMonth());
});
