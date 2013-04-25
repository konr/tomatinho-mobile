goog.provide('shoreleave.browser.storage.webstorage');
goog.require('cljs.core');
goog.require('goog.iter');
goog.require('goog.storage.mechanism.HTML5WebStorage');
goog.require('cljs.reader');
shoreleave.browser.storage.webstorage.storage_keys = (function storage_keys(ls){
return goog.iter.toArray(ls.__iterator__(true));
});
shoreleave.browser.storage.webstorage.storage_values = (function storage_values(ls){
return goog.iter.toArray(ls.__iterator__(false));
});
shoreleave.browser.storage.webstorage.as_hash_map = (function as_hash_map(storage){
return cljs.core.zipmap(shoreleave.browser.storage.webstorage.storage_keys(storage),shoreleave.browser.storage.webstorage.storage_values(storage));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IPrintWithWriter$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (ls,writer,opts){
var pers_st = cljs.core._persistent_BANG_(ls);
return cljs.core._write(writer,cljs.core._persistent_BANG_(ls));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientMap$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (ls,k){
ls.remove(cljs.core.name(k));
return ls;
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientAssociative$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (ls,k,v){
var old_val = cljs.core._lookup.cljs$lang$arity$2(ls,k);
ls.set(cljs.core.name(k),cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([v], 0)));
cljs.core._notify_watches(ls,cljs.core.PersistentArrayMap.fromArrays([k],[old_val]),cljs.core.PersistentArrayMap.fromArrays([k],[v]));
return ls;
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientCollection$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (ls){
return shoreleave.browser.storage.webstorage.as_hash_map(ls);
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IFn$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.call = (function() {
var G__4548 = null;
var G__4548__2 = (function (self__,k){
var self____$1 = this;
var ls = self____$1;
return cljs.core._lookup.cljs$lang$arity$2(ls,k);
});
var G__4548__3 = (function (self__,k,not_found){
var self____$1 = this;
var ls = self____$1;
return cljs.core._lookup.cljs$lang$arity$3(ls,k,not_found);
});
G__4548 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__4548__2.call(this,self__,k);
case 3:
return G__4548__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__4548;
})()
;
goog.storage.mechanism.HTML5WebStorage.prototype.apply = (function (self__,args4547){
return self__.call.apply(self__,[self__].concat(args4547.slice()));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ICounted$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (ls){
return ls.getCount();
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ISeqable$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (ls){
return cljs.core.map.cljs$lang$arity$3(cljs.core.vector,shoreleave.browser.storage.webstorage.storage_keys(ls),shoreleave.browser.storage.webstorage.storage_values(ls));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (ls,k){
return cljs.core._lookup.cljs$lang$arity$3(ls,k,null);
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (ls,k,not_found){
var read_value = (function (){var temp__3971__auto__ = cljs.core.not_empty(ls.get(cljs.core.name(k)));
if(cljs.core.truth_(temp__3971__auto__))
{var v = temp__3971__auto__;
return v;
} else
{return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([not_found], 0));
}
})();
return cljs.reader.read_string(read_value);
});
/**
* Clear the storage
*/
shoreleave.browser.storage.webstorage.empty_BANG_ = (function empty_BANG_(ls){
return ls.clear();
});
