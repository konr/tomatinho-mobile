goog.provide('shoreleave.browser.storage.localstorage');
goog.require('cljs.core');
goog.require('shoreleave.browser.storage.webstorage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
shoreleave.browser.storage.localstorage.ls_watchers = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$ = true;
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (ls,oldval,newval){
var G__3531 = cljs.core.seq.call(null,cljs.core.deref.call(null,shoreleave.browser.storage.localstorage.ls_watchers));
while(true){
if(G__3531)
{var vec__3532 = cljs.core.first.call(null,G__3531);
var key = cljs.core.nth.call(null,vec__3532,0,null);
var f = cljs.core.nth.call(null,vec__3532,1,null);
f.call(null,key,ls,oldval,newval);
{
var G__3533 = cljs.core.next.call(null,G__3531);
G__3531 = G__3533;
continue;
}
} else
{return null;
}
break;
}
});
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (ls,key,f){
return cljs.core.swap_BANG_.call(null,shoreleave.browser.storage.localstorage.ls_watchers,cljs.core.assoc,key,f);
});
goog.storage.mechanism.HTML5LocalStorage.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (ls,key){
return cljs.core.swap_BANG_.call(null,shoreleave.browser.storage.localstorage.ls_watchers,cljs.core.dissoc,key);
});
/**
* Get the browser's localStorage
*/
shoreleave.browser.storage.localstorage.storage = (function storage(){
return (new goog.storage.mechanism.HTML5LocalStorage());
});
shoreleave.browser.storage.localstorage.localstorage = shoreleave.browser.storage.localstorage.storage.call(null);
