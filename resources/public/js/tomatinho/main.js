goog.provide('tomatinho.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
tomatinho.main.$content = jQuery("#content");
tomatinho.main.main = (function main(){
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
return jayq.core.append.call(null,jQuery("#content"),"foobar ");
});
goog.exportSymbol('tomatinho.main.main', tomatinho.main.main);
tomatinho.main.main.call(null);
