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
}catch (e54502){if(cljs.core.instance_QMARK_.call(null,Object,e54502))
{var e = e54502;
return null;
} else
{if("\uFDD0'else")
{throw e54502;
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
}catch (e54504){if(cljs.core.instance_QMARK_.call(null,Object,e54504))
{var e = e54504;
return null;
} else
{if("\uFDD0'else")
{throw e54504;
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
tomatinho.core.update_notification = (function update_notification(){
var options = cljs.core.PersistentVector.fromArray(["\uFDD0'quiet","\uFDD0'normal","\uFDD0'noisy"], true);
var new$ = tomatinho.templates.notification.call(null,options,(new cljs.core.Keyword("\uFDD0'notifications")).call(null,tomatinho.core.storage));
var G__54510_54512 = cljs.core.seq.call(null,options);
while(true){
if(G__54510_54512)
{var option_54513 = cljs.core.first.call(null,G__54510_54512);
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,cljs.core.format.call(null,"#notification a.b%s",cljs.core.name.call(null,option_54513))));
{
var G__54514 = cljs.core.next.call(null,G__54510_54512);
G__54510_54512 = G__54514;
continue;
}
} else
{}
break;
}
domina.destroy_BANG_.call(null,domina.css.sel.call(null,"#notification div"));
domina.prepend_BANG_.call(null,domina.css.sel.call(null,"#notification"),new$);
tomatinho.jquery_mobile.make_horizontal_control_group.call(null,"#notification .buttons");
var G__54511 = cljs.core.seq.call(null,options);
while(true){
if(G__54511)
{var option = cljs.core.first.call(null,G__54511);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,cljs.core.format.call(null,"#notification a.b%s",cljs.core.name.call(null,option))),"\uFDD0'click",((function (G__54511,option){
return (function (){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'notifications",option);
return update_notification.call(null);
});})(G__54511,option))
);
{
var G__54515 = cljs.core.next.call(null,G__54511);
G__54511 = G__54515;
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
var morning = (function (){var G__54527 = tomatinho.utils.now.call(null);
G__54527.setHours(8);
G__54527.setMinutes(0);
return G__54527;
})().getTime();
var first_pomodoro = (function (){var temp__3971__auto__ = cljs.core.first.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage));
if(cljs.core.truth_(temp__3971__auto__))
{var map__54528 = temp__3971__auto__;
var map__54528__$1 = ((cljs.core.seq_QMARK_.call(null,map__54528))?cljs.core.apply.call(null,cljs.core.hash_map,map__54528):map__54528);
var duration = cljs.core._lookup.call(null,map__54528__$1,"\uFDD0'duration",null);
var end = cljs.core._lookup.call(null,map__54528__$1,"\uFDD0'end",null);
return (end - duration);
} else
{return null;
}
})();
var planned = (new cljs.core.Keyword("\uFDD0'planned")).call(null,tomatinho.core.storage);
var current_set = (function (){var _BANG__BANG_ = tomatinho.utils.make_time.call(null,right_now);
return cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([_BANG__BANG_.getHours(),(((_BANG__BANG_.getMinutes() < 30))?0:30)], true)]);
})();
var actual = cljs.core.map.call(null,(function (p1__54505_SHARP_){
return (function (k){
return cljs.core.ObjMap.fromObject(["\uFDD0'end","\uFDD0'hours","\uFDD0'truncated-minutes"],{"\uFDD0'end":(new cljs.core.Keyword("\uFDD0'end")).call(null,p1__54505_SHARP_),"\uFDD0'hours":k.getHours(),"\uFDD0'truncated-minutes":(((k.getMinutes() < 30))?0:30)});
}).call(null,tomatinho.utils.make_time.call(null,((new cljs.core.Keyword("\uFDD0'end")).call(null,p1__54505_SHARP_) - (new cljs.core.Keyword("\uFDD0'duration")).call(null,p1__54505_SHARP_))));
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
var facienda = (function (){var map__54529 = cljs.core.last.call(null,actual);
var map__54529__$1 = ((cljs.core.seq_QMARK_.call(null,map__54529))?cljs.core.apply.call(null,cljs.core.hash_map,map__54529):map__54529);
var h = cljs.core._lookup.call(null,map__54529__$1,"\uFDD0'hours",null);
var m = cljs.core._lookup.call(null,map__54529__$1,"\uFDD0'truncate-minutes",null);
var after_h_m = (function (p__54530){
var vec__54531 = p__54530;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__54531,0,null);
var m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__54531,1,null);
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
var G__54532_54538 = domina.css.sel.call(null,"#day-plan tr.time");
domina.events.unlisten_BANG_.call(null,G__54532_54538);
domina.destroy_BANG_.call(null,G__54532_54538);
var G__54533_54539 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["#start-hour",cljs.core.format.call(null,"%02d:00",start)], true),cljs.core.PersistentVector.fromArray(["#end-hour",cljs.core.format.call(null,"%02d:00",end)], true),cljs.core.PersistentVector.fromArray(["#pomodoro-max",(facienda + so_far)], true),cljs.core.PersistentVector.fromArray(["#pomodoro-count",so_far], true)], true));
while(true){
if(G__54533_54539)
{var vec__54534_54540 = cljs.core.first.call(null,G__54533_54539);
var place_54541 = cljs.core.nth.call(null,vec__54534_54540,0,null);
var text_54542 = cljs.core.nth.call(null,vec__54534_54540,1,null);
domina.set_text_BANG_.call(null,domina.css.sel.call(null,place_54541),text_54542);
{
var G__54543 = cljs.core.next.call(null,G__54533_54539);
G__54533_54539 = G__54543;
continue;
}
} else
{}
break;
}
var G__54535_54544 = cljs.core.seq.call(null,cljs.core.range.call(null,start,(end + 1)));
while(true){
if(G__54535_54544)
{var hour_54545 = cljs.core.first.call(null,G__54535_54544);
var find_nearest_actual_54546 = ((function (G__54535_54544,hour_54545){
return (function (minutes){
return tomatinho.utils.find_first.call(null,((function (G__54535_54544,hour_54545){
return (function (p1__54506_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'truncated-minutes")).call(null,p1__54506_SHARP_),minutes);
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'hours")).call(null,p1__54506_SHARP_),hour_54545);
} else
{return and__3822__auto__;
}
});})(G__54535_54544,hour_54545))
,actual);
});})(G__54535_54544,hour_54545))
;
var get_time_at_54547 = ((function (G__54535_54544,hour_54545){
return (function (minutes){
return ((function (){var G__54536 = tomatinho.utils.now.call(null);
G__54536.setHours(hour_54545);
G__54536.setMinutes(minutes);
return G__54536;
})().getTime() + tomatinho.core.pomodoro_length);
});})(G__54535_54544,hour_54545))
;
domina.append_BANG_.call(null,domina.css.sel.call(null,"#day-plan tbody"),tomatinho.templates.hour_line.call(null,hour_54545,planned,current_set,cljs.core.map.call(null,find_nearest_actual_54546,cljs.core.PersistentVector.fromArray([0,30], true)),cljs.core.map.call(null,get_time_at_54547,cljs.core.PersistentVector.fromArray([0,30], true))));
{
var G__54548 = cljs.core.next.call(null,G__54535_54544);
G__54535_54544 = G__54548;
continue;
}
} else
{}
break;
}
var G__54537 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'click"], true));
while(true){
if(G__54537)
{var kind = cljs.core.first.call(null,G__54537);
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#day-plan tr.time"),kind,((function (G__54537,kind){
return (function (p1__54507_SHARP_){
return tomatinho.core.handle_plan_click.call(null,p1__54507_SHARP_,kind);
});})(G__54537,kind))
);
{
var G__54549 = cljs.core.next.call(null,G__54537);
G__54537 = G__54549;
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
var G__54551 = cljs.core.seq.call(null,tomatinho.utils.aggregate_time_blocks.call(null,(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage),tomatinho.core.pomodoro_length,timer));
while(true){
if(G__54551)
{var items = cljs.core.first.call(null,G__54551);
domina.append_BANG_.call(null,domina.by_id.call(null,"pomodoros"),tomatinho.templates.pomodoro_list.call(null,items,tomatinho.core.pomodoro_length,timer,current));
{
var G__54552 = cljs.core.next.call(null,G__54551);
G__54551 = G__54552;
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
var G__54556 = cljs.core.seq.call(null,goals);
while(true){
if(G__54556)
{var vec__54557 = cljs.core.first.call(null,G__54556);
var id = cljs.core.nth.call(null,vec__54557,0,null);
var map__54558 = cljs.core.nth.call(null,vec__54557,1,null);
var map__54558__$1 = ((cljs.core.seq_QMARK_.call(null,map__54558))?cljs.core.apply.call(null,cljs.core.hash_map,map__54558):map__54558);
var complete = cljs.core._lookup.call(null,map__54558__$1,"\uFDD0'complete",null);
var date = cljs.core._lookup.call(null,map__54558__$1,"\uFDD0'date",null);
var name = cljs.core._lookup.call(null,map__54558__$1,"\uFDD0'name",null);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,id),"\uFDD0'click",((function (G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name){
return (function (){
return tomatinho.core.handle_click_goal.call(null,id,complete);
});})(G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name))
);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("d"),cljs.core.str(cljs.core.name.call(null,id))].join('')),"\uFDD0'click",((function (G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name){
return (function (){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'goals",cljs.core.dissoc.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage),id));
return tomatinho.core.update_goals.call(null);
});})(G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name))
);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("e"),cljs.core.str(cljs.core.name.call(null,id))].join('')),"\uFDD0'click",((function (G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name){
return (function (){
cljs.core.reset_BANG_.call(null,tomatinho.core.editanda,id);
return domina.set_value_BANG_.call(null,domina.css.sel.call(null,"#add-popup input"),name);
});})(G__54556,vec__54557,id,map__54558,map__54558__$1,complete,date,name))
);
{
var G__54559 = cljs.core.next.call(null,G__54556);
G__54556 = G__54559;
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
var G__54561_54562 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,".simple-list ul")));
while(true){
if(G__54561_54562)
{var parent_54563 = cljs.core.first.call(null,G__54561_54562);
domina.append_BANG_.call(null,parent_54563,new$);
{
var G__54564 = cljs.core.next.call(null,G__54561_54562);
G__54561_54562 = G__54564;
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
var G__54566 = cljs.core.seq.call(null,nodes);
while(true){
if(G__54566)
{var node = cljs.core.first.call(null,G__54566);
domina.append_BANG_.call(null,parent,node);
{
var G__54567 = cljs.core.next.call(null,G__54566);
G__54566 = G__54567;
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
{var vec__54569 = temp__3971__auto__;
var kind = cljs.core.nth.call(null,vec__54569,0,null);
var hour = cljs.core.nth.call(null,vec__54569,1,null);
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
var vec__54571 = cljs.core.map.call(null,tomatinho.core.storage,cljs.core.PersistentVector.fromArray(["\uFDD0'day-start","\uFDD0'day-end"], true));
var start = cljs.core.nth.call(null,vec__54571,0,null);
var end = cljs.core.nth.call(null,vec__54571,1,null);
var current = tomatinho.utils.now.call(null).getHours();
var popup = tomatinho.templates.range_popup.call(null,start,end,current);
tomatinho.jquery_mobile.make_popup.call(null,popup);
return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"table.range td"),"\uFDD0'click",tomatinho.core.handle_range_click);
});
tomatinho.core.create_goals_popup = (function create_goals_popup(){
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,"#goals-popup .add"),"\uFDD0'click");
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,"#add-popup .add"),"\uFDD0'click");
domina.destroy_BANG_.call(null,domina.by_id.call(null,"goals-popup"));
domina.destroy_BANG_.call(null,domina.by_id.call(null,"add-popup"));
var goals_popup_54574 = tomatinho.templates.goals_popup_base.call(null);
var add_popup_54575 = tomatinho.templates.add_popup.call(null,"");
var G__54573_54576 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([goals_popup_54574,add_popup_54575], true));
while(true){
if(G__54573_54576)
{var clone_54577 = cljs.core.first.call(null,G__54573_54576);
tomatinho.core.append_to_body_BANG_.call(null,clone_54577);
{
var G__54578 = cljs.core.next.call(null,G__54573_54576);
G__54573_54576 = G__54578;
continue;
}
} else
{}
break;
}
tomatinho.jquery_mobile.make_popup_without_opening.call(null,"#add-popup");
tomatinho.jquery_mobile.make_popup.call(null,"#goals-popup");
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#goals-popup .add"),"\uFDD0'click",(function (){
return cljs.core.reset_BANG_.call(null,tomatinho.core.editanda,null);
}));
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#add-popup .add"),"\uFDD0'click",tomatinho.core.handle_ok_click);
return tomatinho.core.update_goals.call(null);
});
tomatinho.core.create_archive_popup = (function create_archive_popup(){
tomatinho.jquery_mobile.close_all_popups.call(null);
domina.destroy_BANG_.call(null,domina.css.sel.call(null,"#archive-popup"));
tomatinho.core.append_to_body_BANG_.call(null,tomatinho.templates.archive_popup.call(null));
tomatinho.jquery_mobile.make_popup.call(null,"#archive-popup");
var G__54580 = cljs.core.seq.call(null,cljs.core.range.call(null,1,6));
while(true){
if(G__54580)
{var x = cljs.core.first.call(null,G__54580);
domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str("f"),cljs.core.str(x)].join('')),"\uFDD0'click",((function (G__54580,x){
return (function (){
tomatinho.jquery_mobile.close_popup.call(null,"#archive-popup");
return tomatinho.core.archive.call(null,x);
});})(G__54580,x))
);
{
var G__54581 = cljs.core.next.call(null,G__54580);
G__54580 = G__54581;
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
var G__54582__delegate = function (_){
return cljs.core.not.call(null,checked_QMARK_);
};
var G__54582 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__54582__delegate.call(this, _);
};
G__54582.cljs$lang$maxFixedArity = 0;
G__54582.cljs$lang$applyTo = (function (arglist__54583){
var _ = cljs.core.seq(arglist__54583);;
return G__54582__delegate(_);
});
G__54582.cljs$lang$arity$variadic = G__54582__delegate;
return G__54582;
})()
));
return tomatinho.core.update_goals.call(null);
});
tomatinho.core.parent = (function parent(node){
return goog.dom.getAncestor(node,cljs.core.identity);
});
goog.events.BrowserEvent.prototype.cljs$core$IEncodeClojure$ = true;
goog.events.BrowserEvent.prototype.cljs$core$IEncodeClojure$_js__GT_clj$arity$2 = (function (x,p__54588){
var map__54589 = p__54588;
var map__54589__$1 = ((cljs.core.seq_QMARK_.call(null,map__54589))?cljs.core.apply.call(null,cljs.core.hash_map,map__54589):map__54589);
var options = map__54589__$1;
var keywordize_keys = cljs.core._lookup.call(null,map__54589__$1,"\uFDD0'keywordize-keys",null);
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
{var vec__54594 = temp__3971__auto__;
var kind__$1 = cljs.core.nth.call(null,vec__54594,0,null);
var cetera = cljs.core.nthnext.call(null,vec__54594,1);
if(cljs.core._EQ_.call(null,kind__$1,"planned"))
{var planned = (new cljs.core.Keyword("\uFDD0'planned")).call(null,tomatinho.core.storage);
var pair = cljs.core.map.call(null,cljs.core.int$,cetera);
var exists_QMARK_ = tomatinho.utils.find_first.call(null,(function (p1__54584_SHARP_){
return cljs.core._EQ_.call(null,p1__54584_SHARP_,pair);
}),planned);
var vec__54595 = (cljs.core.truth_(exists_QMARK_)?cljs.core.PersistentVector.fromArray(["present","absent"], true):cljs.core.PersistentVector.fromArray(["absent","present"], true));
var old = cljs.core.nth.call(null,vec__54595,0,null);
var new$ = cljs.core.nth.call(null,vec__54595,1,null);
var G__54596_54598 = target;
domina.remove_class_BANG_.call(null,G__54596_54598,old);
domina.add_class_BANG_.call(null,G__54596_54598,new$);
return cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'planned",(cljs.core.truth_(exists_QMARK_)?cljs.core.disj:cljs.core.conj).call(null,planned,pair));
} else
{var vec__54597 = cetera;
var presence = cljs.core.nth.call(null,vec__54597,0,null);
var end = cljs.core.nth.call(null,vec__54597,1,null);
var end__$1 = cljs.core.int$.call(null,end);
var without = cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__54585_SHARP_){
return cljs.core.not_EQ_.call(null,(new cljs.core.Keyword("\uFDD0'end")).call(null,p1__54585_SHARP_),end__$1);
}),(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage)));
if(cljs.core.truth_(tomatinho.utils.yes_or_no.call(null,"Are you sure you want to change the history?")))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'history",((cljs.core._EQ_.call(null,presence,"present"))?without:cljs.core.sort.call(null,(function (p1__54586_SHARP_,p2__54587_SHARP_){
return ((new cljs.core.Keyword("\uFDD0'end")).call(null,p1__54586_SHARP_) < (new cljs.core.Keyword("\uFDD0'end")).call(null,p2__54587_SHARP_));
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
tomatinho.core.handle_ok_click = (function handle_ok_click(e){
var name = domina.value.call(null,domina.css.sel.call(null,"#add-popup input"));
var date = goog.now();
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
tomatinho.jquery_mobile.close_popup.call(null,"#add-popup");
return tomatinho.core.update_goals.call(null);
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
var seconds_to_now = (function (p1__54599_SHARP_){
return tomatinho.utils.ms__GT_s.call(null,(unix_now - p1__54599_SHARP_));
});
var map__54602 = cljs.core.deref.call(null,tomatinho.core.last_updated);
var map__54602__$1 = ((cljs.core.seq_QMARK_.call(null,map__54602))?cljs.core.apply.call(null,cljs.core.hash_map,map__54602):map__54602);
var lu = map__54602__$1;
var start_time = cljs.core._lookup.call(null,map__54602__$1,"\uFDD0'start-time",null);
var beep = cljs.core._lookup.call(null,map__54602__$1,"\uFDD0'beep",null);
var pomodoro_list = cljs.core._lookup.call(null,map__54602__$1,"\uFDD0'pomodoro-list",null);
var agenda = cljs.core._lookup.call(null,map__54602__$1,"\uFDD0'agenda",null);
var diff = tomatinho.utils.ms__GT_s.call(null,(unix_now - start_time));
var n = cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,diff);
var cur = (new cljs.core.Keyword("\uFDD0'current")).call(null,tomatinho.core.storage);
var duration_ms = tomatinho.utils.s__GT_ms.call(null,n);
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
} else
{}
tomatinho.core.update_button.call(null,n,cur,now_object);
tomatinho.core.update_resources.call(null);
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
if((seconds_to_now.call(null,beep) > 60))
{cljs.core.reset_BANG_.call(null,tomatinho.core.last_updated,cljs.core.assoc.call(null,lu,"\uFDD0'beep",unix_now));
var G__54603 = (new cljs.core.Keyword("\uFDD0'notifications")).call(null,tomatinho.core.storage);
if(cljs.core._EQ_.call(null,"\uFDD0'noisy",G__54603))
{if(cljs.core._EQ_.call(null,"\uFDD0'work",cur))
{return tomatinho.core.vibrate.call(null);
} else
{var away = ((cljs.core.int$.call(null,((n / 60) / 5)) > 5) ? cljs.core.int$.call(null,((n / 60) / 5)) : 5);
tomatinho.core.vibrate.call(null);
return beep.call(null,away);
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'normal",G__54603))
{if(cljs.core._EQ_.call(null,"\uFDD0'work",cur))
{return tomatinho.core.vibrate.call(null,0.5);
} else
{tomatinho.core.vibrate.call(null,1);
return beep.call(null);
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'quiet",G__54603))
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
}catch (e54605){if(cljs.core.instance_QMARK_.call(null,Object,e54605))
{var e = e54605;
return null;
} else
{if("\uFDD0'else")
{throw e54605;
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
var G__54607_54608 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__54607_54608,"\uFDD0'current","\uFDD0'pause");
cljs.core.assoc_BANG_.call(null,G__54607_54608,"\uFDD0'history",cljs.core.PersistentVector.EMPTY);
cljs.core.assoc_BANG_.call(null,G__54607_54608,"\uFDD0'goals",cljs.core.ObjMap.EMPTY);
cljs.core.assoc_BANG_.call(null,G__54607_54608,"\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY);
return tomatinho.core.update_all.call(null);
} else
{return null;
}
});
goog.exportSymbol('tomatinho.core.reset', tomatinho.core.reset);
tomatinho.core.archive = (function archive(feeling){
cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,"\uFDD0'reflectanda",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'reflectanda")).call(null,tomatinho.core.storage),cljs.core.ObjMap.fromObject(["\uFDD0'date","\uFDD0'history","\uFDD0'feeling","\uFDD0'goals"],{"\uFDD0'date":tomatinho.utils.date_string.call(null,tomatinho.utils.now.call(null)),"\uFDD0'history":(new cljs.core.Keyword("\uFDD0'history")).call(null,tomatinho.core.storage),"\uFDD0'feeling":feeling,"\uFDD0'goals":cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage))})));
cljs.core.reset_BANG_.call(null,tomatinho.core.timer_STAR_,0);
var G__54613_54617 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__54613_54617,"\uFDD0'current","\uFDD0'pause");
cljs.core.assoc_BANG_.call(null,G__54613_54617,"\uFDD0'history",cljs.core.PersistentVector.EMPTY);
cljs.core.assoc_BANG_.call(null,G__54613_54617,"\uFDD0'goals",cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p__54614){
var vec__54615 = p__54614;
var _ = cljs.core.nth.call(null,vec__54615,0,null);
var map__54616 = cljs.core.nth.call(null,vec__54615,1,null);
var map__54616__$1 = ((cljs.core.seq_QMARK_.call(null,map__54616))?cljs.core.apply.call(null,cljs.core.hash_map,map__54616):map__54616);
var complete = cljs.core._lookup.call(null,map__54616__$1,"\uFDD0'complete",null);
return cljs.core.not.call(null,complete);
}),(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage))));
cljs.core.assoc_BANG_.call(null,G__54613_54617,"\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY);
return tomatinho.core.update_all.call(null);
});
goog.exportSymbol('tomatinho.core.archive', tomatinho.core.archive);
tomatinho.utils.log.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p__54618){
var vec__54619 = p__54618;
var _ = cljs.core.nth.call(null,vec__54619,0,null);
var map__54620 = cljs.core.nth.call(null,vec__54619,1,null);
var map__54620__$1 = ((cljs.core.seq_QMARK_.call(null,map__54620))?cljs.core.apply.call(null,cljs.core.hash_map,map__54620):map__54620);
var complete = cljs.core._lookup.call(null,map__54620__$1,"\uFDD0'complete",null);
return complete;
}),cljs.core.vec.call(null,(new cljs.core.Keyword("\uFDD0'goals")).call(null,tomatinho.core.storage)))));
tomatinho.core.init = (function init(){
tomatinho.jquery_mobile.swipe_between_pages.call(null);
tomatinho.jquery_mobile.animate_navbar.call(null);
var G__54624_54627 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'current","\uFDD0'pause"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'history",cljs.core.PersistentVector.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'goals",cljs.core.ObjMap.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'planned",cljs.core.PersistentHashSet.EMPTY], true),cljs.core.PersistentVector.fromArray(["\uFDD0'day-start",8], true),cljs.core.PersistentVector.fromArray(["\uFDD0'day-end",23], true),cljs.core.PersistentVector.fromArray(["\uFDD0'notifications","\uFDD0'normal"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'refletanda",cljs.core.PersistentVector.EMPTY], true)], true));
while(true){
if(G__54624_54627)
{var vec__54625_54628 = cljs.core.first.call(null,G__54624_54627);
var k_54629 = cljs.core.nth.call(null,vec__54625_54628,0,null);
var v_54630 = cljs.core.nth.call(null,vec__54625_54628,1,null);
if(cljs.core.not.call(null,cljs.core._lookup.call(null,tomatinho.core.storage,k_54629,null)))
{cljs.core.assoc_BANG_.call(null,tomatinho.core.storage,k_54629,v_54630);
} else
{}
{
var G__54631 = cljs.core.next.call(null,G__54624_54627);
G__54624_54627 = G__54631;
continue;
}
} else
{}
break;
}
var G__54626_54632 = tomatinho.core.storage;
cljs.core.assoc_BANG_.call(null,G__54626_54632,"\uFDD0'current","\uFDD0'pause");
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
