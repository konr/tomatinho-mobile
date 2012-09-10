goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6535 = (((x == null))?null:x);
if((p[goog.typeOf(x__6535)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6536__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6536 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6536__delegate.call(this, array, i, idxs);
};
G__6536.cljs$lang$maxFixedArity = 2;
G__6536.cljs$lang$applyTo = (function (arglist__6537){
var array = cljs.core.first(arglist__6537);
var i = cljs.core.first(cljs.core.next(arglist__6537));
var idxs = cljs.core.rest(cljs.core.next(arglist__6537));
return G__6536__delegate(array, i, idxs);
});
G__6536.cljs$lang$arity$variadic = G__6536__delegate;
return G__6536;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6622 = this$;
if(and__3822__auto____6622)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6622;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2391__auto____6623 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6624 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6623)]);
if(or__3824__auto____6624)
{return or__3824__auto____6624;
} else
{var or__3824__auto____6625 = (cljs.core._invoke["_"]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6626 = this$;
if(and__3822__auto____6626)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6626;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2391__auto____6627 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6628 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6627)]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{var or__3824__auto____6629 = (cljs.core._invoke["_"]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6630 = this$;
if(and__3822__auto____6630)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6630;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2391__auto____6631 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6632 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6631)]);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{var or__3824__auto____6633 = (cljs.core._invoke["_"]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6634 = this$;
if(and__3822__auto____6634)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6634;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2391__auto____6635 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6636 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6635)]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{var or__3824__auto____6637 = (cljs.core._invoke["_"]);
if(or__3824__auto____6637)
{return or__3824__auto____6637;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6638 = this$;
if(and__3822__auto____6638)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6638;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2391__auto____6639 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6640 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6639)]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
} else
{var or__3824__auto____6641 = (cljs.core._invoke["_"]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6642 = this$;
if(and__3822__auto____6642)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6642;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2391__auto____6643 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6644 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6643)]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{var or__3824__auto____6645 = (cljs.core._invoke["_"]);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6646 = this$;
if(and__3822__auto____6646)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6646;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2391__auto____6647 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6648 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6647)]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{var or__3824__auto____6649 = (cljs.core._invoke["_"]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6650 = this$;
if(and__3822__auto____6650)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6650;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2391__auto____6651 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6652 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6651)]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
} else
{var or__3824__auto____6653 = (cljs.core._invoke["_"]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6654 = this$;
if(and__3822__auto____6654)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6654;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2391__auto____6655 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6656 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6655)]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{var or__3824__auto____6657 = (cljs.core._invoke["_"]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6658 = this$;
if(and__3822__auto____6658)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6658;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2391__auto____6659 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6660 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6659)]);
if(or__3824__auto____6660)
{return or__3824__auto____6660;
} else
{var or__3824__auto____6661 = (cljs.core._invoke["_"]);
if(or__3824__auto____6661)
{return or__3824__auto____6661;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6662 = this$;
if(and__3822__auto____6662)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6662;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2391__auto____6663 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6664 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6663)]);
if(or__3824__auto____6664)
{return or__3824__auto____6664;
} else
{var or__3824__auto____6665 = (cljs.core._invoke["_"]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6666 = this$;
if(and__3822__auto____6666)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6666;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2391__auto____6667 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6668 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6667)]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{var or__3824__auto____6669 = (cljs.core._invoke["_"]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6670 = this$;
if(and__3822__auto____6670)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6670;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2391__auto____6671 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6672 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6671)]);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{var or__3824__auto____6673 = (cljs.core._invoke["_"]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6674 = this$;
if(and__3822__auto____6674)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6674;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2391__auto____6675 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6676 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6675)]);
if(or__3824__auto____6676)
{return or__3824__auto____6676;
} else
{var or__3824__auto____6677 = (cljs.core._invoke["_"]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6678 = this$;
if(and__3822__auto____6678)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6678;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2391__auto____6679 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6680 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6679)]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{var or__3824__auto____6681 = (cljs.core._invoke["_"]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6682 = this$;
if(and__3822__auto____6682)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6682;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2391__auto____6683 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6684 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6683)]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{var or__3824__auto____6685 = (cljs.core._invoke["_"]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6686 = this$;
if(and__3822__auto____6686)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6686;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2391__auto____6687 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6688 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6687)]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{var or__3824__auto____6689 = (cljs.core._invoke["_"]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6690 = this$;
if(and__3822__auto____6690)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6690;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2391__auto____6691 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6692 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6691)]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{var or__3824__auto____6693 = (cljs.core._invoke["_"]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6694 = this$;
if(and__3822__auto____6694)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6694;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2391__auto____6695 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6696 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6695)]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{var or__3824__auto____6697 = (cljs.core._invoke["_"]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6698 = this$;
if(and__3822__auto____6698)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6698;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2391__auto____6699 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6700 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6699)]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{var or__3824__auto____6701 = (cljs.core._invoke["_"]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6702 = this$;
if(and__3822__auto____6702)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6702;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2391__auto____6703 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6704 = (cljs.core._invoke[goog.typeOf(x__2391__auto____6703)]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{var or__3824__auto____6705 = (cljs.core._invoke["_"]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6710 = coll;
if(and__3822__auto____6710)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6710;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2391__auto____6711 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6712 = (cljs.core._count[goog.typeOf(x__2391__auto____6711)]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{var or__3824__auto____6713 = (cljs.core._count["_"]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6718 = coll;
if(and__3822__auto____6718)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6718;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2391__auto____6719 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6720 = (cljs.core._empty[goog.typeOf(x__2391__auto____6719)]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{var or__3824__auto____6721 = (cljs.core._empty["_"]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6726 = coll;
if(and__3822__auto____6726)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6726;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2391__auto____6727 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6728 = (cljs.core._conj[goog.typeOf(x__2391__auto____6727)]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{var or__3824__auto____6729 = (cljs.core._conj["_"]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6738 = coll;
if(and__3822__auto____6738)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6738;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2391__auto____6739 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6740 = (cljs.core._nth[goog.typeOf(x__2391__auto____6739)]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{var or__3824__auto____6741 = (cljs.core._nth["_"]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6742 = coll;
if(and__3822__auto____6742)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6742;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2391__auto____6743 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6744 = (cljs.core._nth[goog.typeOf(x__2391__auto____6743)]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{var or__3824__auto____6745 = (cljs.core._nth["_"]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6750 = coll;
if(and__3822__auto____6750)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6750;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2391__auto____6751 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6752 = (cljs.core._first[goog.typeOf(x__2391__auto____6751)]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{var or__3824__auto____6753 = (cljs.core._first["_"]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6758 = coll;
if(and__3822__auto____6758)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6758;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2391__auto____6759 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6760 = (cljs.core._rest[goog.typeOf(x__2391__auto____6759)]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{var or__3824__auto____6761 = (cljs.core._rest["_"]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6766 = coll;
if(and__3822__auto____6766)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6766;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2391__auto____6767 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6768 = (cljs.core._next[goog.typeOf(x__2391__auto____6767)]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{var or__3824__auto____6769 = (cljs.core._next["_"]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6778 = o;
if(and__3822__auto____6778)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6778;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2391__auto____6779 = (((o == null))?null:o);
return (function (){var or__3824__auto____6780 = (cljs.core._lookup[goog.typeOf(x__2391__auto____6779)]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
} else
{var or__3824__auto____6781 = (cljs.core._lookup["_"]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6782 = o;
if(and__3822__auto____6782)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6782;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2391__auto____6783 = (((o == null))?null:o);
return (function (){var or__3824__auto____6784 = (cljs.core._lookup[goog.typeOf(x__2391__auto____6783)]);
if(or__3824__auto____6784)
{return or__3824__auto____6784;
} else
{var or__3824__auto____6785 = (cljs.core._lookup["_"]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6790 = coll;
if(and__3822__auto____6790)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6790;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2391__auto____6791 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6792 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2391__auto____6791)]);
if(or__3824__auto____6792)
{return or__3824__auto____6792;
} else
{var or__3824__auto____6793 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2391__auto____6799 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6800 = (cljs.core._assoc[goog.typeOf(x__2391__auto____6799)]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{var or__3824__auto____6801 = (cljs.core._assoc["_"]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6806 = coll;
if(and__3822__auto____6806)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6806;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2391__auto____6807 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6808 = (cljs.core._dissoc[goog.typeOf(x__2391__auto____6807)]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{var or__3824__auto____6809 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6814 = coll;
if(and__3822__auto____6814)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6814;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2391__auto____6815 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6816 = (cljs.core._key[goog.typeOf(x__2391__auto____6815)]);
if(or__3824__auto____6816)
{return or__3824__auto____6816;
} else
{var or__3824__auto____6817 = (cljs.core._key["_"]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6822 = coll;
if(and__3822__auto____6822)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6822;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2391__auto____6823 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6824 = (cljs.core._val[goog.typeOf(x__2391__auto____6823)]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{var or__3824__auto____6825 = (cljs.core._val["_"]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6830 = coll;
if(and__3822__auto____6830)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6830;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2391__auto____6831 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6832 = (cljs.core._disjoin[goog.typeOf(x__2391__auto____6831)]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{var or__3824__auto____6833 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6838 = coll;
if(and__3822__auto____6838)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6838;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2391__auto____6839 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6840 = (cljs.core._peek[goog.typeOf(x__2391__auto____6839)]);
if(or__3824__auto____6840)
{return or__3824__auto____6840;
} else
{var or__3824__auto____6841 = (cljs.core._peek["_"]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6846 = coll;
if(and__3822__auto____6846)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6846;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2391__auto____6847 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6848 = (cljs.core._pop[goog.typeOf(x__2391__auto____6847)]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{var or__3824__auto____6849 = (cljs.core._pop["_"]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6854 = coll;
if(and__3822__auto____6854)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6854;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2391__auto____6855 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6856 = (cljs.core._assoc_n[goog.typeOf(x__2391__auto____6855)]);
if(or__3824__auto____6856)
{return or__3824__auto____6856;
} else
{var or__3824__auto____6857 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6862 = o;
if(and__3822__auto____6862)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6862;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2391__auto____6863 = (((o == null))?null:o);
return (function (){var or__3824__auto____6864 = (cljs.core._deref[goog.typeOf(x__2391__auto____6863)]);
if(or__3824__auto____6864)
{return or__3824__auto____6864;
} else
{var or__3824__auto____6865 = (cljs.core._deref["_"]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6870 = o;
if(and__3822__auto____6870)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6870;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2391__auto____6871 = (((o == null))?null:o);
return (function (){var or__3824__auto____6872 = (cljs.core._deref_with_timeout[goog.typeOf(x__2391__auto____6871)]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{var or__3824__auto____6873 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6878 = o;
if(and__3822__auto____6878)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6878;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2391__auto____6879 = (((o == null))?null:o);
return (function (){var or__3824__auto____6880 = (cljs.core._meta[goog.typeOf(x__2391__auto____6879)]);
if(or__3824__auto____6880)
{return or__3824__auto____6880;
} else
{var or__3824__auto____6881 = (cljs.core._meta["_"]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6886 = o;
if(and__3822__auto____6886)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6886;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2391__auto____6887 = (((o == null))?null:o);
return (function (){var or__3824__auto____6888 = (cljs.core._with_meta[goog.typeOf(x__2391__auto____6887)]);
if(or__3824__auto____6888)
{return or__3824__auto____6888;
} else
{var or__3824__auto____6889 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6898 = coll;
if(and__3822__auto____6898)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6898;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2391__auto____6899 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6900 = (cljs.core._reduce[goog.typeOf(x__2391__auto____6899)]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{var or__3824__auto____6901 = (cljs.core._reduce["_"]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6902 = coll;
if(and__3822__auto____6902)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6902;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2391__auto____6903 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6904 = (cljs.core._reduce[goog.typeOf(x__2391__auto____6903)]);
if(or__3824__auto____6904)
{return or__3824__auto____6904;
} else
{var or__3824__auto____6905 = (cljs.core._reduce["_"]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6910 = coll;
if(and__3822__auto____6910)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6910;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2391__auto____6911 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6912 = (cljs.core._kv_reduce[goog.typeOf(x__2391__auto____6911)]);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{var or__3824__auto____6913 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6918 = o;
if(and__3822__auto____6918)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6918;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2391__auto____6919 = (((o == null))?null:o);
return (function (){var or__3824__auto____6920 = (cljs.core._equiv[goog.typeOf(x__2391__auto____6919)]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{var or__3824__auto____6921 = (cljs.core._equiv["_"]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6926 = o;
if(and__3822__auto____6926)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6926;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2391__auto____6927 = (((o == null))?null:o);
return (function (){var or__3824__auto____6928 = (cljs.core._hash[goog.typeOf(x__2391__auto____6927)]);
if(or__3824__auto____6928)
{return or__3824__auto____6928;
} else
{var or__3824__auto____6929 = (cljs.core._hash["_"]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6934 = o;
if(and__3822__auto____6934)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6934;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2391__auto____6935 = (((o == null))?null:o);
return (function (){var or__3824__auto____6936 = (cljs.core._seq[goog.typeOf(x__2391__auto____6935)]);
if(or__3824__auto____6936)
{return or__3824__auto____6936;
} else
{var or__3824__auto____6937 = (cljs.core._seq["_"]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6942 = coll;
if(and__3822__auto____6942)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6942;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2391__auto____6943 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6944 = (cljs.core._rseq[goog.typeOf(x__2391__auto____6943)]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{var or__3824__auto____6945 = (cljs.core._rseq["_"]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6950 = coll;
if(and__3822__auto____6950)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6950;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2391__auto____6951 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6952 = (cljs.core._sorted_seq[goog.typeOf(x__2391__auto____6951)]);
if(or__3824__auto____6952)
{return or__3824__auto____6952;
} else
{var or__3824__auto____6953 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6958 = coll;
if(and__3822__auto____6958)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6958;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2391__auto____6959 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6960 = (cljs.core._sorted_seq_from[goog.typeOf(x__2391__auto____6959)]);
if(or__3824__auto____6960)
{return or__3824__auto____6960;
} else
{var or__3824__auto____6961 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6966 = coll;
if(and__3822__auto____6966)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6966;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2391__auto____6967 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6968 = (cljs.core._entry_key[goog.typeOf(x__2391__auto____6967)]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{var or__3824__auto____6969 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6974 = coll;
if(and__3822__auto____6974)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6974;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2391__auto____6975 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6976 = (cljs.core._comparator[goog.typeOf(x__2391__auto____6975)]);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
} else
{var or__3824__auto____6977 = (cljs.core._comparator["_"]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6982 = o;
if(and__3822__auto____6982)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6982;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2391__auto____6983 = (((o == null))?null:o);
return (function (){var or__3824__auto____6984 = (cljs.core._pr_seq[goog.typeOf(x__2391__auto____6983)]);
if(or__3824__auto____6984)
{return or__3824__auto____6984;
} else
{var or__3824__auto____6985 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6990 = d;
if(and__3822__auto____6990)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6990;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2391__auto____6991 = (((d == null))?null:d);
return (function (){var or__3824__auto____6992 = (cljs.core._realized_QMARK_[goog.typeOf(x__2391__auto____6991)]);
if(or__3824__auto____6992)
{return or__3824__auto____6992;
} else
{var or__3824__auto____6993 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6998 = this$;
if(and__3822__auto____6998)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6998;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2391__auto____6999 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7000 = (cljs.core._notify_watches[goog.typeOf(x__2391__auto____6999)]);
if(or__3824__auto____7000)
{return or__3824__auto____7000;
} else
{var or__3824__auto____7001 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7006 = this$;
if(and__3822__auto____7006)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7006;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2391__auto____7007 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7008 = (cljs.core._add_watch[goog.typeOf(x__2391__auto____7007)]);
if(or__3824__auto____7008)
{return or__3824__auto____7008;
} else
{var or__3824__auto____7009 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7014 = this$;
if(and__3822__auto____7014)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7014;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2391__auto____7015 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7016 = (cljs.core._remove_watch[goog.typeOf(x__2391__auto____7015)]);
if(or__3824__auto____7016)
{return or__3824__auto____7016;
} else
{var or__3824__auto____7017 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7022 = coll;
if(and__3822__auto____7022)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7022;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2391__auto____7023 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7024 = (cljs.core._as_transient[goog.typeOf(x__2391__auto____7023)]);
if(or__3824__auto____7024)
{return or__3824__auto____7024;
} else
{var or__3824__auto____7025 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7030 = tcoll;
if(and__3822__auto____7030)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7030;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2391__auto____7031 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7032 = (cljs.core._conj_BANG_[goog.typeOf(x__2391__auto____7031)]);
if(or__3824__auto____7032)
{return or__3824__auto____7032;
} else
{var or__3824__auto____7033 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7038 = tcoll;
if(and__3822__auto____7038)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7038;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2391__auto____7039 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7040 = (cljs.core._persistent_BANG_[goog.typeOf(x__2391__auto____7039)]);
if(or__3824__auto____7040)
{return or__3824__auto____7040;
} else
{var or__3824__auto____7041 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7046 = tcoll;
if(and__3822__auto____7046)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7046;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2391__auto____7047 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7048 = (cljs.core._assoc_BANG_[goog.typeOf(x__2391__auto____7047)]);
if(or__3824__auto____7048)
{return or__3824__auto____7048;
} else
{var or__3824__auto____7049 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7054 = tcoll;
if(and__3822__auto____7054)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7054;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2391__auto____7055 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7056 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2391__auto____7055)]);
if(or__3824__auto____7056)
{return or__3824__auto____7056;
} else
{var or__3824__auto____7057 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7062 = tcoll;
if(and__3822__auto____7062)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7062;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2391__auto____7063 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7064 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2391__auto____7063)]);
if(or__3824__auto____7064)
{return or__3824__auto____7064;
} else
{var or__3824__auto____7065 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7070 = tcoll;
if(and__3822__auto____7070)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7070;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2391__auto____7071 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7072 = (cljs.core._pop_BANG_[goog.typeOf(x__2391__auto____7071)]);
if(or__3824__auto____7072)
{return or__3824__auto____7072;
} else
{var or__3824__auto____7073 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7073)
{return or__3824__auto____7073;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7078 = tcoll;
if(and__3822__auto____7078)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7078;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2391__auto____7079 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7080 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2391__auto____7079)]);
if(or__3824__auto____7080)
{return or__3824__auto____7080;
} else
{var or__3824__auto____7081 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7081)
{return or__3824__auto____7081;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7086 = x;
if(and__3822__auto____7086)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7086;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2391__auto____7087 = (((x == null))?null:x);
return (function (){var or__3824__auto____7088 = (cljs.core._compare[goog.typeOf(x__2391__auto____7087)]);
if(or__3824__auto____7088)
{return or__3824__auto____7088;
} else
{var or__3824__auto____7089 = (cljs.core._compare["_"]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7094 = coll;
if(and__3822__auto____7094)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7094;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2391__auto____7095 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7096 = (cljs.core._drop_first[goog.typeOf(x__2391__auto____7095)]);
if(or__3824__auto____7096)
{return or__3824__auto____7096;
} else
{var or__3824__auto____7097 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7097)
{return or__3824__auto____7097;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7102 = coll;
if(and__3822__auto____7102)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7102;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2391__auto____7103 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7104 = (cljs.core._chunked_first[goog.typeOf(x__2391__auto____7103)]);
if(or__3824__auto____7104)
{return or__3824__auto____7104;
} else
{var or__3824__auto____7105 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7105)
{return or__3824__auto____7105;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7110 = coll;
if(and__3822__auto____7110)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7110;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2391__auto____7111 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7112 = (cljs.core._chunked_rest[goog.typeOf(x__2391__auto____7111)]);
if(or__3824__auto____7112)
{return or__3824__auto____7112;
} else
{var or__3824__auto____7113 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7118 = coll;
if(and__3822__auto____7118)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7118;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2391__auto____7119 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7120 = (cljs.core._chunked_next[goog.typeOf(x__2391__auto____7119)]);
if(or__3824__auto____7120)
{return or__3824__auto____7120;
} else
{var or__3824__auto____7121 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7121)
{return or__3824__auto____7121;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7123 = (x === y);
if(or__3824__auto____7123)
{return or__3824__auto____7123;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7124__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7125 = y;
var G__7126 = cljs.core.first.call(null,more);
var G__7127 = cljs.core.next.call(null,more);
x = G__7125;
y = G__7126;
more = G__7127;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7124 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7124__delegate.call(this, x, y, more);
};
G__7124.cljs$lang$maxFixedArity = 2;
G__7124.cljs$lang$applyTo = (function (arglist__7128){
var x = cljs.core.first(arglist__7128);
var y = cljs.core.first(cljs.core.next(arglist__7128));
var more = cljs.core.rest(cljs.core.next(arglist__7128));
return G__7124__delegate(x, y, more);
});
G__7124.cljs$lang$arity$variadic = G__7124__delegate;
return G__7124;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7129 = null;
var G__7129__2 = (function (o,k){
return null;
});
var G__7129__3 = (function (o,k,not_found){
return not_found;
});
G__7129 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7129__2.call(this,o,k);
case 3:
return G__7129__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7129;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7130 = null;
var G__7130__2 = (function (_,f){
return f.call(null);
});
var G__7130__3 = (function (_,f,start){
return start;
});
G__7130 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7130__2.call(this,_,f);
case 3:
return G__7130__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7130;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7131 = null;
var G__7131__2 = (function (_,n){
return null;
});
var G__7131__3 = (function (_,n,not_found){
return not_found;
});
G__7131 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7131__2.call(this,_,n);
case 3:
return G__7131__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7131;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____7132 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7132)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7132;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7145 = cljs.core._count.call(null,cicoll);
if((cnt__7145 === 0))
{return f.call(null);
} else
{var val__7146 = cljs.core._nth.call(null,cicoll,0);
var n__7147 = 1;
while(true){
if((n__7147 < cnt__7145))
{var nval__7148 = f.call(null,val__7146,cljs.core._nth.call(null,cicoll,n__7147));
if(cljs.core.reduced_QMARK_.call(null,nval__7148))
{return cljs.core.deref.call(null,nval__7148);
} else
{{
var G__7157 = nval__7148;
var G__7158 = (n__7147 + 1);
val__7146 = G__7157;
n__7147 = G__7158;
continue;
}
}
} else
{return val__7146;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7149 = cljs.core._count.call(null,cicoll);
var val__7150 = val;
var n__7151 = 0;
while(true){
if((n__7151 < cnt__7149))
{var nval__7152 = f.call(null,val__7150,cljs.core._nth.call(null,cicoll,n__7151));
if(cljs.core.reduced_QMARK_.call(null,nval__7152))
{return cljs.core.deref.call(null,nval__7152);
} else
{{
var G__7159 = nval__7152;
var G__7160 = (n__7151 + 1);
val__7150 = G__7159;
n__7151 = G__7160;
continue;
}
}
} else
{return val__7150;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7153 = cljs.core._count.call(null,cicoll);
var val__7154 = val;
var n__7155 = idx;
while(true){
if((n__7155 < cnt__7153))
{var nval__7156 = f.call(null,val__7154,cljs.core._nth.call(null,cicoll,n__7155));
if(cljs.core.reduced_QMARK_.call(null,nval__7156))
{return cljs.core.deref.call(null,nval__7156);
} else
{{
var G__7161 = nval__7156;
var G__7162 = (n__7155 + 1);
val__7154 = G__7161;
n__7155 = G__7162;
continue;
}
}
} else
{return val__7154;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7175 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7176 = (arr[0]);
var n__7177 = 1;
while(true){
if((n__7177 < cnt__7175))
{var nval__7178 = f.call(null,val__7176,(arr[n__7177]));
if(cljs.core.reduced_QMARK_.call(null,nval__7178))
{return cljs.core.deref.call(null,nval__7178);
} else
{{
var G__7187 = nval__7178;
var G__7188 = (n__7177 + 1);
val__7176 = G__7187;
n__7177 = G__7188;
continue;
}
}
} else
{return val__7176;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7179 = arr.length;
var val__7180 = val;
var n__7181 = 0;
while(true){
if((n__7181 < cnt__7179))
{var nval__7182 = f.call(null,val__7180,(arr[n__7181]));
if(cljs.core.reduced_QMARK_.call(null,nval__7182))
{return cljs.core.deref.call(null,nval__7182);
} else
{{
var G__7189 = nval__7182;
var G__7190 = (n__7181 + 1);
val__7180 = G__7189;
n__7181 = G__7190;
continue;
}
}
} else
{return val__7180;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7183 = arr.length;
var val__7184 = val;
var n__7185 = idx;
while(true){
if((n__7185 < cnt__7183))
{var nval__7186 = f.call(null,val__7184,(arr[n__7185]));
if(cljs.core.reduced_QMARK_.call(null,nval__7186))
{return cljs.core.deref.call(null,nval__7186);
} else
{{
var G__7191 = nval__7186;
var G__7192 = (n__7185 + 1);
val__7184 = G__7191;
n__7185 = G__7192;
continue;
}
}
} else
{return val__7184;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7193 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7194 = this;
if(((this__7194.i + 1) < this__7194.a.length))
{return (new cljs.core.IndexedSeq(this__7194.a,(this__7194.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7195 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7196 = this;
var c__7197 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7197 > 0))
{return (new cljs.core.RSeq(coll,(c__7197 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7198 = this;
var this__7199 = this;
return cljs.core.pr_str.call(null,this__7199);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7200 = this;
if(cljs.core.counted_QMARK_.call(null,this__7200.a))
{return cljs.core.ci_reduce.call(null,this__7200.a,f,(this__7200.a[this__7200.i]),(this__7200.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7200.a[this__7200.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7201 = this;
if(cljs.core.counted_QMARK_.call(null,this__7201.a))
{return cljs.core.ci_reduce.call(null,this__7201.a,f,start,this__7201.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7202 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7203 = this;
return (this__7203.a.length - this__7203.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7204 = this;
return (this__7204.a[this__7204.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7205 = this;
if(((this__7205.i + 1) < this__7205.a.length))
{return (new cljs.core.IndexedSeq(this__7205.a,(this__7205.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7206 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7207 = this;
var i__7208 = (n + this__7207.i);
if((i__7208 < this__7207.a.length))
{return (this__7207.a[i__7208]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7209 = this;
var i__7210 = (n + this__7209.i);
if((i__7210 < this__7209.a.length))
{return (this__7209.a[i__7210]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7211 = null;
var G__7211__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7211__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7211 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7211__2.call(this,array,f);
case 3:
return G__7211__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7211;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7212 = null;
var G__7212__2 = (function (array,k){
return (array[k]);
});
var G__7212__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7212 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7212__2.call(this,array,k);
case 3:
return G__7212__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7212;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7213 = null;
var G__7213__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7213__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7213 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7213__2.call(this,array,n);
case 3:
return G__7213__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7213;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7214 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7215 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7216 = this;
var this__7217 = this;
return cljs.core.pr_str.call(null,this__7217);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7218 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7219 = this;
return (this__7219.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7220 = this;
return cljs.core._nth.call(null,this__7220.ci,this__7220.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7221 = this;
if((this__7221.i > 0))
{return (new cljs.core.RSeq(this__7221.ci,(this__7221.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7223 = this;
return (new cljs.core.RSeq(this__7223.ci,this__7223.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7224 = this;
return this__7224.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7228__7229 = coll;
if(G__7228__7229)
{if((function (){var or__3824__auto____7230 = (G__7228__7229.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7230)
{return or__3824__auto____7230;
} else
{return G__7228__7229.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7228__7229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7228__7229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7228__7229);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7235__7236 = coll;
if(G__7235__7236)
{if((function (){var or__3824__auto____7237 = (G__7235__7236.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7237)
{return or__3824__auto____7237;
} else
{return G__7235__7236.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7235__7236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7235__7236);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7235__7236);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7238 = cljs.core.seq.call(null,coll);
if((s__7238 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7238);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7243__7244 = coll;
if(G__7243__7244)
{if((function (){var or__3824__auto____7245 = (G__7243__7244.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7245)
{return or__3824__auto____7245;
} else
{return G__7243__7244.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7243__7244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7243__7244);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7243__7244);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7246 = cljs.core.seq.call(null,coll);
if(!((s__7246 == null)))
{return cljs.core._rest.call(null,s__7246);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7250__7251 = coll;
if(G__7250__7251)
{if((function (){var or__3824__auto____7252 = (G__7250__7251.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7252)
{return or__3824__auto____7252;
} else
{return G__7250__7251.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7250__7251.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7250__7251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7250__7251);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7254 = cljs.core.next.call(null,s);
if(!((sn__7254 == null)))
{{
var G__7255 = sn__7254;
s = G__7255;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7256__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7257 = conj.call(null,coll,x);
var G__7258 = cljs.core.first.call(null,xs);
var G__7259 = cljs.core.next.call(null,xs);
coll = G__7257;
x = G__7258;
xs = G__7259;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7256 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7256__delegate.call(this, coll, x, xs);
};
G__7256.cljs$lang$maxFixedArity = 2;
G__7256.cljs$lang$applyTo = (function (arglist__7260){
var coll = cljs.core.first(arglist__7260);
var x = cljs.core.first(cljs.core.next(arglist__7260));
var xs = cljs.core.rest(cljs.core.next(arglist__7260));
return G__7256__delegate(coll, x, xs);
});
G__7256.cljs$lang$arity$variadic = G__7256__delegate;
return G__7256;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7263 = cljs.core.seq.call(null,coll);
var acc__7264 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7263))
{return (acc__7264 + cljs.core._count.call(null,s__7263));
} else
{{
var G__7265 = cljs.core.next.call(null,s__7263);
var G__7266 = (acc__7264 + 1);
s__7263 = G__7265;
acc__7264 = G__7266;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7273__7274 = coll;
if(G__7273__7274)
{if((function (){var or__3824__auto____7275 = (G__7273__7274.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7275)
{return or__3824__auto____7275;
} else
{return G__7273__7274.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7273__7274.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7273__7274);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7273__7274);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7276__7277 = coll;
if(G__7276__7277)
{if((function (){var or__3824__auto____7278 = (G__7276__7277.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7278)
{return or__3824__auto____7278;
} else
{return G__7276__7277.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7276__7277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7276__7277);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7276__7277);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7281__delegate = function (coll,k,v,kvs){
while(true){
var ret__7280 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7282 = ret__7280;
var G__7283 = cljs.core.first.call(null,kvs);
var G__7284 = cljs.core.second.call(null,kvs);
var G__7285 = cljs.core.nnext.call(null,kvs);
coll = G__7282;
k = G__7283;
v = G__7284;
kvs = G__7285;
continue;
}
} else
{return ret__7280;
}
break;
}
};
var G__7281 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7281__delegate.call(this, coll, k, v, kvs);
};
G__7281.cljs$lang$maxFixedArity = 3;
G__7281.cljs$lang$applyTo = (function (arglist__7286){
var coll = cljs.core.first(arglist__7286);
var k = cljs.core.first(cljs.core.next(arglist__7286));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7286)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7286)));
return G__7281__delegate(coll, k, v, kvs);
});
G__7281.cljs$lang$arity$variadic = G__7281__delegate;
return G__7281;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7289__delegate = function (coll,k,ks){
while(true){
var ret__7288 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7290 = ret__7288;
var G__7291 = cljs.core.first.call(null,ks);
var G__7292 = cljs.core.next.call(null,ks);
coll = G__7290;
k = G__7291;
ks = G__7292;
continue;
}
} else
{return ret__7288;
}
break;
}
};
var G__7289 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7289__delegate.call(this, coll, k, ks);
};
G__7289.cljs$lang$maxFixedArity = 2;
G__7289.cljs$lang$applyTo = (function (arglist__7293){
var coll = cljs.core.first(arglist__7293);
var k = cljs.core.first(cljs.core.next(arglist__7293));
var ks = cljs.core.rest(cljs.core.next(arglist__7293));
return G__7289__delegate(coll, k, ks);
});
G__7289.cljs$lang$arity$variadic = G__7289__delegate;
return G__7289;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7297__7298 = o;
if(G__7297__7298)
{if((function (){var or__3824__auto____7299 = (G__7297__7298.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7299)
{return or__3824__auto____7299;
} else
{return G__7297__7298.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7297__7298.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7297__7298);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7297__7298);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7302__delegate = function (coll,k,ks){
while(true){
var ret__7301 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7303 = ret__7301;
var G__7304 = cljs.core.first.call(null,ks);
var G__7305 = cljs.core.next.call(null,ks);
coll = G__7303;
k = G__7304;
ks = G__7305;
continue;
}
} else
{return ret__7301;
}
break;
}
};
var G__7302 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7302__delegate.call(this, coll, k, ks);
};
G__7302.cljs$lang$maxFixedArity = 2;
G__7302.cljs$lang$applyTo = (function (arglist__7306){
var coll = cljs.core.first(arglist__7306);
var k = cljs.core.first(cljs.core.next(arglist__7306));
var ks = cljs.core.rest(cljs.core.next(arglist__7306));
return G__7302__delegate(coll, k, ks);
});
G__7302.cljs$lang$arity$variadic = G__7302__delegate;
return G__7302;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7308 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7308);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7308;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7310 = (cljs.core.string_hash_cache[k]);
if(!((h__7310 == null)))
{return h__7310;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7312 = goog.isString(o);
if(and__3822__auto____7312)
{return check_cache;
} else
{return and__3822__auto____7312;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7316__7317 = x;
if(G__7316__7317)
{if((function (){var or__3824__auto____7318 = (G__7316__7317.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7318)
{return or__3824__auto____7318;
} else
{return G__7316__7317.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7316__7317.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7316__7317);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7316__7317);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7322__7323 = x;
if(G__7322__7323)
{if((function (){var or__3824__auto____7324 = (G__7322__7323.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7324)
{return or__3824__auto____7324;
} else
{return G__7322__7323.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7322__7323.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7322__7323);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7322__7323);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7328__7329 = x;
if(G__7328__7329)
{if((function (){var or__3824__auto____7330 = (G__7328__7329.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7330)
{return or__3824__auto____7330;
} else
{return G__7328__7329.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7328__7329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7328__7329);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7328__7329);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7334__7335 = x;
if(G__7334__7335)
{if((function (){var or__3824__auto____7336 = (G__7334__7335.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7336)
{return or__3824__auto____7336;
} else
{return G__7334__7335.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7334__7335.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7334__7335);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7334__7335);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7340__7341 = x;
if(G__7340__7341)
{if((function (){var or__3824__auto____7342 = (G__7340__7341.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7342)
{return or__3824__auto____7342;
} else
{return G__7340__7341.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7340__7341.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7340__7341);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7340__7341);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7346__7347 = x;
if(G__7346__7347)
{if((function (){var or__3824__auto____7348 = (G__7346__7347.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7348)
{return or__3824__auto____7348;
} else
{return G__7346__7347.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7346__7347.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7346__7347);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7346__7347);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7352__7353 = x;
if(G__7352__7353)
{if((function (){var or__3824__auto____7354 = (G__7352__7353.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7354)
{return or__3824__auto____7354;
} else
{return G__7352__7353.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7352__7353.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7352__7353);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7352__7353);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7358__7359 = x;
if(G__7358__7359)
{if((function (){var or__3824__auto____7360 = (G__7358__7359.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7360)
{return or__3824__auto____7360;
} else
{return G__7358__7359.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7358__7359.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7358__7359);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7358__7359);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7364__7365 = x;
if(G__7364__7365)
{if((function (){var or__3824__auto____7366 = (G__7364__7365.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7366)
{return or__3824__auto____7366;
} else
{return G__7364__7365.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7364__7365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7364__7365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7364__7365);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7370__7371 = x;
if(G__7370__7371)
{if(cljs.core.truth_((function (){var or__3824__auto____7372 = null;
if(cljs.core.truth_(or__3824__auto____7372))
{return or__3824__auto____7372;
} else
{return G__7370__7371.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7370__7371.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7370__7371);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7370__7371);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7373__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7373 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7373__delegate.call(this, keyvals);
};
G__7373.cljs$lang$maxFixedArity = 0;
G__7373.cljs$lang$applyTo = (function (arglist__7374){
var keyvals = cljs.core.seq(arglist__7374);;
return G__7373__delegate(keyvals);
});
G__7373.cljs$lang$arity$variadic = G__7373__delegate;
return G__7373;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7376 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7376.push(key);
}));
return keys__7376;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7380 = i;
var j__7381 = j;
var len__7382 = len;
while(true){
if((len__7382 === 0))
{return to;
} else
{(to[j__7381] = (from[i__7380]));
{
var G__7383 = (i__7380 + 1);
var G__7384 = (j__7381 + 1);
var G__7385 = (len__7382 - 1);
i__7380 = G__7383;
j__7381 = G__7384;
len__7382 = G__7385;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7389 = (i + (len - 1));
var j__7390 = (j + (len - 1));
var len__7391 = len;
while(true){
if((len__7391 === 0))
{return to;
} else
{(to[j__7390] = (from[i__7389]));
{
var G__7392 = (i__7389 - 1);
var G__7393 = (j__7390 - 1);
var G__7394 = (len__7391 - 1);
i__7389 = G__7392;
j__7390 = G__7393;
len__7391 = G__7394;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7398__7399 = s;
if(G__7398__7399)
{if((function (){var or__3824__auto____7400 = (G__7398__7399.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7400)
{return or__3824__auto____7400;
} else
{return G__7398__7399.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7398__7399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7398__7399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7398__7399);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7404__7405 = s;
if(G__7404__7405)
{if((function (){var or__3824__auto____7406 = (G__7404__7405.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7406)
{return or__3824__auto____7406;
} else
{return G__7404__7405.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7404__7405.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7404__7405);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7404__7405);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7409 = goog.isString(x);
if(and__3822__auto____7409)
{return !((function (){var or__3824__auto____7410 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7410)
{return or__3824__auto____7410;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7409;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7412 = goog.isString(x);
if(and__3822__auto____7412)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7412;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7414 = goog.isString(x);
if(and__3822__auto____7414)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7414;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7419 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7419)
{return or__3824__auto____7419;
} else
{var G__7420__7421 = f;
if(G__7420__7421)
{if((function (){var or__3824__auto____7422 = (G__7420__7421.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7422)
{return or__3824__auto____7422;
} else
{return G__7420__7421.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7420__7421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7420__7421);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7420__7421);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7424 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7424)
{return (n == n.toFixed());
} else
{return and__3822__auto____7424;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7427 = coll;
if(cljs.core.truth_(and__3822__auto____7427))
{var and__3822__auto____7428 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7428)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7428;
}
} else
{return and__3822__auto____7427;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7437__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7433 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7434 = more;
while(true){
var x__7435 = cljs.core.first.call(null,xs__7434);
var etc__7436 = cljs.core.next.call(null,xs__7434);
if(cljs.core.truth_(xs__7434))
{if(cljs.core.contains_QMARK_.call(null,s__7433,x__7435))
{return false;
} else
{{
var G__7438 = cljs.core.conj.call(null,s__7433,x__7435);
var G__7439 = etc__7436;
s__7433 = G__7438;
xs__7434 = G__7439;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7437__delegate.call(this, x, y, more);
};
G__7437.cljs$lang$maxFixedArity = 2;
G__7437.cljs$lang$applyTo = (function (arglist__7440){
var x = cljs.core.first(arglist__7440);
var y = cljs.core.first(cljs.core.next(arglist__7440));
var more = cljs.core.rest(cljs.core.next(arglist__7440));
return G__7437__delegate(x, y, more);
});
G__7437.cljs$lang$arity$variadic = G__7437__delegate;
return G__7437;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7444__7445 = x;
if(G__7444__7445)
{if(cljs.core.truth_((function (){var or__3824__auto____7446 = null;
if(cljs.core.truth_(or__3824__auto____7446))
{return or__3824__auto____7446;
} else
{return G__7444__7445.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7444__7445.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7444__7445);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7444__7445);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7451 = cljs.core.count.call(null,xs);
var yl__7452 = cljs.core.count.call(null,ys);
if((xl__7451 < yl__7452))
{return -1;
} else
{if((xl__7451 > yl__7452))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7451,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7453 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7454 = (d__7453 === 0);
if(and__3822__auto____7454)
{return ((n + 1) < len);
} else
{return and__3822__auto____7454;
}
})())
{{
var G__7455 = xs;
var G__7456 = ys;
var G__7457 = len;
var G__7458 = (n + 1);
xs = G__7455;
ys = G__7456;
len = G__7457;
n = G__7458;
continue;
}
} else
{return d__7453;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7460 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7460))
{return r__7460;
} else
{if(cljs.core.truth_(r__7460))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7462 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7462,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7462);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7468 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7468)
{var s__7469 = temp__3971__auto____7468;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7469),cljs.core.next.call(null,s__7469));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7470 = val;
var coll__7471 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7471)
{var nval__7472 = f.call(null,val__7470,cljs.core.first.call(null,coll__7471));
if(cljs.core.reduced_QMARK_.call(null,nval__7472))
{return cljs.core.deref.call(null,nval__7472);
} else
{{
var G__7473 = nval__7472;
var G__7474 = cljs.core.next.call(null,coll__7471);
val__7470 = G__7473;
coll__7471 = G__7474;
continue;
}
}
} else
{return val__7470;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7476 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7476);
return cljs.core.vec.call(null,a__7476);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7483__7484 = coll;
if(G__7483__7484)
{if((function (){var or__3824__auto____7485 = (G__7483__7484.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7485)
{return or__3824__auto____7485;
} else
{return G__7483__7484.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7483__7484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7483__7484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7483__7484);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7486__7487 = coll;
if(G__7486__7487)
{if((function (){var or__3824__auto____7488 = (G__7486__7487.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7488)
{return or__3824__auto____7488;
} else
{return G__7486__7487.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7486__7487.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7486__7487);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7486__7487);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7489 = this;
return this__7489.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7490__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7490 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7490__delegate.call(this, x, y, more);
};
G__7490.cljs$lang$maxFixedArity = 2;
G__7490.cljs$lang$applyTo = (function (arglist__7491){
var x = cljs.core.first(arglist__7491);
var y = cljs.core.first(cljs.core.next(arglist__7491));
var more = cljs.core.rest(cljs.core.next(arglist__7491));
return G__7490__delegate(x, y, more);
});
G__7490.cljs$lang$arity$variadic = G__7490__delegate;
return G__7490;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7492__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7492 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7492__delegate.call(this, x, y, more);
};
G__7492.cljs$lang$maxFixedArity = 2;
G__7492.cljs$lang$applyTo = (function (arglist__7493){
var x = cljs.core.first(arglist__7493);
var y = cljs.core.first(cljs.core.next(arglist__7493));
var more = cljs.core.rest(cljs.core.next(arglist__7493));
return G__7492__delegate(x, y, more);
});
G__7492.cljs$lang$arity$variadic = G__7492__delegate;
return G__7492;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7494__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7494 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7494__delegate.call(this, x, y, more);
};
G__7494.cljs$lang$maxFixedArity = 2;
G__7494.cljs$lang$applyTo = (function (arglist__7495){
var x = cljs.core.first(arglist__7495);
var y = cljs.core.first(cljs.core.next(arglist__7495));
var more = cljs.core.rest(cljs.core.next(arglist__7495));
return G__7494__delegate(x, y, more);
});
G__7494.cljs$lang$arity$variadic = G__7494__delegate;
return G__7494;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7496__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7496__delegate.call(this, x, y, more);
};
G__7496.cljs$lang$maxFixedArity = 2;
G__7496.cljs$lang$applyTo = (function (arglist__7497){
var x = cljs.core.first(arglist__7497);
var y = cljs.core.first(cljs.core.next(arglist__7497));
var more = cljs.core.rest(cljs.core.next(arglist__7497));
return G__7496__delegate(x, y, more);
});
G__7496.cljs$lang$arity$variadic = G__7496__delegate;
return G__7496;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7498__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7499 = y;
var G__7500 = cljs.core.first.call(null,more);
var G__7501 = cljs.core.next.call(null,more);
x = G__7499;
y = G__7500;
more = G__7501;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7498 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7498__delegate.call(this, x, y, more);
};
G__7498.cljs$lang$maxFixedArity = 2;
G__7498.cljs$lang$applyTo = (function (arglist__7502){
var x = cljs.core.first(arglist__7502);
var y = cljs.core.first(cljs.core.next(arglist__7502));
var more = cljs.core.rest(cljs.core.next(arglist__7502));
return G__7498__delegate(x, y, more);
});
G__7498.cljs$lang$arity$variadic = G__7498__delegate;
return G__7498;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7503__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7504 = y;
var G__7505 = cljs.core.first.call(null,more);
var G__7506 = cljs.core.next.call(null,more);
x = G__7504;
y = G__7505;
more = G__7506;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7503 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7503__delegate.call(this, x, y, more);
};
G__7503.cljs$lang$maxFixedArity = 2;
G__7503.cljs$lang$applyTo = (function (arglist__7507){
var x = cljs.core.first(arglist__7507);
var y = cljs.core.first(cljs.core.next(arglist__7507));
var more = cljs.core.rest(cljs.core.next(arglist__7507));
return G__7503__delegate(x, y, more);
});
G__7503.cljs$lang$arity$variadic = G__7503__delegate;
return G__7503;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7508__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7509 = y;
var G__7510 = cljs.core.first.call(null,more);
var G__7511 = cljs.core.next.call(null,more);
x = G__7509;
y = G__7510;
more = G__7511;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7508 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7508__delegate.call(this, x, y, more);
};
G__7508.cljs$lang$maxFixedArity = 2;
G__7508.cljs$lang$applyTo = (function (arglist__7512){
var x = cljs.core.first(arglist__7512);
var y = cljs.core.first(cljs.core.next(arglist__7512));
var more = cljs.core.rest(cljs.core.next(arglist__7512));
return G__7508__delegate(x, y, more);
});
G__7508.cljs$lang$arity$variadic = G__7508__delegate;
return G__7508;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7513__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7514 = y;
var G__7515 = cljs.core.first.call(null,more);
var G__7516 = cljs.core.next.call(null,more);
x = G__7514;
y = G__7515;
more = G__7516;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7513__delegate.call(this, x, y, more);
};
G__7513.cljs$lang$maxFixedArity = 2;
G__7513.cljs$lang$applyTo = (function (arglist__7517){
var x = cljs.core.first(arglist__7517);
var y = cljs.core.first(cljs.core.next(arglist__7517));
var more = cljs.core.rest(cljs.core.next(arglist__7517));
return G__7513__delegate(x, y, more);
});
G__7513.cljs$lang$arity$variadic = G__7513__delegate;
return G__7513;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7518__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7518 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7518__delegate.call(this, x, y, more);
};
G__7518.cljs$lang$maxFixedArity = 2;
G__7518.cljs$lang$applyTo = (function (arglist__7519){
var x = cljs.core.first(arglist__7519);
var y = cljs.core.first(cljs.core.next(arglist__7519));
var more = cljs.core.rest(cljs.core.next(arglist__7519));
return G__7518__delegate(x, y, more);
});
G__7518.cljs$lang$arity$variadic = G__7518__delegate;
return G__7518;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7520__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7520 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7520__delegate.call(this, x, y, more);
};
G__7520.cljs$lang$maxFixedArity = 2;
G__7520.cljs$lang$applyTo = (function (arglist__7521){
var x = cljs.core.first(arglist__7521);
var y = cljs.core.first(cljs.core.next(arglist__7521));
var more = cljs.core.rest(cljs.core.next(arglist__7521));
return G__7520__delegate(x, y, more);
});
G__7520.cljs$lang$arity$variadic = G__7520__delegate;
return G__7520;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7523 = (n % d);
return cljs.core.fix.call(null,((n - rem__7523) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7525 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7525));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7528 = (v - ((v >> 1) & 1431655765));
var v__7529 = ((v__7528 & 858993459) + ((v__7528 >> 2) & 858993459));
return ((((v__7529 + (v__7529 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7530__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7531 = y;
var G__7532 = cljs.core.first.call(null,more);
var G__7533 = cljs.core.next.call(null,more);
x = G__7531;
y = G__7532;
more = G__7533;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7530 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7530__delegate.call(this, x, y, more);
};
G__7530.cljs$lang$maxFixedArity = 2;
G__7530.cljs$lang$applyTo = (function (arglist__7534){
var x = cljs.core.first(arglist__7534);
var y = cljs.core.first(cljs.core.next(arglist__7534));
var more = cljs.core.rest(cljs.core.next(arglist__7534));
return G__7530__delegate(x, y, more);
});
G__7530.cljs$lang$arity$variadic = G__7530__delegate;
return G__7530;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7538 = n;
var xs__7539 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7540 = xs__7539;
if(and__3822__auto____7540)
{return (n__7538 > 0);
} else
{return and__3822__auto____7540;
}
})()))
{{
var G__7541 = (n__7538 - 1);
var G__7542 = cljs.core.next.call(null,xs__7539);
n__7538 = G__7541;
xs__7539 = G__7542;
continue;
}
} else
{return xs__7539;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7543__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7544 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7545 = cljs.core.next.call(null,more);
sb = G__7544;
more = G__7545;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7543 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7543__delegate.call(this, x, ys);
};
G__7543.cljs$lang$maxFixedArity = 1;
G__7543.cljs$lang$applyTo = (function (arglist__7546){
var x = cljs.core.first(arglist__7546);
var ys = cljs.core.rest(arglist__7546);
return G__7543__delegate(x, ys);
});
G__7543.cljs$lang$arity$variadic = G__7543__delegate;
return G__7543;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7547__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7548 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7549 = cljs.core.next.call(null,more);
sb = G__7548;
more = G__7549;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7547 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7547__delegate.call(this, x, ys);
};
G__7547.cljs$lang$maxFixedArity = 1;
G__7547.cljs$lang$applyTo = (function (arglist__7550){
var x = cljs.core.first(arglist__7550);
var ys = cljs.core.rest(arglist__7550);
return G__7547__delegate(x, ys);
});
G__7547.cljs$lang$arity$variadic = G__7547__delegate;
return G__7547;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7551){
var fmt = cljs.core.first(arglist__7551);
var args = cljs.core.rest(arglist__7551);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7554 = cljs.core.seq.call(null,x);
var ys__7555 = cljs.core.seq.call(null,y);
while(true){
if((xs__7554 == null))
{return (ys__7555 == null);
} else
{if((ys__7555 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7554),cljs.core.first.call(null,ys__7555)))
{{
var G__7556 = cljs.core.next.call(null,xs__7554);
var G__7557 = cljs.core.next.call(null,ys__7555);
xs__7554 = G__7556;
ys__7555 = G__7557;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7558_SHARP_,p2__7559_SHARP_){
return cljs.core.hash_combine.call(null,p1__7558_SHARP_,cljs.core.hash.call(null,p2__7559_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7563 = 0;
var s__7564 = cljs.core.seq.call(null,m);
while(true){
if(s__7564)
{var e__7565 = cljs.core.first.call(null,s__7564);
{
var G__7566 = ((h__7563 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7565)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7565)))) % 4503599627370496);
var G__7567 = cljs.core.next.call(null,s__7564);
h__7563 = G__7566;
s__7564 = G__7567;
continue;
}
} else
{return h__7563;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7571 = 0;
var s__7572 = cljs.core.seq.call(null,s);
while(true){
if(s__7572)
{var e__7573 = cljs.core.first.call(null,s__7572);
{
var G__7574 = ((h__7571 + cljs.core.hash.call(null,e__7573)) % 4503599627370496);
var G__7575 = cljs.core.next.call(null,s__7572);
h__7571 = G__7574;
s__7572 = G__7575;
continue;
}
} else
{return h__7571;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7596__7597 = cljs.core.seq.call(null,fn_map);
if(G__7596__7597)
{var G__7599__7601 = cljs.core.first.call(null,G__7596__7597);
var vec__7600__7602 = G__7599__7601;
var key_name__7603 = cljs.core.nth.call(null,vec__7600__7602,0,null);
var f__7604 = cljs.core.nth.call(null,vec__7600__7602,1,null);
var G__7596__7605 = G__7596__7597;
var G__7599__7606 = G__7599__7601;
var G__7596__7607 = G__7596__7605;
while(true){
var vec__7608__7609 = G__7599__7606;
var key_name__7610 = cljs.core.nth.call(null,vec__7608__7609,0,null);
var f__7611 = cljs.core.nth.call(null,vec__7608__7609,1,null);
var G__7596__7612 = G__7596__7607;
var str_name__7613 = cljs.core.name.call(null,key_name__7610);
(obj[str_name__7613] = f__7611);
var temp__3974__auto____7614 = cljs.core.next.call(null,G__7596__7612);
if(temp__3974__auto____7614)
{var G__7596__7615 = temp__3974__auto____7614;
{
var G__7616 = cljs.core.first.call(null,G__7596__7615);
var G__7617 = G__7596__7615;
G__7599__7606 = G__7616;
G__7596__7607 = G__7617;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7618 = this;
var h__2220__auto____7619 = this__7618.__hash;
if(!((h__2220__auto____7619 == null)))
{return h__2220__auto____7619;
} else
{var h__2220__auto____7620 = cljs.core.hash_coll.call(null,coll);
this__7618.__hash = h__2220__auto____7620;
return h__2220__auto____7620;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7621 = this;
if((this__7621.count === 1))
{return null;
} else
{return this__7621.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7622 = this;
return (new cljs.core.List(this__7622.meta,o,coll,(this__7622.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7623 = this;
var this__7624 = this;
return cljs.core.pr_str.call(null,this__7624);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7625 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7626 = this;
return this__7626.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7627 = this;
return this__7627.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7628 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7629 = this;
return this__7629.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7630 = this;
if((this__7630.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7630.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7631 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7632 = this;
return (new cljs.core.List(meta,this__7632.first,this__7632.rest,this__7632.count,this__7632.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7633 = this;
return this__7633.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7634 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7635 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7636 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7637 = this;
return (new cljs.core.List(this__7637.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7638 = this;
var this__7639 = this;
return cljs.core.pr_str.call(null,this__7639);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7640 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7641 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7642 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7643 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7644 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7645 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7646 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7647 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7648 = this;
return this__7648.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7649 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7653__7654 = coll;
if(G__7653__7654)
{if((function (){var or__3824__auto____7655 = (G__7653__7654.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7655)
{return or__3824__auto____7655;
} else
{return G__7653__7654.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7653__7654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7653__7654);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7653__7654);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7656__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7656 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7656__delegate.call(this, x, y, z, items);
};
G__7656.cljs$lang$maxFixedArity = 3;
G__7656.cljs$lang$applyTo = (function (arglist__7657){
var x = cljs.core.first(arglist__7657);
var y = cljs.core.first(cljs.core.next(arglist__7657));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7657)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7657)));
return G__7656__delegate(x, y, z, items);
});
G__7656.cljs$lang$arity$variadic = G__7656__delegate;
return G__7656;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7658 = this;
var h__2220__auto____7659 = this__7658.__hash;
if(!((h__2220__auto____7659 == null)))
{return h__2220__auto____7659;
} else
{var h__2220__auto____7660 = cljs.core.hash_coll.call(null,coll);
this__7658.__hash = h__2220__auto____7660;
return h__2220__auto____7660;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7661 = this;
if((this__7661.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7661.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7662 = this;
return (new cljs.core.Cons(null,o,coll,this__7662.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7663 = this;
var this__7664 = this;
return cljs.core.pr_str.call(null,this__7664);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7665 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7666 = this;
return this__7666.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7667 = this;
if((this__7667.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7667.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7668 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7669 = this;
return (new cljs.core.Cons(meta,this__7669.first,this__7669.rest,this__7669.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7670 = this;
return this__7670.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7671 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7671.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7676 = (coll == null);
if(or__3824__auto____7676)
{return or__3824__auto____7676;
} else
{var G__7677__7678 = coll;
if(G__7677__7678)
{if((function (){var or__3824__auto____7679 = (G__7677__7678.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7679)
{return or__3824__auto____7679;
} else
{return G__7677__7678.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7677__7678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7677__7678);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7677__7678);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7683__7684 = x;
if(G__7683__7684)
{if((function (){var or__3824__auto____7685 = (G__7683__7684.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7685)
{return or__3824__auto____7685;
} else
{return G__7683__7684.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7683__7684.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7683__7684);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7683__7684);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7686 = null;
var G__7686__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7686__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7686 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7686__2.call(this,string,f);
case 3:
return G__7686__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7686;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7687 = null;
var G__7687__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7687__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7687 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7687__2.call(this,string,k);
case 3:
return G__7687__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7687;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7688 = null;
var G__7688__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7688__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7688 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7688__2.call(this,string,n);
case 3:
return G__7688__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7688;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7700 = null;
var G__7700__2 = (function (this_sym7691,coll){
var this__7693 = this;
var this_sym7691__7694 = this;
var ___7695 = this_sym7691__7694;
if((coll == null))
{return null;
} else
{var strobj__7696 = coll.strobj;
if((strobj__7696 == null))
{return cljs.core._lookup.call(null,coll,this__7693.k,null);
} else
{return (strobj__7696[this__7693.k]);
}
}
});
var G__7700__3 = (function (this_sym7692,coll,not_found){
var this__7693 = this;
var this_sym7692__7697 = this;
var ___7698 = this_sym7692__7697;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7693.k,not_found);
}
});
G__7700 = function(this_sym7692,coll,not_found){
switch(arguments.length){
case 2:
return G__7700__2.call(this,this_sym7692,coll);
case 3:
return G__7700__3.call(this,this_sym7692,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7700;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7689,args7690){
var this__7699 = this;
return this_sym7689.call.apply(this_sym7689,[this_sym7689].concat(args7690.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7709 = null;
var G__7709__2 = (function (this_sym7703,coll){
var this_sym7703__7705 = this;
var this__7706 = this_sym7703__7705;
return cljs.core._lookup.call(null,coll,this__7706.toString(),null);
});
var G__7709__3 = (function (this_sym7704,coll,not_found){
var this_sym7704__7707 = this;
var this__7708 = this_sym7704__7707;
return cljs.core._lookup.call(null,coll,this__7708.toString(),not_found);
});
G__7709 = function(this_sym7704,coll,not_found){
switch(arguments.length){
case 2:
return G__7709__2.call(this,this_sym7704,coll);
case 3:
return G__7709__3.call(this,this_sym7704,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7709;
})()
;
String.prototype.apply = (function (this_sym7701,args7702){
return this_sym7701.call.apply(this_sym7701,[this_sym7701].concat(args7702.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7711 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7711;
} else
{lazy_seq.x = x__7711.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7712 = this;
var h__2220__auto____7713 = this__7712.__hash;
if(!((h__2220__auto____7713 == null)))
{return h__2220__auto____7713;
} else
{var h__2220__auto____7714 = cljs.core.hash_coll.call(null,coll);
this__7712.__hash = h__2220__auto____7714;
return h__2220__auto____7714;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7715 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7716 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7717 = this;
var this__7718 = this;
return cljs.core.pr_str.call(null,this__7718);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7719 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7720 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7721 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7723 = this;
return (new cljs.core.LazySeq(meta,this__7723.realized,this__7723.x,this__7723.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7724 = this;
return this__7724.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7725 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7725.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7726 = this;
return this__7726.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7727 = this;
var ___7728 = this;
(this__7727.buf[this__7727.end] = o);
return this__7727.end = (this__7727.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7729 = this;
var ___7730 = this;
var ret__7731 = (new cljs.core.ArrayChunk(this__7729.buf,0,this__7729.end));
this__7729.buf = null;
return ret__7731;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7732 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7732.arr[this__7732.off]),(this__7732.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7733 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7733.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7734 = this;
if((this__7734.off === this__7734.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7734.arr,(this__7734.off + 1),this__7734.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7735 = this;
return (this__7735.arr[(this__7735.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7736 = this;
if((function (){var and__3822__auto____7737 = (i >= 0);
if(and__3822__auto____7737)
{return (i < (this__7736.end - this__7736.off));
} else
{return and__3822__auto____7737;
}
})())
{return (this__7736.arr[(this__7736.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7738 = this;
return (this__7738.end - this__7738.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7739 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7740 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7741 = this;
return cljs.core._nth.call(null,this__7741.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7742 = this;
if((cljs.core._count.call(null,this__7742.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7742.chunk),this__7742.more,this__7742.meta));
} else
{if((this__7742.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7742.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7743 = this;
if((this__7743.more == null))
{return null;
} else
{return this__7743.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7744 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7745 = this;
return (new cljs.core.ChunkedCons(this__7745.chunk,this__7745.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7746 = this;
return this__7746.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7747 = this;
return this__7747.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7748 = this;
if((this__7748.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7748.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7752__7753 = s;
if(G__7752__7753)
{if(cljs.core.truth_((function (){var or__3824__auto____7754 = null;
if(cljs.core.truth_(or__3824__auto____7754))
{return or__3824__auto____7754;
} else
{return G__7752__7753.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7752__7753.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7752__7753);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7752__7753);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7757 = [];
var s__7758 = s;
while(true){
if(cljs.core.seq.call(null,s__7758))
{ary__7757.push(cljs.core.first.call(null,s__7758));
{
var G__7759 = cljs.core.next.call(null,s__7758);
s__7758 = G__7759;
continue;
}
} else
{return ary__7757;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7763 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7764 = 0;
var xs__7765 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7765)
{(ret__7763[i__7764] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7765)));
{
var G__7766 = (i__7764 + 1);
var G__7767 = cljs.core.next.call(null,xs__7765);
i__7764 = G__7766;
xs__7765 = G__7767;
continue;
}
} else
{}
break;
}
return ret__7763;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7775 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7776 = cljs.core.seq.call(null,init_val_or_seq);
var i__7777 = 0;
var s__7778 = s__7776;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7779 = s__7778;
if(and__3822__auto____7779)
{return (i__7777 < size);
} else
{return and__3822__auto____7779;
}
})()))
{(a__7775[i__7777] = cljs.core.first.call(null,s__7778));
{
var G__7782 = (i__7777 + 1);
var G__7783 = cljs.core.next.call(null,s__7778);
i__7777 = G__7782;
s__7778 = G__7783;
continue;
}
} else
{return a__7775;
}
break;
}
} else
{var n__2555__auto____7780 = size;
var i__7781 = 0;
while(true){
if((i__7781 < n__2555__auto____7780))
{(a__7775[i__7781] = init_val_or_seq);
{
var G__7784 = (i__7781 + 1);
i__7781 = G__7784;
continue;
}
} else
{}
break;
}
return a__7775;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7792 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7793 = cljs.core.seq.call(null,init_val_or_seq);
var i__7794 = 0;
var s__7795 = s__7793;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7796 = s__7795;
if(and__3822__auto____7796)
{return (i__7794 < size);
} else
{return and__3822__auto____7796;
}
})()))
{(a__7792[i__7794] = cljs.core.first.call(null,s__7795));
{
var G__7799 = (i__7794 + 1);
var G__7800 = cljs.core.next.call(null,s__7795);
i__7794 = G__7799;
s__7795 = G__7800;
continue;
}
} else
{return a__7792;
}
break;
}
} else
{var n__2555__auto____7797 = size;
var i__7798 = 0;
while(true){
if((i__7798 < n__2555__auto____7797))
{(a__7792[i__7798] = init_val_or_seq);
{
var G__7801 = (i__7798 + 1);
i__7798 = G__7801;
continue;
}
} else
{}
break;
}
return a__7792;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7809 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7810 = cljs.core.seq.call(null,init_val_or_seq);
var i__7811 = 0;
var s__7812 = s__7810;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7813 = s__7812;
if(and__3822__auto____7813)
{return (i__7811 < size);
} else
{return and__3822__auto____7813;
}
})()))
{(a__7809[i__7811] = cljs.core.first.call(null,s__7812));
{
var G__7816 = (i__7811 + 1);
var G__7817 = cljs.core.next.call(null,s__7812);
i__7811 = G__7816;
s__7812 = G__7817;
continue;
}
} else
{return a__7809;
}
break;
}
} else
{var n__2555__auto____7814 = size;
var i__7815 = 0;
while(true){
if((i__7815 < n__2555__auto____7814))
{(a__7809[i__7815] = init_val_or_seq);
{
var G__7818 = (i__7815 + 1);
i__7815 = G__7818;
continue;
}
} else
{}
break;
}
return a__7809;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7823 = s;
var i__7824 = n;
var sum__7825 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7826 = (i__7824 > 0);
if(and__3822__auto____7826)
{return cljs.core.seq.call(null,s__7823);
} else
{return and__3822__auto____7826;
}
})()))
{{
var G__7827 = cljs.core.next.call(null,s__7823);
var G__7828 = (i__7824 - 1);
var G__7829 = (sum__7825 + 1);
s__7823 = G__7827;
i__7824 = G__7828;
sum__7825 = G__7829;
continue;
}
} else
{return sum__7825;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7834 = cljs.core.seq.call(null,x);
if(s__7834)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7834))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7834),concat.call(null,cljs.core.chunk_rest.call(null,s__7834),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7834),concat.call(null,cljs.core.rest.call(null,s__7834),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7838__delegate = function (x,y,zs){
var cat__7837 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7836 = cljs.core.seq.call(null,xys);
if(xys__7836)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7836))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7836),cat.call(null,cljs.core.chunk_rest.call(null,xys__7836),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7836),cat.call(null,cljs.core.rest.call(null,xys__7836),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7837.call(null,concat.call(null,x,y),zs);
};
var G__7838 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7838__delegate.call(this, x, y, zs);
};
G__7838.cljs$lang$maxFixedArity = 2;
G__7838.cljs$lang$applyTo = (function (arglist__7839){
var x = cljs.core.first(arglist__7839);
var y = cljs.core.first(cljs.core.next(arglist__7839));
var zs = cljs.core.rest(cljs.core.next(arglist__7839));
return G__7838__delegate(x, y, zs);
});
G__7838.cljs$lang$arity$variadic = G__7838__delegate;
return G__7838;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7840__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7840 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7840__delegate.call(this, a, b, c, d, more);
};
G__7840.cljs$lang$maxFixedArity = 4;
G__7840.cljs$lang$applyTo = (function (arglist__7841){
var a = cljs.core.first(arglist__7841);
var b = cljs.core.first(cljs.core.next(arglist__7841));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7841)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7841))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7841))));
return G__7840__delegate(a, b, c, d, more);
});
G__7840.cljs$lang$arity$variadic = G__7840__delegate;
return G__7840;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7883 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7884 = cljs.core._first.call(null,args__7883);
var args__7885 = cljs.core._rest.call(null,args__7883);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7884);
} else
{return f.call(null,a__7884);
}
} else
{var b__7886 = cljs.core._first.call(null,args__7885);
var args__7887 = cljs.core._rest.call(null,args__7885);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7884,b__7886);
} else
{return f.call(null,a__7884,b__7886);
}
} else
{var c__7888 = cljs.core._first.call(null,args__7887);
var args__7889 = cljs.core._rest.call(null,args__7887);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7884,b__7886,c__7888);
} else
{return f.call(null,a__7884,b__7886,c__7888);
}
} else
{var d__7890 = cljs.core._first.call(null,args__7889);
var args__7891 = cljs.core._rest.call(null,args__7889);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7884,b__7886,c__7888,d__7890);
} else
{return f.call(null,a__7884,b__7886,c__7888,d__7890);
}
} else
{var e__7892 = cljs.core._first.call(null,args__7891);
var args__7893 = cljs.core._rest.call(null,args__7891);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7884,b__7886,c__7888,d__7890,e__7892);
} else
{return f.call(null,a__7884,b__7886,c__7888,d__7890,e__7892);
}
} else
{var f__7894 = cljs.core._first.call(null,args__7893);
var args__7895 = cljs.core._rest.call(null,args__7893);
if((argc === 6))
{if(f__7894.cljs$lang$arity$6)
{return f__7894.cljs$lang$arity$6(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894);
}
} else
{var g__7896 = cljs.core._first.call(null,args__7895);
var args__7897 = cljs.core._rest.call(null,args__7895);
if((argc === 7))
{if(f__7894.cljs$lang$arity$7)
{return f__7894.cljs$lang$arity$7(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896);
}
} else
{var h__7898 = cljs.core._first.call(null,args__7897);
var args__7899 = cljs.core._rest.call(null,args__7897);
if((argc === 8))
{if(f__7894.cljs$lang$arity$8)
{return f__7894.cljs$lang$arity$8(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898);
}
} else
{var i__7900 = cljs.core._first.call(null,args__7899);
var args__7901 = cljs.core._rest.call(null,args__7899);
if((argc === 9))
{if(f__7894.cljs$lang$arity$9)
{return f__7894.cljs$lang$arity$9(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900);
}
} else
{var j__7902 = cljs.core._first.call(null,args__7901);
var args__7903 = cljs.core._rest.call(null,args__7901);
if((argc === 10))
{if(f__7894.cljs$lang$arity$10)
{return f__7894.cljs$lang$arity$10(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902);
}
} else
{var k__7904 = cljs.core._first.call(null,args__7903);
var args__7905 = cljs.core._rest.call(null,args__7903);
if((argc === 11))
{if(f__7894.cljs$lang$arity$11)
{return f__7894.cljs$lang$arity$11(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904);
}
} else
{var l__7906 = cljs.core._first.call(null,args__7905);
var args__7907 = cljs.core._rest.call(null,args__7905);
if((argc === 12))
{if(f__7894.cljs$lang$arity$12)
{return f__7894.cljs$lang$arity$12(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906);
}
} else
{var m__7908 = cljs.core._first.call(null,args__7907);
var args__7909 = cljs.core._rest.call(null,args__7907);
if((argc === 13))
{if(f__7894.cljs$lang$arity$13)
{return f__7894.cljs$lang$arity$13(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908);
}
} else
{var n__7910 = cljs.core._first.call(null,args__7909);
var args__7911 = cljs.core._rest.call(null,args__7909);
if((argc === 14))
{if(f__7894.cljs$lang$arity$14)
{return f__7894.cljs$lang$arity$14(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910);
}
} else
{var o__7912 = cljs.core._first.call(null,args__7911);
var args__7913 = cljs.core._rest.call(null,args__7911);
if((argc === 15))
{if(f__7894.cljs$lang$arity$15)
{return f__7894.cljs$lang$arity$15(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912);
}
} else
{var p__7914 = cljs.core._first.call(null,args__7913);
var args__7915 = cljs.core._rest.call(null,args__7913);
if((argc === 16))
{if(f__7894.cljs$lang$arity$16)
{return f__7894.cljs$lang$arity$16(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914);
}
} else
{var q__7916 = cljs.core._first.call(null,args__7915);
var args__7917 = cljs.core._rest.call(null,args__7915);
if((argc === 17))
{if(f__7894.cljs$lang$arity$17)
{return f__7894.cljs$lang$arity$17(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916);
}
} else
{var r__7918 = cljs.core._first.call(null,args__7917);
var args__7919 = cljs.core._rest.call(null,args__7917);
if((argc === 18))
{if(f__7894.cljs$lang$arity$18)
{return f__7894.cljs$lang$arity$18(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918);
}
} else
{var s__7920 = cljs.core._first.call(null,args__7919);
var args__7921 = cljs.core._rest.call(null,args__7919);
if((argc === 19))
{if(f__7894.cljs$lang$arity$19)
{return f__7894.cljs$lang$arity$19(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918,s__7920);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918,s__7920);
}
} else
{var t__7922 = cljs.core._first.call(null,args__7921);
var args__7923 = cljs.core._rest.call(null,args__7921);
if((argc === 20))
{if(f__7894.cljs$lang$arity$20)
{return f__7894.cljs$lang$arity$20(a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918,s__7920,t__7922);
} else
{return f__7894.call(null,a__7884,b__7886,c__7888,d__7890,e__7892,f__7894,g__7896,h__7898,i__7900,j__7902,k__7904,l__7906,m__7908,n__7910,o__7912,p__7914,q__7916,r__7918,s__7920,t__7922);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7938 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7939 = cljs.core.bounded_count.call(null,args,(fixed_arity__7938 + 1));
if((bc__7939 <= fixed_arity__7938))
{return cljs.core.apply_to.call(null,f,bc__7939,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7940 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7941 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7942 = cljs.core.bounded_count.call(null,arglist__7940,(fixed_arity__7941 + 1));
if((bc__7942 <= fixed_arity__7941))
{return cljs.core.apply_to.call(null,f,bc__7942,arglist__7940);
} else
{return f.cljs$lang$applyTo(arglist__7940);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7940));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7943 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7944 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7945 = cljs.core.bounded_count.call(null,arglist__7943,(fixed_arity__7944 + 1));
if((bc__7945 <= fixed_arity__7944))
{return cljs.core.apply_to.call(null,f,bc__7945,arglist__7943);
} else
{return f.cljs$lang$applyTo(arglist__7943);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7943));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7946 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7947 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7948 = cljs.core.bounded_count.call(null,arglist__7946,(fixed_arity__7947 + 1));
if((bc__7948 <= fixed_arity__7947))
{return cljs.core.apply_to.call(null,f,bc__7948,arglist__7946);
} else
{return f.cljs$lang$applyTo(arglist__7946);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7946));
}
});
var apply__6 = (function() { 
var G__7952__delegate = function (f,a,b,c,d,args){
var arglist__7949 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7950 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7951 = cljs.core.bounded_count.call(null,arglist__7949,(fixed_arity__7950 + 1));
if((bc__7951 <= fixed_arity__7950))
{return cljs.core.apply_to.call(null,f,bc__7951,arglist__7949);
} else
{return f.cljs$lang$applyTo(arglist__7949);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7949));
}
};
var G__7952 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7952__delegate.call(this, f, a, b, c, d, args);
};
G__7952.cljs$lang$maxFixedArity = 5;
G__7952.cljs$lang$applyTo = (function (arglist__7953){
var f = cljs.core.first(arglist__7953);
var a = cljs.core.first(cljs.core.next(arglist__7953));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7953)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7953))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7953)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7953)))));
return G__7952__delegate(f, a, b, c, d, args);
});
G__7952.cljs$lang$arity$variadic = G__7952__delegate;
return G__7952;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7954){
var obj = cljs.core.first(arglist__7954);
var f = cljs.core.first(cljs.core.next(arglist__7954));
var args = cljs.core.rest(cljs.core.next(arglist__7954));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7955__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7955 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7955__delegate.call(this, x, y, more);
};
G__7955.cljs$lang$maxFixedArity = 2;
G__7955.cljs$lang$applyTo = (function (arglist__7956){
var x = cljs.core.first(arglist__7956);
var y = cljs.core.first(cljs.core.next(arglist__7956));
var more = cljs.core.rest(cljs.core.next(arglist__7956));
return G__7955__delegate(x, y, more);
});
G__7955.cljs$lang$arity$variadic = G__7955__delegate;
return G__7955;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7957 = pred;
var G__7958 = cljs.core.next.call(null,coll);
pred = G__7957;
coll = G__7958;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7960 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7960))
{return or__3824__auto____7960;
} else
{{
var G__7961 = pred;
var G__7962 = cljs.core.next.call(null,coll);
pred = G__7961;
coll = G__7962;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7963 = null;
var G__7963__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7963__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7963__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7963__3 = (function() { 
var G__7964__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7964 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7964__delegate.call(this, x, y, zs);
};
G__7964.cljs$lang$maxFixedArity = 2;
G__7964.cljs$lang$applyTo = (function (arglist__7965){
var x = cljs.core.first(arglist__7965);
var y = cljs.core.first(cljs.core.next(arglist__7965));
var zs = cljs.core.rest(cljs.core.next(arglist__7965));
return G__7964__delegate(x, y, zs);
});
G__7964.cljs$lang$arity$variadic = G__7964__delegate;
return G__7964;
})()
;
G__7963 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7963__0.call(this);
case 1:
return G__7963__1.call(this,x);
case 2:
return G__7963__2.call(this,x,y);
default:
return G__7963__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7963.cljs$lang$maxFixedArity = 2;
G__7963.cljs$lang$applyTo = G__7963__3.cljs$lang$applyTo;
return G__7963;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7966__delegate = function (args){
return x;
};
var G__7966 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7966__delegate.call(this, args);
};
G__7966.cljs$lang$maxFixedArity = 0;
G__7966.cljs$lang$applyTo = (function (arglist__7967){
var args = cljs.core.seq(arglist__7967);;
return G__7966__delegate(args);
});
G__7966.cljs$lang$arity$variadic = G__7966__delegate;
return G__7966;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7974 = null;
var G__7974__0 = (function (){
return f.call(null,g.call(null));
});
var G__7974__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7974__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7974__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7974__4 = (function() { 
var G__7975__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7975 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7975__delegate.call(this, x, y, z, args);
};
G__7975.cljs$lang$maxFixedArity = 3;
G__7975.cljs$lang$applyTo = (function (arglist__7976){
var x = cljs.core.first(arglist__7976);
var y = cljs.core.first(cljs.core.next(arglist__7976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7976)));
return G__7975__delegate(x, y, z, args);
});
G__7975.cljs$lang$arity$variadic = G__7975__delegate;
return G__7975;
})()
;
G__7974 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7974__0.call(this);
case 1:
return G__7974__1.call(this,x);
case 2:
return G__7974__2.call(this,x,y);
case 3:
return G__7974__3.call(this,x,y,z);
default:
return G__7974__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7974.cljs$lang$maxFixedArity = 3;
G__7974.cljs$lang$applyTo = G__7974__4.cljs$lang$applyTo;
return G__7974;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7977 = null;
var G__7977__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7977__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7977__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7977__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7977__4 = (function() { 
var G__7978__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7978__delegate.call(this, x, y, z, args);
};
G__7978.cljs$lang$maxFixedArity = 3;
G__7978.cljs$lang$applyTo = (function (arglist__7979){
var x = cljs.core.first(arglist__7979);
var y = cljs.core.first(cljs.core.next(arglist__7979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7979)));
return G__7978__delegate(x, y, z, args);
});
G__7978.cljs$lang$arity$variadic = G__7978__delegate;
return G__7978;
})()
;
G__7977 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7977__0.call(this);
case 1:
return G__7977__1.call(this,x);
case 2:
return G__7977__2.call(this,x,y);
case 3:
return G__7977__3.call(this,x,y,z);
default:
return G__7977__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7977.cljs$lang$maxFixedArity = 3;
G__7977.cljs$lang$applyTo = G__7977__4.cljs$lang$applyTo;
return G__7977;
})()
});
var comp__4 = (function() { 
var G__7980__delegate = function (f1,f2,f3,fs){
var fs__7971 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7981__delegate = function (args){
var ret__7972 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7971),args);
var fs__7973 = cljs.core.next.call(null,fs__7971);
while(true){
if(fs__7973)
{{
var G__7982 = cljs.core.first.call(null,fs__7973).call(null,ret__7972);
var G__7983 = cljs.core.next.call(null,fs__7973);
ret__7972 = G__7982;
fs__7973 = G__7983;
continue;
}
} else
{return ret__7972;
}
break;
}
};
var G__7981 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7981__delegate.call(this, args);
};
G__7981.cljs$lang$maxFixedArity = 0;
G__7981.cljs$lang$applyTo = (function (arglist__7984){
var args = cljs.core.seq(arglist__7984);;
return G__7981__delegate(args);
});
G__7981.cljs$lang$arity$variadic = G__7981__delegate;
return G__7981;
})()
;
};
var G__7980 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7980__delegate.call(this, f1, f2, f3, fs);
};
G__7980.cljs$lang$maxFixedArity = 3;
G__7980.cljs$lang$applyTo = (function (arglist__7985){
var f1 = cljs.core.first(arglist__7985);
var f2 = cljs.core.first(cljs.core.next(arglist__7985));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7985)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7985)));
return G__7980__delegate(f1, f2, f3, fs);
});
G__7980.cljs$lang$arity$variadic = G__7980__delegate;
return G__7980;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7986__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7986 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7986__delegate.call(this, args);
};
G__7986.cljs$lang$maxFixedArity = 0;
G__7986.cljs$lang$applyTo = (function (arglist__7987){
var args = cljs.core.seq(arglist__7987);;
return G__7986__delegate(args);
});
G__7986.cljs$lang$arity$variadic = G__7986__delegate;
return G__7986;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7988__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7988__delegate.call(this, args);
};
G__7988.cljs$lang$maxFixedArity = 0;
G__7988.cljs$lang$applyTo = (function (arglist__7989){
var args = cljs.core.seq(arglist__7989);;
return G__7988__delegate(args);
});
G__7988.cljs$lang$arity$variadic = G__7988__delegate;
return G__7988;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7990__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7990__delegate.call(this, args);
};
G__7990.cljs$lang$maxFixedArity = 0;
G__7990.cljs$lang$applyTo = (function (arglist__7991){
var args = cljs.core.seq(arglist__7991);;
return G__7990__delegate(args);
});
G__7990.cljs$lang$arity$variadic = G__7990__delegate;
return G__7990;
})()
;
});
var partial__5 = (function() { 
var G__7992__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7993__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7993 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7993__delegate.call(this, args);
};
G__7993.cljs$lang$maxFixedArity = 0;
G__7993.cljs$lang$applyTo = (function (arglist__7994){
var args = cljs.core.seq(arglist__7994);;
return G__7993__delegate(args);
});
G__7993.cljs$lang$arity$variadic = G__7993__delegate;
return G__7993;
})()
;
};
var G__7992 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7992__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7992.cljs$lang$maxFixedArity = 4;
G__7992.cljs$lang$applyTo = (function (arglist__7995){
var f = cljs.core.first(arglist__7995);
var arg1 = cljs.core.first(cljs.core.next(arglist__7995));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7995)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7995))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7995))));
return G__7992__delegate(f, arg1, arg2, arg3, more);
});
G__7992.cljs$lang$arity$variadic = G__7992__delegate;
return G__7992;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7996 = null;
var G__7996__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7996__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7996__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7996__4 = (function() { 
var G__7997__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7997 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7997__delegate.call(this, a, b, c, ds);
};
G__7997.cljs$lang$maxFixedArity = 3;
G__7997.cljs$lang$applyTo = (function (arglist__7998){
var a = cljs.core.first(arglist__7998);
var b = cljs.core.first(cljs.core.next(arglist__7998));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7998)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7998)));
return G__7997__delegate(a, b, c, ds);
});
G__7997.cljs$lang$arity$variadic = G__7997__delegate;
return G__7997;
})()
;
G__7996 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7996__1.call(this,a);
case 2:
return G__7996__2.call(this,a,b);
case 3:
return G__7996__3.call(this,a,b,c);
default:
return G__7996__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7996.cljs$lang$maxFixedArity = 3;
G__7996.cljs$lang$applyTo = G__7996__4.cljs$lang$applyTo;
return G__7996;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7999 = null;
var G__7999__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7999__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7999__4 = (function() { 
var G__8000__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8000 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8000__delegate.call(this, a, b, c, ds);
};
G__8000.cljs$lang$maxFixedArity = 3;
G__8000.cljs$lang$applyTo = (function (arglist__8001){
var a = cljs.core.first(arglist__8001);
var b = cljs.core.first(cljs.core.next(arglist__8001));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8001)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8001)));
return G__8000__delegate(a, b, c, ds);
});
G__8000.cljs$lang$arity$variadic = G__8000__delegate;
return G__8000;
})()
;
G__7999 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7999__2.call(this,a,b);
case 3:
return G__7999__3.call(this,a,b,c);
default:
return G__7999__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7999.cljs$lang$maxFixedArity = 3;
G__7999.cljs$lang$applyTo = G__7999__4.cljs$lang$applyTo;
return G__7999;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8002 = null;
var G__8002__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8002__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8002__4 = (function() { 
var G__8003__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8003 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8003__delegate.call(this, a, b, c, ds);
};
G__8003.cljs$lang$maxFixedArity = 3;
G__8003.cljs$lang$applyTo = (function (arglist__8004){
var a = cljs.core.first(arglist__8004);
var b = cljs.core.first(cljs.core.next(arglist__8004));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8004)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8004)));
return G__8003__delegate(a, b, c, ds);
});
G__8003.cljs$lang$arity$variadic = G__8003__delegate;
return G__8003;
})()
;
G__8002 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8002__2.call(this,a,b);
case 3:
return G__8002__3.call(this,a,b,c);
default:
return G__8002__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8002.cljs$lang$maxFixedArity = 3;
G__8002.cljs$lang$applyTo = G__8002__4.cljs$lang$applyTo;
return G__8002;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8020 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8028 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8028)
{var s__8029 = temp__3974__auto____8028;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8029))
{var c__8030 = cljs.core.chunk_first.call(null,s__8029);
var size__8031 = cljs.core.count.call(null,c__8030);
var b__8032 = cljs.core.chunk_buffer.call(null,size__8031);
var n__2555__auto____8033 = size__8031;
var i__8034 = 0;
while(true){
if((i__8034 < n__2555__auto____8033))
{cljs.core.chunk_append.call(null,b__8032,f.call(null,(idx + i__8034),cljs.core._nth.call(null,c__8030,i__8034)));
{
var G__8035 = (i__8034 + 1);
i__8034 = G__8035;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8032),mapi.call(null,(idx + size__8031),cljs.core.chunk_rest.call(null,s__8029)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8029)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8029)));
}
} else
{return null;
}
}),null));
});
return mapi__8020.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8045 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8045)
{var s__8046 = temp__3974__auto____8045;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8046))
{var c__8047 = cljs.core.chunk_first.call(null,s__8046);
var size__8048 = cljs.core.count.call(null,c__8047);
var b__8049 = cljs.core.chunk_buffer.call(null,size__8048);
var n__2555__auto____8050 = size__8048;
var i__8051 = 0;
while(true){
if((i__8051 < n__2555__auto____8050))
{var x__8052 = f.call(null,cljs.core._nth.call(null,c__8047,i__8051));
if((x__8052 == null))
{} else
{cljs.core.chunk_append.call(null,b__8049,x__8052);
}
{
var G__8054 = (i__8051 + 1);
i__8051 = G__8054;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8049),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8046)));
} else
{var x__8053 = f.call(null,cljs.core.first.call(null,s__8046));
if((x__8053 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8046));
} else
{return cljs.core.cons.call(null,x__8053,keep.call(null,f,cljs.core.rest.call(null,s__8046)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8080 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8090 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8090)
{var s__8091 = temp__3974__auto____8090;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8091))
{var c__8092 = cljs.core.chunk_first.call(null,s__8091);
var size__8093 = cljs.core.count.call(null,c__8092);
var b__8094 = cljs.core.chunk_buffer.call(null,size__8093);
var n__2555__auto____8095 = size__8093;
var i__8096 = 0;
while(true){
if((i__8096 < n__2555__auto____8095))
{var x__8097 = f.call(null,(idx + i__8096),cljs.core._nth.call(null,c__8092,i__8096));
if((x__8097 == null))
{} else
{cljs.core.chunk_append.call(null,b__8094,x__8097);
}
{
var G__8099 = (i__8096 + 1);
i__8096 = G__8099;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8094),keepi.call(null,(idx + size__8093),cljs.core.chunk_rest.call(null,s__8091)));
} else
{var x__8098 = f.call(null,idx,cljs.core.first.call(null,s__8091));
if((x__8098 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8091));
} else
{return cljs.core.cons.call(null,x__8098,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8091)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8080.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8185 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8185))
{return p.call(null,y);
} else
{return and__3822__auto____8185;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8186 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8186))
{var and__3822__auto____8187 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8187))
{return p.call(null,z);
} else
{return and__3822__auto____8187;
}
} else
{return and__3822__auto____8186;
}
})());
});
var ep1__4 = (function() { 
var G__8256__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8188 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8188))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8188;
}
})());
};
var G__8256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8256__delegate.call(this, x, y, z, args);
};
G__8256.cljs$lang$maxFixedArity = 3;
G__8256.cljs$lang$applyTo = (function (arglist__8257){
var x = cljs.core.first(arglist__8257);
var y = cljs.core.first(cljs.core.next(arglist__8257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8257)));
return G__8256__delegate(x, y, z, args);
});
G__8256.cljs$lang$arity$variadic = G__8256__delegate;
return G__8256;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8200 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8200))
{return p2.call(null,x);
} else
{return and__3822__auto____8200;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8201 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8201))
{var and__3822__auto____8202 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8202))
{var and__3822__auto____8203 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8203))
{return p2.call(null,y);
} else
{return and__3822__auto____8203;
}
} else
{return and__3822__auto____8202;
}
} else
{return and__3822__auto____8201;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8204 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8204))
{var and__3822__auto____8205 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8205))
{var and__3822__auto____8206 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8206))
{var and__3822__auto____8207 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8207))
{var and__3822__auto____8208 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8208))
{return p2.call(null,z);
} else
{return and__3822__auto____8208;
}
} else
{return and__3822__auto____8207;
}
} else
{return and__3822__auto____8206;
}
} else
{return and__3822__auto____8205;
}
} else
{return and__3822__auto____8204;
}
})());
});
var ep2__4 = (function() { 
var G__8258__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8209 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8209))
{return cljs.core.every_QMARK_.call(null,(function (p1__8055_SHARP_){
var and__3822__auto____8210 = p1.call(null,p1__8055_SHARP_);
if(cljs.core.truth_(and__3822__auto____8210))
{return p2.call(null,p1__8055_SHARP_);
} else
{return and__3822__auto____8210;
}
}),args);
} else
{return and__3822__auto____8209;
}
})());
};
var G__8258 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8258__delegate.call(this, x, y, z, args);
};
G__8258.cljs$lang$maxFixedArity = 3;
G__8258.cljs$lang$applyTo = (function (arglist__8259){
var x = cljs.core.first(arglist__8259);
var y = cljs.core.first(cljs.core.next(arglist__8259));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8259)));
return G__8258__delegate(x, y, z, args);
});
G__8258.cljs$lang$arity$variadic = G__8258__delegate;
return G__8258;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8229 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8229))
{var and__3822__auto____8230 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8230))
{return p3.call(null,x);
} else
{return and__3822__auto____8230;
}
} else
{return and__3822__auto____8229;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8231 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8231))
{var and__3822__auto____8232 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8232))
{var and__3822__auto____8233 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8233))
{var and__3822__auto____8234 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8234))
{var and__3822__auto____8235 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8235))
{return p3.call(null,y);
} else
{return and__3822__auto____8235;
}
} else
{return and__3822__auto____8234;
}
} else
{return and__3822__auto____8233;
}
} else
{return and__3822__auto____8232;
}
} else
{return and__3822__auto____8231;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8236 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8236))
{var and__3822__auto____8237 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8237))
{var and__3822__auto____8238 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8238))
{var and__3822__auto____8239 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8239))
{var and__3822__auto____8240 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8240))
{var and__3822__auto____8241 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8241))
{var and__3822__auto____8242 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8242))
{var and__3822__auto____8243 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8243))
{return p3.call(null,z);
} else
{return and__3822__auto____8243;
}
} else
{return and__3822__auto____8242;
}
} else
{return and__3822__auto____8241;
}
} else
{return and__3822__auto____8240;
}
} else
{return and__3822__auto____8239;
}
} else
{return and__3822__auto____8238;
}
} else
{return and__3822__auto____8237;
}
} else
{return and__3822__auto____8236;
}
})());
});
var ep3__4 = (function() { 
var G__8260__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8244 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8244))
{return cljs.core.every_QMARK_.call(null,(function (p1__8056_SHARP_){
var and__3822__auto____8245 = p1.call(null,p1__8056_SHARP_);
if(cljs.core.truth_(and__3822__auto____8245))
{var and__3822__auto____8246 = p2.call(null,p1__8056_SHARP_);
if(cljs.core.truth_(and__3822__auto____8246))
{return p3.call(null,p1__8056_SHARP_);
} else
{return and__3822__auto____8246;
}
} else
{return and__3822__auto____8245;
}
}),args);
} else
{return and__3822__auto____8244;
}
})());
};
var G__8260 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8260__delegate.call(this, x, y, z, args);
};
G__8260.cljs$lang$maxFixedArity = 3;
G__8260.cljs$lang$applyTo = (function (arglist__8261){
var x = cljs.core.first(arglist__8261);
var y = cljs.core.first(cljs.core.next(arglist__8261));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8261)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8261)));
return G__8260__delegate(x, y, z, args);
});
G__8260.cljs$lang$arity$variadic = G__8260__delegate;
return G__8260;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8262__delegate = function (p1,p2,p3,ps){
var ps__8247 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8057_SHARP_){
return p1__8057_SHARP_.call(null,x);
}),ps__8247);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8058_SHARP_){
var and__3822__auto____8252 = p1__8058_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8252))
{return p1__8058_SHARP_.call(null,y);
} else
{return and__3822__auto____8252;
}
}),ps__8247);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8059_SHARP_){
var and__3822__auto____8253 = p1__8059_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8253))
{var and__3822__auto____8254 = p1__8059_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8254))
{return p1__8059_SHARP_.call(null,z);
} else
{return and__3822__auto____8254;
}
} else
{return and__3822__auto____8253;
}
}),ps__8247);
});
var epn__4 = (function() { 
var G__8263__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8255 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8255))
{return cljs.core.every_QMARK_.call(null,(function (p1__8060_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8060_SHARP_,args);
}),ps__8247);
} else
{return and__3822__auto____8255;
}
})());
};
var G__8263 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8263__delegate.call(this, x, y, z, args);
};
G__8263.cljs$lang$maxFixedArity = 3;
G__8263.cljs$lang$applyTo = (function (arglist__8264){
var x = cljs.core.first(arglist__8264);
var y = cljs.core.first(cljs.core.next(arglist__8264));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8264)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8264)));
return G__8263__delegate(x, y, z, args);
});
G__8263.cljs$lang$arity$variadic = G__8263__delegate;
return G__8263;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8262 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8262__delegate.call(this, p1, p2, p3, ps);
};
G__8262.cljs$lang$maxFixedArity = 3;
G__8262.cljs$lang$applyTo = (function (arglist__8265){
var p1 = cljs.core.first(arglist__8265);
var p2 = cljs.core.first(cljs.core.next(arglist__8265));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8265)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8265)));
return G__8262__delegate(p1, p2, p3, ps);
});
G__8262.cljs$lang$arity$variadic = G__8262__delegate;
return G__8262;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8346 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8346))
{return or__3824__auto____8346;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8347 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8347))
{return or__3824__auto____8347;
} else
{var or__3824__auto____8348 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8348))
{return or__3824__auto____8348;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8417__delegate = function (x,y,z,args){
var or__3824__auto____8349 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8349))
{return or__3824__auto____8349;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8417 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8417__delegate.call(this, x, y, z, args);
};
G__8417.cljs$lang$maxFixedArity = 3;
G__8417.cljs$lang$applyTo = (function (arglist__8418){
var x = cljs.core.first(arglist__8418);
var y = cljs.core.first(cljs.core.next(arglist__8418));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8418)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8418)));
return G__8417__delegate(x, y, z, args);
});
G__8417.cljs$lang$arity$variadic = G__8417__delegate;
return G__8417;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8361 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8361))
{return or__3824__auto____8361;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8362 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8362))
{return or__3824__auto____8362;
} else
{var or__3824__auto____8363 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8363))
{return or__3824__auto____8363;
} else
{var or__3824__auto____8364 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8364))
{return or__3824__auto____8364;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8365 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8365))
{return or__3824__auto____8365;
} else
{var or__3824__auto____8366 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8366))
{return or__3824__auto____8366;
} else
{var or__3824__auto____8367 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8367))
{return or__3824__auto____8367;
} else
{var or__3824__auto____8368 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8368))
{return or__3824__auto____8368;
} else
{var or__3824__auto____8369 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8369))
{return or__3824__auto____8369;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8419__delegate = function (x,y,z,args){
var or__3824__auto____8370 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8370))
{return or__3824__auto____8370;
} else
{return cljs.core.some.call(null,(function (p1__8100_SHARP_){
var or__3824__auto____8371 = p1.call(null,p1__8100_SHARP_);
if(cljs.core.truth_(or__3824__auto____8371))
{return or__3824__auto____8371;
} else
{return p2.call(null,p1__8100_SHARP_);
}
}),args);
}
};
var G__8419 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8419__delegate.call(this, x, y, z, args);
};
G__8419.cljs$lang$maxFixedArity = 3;
G__8419.cljs$lang$applyTo = (function (arglist__8420){
var x = cljs.core.first(arglist__8420);
var y = cljs.core.first(cljs.core.next(arglist__8420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8420)));
return G__8419__delegate(x, y, z, args);
});
G__8419.cljs$lang$arity$variadic = G__8419__delegate;
return G__8419;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8390 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8390))
{return or__3824__auto____8390;
} else
{var or__3824__auto____8391 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8391))
{return or__3824__auto____8391;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8392 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8392))
{return or__3824__auto____8392;
} else
{var or__3824__auto____8393 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8393))
{return or__3824__auto____8393;
} else
{var or__3824__auto____8394 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8394))
{return or__3824__auto____8394;
} else
{var or__3824__auto____8395 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8395))
{return or__3824__auto____8395;
} else
{var or__3824__auto____8396 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8396))
{return or__3824__auto____8396;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8397 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8397))
{return or__3824__auto____8397;
} else
{var or__3824__auto____8398 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8398))
{return or__3824__auto____8398;
} else
{var or__3824__auto____8399 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8399))
{return or__3824__auto____8399;
} else
{var or__3824__auto____8400 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8400))
{return or__3824__auto____8400;
} else
{var or__3824__auto____8401 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8401))
{return or__3824__auto____8401;
} else
{var or__3824__auto____8402 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8402))
{return or__3824__auto____8402;
} else
{var or__3824__auto____8403 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8403))
{return or__3824__auto____8403;
} else
{var or__3824__auto____8404 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8404))
{return or__3824__auto____8404;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8421__delegate = function (x,y,z,args){
var or__3824__auto____8405 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8405))
{return or__3824__auto____8405;
} else
{return cljs.core.some.call(null,(function (p1__8101_SHARP_){
var or__3824__auto____8406 = p1.call(null,p1__8101_SHARP_);
if(cljs.core.truth_(or__3824__auto____8406))
{return or__3824__auto____8406;
} else
{var or__3824__auto____8407 = p2.call(null,p1__8101_SHARP_);
if(cljs.core.truth_(or__3824__auto____8407))
{return or__3824__auto____8407;
} else
{return p3.call(null,p1__8101_SHARP_);
}
}
}),args);
}
};
var G__8421 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8421__delegate.call(this, x, y, z, args);
};
G__8421.cljs$lang$maxFixedArity = 3;
G__8421.cljs$lang$applyTo = (function (arglist__8422){
var x = cljs.core.first(arglist__8422);
var y = cljs.core.first(cljs.core.next(arglist__8422));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8422)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8422)));
return G__8421__delegate(x, y, z, args);
});
G__8421.cljs$lang$arity$variadic = G__8421__delegate;
return G__8421;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8423__delegate = function (p1,p2,p3,ps){
var ps__8408 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8102_SHARP_){
return p1__8102_SHARP_.call(null,x);
}),ps__8408);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8103_SHARP_){
var or__3824__auto____8413 = p1__8103_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8413))
{return or__3824__auto____8413;
} else
{return p1__8103_SHARP_.call(null,y);
}
}),ps__8408);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8104_SHARP_){
var or__3824__auto____8414 = p1__8104_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8414))
{return or__3824__auto____8414;
} else
{var or__3824__auto____8415 = p1__8104_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8415))
{return or__3824__auto____8415;
} else
{return p1__8104_SHARP_.call(null,z);
}
}
}),ps__8408);
});
var spn__4 = (function() { 
var G__8424__delegate = function (x,y,z,args){
var or__3824__auto____8416 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8416))
{return or__3824__auto____8416;
} else
{return cljs.core.some.call(null,(function (p1__8105_SHARP_){
return cljs.core.some.call(null,p1__8105_SHARP_,args);
}),ps__8408);
}
};
var G__8424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8424__delegate.call(this, x, y, z, args);
};
G__8424.cljs$lang$maxFixedArity = 3;
G__8424.cljs$lang$applyTo = (function (arglist__8425){
var x = cljs.core.first(arglist__8425);
var y = cljs.core.first(cljs.core.next(arglist__8425));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8425)));
return G__8424__delegate(x, y, z, args);
});
G__8424.cljs$lang$arity$variadic = G__8424__delegate;
return G__8424;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8423 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8423__delegate.call(this, p1, p2, p3, ps);
};
G__8423.cljs$lang$maxFixedArity = 3;
G__8423.cljs$lang$applyTo = (function (arglist__8426){
var p1 = cljs.core.first(arglist__8426);
var p2 = cljs.core.first(cljs.core.next(arglist__8426));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8426)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8426)));
return G__8423__delegate(p1, p2, p3, ps);
});
G__8423.cljs$lang$arity$variadic = G__8423__delegate;
return G__8423;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8445 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8445)
{var s__8446 = temp__3974__auto____8445;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8446))
{var c__8447 = cljs.core.chunk_first.call(null,s__8446);
var size__8448 = cljs.core.count.call(null,c__8447);
var b__8449 = cljs.core.chunk_buffer.call(null,size__8448);
var n__2555__auto____8450 = size__8448;
var i__8451 = 0;
while(true){
if((i__8451 < n__2555__auto____8450))
{cljs.core.chunk_append.call(null,b__8449,f.call(null,cljs.core._nth.call(null,c__8447,i__8451)));
{
var G__8463 = (i__8451 + 1);
i__8451 = G__8463;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8449),map.call(null,f,cljs.core.chunk_rest.call(null,s__8446)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8446)),map.call(null,f,cljs.core.rest.call(null,s__8446)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8452 = cljs.core.seq.call(null,c1);
var s2__8453 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8454 = s1__8452;
if(and__3822__auto____8454)
{return s2__8453;
} else
{return and__3822__auto____8454;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8452),cljs.core.first.call(null,s2__8453)),map.call(null,f,cljs.core.rest.call(null,s1__8452),cljs.core.rest.call(null,s2__8453)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8455 = cljs.core.seq.call(null,c1);
var s2__8456 = cljs.core.seq.call(null,c2);
var s3__8457 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8458 = s1__8455;
if(and__3822__auto____8458)
{var and__3822__auto____8459 = s2__8456;
if(and__3822__auto____8459)
{return s3__8457;
} else
{return and__3822__auto____8459;
}
} else
{return and__3822__auto____8458;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8455),cljs.core.first.call(null,s2__8456),cljs.core.first.call(null,s3__8457)),map.call(null,f,cljs.core.rest.call(null,s1__8455),cljs.core.rest.call(null,s2__8456),cljs.core.rest.call(null,s3__8457)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8464__delegate = function (f,c1,c2,c3,colls){
var step__8462 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8461 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8461))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8461),step.call(null,map.call(null,cljs.core.rest,ss__8461)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8266_SHARP_){
return cljs.core.apply.call(null,f,p1__8266_SHARP_);
}),step__8462.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8464 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8464__delegate.call(this, f, c1, c2, c3, colls);
};
G__8464.cljs$lang$maxFixedArity = 4;
G__8464.cljs$lang$applyTo = (function (arglist__8465){
var f = cljs.core.first(arglist__8465);
var c1 = cljs.core.first(cljs.core.next(arglist__8465));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8465)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8465))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8465))));
return G__8464__delegate(f, c1, c2, c3, colls);
});
G__8464.cljs$lang$arity$variadic = G__8464__delegate;
return G__8464;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8468 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8468)
{var s__8469 = temp__3974__auto____8468;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8469),take.call(null,(n - 1),cljs.core.rest.call(null,s__8469)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8475 = (function (n,coll){
while(true){
var s__8473 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8474 = (n > 0);
if(and__3822__auto____8474)
{return s__8473;
} else
{return and__3822__auto____8474;
}
})()))
{{
var G__8476 = (n - 1);
var G__8477 = cljs.core.rest.call(null,s__8473);
n = G__8476;
coll = G__8477;
continue;
}
} else
{return s__8473;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8475.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8480 = cljs.core.seq.call(null,coll);
var lead__8481 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8481)
{{
var G__8482 = cljs.core.next.call(null,s__8480);
var G__8483 = cljs.core.next.call(null,lead__8481);
s__8480 = G__8482;
lead__8481 = G__8483;
continue;
}
} else
{return s__8480;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8489 = (function (pred,coll){
while(true){
var s__8487 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8488 = s__8487;
if(and__3822__auto____8488)
{return pred.call(null,cljs.core.first.call(null,s__8487));
} else
{return and__3822__auto____8488;
}
})()))
{{
var G__8490 = pred;
var G__8491 = cljs.core.rest.call(null,s__8487);
pred = G__8490;
coll = G__8491;
continue;
}
} else
{return s__8487;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8489.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8494 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8494)
{var s__8495 = temp__3974__auto____8494;
return cljs.core.concat.call(null,s__8495,cycle.call(null,s__8495));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8500 = cljs.core.seq.call(null,c1);
var s2__8501 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8502 = s1__8500;
if(and__3822__auto____8502)
{return s2__8501;
} else
{return and__3822__auto____8502;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8500),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8501),interleave.call(null,cljs.core.rest.call(null,s1__8500),cljs.core.rest.call(null,s2__8501))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8504__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8503 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8503))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8503),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8503)));
} else
{return null;
}
}),null));
};
var G__8504 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8504__delegate.call(this, c1, c2, colls);
};
G__8504.cljs$lang$maxFixedArity = 2;
G__8504.cljs$lang$applyTo = (function (arglist__8505){
var c1 = cljs.core.first(arglist__8505);
var c2 = cljs.core.first(cljs.core.next(arglist__8505));
var colls = cljs.core.rest(cljs.core.next(arglist__8505));
return G__8504__delegate(c1, c2, colls);
});
G__8504.cljs$lang$arity$variadic = G__8504__delegate;
return G__8504;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8515 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8513 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8513)
{var coll__8514 = temp__3971__auto____8513;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8514),cat.call(null,cljs.core.rest.call(null,coll__8514),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8515.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8516__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8516 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8516__delegate.call(this, f, coll, colls);
};
G__8516.cljs$lang$maxFixedArity = 2;
G__8516.cljs$lang$applyTo = (function (arglist__8517){
var f = cljs.core.first(arglist__8517);
var coll = cljs.core.first(cljs.core.next(arglist__8517));
var colls = cljs.core.rest(cljs.core.next(arglist__8517));
return G__8516__delegate(f, coll, colls);
});
G__8516.cljs$lang$arity$variadic = G__8516__delegate;
return G__8516;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8527 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8527)
{var s__8528 = temp__3974__auto____8527;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8528))
{var c__8529 = cljs.core.chunk_first.call(null,s__8528);
var size__8530 = cljs.core.count.call(null,c__8529);
var b__8531 = cljs.core.chunk_buffer.call(null,size__8530);
var n__2555__auto____8532 = size__8530;
var i__8533 = 0;
while(true){
if((i__8533 < n__2555__auto____8532))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8529,i__8533))))
{cljs.core.chunk_append.call(null,b__8531,cljs.core._nth.call(null,c__8529,i__8533));
} else
{}
{
var G__8536 = (i__8533 + 1);
i__8533 = G__8536;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8531),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8528)));
} else
{var f__8534 = cljs.core.first.call(null,s__8528);
var r__8535 = cljs.core.rest.call(null,s__8528);
if(cljs.core.truth_(pred.call(null,f__8534)))
{return cljs.core.cons.call(null,f__8534,filter.call(null,pred,r__8535));
} else
{return filter.call(null,pred,r__8535);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8539 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8539.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8537_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8537_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8543__8544 = to;
if(G__8543__8544)
{if((function (){var or__3824__auto____8545 = (G__8543__8544.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8545)
{return or__3824__auto____8545;
} else
{return G__8543__8544.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8543__8544.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8543__8544);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8543__8544);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8546__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8546 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8546__delegate.call(this, f, c1, c2, c3, colls);
};
G__8546.cljs$lang$maxFixedArity = 4;
G__8546.cljs$lang$applyTo = (function (arglist__8547){
var f = cljs.core.first(arglist__8547);
var c1 = cljs.core.first(cljs.core.next(arglist__8547));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8547)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8547))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8547))));
return G__8546__delegate(f, c1, c2, c3, colls);
});
G__8546.cljs$lang$arity$variadic = G__8546__delegate;
return G__8546;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8554 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8554)
{var s__8555 = temp__3974__auto____8554;
var p__8556 = cljs.core.take.call(null,n,s__8555);
if((n === cljs.core.count.call(null,p__8556)))
{return cljs.core.cons.call(null,p__8556,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8555)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8557 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8557)
{var s__8558 = temp__3974__auto____8557;
var p__8559 = cljs.core.take.call(null,n,s__8558);
if((n === cljs.core.count.call(null,p__8559)))
{return cljs.core.cons.call(null,p__8559,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8558)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8559,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8564 = cljs.core.lookup_sentinel;
var m__8565 = m;
var ks__8566 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8566)
{var m__8567 = cljs.core._lookup.call(null,m__8565,cljs.core.first.call(null,ks__8566),sentinel__8564);
if((sentinel__8564 === m__8567))
{return not_found;
} else
{{
var G__8568 = sentinel__8564;
var G__8569 = m__8567;
var G__8570 = cljs.core.next.call(null,ks__8566);
sentinel__8564 = G__8568;
m__8565 = G__8569;
ks__8566 = G__8570;
continue;
}
}
} else
{return m__8565;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8571,v){
var vec__8576__8577 = p__8571;
var k__8578 = cljs.core.nth.call(null,vec__8576__8577,0,null);
var ks__8579 = cljs.core.nthnext.call(null,vec__8576__8577,1);
if(cljs.core.truth_(ks__8579))
{return cljs.core.assoc.call(null,m,k__8578,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8578,null),ks__8579,v));
} else
{return cljs.core.assoc.call(null,m,k__8578,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8580,f,args){
var vec__8585__8586 = p__8580;
var k__8587 = cljs.core.nth.call(null,vec__8585__8586,0,null);
var ks__8588 = cljs.core.nthnext.call(null,vec__8585__8586,1);
if(cljs.core.truth_(ks__8588))
{return cljs.core.assoc.call(null,m,k__8587,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8587,null),ks__8588,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8587,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8587,null),args));
}
};
var update_in = function (m,p__8580,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8580, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8589){
var m = cljs.core.first(arglist__8589);
var p__8580 = cljs.core.first(cljs.core.next(arglist__8589));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8589)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8589)));
return update_in__delegate(m, p__8580, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8592 = this;
var h__2220__auto____8593 = this__8592.__hash;
if(!((h__2220__auto____8593 == null)))
{return h__2220__auto____8593;
} else
{var h__2220__auto____8594 = cljs.core.hash_coll.call(null,coll);
this__8592.__hash = h__2220__auto____8594;
return h__2220__auto____8594;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8595 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8596 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8597 = this;
var new_array__8598 = this__8597.array.slice();
(new_array__8598[k] = v);
return (new cljs.core.Vector(this__8597.meta,new_array__8598,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8629 = null;
var G__8629__2 = (function (this_sym8599,k){
var this__8601 = this;
var this_sym8599__8602 = this;
var coll__8603 = this_sym8599__8602;
return coll__8603.cljs$core$ILookup$_lookup$arity$2(coll__8603,k);
});
var G__8629__3 = (function (this_sym8600,k,not_found){
var this__8601 = this;
var this_sym8600__8604 = this;
var coll__8605 = this_sym8600__8604;
return coll__8605.cljs$core$ILookup$_lookup$arity$3(coll__8605,k,not_found);
});
G__8629 = function(this_sym8600,k,not_found){
switch(arguments.length){
case 2:
return G__8629__2.call(this,this_sym8600,k);
case 3:
return G__8629__3.call(this,this_sym8600,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8629;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8590,args8591){
var this__8606 = this;
return this_sym8590.call.apply(this_sym8590,[this_sym8590].concat(args8591.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8607 = this;
var new_array__8608 = this__8607.array.slice();
new_array__8608.push(o);
return (new cljs.core.Vector(this__8607.meta,new_array__8608,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8609 = this;
var this__8610 = this;
return cljs.core.pr_str.call(null,this__8610);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8611 = this;
return cljs.core.ci_reduce.call(null,this__8611.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8612 = this;
return cljs.core.ci_reduce.call(null,this__8612.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8613 = this;
if((this__8613.array.length > 0))
{var vector_seq__8614 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8613.array.length))
{return cljs.core.cons.call(null,(this__8613.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8614.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8615 = this;
return this__8615.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8616 = this;
var count__8617 = this__8616.array.length;
if((count__8617 > 0))
{return (this__8616.array[(count__8617 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8618 = this;
if((this__8618.array.length > 0))
{var new_array__8619 = this__8618.array.slice();
new_array__8619.pop();
return (new cljs.core.Vector(this__8618.meta,new_array__8619,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8620 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8621 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8622 = this;
return (new cljs.core.Vector(meta,this__8622.array,this__8622.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8623 = this;
return this__8623.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8624 = this;
if((function (){var and__3822__auto____8625 = (0 <= n);
if(and__3822__auto____8625)
{return (n < this__8624.array.length);
} else
{return and__3822__auto____8625;
}
})())
{return (this__8624.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8626 = this;
if((function (){var and__3822__auto____8627 = (0 <= n);
if(and__3822__auto____8627)
{return (n < this__8626.array.length);
} else
{return and__3822__auto____8627;
}
})())
{return (this__8626.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8628 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8628.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2338__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8631 = pv.cnt;
if((cnt__8631 < 32))
{return 0;
} else
{return (((cnt__8631 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8637 = level;
var ret__8638 = node;
while(true){
if((ll__8637 === 0))
{return ret__8638;
} else
{var embed__8639 = ret__8638;
var r__8640 = cljs.core.pv_fresh_node.call(null,edit);
var ___8641 = cljs.core.pv_aset.call(null,r__8640,0,embed__8639);
{
var G__8642 = (ll__8637 - 5);
var G__8643 = r__8640;
ll__8637 = G__8642;
ret__8638 = G__8643;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8649 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8650 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8649,subidx__8650,tailnode);
return ret__8649;
} else
{var child__8651 = cljs.core.pv_aget.call(null,parent,subidx__8650);
if(!((child__8651 == null)))
{var node_to_insert__8652 = push_tail.call(null,pv,(level - 5),child__8651,tailnode);
cljs.core.pv_aset.call(null,ret__8649,subidx__8650,node_to_insert__8652);
return ret__8649;
} else
{var node_to_insert__8653 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8649,subidx__8650,node_to_insert__8653);
return ret__8649;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8657 = (0 <= i);
if(and__3822__auto____8657)
{return (i < pv.cnt);
} else
{return and__3822__auto____8657;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8658 = pv.root;
var level__8659 = pv.shift;
while(true){
if((level__8659 > 0))
{{
var G__8660 = cljs.core.pv_aget.call(null,node__8658,((i >>> level__8659) & 31));
var G__8661 = (level__8659 - 5);
node__8658 = G__8660;
level__8659 = G__8661;
continue;
}
} else
{return node__8658.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8664 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8664,(i & 31),val);
return ret__8664;
} else
{var subidx__8665 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8664,subidx__8665,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8665),i,val));
return ret__8664;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8671 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8672 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8671));
if((function (){var and__3822__auto____8673 = (new_child__8672 == null);
if(and__3822__auto____8673)
{return (subidx__8671 === 0);
} else
{return and__3822__auto____8673;
}
})())
{return null;
} else
{var ret__8674 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8674,subidx__8671,new_child__8672);
return ret__8674;
}
} else
{if((subidx__8671 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8675 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8675,subidx__8671,null);
return ret__8675;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8678 = this;
return (new cljs.core.TransientVector(this__8678.cnt,this__8678.shift,cljs.core.tv_editable_root.call(null,this__8678.root),cljs.core.tv_editable_tail.call(null,this__8678.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8679 = this;
var h__2220__auto____8680 = this__8679.__hash;
if(!((h__2220__auto____8680 == null)))
{return h__2220__auto____8680;
} else
{var h__2220__auto____8681 = cljs.core.hash_coll.call(null,coll);
this__8679.__hash = h__2220__auto____8681;
return h__2220__auto____8681;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8682 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8683 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8684 = this;
if((function (){var and__3822__auto____8685 = (0 <= k);
if(and__3822__auto____8685)
{return (k < this__8684.cnt);
} else
{return and__3822__auto____8685;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8686 = this__8684.tail.slice();
(new_tail__8686[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8684.meta,this__8684.cnt,this__8684.shift,this__8684.root,new_tail__8686,null));
} else
{return (new cljs.core.PersistentVector(this__8684.meta,this__8684.cnt,this__8684.shift,cljs.core.do_assoc.call(null,coll,this__8684.shift,this__8684.root,k,v),this__8684.tail,null));
}
} else
{if((k === this__8684.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8684.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8734 = null;
var G__8734__2 = (function (this_sym8687,k){
var this__8689 = this;
var this_sym8687__8690 = this;
var coll__8691 = this_sym8687__8690;
return coll__8691.cljs$core$ILookup$_lookup$arity$2(coll__8691,k);
});
var G__8734__3 = (function (this_sym8688,k,not_found){
var this__8689 = this;
var this_sym8688__8692 = this;
var coll__8693 = this_sym8688__8692;
return coll__8693.cljs$core$ILookup$_lookup$arity$3(coll__8693,k,not_found);
});
G__8734 = function(this_sym8688,k,not_found){
switch(arguments.length){
case 2:
return G__8734__2.call(this,this_sym8688,k);
case 3:
return G__8734__3.call(this,this_sym8688,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8734;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8676,args8677){
var this__8694 = this;
return this_sym8676.call.apply(this_sym8676,[this_sym8676].concat(args8677.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8695 = this;
var step_init__8696 = [0,init];
var i__8697 = 0;
while(true){
if((i__8697 < this__8695.cnt))
{var arr__8698 = cljs.core.array_for.call(null,v,i__8697);
var len__8699 = arr__8698.length;
var init__8703 = (function (){var j__8700 = 0;
var init__8701 = (step_init__8696[1]);
while(true){
if((j__8700 < len__8699))
{var init__8702 = f.call(null,init__8701,(j__8700 + i__8697),(arr__8698[j__8700]));
if(cljs.core.reduced_QMARK_.call(null,init__8702))
{return init__8702;
} else
{{
var G__8735 = (j__8700 + 1);
var G__8736 = init__8702;
j__8700 = G__8735;
init__8701 = G__8736;
continue;
}
}
} else
{(step_init__8696[0] = len__8699);
(step_init__8696[1] = init__8701);
return init__8701;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8703))
{return cljs.core.deref.call(null,init__8703);
} else
{{
var G__8737 = (i__8697 + (step_init__8696[0]));
i__8697 = G__8737;
continue;
}
}
} else
{return (step_init__8696[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8704 = this;
if(((this__8704.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8705 = this__8704.tail.slice();
new_tail__8705.push(o);
return (new cljs.core.PersistentVector(this__8704.meta,(this__8704.cnt + 1),this__8704.shift,this__8704.root,new_tail__8705,null));
} else
{var root_overflow_QMARK___8706 = ((this__8704.cnt >>> 5) > (1 << this__8704.shift));
var new_shift__8707 = ((root_overflow_QMARK___8706)?(this__8704.shift + 5):this__8704.shift);
var new_root__8709 = ((root_overflow_QMARK___8706)?(function (){var n_r__8708 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8708,0,this__8704.root);
cljs.core.pv_aset.call(null,n_r__8708,1,cljs.core.new_path.call(null,null,this__8704.shift,(new cljs.core.VectorNode(null,this__8704.tail))));
return n_r__8708;
})():cljs.core.push_tail.call(null,coll,this__8704.shift,this__8704.root,(new cljs.core.VectorNode(null,this__8704.tail))));
return (new cljs.core.PersistentVector(this__8704.meta,(this__8704.cnt + 1),new_shift__8707,new_root__8709,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8710 = this;
if((this__8710.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8710.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8711 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8712 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8713 = this;
var this__8714 = this;
return cljs.core.pr_str.call(null,this__8714);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8715 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8716 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8717 = this;
if((this__8717.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8718 = this;
return this__8718.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8719 = this;
if((this__8719.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8719.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8720 = this;
if((this__8720.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8720.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8720.meta);
} else
{if((1 < (this__8720.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8720.meta,(this__8720.cnt - 1),this__8720.shift,this__8720.root,this__8720.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8721 = cljs.core.array_for.call(null,coll,(this__8720.cnt - 2));
var nr__8722 = cljs.core.pop_tail.call(null,coll,this__8720.shift,this__8720.root);
var new_root__8723 = (((nr__8722 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8722);
var cnt_1__8724 = (this__8720.cnt - 1);
if((function (){var and__3822__auto____8725 = (5 < this__8720.shift);
if(and__3822__auto____8725)
{return (cljs.core.pv_aget.call(null,new_root__8723,1) == null);
} else
{return and__3822__auto____8725;
}
})())
{return (new cljs.core.PersistentVector(this__8720.meta,cnt_1__8724,(this__8720.shift - 5),cljs.core.pv_aget.call(null,new_root__8723,0),new_tail__8721,null));
} else
{return (new cljs.core.PersistentVector(this__8720.meta,cnt_1__8724,this__8720.shift,new_root__8723,new_tail__8721,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8726 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8727 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8728 = this;
return (new cljs.core.PersistentVector(meta,this__8728.cnt,this__8728.shift,this__8728.root,this__8728.tail,this__8728.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8729 = this;
return this__8729.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8730 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8731 = this;
if((function (){var and__3822__auto____8732 = (0 <= n);
if(and__3822__auto____8732)
{return (n < this__8731.cnt);
} else
{return and__3822__auto____8732;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8733 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8733.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8738 = xs.length;
var xs__8739 = (((no_clone === true))?xs:xs.slice());
if((l__8738 < 32))
{return (new cljs.core.PersistentVector(null,l__8738,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8739,null));
} else
{var node__8740 = xs__8739.slice(0,32);
var v__8741 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8740,null));
var i__8742 = 32;
var out__8743 = cljs.core._as_transient.call(null,v__8741);
while(true){
if((i__8742 < l__8738))
{{
var G__8744 = (i__8742 + 1);
var G__8745 = cljs.core.conj_BANG_.call(null,out__8743,(xs__8739[i__8742]));
i__8742 = G__8744;
out__8743 = G__8745;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8743);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8746){
var args = cljs.core.seq(arglist__8746);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8747 = this;
if(((this__8747.off + 1) < this__8747.node.length))
{var s__8748 = cljs.core.chunked_seq.call(null,this__8747.vec,this__8747.node,this__8747.i,(this__8747.off + 1));
if((s__8748 == null))
{return null;
} else
{return s__8748;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8749 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8750 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8751 = this;
return (this__8751.node[this__8751.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8752 = this;
if(((this__8752.off + 1) < this__8752.node.length))
{var s__8753 = cljs.core.chunked_seq.call(null,this__8752.vec,this__8752.node,this__8752.i,(this__8752.off + 1));
if((s__8753 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8753;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8754 = this;
var l__8755 = this__8754.node.length;
var s__8756 = ((((this__8754.i + l__8755) < cljs.core._count.call(null,this__8754.vec)))?cljs.core.chunked_seq.call(null,this__8754.vec,(this__8754.i + l__8755),0):null);
if((s__8756 == null))
{return null;
} else
{return s__8756;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8757 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8758 = this;
return cljs.core.chunked_seq.call(null,this__8758.vec,this__8758.node,this__8758.i,this__8758.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8759 = this;
return this__8759.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8760 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8760.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8761 = this;
return cljs.core.array_chunk.call(null,this__8761.node,this__8761.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8762 = this;
var l__8763 = this__8762.node.length;
var s__8764 = ((((this__8762.i + l__8763) < cljs.core._count.call(null,this__8762.vec)))?cljs.core.chunked_seq.call(null,this__8762.vec,(this__8762.i + l__8763),0):null);
if((s__8764 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8764;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8767 = this;
var h__2220__auto____8768 = this__8767.__hash;
if(!((h__2220__auto____8768 == null)))
{return h__2220__auto____8768;
} else
{var h__2220__auto____8769 = cljs.core.hash_coll.call(null,coll);
this__8767.__hash = h__2220__auto____8769;
return h__2220__auto____8769;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8770 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8771 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8772 = this;
var v_pos__8773 = (this__8772.start + key);
return (new cljs.core.Subvec(this__8772.meta,cljs.core._assoc.call(null,this__8772.v,v_pos__8773,val),this__8772.start,((this__8772.end > (v_pos__8773 + 1)) ? this__8772.end : (v_pos__8773 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8799 = null;
var G__8799__2 = (function (this_sym8774,k){
var this__8776 = this;
var this_sym8774__8777 = this;
var coll__8778 = this_sym8774__8777;
return coll__8778.cljs$core$ILookup$_lookup$arity$2(coll__8778,k);
});
var G__8799__3 = (function (this_sym8775,k,not_found){
var this__8776 = this;
var this_sym8775__8779 = this;
var coll__8780 = this_sym8775__8779;
return coll__8780.cljs$core$ILookup$_lookup$arity$3(coll__8780,k,not_found);
});
G__8799 = function(this_sym8775,k,not_found){
switch(arguments.length){
case 2:
return G__8799__2.call(this,this_sym8775,k);
case 3:
return G__8799__3.call(this,this_sym8775,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8799;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8765,args8766){
var this__8781 = this;
return this_sym8765.call.apply(this_sym8765,[this_sym8765].concat(args8766.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8782 = this;
return (new cljs.core.Subvec(this__8782.meta,cljs.core._assoc_n.call(null,this__8782.v,this__8782.end,o),this__8782.start,(this__8782.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8783 = this;
var this__8784 = this;
return cljs.core.pr_str.call(null,this__8784);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8785 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8786 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8787 = this;
var subvec_seq__8788 = (function subvec_seq(i){
if((i === this__8787.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8787.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8788.call(null,this__8787.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8789 = this;
return (this__8789.end - this__8789.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8790 = this;
return cljs.core._nth.call(null,this__8790.v,(this__8790.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8791 = this;
if((this__8791.start === this__8791.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8791.meta,this__8791.v,this__8791.start,(this__8791.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8792 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8793 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8794 = this;
return (new cljs.core.Subvec(meta,this__8794.v,this__8794.start,this__8794.end,this__8794.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8795 = this;
return this__8795.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8796 = this;
return cljs.core._nth.call(null,this__8796.v,(this__8796.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8797 = this;
return cljs.core._nth.call(null,this__8797.v,(this__8797.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8798 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8798.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8801 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8801,0,tl.length);
return ret__8801;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8805 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8806 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8805,subidx__8806,(((level === 5))?tail_node:(function (){var child__8807 = cljs.core.pv_aget.call(null,ret__8805,subidx__8806);
if(!((child__8807 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8807,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8805;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8812 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8813 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8814 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8812,subidx__8813));
if((function (){var and__3822__auto____8815 = (new_child__8814 == null);
if(and__3822__auto____8815)
{return (subidx__8813 === 0);
} else
{return and__3822__auto____8815;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8812,subidx__8813,new_child__8814);
return node__8812;
}
} else
{if((subidx__8813 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8812,subidx__8813,null);
return node__8812;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8820 = (0 <= i);
if(and__3822__auto____8820)
{return (i < tv.cnt);
} else
{return and__3822__auto____8820;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8821 = tv.root;
var node__8822 = root__8821;
var level__8823 = tv.shift;
while(true){
if((level__8823 > 0))
{{
var G__8824 = cljs.core.tv_ensure_editable.call(null,root__8821.edit,cljs.core.pv_aget.call(null,node__8822,((i >>> level__8823) & 31)));
var G__8825 = (level__8823 - 5);
node__8822 = G__8824;
level__8823 = G__8825;
continue;
}
} else
{return node__8822.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8865 = null;
var G__8865__2 = (function (this_sym8828,k){
var this__8830 = this;
var this_sym8828__8831 = this;
var coll__8832 = this_sym8828__8831;
return coll__8832.cljs$core$ILookup$_lookup$arity$2(coll__8832,k);
});
var G__8865__3 = (function (this_sym8829,k,not_found){
var this__8830 = this;
var this_sym8829__8833 = this;
var coll__8834 = this_sym8829__8833;
return coll__8834.cljs$core$ILookup$_lookup$arity$3(coll__8834,k,not_found);
});
G__8865 = function(this_sym8829,k,not_found){
switch(arguments.length){
case 2:
return G__8865__2.call(this,this_sym8829,k);
case 3:
return G__8865__3.call(this,this_sym8829,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8865;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8826,args8827){
var this__8835 = this;
return this_sym8826.call.apply(this_sym8826,[this_sym8826].concat(args8827.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8836 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8837 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8838 = this;
if(this__8838.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8839 = this;
if((function (){var and__3822__auto____8840 = (0 <= n);
if(and__3822__auto____8840)
{return (n < this__8839.cnt);
} else
{return and__3822__auto____8840;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8841 = this;
if(this__8841.root.edit)
{return this__8841.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8842 = this;
if(this__8842.root.edit)
{if((function (){var and__3822__auto____8843 = (0 <= n);
if(and__3822__auto____8843)
{return (n < this__8842.cnt);
} else
{return and__3822__auto____8843;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8842.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8848 = (function go(level,node){
var node__8846 = cljs.core.tv_ensure_editable.call(null,this__8842.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8846,(n & 31),val);
return node__8846;
} else
{var subidx__8847 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8846,subidx__8847,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8846,subidx__8847)));
return node__8846;
}
}).call(null,this__8842.shift,this__8842.root);
this__8842.root = new_root__8848;
return tcoll;
}
} else
{if((n === this__8842.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8842.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8849 = this;
if(this__8849.root.edit)
{if((this__8849.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8849.cnt))
{this__8849.cnt = 0;
return tcoll;
} else
{if((((this__8849.cnt - 1) & 31) > 0))
{this__8849.cnt = (this__8849.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8850 = cljs.core.editable_array_for.call(null,tcoll,(this__8849.cnt - 2));
var new_root__8852 = (function (){var nr__8851 = cljs.core.tv_pop_tail.call(null,tcoll,this__8849.shift,this__8849.root);
if(!((nr__8851 == null)))
{return nr__8851;
} else
{return (new cljs.core.VectorNode(this__8849.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8853 = (5 < this__8849.shift);
if(and__3822__auto____8853)
{return (cljs.core.pv_aget.call(null,new_root__8852,1) == null);
} else
{return and__3822__auto____8853;
}
})())
{var new_root__8854 = cljs.core.tv_ensure_editable.call(null,this__8849.root.edit,cljs.core.pv_aget.call(null,new_root__8852,0));
this__8849.root = new_root__8854;
this__8849.shift = (this__8849.shift - 5);
this__8849.cnt = (this__8849.cnt - 1);
this__8849.tail = new_tail__8850;
return tcoll;
} else
{this__8849.root = new_root__8852;
this__8849.cnt = (this__8849.cnt - 1);
this__8849.tail = new_tail__8850;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8855 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8856 = this;
if(this__8856.root.edit)
{if(((this__8856.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8856.tail[(this__8856.cnt & 31)] = o);
this__8856.cnt = (this__8856.cnt + 1);
return tcoll;
} else
{var tail_node__8857 = (new cljs.core.VectorNode(this__8856.root.edit,this__8856.tail));
var new_tail__8858 = cljs.core.make_array.call(null,32);
(new_tail__8858[0] = o);
this__8856.tail = new_tail__8858;
if(((this__8856.cnt >>> 5) > (1 << this__8856.shift)))
{var new_root_array__8859 = cljs.core.make_array.call(null,32);
var new_shift__8860 = (this__8856.shift + 5);
(new_root_array__8859[0] = this__8856.root);
(new_root_array__8859[1] = cljs.core.new_path.call(null,this__8856.root.edit,this__8856.shift,tail_node__8857));
this__8856.root = (new cljs.core.VectorNode(this__8856.root.edit,new_root_array__8859));
this__8856.shift = new_shift__8860;
this__8856.cnt = (this__8856.cnt + 1);
return tcoll;
} else
{var new_root__8861 = cljs.core.tv_push_tail.call(null,tcoll,this__8856.shift,this__8856.root,tail_node__8857);
this__8856.root = new_root__8861;
this__8856.cnt = (this__8856.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8862 = this;
if(this__8862.root.edit)
{this__8862.root.edit = null;
var len__8863 = (this__8862.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8864 = cljs.core.make_array.call(null,len__8863);
cljs.core.array_copy.call(null,this__8862.tail,0,trimmed_tail__8864,0,len__8863);
return (new cljs.core.PersistentVector(null,this__8862.cnt,this__8862.shift,this__8862.root,trimmed_tail__8864,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8866 = this;
var h__2220__auto____8867 = this__8866.__hash;
if(!((h__2220__auto____8867 == null)))
{return h__2220__auto____8867;
} else
{var h__2220__auto____8868 = cljs.core.hash_coll.call(null,coll);
this__8866.__hash = h__2220__auto____8868;
return h__2220__auto____8868;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8869 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8870 = this;
var this__8871 = this;
return cljs.core.pr_str.call(null,this__8871);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8872 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8873 = this;
return cljs.core._first.call(null,this__8873.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8874 = this;
var temp__3971__auto____8875 = cljs.core.next.call(null,this__8874.front);
if(temp__3971__auto____8875)
{var f1__8876 = temp__3971__auto____8875;
return (new cljs.core.PersistentQueueSeq(this__8874.meta,f1__8876,this__8874.rear,null));
} else
{if((this__8874.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8874.meta,this__8874.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8877 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8878 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8878.front,this__8878.rear,this__8878.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8879 = this;
return this__8879.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8880 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8880.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8881 = this;
var h__2220__auto____8882 = this__8881.__hash;
if(!((h__2220__auto____8882 == null)))
{return h__2220__auto____8882;
} else
{var h__2220__auto____8883 = cljs.core.hash_coll.call(null,coll);
this__8881.__hash = h__2220__auto____8883;
return h__2220__auto____8883;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8884 = this;
if(cljs.core.truth_(this__8884.front))
{return (new cljs.core.PersistentQueue(this__8884.meta,(this__8884.count + 1),this__8884.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8885 = this__8884.rear;
if(cljs.core.truth_(or__3824__auto____8885))
{return or__3824__auto____8885;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8884.meta,(this__8884.count + 1),cljs.core.conj.call(null,this__8884.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8886 = this;
var this__8887 = this;
return cljs.core.pr_str.call(null,this__8887);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8888 = this;
var rear__8889 = cljs.core.seq.call(null,this__8888.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8890 = this__8888.front;
if(cljs.core.truth_(or__3824__auto____8890))
{return or__3824__auto____8890;
} else
{return rear__8889;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8888.front,cljs.core.seq.call(null,rear__8889),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8891 = this;
return this__8891.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8892 = this;
return cljs.core._first.call(null,this__8892.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8893 = this;
if(cljs.core.truth_(this__8893.front))
{var temp__3971__auto____8894 = cljs.core.next.call(null,this__8893.front);
if(temp__3971__auto____8894)
{var f1__8895 = temp__3971__auto____8894;
return (new cljs.core.PersistentQueue(this__8893.meta,(this__8893.count - 1),f1__8895,this__8893.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8893.meta,(this__8893.count - 1),cljs.core.seq.call(null,this__8893.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8896 = this;
return cljs.core.first.call(null,this__8896.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8897 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8898 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8899 = this;
return (new cljs.core.PersistentQueue(meta,this__8899.count,this__8899.front,this__8899.rear,this__8899.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8900 = this;
return this__8900.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8901 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8902 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8905 = array.length;
var i__8906 = 0;
while(true){
if((i__8906 < len__8905))
{if((k === (array[i__8906])))
{return i__8906;
} else
{{
var G__8907 = (i__8906 + incr);
i__8906 = G__8907;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8910 = cljs.core.hash.call(null,a);
var b__8911 = cljs.core.hash.call(null,b);
if((a__8910 < b__8911))
{return -1;
} else
{if((a__8910 > b__8911))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8919 = m.keys;
var len__8920 = ks__8919.length;
var so__8921 = m.strobj;
var out__8922 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8923 = 0;
var out__8924 = cljs.core.transient$.call(null,out__8922);
while(true){
if((i__8923 < len__8920))
{var k__8925 = (ks__8919[i__8923]);
{
var G__8926 = (i__8923 + 1);
var G__8927 = cljs.core.assoc_BANG_.call(null,out__8924,k__8925,(so__8921[k__8925]));
i__8923 = G__8926;
out__8924 = G__8927;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8924,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8933 = {};
var l__8934 = ks.length;
var i__8935 = 0;
while(true){
if((i__8935 < l__8934))
{var k__8936 = (ks[i__8935]);
(new_obj__8933[k__8936] = (obj[k__8936]));
{
var G__8937 = (i__8935 + 1);
i__8935 = G__8937;
continue;
}
} else
{}
break;
}
return new_obj__8933;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8940 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8941 = this;
var h__2220__auto____8942 = this__8941.__hash;
if(!((h__2220__auto____8942 == null)))
{return h__2220__auto____8942;
} else
{var h__2220__auto____8943 = cljs.core.hash_imap.call(null,coll);
this__8941.__hash = h__2220__auto____8943;
return h__2220__auto____8943;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8944 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8945 = this;
if((function (){var and__3822__auto____8946 = goog.isString(k);
if(and__3822__auto____8946)
{return !((cljs.core.scan_array.call(null,1,k,this__8945.keys) == null));
} else
{return and__3822__auto____8946;
}
})())
{return (this__8945.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8947 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8948 = (this__8947.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8948)
{return or__3824__auto____8948;
} else
{return (this__8947.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8947.keys) == null)))
{var new_strobj__8949 = cljs.core.obj_clone.call(null,this__8947.strobj,this__8947.keys);
(new_strobj__8949[k] = v);
return (new cljs.core.ObjMap(this__8947.meta,this__8947.keys,new_strobj__8949,(this__8947.update_count + 1),null));
} else
{var new_strobj__8950 = cljs.core.obj_clone.call(null,this__8947.strobj,this__8947.keys);
var new_keys__8951 = this__8947.keys.slice();
(new_strobj__8950[k] = v);
new_keys__8951.push(k);
return (new cljs.core.ObjMap(this__8947.meta,new_keys__8951,new_strobj__8950,(this__8947.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8952 = this;
if((function (){var and__3822__auto____8953 = goog.isString(k);
if(and__3822__auto____8953)
{return !((cljs.core.scan_array.call(null,1,k,this__8952.keys) == null));
} else
{return and__3822__auto____8953;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8975 = null;
var G__8975__2 = (function (this_sym8954,k){
var this__8956 = this;
var this_sym8954__8957 = this;
var coll__8958 = this_sym8954__8957;
return coll__8958.cljs$core$ILookup$_lookup$arity$2(coll__8958,k);
});
var G__8975__3 = (function (this_sym8955,k,not_found){
var this__8956 = this;
var this_sym8955__8959 = this;
var coll__8960 = this_sym8955__8959;
return coll__8960.cljs$core$ILookup$_lookup$arity$3(coll__8960,k,not_found);
});
G__8975 = function(this_sym8955,k,not_found){
switch(arguments.length){
case 2:
return G__8975__2.call(this,this_sym8955,k);
case 3:
return G__8975__3.call(this,this_sym8955,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8975;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8938,args8939){
var this__8961 = this;
return this_sym8938.call.apply(this_sym8938,[this_sym8938].concat(args8939.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8962 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8963 = this;
var this__8964 = this;
return cljs.core.pr_str.call(null,this__8964);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8965 = this;
if((this__8965.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8928_SHARP_){
return cljs.core.vector.call(null,p1__8928_SHARP_,(this__8965.strobj[p1__8928_SHARP_]));
}),this__8965.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8966 = this;
return this__8966.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8967 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8968 = this;
return (new cljs.core.ObjMap(meta,this__8968.keys,this__8968.strobj,this__8968.update_count,this__8968.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8969 = this;
return this__8969.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8970 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8970.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8971 = this;
if((function (){var and__3822__auto____8972 = goog.isString(k);
if(and__3822__auto____8972)
{return !((cljs.core.scan_array.call(null,1,k,this__8971.keys) == null));
} else
{return and__3822__auto____8972;
}
})())
{var new_keys__8973 = this__8971.keys.slice();
var new_strobj__8974 = cljs.core.obj_clone.call(null,this__8971.strobj,this__8971.keys);
new_keys__8973.splice(cljs.core.scan_array.call(null,1,k,new_keys__8973),1);
cljs.core.js_delete.call(null,new_strobj__8974,k);
return (new cljs.core.ObjMap(this__8971.meta,new_keys__8973,new_strobj__8974,(this__8971.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8979 = this;
var h__2220__auto____8980 = this__8979.__hash;
if(!((h__2220__auto____8980 == null)))
{return h__2220__auto____8980;
} else
{var h__2220__auto____8981 = cljs.core.hash_imap.call(null,coll);
this__8979.__hash = h__2220__auto____8981;
return h__2220__auto____8981;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8982 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8983 = this;
var bucket__8984 = (this__8983.hashobj[cljs.core.hash.call(null,k)]);
var i__8985 = (cljs.core.truth_(bucket__8984)?cljs.core.scan_array.call(null,2,k,bucket__8984):null);
if(cljs.core.truth_(i__8985))
{return (bucket__8984[(i__8985 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8986 = this;
var h__8987 = cljs.core.hash.call(null,k);
var bucket__8988 = (this__8986.hashobj[h__8987]);
if(cljs.core.truth_(bucket__8988))
{var new_bucket__8989 = bucket__8988.slice();
var new_hashobj__8990 = goog.object.clone(this__8986.hashobj);
(new_hashobj__8990[h__8987] = new_bucket__8989);
var temp__3971__auto____8991 = cljs.core.scan_array.call(null,2,k,new_bucket__8989);
if(cljs.core.truth_(temp__3971__auto____8991))
{var i__8992 = temp__3971__auto____8991;
(new_bucket__8989[(i__8992 + 1)] = v);
return (new cljs.core.HashMap(this__8986.meta,this__8986.count,new_hashobj__8990,null));
} else
{new_bucket__8989.push(k,v);
return (new cljs.core.HashMap(this__8986.meta,(this__8986.count + 1),new_hashobj__8990,null));
}
} else
{var new_hashobj__8993 = goog.object.clone(this__8986.hashobj);
(new_hashobj__8993[h__8987] = [k,v]);
return (new cljs.core.HashMap(this__8986.meta,(this__8986.count + 1),new_hashobj__8993,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8994 = this;
var bucket__8995 = (this__8994.hashobj[cljs.core.hash.call(null,k)]);
var i__8996 = (cljs.core.truth_(bucket__8995)?cljs.core.scan_array.call(null,2,k,bucket__8995):null);
if(cljs.core.truth_(i__8996))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9021 = null;
var G__9021__2 = (function (this_sym8997,k){
var this__8999 = this;
var this_sym8997__9000 = this;
var coll__9001 = this_sym8997__9000;
return coll__9001.cljs$core$ILookup$_lookup$arity$2(coll__9001,k);
});
var G__9021__3 = (function (this_sym8998,k,not_found){
var this__8999 = this;
var this_sym8998__9002 = this;
var coll__9003 = this_sym8998__9002;
return coll__9003.cljs$core$ILookup$_lookup$arity$3(coll__9003,k,not_found);
});
G__9021 = function(this_sym8998,k,not_found){
switch(arguments.length){
case 2:
return G__9021__2.call(this,this_sym8998,k);
case 3:
return G__9021__3.call(this,this_sym8998,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9021;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8977,args8978){
var this__9004 = this;
return this_sym8977.call.apply(this_sym8977,[this_sym8977].concat(args8978.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9005 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9006 = this;
var this__9007 = this;
return cljs.core.pr_str.call(null,this__9007);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9008 = this;
if((this__9008.count > 0))
{var hashes__9009 = cljs.core.js_keys.call(null,this__9008.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8976_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9008.hashobj[p1__8976_SHARP_])));
}),hashes__9009);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9010 = this;
return this__9010.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9011 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9012 = this;
return (new cljs.core.HashMap(meta,this__9012.count,this__9012.hashobj,this__9012.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9013 = this;
return this__9013.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9014 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9014.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9015 = this;
var h__9016 = cljs.core.hash.call(null,k);
var bucket__9017 = (this__9015.hashobj[h__9016]);
var i__9018 = (cljs.core.truth_(bucket__9017)?cljs.core.scan_array.call(null,2,k,bucket__9017):null);
if(cljs.core.not.call(null,i__9018))
{return coll;
} else
{var new_hashobj__9019 = goog.object.clone(this__9015.hashobj);
if((3 > bucket__9017.length))
{cljs.core.js_delete.call(null,new_hashobj__9019,h__9016);
} else
{var new_bucket__9020 = bucket__9017.slice();
new_bucket__9020.splice(i__9018,2);
(new_hashobj__9019[h__9016] = new_bucket__9020);
}
return (new cljs.core.HashMap(this__9015.meta,(this__9015.count - 1),new_hashobj__9019,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9022 = ks.length;
var i__9023 = 0;
var out__9024 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9023 < len__9022))
{{
var G__9025 = (i__9023 + 1);
var G__9026 = cljs.core.assoc.call(null,out__9024,(ks[i__9023]),(vs[i__9023]));
i__9023 = G__9025;
out__9024 = G__9026;
continue;
}
} else
{return out__9024;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9030 = m.arr;
var len__9031 = arr__9030.length;
var i__9032 = 0;
while(true){
if((len__9031 <= i__9032))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9030[i__9032]),k))
{return i__9032;
} else
{if("\uFDD0'else")
{{
var G__9033 = (i__9032 + 2);
i__9032 = G__9033;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9036 = this;
return (new cljs.core.TransientArrayMap({},this__9036.arr.length,this__9036.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9037 = this;
var h__2220__auto____9038 = this__9037.__hash;
if(!((h__2220__auto____9038 == null)))
{return h__2220__auto____9038;
} else
{var h__2220__auto____9039 = cljs.core.hash_imap.call(null,coll);
this__9037.__hash = h__2220__auto____9039;
return h__2220__auto____9039;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9040 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9041 = this;
var idx__9042 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9042 === -1))
{return not_found;
} else
{return (this__9041.arr[(idx__9042 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9043 = this;
var idx__9044 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9044 === -1))
{if((this__9043.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9043.meta,(this__9043.cnt + 1),(function (){var G__9045__9046 = this__9043.arr.slice();
G__9045__9046.push(k);
G__9045__9046.push(v);
return G__9045__9046;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9043.arr[(idx__9044 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9043.meta,this__9043.cnt,(function (){var G__9047__9048 = this__9043.arr.slice();
(G__9047__9048[(idx__9044 + 1)] = v);
return G__9047__9048;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9049 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9081 = null;
var G__9081__2 = (function (this_sym9050,k){
var this__9052 = this;
var this_sym9050__9053 = this;
var coll__9054 = this_sym9050__9053;
return coll__9054.cljs$core$ILookup$_lookup$arity$2(coll__9054,k);
});
var G__9081__3 = (function (this_sym9051,k,not_found){
var this__9052 = this;
var this_sym9051__9055 = this;
var coll__9056 = this_sym9051__9055;
return coll__9056.cljs$core$ILookup$_lookup$arity$3(coll__9056,k,not_found);
});
G__9081 = function(this_sym9051,k,not_found){
switch(arguments.length){
case 2:
return G__9081__2.call(this,this_sym9051,k);
case 3:
return G__9081__3.call(this,this_sym9051,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9081;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9034,args9035){
var this__9057 = this;
return this_sym9034.call.apply(this_sym9034,[this_sym9034].concat(args9035.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9058 = this;
var len__9059 = this__9058.arr.length;
var i__9060 = 0;
var init__9061 = init;
while(true){
if((i__9060 < len__9059))
{var init__9062 = f.call(null,init__9061,(this__9058.arr[i__9060]),(this__9058.arr[(i__9060 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9062))
{return cljs.core.deref.call(null,init__9062);
} else
{{
var G__9082 = (i__9060 + 2);
var G__9083 = init__9062;
i__9060 = G__9082;
init__9061 = G__9083;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9063 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9064 = this;
var this__9065 = this;
return cljs.core.pr_str.call(null,this__9065);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9066 = this;
if((this__9066.cnt > 0))
{var len__9067 = this__9066.arr.length;
var array_map_seq__9068 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9067))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9066.arr[i]),(this__9066.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9068.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9069 = this;
return this__9069.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9070 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9071 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9071.cnt,this__9071.arr,this__9071.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9072 = this;
return this__9072.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9073 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9073.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9074 = this;
var idx__9075 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9075 >= 0))
{var len__9076 = this__9074.arr.length;
var new_len__9077 = (len__9076 - 2);
if((new_len__9077 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9078 = cljs.core.make_array.call(null,new_len__9077);
var s__9079 = 0;
var d__9080 = 0;
while(true){
if((s__9079 >= len__9076))
{return (new cljs.core.PersistentArrayMap(this__9074.meta,(this__9074.cnt - 1),new_arr__9078,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9074.arr[s__9079])))
{{
var G__9084 = (s__9079 + 2);
var G__9085 = d__9080;
s__9079 = G__9084;
d__9080 = G__9085;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9078[d__9080] = (this__9074.arr[s__9079]));
(new_arr__9078[(d__9080 + 1)] = (this__9074.arr[(s__9079 + 1)]));
{
var G__9086 = (s__9079 + 2);
var G__9087 = (d__9080 + 2);
s__9079 = G__9086;
d__9080 = G__9087;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9088 = cljs.core.count.call(null,ks);
var i__9089 = 0;
var out__9090 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9089 < len__9088))
{{
var G__9091 = (i__9089 + 1);
var G__9092 = cljs.core.assoc_BANG_.call(null,out__9090,(ks[i__9089]),(vs[i__9089]));
i__9089 = G__9091;
out__9090 = G__9092;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9090);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9093 = this;
if(cljs.core.truth_(this__9093.editable_QMARK_))
{var idx__9094 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9094 >= 0))
{(this__9093.arr[idx__9094] = (this__9093.arr[(this__9093.len - 2)]));
(this__9093.arr[(idx__9094 + 1)] = (this__9093.arr[(this__9093.len - 1)]));
var G__9095__9096 = this__9093.arr;
G__9095__9096.pop();
G__9095__9096.pop();
G__9095__9096;
this__9093.len = (this__9093.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9097 = this;
if(cljs.core.truth_(this__9097.editable_QMARK_))
{var idx__9098 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9098 === -1))
{if(((this__9097.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9097.len = (this__9097.len + 2);
this__9097.arr.push(key);
this__9097.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9097.len,this__9097.arr),key,val);
}
} else
{if((val === (this__9097.arr[(idx__9098 + 1)])))
{return tcoll;
} else
{(this__9097.arr[(idx__9098 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9099 = this;
if(cljs.core.truth_(this__9099.editable_QMARK_))
{if((function (){var G__9100__9101 = o;
if(G__9100__9101)
{if((function (){var or__3824__auto____9102 = (G__9100__9101.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9102)
{return or__3824__auto____9102;
} else
{return G__9100__9101.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9100__9101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9100__9101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9100__9101);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9103 = cljs.core.seq.call(null,o);
var tcoll__9104 = tcoll;
while(true){
var temp__3971__auto____9105 = cljs.core.first.call(null,es__9103);
if(cljs.core.truth_(temp__3971__auto____9105))
{var e__9106 = temp__3971__auto____9105;
{
var G__9112 = cljs.core.next.call(null,es__9103);
var G__9113 = tcoll__9104.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9104,cljs.core.key.call(null,e__9106),cljs.core.val.call(null,e__9106));
es__9103 = G__9112;
tcoll__9104 = G__9113;
continue;
}
} else
{return tcoll__9104;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9107 = this;
if(cljs.core.truth_(this__9107.editable_QMARK_))
{this__9107.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9107.len,2),this__9107.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9108 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9109 = this;
if(cljs.core.truth_(this__9109.editable_QMARK_))
{var idx__9110 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9110 === -1))
{return not_found;
} else
{return (this__9109.arr[(idx__9110 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9111 = this;
if(cljs.core.truth_(this__9111.editable_QMARK_))
{return cljs.core.quot.call(null,this__9111.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9116 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9117 = 0;
while(true){
if((i__9117 < len))
{{
var G__9118 = cljs.core.assoc_BANG_.call(null,out__9116,(arr[i__9117]),(arr[(i__9117 + 1)]));
var G__9119 = (i__9117 + 2);
out__9116 = G__9118;
i__9117 = G__9119;
continue;
}
} else
{return out__9116;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2338__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9124__9125 = arr.slice();
(G__9124__9125[i] = a);
return G__9124__9125;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9126__9127 = arr.slice();
(G__9126__9127[i] = a);
(G__9126__9127[j] = b);
return G__9126__9127;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9129 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9129,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9129,(2 * i),(new_arr__9129.length - (2 * i)));
return new_arr__9129;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9132 = inode.ensure_editable(edit);
(editable__9132.arr[i] = a);
return editable__9132;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9133 = inode.ensure_editable(edit);
(editable__9133.arr[i] = a);
(editable__9133.arr[j] = b);
return editable__9133;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9140 = arr.length;
var i__9141 = 0;
var init__9142 = init;
while(true){
if((i__9141 < len__9140))
{var init__9145 = (function (){var k__9143 = (arr[i__9141]);
if(!((k__9143 == null)))
{return f.call(null,init__9142,k__9143,(arr[(i__9141 + 1)]));
} else
{var node__9144 = (arr[(i__9141 + 1)]);
if(!((node__9144 == null)))
{return node__9144.kv_reduce(f,init__9142);
} else
{return init__9142;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9145))
{return cljs.core.deref.call(null,init__9145);
} else
{{
var G__9146 = (i__9141 + 2);
var G__9147 = init__9145;
i__9141 = G__9146;
init__9142 = G__9147;
continue;
}
}
} else
{return init__9142;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9148 = this;
var inode__9149 = this;
if((this__9148.bitmap === bit))
{return null;
} else
{var editable__9150 = inode__9149.ensure_editable(e);
var earr__9151 = editable__9150.arr;
var len__9152 = earr__9151.length;
editable__9150.bitmap = (bit ^ editable__9150.bitmap);
cljs.core.array_copy.call(null,earr__9151,(2 * (i + 1)),earr__9151,(2 * i),(len__9152 - (2 * (i + 1))));
(earr__9151[(len__9152 - 2)] = null);
(earr__9151[(len__9152 - 1)] = null);
return editable__9150;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9153 = this;
var inode__9154 = this;
var bit__9155 = (1 << ((hash >>> shift) & 0x01f));
var idx__9156 = cljs.core.bitmap_indexed_node_index.call(null,this__9153.bitmap,bit__9155);
if(((this__9153.bitmap & bit__9155) === 0))
{var n__9157 = cljs.core.bit_count.call(null,this__9153.bitmap);
if(((2 * n__9157) < this__9153.arr.length))
{var editable__9158 = inode__9154.ensure_editable(edit);
var earr__9159 = editable__9158.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9159,(2 * idx__9156),earr__9159,(2 * (idx__9156 + 1)),(2 * (n__9157 - idx__9156)));
(earr__9159[(2 * idx__9156)] = key);
(earr__9159[((2 * idx__9156) + 1)] = val);
editable__9158.bitmap = (editable__9158.bitmap | bit__9155);
return editable__9158;
} else
{if((n__9157 >= 16))
{var nodes__9160 = cljs.core.make_array.call(null,32);
var jdx__9161 = ((hash >>> shift) & 0x01f);
(nodes__9160[jdx__9161] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9162 = 0;
var j__9163 = 0;
while(true){
if((i__9162 < 32))
{if((((this__9153.bitmap >>> i__9162) & 1) === 0))
{{
var G__9216 = (i__9162 + 1);
var G__9217 = j__9163;
i__9162 = G__9216;
j__9163 = G__9217;
continue;
}
} else
{(nodes__9160[i__9162] = ((!(((this__9153.arr[j__9163]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9153.arr[j__9163])),(this__9153.arr[j__9163]),(this__9153.arr[(j__9163 + 1)]),added_leaf_QMARK_):(this__9153.arr[(j__9163 + 1)])));
{
var G__9218 = (i__9162 + 1);
var G__9219 = (j__9163 + 2);
i__9162 = G__9218;
j__9163 = G__9219;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9157 + 1),nodes__9160));
} else
{if("\uFDD0'else")
{var new_arr__9164 = cljs.core.make_array.call(null,(2 * (n__9157 + 4)));
cljs.core.array_copy.call(null,this__9153.arr,0,new_arr__9164,0,(2 * idx__9156));
(new_arr__9164[(2 * idx__9156)] = key);
(new_arr__9164[((2 * idx__9156) + 1)] = val);
cljs.core.array_copy.call(null,this__9153.arr,(2 * idx__9156),new_arr__9164,(2 * (idx__9156 + 1)),(2 * (n__9157 - idx__9156)));
added_leaf_QMARK_.val = true;
var editable__9165 = inode__9154.ensure_editable(edit);
editable__9165.arr = new_arr__9164;
editable__9165.bitmap = (editable__9165.bitmap | bit__9155);
return editable__9165;
} else
{return null;
}
}
}
} else
{var key_or_nil__9166 = (this__9153.arr[(2 * idx__9156)]);
var val_or_node__9167 = (this__9153.arr[((2 * idx__9156) + 1)]);
if((key_or_nil__9166 == null))
{var n__9168 = val_or_node__9167.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9168 === val_or_node__9167))
{return inode__9154;
} else
{return cljs.core.edit_and_set.call(null,inode__9154,edit,((2 * idx__9156) + 1),n__9168);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9166))
{if((val === val_or_node__9167))
{return inode__9154;
} else
{return cljs.core.edit_and_set.call(null,inode__9154,edit,((2 * idx__9156) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9154,edit,(2 * idx__9156),null,((2 * idx__9156) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9166,val_or_node__9167,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9169 = this;
var inode__9170 = this;
return cljs.core.create_inode_seq.call(null,this__9169.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9171 = this;
var inode__9172 = this;
var bit__9173 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9171.bitmap & bit__9173) === 0))
{return inode__9172;
} else
{var idx__9174 = cljs.core.bitmap_indexed_node_index.call(null,this__9171.bitmap,bit__9173);
var key_or_nil__9175 = (this__9171.arr[(2 * idx__9174)]);
var val_or_node__9176 = (this__9171.arr[((2 * idx__9174) + 1)]);
if((key_or_nil__9175 == null))
{var n__9177 = val_or_node__9176.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9177 === val_or_node__9176))
{return inode__9172;
} else
{if(!((n__9177 == null)))
{return cljs.core.edit_and_set.call(null,inode__9172,edit,((2 * idx__9174) + 1),n__9177);
} else
{if((this__9171.bitmap === bit__9173))
{return null;
} else
{if("\uFDD0'else")
{return inode__9172.edit_and_remove_pair(edit,bit__9173,idx__9174);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9175))
{(removed_leaf_QMARK_[0] = true);
return inode__9172.edit_and_remove_pair(edit,bit__9173,idx__9174);
} else
{if("\uFDD0'else")
{return inode__9172;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9178 = this;
var inode__9179 = this;
if((e === this__9178.edit))
{return inode__9179;
} else
{var n__9180 = cljs.core.bit_count.call(null,this__9178.bitmap);
var new_arr__9181 = cljs.core.make_array.call(null,(((n__9180 < 0))?4:(2 * (n__9180 + 1))));
cljs.core.array_copy.call(null,this__9178.arr,0,new_arr__9181,0,(2 * n__9180));
return (new cljs.core.BitmapIndexedNode(e,this__9178.bitmap,new_arr__9181));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9182 = this;
var inode__9183 = this;
return cljs.core.inode_kv_reduce.call(null,this__9182.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9184 = this;
var inode__9185 = this;
var bit__9186 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9184.bitmap & bit__9186) === 0))
{return not_found;
} else
{var idx__9187 = cljs.core.bitmap_indexed_node_index.call(null,this__9184.bitmap,bit__9186);
var key_or_nil__9188 = (this__9184.arr[(2 * idx__9187)]);
var val_or_node__9189 = (this__9184.arr[((2 * idx__9187) + 1)]);
if((key_or_nil__9188 == null))
{return val_or_node__9189.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9188))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9188,val_or_node__9189], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9190 = this;
var inode__9191 = this;
var bit__9192 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9190.bitmap & bit__9192) === 0))
{return inode__9191;
} else
{var idx__9193 = cljs.core.bitmap_indexed_node_index.call(null,this__9190.bitmap,bit__9192);
var key_or_nil__9194 = (this__9190.arr[(2 * idx__9193)]);
var val_or_node__9195 = (this__9190.arr[((2 * idx__9193) + 1)]);
if((key_or_nil__9194 == null))
{var n__9196 = val_or_node__9195.inode_without((shift + 5),hash,key);
if((n__9196 === val_or_node__9195))
{return inode__9191;
} else
{if(!((n__9196 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9190.bitmap,cljs.core.clone_and_set.call(null,this__9190.arr,((2 * idx__9193) + 1),n__9196)));
} else
{if((this__9190.bitmap === bit__9192))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9190.bitmap ^ bit__9192),cljs.core.remove_pair.call(null,this__9190.arr,idx__9193)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9194))
{return (new cljs.core.BitmapIndexedNode(null,(this__9190.bitmap ^ bit__9192),cljs.core.remove_pair.call(null,this__9190.arr,idx__9193)));
} else
{if("\uFDD0'else")
{return inode__9191;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9197 = this;
var inode__9198 = this;
var bit__9199 = (1 << ((hash >>> shift) & 0x01f));
var idx__9200 = cljs.core.bitmap_indexed_node_index.call(null,this__9197.bitmap,bit__9199);
if(((this__9197.bitmap & bit__9199) === 0))
{var n__9201 = cljs.core.bit_count.call(null,this__9197.bitmap);
if((n__9201 >= 16))
{var nodes__9202 = cljs.core.make_array.call(null,32);
var jdx__9203 = ((hash >>> shift) & 0x01f);
(nodes__9202[jdx__9203] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9204 = 0;
var j__9205 = 0;
while(true){
if((i__9204 < 32))
{if((((this__9197.bitmap >>> i__9204) & 1) === 0))
{{
var G__9220 = (i__9204 + 1);
var G__9221 = j__9205;
i__9204 = G__9220;
j__9205 = G__9221;
continue;
}
} else
{(nodes__9202[i__9204] = ((!(((this__9197.arr[j__9205]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9197.arr[j__9205])),(this__9197.arr[j__9205]),(this__9197.arr[(j__9205 + 1)]),added_leaf_QMARK_):(this__9197.arr[(j__9205 + 1)])));
{
var G__9222 = (i__9204 + 1);
var G__9223 = (j__9205 + 2);
i__9204 = G__9222;
j__9205 = G__9223;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9201 + 1),nodes__9202));
} else
{var new_arr__9206 = cljs.core.make_array.call(null,(2 * (n__9201 + 1)));
cljs.core.array_copy.call(null,this__9197.arr,0,new_arr__9206,0,(2 * idx__9200));
(new_arr__9206[(2 * idx__9200)] = key);
(new_arr__9206[((2 * idx__9200) + 1)] = val);
cljs.core.array_copy.call(null,this__9197.arr,(2 * idx__9200),new_arr__9206,(2 * (idx__9200 + 1)),(2 * (n__9201 - idx__9200)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9197.bitmap | bit__9199),new_arr__9206));
}
} else
{var key_or_nil__9207 = (this__9197.arr[(2 * idx__9200)]);
var val_or_node__9208 = (this__9197.arr[((2 * idx__9200) + 1)]);
if((key_or_nil__9207 == null))
{var n__9209 = val_or_node__9208.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9209 === val_or_node__9208))
{return inode__9198;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9197.bitmap,cljs.core.clone_and_set.call(null,this__9197.arr,((2 * idx__9200) + 1),n__9209)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9207))
{if((val === val_or_node__9208))
{return inode__9198;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9197.bitmap,cljs.core.clone_and_set.call(null,this__9197.arr,((2 * idx__9200) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9197.bitmap,cljs.core.clone_and_set.call(null,this__9197.arr,(2 * idx__9200),null,((2 * idx__9200) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9207,val_or_node__9208,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9210 = this;
var inode__9211 = this;
var bit__9212 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9210.bitmap & bit__9212) === 0))
{return not_found;
} else
{var idx__9213 = cljs.core.bitmap_indexed_node_index.call(null,this__9210.bitmap,bit__9212);
var key_or_nil__9214 = (this__9210.arr[(2 * idx__9213)]);
var val_or_node__9215 = (this__9210.arr[((2 * idx__9213) + 1)]);
if((key_or_nil__9214 == null))
{return val_or_node__9215.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9214))
{return val_or_node__9215;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9231 = array_node.arr;
var len__9232 = (2 * (array_node.cnt - 1));
var new_arr__9233 = cljs.core.make_array.call(null,len__9232);
var i__9234 = 0;
var j__9235 = 1;
var bitmap__9236 = 0;
while(true){
if((i__9234 < len__9232))
{if((function (){var and__3822__auto____9237 = !((i__9234 === idx));
if(and__3822__auto____9237)
{return !(((arr__9231[i__9234]) == null));
} else
{return and__3822__auto____9237;
}
})())
{(new_arr__9233[j__9235] = (arr__9231[i__9234]));
{
var G__9238 = (i__9234 + 1);
var G__9239 = (j__9235 + 2);
var G__9240 = (bitmap__9236 | (1 << i__9234));
i__9234 = G__9238;
j__9235 = G__9239;
bitmap__9236 = G__9240;
continue;
}
} else
{{
var G__9241 = (i__9234 + 1);
var G__9242 = j__9235;
var G__9243 = bitmap__9236;
i__9234 = G__9241;
j__9235 = G__9242;
bitmap__9236 = G__9243;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9236,new_arr__9233));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9244 = this;
var inode__9245 = this;
var idx__9246 = ((hash >>> shift) & 0x01f);
var node__9247 = (this__9244.arr[idx__9246]);
if((node__9247 == null))
{var editable__9248 = cljs.core.edit_and_set.call(null,inode__9245,edit,idx__9246,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9248.cnt = (editable__9248.cnt + 1);
return editable__9248;
} else
{var n__9249 = node__9247.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9249 === node__9247))
{return inode__9245;
} else
{return cljs.core.edit_and_set.call(null,inode__9245,edit,idx__9246,n__9249);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9250 = this;
var inode__9251 = this;
return cljs.core.create_array_node_seq.call(null,this__9250.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9252 = this;
var inode__9253 = this;
var idx__9254 = ((hash >>> shift) & 0x01f);
var node__9255 = (this__9252.arr[idx__9254]);
if((node__9255 == null))
{return inode__9253;
} else
{var n__9256 = node__9255.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9256 === node__9255))
{return inode__9253;
} else
{if((n__9256 == null))
{if((this__9252.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9253,edit,idx__9254);
} else
{var editable__9257 = cljs.core.edit_and_set.call(null,inode__9253,edit,idx__9254,n__9256);
editable__9257.cnt = (editable__9257.cnt - 1);
return editable__9257;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9253,edit,idx__9254,n__9256);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9258 = this;
var inode__9259 = this;
if((e === this__9258.edit))
{return inode__9259;
} else
{return (new cljs.core.ArrayNode(e,this__9258.cnt,this__9258.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9260 = this;
var inode__9261 = this;
var len__9262 = this__9260.arr.length;
var i__9263 = 0;
var init__9264 = init;
while(true){
if((i__9263 < len__9262))
{var node__9265 = (this__9260.arr[i__9263]);
if(!((node__9265 == null)))
{var init__9266 = node__9265.kv_reduce(f,init__9264);
if(cljs.core.reduced_QMARK_.call(null,init__9266))
{return cljs.core.deref.call(null,init__9266);
} else
{{
var G__9285 = (i__9263 + 1);
var G__9286 = init__9266;
i__9263 = G__9285;
init__9264 = G__9286;
continue;
}
}
} else
{return null;
}
} else
{return init__9264;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9267 = this;
var inode__9268 = this;
var idx__9269 = ((hash >>> shift) & 0x01f);
var node__9270 = (this__9267.arr[idx__9269]);
if(!((node__9270 == null)))
{return node__9270.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9271 = this;
var inode__9272 = this;
var idx__9273 = ((hash >>> shift) & 0x01f);
var node__9274 = (this__9271.arr[idx__9273]);
if(!((node__9274 == null)))
{var n__9275 = node__9274.inode_without((shift + 5),hash,key);
if((n__9275 === node__9274))
{return inode__9272;
} else
{if((n__9275 == null))
{if((this__9271.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9272,null,idx__9273);
} else
{return (new cljs.core.ArrayNode(null,(this__9271.cnt - 1),cljs.core.clone_and_set.call(null,this__9271.arr,idx__9273,n__9275)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9271.cnt,cljs.core.clone_and_set.call(null,this__9271.arr,idx__9273,n__9275)));
} else
{return null;
}
}
}
} else
{return inode__9272;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9276 = this;
var inode__9277 = this;
var idx__9278 = ((hash >>> shift) & 0x01f);
var node__9279 = (this__9276.arr[idx__9278]);
if((node__9279 == null))
{return (new cljs.core.ArrayNode(null,(this__9276.cnt + 1),cljs.core.clone_and_set.call(null,this__9276.arr,idx__9278,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9280 = node__9279.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9280 === node__9279))
{return inode__9277;
} else
{return (new cljs.core.ArrayNode(null,this__9276.cnt,cljs.core.clone_and_set.call(null,this__9276.arr,idx__9278,n__9280)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9281 = this;
var inode__9282 = this;
var idx__9283 = ((hash >>> shift) & 0x01f);
var node__9284 = (this__9281.arr[idx__9283]);
if(!((node__9284 == null)))
{return node__9284.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9289 = (2 * cnt);
var i__9290 = 0;
while(true){
if((i__9290 < lim__9289))
{if(cljs.core.key_test.call(null,key,(arr[i__9290])))
{return i__9290;
} else
{{
var G__9291 = (i__9290 + 2);
i__9290 = G__9291;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9292 = this;
var inode__9293 = this;
if((hash === this__9292.collision_hash))
{var idx__9294 = cljs.core.hash_collision_node_find_index.call(null,this__9292.arr,this__9292.cnt,key);
if((idx__9294 === -1))
{if((this__9292.arr.length > (2 * this__9292.cnt)))
{var editable__9295 = cljs.core.edit_and_set.call(null,inode__9293,edit,(2 * this__9292.cnt),key,((2 * this__9292.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9295.cnt = (editable__9295.cnt + 1);
return editable__9295;
} else
{var len__9296 = this__9292.arr.length;
var new_arr__9297 = cljs.core.make_array.call(null,(len__9296 + 2));
cljs.core.array_copy.call(null,this__9292.arr,0,new_arr__9297,0,len__9296);
(new_arr__9297[len__9296] = key);
(new_arr__9297[(len__9296 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9293.ensure_editable_array(edit,(this__9292.cnt + 1),new_arr__9297);
}
} else
{if(((this__9292.arr[(idx__9294 + 1)]) === val))
{return inode__9293;
} else
{return cljs.core.edit_and_set.call(null,inode__9293,edit,(idx__9294 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9292.collision_hash >>> shift) & 0x01f)),[null,inode__9293,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9298 = this;
var inode__9299 = this;
return cljs.core.create_inode_seq.call(null,this__9298.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9300 = this;
var inode__9301 = this;
var idx__9302 = cljs.core.hash_collision_node_find_index.call(null,this__9300.arr,this__9300.cnt,key);
if((idx__9302 === -1))
{return inode__9301;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9300.cnt === 1))
{return null;
} else
{var editable__9303 = inode__9301.ensure_editable(edit);
var earr__9304 = editable__9303.arr;
(earr__9304[idx__9302] = (earr__9304[((2 * this__9300.cnt) - 2)]));
(earr__9304[(idx__9302 + 1)] = (earr__9304[((2 * this__9300.cnt) - 1)]));
(earr__9304[((2 * this__9300.cnt) - 1)] = null);
(earr__9304[((2 * this__9300.cnt) - 2)] = null);
editable__9303.cnt = (editable__9303.cnt - 1);
return editable__9303;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9305 = this;
var inode__9306 = this;
if((e === this__9305.edit))
{return inode__9306;
} else
{var new_arr__9307 = cljs.core.make_array.call(null,(2 * (this__9305.cnt + 1)));
cljs.core.array_copy.call(null,this__9305.arr,0,new_arr__9307,0,(2 * this__9305.cnt));
return (new cljs.core.HashCollisionNode(e,this__9305.collision_hash,this__9305.cnt,new_arr__9307));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9308 = this;
var inode__9309 = this;
return cljs.core.inode_kv_reduce.call(null,this__9308.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9310 = this;
var inode__9311 = this;
var idx__9312 = cljs.core.hash_collision_node_find_index.call(null,this__9310.arr,this__9310.cnt,key);
if((idx__9312 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9310.arr[idx__9312])))
{return cljs.core.PersistentVector.fromArray([(this__9310.arr[idx__9312]),(this__9310.arr[(idx__9312 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9313 = this;
var inode__9314 = this;
var idx__9315 = cljs.core.hash_collision_node_find_index.call(null,this__9313.arr,this__9313.cnt,key);
if((idx__9315 === -1))
{return inode__9314;
} else
{if((this__9313.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9313.collision_hash,(this__9313.cnt - 1),cljs.core.remove_pair.call(null,this__9313.arr,cljs.core.quot.call(null,idx__9315,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9316 = this;
var inode__9317 = this;
if((hash === this__9316.collision_hash))
{var idx__9318 = cljs.core.hash_collision_node_find_index.call(null,this__9316.arr,this__9316.cnt,key);
if((idx__9318 === -1))
{var len__9319 = this__9316.arr.length;
var new_arr__9320 = cljs.core.make_array.call(null,(len__9319 + 2));
cljs.core.array_copy.call(null,this__9316.arr,0,new_arr__9320,0,len__9319);
(new_arr__9320[len__9319] = key);
(new_arr__9320[(len__9319 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9316.collision_hash,(this__9316.cnt + 1),new_arr__9320));
} else
{if(cljs.core._EQ_.call(null,(this__9316.arr[idx__9318]),val))
{return inode__9317;
} else
{return (new cljs.core.HashCollisionNode(null,this__9316.collision_hash,this__9316.cnt,cljs.core.clone_and_set.call(null,this__9316.arr,(idx__9318 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9316.collision_hash >>> shift) & 0x01f)),[null,inode__9317])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9321 = this;
var inode__9322 = this;
var idx__9323 = cljs.core.hash_collision_node_find_index.call(null,this__9321.arr,this__9321.cnt,key);
if((idx__9323 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9321.arr[idx__9323])))
{return (this__9321.arr[(idx__9323 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9324 = this;
var inode__9325 = this;
if((e === this__9324.edit))
{this__9324.arr = array;
this__9324.cnt = count;
return inode__9325;
} else
{return (new cljs.core.HashCollisionNode(this__9324.edit,this__9324.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9330 = cljs.core.hash.call(null,key1);
if((key1hash__9330 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9330,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9331 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9330,key1,val1,added_leaf_QMARK___9331).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9331);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9332 = cljs.core.hash.call(null,key1);
if((key1hash__9332 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9332,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9333 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9332,key1,val1,added_leaf_QMARK___9333).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9333);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9334 = this;
var h__2220__auto____9335 = this__9334.__hash;
if(!((h__2220__auto____9335 == null)))
{return h__2220__auto____9335;
} else
{var h__2220__auto____9336 = cljs.core.hash_coll.call(null,coll);
this__9334.__hash = h__2220__auto____9336;
return h__2220__auto____9336;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9337 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9338 = this;
var this__9339 = this;
return cljs.core.pr_str.call(null,this__9339);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9340 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9341 = this;
if((this__9341.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9341.nodes[this__9341.i]),(this__9341.nodes[(this__9341.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9341.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9342 = this;
if((this__9342.s == null))
{return cljs.core.create_inode_seq.call(null,this__9342.nodes,(this__9342.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9342.nodes,this__9342.i,cljs.core.next.call(null,this__9342.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9343 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9344 = this;
return (new cljs.core.NodeSeq(meta,this__9344.nodes,this__9344.i,this__9344.s,this__9344.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9345 = this;
return this__9345.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9346 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9346.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9353 = nodes.length;
var j__9354 = i;
while(true){
if((j__9354 < len__9353))
{if(!(((nodes[j__9354]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9354,null,null));
} else
{var temp__3971__auto____9355 = (nodes[(j__9354 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9355))
{var node__9356 = temp__3971__auto____9355;
var temp__3971__auto____9357 = node__9356.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9357))
{var node_seq__9358 = temp__3971__auto____9357;
return (new cljs.core.NodeSeq(null,nodes,(j__9354 + 2),node_seq__9358,null));
} else
{{
var G__9359 = (j__9354 + 2);
j__9354 = G__9359;
continue;
}
}
} else
{{
var G__9360 = (j__9354 + 2);
j__9354 = G__9360;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9361 = this;
var h__2220__auto____9362 = this__9361.__hash;
if(!((h__2220__auto____9362 == null)))
{return h__2220__auto____9362;
} else
{var h__2220__auto____9363 = cljs.core.hash_coll.call(null,coll);
this__9361.__hash = h__2220__auto____9363;
return h__2220__auto____9363;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9364 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9365 = this;
var this__9366 = this;
return cljs.core.pr_str.call(null,this__9366);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9367 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9368 = this;
return cljs.core.first.call(null,this__9368.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9369 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9369.nodes,this__9369.i,cljs.core.next.call(null,this__9369.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9370 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9371 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9371.nodes,this__9371.i,this__9371.s,this__9371.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9372 = this;
return this__9372.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9373 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9373.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9380 = nodes.length;
var j__9381 = i;
while(true){
if((j__9381 < len__9380))
{var temp__3971__auto____9382 = (nodes[j__9381]);
if(cljs.core.truth_(temp__3971__auto____9382))
{var nj__9383 = temp__3971__auto____9382;
var temp__3971__auto____9384 = nj__9383.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9384))
{var ns__9385 = temp__3971__auto____9384;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9381 + 1),ns__9385,null));
} else
{{
var G__9386 = (j__9381 + 1);
j__9381 = G__9386;
continue;
}
}
} else
{{
var G__9387 = (j__9381 + 1);
j__9381 = G__9387;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9390 = this;
return (new cljs.core.TransientHashMap({},this__9390.root,this__9390.cnt,this__9390.has_nil_QMARK_,this__9390.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9391 = this;
var h__2220__auto____9392 = this__9391.__hash;
if(!((h__2220__auto____9392 == null)))
{return h__2220__auto____9392;
} else
{var h__2220__auto____9393 = cljs.core.hash_imap.call(null,coll);
this__9391.__hash = h__2220__auto____9393;
return h__2220__auto____9393;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9394 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9395 = this;
if((k == null))
{if(this__9395.has_nil_QMARK_)
{return this__9395.nil_val;
} else
{return not_found;
}
} else
{if((this__9395.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9395.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9396 = this;
if((k == null))
{if((function (){var and__3822__auto____9397 = this__9396.has_nil_QMARK_;
if(and__3822__auto____9397)
{return (v === this__9396.nil_val);
} else
{return and__3822__auto____9397;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9396.meta,((this__9396.has_nil_QMARK_)?this__9396.cnt:(this__9396.cnt + 1)),this__9396.root,true,v,null));
}
} else
{var added_leaf_QMARK___9398 = (new cljs.core.Box(false));
var new_root__9399 = (((this__9396.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9396.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9398);
if((new_root__9399 === this__9396.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9396.meta,((added_leaf_QMARK___9398.val)?(this__9396.cnt + 1):this__9396.cnt),new_root__9399,this__9396.has_nil_QMARK_,this__9396.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9400 = this;
if((k == null))
{return this__9400.has_nil_QMARK_;
} else
{if((this__9400.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9400.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9423 = null;
var G__9423__2 = (function (this_sym9401,k){
var this__9403 = this;
var this_sym9401__9404 = this;
var coll__9405 = this_sym9401__9404;
return coll__9405.cljs$core$ILookup$_lookup$arity$2(coll__9405,k);
});
var G__9423__3 = (function (this_sym9402,k,not_found){
var this__9403 = this;
var this_sym9402__9406 = this;
var coll__9407 = this_sym9402__9406;
return coll__9407.cljs$core$ILookup$_lookup$arity$3(coll__9407,k,not_found);
});
G__9423 = function(this_sym9402,k,not_found){
switch(arguments.length){
case 2:
return G__9423__2.call(this,this_sym9402,k);
case 3:
return G__9423__3.call(this,this_sym9402,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9423;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9388,args9389){
var this__9408 = this;
return this_sym9388.call.apply(this_sym9388,[this_sym9388].concat(args9389.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9409 = this;
var init__9410 = ((this__9409.has_nil_QMARK_)?f.call(null,init,null,this__9409.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9410))
{return cljs.core.deref.call(null,init__9410);
} else
{if(!((this__9409.root == null)))
{return this__9409.root.kv_reduce(f,init__9410);
} else
{if("\uFDD0'else")
{return init__9410;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9411 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9412 = this;
var this__9413 = this;
return cljs.core.pr_str.call(null,this__9413);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9414 = this;
if((this__9414.cnt > 0))
{var s__9415 = ((!((this__9414.root == null)))?this__9414.root.inode_seq():null);
if(this__9414.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9414.nil_val], true),s__9415);
} else
{return s__9415;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9416 = this;
return this__9416.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9417 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9418 = this;
return (new cljs.core.PersistentHashMap(meta,this__9418.cnt,this__9418.root,this__9418.has_nil_QMARK_,this__9418.nil_val,this__9418.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9419 = this;
return this__9419.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9420 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9420.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9421 = this;
if((k == null))
{if(this__9421.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9421.meta,(this__9421.cnt - 1),this__9421.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9421.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9422 = this__9421.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9422 === this__9421.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9421.meta,(this__9421.cnt - 1),new_root__9422,this__9421.has_nil_QMARK_,this__9421.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9424 = ks.length;
var i__9425 = 0;
var out__9426 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9425 < len__9424))
{{
var G__9427 = (i__9425 + 1);
var G__9428 = cljs.core.assoc_BANG_.call(null,out__9426,(ks[i__9425]),(vs[i__9425]));
i__9425 = G__9427;
out__9426 = G__9428;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9426);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9429 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9430 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9431 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9432 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9433 = this;
if((k == null))
{if(this__9433.has_nil_QMARK_)
{return this__9433.nil_val;
} else
{return null;
}
} else
{if((this__9433.root == null))
{return null;
} else
{return this__9433.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9434 = this;
if((k == null))
{if(this__9434.has_nil_QMARK_)
{return this__9434.nil_val;
} else
{return not_found;
}
} else
{if((this__9434.root == null))
{return not_found;
} else
{return this__9434.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9435 = this;
if(this__9435.edit)
{return this__9435.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9436 = this;
var tcoll__9437 = this;
if(this__9436.edit)
{if((function (){var G__9438__9439 = o;
if(G__9438__9439)
{if((function (){var or__3824__auto____9440 = (G__9438__9439.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9440)
{return or__3824__auto____9440;
} else
{return G__9438__9439.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9438__9439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9438__9439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9438__9439);
}
})())
{return tcoll__9437.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9441 = cljs.core.seq.call(null,o);
var tcoll__9442 = tcoll__9437;
while(true){
var temp__3971__auto____9443 = cljs.core.first.call(null,es__9441);
if(cljs.core.truth_(temp__3971__auto____9443))
{var e__9444 = temp__3971__auto____9443;
{
var G__9455 = cljs.core.next.call(null,es__9441);
var G__9456 = tcoll__9442.assoc_BANG_(cljs.core.key.call(null,e__9444),cljs.core.val.call(null,e__9444));
es__9441 = G__9455;
tcoll__9442 = G__9456;
continue;
}
} else
{return tcoll__9442;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9445 = this;
var tcoll__9446 = this;
if(this__9445.edit)
{if((k == null))
{if((this__9445.nil_val === v))
{} else
{this__9445.nil_val = v;
}
if(this__9445.has_nil_QMARK_)
{} else
{this__9445.count = (this__9445.count + 1);
this__9445.has_nil_QMARK_ = true;
}
return tcoll__9446;
} else
{var added_leaf_QMARK___9447 = (new cljs.core.Box(false));
var node__9448 = (((this__9445.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9445.root).inode_assoc_BANG_(this__9445.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9447);
if((node__9448 === this__9445.root))
{} else
{this__9445.root = node__9448;
}
if(added_leaf_QMARK___9447.val)
{this__9445.count = (this__9445.count + 1);
} else
{}
return tcoll__9446;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9449 = this;
var tcoll__9450 = this;
if(this__9449.edit)
{if((k == null))
{if(this__9449.has_nil_QMARK_)
{this__9449.has_nil_QMARK_ = false;
this__9449.nil_val = null;
this__9449.count = (this__9449.count - 1);
return tcoll__9450;
} else
{return tcoll__9450;
}
} else
{if((this__9449.root == null))
{return tcoll__9450;
} else
{var removed_leaf_QMARK___9451 = (new cljs.core.Box(false));
var node__9452 = this__9449.root.inode_without_BANG_(this__9449.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9451);
if((node__9452 === this__9449.root))
{} else
{this__9449.root = node__9452;
}
if(cljs.core.truth_((removed_leaf_QMARK___9451[0])))
{this__9449.count = (this__9449.count - 1);
} else
{}
return tcoll__9450;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9453 = this;
var tcoll__9454 = this;
if(this__9453.edit)
{this__9453.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9453.count,this__9453.root,this__9453.has_nil_QMARK_,this__9453.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9459 = node;
var stack__9460 = stack;
while(true){
if(!((t__9459 == null)))
{{
var G__9461 = ((ascending_QMARK_)?t__9459.left:t__9459.right);
var G__9462 = cljs.core.conj.call(null,stack__9460,t__9459);
t__9459 = G__9461;
stack__9460 = G__9462;
continue;
}
} else
{return stack__9460;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9463 = this;
var h__2220__auto____9464 = this__9463.__hash;
if(!((h__2220__auto____9464 == null)))
{return h__2220__auto____9464;
} else
{var h__2220__auto____9465 = cljs.core.hash_coll.call(null,coll);
this__9463.__hash = h__2220__auto____9465;
return h__2220__auto____9465;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9466 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9467 = this;
var this__9468 = this;
return cljs.core.pr_str.call(null,this__9468);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9469 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9470 = this;
if((this__9470.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9470.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9471 = this;
return cljs.core.peek.call(null,this__9471.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9472 = this;
var t__9473 = cljs.core.first.call(null,this__9472.stack);
var next_stack__9474 = cljs.core.tree_map_seq_push.call(null,((this__9472.ascending_QMARK_)?t__9473.right:t__9473.left),cljs.core.next.call(null,this__9472.stack),this__9472.ascending_QMARK_);
if(!((next_stack__9474 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9474,this__9472.ascending_QMARK_,(this__9472.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9475 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9476 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9476.stack,this__9476.ascending_QMARK_,this__9476.cnt,this__9476.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9477 = this;
return this__9477.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9479 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9479)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9479;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9481 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9481)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9481;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9485 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9485))
{return cljs.core.deref.call(null,init__9485);
} else
{var init__9486 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9485):init__9485);
if(cljs.core.reduced_QMARK_.call(null,init__9486))
{return cljs.core.deref.call(null,init__9486);
} else
{var init__9487 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9486):init__9486);
if(cljs.core.reduced_QMARK_.call(null,init__9487))
{return cljs.core.deref.call(null,init__9487);
} else
{return init__9487;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9490 = this;
var h__2220__auto____9491 = this__9490.__hash;
if(!((h__2220__auto____9491 == null)))
{return h__2220__auto____9491;
} else
{var h__2220__auto____9492 = cljs.core.hash_coll.call(null,coll);
this__9490.__hash = h__2220__auto____9492;
return h__2220__auto____9492;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9493 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9494 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9495 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9495.key,this__9495.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9543 = null;
var G__9543__2 = (function (this_sym9496,k){
var this__9498 = this;
var this_sym9496__9499 = this;
var node__9500 = this_sym9496__9499;
return node__9500.cljs$core$ILookup$_lookup$arity$2(node__9500,k);
});
var G__9543__3 = (function (this_sym9497,k,not_found){
var this__9498 = this;
var this_sym9497__9501 = this;
var node__9502 = this_sym9497__9501;
return node__9502.cljs$core$ILookup$_lookup$arity$3(node__9502,k,not_found);
});
G__9543 = function(this_sym9497,k,not_found){
switch(arguments.length){
case 2:
return G__9543__2.call(this,this_sym9497,k);
case 3:
return G__9543__3.call(this,this_sym9497,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9543;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9488,args9489){
var this__9503 = this;
return this_sym9488.call.apply(this_sym9488,[this_sym9488].concat(args9489.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9504 = this;
return cljs.core.PersistentVector.fromArray([this__9504.key,this__9504.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9505 = this;
return this__9505.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9506 = this;
return this__9506.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9507 = this;
var node__9508 = this;
return ins.balance_right(node__9508);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9509 = this;
var node__9510 = this;
return (new cljs.core.RedNode(this__9509.key,this__9509.val,this__9509.left,this__9509.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9511 = this;
var node__9512 = this;
return cljs.core.balance_right_del.call(null,this__9511.key,this__9511.val,this__9511.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9513 = this;
var node__9514 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9515 = this;
var node__9516 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9516,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9517 = this;
var node__9518 = this;
return cljs.core.balance_left_del.call(null,this__9517.key,this__9517.val,del,this__9517.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9519 = this;
var node__9520 = this;
return ins.balance_left(node__9520);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9521 = this;
var node__9522 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9522,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9544 = null;
var G__9544__0 = (function (){
var this__9523 = this;
var this__9525 = this;
return cljs.core.pr_str.call(null,this__9525);
});
G__9544 = function(){
switch(arguments.length){
case 0:
return G__9544__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9544;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9526 = this;
var node__9527 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9527,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9528 = this;
var node__9529 = this;
return node__9529;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9530 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9531 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9532 = this;
return cljs.core.list.call(null,this__9532.key,this__9532.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9533 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9534 = this;
return this__9534.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9535 = this;
return cljs.core.PersistentVector.fromArray([this__9535.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9536 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9536.key,this__9536.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9537 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9538 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9538.key,this__9538.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9539 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9540 = this;
if((n === 0))
{return this__9540.key;
} else
{if((n === 1))
{return this__9540.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9541 = this;
if((n === 0))
{return this__9541.key;
} else
{if((n === 1))
{return this__9541.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9542 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9547 = this;
var h__2220__auto____9548 = this__9547.__hash;
if(!((h__2220__auto____9548 == null)))
{return h__2220__auto____9548;
} else
{var h__2220__auto____9549 = cljs.core.hash_coll.call(null,coll);
this__9547.__hash = h__2220__auto____9549;
return h__2220__auto____9549;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9550 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9551 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9552 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9552.key,this__9552.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9600 = null;
var G__9600__2 = (function (this_sym9553,k){
var this__9555 = this;
var this_sym9553__9556 = this;
var node__9557 = this_sym9553__9556;
return node__9557.cljs$core$ILookup$_lookup$arity$2(node__9557,k);
});
var G__9600__3 = (function (this_sym9554,k,not_found){
var this__9555 = this;
var this_sym9554__9558 = this;
var node__9559 = this_sym9554__9558;
return node__9559.cljs$core$ILookup$_lookup$arity$3(node__9559,k,not_found);
});
G__9600 = function(this_sym9554,k,not_found){
switch(arguments.length){
case 2:
return G__9600__2.call(this,this_sym9554,k);
case 3:
return G__9600__3.call(this,this_sym9554,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9600;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9545,args9546){
var this__9560 = this;
return this_sym9545.call.apply(this_sym9545,[this_sym9545].concat(args9546.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9561 = this;
return cljs.core.PersistentVector.fromArray([this__9561.key,this__9561.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9562 = this;
return this__9562.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9563 = this;
return this__9563.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9564 = this;
var node__9565 = this;
return (new cljs.core.RedNode(this__9564.key,this__9564.val,this__9564.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9566 = this;
var node__9567 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9568 = this;
var node__9569 = this;
return (new cljs.core.RedNode(this__9568.key,this__9568.val,this__9568.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9570 = this;
var node__9571 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9572 = this;
var node__9573 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9573,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9574 = this;
var node__9575 = this;
return (new cljs.core.RedNode(this__9574.key,this__9574.val,del,this__9574.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9576 = this;
var node__9577 = this;
return (new cljs.core.RedNode(this__9576.key,this__9576.val,ins,this__9576.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9578 = this;
var node__9579 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9578.left))
{return (new cljs.core.RedNode(this__9578.key,this__9578.val,this__9578.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9578.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9578.right))
{return (new cljs.core.RedNode(this__9578.right.key,this__9578.right.val,(new cljs.core.BlackNode(this__9578.key,this__9578.val,this__9578.left,this__9578.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9578.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9579,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9601 = null;
var G__9601__0 = (function (){
var this__9580 = this;
var this__9582 = this;
return cljs.core.pr_str.call(null,this__9582);
});
G__9601 = function(){
switch(arguments.length){
case 0:
return G__9601__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9601;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9583 = this;
var node__9584 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9583.right))
{return (new cljs.core.RedNode(this__9583.key,this__9583.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9583.left,null)),this__9583.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9583.left))
{return (new cljs.core.RedNode(this__9583.left.key,this__9583.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9583.left.left,null)),(new cljs.core.BlackNode(this__9583.key,this__9583.val,this__9583.left.right,this__9583.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9584,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9585 = this;
var node__9586 = this;
return (new cljs.core.BlackNode(this__9585.key,this__9585.val,this__9585.left,this__9585.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9587 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9588 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9589 = this;
return cljs.core.list.call(null,this__9589.key,this__9589.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9590 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9591 = this;
return this__9591.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9592 = this;
return cljs.core.PersistentVector.fromArray([this__9592.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9593 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9593.key,this__9593.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9594 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9595 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9595.key,this__9595.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9596 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9597 = this;
if((n === 0))
{return this__9597.key;
} else
{if((n === 1))
{return this__9597.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9598 = this;
if((n === 0))
{return this__9598.key;
} else
{if((n === 1))
{return this__9598.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9599 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9605 = comp.call(null,k,tree.key);
if((c__9605 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9605 < 0))
{var ins__9606 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9606 == null)))
{return tree.add_left(ins__9606);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9607 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9607 == null)))
{return tree.add_right(ins__9607);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9610 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9610))
{return (new cljs.core.RedNode(app__9610.key,app__9610.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9610.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9610.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9610,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9611 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9611))
{return (new cljs.core.RedNode(app__9611.key,app__9611.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9611.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9611.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9611,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9617 = comp.call(null,k,tree.key);
if((c__9617 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9617 < 0))
{var del__9618 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9619 = !((del__9618 == null));
if(or__3824__auto____9619)
{return or__3824__auto____9619;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9618,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9618,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9620 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9621 = !((del__9620 == null));
if(or__3824__auto____9621)
{return or__3824__auto____9621;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9620);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9620,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9624 = tree.key;
var c__9625 = comp.call(null,k,tk__9624);
if((c__9625 === 0))
{return tree.replace(tk__9624,v,tree.left,tree.right);
} else
{if((c__9625 < 0))
{return tree.replace(tk__9624,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9624,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9628 = this;
var h__2220__auto____9629 = this__9628.__hash;
if(!((h__2220__auto____9629 == null)))
{return h__2220__auto____9629;
} else
{var h__2220__auto____9630 = cljs.core.hash_imap.call(null,coll);
this__9628.__hash = h__2220__auto____9630;
return h__2220__auto____9630;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9631 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9632 = this;
var n__9633 = coll.entry_at(k);
if(!((n__9633 == null)))
{return n__9633.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9634 = this;
var found__9635 = [null];
var t__9636 = cljs.core.tree_map_add.call(null,this__9634.comp,this__9634.tree,k,v,found__9635);
if((t__9636 == null))
{var found_node__9637 = cljs.core.nth.call(null,found__9635,0);
if(cljs.core._EQ_.call(null,v,found_node__9637.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9634.comp,cljs.core.tree_map_replace.call(null,this__9634.comp,this__9634.tree,k,v),this__9634.cnt,this__9634.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9634.comp,t__9636.blacken(),(this__9634.cnt + 1),this__9634.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9638 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9672 = null;
var G__9672__2 = (function (this_sym9639,k){
var this__9641 = this;
var this_sym9639__9642 = this;
var coll__9643 = this_sym9639__9642;
return coll__9643.cljs$core$ILookup$_lookup$arity$2(coll__9643,k);
});
var G__9672__3 = (function (this_sym9640,k,not_found){
var this__9641 = this;
var this_sym9640__9644 = this;
var coll__9645 = this_sym9640__9644;
return coll__9645.cljs$core$ILookup$_lookup$arity$3(coll__9645,k,not_found);
});
G__9672 = function(this_sym9640,k,not_found){
switch(arguments.length){
case 2:
return G__9672__2.call(this,this_sym9640,k);
case 3:
return G__9672__3.call(this,this_sym9640,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9672;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9626,args9627){
var this__9646 = this;
return this_sym9626.call.apply(this_sym9626,[this_sym9626].concat(args9627.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9647 = this;
if(!((this__9647.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9647.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9648 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9649 = this;
if((this__9649.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9649.tree,false,this__9649.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9650 = this;
var this__9651 = this;
return cljs.core.pr_str.call(null,this__9651);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9652 = this;
var coll__9653 = this;
var t__9654 = this__9652.tree;
while(true){
if(!((t__9654 == null)))
{var c__9655 = this__9652.comp.call(null,k,t__9654.key);
if((c__9655 === 0))
{return t__9654;
} else
{if((c__9655 < 0))
{{
var G__9673 = t__9654.left;
t__9654 = G__9673;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9674 = t__9654.right;
t__9654 = G__9674;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9656 = this;
if((this__9656.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9656.tree,ascending_QMARK_,this__9656.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9657 = this;
if((this__9657.cnt > 0))
{var stack__9658 = null;
var t__9659 = this__9657.tree;
while(true){
if(!((t__9659 == null)))
{var c__9660 = this__9657.comp.call(null,k,t__9659.key);
if((c__9660 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9658,t__9659),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9660 < 0))
{{
var G__9675 = cljs.core.conj.call(null,stack__9658,t__9659);
var G__9676 = t__9659.left;
stack__9658 = G__9675;
t__9659 = G__9676;
continue;
}
} else
{{
var G__9677 = stack__9658;
var G__9678 = t__9659.right;
stack__9658 = G__9677;
t__9659 = G__9678;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9660 > 0))
{{
var G__9679 = cljs.core.conj.call(null,stack__9658,t__9659);
var G__9680 = t__9659.right;
stack__9658 = G__9679;
t__9659 = G__9680;
continue;
}
} else
{{
var G__9681 = stack__9658;
var G__9682 = t__9659.left;
stack__9658 = G__9681;
t__9659 = G__9682;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9658 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9658,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9661 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9662 = this;
return this__9662.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9663 = this;
if((this__9663.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9663.tree,true,this__9663.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9664 = this;
return this__9664.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9665 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9666 = this;
return (new cljs.core.PersistentTreeMap(this__9666.comp,this__9666.tree,this__9666.cnt,meta,this__9666.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9667 = this;
return this__9667.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9668 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9668.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9669 = this;
var found__9670 = [null];
var t__9671 = cljs.core.tree_map_remove.call(null,this__9669.comp,this__9669.tree,k,found__9670);
if((t__9671 == null))
{if((cljs.core.nth.call(null,found__9670,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9669.comp,null,0,this__9669.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9669.comp,t__9671.blacken(),(this__9669.cnt - 1),this__9669.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9685 = cljs.core.seq.call(null,keyvals);
var out__9686 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9685)
{{
var G__9687 = cljs.core.nnext.call(null,in__9685);
var G__9688 = cljs.core.assoc_BANG_.call(null,out__9686,cljs.core.first.call(null,in__9685),cljs.core.second.call(null,in__9685));
in__9685 = G__9687;
out__9686 = G__9688;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9686);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9689){
var keyvals = cljs.core.seq(arglist__9689);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9690){
var keyvals = cljs.core.seq(arglist__9690);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9694 = [];
var obj__9695 = {};
var kvs__9696 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9696)
{ks__9694.push(cljs.core.first.call(null,kvs__9696));
(obj__9695[cljs.core.first.call(null,kvs__9696)] = cljs.core.second.call(null,kvs__9696));
{
var G__9697 = cljs.core.nnext.call(null,kvs__9696);
kvs__9696 = G__9697;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9694,obj__9695);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9698){
var keyvals = cljs.core.seq(arglist__9698);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9701 = cljs.core.seq.call(null,keyvals);
var out__9702 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9701)
{{
var G__9703 = cljs.core.nnext.call(null,in__9701);
var G__9704 = cljs.core.assoc.call(null,out__9702,cljs.core.first.call(null,in__9701),cljs.core.second.call(null,in__9701));
in__9701 = G__9703;
out__9702 = G__9704;
continue;
}
} else
{return out__9702;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9705){
var keyvals = cljs.core.seq(arglist__9705);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9708 = cljs.core.seq.call(null,keyvals);
var out__9709 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9708)
{{
var G__9710 = cljs.core.nnext.call(null,in__9708);
var G__9711 = cljs.core.assoc.call(null,out__9709,cljs.core.first.call(null,in__9708),cljs.core.second.call(null,in__9708));
in__9708 = G__9710;
out__9709 = G__9711;
continue;
}
} else
{return out__9709;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9712){
var comparator = cljs.core.first(arglist__9712);
var keyvals = cljs.core.rest(arglist__9712);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9713_SHARP_,p2__9714_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9716 = p1__9713_SHARP_;
if(cljs.core.truth_(or__3824__auto____9716))
{return or__3824__auto____9716;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9714_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9717){
var maps = cljs.core.seq(arglist__9717);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9725 = (function (m,e){
var k__9723 = cljs.core.first.call(null,e);
var v__9724 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9723))
{return cljs.core.assoc.call(null,m,k__9723,f.call(null,cljs.core._lookup.call(null,m,k__9723,null),v__9724));
} else
{return cljs.core.assoc.call(null,m,k__9723,v__9724);
}
});
var merge2__9727 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9725,(function (){var or__3824__auto____9726 = m1;
if(cljs.core.truth_(or__3824__auto____9726))
{return or__3824__auto____9726;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9727,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9728){
var f = cljs.core.first(arglist__9728);
var maps = cljs.core.rest(arglist__9728);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9733 = cljs.core.ObjMap.EMPTY;
var keys__9734 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9734)
{var key__9735 = cljs.core.first.call(null,keys__9734);
var entry__9736 = cljs.core._lookup.call(null,map,key__9735,"\uFDD0'cljs.core/not-found");
{
var G__9737 = ((cljs.core.not_EQ_.call(null,entry__9736,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9733,key__9735,entry__9736):ret__9733);
var G__9738 = cljs.core.next.call(null,keys__9734);
ret__9733 = G__9737;
keys__9734 = G__9738;
continue;
}
} else
{return ret__9733;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9742 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9742.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9743 = this;
var h__2220__auto____9744 = this__9743.__hash;
if(!((h__2220__auto____9744 == null)))
{return h__2220__auto____9744;
} else
{var h__2220__auto____9745 = cljs.core.hash_iset.call(null,coll);
this__9743.__hash = h__2220__auto____9745;
return h__2220__auto____9745;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9746 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9747 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9747.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9768 = null;
var G__9768__2 = (function (this_sym9748,k){
var this__9750 = this;
var this_sym9748__9751 = this;
var coll__9752 = this_sym9748__9751;
return coll__9752.cljs$core$ILookup$_lookup$arity$2(coll__9752,k);
});
var G__9768__3 = (function (this_sym9749,k,not_found){
var this__9750 = this;
var this_sym9749__9753 = this;
var coll__9754 = this_sym9749__9753;
return coll__9754.cljs$core$ILookup$_lookup$arity$3(coll__9754,k,not_found);
});
G__9768 = function(this_sym9749,k,not_found){
switch(arguments.length){
case 2:
return G__9768__2.call(this,this_sym9749,k);
case 3:
return G__9768__3.call(this,this_sym9749,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9768;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9740,args9741){
var this__9755 = this;
return this_sym9740.call.apply(this_sym9740,[this_sym9740].concat(args9741.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9756 = this;
return (new cljs.core.PersistentHashSet(this__9756.meta,cljs.core.assoc.call(null,this__9756.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9757 = this;
var this__9758 = this;
return cljs.core.pr_str.call(null,this__9758);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9759 = this;
return cljs.core.keys.call(null,this__9759.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9760 = this;
return (new cljs.core.PersistentHashSet(this__9760.meta,cljs.core.dissoc.call(null,this__9760.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9761 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9762 = this;
var and__3822__auto____9763 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9763)
{var and__3822__auto____9764 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9764)
{return cljs.core.every_QMARK_.call(null,(function (p1__9739_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9739_SHARP_);
}),other);
} else
{return and__3822__auto____9764;
}
} else
{return and__3822__auto____9763;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9765 = this;
return (new cljs.core.PersistentHashSet(meta,this__9765.hash_map,this__9765.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9766 = this;
return this__9766.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9767 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9767.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9769 = cljs.core.count.call(null,items);
var i__9770 = 0;
var out__9771 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9770 < len__9769))
{{
var G__9772 = (i__9770 + 1);
var G__9773 = cljs.core.conj_BANG_.call(null,out__9771,(items[i__9770]));
i__9770 = G__9772;
out__9771 = G__9773;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9771);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9791 = null;
var G__9791__2 = (function (this_sym9777,k){
var this__9779 = this;
var this_sym9777__9780 = this;
var tcoll__9781 = this_sym9777__9780;
if((cljs.core._lookup.call(null,this__9779.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9791__3 = (function (this_sym9778,k,not_found){
var this__9779 = this;
var this_sym9778__9782 = this;
var tcoll__9783 = this_sym9778__9782;
if((cljs.core._lookup.call(null,this__9779.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9791 = function(this_sym9778,k,not_found){
switch(arguments.length){
case 2:
return G__9791__2.call(this,this_sym9778,k);
case 3:
return G__9791__3.call(this,this_sym9778,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9791;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9775,args9776){
var this__9784 = this;
return this_sym9775.call.apply(this_sym9775,[this_sym9775].concat(args9776.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9785 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9786 = this;
if((cljs.core._lookup.call(null,this__9786.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9787 = this;
return cljs.core.count.call(null,this__9787.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9788 = this;
this__9788.transient_map = cljs.core.dissoc_BANG_.call(null,this__9788.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9789 = this;
this__9789.transient_map = cljs.core.assoc_BANG_.call(null,this__9789.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9790 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9790.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9794 = this;
var h__2220__auto____9795 = this__9794.__hash;
if(!((h__2220__auto____9795 == null)))
{return h__2220__auto____9795;
} else
{var h__2220__auto____9796 = cljs.core.hash_iset.call(null,coll);
this__9794.__hash = h__2220__auto____9796;
return h__2220__auto____9796;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9797 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9798 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9798.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9824 = null;
var G__9824__2 = (function (this_sym9799,k){
var this__9801 = this;
var this_sym9799__9802 = this;
var coll__9803 = this_sym9799__9802;
return coll__9803.cljs$core$ILookup$_lookup$arity$2(coll__9803,k);
});
var G__9824__3 = (function (this_sym9800,k,not_found){
var this__9801 = this;
var this_sym9800__9804 = this;
var coll__9805 = this_sym9800__9804;
return coll__9805.cljs$core$ILookup$_lookup$arity$3(coll__9805,k,not_found);
});
G__9824 = function(this_sym9800,k,not_found){
switch(arguments.length){
case 2:
return G__9824__2.call(this,this_sym9800,k);
case 3:
return G__9824__3.call(this,this_sym9800,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9824;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9792,args9793){
var this__9806 = this;
return this_sym9792.call.apply(this_sym9792,[this_sym9792].concat(args9793.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9807 = this;
return (new cljs.core.PersistentTreeSet(this__9807.meta,cljs.core.assoc.call(null,this__9807.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9808 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9808.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9809 = this;
var this__9810 = this;
return cljs.core.pr_str.call(null,this__9810);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9811 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9811.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9812 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9812.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9813 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9814 = this;
return cljs.core._comparator.call(null,this__9814.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9815 = this;
return cljs.core.keys.call(null,this__9815.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9816 = this;
return (new cljs.core.PersistentTreeSet(this__9816.meta,cljs.core.dissoc.call(null,this__9816.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9817 = this;
return cljs.core.count.call(null,this__9817.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9818 = this;
var and__3822__auto____9819 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9819)
{var and__3822__auto____9820 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9820)
{return cljs.core.every_QMARK_.call(null,(function (p1__9774_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9774_SHARP_);
}),other);
} else
{return and__3822__auto____9820;
}
} else
{return and__3822__auto____9819;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9821 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9821.tree_map,this__9821.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9822 = this;
return this__9822.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9823 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9823.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9829__delegate = function (keys){
var in__9827 = cljs.core.seq.call(null,keys);
var out__9828 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9827))
{{
var G__9830 = cljs.core.next.call(null,in__9827);
var G__9831 = cljs.core.conj_BANG_.call(null,out__9828,cljs.core.first.call(null,in__9827));
in__9827 = G__9830;
out__9828 = G__9831;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9828);
}
break;
}
};
var G__9829 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9829__delegate.call(this, keys);
};
G__9829.cljs$lang$maxFixedArity = 0;
G__9829.cljs$lang$applyTo = (function (arglist__9832){
var keys = cljs.core.seq(arglist__9832);;
return G__9829__delegate(keys);
});
G__9829.cljs$lang$arity$variadic = G__9829__delegate;
return G__9829;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9833){
var keys = cljs.core.seq(arglist__9833);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9835){
var comparator = cljs.core.first(arglist__9835);
var keys = cljs.core.rest(arglist__9835);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9841 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9842 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9842))
{var e__9843 = temp__3971__auto____9842;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9843));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9841,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9834_SHARP_){
var temp__3971__auto____9844 = cljs.core.find.call(null,smap,p1__9834_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9844))
{var e__9845 = temp__3971__auto____9844;
return cljs.core.second.call(null,e__9845);
} else
{return p1__9834_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9875 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9868,seen){
while(true){
var vec__9869__9870 = p__9868;
var f__9871 = cljs.core.nth.call(null,vec__9869__9870,0,null);
var xs__9872 = vec__9869__9870;
var temp__3974__auto____9873 = cljs.core.seq.call(null,xs__9872);
if(temp__3974__auto____9873)
{var s__9874 = temp__3974__auto____9873;
if(cljs.core.contains_QMARK_.call(null,seen,f__9871))
{{
var G__9876 = cljs.core.rest.call(null,s__9874);
var G__9877 = seen;
p__9868 = G__9876;
seen = G__9877;
continue;
}
} else
{return cljs.core.cons.call(null,f__9871,step.call(null,cljs.core.rest.call(null,s__9874),cljs.core.conj.call(null,seen,f__9871)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9875.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9880 = cljs.core.PersistentVector.EMPTY;
var s__9881 = s;
while(true){
if(cljs.core.next.call(null,s__9881))
{{
var G__9882 = cljs.core.conj.call(null,ret__9880,cljs.core.first.call(null,s__9881));
var G__9883 = cljs.core.next.call(null,s__9881);
ret__9880 = G__9882;
s__9881 = G__9883;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9880);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9886 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9886)
{return or__3824__auto____9886;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9887 = x.lastIndexOf("/");
if((i__9887 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9887 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9890 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9890)
{return or__3824__auto____9890;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9891 = x.lastIndexOf("/");
if((i__9891 > -1))
{return cljs.core.subs.call(null,x,2,i__9891);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9898 = cljs.core.ObjMap.EMPTY;
var ks__9899 = cljs.core.seq.call(null,keys);
var vs__9900 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9901 = ks__9899;
if(and__3822__auto____9901)
{return vs__9900;
} else
{return and__3822__auto____9901;
}
})())
{{
var G__9902 = cljs.core.assoc.call(null,map__9898,cljs.core.first.call(null,ks__9899),cljs.core.first.call(null,vs__9900));
var G__9903 = cljs.core.next.call(null,ks__9899);
var G__9904 = cljs.core.next.call(null,vs__9900);
map__9898 = G__9902;
ks__9899 = G__9903;
vs__9900 = G__9904;
continue;
}
} else
{return map__9898;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9907__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9892_SHARP_,p2__9893_SHARP_){
return max_key.call(null,k,p1__9892_SHARP_,p2__9893_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9907 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9907__delegate.call(this, k, x, y, more);
};
G__9907.cljs$lang$maxFixedArity = 3;
G__9907.cljs$lang$applyTo = (function (arglist__9908){
var k = cljs.core.first(arglist__9908);
var x = cljs.core.first(cljs.core.next(arglist__9908));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9908)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9908)));
return G__9907__delegate(k, x, y, more);
});
G__9907.cljs$lang$arity$variadic = G__9907__delegate;
return G__9907;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9909__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9905_SHARP_,p2__9906_SHARP_){
return min_key.call(null,k,p1__9905_SHARP_,p2__9906_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9909 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9909__delegate.call(this, k, x, y, more);
};
G__9909.cljs$lang$maxFixedArity = 3;
G__9909.cljs$lang$applyTo = (function (arglist__9910){
var k = cljs.core.first(arglist__9910);
var x = cljs.core.first(cljs.core.next(arglist__9910));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9910)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9910)));
return G__9909__delegate(k, x, y, more);
});
G__9909.cljs$lang$arity$variadic = G__9909__delegate;
return G__9909;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9913 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9913)
{var s__9914 = temp__3974__auto____9913;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9914),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9914)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9917 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9917)
{var s__9918 = temp__3974__auto____9917;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9918))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9918),take_while.call(null,pred,cljs.core.rest.call(null,s__9918)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9920 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9920.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9932 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9933 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9933))
{var vec__9934__9935 = temp__3974__auto____9933;
var e__9936 = cljs.core.nth.call(null,vec__9934__9935,0,null);
var s__9937 = vec__9934__9935;
if(cljs.core.truth_(include__9932.call(null,e__9936)))
{return s__9937;
} else
{return cljs.core.next.call(null,s__9937);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9932,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9938 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9938))
{var vec__9939__9940 = temp__3974__auto____9938;
var e__9941 = cljs.core.nth.call(null,vec__9939__9940,0,null);
var s__9942 = vec__9939__9940;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9941))?s__9942:cljs.core.next.call(null,s__9942)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9954 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9955 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9955))
{var vec__9956__9957 = temp__3974__auto____9955;
var e__9958 = cljs.core.nth.call(null,vec__9956__9957,0,null);
var s__9959 = vec__9956__9957;
if(cljs.core.truth_(include__9954.call(null,e__9958)))
{return s__9959;
} else
{return cljs.core.next.call(null,s__9959);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9954,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9960 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9960))
{var vec__9961__9962 = temp__3974__auto____9960;
var e__9963 = cljs.core.nth.call(null,vec__9961__9962,0,null);
var s__9964 = vec__9961__9962;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9963))?s__9964:cljs.core.next.call(null,s__9964)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9965 = this;
var h__2220__auto____9966 = this__9965.__hash;
if(!((h__2220__auto____9966 == null)))
{return h__2220__auto____9966;
} else
{var h__2220__auto____9967 = cljs.core.hash_coll.call(null,rng);
this__9965.__hash = h__2220__auto____9967;
return h__2220__auto____9967;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9968 = this;
if((this__9968.step > 0))
{if(((this__9968.start + this__9968.step) < this__9968.end))
{return (new cljs.core.Range(this__9968.meta,(this__9968.start + this__9968.step),this__9968.end,this__9968.step,null));
} else
{return null;
}
} else
{if(((this__9968.start + this__9968.step) > this__9968.end))
{return (new cljs.core.Range(this__9968.meta,(this__9968.start + this__9968.step),this__9968.end,this__9968.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9969 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9970 = this;
var this__9971 = this;
return cljs.core.pr_str.call(null,this__9971);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9972 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9973 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9974 = this;
if((this__9974.step > 0))
{if((this__9974.start < this__9974.end))
{return rng;
} else
{return null;
}
} else
{if((this__9974.start > this__9974.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9975 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9975.end - this__9975.start) / this__9975.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9976 = this;
return this__9976.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9977 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9977.meta,(this__9977.start + this__9977.step),this__9977.end,this__9977.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9978 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9979 = this;
return (new cljs.core.Range(meta,this__9979.start,this__9979.end,this__9979.step,this__9979.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9980 = this;
return this__9980.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9981 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9981.start + (n * this__9981.step));
} else
{if((function (){var and__3822__auto____9982 = (this__9981.start > this__9981.end);
if(and__3822__auto____9982)
{return (this__9981.step === 0);
} else
{return and__3822__auto____9982;
}
})())
{return this__9981.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9983 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9983.start + (n * this__9983.step));
} else
{if((function (){var and__3822__auto____9984 = (this__9983.start > this__9983.end);
if(and__3822__auto____9984)
{return (this__9983.step === 0);
} else
{return and__3822__auto____9984;
}
})())
{return this__9983.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9985 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9985.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9988 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9988)
{var s__9989 = temp__3974__auto____9988;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9989),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9989)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9996 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9996)
{var s__9997 = temp__3974__auto____9996;
var fst__9998 = cljs.core.first.call(null,s__9997);
var fv__9999 = f.call(null,fst__9998);
var run__10000 = cljs.core.cons.call(null,fst__9998,cljs.core.take_while.call(null,(function (p1__9990_SHARP_){
return cljs.core._EQ_.call(null,fv__9999,f.call(null,p1__9990_SHARP_));
}),cljs.core.next.call(null,s__9997)));
return cljs.core.cons.call(null,run__10000,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10000),s__9997))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10015 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10015)
{var s__10016 = temp__3971__auto____10015;
return reductions.call(null,f,cljs.core.first.call(null,s__10016),cljs.core.rest.call(null,s__10016));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10017 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10017)
{var s__10018 = temp__3974__auto____10017;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10018)),cljs.core.rest.call(null,s__10018));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10021 = null;
var G__10021__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10021__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10021__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10021__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10021__4 = (function() { 
var G__10022__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10022__delegate.call(this, x, y, z, args);
};
G__10022.cljs$lang$maxFixedArity = 3;
G__10022.cljs$lang$applyTo = (function (arglist__10023){
var x = cljs.core.first(arglist__10023);
var y = cljs.core.first(cljs.core.next(arglist__10023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10023)));
return G__10022__delegate(x, y, z, args);
});
G__10022.cljs$lang$arity$variadic = G__10022__delegate;
return G__10022;
})()
;
G__10021 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10021__0.call(this);
case 1:
return G__10021__1.call(this,x);
case 2:
return G__10021__2.call(this,x,y);
case 3:
return G__10021__3.call(this,x,y,z);
default:
return G__10021__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10021.cljs$lang$maxFixedArity = 3;
G__10021.cljs$lang$applyTo = G__10021__4.cljs$lang$applyTo;
return G__10021;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10024 = null;
var G__10024__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10024__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10024__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10024__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10024__4 = (function() { 
var G__10025__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10025 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10025__delegate.call(this, x, y, z, args);
};
G__10025.cljs$lang$maxFixedArity = 3;
G__10025.cljs$lang$applyTo = (function (arglist__10026){
var x = cljs.core.first(arglist__10026);
var y = cljs.core.first(cljs.core.next(arglist__10026));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10026)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10026)));
return G__10025__delegate(x, y, z, args);
});
G__10025.cljs$lang$arity$variadic = G__10025__delegate;
return G__10025;
})()
;
G__10024 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10024__0.call(this);
case 1:
return G__10024__1.call(this,x);
case 2:
return G__10024__2.call(this,x,y);
case 3:
return G__10024__3.call(this,x,y,z);
default:
return G__10024__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10024.cljs$lang$maxFixedArity = 3;
G__10024.cljs$lang$applyTo = G__10024__4.cljs$lang$applyTo;
return G__10024;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10027 = null;
var G__10027__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10027__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10027__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10027__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10027__4 = (function() { 
var G__10028__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10028 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10028__delegate.call(this, x, y, z, args);
};
G__10028.cljs$lang$maxFixedArity = 3;
G__10028.cljs$lang$applyTo = (function (arglist__10029){
var x = cljs.core.first(arglist__10029);
var y = cljs.core.first(cljs.core.next(arglist__10029));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10029)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10029)));
return G__10028__delegate(x, y, z, args);
});
G__10028.cljs$lang$arity$variadic = G__10028__delegate;
return G__10028;
})()
;
G__10027 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10027__0.call(this);
case 1:
return G__10027__1.call(this,x);
case 2:
return G__10027__2.call(this,x,y);
case 3:
return G__10027__3.call(this,x,y,z);
default:
return G__10027__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10027.cljs$lang$maxFixedArity = 3;
G__10027.cljs$lang$applyTo = G__10027__4.cljs$lang$applyTo;
return G__10027;
})()
});
var juxt__4 = (function() { 
var G__10030__delegate = function (f,g,h,fs){
var fs__10020 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10031 = null;
var G__10031__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10001_SHARP_,p2__10002_SHARP_){
return cljs.core.conj.call(null,p1__10001_SHARP_,p2__10002_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10020);
});
var G__10031__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10003_SHARP_,p2__10004_SHARP_){
return cljs.core.conj.call(null,p1__10003_SHARP_,p2__10004_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10020);
});
var G__10031__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10005_SHARP_,p2__10006_SHARP_){
return cljs.core.conj.call(null,p1__10005_SHARP_,p2__10006_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10020);
});
var G__10031__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10007_SHARP_,p2__10008_SHARP_){
return cljs.core.conj.call(null,p1__10007_SHARP_,p2__10008_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10020);
});
var G__10031__4 = (function() { 
var G__10032__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10009_SHARP_,p2__10010_SHARP_){
return cljs.core.conj.call(null,p1__10009_SHARP_,cljs.core.apply.call(null,p2__10010_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10020);
};
var G__10032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10032__delegate.call(this, x, y, z, args);
};
G__10032.cljs$lang$maxFixedArity = 3;
G__10032.cljs$lang$applyTo = (function (arglist__10033){
var x = cljs.core.first(arglist__10033);
var y = cljs.core.first(cljs.core.next(arglist__10033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10033)));
return G__10032__delegate(x, y, z, args);
});
G__10032.cljs$lang$arity$variadic = G__10032__delegate;
return G__10032;
})()
;
G__10031 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10031__0.call(this);
case 1:
return G__10031__1.call(this,x);
case 2:
return G__10031__2.call(this,x,y);
case 3:
return G__10031__3.call(this,x,y,z);
default:
return G__10031__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10031.cljs$lang$maxFixedArity = 3;
G__10031.cljs$lang$applyTo = G__10031__4.cljs$lang$applyTo;
return G__10031;
})()
};
var G__10030 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10030__delegate.call(this, f, g, h, fs);
};
G__10030.cljs$lang$maxFixedArity = 3;
G__10030.cljs$lang$applyTo = (function (arglist__10034){
var f = cljs.core.first(arglist__10034);
var g = cljs.core.first(cljs.core.next(arglist__10034));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10034)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10034)));
return G__10030__delegate(f, g, h, fs);
});
G__10030.cljs$lang$arity$variadic = G__10030__delegate;
return G__10030;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__10037 = cljs.core.next.call(null,coll);
coll = G__10037;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10036 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10036)
{return (n > 0);
} else
{return and__3822__auto____10036;
}
})()))
{{
var G__10038 = (n - 1);
var G__10039 = cljs.core.next.call(null,coll);
n = G__10038;
coll = G__10039;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10041 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10041),s))
{if((cljs.core.count.call(null,matches__10041) === 1))
{return cljs.core.first.call(null,matches__10041);
} else
{return cljs.core.vec.call(null,matches__10041);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10043 = re.exec(s);
if((matches__10043 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10043) === 1))
{return cljs.core.first.call(null,matches__10043);
} else
{return cljs.core.vec.call(null,matches__10043);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10048 = cljs.core.re_find.call(null,re,s);
var match_idx__10049 = s.search(re);
var match_str__10050 = ((cljs.core.coll_QMARK_.call(null,match_data__10048))?cljs.core.first.call(null,match_data__10048):match_data__10048);
var post_match__10051 = cljs.core.subs.call(null,s,(match_idx__10049 + cljs.core.count.call(null,match_str__10050)));
if(cljs.core.truth_(match_data__10048))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10048,re_seq.call(null,re,post_match__10051));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10058__10059 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10060 = cljs.core.nth.call(null,vec__10058__10059,0,null);
var flags__10061 = cljs.core.nth.call(null,vec__10058__10059,1,null);
var pattern__10062 = cljs.core.nth.call(null,vec__10058__10059,2,null);
return (new RegExp(pattern__10062,flags__10061));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10052_SHARP_){
return print_one.call(null,p1__10052_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10072 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10072))
{var and__3822__auto____10076 = (function (){var G__10073__10074 = obj;
if(G__10073__10074)
{if((function (){var or__3824__auto____10075 = (G__10073__10074.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10075)
{return or__3824__auto____10075;
} else
{return G__10073__10074.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10073__10074.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10073__10074);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10073__10074);
}
})();
if(cljs.core.truth_(and__3822__auto____10076))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10076;
}
} else
{return and__3822__auto____10072;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10077 = !((obj == null));
if(and__3822__auto____10077)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10077;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10078__10079 = obj;
if(G__10078__10079)
{if((function (){var or__3824__auto____10080 = (G__10078__10079.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10080)
{return or__3824__auto____10080;
} else
{return G__10078__10079.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10078__10079.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10078__10079);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10078__10079);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10100 = (new goog.string.StringBuffer());
var G__10101__10102 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10101__10102)
{var string__10103 = cljs.core.first.call(null,G__10101__10102);
var G__10101__10104 = G__10101__10102;
while(true){
sb__10100.append(string__10103);
var temp__3974__auto____10105 = cljs.core.next.call(null,G__10101__10104);
if(temp__3974__auto____10105)
{var G__10101__10106 = temp__3974__auto____10105;
{
var G__10119 = cljs.core.first.call(null,G__10101__10106);
var G__10120 = G__10101__10106;
string__10103 = G__10119;
G__10101__10104 = G__10120;
continue;
}
} else
{}
break;
}
} else
{}
var G__10107__10108 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10107__10108)
{var obj__10109 = cljs.core.first.call(null,G__10107__10108);
var G__10107__10110 = G__10107__10108;
while(true){
sb__10100.append(" ");
var G__10111__10112 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10109,opts));
if(G__10111__10112)
{var string__10113 = cljs.core.first.call(null,G__10111__10112);
var G__10111__10114 = G__10111__10112;
while(true){
sb__10100.append(string__10113);
var temp__3974__auto____10115 = cljs.core.next.call(null,G__10111__10114);
if(temp__3974__auto____10115)
{var G__10111__10116 = temp__3974__auto____10115;
{
var G__10121 = cljs.core.first.call(null,G__10111__10116);
var G__10122 = G__10111__10116;
string__10113 = G__10121;
G__10111__10114 = G__10122;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10117 = cljs.core.next.call(null,G__10107__10110);
if(temp__3974__auto____10117)
{var G__10107__10118 = temp__3974__auto____10117;
{
var G__10123 = cljs.core.first.call(null,G__10107__10118);
var G__10124 = G__10107__10118;
obj__10109 = G__10123;
G__10107__10110 = G__10124;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10100;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10126 = cljs.core.pr_sb.call(null,objs,opts);
sb__10126.append("\n");
return [cljs.core.str(sb__10126)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10145__10146 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10145__10146)
{var string__10147 = cljs.core.first.call(null,G__10145__10146);
var G__10145__10148 = G__10145__10146;
while(true){
cljs.core.string_print.call(null,string__10147);
var temp__3974__auto____10149 = cljs.core.next.call(null,G__10145__10148);
if(temp__3974__auto____10149)
{var G__10145__10150 = temp__3974__auto____10149;
{
var G__10163 = cljs.core.first.call(null,G__10145__10150);
var G__10164 = G__10145__10150;
string__10147 = G__10163;
G__10145__10148 = G__10164;
continue;
}
} else
{}
break;
}
} else
{}
var G__10151__10152 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10151__10152)
{var obj__10153 = cljs.core.first.call(null,G__10151__10152);
var G__10151__10154 = G__10151__10152;
while(true){
cljs.core.string_print.call(null," ");
var G__10155__10156 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10153,opts));
if(G__10155__10156)
{var string__10157 = cljs.core.first.call(null,G__10155__10156);
var G__10155__10158 = G__10155__10156;
while(true){
cljs.core.string_print.call(null,string__10157);
var temp__3974__auto____10159 = cljs.core.next.call(null,G__10155__10158);
if(temp__3974__auto____10159)
{var G__10155__10160 = temp__3974__auto____10159;
{
var G__10165 = cljs.core.first.call(null,G__10155__10160);
var G__10166 = G__10155__10160;
string__10157 = G__10165;
G__10155__10158 = G__10166;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10161 = cljs.core.next.call(null,G__10151__10154);
if(temp__3974__auto____10161)
{var G__10151__10162 = temp__3974__auto____10161;
{
var G__10167 = cljs.core.first.call(null,G__10151__10162);
var G__10168 = G__10151__10162;
obj__10153 = G__10167;
G__10151__10154 = G__10168;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10169){
var objs = cljs.core.seq(arglist__10169);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10170){
var objs = cljs.core.seq(arglist__10170);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10171){
var objs = cljs.core.seq(arglist__10171);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10172){
var objs = cljs.core.seq(arglist__10172);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10173){
var objs = cljs.core.seq(arglist__10173);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10174){
var objs = cljs.core.seq(arglist__10174);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10175){
var objs = cljs.core.seq(arglist__10175);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10176){
var objs = cljs.core.seq(arglist__10176);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10177){
var fmt = cljs.core.first(arglist__10177);
var args = cljs.core.rest(arglist__10177);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10178 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10178,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10179 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10179,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10180 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10180,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10181 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10181))
{var nspc__10182 = temp__3974__auto____10181;
return [cljs.core.str(nspc__10182),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10183 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10183))
{var nspc__10184 = temp__3974__auto____10183;
return [cljs.core.str(nspc__10184),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10185 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10185,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10187 = (function (n,len){
var ns__10186 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10186) < len))
{{
var G__10189 = [cljs.core.str("0"),cljs.core.str(ns__10186)].join('');
ns__10186 = G__10189;
continue;
}
} else
{return ns__10186;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10187.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10187.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10187.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10187.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10187.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10187.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10188 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10188,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10190 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10191 = this;
var G__10192__10193 = cljs.core.seq.call(null,this__10191.watches);
if(G__10192__10193)
{var G__10195__10197 = cljs.core.first.call(null,G__10192__10193);
var vec__10196__10198 = G__10195__10197;
var key__10199 = cljs.core.nth.call(null,vec__10196__10198,0,null);
var f__10200 = cljs.core.nth.call(null,vec__10196__10198,1,null);
var G__10192__10201 = G__10192__10193;
var G__10195__10202 = G__10195__10197;
var G__10192__10203 = G__10192__10201;
while(true){
var vec__10204__10205 = G__10195__10202;
var key__10206 = cljs.core.nth.call(null,vec__10204__10205,0,null);
var f__10207 = cljs.core.nth.call(null,vec__10204__10205,1,null);
var G__10192__10208 = G__10192__10203;
f__10207.call(null,key__10206,this$,oldval,newval);
var temp__3974__auto____10209 = cljs.core.next.call(null,G__10192__10208);
if(temp__3974__auto____10209)
{var G__10192__10210 = temp__3974__auto____10209;
{
var G__10217 = cljs.core.first.call(null,G__10192__10210);
var G__10218 = G__10192__10210;
G__10195__10202 = G__10217;
G__10192__10203 = G__10218;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10211 = this;
return this$.watches = cljs.core.assoc.call(null,this__10211.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10212 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10212.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10213 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10213.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10214 = this;
return this__10214.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10215 = this;
return this__10215.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10216 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10230__delegate = function (x,p__10219){
var map__10225__10226 = p__10219;
var map__10225__10227 = ((cljs.core.seq_QMARK_.call(null,map__10225__10226))?cljs.core.apply.call(null,cljs.core.hash_map,map__10225__10226):map__10225__10226);
var validator__10228 = cljs.core._lookup.call(null,map__10225__10227,"\uFDD0'validator",null);
var meta__10229 = cljs.core._lookup.call(null,map__10225__10227,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10229,validator__10228,null));
};
var G__10230 = function (x,var_args){
var p__10219 = null;
if (goog.isDef(var_args)) {
  p__10219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10230__delegate.call(this, x, p__10219);
};
G__10230.cljs$lang$maxFixedArity = 1;
G__10230.cljs$lang$applyTo = (function (arglist__10231){
var x = cljs.core.first(arglist__10231);
var p__10219 = cljs.core.rest(arglist__10231);
return G__10230__delegate(x, p__10219);
});
G__10230.cljs$lang$arity$variadic = G__10230__delegate;
return G__10230;
})()
;
atom = function(x,var_args){
var p__10219 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10235 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10235))
{var validate__10236 = temp__3974__auto____10235;
if(cljs.core.truth_(validate__10236.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10237 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10237,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10238__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10238 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10238__delegate.call(this, a, f, x, y, z, more);
};
G__10238.cljs$lang$maxFixedArity = 5;
G__10238.cljs$lang$applyTo = (function (arglist__10239){
var a = cljs.core.first(arglist__10239);
var f = cljs.core.first(cljs.core.next(arglist__10239));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10239)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10239))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10239)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10239)))));
return G__10238__delegate(a, f, x, y, z, more);
});
G__10238.cljs$lang$arity$variadic = G__10238__delegate;
return G__10238;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10240){
var iref = cljs.core.first(arglist__10240);
var f = cljs.core.first(cljs.core.next(arglist__10240));
var args = cljs.core.rest(cljs.core.next(arglist__10240));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10241 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10241.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10242 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10242.state,(function (p__10243){
var map__10244__10245 = p__10243;
var map__10244__10246 = ((cljs.core.seq_QMARK_.call(null,map__10244__10245))?cljs.core.apply.call(null,cljs.core.hash_map,map__10244__10245):map__10244__10245);
var curr_state__10247 = map__10244__10246;
var done__10248 = cljs.core._lookup.call(null,map__10244__10246,"\uFDD0'done",null);
if(cljs.core.truth_(done__10248))
{return curr_state__10247;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10242.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10269__10270 = options;
var map__10269__10271 = ((cljs.core.seq_QMARK_.call(null,map__10269__10270))?cljs.core.apply.call(null,cljs.core.hash_map,map__10269__10270):map__10269__10270);
var keywordize_keys__10272 = cljs.core._lookup.call(null,map__10269__10271,"\uFDD0'keywordize-keys",null);
var keyfn__10273 = (cljs.core.truth_(keywordize_keys__10272)?cljs.core.keyword:cljs.core.str);
var f__10288 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2490__auto____10287 = (function iter__10281(s__10282){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10282__10285 = s__10282;
while(true){
if(cljs.core.seq.call(null,s__10282__10285))
{var k__10286 = cljs.core.first.call(null,s__10282__10285);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10273.call(null,k__10286),thisfn.call(null,(x[k__10286]))], true),iter__10281.call(null,cljs.core.rest.call(null,s__10282__10285)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2490__auto____10287.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__10288.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10289){
var x = cljs.core.first(arglist__10289);
var options = cljs.core.rest(arglist__10289);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10294 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10298__delegate = function (args){
var temp__3971__auto____10295 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10294),args,null);
if(cljs.core.truth_(temp__3971__auto____10295))
{var v__10296 = temp__3971__auto____10295;
return v__10296;
} else
{var ret__10297 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10294,cljs.core.assoc,args,ret__10297);
return ret__10297;
}
};
var G__10298 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10298__delegate.call(this, args);
};
G__10298.cljs$lang$maxFixedArity = 0;
G__10298.cljs$lang$applyTo = (function (arglist__10299){
var args = cljs.core.seq(arglist__10299);;
return G__10298__delegate(args);
});
G__10298.cljs$lang$arity$variadic = G__10298__delegate;
return G__10298;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10301 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10301))
{{
var G__10302 = ret__10301;
f = G__10302;
continue;
}
} else
{return ret__10301;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10303__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10303 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10303__delegate.call(this, f, args);
};
G__10303.cljs$lang$maxFixedArity = 1;
G__10303.cljs$lang$applyTo = (function (arglist__10304){
var f = cljs.core.first(arglist__10304);
var args = cljs.core.rest(arglist__10304);
return G__10303__delegate(f, args);
});
G__10303.cljs$lang$arity$variadic = G__10303__delegate;
return G__10303;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10306 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10306,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10306,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10315 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10315)
{return or__3824__auto____10315;
} else
{var or__3824__auto____10316 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10316)
{return or__3824__auto____10316;
} else
{var and__3822__auto____10317 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10317)
{var and__3822__auto____10318 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10318)
{var and__3822__auto____10319 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10319)
{var ret__10320 = true;
var i__10321 = 0;
while(true){
if((function (){var or__3824__auto____10322 = cljs.core.not.call(null,ret__10320);
if(or__3824__auto____10322)
{return or__3824__auto____10322;
} else
{return (i__10321 === cljs.core.count.call(null,parent));
}
})())
{return ret__10320;
} else
{{
var G__10323 = isa_QMARK_.call(null,h,child.call(null,i__10321),parent.call(null,i__10321));
var G__10324 = (i__10321 + 1);
ret__10320 = G__10323;
i__10321 = G__10324;
continue;
}
}
break;
}
} else
{return and__3822__auto____10319;
}
} else
{return and__3822__auto____10318;
}
} else
{return and__3822__auto____10317;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__10333 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10334 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10335 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10336 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10337 = ((cljs.core.contains_QMARK_.call(null,tp__10333.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10335.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10335.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10333,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10336.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10334,parent,ta__10335),"\uFDD0'descendants":tf__10336.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10335,tag,td__10334)});
})());
if(cljs.core.truth_(or__3824__auto____10337))
{return or__3824__auto____10337;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10342 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10343 = (cljs.core.truth_(parentMap__10342.call(null,tag))?cljs.core.disj.call(null,parentMap__10342.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10344 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10343))?cljs.core.assoc.call(null,parentMap__10342,tag,childsParents__10343):cljs.core.dissoc.call(null,parentMap__10342,tag));
var deriv_seq__10345 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10325_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10325_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10325_SHARP_),cljs.core.second.call(null,p1__10325_SHARP_)));
}),cljs.core.seq.call(null,newParents__10344)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10342.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10326_SHARP_,p2__10327_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10326_SHARP_,p2__10327_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10345));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10353 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10355 = (cljs.core.truth_((function (){var and__3822__auto____10354 = xprefs__10353;
if(cljs.core.truth_(and__3822__auto____10354))
{return xprefs__10353.call(null,y);
} else
{return and__3822__auto____10354;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10355))
{return or__3824__auto____10355;
} else
{var or__3824__auto____10357 = (function (){var ps__10356 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10356) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10356),prefer_table)))
{} else
{}
{
var G__10360 = cljs.core.rest.call(null,ps__10356);
ps__10356 = G__10360;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10357))
{return or__3824__auto____10357;
} else
{var or__3824__auto____10359 = (function (){var ps__10358 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10358) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10358),y,prefer_table)))
{} else
{}
{
var G__10361 = cljs.core.rest.call(null,ps__10358);
ps__10358 = G__10361;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10359))
{return or__3824__auto____10359;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10363 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10363))
{return or__3824__auto____10363;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10381 = cljs.core.reduce.call(null,(function (be,p__10373){
var vec__10374__10375 = p__10373;
var k__10376 = cljs.core.nth.call(null,vec__10374__10375,0,null);
var ___10377 = cljs.core.nth.call(null,vec__10374__10375,1,null);
var e__10378 = vec__10374__10375;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10376))
{var be2__10380 = (cljs.core.truth_((function (){var or__3824__auto____10379 = (be == null);
if(or__3824__auto____10379)
{return or__3824__auto____10379;
} else
{return cljs.core.dominates.call(null,k__10376,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10378:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10380),k__10376,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10376),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10380)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10380;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10381))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10381));
return cljs.core.second.call(null,best_entry__10381);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10386 = mf;
if(and__3822__auto____10386)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10386;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2391__auto____10387 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10388 = (cljs.core._reset[goog.typeOf(x__2391__auto____10387)]);
if(or__3824__auto____10388)
{return or__3824__auto____10388;
} else
{var or__3824__auto____10389 = (cljs.core._reset["_"]);
if(or__3824__auto____10389)
{return or__3824__auto____10389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10394 = mf;
if(and__3822__auto____10394)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10394;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2391__auto____10395 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10396 = (cljs.core._add_method[goog.typeOf(x__2391__auto____10395)]);
if(or__3824__auto____10396)
{return or__3824__auto____10396;
} else
{var or__3824__auto____10397 = (cljs.core._add_method["_"]);
if(or__3824__auto____10397)
{return or__3824__auto____10397;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10402 = mf;
if(and__3822__auto____10402)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10402;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2391__auto____10403 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10404 = (cljs.core._remove_method[goog.typeOf(x__2391__auto____10403)]);
if(or__3824__auto____10404)
{return or__3824__auto____10404;
} else
{var or__3824__auto____10405 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10405)
{return or__3824__auto____10405;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10410 = mf;
if(and__3822__auto____10410)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10410;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2391__auto____10411 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10412 = (cljs.core._prefer_method[goog.typeOf(x__2391__auto____10411)]);
if(or__3824__auto____10412)
{return or__3824__auto____10412;
} else
{var or__3824__auto____10413 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10413)
{return or__3824__auto____10413;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10418 = mf;
if(and__3822__auto____10418)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10418;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2391__auto____10419 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10420 = (cljs.core._get_method[goog.typeOf(x__2391__auto____10419)]);
if(or__3824__auto____10420)
{return or__3824__auto____10420;
} else
{var or__3824__auto____10421 = (cljs.core._get_method["_"]);
if(or__3824__auto____10421)
{return or__3824__auto____10421;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10426 = mf;
if(and__3822__auto____10426)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10426;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2391__auto____10427 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10428 = (cljs.core._methods[goog.typeOf(x__2391__auto____10427)]);
if(or__3824__auto____10428)
{return or__3824__auto____10428;
} else
{var or__3824__auto____10429 = (cljs.core._methods["_"]);
if(or__3824__auto____10429)
{return or__3824__auto____10429;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10434 = mf;
if(and__3822__auto____10434)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10434;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2391__auto____10435 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10436 = (cljs.core._prefers[goog.typeOf(x__2391__auto____10435)]);
if(or__3824__auto____10436)
{return or__3824__auto____10436;
} else
{var or__3824__auto____10437 = (cljs.core._prefers["_"]);
if(or__3824__auto____10437)
{return or__3824__auto____10437;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10442 = mf;
if(and__3822__auto____10442)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10442;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2391__auto____10443 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10444 = (cljs.core._dispatch[goog.typeOf(x__2391__auto____10443)]);
if(or__3824__auto____10444)
{return or__3824__auto____10444;
} else
{var or__3824__auto____10445 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10445)
{return or__3824__auto____10445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10448 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10449 = cljs.core._get_method.call(null,mf,dispatch_val__10448);
if(cljs.core.truth_(target_fn__10449))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10448)].join('')));
}
return cljs.core.apply.call(null,target_fn__10449,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10450 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10451 = this;
cljs.core.swap_BANG_.call(null,this__10451.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10451.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10451.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10451.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10452 = this;
cljs.core.swap_BANG_.call(null,this__10452.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10452.method_cache,this__10452.method_table,this__10452.cached_hierarchy,this__10452.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10453 = this;
cljs.core.swap_BANG_.call(null,this__10453.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10453.method_cache,this__10453.method_table,this__10453.cached_hierarchy,this__10453.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10454 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10454.cached_hierarchy),cljs.core.deref.call(null,this__10454.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10454.method_cache,this__10454.method_table,this__10454.cached_hierarchy,this__10454.hierarchy);
}
var temp__3971__auto____10455 = cljs.core.deref.call(null,this__10454.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10455))
{var target_fn__10456 = temp__3971__auto____10455;
return target_fn__10456;
} else
{var temp__3971__auto____10457 = cljs.core.find_and_cache_best_method.call(null,this__10454.name,dispatch_val,this__10454.hierarchy,this__10454.method_table,this__10454.prefer_table,this__10454.method_cache,this__10454.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10457))
{var target_fn__10458 = temp__3971__auto____10457;
return target_fn__10458;
} else
{return cljs.core.deref.call(null,this__10454.method_table).call(null,this__10454.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10459 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10459.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10459.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10459.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10459.method_cache,this__10459.method_table,this__10459.cached_hierarchy,this__10459.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10460 = this;
return cljs.core.deref.call(null,this__10460.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10461 = this;
return cljs.core.deref.call(null,this__10461.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10462 = this;
return cljs.core.do_dispatch.call(null,mf,this__10462.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10464__delegate = function (_,args){
var self__10463 = this;
return cljs.core._dispatch.call(null,self__10463,args);
};
var G__10464 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10464__delegate.call(this, _, args);
};
G__10464.cljs$lang$maxFixedArity = 1;
G__10464.cljs$lang$applyTo = (function (arglist__10465){
var _ = cljs.core.first(arglist__10465);
var args = cljs.core.rest(arglist__10465);
return G__10464__delegate(_, args);
});
G__10464.cljs$lang$arity$variadic = G__10464__delegate;
return G__10464;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10466 = this;
return cljs.core._dispatch.call(null,self__10466,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10467 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10469,_){
var this__10468 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10468.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10470 = this;
var and__3822__auto____10471 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10471)
{return (this__10470.uuid === other.uuid);
} else
{return and__3822__auto____10471;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10472 = this;
var this__10473 = this;
return cljs.core.pr_str.call(null,this__10473);
});
cljs.core.UUID;
