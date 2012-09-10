goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto____10647 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____10647))
{var cm__10648 = temp__3971__auto____10647;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__10648),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__10649){
var vec__10653__10654 = p__10649;
var context__10655 = cljs.core.nth.call(null,vec__10653__10654,0,null);
if(cljs.core.not.call(null,context__10655))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__10655);
}
};
var $ = function (sel,var_args){
var p__10649 = null;
if (goog.isDef(var_args)) {
  p__10649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__10649);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__10656){
var sel = cljs.core.first(arglist__10656);
var p__10649 = cljs.core.rest(arglist__10656);
return $__delegate(sel, p__10649);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto____10657 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____10657))
{return or__3824__auto____10657;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__10658 = null;
var G__10658__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__10658__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__10658 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__10658__2.call(this,_,k);
case 3:
return G__10658__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10658;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__10659){
var vec__10664__10665 = p__10659;
var v__10666 = cljs.core.nth.call(null,vec__10664__10665,0,null);
var a__10667 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__10666))
{return $elem.attr(a__10667);
} else
{return $elem.attr(a__10667,v__10666);
}
};
var attr = function ($elem,a,var_args){
var p__10659 = null;
if (goog.isDef(var_args)) {
  p__10659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__10659);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__10668){
var $elem = cljs.core.first(arglist__10668);
var a = cljs.core.first(cljs.core.next(arglist__10668));
var p__10659 = cljs.core.rest(cljs.core.next(arglist__10668));
return attr__delegate($elem, a, p__10659);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__10669){
var vec__10674__10675 = p__10669;
var v__10676 = cljs.core.nth.call(null,vec__10674__10675,0,null);
var k__10677 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__10676))
{return $elem.data(k__10677);
} else
{return $elem.data(k__10677,v__10676);
}
};
var data = function ($elem,k,var_args){
var p__10669 = null;
if (goog.isDef(var_args)) {
  p__10669 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__10669);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__10678){
var $elem = cljs.core.first(arglist__10678);
var k = cljs.core.first(cljs.core.next(arglist__10678));
var p__10669 = cljs.core.rest(cljs.core.next(arglist__10678));
return data__delegate($elem, k, p__10669);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__10680 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__10680);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__10682 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__10682);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__10683){
var vec__10688__10689 = p__10683;
var speed__10690 = cljs.core.nth.call(null,vec__10688__10689,0,null);
var on_finish__10691 = cljs.core.nth.call(null,vec__10688__10689,1,null);
return $elem.hide(speed__10690,on_finish__10691);
};
var hide = function ($elem,var_args){
var p__10683 = null;
if (goog.isDef(var_args)) {
  p__10683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__10683);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__10692){
var $elem = cljs.core.first(arglist__10692);
var p__10683 = cljs.core.rest(arglist__10692);
return hide__delegate($elem, p__10683);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__10693){
var vec__10698__10699 = p__10693;
var speed__10700 = cljs.core.nth.call(null,vec__10698__10699,0,null);
var on_finish__10701 = cljs.core.nth.call(null,vec__10698__10699,1,null);
return $elem.show(speed__10700,on_finish__10701);
};
var show = function ($elem,var_args){
var p__10693 = null;
if (goog.isDef(var_args)) {
  p__10693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__10693);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__10702){
var $elem = cljs.core.first(arglist__10702);
var p__10693 = cljs.core.rest(arglist__10702);
return show__delegate($elem, p__10693);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__10703){
var vec__10708__10709 = p__10703;
var speed__10710 = cljs.core.nth.call(null,vec__10708__10709,0,null);
var on_finish__10711 = cljs.core.nth.call(null,vec__10708__10709,1,null);
return $elem.toggle(speed__10710,on_finish__10711);
};
var toggle = function ($elem,var_args){
var p__10703 = null;
if (goog.isDef(var_args)) {
  p__10703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__10703);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__10712){
var $elem = cljs.core.first(arglist__10712);
var p__10703 = cljs.core.rest(arglist__10712);
return toggle__delegate($elem, p__10703);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__10713){
var vec__10718__10719 = p__10713;
var speed__10720 = cljs.core.nth.call(null,vec__10718__10719,0,null);
var on_finish__10721 = cljs.core.nth.call(null,vec__10718__10719,1,null);
return $elem.fadeOut(speed__10720,on_finish__10721);
};
var fade_out = function ($elem,var_args){
var p__10713 = null;
if (goog.isDef(var_args)) {
  p__10713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__10713);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__10722){
var $elem = cljs.core.first(arglist__10722);
var p__10713 = cljs.core.rest(arglist__10722);
return fade_out__delegate($elem, p__10713);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__10723){
var vec__10728__10729 = p__10723;
var speed__10730 = cljs.core.nth.call(null,vec__10728__10729,0,null);
var on_finish__10731 = cljs.core.nth.call(null,vec__10728__10729,1,null);
return $elem.fadeIn(speed__10730,on_finish__10731);
};
var fade_in = function ($elem,var_args){
var p__10723 = null;
if (goog.isDef(var_args)) {
  p__10723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__10723);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__10732){
var $elem = cljs.core.first(arglist__10732);
var p__10723 = cljs.core.rest(arglist__10732);
return fade_in__delegate($elem, p__10723);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__10733){
var vec__10738__10739 = p__10733;
var speed__10740 = cljs.core.nth.call(null,vec__10738__10739,0,null);
var on_finish__10741 = cljs.core.nth.call(null,vec__10738__10739,1,null);
return $elem.slideUp(speed__10740,on_finish__10741);
};
var slide_up = function ($elem,var_args){
var p__10733 = null;
if (goog.isDef(var_args)) {
  p__10733 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__10733);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__10742){
var $elem = cljs.core.first(arglist__10742);
var p__10733 = cljs.core.rest(arglist__10742);
return slide_up__delegate($elem, p__10733);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__10743){
var vec__10748__10749 = p__10743;
var speed__10750 = cljs.core.nth.call(null,vec__10748__10749,0,null);
var on_finish__10751 = cljs.core.nth.call(null,vec__10748__10749,1,null);
return $elem.slideDown(speed__10750,on_finish__10751);
};
var slide_down = function ($elem,var_args){
var p__10743 = null;
if (goog.isDef(var_args)) {
  p__10743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__10743);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__10752){
var $elem = cljs.core.first(arglist__10752);
var p__10743 = cljs.core.rest(arglist__10752);
return slide_down__delegate($elem, p__10743);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__10753){
var vec__10757__10758 = p__10753;
var v__10759 = cljs.core.nth.call(null,vec__10757__10758,0,null);
if(cljs.core.truth_(v__10759))
{return $elem.val(v__10759);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__10753 = null;
if (goog.isDef(var_args)) {
  p__10753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__10753);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__10760){
var $elem = cljs.core.first(arglist__10760);
var p__10753 = cljs.core.rest(arglist__10760);
return val__delegate($elem, p__10753);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__10761,content,callback){
var vec__10767__10768 = p__10761;
var method__10769 = cljs.core.nth.call(null,vec__10767__10768,0,null);
var uri__10770 = cljs.core.nth.call(null,vec__10767__10768,1,null);
var params__10771 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__10769)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__10770,params__10771);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__10772){
var vec__10778__10779 = p__10772;
var sel__10780 = cljs.core.nth.call(null,vec__10778__10779,0,null);
var data__10781 = cljs.core.nth.call(null,vec__10778__10779,1,null);
var handler__10782 = cljs.core.nth.call(null,vec__10778__10779,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__10780),data__10781,handler__10782);
};
var on = function ($elem,events,var_args){
var p__10772 = null;
if (goog.isDef(var_args)) {
  p__10772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__10772);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__10783){
var $elem = cljs.core.first(arglist__10783);
var events = cljs.core.first(cljs.core.next(arglist__10783));
var p__10772 = cljs.core.rest(cljs.core.next(arglist__10783));
return on__delegate($elem, events, p__10772);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__10784){
var vec__10790__10791 = p__10784;
var sel__10792 = cljs.core.nth.call(null,vec__10790__10791,0,null);
var data__10793 = cljs.core.nth.call(null,vec__10790__10791,1,null);
var handler__10794 = cljs.core.nth.call(null,vec__10790__10791,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__10792),data__10793,handler__10794);
};
var one = function ($elem,events,var_args){
var p__10784 = null;
if (goog.isDef(var_args)) {
  p__10784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__10784);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__10795){
var $elem = cljs.core.first(arglist__10795);
var events = cljs.core.first(cljs.core.next(arglist__10795));
var p__10784 = cljs.core.rest(cljs.core.next(arglist__10795));
return one__delegate($elem, events, p__10784);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__10796){
var vec__10801__10802 = p__10796;
var sel__10803 = cljs.core.nth.call(null,vec__10801__10802,0,null);
var handler__10804 = cljs.core.nth.call(null,vec__10801__10802,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__10803),handler__10804);
};
var off = function ($elem,events,var_args){
var p__10796 = null;
if (goog.isDef(var_args)) {
  p__10796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__10796);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__10805){
var $elem = cljs.core.first(arglist__10805);
var events = cljs.core.first(cljs.core.next(arglist__10805));
var p__10796 = cljs.core.rest(cljs.core.next(arglist__10805));
return off__delegate($elem, events, p__10796);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
