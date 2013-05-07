goog.provide('tomatinho.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina.css');
goog.require('domina');
goog.require('tomatinho.jquery_mobile');
goog.require('tomatinho.utils');
goog.require('tomatinho.jquery_mobile');
goog.require('tomatinho.utils');
goog.require('tomatinho.templates');
goog.require('goog.date.DateTime');
goog.require('domina.events');
goog.require('goog.dom');
goog.require('hiccups.runtime');
goog.require('goog.Timer');
goog.require('domina');
goog.require('goog.object');
goog.require('domina.css');
goog.require('shoreleave.browser.storage.localstorage');
tomatinho.core.pomodoro_length = tomatinho.utils.s__GT_ms.call(null,(25 * 60));
tomatinho.core.editanda = cljs.core.atom.call(null,null);
tomatinho.core.timer_STAR_ = cljs.core.atom.call(null,null);
tomatinho.core.last_updated = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
tomatinho.core.storage = shoreleave.browser.storage.localstorage.storage.call(null);
tomatinho.core.append_to_body_BANG_ = (function append_to_body_BANG_(x){
return domina.append_BANG_.call(null,domina.css.sel.call(null,"div.ui-page-active"),x);
});
tomatinho.core.beep = (function() {
var beep = null;
var beep__0 = (function (){
return beep.call(null,1);
});
var beep__1 = (function (n){
try{return navigator.notification.beep(n);
}catch (e20267){if(cljs.core.instance_QMARK_.call(null,Object,e20267))
{var e = e20267;
return null;
} else
{if("\uFDD0'else")
{throw e20267;
} else
{return null;
}
}
}});
beep = function(n){
switch(arguments.length){
case 0:
return beep__0.call(this);
case 1:
return beep__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
beep.cljs$lang$arity$0 = beep__0;
beep.cljs$lang$arity$1 = beep__1;
return beep;
})()
;
tomatinho.core.vibrate = (function() {
var vibrate = null;
var vibrate__0 = (function (){
return vibrate.call(null,tomatinho.utils.s__GT_ms.call(null,1));
});
var vibrate__1 = (function (n){
try{return navigator.notification.vibrate(n);
}catch (e20269){if(cljs.core.instance_QMARK_.call(null,Object,e20269))
{var e = e20269;
return null;
} else
{if("\uFDD0'else")
{throw e20269;
} else
{return null;
}
}
}});
vibrate = function(n){
switch(arguments.length){
case 0:
return vibrate__0.call(this);
case 1:
return vibrate__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vibrate.cljs$lang$arity$0 = vibrate__0;
vibrate.cljs$lang$arity$1 = vibrate__1;
return vibrate;
})()
;
tomatinho.core.prompt = (function() {
var prompt = null;
var prompt__3 = (function (message,prior,callback){
return prompt.call(null,message,prior,callback,"",cljs.core.PersistentVector.EMPTY);
});
var prompt__5 = (function (message,prior,callback,title,labels){
return callback.call(null,window.prompt(message,prior));
});
prompt = function(message,prior,callback,title,labels){
switch(arguments.length){
case 3:
return prompt__3.call(this,message,prior,callback);
case 5:
return prompt__5.call(this,message,prior,callback,title,labels);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prompt.cljs$lang$arity$3 = prompt__3;
prompt.cljs$lang$arity$5 = prompt__5;
return prompt;
})()
;
tomatinho.core.update_notification = (function update_notification(){
var options = cljs.core.PersistentVector.fromArray(["\uFDD0'quiet","\uFDD0'normal","\uFDD0'noisy"], true);
var new$ = tomatinho.templates.notification.call(null,options,(new cljs.core.Keyword("\uFDD0'notifications")).call(null,tomatinho.core.storage));
var G__20275_20277 = cljs.core.seq.call(null,options);
while(true){
if(G__20275_20277)
{var option_20278 = cljs.core.first.call(null,G__20275_20277);
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,cljs.core.format.call(null,"#notification a.b%s",cljs.core.name.call(null,option_20278))),"\uFDD0'click");
{
var G__20279 = cljs.core.next.call(null,G__20275_20277);
G__20275_20277 = G__20279;
continue;
}
} else
{}
break;
}
domina.destroy_BANG_.call(null,domina.css.sel.call(null,"#notification div"));
domina.prepend_BANG_.call(null,domina.css.sel.call(null,"#notification"),new$);
tomatinho.jquery_mobile.make_horizontal_control_group.call(null,"#notification .buttons");
var G__20276 = cljs.core.seq.call(null,options);
while(true){
if(G__20276)
{var option = cljs.core.first.call(null,G__20276);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,cljs.core.format.call(null,"#notification a.b%s",cljs.core.name.call(null,option))),"\uFDD0'click",((function (G__20276,option){
return (function (){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'notifications",option);
return update_notification.call(null);
});})(G__20276,option))
);
{
var G__20280 = cljs.core.next.call(null,G__20276);
G__20276 = G__20280;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.update_resources = (function update_resources(){
var right_now = goog.now();
var morning = (function (){var G__20292 = tomatinho.utils.now.call(null);
G__20292.setHours(8);
G__20292.setMinutes(0);
return G__20292;
})().getTime();
var first_pomodoro = (function (){var temp__3971__auto__ = cljs.core.first.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage));
if(cljs.core.truth_(temp__3971__auto__))
{var map__20293 = temp__3971__auto__;
var map__20293__$1 = ((cljs.core.seq_QMARK_.call(null,map__20293))?cljs.core.apply.call(null,cljs.core.hash_map,map__20293):map__20293);
var duration = cljs.core._lookup.call(null,map__20293__$1,"\uFDD0'duration",null);
var end = cljs.core._lookup.call(null,map__20293__$1,"\uFDD0'end",null);
return (end - duration);
} else
{return null;
}
})();
var planned = (new cljs.core.Keyword("\uFDD0'planned")).call(null,tomatinho.core.storage);
var current_set = (function (){var _BANG__BANG_ = tomatinho.utils.make_time.call(null,right_now);
return cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([_BANG__BANG_.getHours(),(((_BANG__BANG_.getMinutes() < 30))?0:30)], true)]);
})();
var actual = cljs.core.map.call(null,(function (p1__20270_SHARP_){
return (function (k){
return cljs.core.ObjMap.fromObject(["\uFDD0'end","\uFDD0'hours","\uFDD0'truncated-minutes"],{"\uFDD0'end":(new cljs.core.Keyword("\uFDD0'end")).call(null,p1__20270_SHARP_),"\uFDD0'hours":k.getHours(),"\uFDD0'truncated-minutes":(((k.getMinutes() < 30))?0:30)});
}).call(null,tomatinho.utils.make_time.call(null,((new cljs.core.Keyword("\uFDD0'end")).call(null,p1__20270_SHARP_) - (new cljs.core.Keyword("\uFDD0'duration")).call(null,p1__20270_SHARP_))));
}),(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage));
var start = (function (){var or__3824__auto__ = (new cljs.core.Keyword("\uFDD0'day-start")).call(null,tomatinho.core.storage);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return tomatinho.utils.make_time.call(null,(cljs.core.truth_(first_pomodoro)?((((morning > first_pomodoro) ? morning : first_pomodoro) < right_now) ? ((morning > first_pomodoro) ? morning : first_pomodoro) : right_now):right_now)).getHours();
}
})();
var end = (new cljs.core.Keyword("\uFDD0'day-end")).call(null,tomatinho.core.storage);
var so_far = cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage));
var facienda = (function (){var map__20294 = cljs.core.last.call(null,actual);
var map__20294__$1 = ((cljs.core.seq_QMARK_.call(null,map__20294))?cljs.core.apply.call(null,cljs.core.hash_map,map__20294):map__20294);
var h = cljs.core._lookup.call(null,map__20294__$1,"\uFDD0'hours",null);
var m = cljs.core._lookup.call(null,map__20294__$1,"\uFDD0'truncate-minutes",null);
var after_h_m = (function (p__20295){
var vec__20296 = p__20295;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__20296,0,null);
var m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__20296,1,null);
var or__3824__auto__ = (h < h_SINGLEQUOTE_);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var and__3822__auto__ = cljs.core._EQ_.call(null,h,h_SINGLEQUOTE_);
if(and__3822__auto__)
{return (m < m_SINGLEQUOTE_);
} else
{return and__3822__auto__;
}
}
});
return cljs.core.count.call(null,cljs.core.filter.call(null,after_h_m,planned));
})();
var G__20297_20303 = domina.css.sel.call(null,"#day-plan tr.time");
domina.events.unlisten_BANG_.call(null,G__20297_20303);
domina.destroy_BANG_.call(null,G__20297_20303);
var G__20298_20304 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["#start-hour",cljs.core.format.call(null,"%02d:00",start)], true),cljs.core.PersistentVector.fromArray(["#end-hour",cljs.core.format.call(null,"%02d:00",end)], true),cljs.core.PersistentVector.fromArray(["#pomodoro-max",(facienda + so_far)], true),cljs.core.PersistentVector.fromArray(["#pomodoro-count",so_far], true)], true));
while(true){
if(G__20298_20304)
{var vec__20299_20305 = cljs.core.first.call(null,G__20298_20304);
var place_20306 = cljs.core.nth.call(null,vec__20299_20305,0,null);
var text_20307 = cljs.core.nth.call(null,vec__20299_20305,1,null);
domina.set_text_BANG_.call(null,domina.css.sel.call(null,place_20306),text_20307);
{
var G__20308 = cljs.core.next.call(null,G__20298_20304);
G__20298_20304 = G__20308;
continue;
}
} else
{}
break;
}
var G__20300_20309 = cljs.core.seq.call(null,cljs.core.range.call(null,start,(end + 1)));
while(true){
if(G__20300_20309)
{var hour_20310 = cljs.core.first.call(null,G__20300_20309);
var find_nearest_actual_20311 = ((function (G__20300_20309,hour_20310){
return (function (minutes){
return tomatinho.utils.find_first.call(null,((function (G__20300_20309,hour_20310){
return (function (p1__20271_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'truncated-minutes")).call(null,p1__20271_SHARP_),minutes);
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'hours")).call(null,p1__20271_SHARP_),hour_20310);
} else
{return and__3822__auto__;
}
});})(G__20300_20309,hour_20310))
,actual);
});})(G__20300_20309,hour_20310))
;
var get_time_at_20312 = ((function (G__20300_20309,hour_20310){
return (function (minutes){
return ((function (){var G__20301 = tomatinho.utils.now.call(null);
G__20301.setHours(hour_20310);
G__20301.setMinutes(minutes);
return G__20301;
})().getTime() + tomatinho.core.pomodoro_length);
});})(G__20300_20309,hour_20310))
;
domina.append_BANG_.call(null,domina.css.sel.call(null,"#day-plan tbody"),tomatinho.templates.hour_line.call(null,hour_20310,planned,current_set,cljs.core.map.call(null,find_nearest_actual_20311,cljs.core.PersistentVector.fromArray([0,30], true)),cljs.core.map.call(null,get_time_at_20312,cljs.core.PersistentVector.fromArray([0,30], true))));
{
var G__20313 = cljs.core.next.call(null,G__20300_20309);
G__20300_20309 = G__20313;
continue;
}
} else
{}
break;
}
var G__20302 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'click"], true));
while(true){
if(G__20302)
{var kind = cljs.core.first.call(null,G__20302);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#day-plan tr.time"),kind,((function (G__20302,kind){
return (function (p1__20272_SHARP_){
return tomatinho.core.handle_plan_click.call(null,p1__20272_SHARP_,kind);
});})(G__20302,kind))
);
{
var G__20314 = cljs.core.next.call(null,G__20302);
G__20302 = G__20314;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.update_button = (function() {
var update_button = null;
var update_button__0 = (function (){
return update_button.call(null,cljs.core.deref.call(null,tomatinho.core.timer_STAR_),(new cljs.core.Keyword("\uFDD0'current")).call(null,tomatinho.core.storage),tomatinho.utils.now.call(null));
});
var update_button__3 = (function (timer,current,now_object){
domina.destroy_BANG_.call(null,domina.by_id.call(null,"timer-text"));
return domina.append_BANG_.call(null,domina.by_id.call(null,"current-time"),tomatinho.templates.time_button.call(null,timer,current,now_object));
});
update_button = function(timer,current,now_object){
switch(arguments.length){
case 0:
return update_button__0.call(this);
case 3:
return update_button__3.call(this,timer,current,now_object);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_button.cljs$lang$arity$0 = update_button__0;
update_button.cljs$lang$arity$3 = update_button__3;
return update_button;
})()
;
tomatinho.core.update_status = (function update_status(){
domina.destroy_BANG_.call(null,domina.by_class.call(null,"status"));
var timer = cljs.core.deref.call(null,tomatinho.core.timer_STAR_);
var current = (new cljs.core.Keyword("\uFDD0'current")).call(null,tomatinho.core.storage);
var G__20316 = cljs.core.seq.call(null,tomatinho.utils.aggregate_time_blocks.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage),tomatinho.core.pomodoro_length,timer));
while(true){
if(G__20316)
{var items = cljs.core.first.call(null,G__20316);
domina.append_BANG_.call(null,domina.by_id.call(null,"pomodoros"),tomatinho.templates.pomodoro_list.call(null,items,tomatinho.core.pomodoro_length,timer,current));
{
var G__20317 = cljs.core.next.call(null,G__20316);
G__20316 = G__20317;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.update_goals_popup = (function update_goals_popup(){
var goals = cljs.core.vec.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage));
var new$ = tomatinho.templates.goals_popup_list.call(null,goals);
domina.prepend_BANG_.call(null,domina.css.sel.call(null,"#goals-popup .placeholder"),new$);
tomatinho.jquery_mobile.update_page.call(null);
tomatinho.jquery_mobile.reposition_popup_to_origin.call(null,"#goals-popup");
var G__20321 = cljs.core.seq.call(null,goals);
while(true){
if(G__20321)
{var vec__20322 = cljs.core.first.call(null,G__20321);
var id = cljs.core.nth.call(null,vec__20322,0,null);
var map__20323 = cljs.core.nth.call(null,vec__20322,1,null);
var map__20323__$1 = ((cljs.core.seq_QMARK_.call(null,map__20323))?cljs.core.apply.call(null,cljs.core.hash_map,map__20323):map__20323);
var complete = cljs.core._lookup.call(null,map__20323__$1,"\uFDD0'complete",null);
var date = cljs.core._lookup.call(null,map__20323__$1,"\uFDD0'date",null);
var name = cljs.core._lookup.call(null,map__20323__$1,"\uFDD0'name",null);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,id),"\uFDD0'click",((function (G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name){
return (function (){
return tomatinho.core.handle_click_goal.call(null,id,complete);
});})(G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name))
);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("d"),cljs.core.str(cljs.core.name.call(null,id))].join('')),"\uFDD0'click",((function (G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name){
return (function (){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'goals",cljs.core.dissoc.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage),id));
return tomatinho.core.update_goals.call(null);
});})(G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name))
);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("e"),cljs.core.str(cljs.core.name.call(null,id))].join('')),"\uFDD0'click",((function (G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name){
return (function (){
cljs.core.reset_BANG_.call(null,tomatinho.core.editanda,id);
return tomatinho.core.prompt.call(null,"Name the goal",name,tomatinho.core.handle_goal_prompt);
});})(G__20321,vec__20322,id,map__20323,map__20323__$1,complete,date,name))
);
{
var G__20324 = cljs.core.next.call(null,G__20321);
G__20321 = G__20324;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.update_goals = (function update_goals(){
domina.destroy_BANG_.call(null,domina.by_class.call(null,"goal"));
var goals = cljs.core.vec.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage));
var new$ = tomatinho.templates.simple_goals_list.call(null,goals);
var G__20326_20327 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,".simple-list ul")));
while(true){
if(G__20326_20327)
{var parent_20328 = cljs.core.first.call(null,G__20326_20327);
domina.append_BANG_.call(null,parent_20328,new$);
{
var G__20329 = cljs.core.next.call(null,G__20326_20327);
G__20326_20327 = G__20329;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(domina.css.sel.call(null,"#goals-popup")))
{return tomatinho.core.update_goals_popup.call(null);
} else
{return null;
}
});
tomatinho.core.update_reflectanda = (function update_reflectanda(){
domina.destroy_BANG_.call(null,domina.by_class.call(null,"reflectanda"));
var nodes = tomatinho.templates.reflectanda.call(null,(new cljs.core.Keyword("\uFDD0'reflectanda")).call(null,tomatinho.core.storage),tomatinho.core.create_info_popup);
var parent = domina.css.sel.call(null,"#review tbody");
var G__20331 = cljs.core.seq.call(null,nodes);
while(true){
if(G__20331)
{var node = cljs.core.first.call(null,G__20331);
domina.append_BANG_.call(null,parent,node);
{
var G__20332 = cljs.core.next.call(null,G__20331);
G__20331 = G__20332;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.create_info_popup = (function create_info_popup(n){
domina.destroy_BANG_.call(null,domina.by_id.call(null,"info-popup"));
return tomatinho.jquery_mobile.make_popup.call(null,tomatinho.templates.info_popup.call(null,cljs.core._lookup.call(null,cljs.core.vec.call(null,(new cljs.core.Keyword("\uFDD0'reflectanda")).call(null,tomatinho.core.storage)),n,null),tomatinho.core.pomodoro_length));
});
tomatinho.core.handle_range_click = (function handle_range_click(e){
var temp__3971__auto__ = cljs.core.re_seq.call(null,/\w+/,e.evt.target.id);
if(cljs.core.truth_(temp__3971__auto__))
{var vec__20334 = temp__3971__auto__;
var kind = cljs.core.nth.call(null,vec__20334,0,null);
var hour = cljs.core.nth.call(null,vec__20334,1,null);
var keyword = cljs.core._lookup.call(null,cljs.core.ObjMap.fromObject(["start","end"],{"start":"\uFDD0'day-start","end":"\uFDD0'day-end"}),kind,null);
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,keyword,cljs.core.int$.call(null,hour));
tomatinho.core.update_resources.call(null);
return tomatinho.jquery_mobile.close_popup.call(null,"#popup");
} else
{return null;
}
});
tomatinho.core.create_range_popup = (function create_range_popup(e){
domina.destroy_BANG_.call(null,domina.by_id.call(null,"popup"));
var vec__20336 = cljs.core.map.call(null,tomatinho.core.storage,cljs.core.PersistentVector.fromArray(["\uFDD0'day-start","\uFDD0'day-end"], true));
var start = cljs.core.nth.call(null,vec__20336,0,null);
var end = cljs.core.nth.call(null,vec__20336,1,null);
var current = tomatinho.utils.now.call(null).getHours();
var popup = tomatinho.templates.range_popup.call(null,start,end,current);
tomatinho.jquery_mobile.make_popup.call(null,popup);
return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"table.range td"),"\uFDD0'click",tomatinho.core.handle_range_click);
});
tomatinho.core.create_goals_popup = (function create_goals_popup(){
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,"#goals-popup .add"),"\uFDD0'click");
domina.destroy_BANG_.call(null,domina.by_id.call(null,"goals-popup"));
tomatinho.core.append_to_body_BANG_.call(null,tomatinho.templates.goals_popup_base.call(null));
tomatinho.jquery_mobile.make_popup.call(null,"#goals-popup");
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#goals-popup .add"),"\uFDD0'click",(function (){
cljs.core.reset_BANG_.call(null,tomatinho.core.editanda,null);
return tomatinho.core.prompt.call(null,"Name the goal","",tomatinho.core.handle_goal_prompt);
}));
return tomatinho.core.update_goals.call(null);
});
tomatinho.core.create_archive_popup = (function create_archive_popup(){
tomatinho.jquery_mobile.close_all_popups.call(null);
domina.destroy_BANG_.call(null,domina.css.sel.call(null,"#archive-popup"));
tomatinho.core.append_to_body_BANG_.call(null,tomatinho.templates.archive_popup.call(null));
tomatinho.jquery_mobile.make_popup.call(null,"#archive-popup");
var G__20338 = cljs.core.seq.call(null,cljs.core.range.call(null,1,6));
while(true){
if(G__20338)
{var x = cljs.core.first.call(null,G__20338);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("f"),cljs.core.str(x)].join('')),"\uFDD0'click",((function (G__20338,x){
return (function (){
tomatinho.jquery_mobile.close_popup.call(null,"#archive-popup");
return tomatinho.core.archive.call(null,x);
});})(G__20338,x))
);
{
var G__20339 = cljs.core.next.call(null,G__20338);
G__20338 = G__20339;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.core.update_all = (function update_all(){
tomatinho.core.update_resources.call(null);
tomatinho.core.update_notification.call(null);
tomatinho.core.update_reflectanda.call(null);
tomatinho.core.update_goals.call(null);
tomatinho.core.update_status.call(null);
return tomatinho.core.update_button.call(null);
});
tomatinho.core.handle_click_goal = (function handle_click_goal(id,checked_QMARK_){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'goals",cljs.core.update_in.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage),cljs.core.PersistentVector.fromArray([id,"\uFDD0'complete"], true),(function() { 
var G__20340__delegate = function (_){
return cljs.core.not.call(null,checked_QMARK_);
};
var G__20340 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20340__delegate.call(this, _);
};
G__20340.cljs$lang$maxFixedArity = 0;
G__20340.cljs$lang$applyTo = (function (arglist__20341){
var _ = cljs.core.seq(arglist__20341);;
return G__20340__delegate(_);
});
G__20340.cljs$lang$arity$variadic = G__20340__delegate;
return G__20340;
})()
));
return tomatinho.core.update_goals.call(null);
});
tomatinho.core.parent = (function parent(node){
return goog.dom.getAncestor(node,cljs.core.identity);
});
goog.events.BrowserEvent.prototype.cljs$core$IEncodeClojure$ = true;
goog.events.BrowserEvent.prototype.cljs$core$IEncodeClojure$_js__GT_clj$arity$2 = (function (x,p__20346){
var map__20347 = p__20346;
var map__20347__$1 = ((cljs.core.seq_QMARK_.call(null,map__20347))?cljs.core.apply.call(null,cljs.core.hash_map,map__20347):map__20347);
var options = map__20347__$1;
var keywordize_keys = cljs.core._lookup.call(null,map__20347__$1,"\uFDD0'keywordize-keys",null);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
return cljs.core.zipmap.call(null,cljs.core.map.call(null,keyfn,goog.object.getKeys(x)),cljs.core.map.call(null,cljs.core._js__GT_clj,goog.object.getValues(x)));
});
goog.events.BrowserEvent.prototype.cljs$core$IEncodeClojure$_js__GT_clj$arity$1 = (function (x){
return cljs.core._js__GT_clj.call(null,x,cljs.core.ObjMap.fromObject(["\uFDD0'keywordize-keys"],{"\uFDD0'keywordize-keys":false}));
});
tomatinho.core.handle_plan_click = (function handle_plan_click(e,kind){
var event = cljs.core.js__GT_clj.call(null,e.evt);
var target = event.call(null,"target");
tomatinho.utils.log.call(null,event,target);
var temp__3971__auto__ = cljs.core.re_seq.call(null,/\w+/,target.id);
if(cljs.core.truth_(temp__3971__auto__))
{var vec__20352 = temp__3971__auto__;
var kind__$1 = cljs.core.nth.call(null,vec__20352,0,null);
var cetera = cljs.core.nthnext.call(null,vec__20352,1);
if(cljs.core._EQ_.call(null,kind__$1,"planned"))
{var planned = (new cljs.core.Keyword("\uFDD0'planned")).call(null,tomatinho.core.storage);
var pair = cljs.core.map.call(null,cljs.core.int$,cetera);
var exists_QMARK_ = tomatinho.utils.find_first.call(null,(function (p1__20342_SHARP_){
return cljs.core._EQ_.call(null,p1__20342_SHARP_,pair);
}),planned);
var vec__20353 = (cljs.core.truth_(exists_QMARK_)?cljs.core.PersistentVector.fromArray(["present","absent"], true):cljs.core.PersistentVector.fromArray(["absent","present"], true));
var old = cljs.core.nth.call(null,vec__20353,0,null);
var new$ = cljs.core.nth.call(null,vec__20353,1,null);
var G__20354_20356 = target;
domina.remove_class_BANG_.call(null,G__20354_20356,old);
domina.add_class_BANG_.call(null,G__20354_20356,new$);
return cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'planned",(cljs.core.truth_(exists_QMARK_)?cljs.core.disj:cljs.core.conj).call(null,planned,pair));
} else
{var vec__20355 = cetera;
var presence = cljs.core.nth.call(null,vec__20355,0,null);
var end = cljs.core.nth.call(null,vec__20355,1,null);
var end__$1 = cljs.core.int$.call(null,end);
var without = cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__20343_SHARP_){
return cljs.core.not_EQ_.call(null,(new cljs.core.Keyword("\uFDD0'end")).call(null,p1__20343_SHARP_),end__$1);
}),(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage)));
if(cljs.core.truth_(tomatinho.utils.yes_or_no.call(null,"Are you sure you want to change the history?")))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'history",((cljs.core._EQ_.call(null,presence,"present"))?without:cljs.core.sort.call(null,(function (p1__20344_SHARP_,p2__20345_SHARP_){
return ((new cljs.core.Keyword("\uFDD0'end")).call(null,p1__20344_SHARP_) < (new cljs.core.Keyword("\uFDD0'end")).call(null,p2__20345_SHARP_));
}),cljs.core.conj.call(null,without,cljs.core.ObjMap.fromObject(["\uFDD0'end","\uFDD0'duration","\uFDD0'kind"],{"\uFDD0'end":end__$1,"\uFDD0'duration":tomatinho.core.pomodoro_length,"\uFDD0'kind":"\uFDD0'pomodoro"})))));
tomatinho.core.update_resources.call(null);
return tomatinho.core.update_status.call(null);
} else
{return null;
}
}
} else
{return null;
}
});
tomatinho.core.handle_goal_prompt = (function handle_goal_prompt(name){
if(cljs.core.truth_(name))
{var date = goog.now();
var complete = null;
var id = cljs.core.deref.call(null,tomatinho.core.editanda);
var id__$1 = (function (){var or__3824__auto__ = id;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return [cljs.core.str(date),cljs.core.str("-"),cljs.core.str(name)].join('');
}
})();
var pretty = cljs.core.PersistentArrayMap.fromArrays([id__$1],[cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'date","\uFDD0'complete"],{"\uFDD0'name":name,"\uFDD0'date":date,"\uFDD0'complete":complete})]);
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'goals",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage),pretty));
return tomatinho.core.update_goals.call(null);
} else
{return null;
}
});
tomatinho.core.handle_click = (function handle_click(){
tomatinho.core.inhibit_sleep.call(null);
if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'current")).call(null,tomatinho.core.storage),"\uFDD0'pause"))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'current","\uFDD0'work");
} else
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'current","\uFDD0'pause");
}
cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,0);
cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.zipmap.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'agenda","\uFDD0'pomodoro-list","\uFDD0'beep","\uFDD0'start-time"], true),cljs.core.repeat.call(null,goog.now())));
tomatinho.core.update_button.call(null);
return tomatinho.core.update_status.call(null);
});
tomatinho.core.handle_forgo_click = (function handle_forgo_click(e){
if(cljs.core.truth_(tomatinho.utils.yes_or_no.call(null,"Are you sure?")))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'reflectanda",cljs.core.PersistentVector.EMPTY);
return tomatinho.core.update_reflectanda.call(null);
} else
{return null;
}
});
tomatinho.core.tick = (function tick(){
var now_object = tomatinho.utils.now.call(null);
var unix_now = now_object.getTime();
var seconds_to_now = (function (p1__20357_SHARP_){
return tomatinho.utils.ms__GT_s.call(null,(unix_now - p1__20357_SHARP_));
});
var map__20360 = cljs.core.deref.call(null,tomatinho.core.last_updated);
var map__20360__$1 = ((cljs.core.seq_QMARK_.call(null,map__20360))?cljs.core.apply.call(null,cljs.core.hash_map,map__20360):map__20360);
var lu = map__20360__$1;
var start_time = cljs.core._lookup.call(null,map__20360__$1,"\uFDD0'start-time",null);
var pomodoro_list = cljs.core._lookup.call(null,map__20360__$1,"\uFDD0'pomodoro-list",null);
var agenda = cljs.core._lookup.call(null,map__20360__$1,"\uFDD0'agenda",null);
var n = cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,seconds_to_now.call(null,start_time));
var cur = (new cljs.core.Keyword("\uFDD0'current")).call(null,tomatinho.core.storage);
var duration_ms = tomatinho.utils.s__GT_ms.call(null,n);
tomatinho.core.update_button.call(null,n,cur,now_object);
if((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,cur,"\uFDD0'work");
if(and__3822__auto__)
{return (duration_ms >= tomatinho.core.pomodoro_length);
} else
{return and__3822__auto__;
}
})())
{cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,0);
cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.assoc.call(null,lu,"\uFDD0'start-time",unix_now));
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'history",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage),cljs.core.ObjMap.fromObject(["\uFDD0'duration","\uFDD0'end","\uFDD0'kind"],{"\uFDD0'duration":duration_ms,"\uFDD0'end":now_object.getTime(),"\uFDD0'kind":"\uFDD0'pomodoro"})));
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'current","\uFDD0'pause");
tomatinho.core.update_resources.call(null);
} else
{}
if((seconds_to_now.call(null,pomodoro_list) > 30))
{cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.assoc.call(null,lu,"\uFDD0'pomodoro-list",unix_now));
tomatinho.core.update_status.call(null);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto__ = (function (){var or__3824__auto__ = cljs.core._EQ_.call(null,30,now_object.getMinutes());
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core._EQ_.call(null,0,now_object.getMinutes());
}
})();
if(cljs.core.truth_(and__3822__auto__))
{return (seconds_to_now.call(null,agenda) > 60);
} else
{return and__3822__auto__;
}
})()))
{cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.assoc.call(null,lu,"\uFDD0'agenda",unix_now));
tomatinho.core.update_resources.call(null);
} else
{}
if((seconds_to_now.call(null,(new cljs.core.Keyword("\uFDD0'beep")).call(null,lu)) > 60))
{cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.assoc.call(null,lu,"\uFDD0'beep",unix_now));
var G__20361 = (new cljs.core.Keyword("\uFDD0'notifications")).call(null,tomatinho.core.storage);
if(cljs.core._EQ_.call(null,"\uFDD0'noisy",G__20361))
{if(cljs.core._EQ_.call(null,"\uFDD0'work",cur))
{return tomatinho.core.vibrate.call(null);
} else
{var away = ((cljs.core.int$.call(null,((n / 60) / 5)) < 5) ? cljs.core.int$.call(null,((n / 60) / 5)) : 5);
tomatinho.core.vibrate.call(null);
return tomatinho.core.beep.call(null,away);
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'normal",G__20361))
{if(cljs.core._EQ_.call(null,"\uFDD0'work",cur))
{return tomatinho.core.vibrate.call(null,0.5);
} else
{tomatinho.core.vibrate.call(null,1);
return tomatinho.core.beep.call(null);
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'quiet",G__20361))
{return tomatinho.utils.log.call(null,"so peaceful this message won't even show up");
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((new cljs.core.Keyword("\uFDD0'notifications")).call(null,tomatinho.core.storage))].join('')));
} else
{return null;
}
}
}
}
} else
{return null;
}
});
goog.exportSymbol('tomatinho.core.tick', tomatinho.core.tick);
tomatinho.core.inhibit_sleep = (function() {
var inhibit_sleep = null;
var inhibit_sleep__0 = (function (){
return inhibit_sleep.call(null,tomatinho.core.pomodoro_length);
});
var inhibit_sleep__1 = (function (milis){
try{return cordova.exec((function (){
return tomatinho.utils.log.call(null,"lock acquired");
}),(function (){
return tomatinho.utils.log.call(null,"lock NOT acquired");
}),"KeepAwake","keep_awake",cljs.core.clj__GT_js.call(null,cljs.core.vector.call(null,[cljs.core.str(milis)].join(''))));
}catch (e20363){if(cljs.core.instance_QMARK_.call(null,Object,e20363))
{var e = e20363;
return null;
} else
{if("\uFDD0'else")
{throw e20363;
} else
{return null;
}
}
}});
inhibit_sleep = function(milis){
switch(arguments.length){
case 0:
return inhibit_sleep__0.call(this);
case 1:
return inhibit_sleep__1.call(this,milis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
inhibit_sleep.cljs$lang$arity$0 = inhibit_sleep__0;
inhibit_sleep.cljs$lang$arity$1 = inhibit_sleep__1;
return inhibit_sleep;
})()
;
goog.exportSymbol('tomatinho.core.inhibit_sleep', tomatinho.core.inhibit_sleep);
tomatinho.core.reset = (function reset(){
if(cljs.core.truth_(tomatinho.utils.yes_or_no.call(null,"Really reset?")))
{cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,0);
var G__20365_20366 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__20365_20366,"\uFDD0'current","\uFDD0'pause");
cljs.core.assoc_BANG_.call(null,G__20365_20366,"\uFDD0'history",cljs.core.PersistentVector.EMPTY);
cljs.core.assoc_BANG_.call(null,G__20365_20366,"\uFDD0'goals",cljs.core.ObjMap.EMPTY);
cljs.core.assoc_BANG_.call(null,G__20365_20366,"\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY);
return tomatinho.core.update_all.call(null);
} else
{return null;
}
});
goog.exportSymbol('tomatinho.core.reset', tomatinho.core.reset);
tomatinho.core.archive = (function archive(feeling){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'reflectanda",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'reflectanda")).call(null,tomatinho.core.storage),cljs.core.ObjMap.fromObject(["\uFDD0'date","\uFDD0'history","\uFDD0'feeling","\uFDD0'goals"],{"\uFDD0'date":tomatinho.utils.date_string.call(null,tomatinho.utils.now.call(null)),"\uFDD0'history":(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage),"\uFDD0'feeling":feeling,"\uFDD0'goals":cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage))})));
cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,0);
var G__20371_20375 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__20371_20375,"\uFDD0'current","\uFDD0'pause");
cljs.core.assoc_BANG_.call(null,G__20371_20375,"\uFDD0'history",cljs.core.PersistentVector.EMPTY);
cljs.core.assoc_BANG_.call(null,G__20371_20375,"\uFDD0'goals",cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p__20372){
var vec__20373 = p__20372;
var _ = cljs.core.nth.call(null,vec__20373,0,null);
var map__20374 = cljs.core.nth.call(null,vec__20373,1,null);
var map__20374__$1 = ((cljs.core.seq_QMARK_.call(null,map__20374))?cljs.core.apply.call(null,cljs.core.hash_map,map__20374):map__20374);
var complete = cljs.core._lookup.call(null,map__20374__$1,"\uFDD0'complete",null);
return cljs.core.not.call(null,complete);
}),(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage))));
cljs.core.assoc_BANG_.call(null,G__20371_20375,"\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY);
return tomatinho.core.update_all.call(null);
});
goog.exportSymbol('tomatinho.core.archive', tomatinho.core.archive);
tomatinho.utils.log.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p__20376){
var vec__20377 = p__20376;
var _ = cljs.core.nth.call(null,vec__20377,0,null);
var map__20378 = cljs.core.nth.call(null,vec__20377,1,null);
var map__20378__$1 = ((cljs.core.seq_QMARK_.call(null,map__20378))?cljs.core.apply.call(null,cljs.core.hash_map,map__20378):map__20378);
var complete = cljs.core._lookup.call(null,map__20378__$1,"\uFDD0'complete",null);
return complete;
}),cljs.core.vec.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage)))));
tomatinho.core.init = (function init(){
tomatinho.jquery_mobile.swipe_between_pages.call(null);
tomatinho.jquery_mobile.animate_navbar.call(null);
var G__20382_20385 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'current","\uFDD0'pause"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'history",cljs.core.PersistentVector.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'goals",cljs.core.ObjMap.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'day-start",8], true),cljs.core.PersistentVector.fromArray(["\uFDD0'day-end",23], true),cljs.core.PersistentVector.fromArray(["\uFDD0'notifications","\uFDD0'normal"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'refletanda",cljs.core.PersistentVector.EMPTY], true)], true));
while(true){
if(G__20382_20385)
{var vec__20383_20386 = cljs.core.first.call(null,G__20382_20385);
var k_20387 = cljs.core.nth.call(null,vec__20383_20386,0,null);
var v_20388 = cljs.core.nth.call(null,vec__20383_20386,1,null);
if(cljs.core.not.call(null,cljs.core._lookup.call(null,tomatinho.core.storage,k_20387,null)))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,k_20387,v_20388);
} else
{}
{
var G__20389 = cljs.core.next.call(null,G__20382_20385);
G__20382_20385 = G__20389;
continue;
}
} else
{}
break;
}
var G__20384_20390 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__20384_20390,"\uFDD0'current","\uFDD0'pause");
cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.zipmap.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'agenda","\uFDD0'pomodoro-list","\uFDD0'beep","\uFDD0'start-time"], true),cljs.core.repeat.call(null,goog.now())));
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#current-time"),"\uFDD0'click",tomatinho.core.handle_click);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,".simple-list"),"\uFDD0'click",tomatinho.core.create_goals_popup);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#resources"),"\uFDD0'click",tomatinho.core.create_range_popup);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#forgo-reviews"),"\uFDD0'click",tomatinho.core.handle_forgo_click);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#forgo-reviews"),"\uFDD0'click",tomatinho.core.handle_forgo_click);
return tomatinho.core.update_all.call(null);
});
goog.exportSymbol('tomatinho.core.init', tomatinho.core.init);
tomatinho.core.init.call(null);
