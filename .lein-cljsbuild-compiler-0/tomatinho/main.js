goog.provide('tomatinho.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
tomatinho.main.connect = (function connect(){
return clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
});
goog.exportSymbol('tomatinho.main.connect', tomatinho.main.connect);
tomatinho.main.alerta = (function alerta(){
return alert("Ol\u00E1, mundo!");
});
goog.exportSymbol('tomatinho.main.alerta', tomatinho.main.alerta);
tomatinho.main.main = (function main(){
return alert("oi");
});
goog.exportSymbol('tomatinho.main.main', tomatinho.main.main);
tomatinho.main.alerta.call(null);
tomatinho.main.connect.call(null);
