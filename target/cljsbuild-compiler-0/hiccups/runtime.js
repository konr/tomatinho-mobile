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
if((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return cljs.core.name.call(null,x);
} else
{return [cljs.core.str(x)].join('');
}
});
hiccups.runtime._STAR_html_mode_STAR_ = "\uFDD0'xml";
hiccups.runtime.xml_mode_QMARK_ = (function xml_mode_QMARK_(){
return cljs.core._EQ_.call(null,hiccups.runtime._STAR_html_mode_STAR_,"\uFDD0'xml");
});
hiccups.runtime.in_mode = (function in_mode(mode,f){
var _STAR_html_mode_STAR_3914 = hiccups.runtime._STAR_html_mode_STAR_;
try{hiccups.runtime._STAR_html_mode_STAR_ = mode;
return f.call(null);
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_3914;
}});
/**
* Change special characters into HTML character entities.
*/
hiccups.runtime.escape_html = (function escape_html(text){
return clojure.string.escape.call(null,hiccups.runtime.as_str.call(null,text),hiccups.runtime.character_escapes);
});
hiccups.runtime.h = hiccups.runtime.escape_html;
hiccups.runtime.end_tag = (function end_tag(){
if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null)))
{return " />";
} else
{return ">";
}
});
hiccups.runtime.xml_attribute = (function xml_attribute(name,value){
return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name)),cljs.core.str("=\""),cljs.core.str(hiccups.runtime.escape_html.call(null,value)),cljs.core.str("\"")].join('');
});
hiccups.runtime.render_attribute = (function render_attribute(p__3916){
var vec__3918 = p__3916;
var name = cljs.core.nth.call(null,vec__3918,0,null);
var value = cljs.core.nth.call(null,vec__3918,1,null);
if(value === true)
{if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null)))
{return hiccups.runtime.xml_attribute.call(null,name,name);
} else
{return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name))].join('');
}
} else
{if(cljs.core.not.call(null,value))
{return "";
} else
{if("\uFDD0'else")
{return hiccups.runtime.xml_attribute.call(null,name,value);
} else
{return null;
}
}
}
});
hiccups.runtime.render_attr_map = (function render_attr_map(attrs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.sort.call(null,cljs.core.map.call(null,hiccups.runtime.render_attribute,attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
hiccups.runtime.normalize_element = (function normalize_element(p__3919){
var vec__3922 = p__3919;
var tag = cljs.core.nth.call(null,vec__3922,0,null);
var content = cljs.core.nthnext.call(null,vec__3922,1);
if(!((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,tag);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = cljs.core.symbol_QMARK_.call(null,tag);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{return cljs.core.string_QMARK_.call(null,tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else
{}
var vec__3923 = cljs.core.re_matches.call(null,hiccups.runtime.re_tag,hiccups.runtime.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__3923,0,null);
var tag__$1 = cljs.core.nth.call(null,vec__3923,1,null);
var id = cljs.core.nth.call(null,vec__3923,2,null);
var class$ = cljs.core.nth.call(null,vec__3923,3,null);
var tag_attrs = cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":id,"\uFDD0'class":(cljs.core.truth_(class$)?class$.replace("."," "):null)});
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs))
{return cljs.core.PersistentVector.fromArray([tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], true);
} else
{return cljs.core.PersistentVector.fromArray([tag__$1,tag_attrs,content], true);
}
});
/**
* Render a tag vector as a HTML element.
*/
hiccups.runtime.render_element = (function render_element(element){
var vec__3925 = hiccups.runtime.normalize_element.call(null,element);
var tag = cljs.core.nth.call(null,vec__3925,0,null);
var attrs = cljs.core.nth.call(null,vec__3925,1,null);
var content = cljs.core.nth.call(null,vec__3925,2,null);
if(cljs.core.truth_((function (){var or__3824__auto__ = content;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return hiccups.runtime.container_tags.call(null,tag);
}
})()))
{return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs)),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,content)),cljs.core.str("</"),cljs.core.str(tag),cljs.core.str(">")].join('');
} else
{return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs)),cljs.core.str(hiccups.runtime.end_tag.call(null))].join('');
}
});
/**
* Turn a Clojure data type into a string of HTML.
*/
hiccups.runtime.render_html = (function render_html(x){
if(cljs.core.vector_QMARK_.call(null,x))
{return hiccups.runtime.render_element.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,render_html,x));
} else
{if("\uFDD0'else")
{return hiccups.runtime.as_str.call(null,x);
} else
{return null;
}
}
}
});
