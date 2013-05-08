goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_4290 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_4291 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_4292 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper_4291,"caption":table_section_wrapper_4291,"optgroup":opt_wrapper_4290,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper_4292,"thead":table_section_wrapper_4291,"th":cell_wrapper_4292,"option":opt_wrapper_4290,"tbody":table_section_wrapper_4291,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper_4291});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3822__auto__)
{return no_tbody_QMARK_;
} else
{return and__3822__auto__;
}
})())?(function (){var and__3822__auto__ = div.firstChild;
if(cljs.core.truth_(and__3822__auto__))
{return div.firstChild.childNodes;
} else
{return and__3822__auto__;
}
})():(((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3822__auto__)
{return no_tbody_QMARK_;
} else
{return and__3822__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__4294 = cljs.core.seq.call(null,tbody);
while(true){
if(G__4294)
{var child = cljs.core.first.call(null,G__4294);
if((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3822__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__4295 = cljs.core.next.call(null,G__4294);
G__4294 = G__4295;
continue;
}
} else
{return null;
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__4297 = cljs.core._lookup.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__4297,0,null);
var start_wrap = cljs.core.nth.call(null,vec__4297,1,null);
var end_wrap = cljs.core.nth.call(null,vec__4297,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__4298 = wrapper.lastChild;
var G__4299 = (level - 1);
wrapper = G__4298;
level = G__4299;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3822__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3822__auto__ = content;
if(and__3822__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2443__auto__ = (((content == null))?null:content);
return (function (){var or__3824__auto__ = (domina.nodes[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.nodes["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto__ = nodeseq;
if(and__3822__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2443__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto__ = (domina.single_node[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.single_node["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3822__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__4300){
var mesg = cljs.core.seq(arglist__4300);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__4301){
var mesg = cljs.core.seq(arglist__4301);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t4305))
{goog.provide('domina.t4305');

/**
* @constructor
*/
domina.t4305 = (function (class_name,by_class,meta4306){
this.class_name = class_name;
this.by_class = by_class;
this.meta4306 = meta4306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t4305.cljs$lang$type = true;
domina.t4305.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"domina/t4305");
});
domina.t4305.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"domina/t4305");
});
domina.t4305.prototype.domina$DomContent$ = true;
domina.t4305.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t4305.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t4305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4307){
var self__ = this;
return self__.meta4306;
});
domina.t4305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4307,meta4306__$1){
var self__ = this;
return (new domina.t4305(self__.class_name,self__.by_class,meta4306__$1));
});
} else
{}
return (new domina.t4305(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (goog.isDef(var_args)) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__4308){
var contents = cljs.core.seq(arglist__4308);;
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$lang$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__4309_SHARP_){
return p1__4309_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__4310_SHARP_,p2__4311_SHARP_){
return goog.dom.insertChildAt(p1__4310_SHARP_,p2__4311_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4313_SHARP_,p2__4312_SHARP_){
return goog.dom.insertSiblingBefore(p2__4312_SHARP_,p1__4313_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4315_SHARP_,p2__4314_SHARP_){
return goog.dom.insertSiblingAfter(p2__4314_SHARP_,p1__4315_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4317_SHARP_,p2__4316_SHARP_){
return goog.dom.replaceNode(p2__4316_SHARP_,p1__4317_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__4319_4320 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4319_4320)
{var n_4321 = cljs.core.first.call(null,G__4319_4320);
goog.style.setStyle(n_4321,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4322 = cljs.core.next.call(null,G__4319_4320);
G__4319_4320 = G__4322;
continue;
}
} else
{}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__4323){
var content = cljs.core.first(arglist__4323);
var name = cljs.core.first(cljs.core.next(arglist__4323));
var value = cljs.core.rest(cljs.core.next(arglist__4323));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__4325_4326 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4325_4326)
{var n_4327 = cljs.core.first.call(null,G__4325_4326);
n_4327.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4328 = cljs.core.next.call(null,G__4325_4326);
G__4325_4326 = G__4328;
continue;
}
} else
{}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__4329){
var content = cljs.core.first(arglist__4329);
var name = cljs.core.first(cljs.core.next(arglist__4329));
var value = cljs.core.rest(cljs.core.next(arglist__4329));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__4331_4332 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4331_4332)
{var n_4333 = cljs.core.first.call(null,G__4331_4332);
n_4333.removeAttribute(cljs.core.name.call(null,name));
{
var G__4334 = cljs.core.next.call(null,G__4331_4332);
G__4331_4332 = G__4334;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__4336 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__4336,0,null);
var v = cljs.core.nth.call(null,vec__4336,1,null);
if(cljs.core.truth_((function (){var and__3822__auto__ = k;
if(cljs.core.truth_(and__3822__auto__))
{return v;
} else
{return and__3822__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__4337_SHARP_){
var attr = attrs__$1.item(p1__4337_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3822__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3822__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3822__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr.nodeName.toLowerCase())],[attr.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__4340_4342 = cljs.core.seq.call(null,styles);
while(true){
if(G__4340_4342)
{var vec__4341_4343 = cljs.core.first.call(null,G__4340_4342);
var name_4344 = cljs.core.nth.call(null,vec__4341_4343,0,null);
var value_4345 = cljs.core.nth.call(null,vec__4341_4343,1,null);
domina.set_style_BANG_.call(null,content,name_4344,value_4345);
{
var G__4346 = cljs.core.next.call(null,G__4340_4342);
G__4340_4342 = G__4346;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__4349_4351 = cljs.core.seq.call(null,attrs);
while(true){
if(G__4349_4351)
{var vec__4350_4352 = cljs.core.first.call(null,G__4349_4351);
var name_4353 = cljs.core.nth.call(null,vec__4350_4352,0,null);
var value_4354 = cljs.core.nth.call(null,vec__4350_4352,1,null);
domina.set_attr_BANG_.call(null,content,name_4353,value_4354);
{
var G__4355 = cljs.core.next.call(null,G__4349_4351);
G__4349_4351 = G__4355;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__4357_4358 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4357_4358)
{var node_4359 = cljs.core.first.call(null,G__4357_4358);
goog.dom.classes.add(node_4359,class$);
{
var G__4360 = cljs.core.next.call(null,G__4357_4358);
G__4357_4358 = G__4360;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__4362_4363 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4362_4363)
{var node_4364 = cljs.core.first.call(null,G__4362_4363);
goog.dom.classes.remove(node_4364,class$);
{
var G__4365 = cljs.core.next.call(null,G__4362_4363);
G__4362_4363 = G__4365;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_4368__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__4367_4369 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4367_4369)
{var node_4370 = cljs.core.first.call(null,G__4367_4369);
goog.dom.classes.set(node_4370,classes_4368__$1);
{
var G__4371 = cljs.core.next.call(null,G__4367_4369);
G__4367_4369 = G__4371;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__4373_4374 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4373_4374)
{var node_4375 = cljs.core.first.call(null,G__4373_4374);
goog.dom.setTextContent(node_4375,value);
{
var G__4376 = cljs.core.next.call(null,G__4373_4374);
G__4373_4374 = G__4376;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__4378_4379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4378_4379)
{var node_4380 = cljs.core.first.call(null,G__4378_4379);
goog.dom.forms.setValue(node_4380,value);
{
var G__4381 = cljs.core.next.call(null,G__4378_4379);
G__4378_4379 = G__4381;
continue;
}
} else
{}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3822__auto__ = allows_inner_html_QMARK_;
if(and__3822__auto__)
{var and__3822__auto____$1 = (function (){var or__3824__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3822__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})()))
{var value_4386 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__4385_4387 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4385_4387)
{var node_4388 = cljs.core.first.call(null,G__4385_4387);
goog.events.removeAll(node_4388);
node_4388.innerHTML = value_4386;
{
var G__4389 = cljs.core.next.call(null,G__4385_4387);
G__4385_4387 = G__4389;
continue;
}
} else
{}
break;
}
}catch (e4384){if(cljs.core.instance_QMARK_.call(null,Error,e4384))
{var e_4390 = e4384;
domina.replace_children_BANG_.call(null,content,value_4386);
} else
{if("\uFDD0'else")
{throw e4384;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core._lookup.call(null,m,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto__ = bubble;
if(cljs.core.truth_(and__3822__auto__))
{return (value == null);
} else
{return and__3822__auto__;
}
})()))
{var temp__3974__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto__))
{var parent = temp__3974__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3824__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var G__4394_4395 = cljs.core.seq.call(null,children);
while(true){
if(G__4394_4395)
{var child_4396 = cljs.core.first.call(null,G__4394_4395);
frag.appendChild(child_4396);
{
var G__4397 = cljs.core.next.call(null,G__4394_4395);
G__4394_4395 = G__4397;
continue;
}
} else
{}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),(function (){
return first_child.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4391_SHARP_,p2__4392_SHARP_){
return f.call(null,p1__4391_SHARP_,p2__4392_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto__ = obj;
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = cljs.core.not.call(null,obj.name);
if(and__3822__auto____$1)
{return obj.length;
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__4399 = list_thing;
if(G__4399)
{if((function (){var or__3824__auto__ = (G__4399.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4399.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4399);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__4400 = content;
if(G__4400)
{if((function (){var or__3824__auto__ = (G__4400.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4400.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4400.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4400);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4400);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__4401 = content;
if(G__4401)
{if((function (){var or__3824__auto__ = (G__4401.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4401.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4401.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4401);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4401);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
