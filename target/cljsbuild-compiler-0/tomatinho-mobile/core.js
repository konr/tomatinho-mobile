goog.provide('tomatinho_mobile.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.date.DateTime');
goog.require('goog.Timer');
goog.require('shoreleave.browser.storage.localstorage');
goog.require('hiccups.runtime');
goog.require('domina');
goog.require('domina.events');
tomatinho_mobile.core.now = (function now(){
var date = (new goog.date.DateTime());
date.setTime(goog.now());
return date;
});
tomatinho_mobile.core.time_string = (function time_string(date){
return cljs.core.format.call(null,"%02d:%02d:%02d",date.getHours(),date.getMinutes(),date.getSeconds());
});
tomatinho_mobile.core.yes_or_no = (function yes_or_no(question){
return confirm(question);
});
tomatinho_mobile.core.pomodoro_length = cljs.core.atom.call(null,(25 * 60));
tomatinho_mobile.core.max_distance = (3600 * 1);
tomatinho_mobile.core.separate_history = (function separate_history(){
var history = (new cljs.core.Keyword("\uFDD0'history")).call(null,shoreleave.browser.storage.localstorage.storage.call(null));
var G__12322 = cljs.core.rest.call(null,history);
var vec__12323 = G__12322;
var h = cljs.core.nth.call(null,vec__12323,0,null);
var t = cljs.core.nthnext.call(null,vec__12323,1);
var all = vec__12323;
var current = cljs.core.vector.call(null,cljs.core.first.call(null,history));
var saved = cljs.core.PersistentVector.EMPTY;
var G__12322__$1 = G__12322;
var current__$1 = current;
var saved__$1 = saved;
while(true){
var vec__12324 = G__12322__$1;
var h__$1 = cljs.core.nth.call(null,vec__12324,0,null);
var t__$1 = cljs.core.nthnext.call(null,vec__12324,1);
var all__$1 = vec__12324;
var current__$2 = current__$1;
var saved__$2 = saved__$1;
if(cljs.core.empty_QMARK_.call(null,all__$1))
{return console.log(cljs.core.conj.call(null,saved__$2,current__$2));
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (G__12322__$1,current__$1,saved__$1,vec__12324,h__$1,t__$1,all__$1,current__$2,saved__$2){
return (function (p1__12316_SHARP_){
return ((new cljs.core.Keyword("\uFDD0'end")).call(null,p1__12316_SHARP_) >= ((new cljs.core.Keyword("\uFDD0'start")).call(null,h__$1) - tomatinho_mobile.core.max_distance));
});})(G__12322__$1,current__$1,saved__$1,vec__12324,h__$1,t__$1,all__$1,current__$2,saved__$2))
,current__$2)))
{{
var G__12325 = t__$1;
var G__12326 = cljs.core.conj.call(null,current__$2,h__$1);
var G__12327 = saved__$2;
G__12322__$1 = G__12325;
current__$1 = G__12326;
saved__$1 = G__12327;
continue;
}
} else
{{
var G__12328 = t__$1;
var G__12329 = cljs.core.vector.call(null,h__$1);
var G__12330 = cljs.core.conj.call(null,saved__$2,current__$2);
G__12322__$1 = G__12328;
current__$1 = G__12329;
saved__$1 = G__12330;
continue;
}
}
}
break;
}
});
goog.exportSymbol('tomatinho_mobile.core.separate_history', tomatinho_mobile.core.separate_history);
tomatinho_mobile.core.make_string = (function make_string(length,char$){
return cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.take.call(null,length,cljs.core.repeat.call(null,char$)));
});
/**
* Displays the pomodoros done so far as a series of tubes.
*/
tomatinho_mobile.core.tomatinho_display_tubes = (function tomatinho_display_tubes(){
return null;
});
tomatinho_mobile.core.update_screen = (function update_screen(timer,current,history){
domina.destroy_BANG_.call(null,domina.by_class.call(null,"status"));
domina.destroy_BANG_.call(null,domina.by_class.call(null,"date"));
var G__12333_12335 = cljs.core.seq.call(null,cljs.core.conj.call(null,history,cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'duration"],{"\uFDD0'kind":current,"\uFDD0'duration":timer})));
while(true){
if(G__12333_12335)
{var map__12334_12336 = cljs.core.first.call(null,G__12333_12335);
var map__12334_12337__$1 = ((cljs.core.seq_QMARK_.call(null,map__12334_12336))?cljs.core.apply.call(null,cljs.core.hash_map,map__12334_12336):map__12334_12336);
var a_12338 = map__12334_12337__$1;
var duration_12339 = cljs.core._lookup.call(null,map__12334_12337__$1,"\uFDD0'duration",null);
var kind_12340 = cljs.core._lookup.call(null,map__12334_12337__$1,"\uFDD0'kind",null);
domina.append_BANG_.call(null,domina.by_id.call(null,"pomodoros"),[cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":[cljs.core.str(cljs.core.name.call(null,kind_12340)),cljs.core.str(" status")].join('')}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho_mobile.core.make_string.call(null,(duration_12339 / 60),"\u2591"))),cljs.core.str("</li>")].join(''));
{
var G__12341 = cljs.core.next.call(null,G__12333_12335);
G__12333_12335 = G__12341;
continue;
}
} else
{}
break;
}
domina.append_BANG_.call(null,domina.by_id.call(null,"pomodoros"),"<li class=\"status\">-></li>");
return domina.append_BANG_.call(null,domina.by_id.call(null,"date"),cljs.core.format.call(null,"<h1 class=\"date\">%s</h1>",tomatinho_mobile.core.time_string.call(null,tomatinho_mobile.core.now.call(null))));
});
tomatinho_mobile.core.store_event = (function store_event(kind,duration,storage){
var end = goog.now();
var start = (end - duration);
var history = (new cljs.core.Keyword("\uFDD0'history")).call(null,storage);
return cljs.core.assoc_BANG_.call(null,storage,"\uFDD0'history",cljs.core.conj.call(null,history,cljs.core.ObjMap.fromObject(["\uFDD0'start","\uFDD0'duration","\uFDD0'end","\uFDD0'kind"],{"\uFDD0'start":start,"\uFDD0'duration":duration,"\uFDD0'end":end,"\uFDD0'kind":kind})));
});
tomatinho_mobile.core.handle_keypress = (function handle_keypress(key,timer_STAR_,storage){
var code__GT_char = cljs.core.PersistentArrayMap.fromArrays([13,82],["\uFDD0'return","\uFDD0'R"]);
var char$ = code__GT_char.call(null,key.evt.charCode);
console.log(cljs.core.rest.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,storage)));
if(cljs.core._EQ_.call(null,char$,"\uFDD0'return"))
{var cur_12344 = (new cljs.core.Keyword("\uFDD0'current")).call(null,storage);
var kind_12345 = (function (){var G__12343 = cur_12344;
if(cljs.core._EQ_.call(null,"\uFDD0'pause",G__12343))
{return "\uFDD0'pause";
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'work",G__12343))
{return "\uFDD0'gave-up";
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cur_12344)].join('')));
} else
{return null;
}
}
}
})();
var duration_12346 = cljs.core.deref.call(null,timer_STAR_);
if(cljs.core._EQ_.call(null,cur_12344,"\uFDD0'pause"))
{cljs.core.assoc_BANG_.call(null,storage,"\uFDD0'current","\uFDD0'work");
} else
{}
tomatinho_mobile.core.store_event.call(null,kind_12345,duration_12346,storage);
cljs.core.reset_BANG_.call(null,timer_STAR_,0);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,char$,"\uFDD0'R");
if(and__3822__auto__)
{return tomatinho_mobile.core.yes_or_no.call(null,"Reset?");
} else
{return and__3822__auto__;
}
})()))
{cljs.core.assoc_BANG_.call(null,storage,"\uFDD0'history",cljs.core.PersistentVector.EMPTY);
cljs.core.assoc_BANG_.call(null,storage,"\uFDD0'current","\uFDD0'work");
return cljs.core.reset_BANG_.call(null,timer_STAR_,0);
} else
{return null;
}
});
tomatinho_mobile.core.handle_tick = (function handle_tick(timer_STAR_,storage){
var n = cljs.core.swap_BANG_.call(null,timer_STAR_,cljs.core.inc);
var cur = (new cljs.core.Keyword("\uFDD0'current")).call(null,storage);
if((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,cur,"\uFDD0'work");
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,cljs.core.deref.call(null,tomatinho_mobile.core.pomodoro_length),n);
} else
{return and__3822__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,timer_STAR_,0);
tomatinho_mobile.core.store_event.call(null,"\uFDD0'pomodoro",n,storage);
cljs.core.assoc_BANG_.call(null,storage,"\uFDD0'current","\uFDD0'pause");
} else
{}
return tomatinho_mobile.core.update_screen.call(null,n,cur,(new cljs.core.Keyword("\uFDD0'history")).call(null,storage));
});
tomatinho_mobile.core.history_QMARK_ = (function history_QMARK_(){
var G__12349 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,shoreleave.browser.storage.localstorage.storage.call(null)));
while(true){
if(G__12349)
{var x = cljs.core.first.call(null,G__12349);
console.log(cljs.core.format.call(null,"%s %s %s",(new cljs.core.Keyword("\uFDD0'kind")).call(null,x),(new cljs.core.Keyword("\uFDD0'start")).call(null,x),(new cljs.core.Keyword("\uFDD0'duration")).call(null,x)));
{
var G__12350 = cljs.core.next.call(null,G__12349);
G__12349 = G__12350;
continue;
}
} else
{return null;
}
break;
}
});
goog.exportSymbol('tomatinho_mobile.core.history_QMARK_', tomatinho_mobile.core.history_QMARK_);
tomatinho_mobile.core.init = (function init(){
var timer_object = (new goog.Timer((1000 / 100)));
var assure_storage = (function (key,val,storage){
if(cljs.core.not.call(null,cljs.core._lookup.call(null,storage,key,null)))
{return cljs.core.assoc_BANG_.call(null,storage,key,val);
} else
{return null;
}
});
var storage = shoreleave.browser.storage.localstorage.storage.call(null);
var timer_STAR_ = cljs.core.atom.call(null,0);
assure_storage.call(null,"\uFDD0'current","\uFDD0'pause",storage);
assure_storage.call(null,"\uFDD0'history",cljs.core.PersistentVector.EMPTY,storage);
domina.events.listen_BANG_.call(null,timer_object,goog.Timer.TICK,(function (){
return tomatinho_mobile.core.handle_tick.call(null,timer_STAR_,storage);
}));
domina.events.listen_BANG_.call(null,document,"\uFDD0'keypress",(function (p1__12347_SHARP_){
return tomatinho_mobile.core.handle_keypress.call(null,p1__12347_SHARP_,timer_STAR_,storage);
}));
return timer_object.start();
});
goog.exportSymbol('tomatinho_mobile.core.init', tomatinho_mobile.core.init);
