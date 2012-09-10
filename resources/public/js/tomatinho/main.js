goog.provide('tomatinho.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
tomatinho.main.$content = jQuery("#content");
tomatinho.main.log = (function log(text){
return console.log(text);
});
goog.exportSymbol('tomatinho.main.log', tomatinho.main.log);
tomatinho.main.main = (function main(){
tomatinho.main.log.call(null,"Starting the App");
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
var n__2555__auto____144056 = 100;
var n__144057 = 0;
while(true){
if((n__144057 < n__2555__auto____144056))
{tomatinho.main.mess_up.call(null);
{
var G__144058 = (n__144057 + 1);
n__144057 = G__144058;
continue;
}
} else
{return null;
}
break;
}
});
goog.exportSymbol('tomatinho.main.main', tomatinho.main.main);
tomatinho.main.mess_up = (function mess_up(){
return jayq.core.append.call(null,jQuery("#content"),"foobar ");
});
