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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set(cljs.core.map.cljs$lang$arity$2(cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_(domina.events.builtin_events,evt_type))
{return cljs.core.name(evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((function (){if((void 0 === domina.events.t4592))
{goog.provide('domina.events.t4592');

/**
* @constructor
*/
domina.events.t4592 = (function (evt,f,create_listener_function,meta4593){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta4593 = meta4593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t4592.cljs$lang$type = true;
domina.events.t4592.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.events/t4592");
});
domina.events.t4592.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write(writer__2384__auto__,"domina.events/t4592");
});
domina.events.t4592.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__3971__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__3971__auto__))
{var val = temp__3971__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t4592.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3824__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return not_found;
}
});
domina.events.t4592.prototype.domina$events$Event$ = true;
domina.events.t4592.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t4592.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t4592.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t4592.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t4592.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t4592.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t4592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4594){
var self__ = this;
return self__.meta4593;
});
domina.events.t4592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4594,meta4593__$1){
var self__ = this;
return (new domina.events.t4592(self__.evt,self__.f,self__.create_listener_function,meta4593__$1));
});
} else
{}
return (new domina.events.t4592(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t4592))
{
/**
* @constructor
*/
domina.events.t4592 = (function (evt,f,create_listener_function,meta4593){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta4593 = meta4593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t4592.cljs$lang$type = true;
domina.events.t4592.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.events/t4592");
});
domina.events.t4592.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write(writer__2384__auto__,"domina.events/t4592");
});
domina.events.t4592.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__3971__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__3971__auto__))
{var val = temp__3971__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t4592.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3824__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return not_found;
}
});
domina.events.t4592.prototype.domina$events$Event$ = true;
domina.events.t4592.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t4592.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t4592.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t4592.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t4592.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t4592.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t4592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4594){
var self__ = this;
return self__.meta4593;
});
domina.events.t4592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4594,meta4593__$1){
var self__ = this;
return (new domina.events.t4592(self__.evt,self__.f,self__.create_listener_function,meta4593__$1));
});
} else
{}
return (new domina.events.t4592(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$lang$arity$1((function (){var iter__2540__auto__ = (function iter__4597(s__4598){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4598__$1 = s__4598;
while(true){
if(cljs.core.seq(s__4598__$1))
{var node = cljs.core.first(s__4598__$1);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__4597(cljs.core.rest(s__4598__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
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
return capture_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
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
return listen_once_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
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
return capture_once_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
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
return unlisten_BANG_.cljs$lang$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__4601 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4601)
{var node = cljs.core.first(G__4601);
goog.events.removeAll(node);
{
var G__4603 = cljs.core.next(G__4601);
G__4601 = G__4603;
continue;
}
} else
{return null;
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type(type);
var G__4602 = cljs.core.seq(domina.nodes(content));
while(true){
if(G__4602)
{var node = cljs.core.first(G__4602);
goog.events.removeAll(node,type__$1);
{
var G__4604 = cljs.core.next(G__4602);
G__4602 = G__4604;
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
return ancestor_nodes.cljs$lang$arity$2(n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__3971__auto__ = n.parentNode;
if(cljs.core.truth_(temp__3971__auto__))
{var parent = temp__3971__auto__;
{
var G__4605 = parent;
var G__4606 = cljs.core.cons(parent,so_far);
n = G__4605;
so_far = G__4606;
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
var ancestors = domina.events.ancestor_nodes.cljs$lang$arity$1(domina.single_node(source));
var G__4609_4611 = cljs.core.seq(ancestors);
while(true){
if(G__4609_4611)
{var n_4612 = cljs.core.first(G__4609_4611);
if(cljs.core.truth_(n_4612.propagationStopped))
{} else
{evt.currentTarget = n_4612;
goog.events.fireListeners(n_4612,evt.type,true,evt);
}
{
var G__4613 = cljs.core.next(G__4609_4611);
G__4609_4611 = G__4613;
continue;
}
} else
{}
break;
}
var G__4610_4614 = cljs.core.seq(cljs.core.reverse(ancestors));
while(true){
if(G__4610_4614)
{var n_4615 = cljs.core.first(G__4610_4614);
if(cljs.core.truth_(n_4615.propagationStopped))
{} else
{evt.currentTarget = n_4615;
goog.events.fireListeners(n_4615,evt.type,false,evt);
}
{
var G__4616 = cljs.core.next(G__4610_4614);
G__4610_4614 = G__4616;
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
return dispatch_BANG_.cljs$lang$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type(type)));
var G__4619_4621 = cljs.core.seq(evt_map);
while(true){
if(G__4619_4621)
{var vec__4620_4622 = cljs.core.first(G__4619_4621);
var k_4623 = cljs.core.nth.cljs$lang$arity$3(vec__4620_4622,0,null);
var v_4624 = cljs.core.nth.cljs$lang$arity$3(vec__4620_4622,1,null);
(evt[k_4623] = v_4624);
{
var G__4625 = cljs.core.next(G__4619_4621);
G__4619_4621 = G__4625;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
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
var type__$1 = domina.events.find_builtin_type(type);
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__4626_SHARP_){
return goog.events.getListeners(p1__4626_SHARP_,type__$1,false);
}),domina.nodes(content));
});
