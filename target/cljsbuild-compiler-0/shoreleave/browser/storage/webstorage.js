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
return cljs.core.zipmap.call(null,shoreleave.browser.storage.webstorage.storage_keys.call(null,storage),shoreleave.browser.storage.webstorage.storage_values.call(null,storage));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IPrintWithWriter$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (ls,writer,opts){
var pers_st = cljs.core._persistent_BANG_.call(null,ls);
return cljs.core._write.call(null,writer,cljs.core._persistent_BANG_.call(null,ls));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientMap$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (ls,k){
ls.remove(cljs.core.name.call(null,k));
return ls;
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientAssociative$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (ls,k,v){
var old_val = cljs.core._lookup.call(null,ls,k);
ls.set(cljs.core.name.call(null,k),cljs.core.pr_str.call(null,v));
cljs.core._notify_watches.call(null,ls,cljs.core.PersistentArrayMap.fromArrays([k],[old_val]),cljs.core.PersistentArrayMap.fromArrays([k],[v]));
return ls;
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientCollection$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (ls){
return shoreleave.browser.storage.webstorage.as_hash_map.call(null,ls);
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$IFn$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.call = (function() {
var G__3178 = null;
var G__3178__2 = (function (self__,k){
var self____$1 = this;
var ls = self____$1;
return cljs.core._lookup.call(null,ls,k);
});
var G__3178__3 = (function (self__,k,not_found){
var self____$1 = this;
var ls = self____$1;
return cljs.core._lookup.call(null,ls,k,not_found);
});
G__3178 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__3178__2.call(this,self__,k);
case 3:
return G__3178__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3178;
})()
;
goog.storage.mechanism.HTML5WebStorage.prototype.apply = (function (self__,args3177){
return self__.call.apply(self__,[self__].concat(args3177.slice()));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ICounted$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (ls){
return ls.getCount();
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ISeqable$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (ls){
return cljs.core.map.call(null,cljs.core.vector,shoreleave.browser.storage.webstorage.storage_keys.call(null,ls),shoreleave.browser.storage.webstorage.storage_values.call(null,ls));
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$ = true;
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (ls,k){
return cljs.core._lookup.call(null,ls,k,null);
});
goog.storage.mechanism.HTML5WebStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (ls,k,not_found){
var read_value = (function (){var temp__3971__auto__ = cljs.core.not_empty.call(null,ls.get(cljs.core.name.call(null,k)));
if(cljs.core.truth_(temp__3971__auto__))
{var v = temp__3971__auto__;
return v;
} else
{return cljs.core.pr_str.call(null,not_found);
}
})();
return cljs.reader.read_string.call(null,read_value);
});
/**
* Clear the storage
*/
shoreleave.browser.storage.webstorage.empty_BANG_ = (function empty_BANG_(ls){
return ls.clear();
});
