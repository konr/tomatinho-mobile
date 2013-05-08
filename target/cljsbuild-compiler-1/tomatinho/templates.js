goog.provide('tomatinho.templates');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('tomatinho.utils');
goog.require('domina');
goog.require('domina.events');
goog.require('hiccups.runtime');
goog.require('tomatinho.utils');
tomatinho.templates.feeling_to_emoticons = (function feeling_to_emoticons(feeling){
var kind = (((feeling < 3))?"tristis":(((feeling > 3))?"laetus":"medius"));
var src = cljs.core.format.call(null,"img/%s.png",kind);
var iter__2540__auto__ = (function iter__3183(s__3184){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3184__$1 = s__3184;
while(true){
if(cljs.core.seq.call(null,s__3184__$1))
{var _ = cljs.core.first.call(null,s__3184__$1);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src"],{"\uFDD0'src":src})], true),iter__3183.call(null,cljs.core.rest.call(null,s__3184__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,feeling));
});
tomatinho.templates.header = (function header(content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'data-role","\uFDD0'class"],{"\uFDD0'data-role":"header","\uFDD0'class":"ui-header ui-bar-a"}),cljs.core.PersistentVector.fromArray(["\uFDD0'h3",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"ui-title"}),content], true)], true);
});
tomatinho.templates.time_string = (function time_string(date){
return cljs.core.format.call(null,"%02d:%02d:%02d",date.getHours(),date.getMinutes(),date.getSeconds());
});
tomatinho.templates.hour_line = (function hour_line(hour,planned,current_set,p__3188,p__3189){
var vec__3192 = p__3188;
var actual_0 = cljs.core.nth.call(null,vec__3192,0,null);
var actual_30 = cljs.core.nth.call(null,vec__3192,1,null);
var vec__3193 = p__3189;
var time_0 = cljs.core.nth.call(null,vec__3193,0,null);
var time_30 = cljs.core.nth.call(null,vec__3193,1,null);
var present_if_true = (function (p1__3185_SHARP_){
if(cljs.core.truth_(p1__3185_SHARP_))
{return "present";
} else
{return "absent";
}
});
var also_current_when = (function (p1__3186_SHARP_,p2__3187_SHARP_){
if(cljs.core.truth_(p1__3186_SHARP_))
{return [cljs.core.str("current "),cljs.core.str(p2__3187_SHARP_)].join('');
} else
{return p2__3187_SHARP_;
}
});
return [cljs.core.str("<tr"),cljs.core.str(" class=\"time\""),cljs.core.str(">"),cljs.core.str("<td"),cljs.core.str(" class=\"hour\" rowspan=\"2\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.format.call(null,"%dh",hour))),cljs.core.str("</td>"),cljs.core.str("<"),cljs.core.str("td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":cljs.core.format.call(null,"%s-%s-%s","planned",hour,0),"\uFDD0'class":present_if_true.call(null,cljs.core.contains_QMARK_.call(null,planned,cljs.core.PersistentVector.fromArray([hour,0], true)))}))),cljs.core.str(" />"),cljs.core.str("<"),cljs.core.str("td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":cljs.core.format.call(null,"%s-%s-%s","actual",present_if_true.call(null,actual_0),(function (){var or__3824__auto__ = (new cljs.core.Keyword("\uFDD0'end")).call(null,actual_0);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return time_0;
}
})()),"\uFDD0'class":also_current_when.call(null,cljs.core.contains_QMARK_.call(null,current_set,cljs.core.PersistentVector.fromArray([hour,0], true)),present_if_true.call(null,actual_0))}))),cljs.core.str(" />"),cljs.core.str("</tr>"),cljs.core.str("<tr"),cljs.core.str(" class=\"time\""),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":cljs.core.format.call(null,"%s-%s-%s","planned",hour,30),"\uFDD0'class":present_if_true.call(null,cljs.core.contains_QMARK_.call(null,planned,cljs.core.PersistentVector.fromArray([hour,30], true)))}))),cljs.core.str(" />"),cljs.core.str("<"),cljs.core.str("td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":cljs.core.format.call(null,"%s-%s-%s","actual",present_if_true.call(null,actual_30),(function (){var or__3824__auto__ = (new cljs.core.Keyword("\uFDD0'end")).call(null,actual_30);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return time_30;
}
})()),"\uFDD0'class":also_current_when.call(null,cljs.core.contains_QMARK_.call(null,current_set,cljs.core.PersistentVector.fromArray([hour,30], true)),present_if_true.call(null,actual_30))}))),cljs.core.str(" />"),cljs.core.str("</tr>")].join('');
});
tomatinho.templates.notification = (function notification(options,current){
return [cljs.core.str("<div"),cljs.core.str(" class=\"buttons\" data-role=\"controlgroup\" data-type=\"horizontal\""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3196(s__3197){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3197__$1 = s__3197;
while(true){
if(cljs.core.seq.call(null,s__3197__$1))
{var option = cljs.core.first.call(null,s__3197__$1);
return cljs.core.cons.call(null,[cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'data-role","\uFDD0'id","\uFDD0'class"],{"\uFDD0'data-role":"button","\uFDD0'id":null,"\uFDD0'class":cljs.core.format.call(null,"b%s %s",cljs.core.name.call(null,option),((cljs.core._EQ_.call(null,option,current))?"ui-btn-active":""))}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.name.call(null,option))),cljs.core.str("</a>")].join(''),iter__3196.call(null,cljs.core.rest.call(null,s__3197__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,options);
})())),cljs.core.str("</div>")].join('');
});
tomatinho.templates.time_button = (function time_button(timer,current,now_object){
return [cljs.core.str("<span"),cljs.core.str(" id=\"timer-text\""),cljs.core.str(">"),cljs.core.str((function (){var attrs3201 = tomatinho.templates.time_string.call(null,now_object);
if(cljs.core.map_QMARK_.call(null,attrs3201))
{return [cljs.core.str("<h1"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3201))),cljs.core.str(">"),cljs.core.str("</h1>")].join('');
} else
{return [cljs.core.str("<h1>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3201)),cljs.core.str("</h1>")].join('');
}
})()),cljs.core.str((function (){var attrs3202 = (function (){var G__3203 = current;
if(cljs.core._EQ_.call(null,"\uFDD0'pause",G__3203))
{return cljs.core.format.call(null,"(inactive for %d')",(timer / 60));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'work",G__3203))
{return cljs.core.format.call(null,"%02d'%02d",(timer / 60),cljs.core.mod.call(null,timer,60));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(current)].join('')));
} else
{return null;
}
}
}
})();
if(cljs.core.map_QMARK_.call(null,attrs3202))
{return [cljs.core.str("<h2"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3202))),cljs.core.str(">"),cljs.core.str("</h2>")].join('');
} else
{return [cljs.core.str("<h2>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3202)),cljs.core.str("</h2>")].join('');
}
})()),cljs.core.str("</span>")].join('');
});
tomatinho.templates.pomodoro_list = (function pomodoro_list(p__3204,pomodoro_length,timer,current){
var vec__3213 = p__3204;
var map__3214 = cljs.core.nth.call(null,vec__3213,0,null);
var map__3214__$1 = ((cljs.core.seq_QMARK_.call(null,map__3214))?cljs.core.apply.call(null,cljs.core.hash_map,map__3214):map__3214);
var duration = cljs.core._lookup.call(null,map__3214__$1,"\uFDD0'duration",null);
var end = cljs.core._lookup.call(null,map__3214__$1,"\uFDD0'end",null);
var kind = cljs.core._lookup.call(null,map__3214__$1,"\uFDD0'kind",null);
var items = vec__3213;
return [cljs.core.str("<div"),cljs.core.str(" class=\"history\""),cljs.core.str(">"),cljs.core.str("<h2"),cljs.core.str(" class=\"status\""),cljs.core.str(">"),cljs.core.str((((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,items),1);
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,kind,"\uFDD0'current");
} else
{return and__3822__auto__;
}
})())?[cljs.core.str("Now")].join(''):[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.format.call(null,"%s - %s",tomatinho.utils.format_time.call(null,((new cljs.core.Keyword("\uFDD0'end")).call(null,cljs.core.last.call(null,items)) - (new cljs.core.Keyword("\uFDD0'duration")).call(null,cljs.core.last.call(null,items)))),((cljs.core._EQ_.call(null,kind,"\uFDD0'current"))?"Now":tomatinho.utils.format_time.call(null,end)))))].join(''))),cljs.core.str("</h2>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3215(s__3216){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3216__$1 = s__3216;
while(true){
if(cljs.core.seq.call(null,s__3216__$1))
{var map__3219 = cljs.core.first.call(null,s__3216__$1);
var map__3219__$1 = ((cljs.core.seq_QMARK_.call(null,map__3219))?cljs.core.apply.call(null,cljs.core.hash_map,map__3219):map__3219);
var end__$1 = cljs.core._lookup.call(null,map__3219__$1,"\uFDD0'end",null);
var distance = cljs.core._lookup.call(null,map__3219__$1,"\uFDD0'distance",null);
var duration__$1 = cljs.core._lookup.call(null,map__3219__$1,"\uFDD0'duration",null);
var kind__$1 = cljs.core._lookup.call(null,map__3219__$1,"\uFDD0'kind",null);
return cljs.core.cons.call(null,[cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var percentage = ((cljs.core._EQ_.call(null,kind__$1,"\uFDD0'pomodoro"))?100:((cljs.core._EQ_.call(null,current,"\uFDD0'work"))?((tomatinho.utils.s__GT_ms.call(null,100.0) / pomodoro_length) * timer):0));
var text = ((cljs.core._EQ_.call(null,kind__$1,"\uFDD0'pomodoro"))?"&nbsp;":cljs.core.format.call(null,"%d%%",percentage));
var bar = [cljs.core.str("<table"),cljs.core.str(" class=\"pomodoro-wrapper\" style=\"width: 100%\""),cljs.core.str(">"),cljs.core.str((function (){var attrs3220 = ((cljs.core._EQ_.call(null,percentage,0))?cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.format.call(null,"current %s",((cljs.core._EQ_.call(null,current,"\uFDD0'work"))?"red":"green"))})], true):cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'class","\uFDD0'style"],{"\uFDD0'class":[cljs.core.str("percentage "),cljs.core.str(((cljs.core._EQ_.call(null,kind__$1,"\uFDD0'current"))?"current":null))].join(''),"\uFDD0'style":cljs.core.format.call(null,"width: %f%%; background-color: red",percentage)}),text,(((function (){var and__3822__auto__ = (distance > 0);
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,percentage,100);
} else
{return and__3822__auto__;
}
})())?cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float: right; background-color: #0f0; border-radius: 1em; margin: -0.3em"}),cljs.core.format.call(null,"+%d'",cljs.core.int$.call(null,(tomatinho.utils.ms__GT_s.call(null,distance) / 60)))], true):null)], true));
if(cljs.core.map_QMARK_.call(null,attrs3220))
{return [cljs.core.str("<tr"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3220))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,((cljs.core._EQ_.call(null,kind__$1,"\uFDD0'current"))?cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":cljs.core.format.call(null,"border: 0; width: %f%%;",(100 - percentage))}),"\u2192"], true):null))),cljs.core.str("</tr>")].join('');
} else
{return [cljs.core.str("<tr>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3220)),cljs.core.str(hiccups.runtime.render_html.call(null,((cljs.core._EQ_.call(null,kind__$1,"\uFDD0'current"))?cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":cljs.core.format.call(null,"border: 0; width: %f%%;",(100 - percentage))}),"\u2192"], true):null))),cljs.core.str("</tr>")].join('');
}
})()),cljs.core.str("</table>")].join('');
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":[cljs.core.str(cljs.core.name.call(null,kind__$1)),cljs.core.str(" status")].join('')}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,bar)),cljs.core.str("</div>")].join('');
})()))].join(''),iter__3215.call(null,cljs.core.rest.call(null,s__3216__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,items);
})())),cljs.core.str("</div>")].join('');
});
tomatinho.templates.goals_popup_list = (function goals_popup_list(goals){
return [cljs.core.str("<ul"),cljs.core.str(" class=\"goal\" data-role=\"listview\""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3237(s__3238){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3238__$1 = s__3238;
while(true){
if(cljs.core.seq.call(null,s__3238__$1))
{var vec__3246 = cljs.core.first.call(null,s__3238__$1);
var id = cljs.core.nth.call(null,vec__3246,0,null);
var map__3247 = cljs.core.nth.call(null,vec__3246,1,null);
var map__3247__$1 = ((cljs.core.seq_QMARK_.call(null,map__3247))?cljs.core.apply.call(null,cljs.core.hash_map,map__3247):map__3247);
var complete = cljs.core._lookup.call(null,map__3247__$1,"\uFDD0'complete",null);
var date = cljs.core._lookup.call(null,map__3247__$1,"\uFDD0'date",null);
var name = cljs.core._lookup.call(null,map__3247__$1,"\uFDD0'name",null);
return cljs.core.cons.call(null,[cljs.core.str((function (){var attrs3248 = (cljs.core.truth_(complete)?cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":id,"\uFDD0'class":"selected"}),cljs.core.PersistentVector.fromArray(["\uFDD0's.text",name], true)], true):cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id}),cljs.core.PersistentVector.fromArray(["\uFDD0'span.text",name], true)], true));
if(cljs.core.map_QMARK_.call(null,attrs3248))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3248))),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'data-iconpos","\uFDD0'data-icon","\uFDD0'data-role","\uFDD0'id","\uFDD0'class"],{"\uFDD0'data-iconpos":"notext","\uFDD0'data-icon":"delete","\uFDD0'data-role":"button","\uFDD0'id":[cljs.core.str("d"),cljs.core.str(cljs.core.name.call(null,id))].join(''),"\uFDD0'class":"split-button-custom delete"}))),cljs.core.str(">"),cljs.core.str("Delete"),cljs.core.str("</a>"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'data-iconpos","\uFDD0'data-icon","\uFDD0'data-role","\uFDD0'id","\uFDD0'class"],{"\uFDD0'data-iconpos":"notext","\uFDD0'data-icon":"edit","\uFDD0'data-role":"button","\uFDD0'id":[cljs.core.str("e"),cljs.core.str(cljs.core.name.call(null,id))].join(''),"\uFDD0'class":"split-button-custom delete"}))),cljs.core.str(">"),cljs.core.str("Edit"),cljs.core.str("</a>"),cljs.core.str("<a style=\"display: none\"></a>"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3248)),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'data-iconpos","\uFDD0'data-icon","\uFDD0'data-role","\uFDD0'id","\uFDD0'class"],{"\uFDD0'data-iconpos":"notext","\uFDD0'data-icon":"delete","\uFDD0'data-role":"button","\uFDD0'id":[cljs.core.str("d"),cljs.core.str(cljs.core.name.call(null,id))].join(''),"\uFDD0'class":"split-button-custom delete"}))),cljs.core.str(">"),cljs.core.str("Delete"),cljs.core.str("</a>"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'data-iconpos","\uFDD0'data-icon","\uFDD0'data-role","\uFDD0'id","\uFDD0'class"],{"\uFDD0'data-iconpos":"notext","\uFDD0'data-icon":"edit","\uFDD0'data-role":"button","\uFDD0'id":[cljs.core.str("e"),cljs.core.str(cljs.core.name.call(null,id))].join(''),"\uFDD0'class":"split-button-custom delete"}))),cljs.core.str(">"),cljs.core.str("Edit"),cljs.core.str("</a>"),cljs.core.str("<a style=\"display: none\"></a>"),cljs.core.str("</li>")].join('');
}
})())].join(''),iter__3237.call(null,cljs.core.rest.call(null,s__3238__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,goals);
})())),cljs.core.str("</ul>")].join('');
});
tomatinho.templates.simple_goals_list = (function simple_goals_list(goals){
var fake = cljs.core.ObjMap.fromObject(["\uFDD0'no-goals","\uFDD0'press"],{"\uFDD0'no-goals":cljs.core.ObjMap.fromObject(["\uFDD0'complete","\uFDD0'name"],{"\uFDD0'complete":false,"\uFDD0'name":"No goals set!"}),"\uFDD0'press":cljs.core.ObjMap.fromObject(["\uFDD0'complete","\uFDD0'name"],{"\uFDD0'complete":false,"\uFDD0'name":"Press here to set goals"})});
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3261(s__3262){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3262__$1 = s__3262;
while(true){
if(cljs.core.seq.call(null,s__3262__$1))
{var vec__3266 = cljs.core.first.call(null,s__3262__$1);
var id = cljs.core.nth.call(null,vec__3266,0,null);
var map__3267 = cljs.core.nth.call(null,vec__3266,1,null);
var map__3267__$1 = ((cljs.core.seq_QMARK_.call(null,map__3267))?cljs.core.apply.call(null,cljs.core.hash_map,map__3267):map__3267);
var complete = cljs.core._lookup.call(null,map__3267__$1,"\uFDD0'complete",null);
var name = cljs.core._lookup.call(null,map__3267__$1,"\uFDD0'name",null);
return cljs.core.cons.call(null,[cljs.core.str("<li"),cljs.core.str(" class=\"goal\""),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(complete)?[cljs.core.str((function (){var attrs3268 = name;
if(cljs.core.map_QMARK_.call(null,attrs3268))
{return [cljs.core.str("<s"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3268))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<s>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3268)),cljs.core.str("</s>")].join('');
}
})())].join(''):[cljs.core.str(hiccups.runtime.render_html.call(null,name))].join(''))),cljs.core.str("</li>")].join(''),iter__3261.call(null,cljs.core.rest.call(null,s__3262__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,((cljs.core.empty_QMARK_.call(null,goals))?fake:goals));
})()))].join('');
});
tomatinho.templates.goals_popup_base = (function goals_popup_base(){
return [cljs.core.str("<div"),cljs.core.str(" data-role=\"popup\" id=\"goals-popup\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.header.call(null,"Goals"))),cljs.core.str("<div class=\"placeholder\"></div>"),cljs.core.str("<a class=\"add\" data-rel=\"popup\" data-role=\"button\">Add</a>"),cljs.core.str("</div>")].join('');
});
tomatinho.templates.info_popup = (function info_popup(p__3278,pomodoro_length){
var map__3298 = p__3278;
var map__3298__$1 = ((cljs.core.seq_QMARK_.call(null,map__3298))?cljs.core.apply.call(null,cljs.core.hash_map,map__3298):map__3298);
var history = cljs.core._lookup.call(null,map__3298__$1,"\uFDD0'history",null);
var goals = cljs.core._lookup.call(null,map__3298__$1,"\uFDD0'goals",null);
var feeling = cljs.core._lookup.call(null,map__3298__$1,"\uFDD0'feeling",null);
var date = cljs.core._lookup.call(null,map__3298__$1,"\uFDD0'date",null);
return [cljs.core.str("<div"),cljs.core.str(" data-role=\"popup\" id=\"info-popup\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.header.call(null,date))),cljs.core.str("<p"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("Feeling: "),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.feeling_to_emoticons.call(null,feeling))),cljs.core.str("</p>"),cljs.core.str("<h3>Goals</h3>"),cljs.core.str("<ul"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3304(s__3305){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3305__$1 = s__3305;
while(true){
if(cljs.core.seq.call(null,s__3305__$1))
{var map__3308 = cljs.core.first.call(null,s__3305__$1);
var map__3308__$1 = ((cljs.core.seq_QMARK_.call(null,map__3308))?cljs.core.apply.call(null,cljs.core.hash_map,map__3308):map__3308);
var complete = cljs.core._lookup.call(null,map__3308__$1,"\uFDD0'complete",null);
var date__$1 = cljs.core._lookup.call(null,map__3308__$1,"\uFDD0'date",null);
var name = cljs.core._lookup.call(null,map__3308__$1,"\uFDD0'name",null);
return cljs.core.cons.call(null,[cljs.core.str((function (){var attrs3309 = (cljs.core.truth_(complete)?cljs.core.PersistentVector.fromArray(["\uFDD0's",name], true):name);
if(cljs.core.map_QMARK_.call(null,attrs3309))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3309))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3309)),cljs.core.str("</li>")].join('');
}
})())].join(''),iter__3304.call(null,cljs.core.rest.call(null,s__3305__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,goals);
})())),cljs.core.str("</ul>"),cljs.core.str("<h3>Pomodoros</h3>"),cljs.core.str("<table"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs3303 = (function (){var vec__3310 = tomatinho.utils.aggregate_time_blocks.call(null,history,pomodoro_length,10);
var h = cljs.core.nth.call(null,vec__3310,0,null);
var t = cljs.core.nthnext.call(null,vec__3310,1);
var h__$1 = cljs.core.filter.call(null,(function (p1__3269_SHARP_){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'kind")).call(null,p1__3269_SHARP_),"\uFDD0'pomodoro");
}),h);
var iter__2540__auto__ = (function iter__3311(s__3312){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3312__$1 = s__3312;
while(true){
if(cljs.core.seq.call(null,s__3312__$1))
{var group = cljs.core.first.call(null,s__3312__$1);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.format.call(null,"%s:",tomatinho.utils.format_time.call(null,((new cljs.core.Keyword("\uFDD0'end")).call(null,cljs.core.last.call(null,group)) - (new cljs.core.Keyword("\uFDD0'duration")).call(null,cljs.core.last.call(null,group)))),tomatinho.utils.format_time.call(null,(new cljs.core.Keyword("\uFDD0'end")).call(null,cljs.core.first.call(null,group))))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",(function (){var iter__2540__auto__ = ((function (group){
return (function iter__3315(s__3316){
return (new cljs.core.LazySeq(null,false,((function (group){
return (function (){
var s__3316__$1 = s__3316;
while(true){
if(cljs.core.seq.call(null,s__3316__$1))
{var _ = cljs.core.first.call(null,s__3316__$1);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src","\uFDD0'style"],{"\uFDD0'src":"img/tomate.png","\uFDD0'style":"width: 1em"})], true),iter__3315.call(null,cljs.core.rest.call(null,s__3316__$1)));
} else
{return null;
}
break;
}
});})(group))
,null));
});})(group))
;
return iter__2540__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,group)));
})()], true)], true),iter__3311.call(null,cljs.core.rest.call(null,s__3312__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.reverse.call(null,((cljs.core.empty_QMARK_.call(null,h__$1))?t:cljs.core.conj.call(null,t,h__$1))));
})();
if(cljs.core.map_QMARK_.call(null,attrs3303))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs3303))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs3303)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
tomatinho.templates.archive_popup = (function archive_popup(){
return [cljs.core.str("<div"),cljs.core.str(" data-role=\"popup\" id=\"archive-popup\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.header.call(null,"How did it go?"))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3319(s__3320){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3320__$1 = s__3320;
while(true){
if(cljs.core.seq.call(null,s__3320__$1))
{var x = cljs.core.first.call(null,s__3320__$1);
return cljs.core.cons.call(null,[cljs.core.str("<button"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("f"),cljs.core.str(x)].join(''),"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.feeling_to_emoticons.call(null,x))),cljs.core.str("</button>")].join(''),iter__3319.call(null,cljs.core.rest.call(null,s__3320__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,1,6));
})())),cljs.core.str("</div>")].join('');
});
tomatinho.templates.range_popup = (function range_popup(start,end,current){
return [cljs.core.str("<div"),cljs.core.str(" data-role=\"popup\" id=\"popup\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,tomatinho.templates.header.call(null,"Start"))),cljs.core.str("<table"),cljs.core.str(" class=\"range\""),cljs.core.str(">"),cljs.core.str("<thead><tr><th>Start</th><th>End</th></tr></thead>"),cljs.core.str("<tbody"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2540__auto__ = (function iter__3327(s__3328){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3328__$1 = s__3328;
while(true){
if(cljs.core.seq.call(null,s__3328__$1))
{var hour = cljs.core.first.call(null,s__3328__$1);
return cljs.core.cons.call(null,[cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("start-"),cljs.core.str(hour)].join(''),"\uFDD0'class":((cljs.core._EQ_.call(null,hour,current))?"current":((cljs.core._EQ_.call(null,hour,start))?"limit":(((function (){var and__3822__auto__ = (hour < end);
if(and__3822__auto__)
{return (hour > start);
} else
{return and__3822__auto__;
}
})())?"within":null)))}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,hour)),cljs.core.str("</td>"),cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("end-"),cljs.core.str(hour)].join(''),"\uFDD0'class":((cljs.core._EQ_.call(null,hour,current))?"current":((cljs.core._EQ_.call(null,hour,end))?"limit":(((function (){var and__3822__auto__ = (hour < end);
if(and__3822__auto__)
{return (hour > start);
} else
{return and__3822__auto__;
}
})())?"within":null)))}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,hour)),cljs.core.str("</td>"),cljs.core.str("</tr>")].join(''),iter__3327.call(null,cljs.core.rest.call(null,s__3328__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,24));
})())),cljs.core.str("</tbody>"),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
tomatinho.templates.reflectanda = (function reflectanda(reflectanda__$1,on_click_fn){
if((cljs.core.count.call(null,reflectanda__$1) === 0))
{return [cljs.core.str("<tr class=\"reflectanda\"><td>-</td><td>-</td><td>0<img src=\"img/tomate.png\" style=\"width: 1em\" /></td><td>-/-</td></tr>")].join('');
} else
{var iter__2540__auto__ = (function iter__3339(s__3340){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3340__$1 = s__3340;
while(true){
if(cljs.core.seq.call(null,s__3340__$1))
{var vec__3343 = cljs.core.first.call(null,s__3340__$1);
var n = cljs.core.nth.call(null,vec__3343,0,null);
var map__3344 = cljs.core.nth.call(null,vec__3343,1,null);
var map__3344__$1 = ((cljs.core.seq_QMARK_.call(null,map__3344))?cljs.core.apply.call(null,cljs.core.hash_map,map__3344):map__3344);
var history = cljs.core._lookup.call(null,map__3344__$1,"\uFDD0'history",null);
var goals = cljs.core._lookup.call(null,map__3344__$1,"\uFDD0'goals",null);
var feeling = cljs.core._lookup.call(null,map__3344__$1,"\uFDD0'feeling",null);
var date = cljs.core._lookup.call(null,map__3344__$1,"\uFDD0'date",null);
return cljs.core.cons.call(null,(function (){var item = cljs.core.PersistentVector.fromArray(["\uFDD0'tr.reflectanda",cljs.core.PersistentVector.fromArray(["\uFDD0'td",date], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",tomatinho.templates.feeling_to_emoticons.call(null,feeling)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.format.call(null,"%d",[cljs.core.str(cljs.core.count.call(null,history))].join('')),cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src","\uFDD0'style"],{"\uFDD0'src":"img/tomate.png","\uFDD0'style":"width: 1em"})], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.format.call(null,"%d/%d",cljs.core.count.call(null,cljs.core.filter.call(null,"\uFDD0'complete",goals)),cljs.core.count.call(null,goals))], true)], true);
var node = domina.html_to_dom.call(null,[cljs.core.str(hiccups.runtime.render_html.call(null,item))].join(''));
domina.events.listen_BANG_.call(null,node,"\uFDD0'click",((function (item,node,vec__3343,n,map__3344,map__3344__$1,history,goals,feeling,date){
return (function (){
return on_click_fn.call(null,n);
});})(item,node,vec__3343,n,map__3344,map__3344__$1,history,goals,feeling,date))
);
return node;
})(),iter__3339.call(null,cljs.core.rest.call(null,s__3340__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,0),reflectanda__$1));
}
});
