goog.provide('shoreleave.browser.storage.localstorage');
goog.require('cljs.core');
goog.require('shoreleave.browser.storage.webstorage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
shoreleave.browser.storage.localstorage.ls_watchers = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$ = true;
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (ls,oldval,newval){
var G__4544 = cljs.core.seq(cljs.core.deref(shoreleave.browser.storage.localstorage.ls_watchers));
while(true){
if(G__4544)
{var vec__4545 = cljs.core.first(G__4544);
var key = cljs.core.nth.cljs$lang$arity$3(vec__4545,0,null);
var f = cljs.core.nth.cljs$lang$arity$3(vec__4545,1,null);
(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(key,ls,oldval,newval) : f.call(null,key,ls,oldval,newval));
{
var G__4546 = cljs.core.next(G__4544);
G__4544 = G__4546;
continue;
}
} else
{return null;
}
break;
}
});
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (ls,key,f){
return cljs.core.swap_BANG_.cljs$lang$arity$4(shoreleave.browser.storage.localstorage.ls_watchers,cljs.core.assoc,key,f);
});
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (ls,key){
return cljs.core.swap_BANG_.cljs$lang$arity$3(shoreleave.browser.storage.localstorage.ls_watchers,cljs.core.dissoc,key);
});
/**
* Get the browser's localStorage
*/
shoreleave.browser.storage.localstorage.storage = (function storage(){
return (new goog.storage.mechanism.HTML5LocalStorage());
});
shoreleave.browser.storage.localstorage.localstorage = shoreleave.browser.storage.localstorage.storage();
