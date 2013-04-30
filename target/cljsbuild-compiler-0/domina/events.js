goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.prevent_default[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.stop_propagation[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.target[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.target["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.current_target[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.current_target["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.event_type[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.event_type["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto__ = evt;
if(and__3822__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__2443__auto__ = (((evt == null))?null:evt);
return (function (){var or__3824__auto__ = (domina.events.raw_event[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (domina.events.raw_event["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t4271))
{goog.provide('domina.events.t4271');

/**
* @constructor
*/
domina.events.t4271 = (function (evt,f,create_listener_function,meta4272){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta4272 = meta4272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t4271.cljs$lang$type = true;
domina.events.t4271.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"domina.events/t4271");
});
domina.events.t4271.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"domina.events/t4271");
});
domina.events.t4271.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__3971__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__3971__auto__))
{var val = temp__3971__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t4271.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3824__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return not_found;
}
});
domina.events.t4271.prototype.domina$events$Event$ = true;
domina.events.t4271.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t4271.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t4271.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t4271.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t4271.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t4271.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t4271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4273){
var self__ = this;
return self__.meta4272;
});
domina.events.t4271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4273,meta4272__$1){
var self__ = this;
return (new domina.events.t4271(self__.evt,self__.f,self__.create_listener_function,meta4272__$1));
});
} else
{}
return (new domina.events.t4271(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2540__auto__ = (function iter__4276(s__4277){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4277__$1 = s__4277;
while(true){
if(cljs.core.seq.call(null,s__4277__$1))
{var node = cljs.core.first.call(null,s__4277__$1);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__4276.call(null,cljs.core.rest.call(null,s__4277__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$lang$arity$2 = listen_BANG___2;
listen_BANG_.cljs$lang$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$lang$arity$2 = capture_BANG___2;
capture_BANG_.cljs$lang$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$lang$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$lang$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$lang$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$lang$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__4280 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4280)
{var node = cljs.core.first.call(null,G__4280);
goog.events.removeAll(node);
{
var G__4282 = cljs.core.next.call(null,G__4280);
G__4280 = G__4282;
continue;
}
} else
{return null;
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
var G__4281 = cljs.core.seq.call(null,domina.nodes.call(null,content));
while(true){
if(G__4281)
{var node = cljs.core.first.call(null,G__4281);
goog.events.removeAll(node,type__$1);
{
var G__4283 = cljs.core.next.call(null,G__4281);
G__4281 = G__4283;
continue;
}
} else
{return null;
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$lang$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$lang$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$lang$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__3971__auto__ = n.parentNode;
if(cljs.core.truth_(temp__3971__auto__))
{var parent = temp__3971__auto__;
{
var G__4284 = parent;
var G__4285 = cljs.core.cons.call(null,parent,so_far);
n = G__4284;
so_far = G__4285;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$lang$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$lang$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__4288_4290 = cljs.core.seq.call(null,ancestors);
while(true){
if(G__4288_4290)
{var n_4291 = cljs.core.first.call(null,G__4288_4290);
if(cljs.core.truth_(n_4291.propagationStopped))
{} else
{evt.currentTarget = n_4291;
goog.events.fireListeners(n_4291,evt.type,true,evt);
}
{
var G__4292 = cljs.core.next.call(null,G__4288_4290);
G__4288_4290 = G__4292;
continue;
}
} else
{}
break;
}
var G__4289_4293 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
while(true){
if(G__4289_4293)
{var n_4294 = cljs.core.first.call(null,G__4289_4293);
if(cljs.core.truth_(n_4294.propagationStopped))
{} else
{evt.currentTarget = n_4294;
goog.events.fireListeners(n_4294,evt.type,false,evt);
}
{
var G__4295 = cljs.core.next.call(null,G__4289_4293);
G__4289_4293 = G__4295;
continue;
}
} else
{}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3822__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto__))
{return o.dispatchEvent;
} else
{return and__3822__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__4298_4300 = cljs.core.seq.call(null,evt_map);
while(true){
if(G__4298_4300)
{var vec__4299_4301 = cljs.core.first.call(null,G__4298_4300);
var k_4302 = cljs.core.nth.call(null,vec__4299_4301,0,null);
var v_4303 = cljs.core.nth.call(null,vec__4299_4301,1,null);
(evt[k_4302] = v_4303);
{
var G__4304 = cljs.core.next.call(null,G__4298_4300);
G__4298_4300 = G__4304;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$lang$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$lang$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__4305_SHARP_){
return goog.events.getListeners(p1__4305_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});