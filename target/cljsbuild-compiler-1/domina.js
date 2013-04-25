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
var opt_wrapper_4648 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_4649 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_4650 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper_4649,"caption":table_section_wrapper_4649,"optgroup":opt_wrapper_4648,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper_4650,"thead":table_section_wrapper_4649,"th":cell_wrapper_4650,"option":opt_wrapper_4648,"tbody":table_section_wrapper_4649,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper_4649});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((function (){var and__3822__auto__ = cljs.core._EQ_.cljs$lang$arity$2(tag_name,"table");
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
})():(((function (){var and__3822__auto__ = cljs.core._EQ_.cljs$lang$arity$2(start_wrap,"<table>");
if(and__3822__auto__)
{return no_tbody_QMARK_;
} else
{return and__3822__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__4652 = cljs.core.seq(tbody);
while(true){
if(G__4652)
{var child = cljs.core.first(G__4652);
if((function (){var and__3822__auto__ = cljs.core._EQ_.cljs$lang$arity$2(child.nodeName,"tbody");
if(and__3822__auto__)
{return cljs.core._EQ_.cljs$lang$arity$2(child.childNodes.length,0);
} else
{return and__3822__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__4653 = cljs.core.next(G__4652);
G__4652 = G__4653;
continue;
}
} else
{return null;
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__4655 = cljs.core._lookup.cljs$lang$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$lang$arity$3(vec__4655,0,null);
var start_wrap = cljs.core.nth.cljs$lang$arity$3(vec__4655,1,null);
var end_wrap = cljs.core.nth.cljs$lang$arity$3(vec__4655,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__4656 = wrapper.lastChild;
var G__4657 = (level - 1);
wrapper = G__4656;
level = G__4657;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3822__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3822__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$lang$arity$2(window.console,undefined));
} else
{return and__3822__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
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
log_debug.cljs$lang$applyTo = (function (arglist__4658){
var mesg = cljs.core.seq(arglist__4658);;
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
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
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
log.cljs$lang$applyTo = (function (arglist__4659){
var mesg = cljs.core.seq(arglist__4659);;
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
return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t4663))
{goog.provide('domina.t4663');

/**
* @constructor
*/
domina.t4663 = (function (class_name,by_class,meta4664){
this.class_name = class_name;
this.by_class = by_class;
this.meta4664 = meta4664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t4663.cljs$lang$type = true;
domina.t4663.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.cljs$lang$arity$1("domina/t4663");
});
domina.t4663.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write(writer__2384__auto__,"domina/t4663");
});
domina.t4663.prototype.domina$DomContent$ = true;
domina.t4663.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$lang$arity$1 ? domina.normalize_seq.cljs$lang$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t4663.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$lang$arity$1 ? domina.normalize_seq.cljs$lang$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t4663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4665){
var self__ = this;
return self__.meta4664;
});
domina.t4663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4665,meta4664__$1){
var self__ = this;
return (new domina.t4663(self__.class_name,self__.by_class,meta4664__$1));
});
} else
{}
return (new domina.t4663(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.mapcat.cljs$lang$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.cljs$lang$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$lang$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (goog.isDef(var_args)) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__4666){
var contents = cljs.core.seq(arglist__4666);;
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
return cljs.core._EQ_.cljs$lang$arity$2(domina.common_ancestor.cljs$lang$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$lang$arity$2((function (p1__4667_SHARP_){
return p1__4667_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
(domina.apply_with_cloning.cljs$lang$arity$3 ? domina.apply_with_cloning.cljs$lang$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
(domina.apply_with_cloning.cljs$lang$arity$3 ? domina.apply_with_cloning.cljs$lang$arity$3((function (p1__4668_SHARP_,p2__4669_SHARP_){
return goog.dom.insertChildAt(p1__4668_SHARP_,p2__4669_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__4668_SHARP_,p2__4669_SHARP_){
return goog.dom.insertChildAt(p1__4668_SHARP_,p2__4669_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$lang$arity$3 ? domina.apply_with_cloning.cljs$lang$arity$3((function (p1__4671_SHARP_,p2__4670_SHARP_){
return goog.dom.insertSiblingBefore(p2__4670_SHARP_,p1__4671_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__4671_SHARP_,p2__4670_SHARP_){
return goog.dom.insertSiblingBefore(p2__4670_SHARP_,p1__4671_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$lang$arity$3 ? domina.apply_with_cloning.cljs$lang$arity$3((function (p1__4673_SHARP_,p2__4672_SHARP_){
return goog.dom.insertSiblingAfter(p2__4672_SHARP_,p1__4673_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__4673_SHARP_,p2__4672_SHARP_){
return goog.dom.insertSiblingAfter(p2__4672_SHARP_,p1__4673_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$lang$arity$3 ? domina.apply_with_cloning.cljs$lang$arity$3((function (p1__4675_SHARP_,p2__4674_SHARP_){
return goog.dom.replaceNode(p2__4674_SHARP_,p1__4675_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__4675_SHARP_,p2__4674_SHARP_){
return goog.dom.replaceNode(p2__4674_SHARP_,p1__4675_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));
if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__4677_4678 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4677_4678)
{var n_4679 = cljs.core.first(G__4677_4678);
goog.style.setStyle(n_4679,cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
{
var G__4680 = cljs.core.next(G__4677_4678);
G__4677_4678 = G__4680;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__4681){
var content = cljs.core.first(arglist__4681);
var name = cljs.core.first(cljs.core.next(arglist__4681));
var value = cljs.core.rest(cljs.core.next(arglist__4681));
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
var G__4683_4684 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4683_4684)
{var n_4685 = cljs.core.first(G__4683_4684);
n_4685.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
{
var G__4686 = cljs.core.next(G__4683_4684);
G__4683_4684 = G__4686;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__4687){
var content = cljs.core.first(arglist__4687);
var name = cljs.core.first(cljs.core.next(arglist__4687));
var value = cljs.core.rest(cljs.core.next(arglist__4687));
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
var G__4689_4690 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4689_4690)
{var n_4691 = cljs.core.first(G__4689_4690);
n_4691.removeAttribute(cljs.core.name(name));
{
var G__4692 = cljs.core.next(G__4689_4690);
G__4689_4690 = G__4692;
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
return cljs.core.reduce.cljs$lang$arity$3((function (acc,pair){
var vec__4694 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$lang$arity$3(vec__4694,0,null);
var v = cljs.core.nth.cljs$lang$arity$3(vec__4694,1,null);
if(cljs.core.truth_((function (){var and__3822__auto__ = k;
if(cljs.core.truth_(and__3822__auto__))
{return v;
} else
{return and__3822__auto__;
}
})()))
{return cljs.core.assoc.cljs$lang$arity$3(acc,cljs.core.keyword.cljs$lang$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr(content,"style");
if(cljs.core.string_QMARK_(style))
{return domina.parse_style_attributes(style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node(content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.cljs$lang$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$lang$arity$2((function (p1__4695_SHARP_){
var attr = attrs__$1.item(p1__4695_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3822__auto__ = cljs.core.not_EQ_.cljs$lang$arity$2(null,value);
if(and__3822__auto__)
{return cljs.core.not_EQ_.cljs$lang$arity$2("",value);
} else
{return and__3822__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.cljs$lang$arity$1(attr.nodeName.toLowerCase())],[attr.nodeValue]);
} else
{return null;
}
}),cljs.core.range.cljs$lang$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__4698_4700 = cljs.core.seq(styles);
while(true){
if(G__4698_4700)
{var vec__4699_4701 = cljs.core.first(G__4698_4700);
var name_4702 = cljs.core.nth.cljs$lang$arity$3(vec__4699_4701,0,null);
var value_4703 = cljs.core.nth.cljs$lang$arity$3(vec__4699_4701,1,null);
domina.set_style_BANG_.cljs$lang$arity$variadic(content,name_4702,cljs.core.array_seq([value_4703], 0));
{
var G__4704 = cljs.core.next(G__4698_4700);
G__4698_4700 = G__4704;
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
var G__4707_4709 = cljs.core.seq(attrs);
while(true){
if(G__4707_4709)
{var vec__4708_4710 = cljs.core.first(G__4707_4709);
var name_4711 = cljs.core.nth.cljs$lang$arity$3(vec__4708_4710,0,null);
var value_4712 = cljs.core.nth.cljs$lang$arity$3(vec__4708_4710,1,null);
domina.set_attr_BANG_.cljs$lang$arity$variadic(content,name_4711,cljs.core.array_seq([value_4712], 0));
{
var G__4713 = cljs.core.next(G__4707_4709);
G__4707_4709 = G__4713;
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
return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__4715_4716 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4715_4716)
{var node_4717 = cljs.core.first(G__4715_4716);
goog.dom.classes.add(node_4717,class$);
{
var G__4718 = cljs.core.next(G__4715_4716);
G__4715_4716 = G__4718;
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
var G__4720_4721 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4720_4721)
{var node_4722 = cljs.core.first(G__4720_4721);
goog.dom.classes.remove(node_4722,class$);
{
var G__4723 = cljs.core.next(G__4720_4721);
G__4720_4721 = G__4723;
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
return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_4726__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$lang$arity$2(" ",classes):classes);
var G__4725_4727 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4725_4727)
{var node_4728 = cljs.core.first(G__4725_4727);
goog.dom.classes.set(node_4728,classes_4726__$1);
{
var G__4729 = cljs.core.next(G__4725_4727);
G__4725_4727 = G__4729;
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
return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__4731_4732 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4731_4732)
{var node_4733 = cljs.core.first(G__4731_4732);
goog.dom.setTextContent(node_4733,value);
{
var G__4734 = cljs.core.next(G__4731_4732);
G__4731_4732 = G__4734;
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
return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__4736_4737 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4736_4737)
{var node_4738 = cljs.core.first(G__4736_4737);
goog.dom.forms.setValue(node_4738,value);
{
var G__4739 = cljs.core.next(G__4736_4737);
G__4736_4737 = G__4739;
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
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3822__auto__ = allows_inner_html_QMARK_;
if(and__3822__auto__)
{var and__3822__auto____$1 = (function (){var or__3824__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_4744 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__4743_4745 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4743_4745)
{var node_4746 = cljs.core.first(G__4743_4745);
goog.events.removeAll(node_4746);
node_4746.innerHTML = value_4744;
{
var G__4747 = cljs.core.next(G__4743_4745);
G__4743_4745 = G__4747;
continue;
}
} else
{}
break;
}
}catch (e4742){if(cljs.core.instance_QMARK_(Error,e4742))
{var e_4748 = e4742;
domina.replace_children_BANG_(content,value_4744);
} else
{if("\uFDD0'else")
{throw e4742;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_(inner_content))
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
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
return get_data.cljs$lang$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core._lookup.cljs$lang$arity$3(m,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto__ = bubble;
if(cljs.core.truth_(and__3822__auto__))
{return (value == null);
} else
{return and__3822__auto__;
}
})()))
{var temp__3974__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__3974__auto__))
{var parent = temp__3974__auto__;
return get_data.cljs$lang$arity$3(parent,key,true);
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
var m = (function (){var or__3824__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$lang$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var G__4752_4753 = cljs.core.seq(children);
while(true){
if(G__4752_4753)
{var child_4754 = cljs.core.first(G__4752_4753);
frag.appendChild(child_4754);
{
var G__4755 = cljs.core.next(G__4752_4753);
G__4752_4753 = G__4755;
continue;
}
} else
{}
break;
}
return frag;
})();
var other_children = cljs.core.doall.cljs$lang$arity$1(cljs.core.repeatedly.cljs$lang$arity$2((cljs.core.count(parents) - 1),(function (){
return first_child.cloneNode(true);
})));
if(cljs.core.seq(parents))
{(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$3((function (p1__4749_SHARP_,p2__4750_SHARP_){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(p1__4749_SHARP_,p2__4750_SHARP_) : f.call(null,p1__4749_SHARP_,p2__4750_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$lang$arity$2(nl,(n + 1)));
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
return lazy_nl_via_array_ref.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$lang$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$lang$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$lang$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto__ = obj;
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = cljs.core.not(obj.name);
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
{if((function (){var G__4757 = list_thing;
if(G__4757)
{if((function (){var or__3824__auto__ = (G__4757.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4757.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4757.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4757);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4757);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([list_thing], true));
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
{if((function (){var G__4758 = content;
if(G__4758)
{if((function (){var or__3824__auto__ = (G__4758.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4758.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4758);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4758);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([content], true));
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
{if((function (){var G__4759 = content;
if(G__4759)
{if((function (){var or__3824__auto__ = (G__4759.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__4759.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4759.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4759);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__4759);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
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
return cljs.core.doall.cljs$lang$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
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
return domina.lazy_nodelist(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
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
return domina.lazy_nodelist(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
