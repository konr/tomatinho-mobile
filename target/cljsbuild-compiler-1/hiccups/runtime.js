goog.provide('hiccups.runtime');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
hiccups.runtime.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Characters to replace when escaping HTML
*/
hiccups.runtime.character_escapes = cljs.core.PersistentArrayMap.fromArrays(["&","<",">","\""],["&amp;","&lt;","&gt;","&quot;"]);
/**
* A list of tags that need an explicit ending tag when rendered.
*/
hiccups.runtime.container_tags = cljs.core.PersistentHashSet.fromArray(["dd","head","a","b","body","pre","form","iframe","dl","em","fieldset","i","h1","h2","span","h3","script","html","h4","h5","h6","table","dt","div","style","label","option","ul","strong","canvas","textarea","li","ol"]);
hiccups.runtime.as_str = (function as_str(x){
if((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_(x);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{return cljs.core.name(x);
} else
{return [cljs.core.str(x)].join('');
}
});
hiccups.runtime._STAR_html_mode_STAR_ = "\uFDD0'xml";
hiccups.runtime.xml_mode_QMARK_ = (function xml_mode_QMARK_(){
return cljs.core._EQ_.cljs$lang$arity$2(hiccups.runtime._STAR_html_mode_STAR_,"\uFDD0'xml");
});
hiccups.runtime.in_mode = (function in_mode(mode,f){
var _STAR_html_mode_STAR_4629 = hiccups.runtime._STAR_html_mode_STAR_;
try{hiccups.runtime._STAR_html_mode_STAR_ = mode;
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_4629;
}});
/**
* Change special characters into HTML character entities.
*/
hiccups.runtime.escape_html = (function escape_html(text){
return clojure.string.escape(hiccups.runtime.as_str(text),hiccups.runtime.character_escapes);
});
hiccups.runtime.h = hiccups.runtime.escape_html;
hiccups.runtime.end_tag = (function end_tag(){
if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_()))
{return " />";
} else
{return ">";
}
});
hiccups.runtime.xml_attribute = (function xml_attribute(name,value){
return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str(name)),cljs.core.str("=\""),cljs.core.str(hiccups.runtime.escape_html(value)),cljs.core.str("\"")].join('');
});
hiccups.runtime.render_attribute = (function render_attribute(p__4631){
var vec__4633 = p__4631;
var name = cljs.core.nth.cljs$lang$arity$3(vec__4633,0,null);
var value = cljs.core.nth.cljs$lang$arity$3(vec__4633,1,null);
if(value === true)
{if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_()))
{return hiccups.runtime.xml_attribute(name,name);
} else
{return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str(name))].join('');
}
} else
{if(cljs.core.not(value))
{return "";
} else
{if("\uFDD0'else")
{return hiccups.runtime.xml_attribute(name,value);
} else
{return null;
}
}
}
});
hiccups.runtime.render_attr_map = (function render_attr_map(attrs){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.sort.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(hiccups.runtime.render_attribute,attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
hiccups.runtime.normalize_element = (function normalize_element(p__4634){
var vec__4637 = p__4634;
var tag = cljs.core.nth.cljs$lang$arity$3(vec__4637,0,null);
var content = cljs.core.nthnext(vec__4637,1);
if(!((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_(tag);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = cljs.core.symbol_QMARK_(tag);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{return cljs.core.string_QMARK_(tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else
{}
var vec__4638 = cljs.core.re_matches(hiccups.runtime.re_tag,hiccups.runtime.as_str(tag));
var _ = cljs.core.nth.cljs$lang$arity$3(vec__4638,0,null);
var tag__$1 = cljs.core.nth.cljs$lang$arity$3(vec__4638,1,null);
var id = cljs.core.nth.cljs$lang$arity$3(vec__4638,2,null);
var class$ = cljs.core.nth.cljs$lang$arity$3(vec__4638,3,null);
var tag_attrs = cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":id,"\uFDD0'class":(cljs.core.truth_(class$)?class$.replace("."," "):null)});
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs))
{return cljs.core.PersistentVector.fromArray([tag__$1,cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], true);
} else
{return cljs.core.PersistentVector.fromArray([tag__$1,tag_attrs,content], true);
}
});
/**
* Render a tag vector as a HTML element.
*/
hiccups.runtime.render_element = (function render_element(element){
var vec__4640 = hiccups.runtime.normalize_element(element);
var tag = cljs.core.nth.cljs$lang$arity$3(vec__4640,0,null);
var attrs = cljs.core.nth.cljs$lang$arity$3(vec__4640,1,null);
var content = cljs.core.nth.cljs$lang$arity$3(vec__4640,2,null);
if(cljs.core.truth_((function (){var or__3824__auto__ = content;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return (hiccups.runtime.container_tags.cljs$lang$arity$1 ? hiccups.runtime.container_tags.cljs$lang$arity$1(tag) : hiccups.runtime.container_tags.call(null,tag));
}
})()))
{return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map(attrs)),cljs.core.str(">"),cljs.core.str((hiccups.runtime.render_html.cljs$lang$arity$1 ? hiccups.runtime.render_html.cljs$lang$arity$1(content) : hiccups.runtime.render_html.call(null,content))),cljs.core.str("</"),cljs.core.str(tag),cljs.core.str(">")].join('');
} else
{return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map(attrs)),cljs.core.str(hiccups.runtime.end_tag())].join('');
}
});
/**
* Turn a Clojure data type into a string of HTML.
*/
hiccups.runtime.render_html = (function render_html(x){
if(cljs.core.vector_QMARK_(x))
{return hiccups.runtime.render_element(x);
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2(render_html,x));
} else
{if("\uFDD0'else")
{return hiccups.runtime.as_str(x);
} else
{return null;
}
}
}
});
