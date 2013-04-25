goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
var div_4760 = document.createElement("div");
var test_html_4761 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_4760.innerHTML = test_html_4761;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.cljs$lang$arity$2(div_4760.firstChild.nodeType,3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.cljs$lang$arity$2(div_4760.getElementsByTagName("tbody").length,0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.cljs$lang$arity$2(div_4760.getElementsByTagName("link").length,0);