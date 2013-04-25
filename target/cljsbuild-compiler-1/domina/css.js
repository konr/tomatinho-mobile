goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.cljs$lang$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if((void 0 === domina.css.t4767))
{goog.provide('domina.css.t4767');

/**
* @constructor
*/
domina.css.t4767 = (function (expr,base,sel,meta4768){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta4768 = meta4768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t4767.cljs$lang$type = true;
domina.css.t4767.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.css/t4767");
});
domina.css.t4767.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write(writer__2384__auto__,"domina.css/t4767");
});
domina.css.t4767.prototype.domina$DomContent$ = true;
domina.css.t4767.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__4762_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__4762_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t4767.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$lang$arity$2((function (p1__4763_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__4763_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t4767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4769){
var self__ = this;
return self__.meta4768;
});
domina.css.t4767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4769,meta4768__$1){
var self__ = this;
return (new domina.css.t4767(self__.expr,self__.base,self__.sel,meta4768__$1));
});
} else
{}
return (new domina.css.t4767(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$lang$arity$1 = sel__1;
sel.cljs$lang$arity$2 = sel__2;
return sel;
})()
;
