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
var x__6390 = (((x == null))?null:x);
if((p[goog.typeOf(x__6390)]))
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
var G__6391__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6391 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6391__delegate.call(this, array, i, idxs);
};
G__6391.cljs$lang$maxFixedArity = 2;
G__6391.cljs$lang$applyTo = (function (arglist__6392){
var array = cljs.core.first(arglist__6392);
var i = cljs.core.first(cljs.core.next(arglist__6392));
var idxs = cljs.core.rest(cljs.core.next(arglist__6392));
return G__6391__delegate(array, i, idxs);
});
G__6391.cljs$lang$arity$variadic = G__6391__delegate;
return G__6391;
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
if((function (){var and__3822__auto____6477 = this$;
if(and__3822__auto____6477)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6477;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2480__auto____6478 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6479 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6478)]);
if(or__3824__auto____6479)
{return or__3824__auto____6479;
} else
{var or__3824__auto____6480 = (cljs.core._invoke["_"]);
if(or__3824__auto____6480)
{return or__3824__auto____6480;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6481 = this$;
if(and__3822__auto____6481)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6481;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2480__auto____6482 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6483 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6482)]);
if(or__3824__auto____6483)
{return or__3824__auto____6483;
} else
{var or__3824__auto____6484 = (cljs.core._invoke["_"]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6485 = this$;
if(and__3822__auto____6485)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6485;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2480__auto____6486 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6487 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6486)]);
if(or__3824__auto____6487)
{return or__3824__auto____6487;
} else
{var or__3824__auto____6488 = (cljs.core._invoke["_"]);
if(or__3824__auto____6488)
{return or__3824__auto____6488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6489 = this$;
if(and__3822__auto____6489)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6489;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2480__auto____6490 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6491 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6490)]);
if(or__3824__auto____6491)
{return or__3824__auto____6491;
} else
{var or__3824__auto____6492 = (cljs.core._invoke["_"]);
if(or__3824__auto____6492)
{return or__3824__auto____6492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6493 = this$;
if(and__3822__auto____6493)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6493;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2480__auto____6494 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6495 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6494)]);
if(or__3824__auto____6495)
{return or__3824__auto____6495;
} else
{var or__3824__auto____6496 = (cljs.core._invoke["_"]);
if(or__3824__auto____6496)
{return or__3824__auto____6496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6497 = this$;
if(and__3822__auto____6497)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6497;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2480__auto____6498 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6499 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6498)]);
if(or__3824__auto____6499)
{return or__3824__auto____6499;
} else
{var or__3824__auto____6500 = (cljs.core._invoke["_"]);
if(or__3824__auto____6500)
{return or__3824__auto____6500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6501 = this$;
if(and__3822__auto____6501)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6501;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2480__auto____6502 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6503 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6502)]);
if(or__3824__auto____6503)
{return or__3824__auto____6503;
} else
{var or__3824__auto____6504 = (cljs.core._invoke["_"]);
if(or__3824__auto____6504)
{return or__3824__auto____6504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6505 = this$;
if(and__3822__auto____6505)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6505;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2480__auto____6506 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6507 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6506)]);
if(or__3824__auto____6507)
{return or__3824__auto____6507;
} else
{var or__3824__auto____6508 = (cljs.core._invoke["_"]);
if(or__3824__auto____6508)
{return or__3824__auto____6508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6509 = this$;
if(and__3822__auto____6509)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6509;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2480__auto____6510 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6511 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6510)]);
if(or__3824__auto____6511)
{return or__3824__auto____6511;
} else
{var or__3824__auto____6512 = (cljs.core._invoke["_"]);
if(or__3824__auto____6512)
{return or__3824__auto____6512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6513 = this$;
if(and__3822__auto____6513)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6513;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2480__auto____6514 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6515 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6514)]);
if(or__3824__auto____6515)
{return or__3824__auto____6515;
} else
{var or__3824__auto____6516 = (cljs.core._invoke["_"]);
if(or__3824__auto____6516)
{return or__3824__auto____6516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6517 = this$;
if(and__3822__auto____6517)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6517;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2480__auto____6518 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6519 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6518)]);
if(or__3824__auto____6519)
{return or__3824__auto____6519;
} else
{var or__3824__auto____6520 = (cljs.core._invoke["_"]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6521 = this$;
if(and__3822__auto____6521)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6521;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2480__auto____6522 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6523 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6522)]);
if(or__3824__auto____6523)
{return or__3824__auto____6523;
} else
{var or__3824__auto____6524 = (cljs.core._invoke["_"]);
if(or__3824__auto____6524)
{return or__3824__auto____6524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6525 = this$;
if(and__3822__auto____6525)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6525;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2480__auto____6526 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6527 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6526)]);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{var or__3824__auto____6528 = (cljs.core._invoke["_"]);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6529 = this$;
if(and__3822__auto____6529)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6529;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2480__auto____6530 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6531 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6530)]);
if(or__3824__auto____6531)
{return or__3824__auto____6531;
} else
{var or__3824__auto____6532 = (cljs.core._invoke["_"]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6533 = this$;
if(and__3822__auto____6533)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6533;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2480__auto____6534 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6535 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6534)]);
if(or__3824__auto____6535)
{return or__3824__auto____6535;
} else
{var or__3824__auto____6536 = (cljs.core._invoke["_"]);
if(or__3824__auto____6536)
{return or__3824__auto____6536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6537 = this$;
if(and__3822__auto____6537)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6537;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2480__auto____6538 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6539 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6538)]);
if(or__3824__auto____6539)
{return or__3824__auto____6539;
} else
{var or__3824__auto____6540 = (cljs.core._invoke["_"]);
if(or__3824__auto____6540)
{return or__3824__auto____6540;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6541 = this$;
if(and__3822__auto____6541)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6541;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2480__auto____6542 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6543 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6542)]);
if(or__3824__auto____6543)
{return or__3824__auto____6543;
} else
{var or__3824__auto____6544 = (cljs.core._invoke["_"]);
if(or__3824__auto____6544)
{return or__3824__auto____6544;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6545 = this$;
if(and__3822__auto____6545)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6545;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2480__auto____6546 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6547 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6546)]);
if(or__3824__auto____6547)
{return or__3824__auto____6547;
} else
{var or__3824__auto____6548 = (cljs.core._invoke["_"]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6549 = this$;
if(and__3822__auto____6549)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6549;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2480__auto____6550 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6551 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6550)]);
if(or__3824__auto____6551)
{return or__3824__auto____6551;
} else
{var or__3824__auto____6552 = (cljs.core._invoke["_"]);
if(or__3824__auto____6552)
{return or__3824__auto____6552;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6553 = this$;
if(and__3822__auto____6553)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6553;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2480__auto____6554 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6555 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6554)]);
if(or__3824__auto____6555)
{return or__3824__auto____6555;
} else
{var or__3824__auto____6556 = (cljs.core._invoke["_"]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6557 = this$;
if(and__3822__auto____6557)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6557;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2480__auto____6558 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6559 = (cljs.core._invoke[goog.typeOf(x__2480__auto____6558)]);
if(or__3824__auto____6559)
{return or__3824__auto____6559;
} else
{var or__3824__auto____6560 = (cljs.core._invoke["_"]);
if(or__3824__auto____6560)
{return or__3824__auto____6560;
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
if((function (){var and__3822__auto____6565 = coll;
if(and__3822__auto____6565)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6565;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2480__auto____6566 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6567 = (cljs.core._count[goog.typeOf(x__2480__auto____6566)]);
if(or__3824__auto____6567)
{return or__3824__auto____6567;
} else
{var or__3824__auto____6568 = (cljs.core._count["_"]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6573 = coll;
if(and__3822__auto____6573)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6573;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2480__auto____6574 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6575 = (cljs.core._empty[goog.typeOf(x__2480__auto____6574)]);
if(or__3824__auto____6575)
{return or__3824__auto____6575;
} else
{var or__3824__auto____6576 = (cljs.core._empty["_"]);
if(or__3824__auto____6576)
{return or__3824__auto____6576;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6581 = coll;
if(and__3822__auto____6581)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6581;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2480__auto____6582 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6583 = (cljs.core._conj[goog.typeOf(x__2480__auto____6582)]);
if(or__3824__auto____6583)
{return or__3824__auto____6583;
} else
{var or__3824__auto____6584 = (cljs.core._conj["_"]);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
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
if((function (){var and__3822__auto____6593 = coll;
if(and__3822__auto____6593)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6593;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2480__auto____6594 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6595 = (cljs.core._nth[goog.typeOf(x__2480__auto____6594)]);
if(or__3824__auto____6595)
{return or__3824__auto____6595;
} else
{var or__3824__auto____6596 = (cljs.core._nth["_"]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6597 = coll;
if(and__3822__auto____6597)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6597;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2480__auto____6598 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6599 = (cljs.core._nth[goog.typeOf(x__2480__auto____6598)]);
if(or__3824__auto____6599)
{return or__3824__auto____6599;
} else
{var or__3824__auto____6600 = (cljs.core._nth["_"]);
if(or__3824__auto____6600)
{return or__3824__auto____6600;
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
if((function (){var and__3822__auto____6605 = coll;
if(and__3822__auto____6605)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6605;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2480__auto____6606 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6607 = (cljs.core._first[goog.typeOf(x__2480__auto____6606)]);
if(or__3824__auto____6607)
{return or__3824__auto____6607;
} else
{var or__3824__auto____6608 = (cljs.core._first["_"]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6613 = coll;
if(and__3822__auto____6613)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6613;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2480__auto____6614 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6615 = (cljs.core._rest[goog.typeOf(x__2480__auto____6614)]);
if(or__3824__auto____6615)
{return or__3824__auto____6615;
} else
{var or__3824__auto____6616 = (cljs.core._rest["_"]);
if(or__3824__auto____6616)
{return or__3824__auto____6616;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6621 = coll;
if(and__3822__auto____6621)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6621;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2480__auto____6622 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6623 = (cljs.core._next[goog.typeOf(x__2480__auto____6622)]);
if(or__3824__auto____6623)
{return or__3824__auto____6623;
} else
{var or__3824__auto____6624 = (cljs.core._next["_"]);
if(or__3824__auto____6624)
{return or__3824__auto____6624;
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
if((function (){var and__3822__auto____6633 = o;
if(and__3822__auto____6633)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6633;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2480__auto____6634 = (((o == null))?null:o);
return (function (){var or__3824__auto____6635 = (cljs.core._lookup[goog.typeOf(x__2480__auto____6634)]);
if(or__3824__auto____6635)
{return or__3824__auto____6635;
} else
{var or__3824__auto____6636 = (cljs.core._lookup["_"]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6637 = o;
if(and__3822__auto____6637)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6637;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2480__auto____6638 = (((o == null))?null:o);
return (function (){var or__3824__auto____6639 = (cljs.core._lookup[goog.typeOf(x__2480__auto____6638)]);
if(or__3824__auto____6639)
{return or__3824__auto____6639;
} else
{var or__3824__auto____6640 = (cljs.core._lookup["_"]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
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
if((function (){var and__3822__auto____6645 = coll;
if(and__3822__auto____6645)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6645;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2480__auto____6646 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6647 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2480__auto____6646)]);
if(or__3824__auto____6647)
{return or__3824__auto____6647;
} else
{var or__3824__auto____6648 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6653 = coll;
if(and__3822__auto____6653)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6653;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2480__auto____6654 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6655 = (cljs.core._assoc[goog.typeOf(x__2480__auto____6654)]);
if(or__3824__auto____6655)
{return or__3824__auto____6655;
} else
{var or__3824__auto____6656 = (cljs.core._assoc["_"]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6661 = coll;
if(and__3822__auto____6661)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6661;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2480__auto____6662 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6663 = (cljs.core._dissoc[goog.typeOf(x__2480__auto____6662)]);
if(or__3824__auto____6663)
{return or__3824__auto____6663;
} else
{var or__3824__auto____6664 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6664)
{return or__3824__auto____6664;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6669 = coll;
if(and__3822__auto____6669)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6669;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2480__auto____6670 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6671 = (cljs.core._key[goog.typeOf(x__2480__auto____6670)]);
if(or__3824__auto____6671)
{return or__3824__auto____6671;
} else
{var or__3824__auto____6672 = (cljs.core._key["_"]);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6677 = coll;
if(and__3822__auto____6677)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6677;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2480__auto____6678 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6679 = (cljs.core._val[goog.typeOf(x__2480__auto____6678)]);
if(or__3824__auto____6679)
{return or__3824__auto____6679;
} else
{var or__3824__auto____6680 = (cljs.core._val["_"]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6685 = coll;
if(and__3822__auto____6685)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6685;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2480__auto____6686 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6687 = (cljs.core._disjoin[goog.typeOf(x__2480__auto____6686)]);
if(or__3824__auto____6687)
{return or__3824__auto____6687;
} else
{var or__3824__auto____6688 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6693 = coll;
if(and__3822__auto____6693)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6693;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2480__auto____6694 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6695 = (cljs.core._peek[goog.typeOf(x__2480__auto____6694)]);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{var or__3824__auto____6696 = (cljs.core._peek["_"]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6701 = coll;
if(and__3822__auto____6701)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6701;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2480__auto____6702 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6703 = (cljs.core._pop[goog.typeOf(x__2480__auto____6702)]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{var or__3824__auto____6704 = (cljs.core._pop["_"]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6709 = coll;
if(and__3822__auto____6709)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6709;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2480__auto____6710 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6711 = (cljs.core._assoc_n[goog.typeOf(x__2480__auto____6710)]);
if(or__3824__auto____6711)
{return or__3824__auto____6711;
} else
{var or__3824__auto____6712 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6717 = o;
if(and__3822__auto____6717)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6717;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2480__auto____6718 = (((o == null))?null:o);
return (function (){var or__3824__auto____6719 = (cljs.core._deref[goog.typeOf(x__2480__auto____6718)]);
if(or__3824__auto____6719)
{return or__3824__auto____6719;
} else
{var or__3824__auto____6720 = (cljs.core._deref["_"]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6725 = o;
if(and__3822__auto____6725)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6725;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2480__auto____6726 = (((o == null))?null:o);
return (function (){var or__3824__auto____6727 = (cljs.core._deref_with_timeout[goog.typeOf(x__2480__auto____6726)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6733 = o;
if(and__3822__auto____6733)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6733;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2480__auto____6734 = (((o == null))?null:o);
return (function (){var or__3824__auto____6735 = (cljs.core._meta[goog.typeOf(x__2480__auto____6734)]);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{var or__3824__auto____6736 = (cljs.core._meta["_"]);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6741 = o;
if(and__3822__auto____6741)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6741;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2480__auto____6742 = (((o == null))?null:o);
return (function (){var or__3824__auto____6743 = (cljs.core._with_meta[goog.typeOf(x__2480__auto____6742)]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{var or__3824__auto____6744 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
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
if((function (){var and__3822__auto____6753 = coll;
if(and__3822__auto____6753)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6753;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2480__auto____6754 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6755 = (cljs.core._reduce[goog.typeOf(x__2480__auto____6754)]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{var or__3824__auto____6756 = (cljs.core._reduce["_"]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6757 = coll;
if(and__3822__auto____6757)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6757;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2480__auto____6758 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6759 = (cljs.core._reduce[goog.typeOf(x__2480__auto____6758)]);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{var or__3824__auto____6760 = (cljs.core._reduce["_"]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
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
if((function (){var and__3822__auto____6765 = coll;
if(and__3822__auto____6765)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6765;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2480__auto____6766 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6767 = (cljs.core._kv_reduce[goog.typeOf(x__2480__auto____6766)]);
if(or__3824__auto____6767)
{return or__3824__auto____6767;
} else
{var or__3824__auto____6768 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6773 = o;
if(and__3822__auto____6773)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6773;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2480__auto____6774 = (((o == null))?null:o);
return (function (){var or__3824__auto____6775 = (cljs.core._equiv[goog.typeOf(x__2480__auto____6774)]);
if(or__3824__auto____6775)
{return or__3824__auto____6775;
} else
{var or__3824__auto____6776 = (cljs.core._equiv["_"]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6781 = o;
if(and__3822__auto____6781)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6781;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2480__auto____6782 = (((o == null))?null:o);
return (function (){var or__3824__auto____6783 = (cljs.core._hash[goog.typeOf(x__2480__auto____6782)]);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{var or__3824__auto____6784 = (cljs.core._hash["_"]);
if(or__3824__auto____6784)
{return or__3824__auto____6784;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6789 = o;
if(and__3822__auto____6789)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6789;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2480__auto____6790 = (((o == null))?null:o);
return (function (){var or__3824__auto____6791 = (cljs.core._seq[goog.typeOf(x__2480__auto____6790)]);
if(or__3824__auto____6791)
{return or__3824__auto____6791;
} else
{var or__3824__auto____6792 = (cljs.core._seq["_"]);
if(or__3824__auto____6792)
{return or__3824__auto____6792;
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
if((function (){var and__3822__auto____6797 = coll;
if(and__3822__auto____6797)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6797;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2480__auto____6798 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6799 = (cljs.core._rseq[goog.typeOf(x__2480__auto____6798)]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{var or__3824__auto____6800 = (cljs.core._rseq["_"]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6805 = coll;
if(and__3822__auto____6805)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6805;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2480__auto____6806 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6807 = (cljs.core._sorted_seq[goog.typeOf(x__2480__auto____6806)]);
if(or__3824__auto____6807)
{return or__3824__auto____6807;
} else
{var or__3824__auto____6808 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6813 = coll;
if(and__3822__auto____6813)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6813;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2480__auto____6814 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6815 = (cljs.core._sorted_seq_from[goog.typeOf(x__2480__auto____6814)]);
if(or__3824__auto____6815)
{return or__3824__auto____6815;
} else
{var or__3824__auto____6816 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6816)
{return or__3824__auto____6816;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6821 = coll;
if(and__3822__auto____6821)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6821;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2480__auto____6822 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6823 = (cljs.core._entry_key[goog.typeOf(x__2480__auto____6822)]);
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{var or__3824__auto____6824 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6829 = coll;
if(and__3822__auto____6829)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6829;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2480__auto____6830 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6831 = (cljs.core._comparator[goog.typeOf(x__2480__auto____6830)]);
if(or__3824__auto____6831)
{return or__3824__auto____6831;
} else
{var or__3824__auto____6832 = (cljs.core._comparator["_"]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6837 = o;
if(and__3822__auto____6837)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6837;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2480__auto____6838 = (((o == null))?null:o);
return (function (){var or__3824__auto____6839 = (cljs.core._pr_seq[goog.typeOf(x__2480__auto____6838)]);
if(or__3824__auto____6839)
{return or__3824__auto____6839;
} else
{var or__3824__auto____6840 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6840)
{return or__3824__auto____6840;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6845 = d;
if(and__3822__auto____6845)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6845;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2480__auto____6846 = (((d == null))?null:d);
return (function (){var or__3824__auto____6847 = (cljs.core._realized_QMARK_[goog.typeOf(x__2480__auto____6846)]);
if(or__3824__auto____6847)
{return or__3824__auto____6847;
} else
{var or__3824__auto____6848 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6853 = this$;
if(and__3822__auto____6853)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6853;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2480__auto____6854 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6855 = (cljs.core._notify_watches[goog.typeOf(x__2480__auto____6854)]);
if(or__3824__auto____6855)
{return or__3824__auto____6855;
} else
{var or__3824__auto____6856 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6856)
{return or__3824__auto____6856;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6861 = this$;
if(and__3822__auto____6861)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6861;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2480__auto____6862 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6863 = (cljs.core._add_watch[goog.typeOf(x__2480__auto____6862)]);
if(or__3824__auto____6863)
{return or__3824__auto____6863;
} else
{var or__3824__auto____6864 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6864)
{return or__3824__auto____6864;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6869 = this$;
if(and__3822__auto____6869)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6869;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2480__auto____6870 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6871 = (cljs.core._remove_watch[goog.typeOf(x__2480__auto____6870)]);
if(or__3824__auto____6871)
{return or__3824__auto____6871;
} else
{var or__3824__auto____6872 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6877 = coll;
if(and__3822__auto____6877)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6877;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2480__auto____6878 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6879 = (cljs.core._as_transient[goog.typeOf(x__2480__auto____6878)]);
if(or__3824__auto____6879)
{return or__3824__auto____6879;
} else
{var or__3824__auto____6880 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6880)
{return or__3824__auto____6880;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6885 = tcoll;
if(and__3822__auto____6885)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6885;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2480__auto____6886 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6887 = (cljs.core._conj_BANG_[goog.typeOf(x__2480__auto____6886)]);
if(or__3824__auto____6887)
{return or__3824__auto____6887;
} else
{var or__3824__auto____6888 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6888)
{return or__3824__auto____6888;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6893 = tcoll;
if(and__3822__auto____6893)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6893;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2480__auto____6894 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6895 = (cljs.core._persistent_BANG_[goog.typeOf(x__2480__auto____6894)]);
if(or__3824__auto____6895)
{return or__3824__auto____6895;
} else
{var or__3824__auto____6896 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6901 = tcoll;
if(and__3822__auto____6901)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6901;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2480__auto____6902 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6903 = (cljs.core._assoc_BANG_[goog.typeOf(x__2480__auto____6902)]);
if(or__3824__auto____6903)
{return or__3824__auto____6903;
} else
{var or__3824__auto____6904 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6904)
{return or__3824__auto____6904;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6909 = tcoll;
if(and__3822__auto____6909)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6909;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2480__auto____6910 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6911 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2480__auto____6910)]);
if(or__3824__auto____6911)
{return or__3824__auto____6911;
} else
{var or__3824__auto____6912 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6917 = tcoll;
if(and__3822__auto____6917)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6917;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2480__auto____6918 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6919 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2480__auto____6918)]);
if(or__3824__auto____6919)
{return or__3824__auto____6919;
} else
{var or__3824__auto____6920 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6925 = tcoll;
if(and__3822__auto____6925)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6925;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2480__auto____6926 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6927 = (cljs.core._pop_BANG_[goog.typeOf(x__2480__auto____6926)]);
if(or__3824__auto____6927)
{return or__3824__auto____6927;
} else
{var or__3824__auto____6928 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6928)
{return or__3824__auto____6928;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6933 = tcoll;
if(and__3822__auto____6933)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6933;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2480__auto____6934 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6935 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2480__auto____6934)]);
if(or__3824__auto____6935)
{return or__3824__auto____6935;
} else
{var or__3824__auto____6936 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6936)
{return or__3824__auto____6936;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6941 = x;
if(and__3822__auto____6941)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6941;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2480__auto____6942 = (((x == null))?null:x);
return (function (){var or__3824__auto____6943 = (cljs.core._compare[goog.typeOf(x__2480__auto____6942)]);
if(or__3824__auto____6943)
{return or__3824__auto____6943;
} else
{var or__3824__auto____6944 = (cljs.core._compare["_"]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6949 = coll;
if(and__3822__auto____6949)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6949;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2480__auto____6950 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6951 = (cljs.core._drop_first[goog.typeOf(x__2480__auto____6950)]);
if(or__3824__auto____6951)
{return or__3824__auto____6951;
} else
{var or__3824__auto____6952 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6952)
{return or__3824__auto____6952;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6957 = coll;
if(and__3822__auto____6957)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6957;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2480__auto____6958 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6959 = (cljs.core._chunked_first[goog.typeOf(x__2480__auto____6958)]);
if(or__3824__auto____6959)
{return or__3824__auto____6959;
} else
{var or__3824__auto____6960 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6960)
{return or__3824__auto____6960;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6965 = coll;
if(and__3822__auto____6965)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6965;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2480__auto____6966 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6967 = (cljs.core._chunked_rest[goog.typeOf(x__2480__auto____6966)]);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{var or__3824__auto____6968 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6973 = coll;
if(and__3822__auto____6973)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6973;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2480__auto____6974 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6975 = (cljs.core._chunked_next[goog.typeOf(x__2480__auto____6974)]);
if(or__3824__auto____6975)
{return or__3824__auto____6975;
} else
{var or__3824__auto____6976 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
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
var or__3824__auto____6978 = (x === y);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6979__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6980 = y;
var G__6981 = cljs.core.first.call(null,more);
var G__6982 = cljs.core.next.call(null,more);
x = G__6980;
y = G__6981;
more = G__6982;
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
var G__6979 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6979__delegate.call(this, x, y, more);
};
G__6979.cljs$lang$maxFixedArity = 2;
G__6979.cljs$lang$applyTo = (function (arglist__6983){
var x = cljs.core.first(arglist__6983);
var y = cljs.core.first(cljs.core.next(arglist__6983));
var more = cljs.core.rest(cljs.core.next(arglist__6983));
return G__6979__delegate(x, y, more);
});
G__6979.cljs$lang$arity$variadic = G__6979__delegate;
return G__6979;
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
var G__6984 = null;
var G__6984__2 = (function (o,k){
return null;
});
var G__6984__3 = (function (o,k,not_found){
return not_found;
});
G__6984 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6984__2.call(this,o,k);
case 3:
return G__6984__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6984;
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
var G__6985 = null;
var G__6985__2 = (function (_,f){
return f.call(null);
});
var G__6985__3 = (function (_,f,start){
return start;
});
G__6985 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6985__2.call(this,_,f);
case 3:
return G__6985__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6985;
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
var G__6986 = null;
var G__6986__2 = (function (_,n){
return null;
});
var G__6986__3 = (function (_,n,not_found){
return not_found;
});
G__6986 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6986__2.call(this,_,n);
case 3:
return G__6986__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6986;
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
var and__3822__auto____6987 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6987)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6987;
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
var cnt__7000 = cljs.core._count.call(null,cicoll);
if((cnt__7000 === 0))
{return f.call(null);
} else
{var val__7001 = cljs.core._nth.call(null,cicoll,0);
var n__7002 = 1;
while(true){
if((n__7002 < cnt__7000))
{var nval__7003 = f.call(null,val__7001,cljs.core._nth.call(null,cicoll,n__7002));
if(cljs.core.reduced_QMARK_.call(null,nval__7003))
{return cljs.core.deref.call(null,nval__7003);
} else
{{
var G__7012 = nval__7003;
var G__7013 = (n__7002 + 1);
val__7001 = G__7012;
n__7002 = G__7013;
continue;
}
}
} else
{return val__7001;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7004 = cljs.core._count.call(null,cicoll);
var val__7005 = val;
var n__7006 = 0;
while(true){
if((n__7006 < cnt__7004))
{var nval__7007 = f.call(null,val__7005,cljs.core._nth.call(null,cicoll,n__7006));
if(cljs.core.reduced_QMARK_.call(null,nval__7007))
{return cljs.core.deref.call(null,nval__7007);
} else
{{
var G__7014 = nval__7007;
var G__7015 = (n__7006 + 1);
val__7005 = G__7014;
n__7006 = G__7015;
continue;
}
}
} else
{return val__7005;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7008 = cljs.core._count.call(null,cicoll);
var val__7009 = val;
var n__7010 = idx;
while(true){
if((n__7010 < cnt__7008))
{var nval__7011 = f.call(null,val__7009,cljs.core._nth.call(null,cicoll,n__7010));
if(cljs.core.reduced_QMARK_.call(null,nval__7011))
{return cljs.core.deref.call(null,nval__7011);
} else
{{
var G__7016 = nval__7011;
var G__7017 = (n__7010 + 1);
val__7009 = G__7016;
n__7010 = G__7017;
continue;
}
}
} else
{return val__7009;
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
var cnt__7030 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7031 = (arr[0]);
var n__7032 = 1;
while(true){
if((n__7032 < cnt__7030))
{var nval__7033 = f.call(null,val__7031,(arr[n__7032]));
if(cljs.core.reduced_QMARK_.call(null,nval__7033))
{return cljs.core.deref.call(null,nval__7033);
} else
{{
var G__7042 = nval__7033;
var G__7043 = (n__7032 + 1);
val__7031 = G__7042;
n__7032 = G__7043;
continue;
}
}
} else
{return val__7031;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7034 = arr.length;
var val__7035 = val;
var n__7036 = 0;
while(true){
if((n__7036 < cnt__7034))
{var nval__7037 = f.call(null,val__7035,(arr[n__7036]));
if(cljs.core.reduced_QMARK_.call(null,nval__7037))
{return cljs.core.deref.call(null,nval__7037);
} else
{{
var G__7044 = nval__7037;
var G__7045 = (n__7036 + 1);
val__7035 = G__7044;
n__7036 = G__7045;
continue;
}
}
} else
{return val__7035;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7038 = arr.length;
var val__7039 = val;
var n__7040 = idx;
while(true){
if((n__7040 < cnt__7038))
{var nval__7041 = f.call(null,val__7039,(arr[n__7040]));
if(cljs.core.reduced_QMARK_.call(null,nval__7041))
{return cljs.core.deref.call(null,nval__7041);
} else
{{
var G__7046 = nval__7041;
var G__7047 = (n__7040 + 1);
val__7039 = G__7046;
n__7040 = G__7047;
continue;
}
}
} else
{return val__7039;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7048 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7049 = this;
if(((this__7049.i + 1) < this__7049.a.length))
{return (new cljs.core.IndexedSeq(this__7049.a,(this__7049.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7050 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7051 = this;
var c__7052 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7052 > 0))
{return (new cljs.core.RSeq(coll,(c__7052 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7053 = this;
var this__7054 = this;
return cljs.core.pr_str.call(null,this__7054);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7055 = this;
if(cljs.core.counted_QMARK_.call(null,this__7055.a))
{return cljs.core.ci_reduce.call(null,this__7055.a,f,(this__7055.a[this__7055.i]),(this__7055.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7055.a[this__7055.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7056 = this;
if(cljs.core.counted_QMARK_.call(null,this__7056.a))
{return cljs.core.ci_reduce.call(null,this__7056.a,f,start,this__7056.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7057 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7058 = this;
return (this__7058.a.length - this__7058.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7059 = this;
return (this__7059.a[this__7059.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7060 = this;
if(((this__7060.i + 1) < this__7060.a.length))
{return (new cljs.core.IndexedSeq(this__7060.a,(this__7060.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7061 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7062 = this;
var i__7063 = (n + this__7062.i);
if((i__7063 < this__7062.a.length))
{return (this__7062.a[i__7063]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7064 = this;
var i__7065 = (n + this__7064.i);
if((i__7065 < this__7064.a.length))
{return (this__7064.a[i__7065]);
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
var G__7066 = null;
var G__7066__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7066__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7066 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7066__2.call(this,array,f);
case 3:
return G__7066__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7066;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7067 = null;
var G__7067__2 = (function (array,k){
return (array[k]);
});
var G__7067__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7067 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7067__2.call(this,array,k);
case 3:
return G__7067__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7067;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7068 = null;
var G__7068__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7068__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7068 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7068__2.call(this,array,n);
case 3:
return G__7068__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7068;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7070 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7071 = this;
var this__7072 = this;
return cljs.core.pr_str.call(null,this__7072);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7073 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7074 = this;
return (this__7074.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7075 = this;
return cljs.core._nth.call(null,this__7075.ci,this__7075.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7076 = this;
if((this__7076.i > 0))
{return (new cljs.core.RSeq(this__7076.ci,(this__7076.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7077 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7078 = this;
return (new cljs.core.RSeq(this__7078.ci,this__7078.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7079 = this;
return this__7079.meta;
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
{if((function (){var G__7083__7084 = coll;
if(G__7083__7084)
{if((function (){var or__3824__auto____7085 = (G__7083__7084.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7085)
{return or__3824__auto____7085;
} else
{return G__7083__7084.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7083__7084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7083__7084);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7083__7084);
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
{if((function (){var G__7090__7091 = coll;
if(G__7090__7091)
{if((function (){var or__3824__auto____7092 = (G__7090__7091.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7092)
{return or__3824__auto____7092;
} else
{return G__7090__7091.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7090__7091.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7090__7091);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7090__7091);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7093 = cljs.core.seq.call(null,coll);
if((s__7093 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7093);
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
{if((function (){var G__7098__7099 = coll;
if(G__7098__7099)
{if((function (){var or__3824__auto____7100 = (G__7098__7099.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7100)
{return or__3824__auto____7100;
} else
{return G__7098__7099.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7098__7099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7098__7099);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7098__7099);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7101 = cljs.core.seq.call(null,coll);
if(!((s__7101 == null)))
{return cljs.core._rest.call(null,s__7101);
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
{if((function (){var G__7105__7106 = coll;
if(G__7105__7106)
{if((function (){var or__3824__auto____7107 = (G__7105__7106.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7107)
{return or__3824__auto____7107;
} else
{return G__7105__7106.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7105__7106.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7105__7106);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7105__7106);
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
var sn__7109 = cljs.core.next.call(null,s);
if(!((sn__7109 == null)))
{{
var G__7110 = sn__7109;
s = G__7110;
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
var G__7111__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7112 = conj.call(null,coll,x);
var G__7113 = cljs.core.first.call(null,xs);
var G__7114 = cljs.core.next.call(null,xs);
coll = G__7112;
x = G__7113;
xs = G__7114;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7111 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7111__delegate.call(this, coll, x, xs);
};
G__7111.cljs$lang$maxFixedArity = 2;
G__7111.cljs$lang$applyTo = (function (arglist__7115){
var coll = cljs.core.first(arglist__7115);
var x = cljs.core.first(cljs.core.next(arglist__7115));
var xs = cljs.core.rest(cljs.core.next(arglist__7115));
return G__7111__delegate(coll, x, xs);
});
G__7111.cljs$lang$arity$variadic = G__7111__delegate;
return G__7111;
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
var s__7118 = cljs.core.seq.call(null,coll);
var acc__7119 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7118))
{return (acc__7119 + cljs.core._count.call(null,s__7118));
} else
{{
var G__7120 = cljs.core.next.call(null,s__7118);
var G__7121 = (acc__7119 + 1);
s__7118 = G__7120;
acc__7119 = G__7121;
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
{if((function (){var G__7128__7129 = coll;
if(G__7128__7129)
{if((function (){var or__3824__auto____7130 = (G__7128__7129.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{return G__7128__7129.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7128__7129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7128__7129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7128__7129);
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
{if((function (){var G__7131__7132 = coll;
if(G__7131__7132)
{if((function (){var or__3824__auto____7133 = (G__7131__7132.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7133)
{return or__3824__auto____7133;
} else
{return G__7131__7132.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7131__7132.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7131__7132);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7131__7132);
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
var G__7136__delegate = function (coll,k,v,kvs){
while(true){
var ret__7135 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7137 = ret__7135;
var G__7138 = cljs.core.first.call(null,kvs);
var G__7139 = cljs.core.second.call(null,kvs);
var G__7140 = cljs.core.nnext.call(null,kvs);
coll = G__7137;
k = G__7138;
v = G__7139;
kvs = G__7140;
continue;
}
} else
{return ret__7135;
}
break;
}
};
var G__7136 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7136__delegate.call(this, coll, k, v, kvs);
};
G__7136.cljs$lang$maxFixedArity = 3;
G__7136.cljs$lang$applyTo = (function (arglist__7141){
var coll = cljs.core.first(arglist__7141);
var k = cljs.core.first(cljs.core.next(arglist__7141));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7141)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7141)));
return G__7136__delegate(coll, k, v, kvs);
});
G__7136.cljs$lang$arity$variadic = G__7136__delegate;
return G__7136;
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
var G__7144__delegate = function (coll,k,ks){
while(true){
var ret__7143 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7145 = ret__7143;
var G__7146 = cljs.core.first.call(null,ks);
var G__7147 = cljs.core.next.call(null,ks);
coll = G__7145;
k = G__7146;
ks = G__7147;
continue;
}
} else
{return ret__7143;
}
break;
}
};
var G__7144 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7144__delegate.call(this, coll, k, ks);
};
G__7144.cljs$lang$maxFixedArity = 2;
G__7144.cljs$lang$applyTo = (function (arglist__7148){
var coll = cljs.core.first(arglist__7148);
var k = cljs.core.first(cljs.core.next(arglist__7148));
var ks = cljs.core.rest(cljs.core.next(arglist__7148));
return G__7144__delegate(coll, k, ks);
});
G__7144.cljs$lang$arity$variadic = G__7144__delegate;
return G__7144;
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
if((function (){var G__7152__7153 = o;
if(G__7152__7153)
{if((function (){var or__3824__auto____7154 = (G__7152__7153.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{return G__7152__7153.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7152__7153.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7152__7153);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7152__7153);
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
var G__7157__delegate = function (coll,k,ks){
while(true){
var ret__7156 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7158 = ret__7156;
var G__7159 = cljs.core.first.call(null,ks);
var G__7160 = cljs.core.next.call(null,ks);
coll = G__7158;
k = G__7159;
ks = G__7160;
continue;
}
} else
{return ret__7156;
}
break;
}
};
var G__7157 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7157__delegate.call(this, coll, k, ks);
};
G__7157.cljs$lang$maxFixedArity = 2;
G__7157.cljs$lang$applyTo = (function (arglist__7161){
var coll = cljs.core.first(arglist__7161);
var k = cljs.core.first(cljs.core.next(arglist__7161));
var ks = cljs.core.rest(cljs.core.next(arglist__7161));
return G__7157__delegate(coll, k, ks);
});
G__7157.cljs$lang$arity$variadic = G__7157__delegate;
return G__7157;
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
var h__7163 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7163);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7163;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7165 = (cljs.core.string_hash_cache[k]);
if(!((h__7165 == null)))
{return h__7165;
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
if((function (){var and__3822__auto____7167 = goog.isString(o);
if(and__3822__auto____7167)
{return check_cache;
} else
{return and__3822__auto____7167;
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
{var G__7171__7172 = x;
if(G__7171__7172)
{if((function (){var or__3824__auto____7173 = (G__7171__7172.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7173)
{return or__3824__auto____7173;
} else
{return G__7171__7172.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7171__7172.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7171__7172);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7171__7172);
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
{var G__7177__7178 = x;
if(G__7177__7178)
{if((function (){var or__3824__auto____7179 = (G__7177__7178.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7179)
{return or__3824__auto____7179;
} else
{return G__7177__7178.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7177__7178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7177__7178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7177__7178);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7183__7184 = x;
if(G__7183__7184)
{if((function (){var or__3824__auto____7185 = (G__7183__7184.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{return G__7183__7184.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7183__7184.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7183__7184);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7183__7184);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7189__7190 = x;
if(G__7189__7190)
{if((function (){var or__3824__auto____7191 = (G__7189__7190.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7191)
{return or__3824__auto____7191;
} else
{return G__7189__7190.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7189__7190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7189__7190);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7189__7190);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7195__7196 = x;
if(G__7195__7196)
{if((function (){var or__3824__auto____7197 = (G__7195__7196.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7197)
{return or__3824__auto____7197;
} else
{return G__7195__7196.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7195__7196.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7195__7196);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7195__7196);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7201__7202 = x;
if(G__7201__7202)
{if((function (){var or__3824__auto____7203 = (G__7201__7202.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7203)
{return or__3824__auto____7203;
} else
{return G__7201__7202.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7201__7202.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7201__7202);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7201__7202);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7207__7208 = x;
if(G__7207__7208)
{if((function (){var or__3824__auto____7209 = (G__7207__7208.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7209)
{return or__3824__auto____7209;
} else
{return G__7207__7208.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7207__7208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7207__7208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7207__7208);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7213__7214 = x;
if(G__7213__7214)
{if((function (){var or__3824__auto____7215 = (G__7213__7214.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7215)
{return or__3824__auto____7215;
} else
{return G__7213__7214.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7213__7214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7213__7214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7213__7214);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7219__7220 = x;
if(G__7219__7220)
{if((function (){var or__3824__auto____7221 = (G__7219__7220.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7221)
{return or__3824__auto____7221;
} else
{return G__7219__7220.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7219__7220.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7219__7220);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7219__7220);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7225__7226 = x;
if(G__7225__7226)
{if(cljs.core.truth_((function (){var or__3824__auto____7227 = null;
if(cljs.core.truth_(or__3824__auto____7227))
{return or__3824__auto____7227;
} else
{return G__7225__7226.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7225__7226.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7225__7226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7225__7226);
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
var G__7228__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7228 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7228__delegate.call(this, keyvals);
};
G__7228.cljs$lang$maxFixedArity = 0;
G__7228.cljs$lang$applyTo = (function (arglist__7229){
var keyvals = cljs.core.seq(arglist__7229);;
return G__7228__delegate(keyvals);
});
G__7228.cljs$lang$arity$variadic = G__7228__delegate;
return G__7228;
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
var keys__7231 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7231.push(key);
}));
return keys__7231;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7235 = i;
var j__7236 = j;
var len__7237 = len;
while(true){
if((len__7237 === 0))
{return to;
} else
{(to[j__7236] = (from[i__7235]));
{
var G__7238 = (i__7235 + 1);
var G__7239 = (j__7236 + 1);
var G__7240 = (len__7237 - 1);
i__7235 = G__7238;
j__7236 = G__7239;
len__7237 = G__7240;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7244 = (i + (len - 1));
var j__7245 = (j + (len - 1));
var len__7246 = len;
while(true){
if((len__7246 === 0))
{return to;
} else
{(to[j__7245] = (from[i__7244]));
{
var G__7247 = (i__7244 - 1);
var G__7248 = (j__7245 - 1);
var G__7249 = (len__7246 - 1);
i__7244 = G__7247;
j__7245 = G__7248;
len__7246 = G__7249;
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
{var G__7253__7254 = s;
if(G__7253__7254)
{if((function (){var or__3824__auto____7255 = (G__7253__7254.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7255)
{return or__3824__auto____7255;
} else
{return G__7253__7254.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7253__7254.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7253__7254);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7253__7254);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7259__7260 = s;
if(G__7259__7260)
{if((function (){var or__3824__auto____7261 = (G__7259__7260.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7261)
{return or__3824__auto____7261;
} else
{return G__7259__7260.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7259__7260.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7259__7260);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7259__7260);
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
var and__3822__auto____7264 = goog.isString(x);
if(and__3822__auto____7264)
{return !((function (){var or__3824__auto____7265 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7264;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7267 = goog.isString(x);
if(and__3822__auto____7267)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7267;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7269 = goog.isString(x);
if(and__3822__auto____7269)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7269;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7274 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{var G__7275__7276 = f;
if(G__7275__7276)
{if((function (){var or__3824__auto____7277 = (G__7275__7276.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7277)
{return or__3824__auto____7277;
} else
{return G__7275__7276.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7275__7276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7275__7276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7275__7276);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7279 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7279)
{return (n == n.toFixed());
} else
{return and__3822__auto____7279;
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
if(cljs.core.truth_((function (){var and__3822__auto____7282 = coll;
if(cljs.core.truth_(and__3822__auto____7282))
{var and__3822__auto____7283 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7283)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7283;
}
} else
{return and__3822__auto____7282;
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
var G__7292__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7288 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7289 = more;
while(true){
var x__7290 = cljs.core.first.call(null,xs__7289);
var etc__7291 = cljs.core.next.call(null,xs__7289);
if(cljs.core.truth_(xs__7289))
{if(cljs.core.contains_QMARK_.call(null,s__7288,x__7290))
{return false;
} else
{{
var G__7293 = cljs.core.conj.call(null,s__7288,x__7290);
var G__7294 = etc__7291;
s__7288 = G__7293;
xs__7289 = G__7294;
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
var G__7292 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7292__delegate.call(this, x, y, more);
};
G__7292.cljs$lang$maxFixedArity = 2;
G__7292.cljs$lang$applyTo = (function (arglist__7295){
var x = cljs.core.first(arglist__7295);
var y = cljs.core.first(cljs.core.next(arglist__7295));
var more = cljs.core.rest(cljs.core.next(arglist__7295));
return G__7292__delegate(x, y, more);
});
G__7292.cljs$lang$arity$variadic = G__7292__delegate;
return G__7292;
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
{if((function (){var G__7299__7300 = x;
if(G__7299__7300)
{if(cljs.core.truth_((function (){var or__3824__auto____7301 = null;
if(cljs.core.truth_(or__3824__auto____7301))
{return or__3824__auto____7301;
} else
{return G__7299__7300.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7299__7300.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7299__7300);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7299__7300);
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
var xl__7306 = cljs.core.count.call(null,xs);
var yl__7307 = cljs.core.count.call(null,ys);
if((xl__7306 < yl__7307))
{return -1;
} else
{if((xl__7306 > yl__7307))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7306,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7308 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7309 = (d__7308 === 0);
if(and__3822__auto____7309)
{return ((n + 1) < len);
} else
{return and__3822__auto____7309;
}
})())
{{
var G__7310 = xs;
var G__7311 = ys;
var G__7312 = len;
var G__7313 = (n + 1);
xs = G__7310;
ys = G__7311;
len = G__7312;
n = G__7313;
continue;
}
} else
{return d__7308;
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
var r__7315 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7315))
{return r__7315;
} else
{if(cljs.core.truth_(r__7315))
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
{var a__7317 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7317,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7317);
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
var temp__3971__auto____7323 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7323)
{var s__7324 = temp__3971__auto____7323;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7324),cljs.core.next.call(null,s__7324));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7325 = val;
var coll__7326 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7326)
{var nval__7327 = f.call(null,val__7325,cljs.core.first.call(null,coll__7326));
if(cljs.core.reduced_QMARK_.call(null,nval__7327))
{return cljs.core.deref.call(null,nval__7327);
} else
{{
var G__7328 = nval__7327;
var G__7329 = cljs.core.next.call(null,coll__7326);
val__7325 = G__7328;
coll__7326 = G__7329;
continue;
}
}
} else
{return val__7325;
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
var a__7331 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7331);
return cljs.core.vec.call(null,a__7331);
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
if((function (){var G__7338__7339 = coll;
if(G__7338__7339)
{if((function (){var or__3824__auto____7340 = (G__7338__7339.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7340)
{return or__3824__auto____7340;
} else
{return G__7338__7339.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7338__7339.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7338__7339);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7338__7339);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7341__7342 = coll;
if(G__7341__7342)
{if((function (){var or__3824__auto____7343 = (G__7341__7342.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7343)
{return or__3824__auto____7343;
} else
{return G__7341__7342.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7341__7342.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7341__7342);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7341__7342);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7344 = this;
return this__7344.val;
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
var G__7345__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7345__delegate.call(this, x, y, more);
};
G__7345.cljs$lang$maxFixedArity = 2;
G__7345.cljs$lang$applyTo = (function (arglist__7346){
var x = cljs.core.first(arglist__7346);
var y = cljs.core.first(cljs.core.next(arglist__7346));
var more = cljs.core.rest(cljs.core.next(arglist__7346));
return G__7345__delegate(x, y, more);
});
G__7345.cljs$lang$arity$variadic = G__7345__delegate;
return G__7345;
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
var G__7347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7347__delegate.call(this, x, y, more);
};
G__7347.cljs$lang$maxFixedArity = 2;
G__7347.cljs$lang$applyTo = (function (arglist__7348){
var x = cljs.core.first(arglist__7348);
var y = cljs.core.first(cljs.core.next(arglist__7348));
var more = cljs.core.rest(cljs.core.next(arglist__7348));
return G__7347__delegate(x, y, more);
});
G__7347.cljs$lang$arity$variadic = G__7347__delegate;
return G__7347;
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
var G__7349__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7349__delegate.call(this, x, y, more);
};
G__7349.cljs$lang$maxFixedArity = 2;
G__7349.cljs$lang$applyTo = (function (arglist__7350){
var x = cljs.core.first(arglist__7350);
var y = cljs.core.first(cljs.core.next(arglist__7350));
var more = cljs.core.rest(cljs.core.next(arglist__7350));
return G__7349__delegate(x, y, more);
});
G__7349.cljs$lang$arity$variadic = G__7349__delegate;
return G__7349;
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
var G__7351__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7351 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7351__delegate.call(this, x, y, more);
};
G__7351.cljs$lang$maxFixedArity = 2;
G__7351.cljs$lang$applyTo = (function (arglist__7352){
var x = cljs.core.first(arglist__7352);
var y = cljs.core.first(cljs.core.next(arglist__7352));
var more = cljs.core.rest(cljs.core.next(arglist__7352));
return G__7351__delegate(x, y, more);
});
G__7351.cljs$lang$arity$variadic = G__7351__delegate;
return G__7351;
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
var G__7353__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7354 = y;
var G__7355 = cljs.core.first.call(null,more);
var G__7356 = cljs.core.next.call(null,more);
x = G__7354;
y = G__7355;
more = G__7356;
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
var G__7353 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7353__delegate.call(this, x, y, more);
};
G__7353.cljs$lang$maxFixedArity = 2;
G__7353.cljs$lang$applyTo = (function (arglist__7357){
var x = cljs.core.first(arglist__7357);
var y = cljs.core.first(cljs.core.next(arglist__7357));
var more = cljs.core.rest(cljs.core.next(arglist__7357));
return G__7353__delegate(x, y, more);
});
G__7353.cljs$lang$arity$variadic = G__7353__delegate;
return G__7353;
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
var G__7358__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7359 = y;
var G__7360 = cljs.core.first.call(null,more);
var G__7361 = cljs.core.next.call(null,more);
x = G__7359;
y = G__7360;
more = G__7361;
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
var G__7358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7358__delegate.call(this, x, y, more);
};
G__7358.cljs$lang$maxFixedArity = 2;
G__7358.cljs$lang$applyTo = (function (arglist__7362){
var x = cljs.core.first(arglist__7362);
var y = cljs.core.first(cljs.core.next(arglist__7362));
var more = cljs.core.rest(cljs.core.next(arglist__7362));
return G__7358__delegate(x, y, more);
});
G__7358.cljs$lang$arity$variadic = G__7358__delegate;
return G__7358;
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
var G__7363__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7364 = y;
var G__7365 = cljs.core.first.call(null,more);
var G__7366 = cljs.core.next.call(null,more);
x = G__7364;
y = G__7365;
more = G__7366;
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
var G__7363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7363__delegate.call(this, x, y, more);
};
G__7363.cljs$lang$maxFixedArity = 2;
G__7363.cljs$lang$applyTo = (function (arglist__7367){
var x = cljs.core.first(arglist__7367);
var y = cljs.core.first(cljs.core.next(arglist__7367));
var more = cljs.core.rest(cljs.core.next(arglist__7367));
return G__7363__delegate(x, y, more);
});
G__7363.cljs$lang$arity$variadic = G__7363__delegate;
return G__7363;
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
var G__7368__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7369 = y;
var G__7370 = cljs.core.first.call(null,more);
var G__7371 = cljs.core.next.call(null,more);
x = G__7369;
y = G__7370;
more = G__7371;
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
var G__7368 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7368__delegate.call(this, x, y, more);
};
G__7368.cljs$lang$maxFixedArity = 2;
G__7368.cljs$lang$applyTo = (function (arglist__7372){
var x = cljs.core.first(arglist__7372);
var y = cljs.core.first(cljs.core.next(arglist__7372));
var more = cljs.core.rest(cljs.core.next(arglist__7372));
return G__7368__delegate(x, y, more);
});
G__7368.cljs$lang$arity$variadic = G__7368__delegate;
return G__7368;
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
var G__7373__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7373__delegate.call(this, x, y, more);
};
G__7373.cljs$lang$maxFixedArity = 2;
G__7373.cljs$lang$applyTo = (function (arglist__7374){
var x = cljs.core.first(arglist__7374);
var y = cljs.core.first(cljs.core.next(arglist__7374));
var more = cljs.core.rest(cljs.core.next(arglist__7374));
return G__7373__delegate(x, y, more);
});
G__7373.cljs$lang$arity$variadic = G__7373__delegate;
return G__7373;
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
var G__7375__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7375 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7375__delegate.call(this, x, y, more);
};
G__7375.cljs$lang$maxFixedArity = 2;
G__7375.cljs$lang$applyTo = (function (arglist__7376){
var x = cljs.core.first(arglist__7376);
var y = cljs.core.first(cljs.core.next(arglist__7376));
var more = cljs.core.rest(cljs.core.next(arglist__7376));
return G__7375__delegate(x, y, more);
});
G__7375.cljs$lang$arity$variadic = G__7375__delegate;
return G__7375;
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
var rem__7378 = (n % d);
return cljs.core.fix.call(null,((n - rem__7378) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7380 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7380));
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
var v__7383 = (v - ((v >> 1) & 1431655765));
var v__7384 = ((v__7383 & 858993459) + ((v__7383 >> 2) & 858993459));
return ((((v__7384 + (v__7384 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7385__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7386 = y;
var G__7387 = cljs.core.first.call(null,more);
var G__7388 = cljs.core.next.call(null,more);
x = G__7386;
y = G__7387;
more = G__7388;
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
var G__7385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7385__delegate.call(this, x, y, more);
};
G__7385.cljs$lang$maxFixedArity = 2;
G__7385.cljs$lang$applyTo = (function (arglist__7389){
var x = cljs.core.first(arglist__7389);
var y = cljs.core.first(cljs.core.next(arglist__7389));
var more = cljs.core.rest(cljs.core.next(arglist__7389));
return G__7385__delegate(x, y, more);
});
G__7385.cljs$lang$arity$variadic = G__7385__delegate;
return G__7385;
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
var n__7393 = n;
var xs__7394 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7395 = xs__7394;
if(and__3822__auto____7395)
{return (n__7393 > 0);
} else
{return and__3822__auto____7395;
}
})()))
{{
var G__7396 = (n__7393 - 1);
var G__7397 = cljs.core.next.call(null,xs__7394);
n__7393 = G__7396;
xs__7394 = G__7397;
continue;
}
} else
{return xs__7394;
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
var G__7398__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7399 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7400 = cljs.core.next.call(null,more);
sb = G__7399;
more = G__7400;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7398 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7398__delegate.call(this, x, ys);
};
G__7398.cljs$lang$maxFixedArity = 1;
G__7398.cljs$lang$applyTo = (function (arglist__7401){
var x = cljs.core.first(arglist__7401);
var ys = cljs.core.rest(arglist__7401);
return G__7398__delegate(x, ys);
});
G__7398.cljs$lang$arity$variadic = G__7398__delegate;
return G__7398;
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
var G__7402__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7403 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7404 = cljs.core.next.call(null,more);
sb = G__7403;
more = G__7404;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7402 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7402__delegate.call(this, x, ys);
};
G__7402.cljs$lang$maxFixedArity = 1;
G__7402.cljs$lang$applyTo = (function (arglist__7405){
var x = cljs.core.first(arglist__7405);
var ys = cljs.core.rest(arglist__7405);
return G__7402__delegate(x, ys);
});
G__7402.cljs$lang$arity$variadic = G__7402__delegate;
return G__7402;
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
format.cljs$lang$applyTo = (function (arglist__7406){
var fmt = cljs.core.first(arglist__7406);
var args = cljs.core.rest(arglist__7406);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7409 = cljs.core.seq.call(null,x);
var ys__7410 = cljs.core.seq.call(null,y);
while(true){
if((xs__7409 == null))
{return (ys__7410 == null);
} else
{if((ys__7410 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7409),cljs.core.first.call(null,ys__7410)))
{{
var G__7411 = cljs.core.next.call(null,xs__7409);
var G__7412 = cljs.core.next.call(null,ys__7410);
xs__7409 = G__7411;
ys__7410 = G__7412;
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
return cljs.core.reduce.call(null,(function (p1__7413_SHARP_,p2__7414_SHARP_){
return cljs.core.hash_combine.call(null,p1__7413_SHARP_,cljs.core.hash.call(null,p2__7414_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7418 = 0;
var s__7419 = cljs.core.seq.call(null,m);
while(true){
if(s__7419)
{var e__7420 = cljs.core.first.call(null,s__7419);
{
var G__7421 = ((h__7418 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7420)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7420)))) % 4503599627370496);
var G__7422 = cljs.core.next.call(null,s__7419);
h__7418 = G__7421;
s__7419 = G__7422;
continue;
}
} else
{return h__7418;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7426 = 0;
var s__7427 = cljs.core.seq.call(null,s);
while(true){
if(s__7427)
{var e__7428 = cljs.core.first.call(null,s__7427);
{
var G__7429 = ((h__7426 + cljs.core.hash.call(null,e__7428)) % 4503599627370496);
var G__7430 = cljs.core.next.call(null,s__7427);
h__7426 = G__7429;
s__7427 = G__7430;
continue;
}
} else
{return h__7426;
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
var G__7451__7452 = cljs.core.seq.call(null,fn_map);
if(G__7451__7452)
{var G__7454__7456 = cljs.core.first.call(null,G__7451__7452);
var vec__7455__7457 = G__7454__7456;
var key_name__7458 = cljs.core.nth.call(null,vec__7455__7457,0,null);
var f__7459 = cljs.core.nth.call(null,vec__7455__7457,1,null);
var G__7451__7460 = G__7451__7452;
var G__7454__7461 = G__7454__7456;
var G__7451__7462 = G__7451__7460;
while(true){
var vec__7463__7464 = G__7454__7461;
var key_name__7465 = cljs.core.nth.call(null,vec__7463__7464,0,null);
var f__7466 = cljs.core.nth.call(null,vec__7463__7464,1,null);
var G__7451__7467 = G__7451__7462;
var str_name__7468 = cljs.core.name.call(null,key_name__7465);
(obj[str_name__7468] = f__7466);
var temp__3974__auto____7469 = cljs.core.next.call(null,G__7451__7467);
if(temp__3974__auto____7469)
{var G__7451__7470 = temp__3974__auto____7469;
{
var G__7471 = cljs.core.first.call(null,G__7451__7470);
var G__7472 = G__7451__7470;
G__7454__7461 = G__7471;
G__7451__7462 = G__7472;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7473 = this;
var h__2309__auto____7474 = this__7473.__hash;
if(!((h__2309__auto____7474 == null)))
{return h__2309__auto____7474;
} else
{var h__2309__auto____7475 = cljs.core.hash_coll.call(null,coll);
this__7473.__hash = h__2309__auto____7475;
return h__2309__auto____7475;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7476 = this;
if((this__7476.count === 1))
{return null;
} else
{return this__7476.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7477 = this;
return (new cljs.core.List(this__7477.meta,o,coll,(this__7477.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7478 = this;
var this__7479 = this;
return cljs.core.pr_str.call(null,this__7479);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7480 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7481 = this;
return this__7481.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7482 = this;
return this__7482.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7483 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7484 = this;
return this__7484.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7485 = this;
if((this__7485.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7485.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7486 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7487 = this;
return (new cljs.core.List(meta,this__7487.first,this__7487.rest,this__7487.count,this__7487.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7488 = this;
return this__7488.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7489 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7490 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7491 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7492 = this;
return (new cljs.core.List(this__7492.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7493 = this;
var this__7494 = this;
return cljs.core.pr_str.call(null,this__7494);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7495 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7496 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7497 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7498 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7499 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7500 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7501 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7502 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7503 = this;
return this__7503.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7504 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7508__7509 = coll;
if(G__7508__7509)
{if((function (){var or__3824__auto____7510 = (G__7508__7509.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7510)
{return or__3824__auto____7510;
} else
{return G__7508__7509.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7508__7509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7508__7509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7508__7509);
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
var G__7511__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7511 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7511__delegate.call(this, x, y, z, items);
};
G__7511.cljs$lang$maxFixedArity = 3;
G__7511.cljs$lang$applyTo = (function (arglist__7512){
var x = cljs.core.first(arglist__7512);
var y = cljs.core.first(cljs.core.next(arglist__7512));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7512)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7512)));
return G__7511__delegate(x, y, z, items);
});
G__7511.cljs$lang$arity$variadic = G__7511__delegate;
return G__7511;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7513 = this;
var h__2309__auto____7514 = this__7513.__hash;
if(!((h__2309__auto____7514 == null)))
{return h__2309__auto____7514;
} else
{var h__2309__auto____7515 = cljs.core.hash_coll.call(null,coll);
this__7513.__hash = h__2309__auto____7515;
return h__2309__auto____7515;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7516 = this;
if((this__7516.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7516.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7517 = this;
return (new cljs.core.Cons(null,o,coll,this__7517.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7518 = this;
var this__7519 = this;
return cljs.core.pr_str.call(null,this__7519);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7520 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7521 = this;
return this__7521.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7522 = this;
if((this__7522.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7522.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7523 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7524 = this;
return (new cljs.core.Cons(meta,this__7524.first,this__7524.rest,this__7524.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7525 = this;
return this__7525.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7526 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7526.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7531 = (coll == null);
if(or__3824__auto____7531)
{return or__3824__auto____7531;
} else
{var G__7532__7533 = coll;
if(G__7532__7533)
{if((function (){var or__3824__auto____7534 = (G__7532__7533.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7534)
{return or__3824__auto____7534;
} else
{return G__7532__7533.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7532__7533.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7532__7533);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7532__7533);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7538__7539 = x;
if(G__7538__7539)
{if((function (){var or__3824__auto____7540 = (G__7538__7539.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7540)
{return or__3824__auto____7540;
} else
{return G__7538__7539.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7538__7539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7538__7539);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7538__7539);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7541 = null;
var G__7541__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7541__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7541 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7541__2.call(this,string,f);
case 3:
return G__7541__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7541;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7542 = null;
var G__7542__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7542__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7542 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7542__2.call(this,string,k);
case 3:
return G__7542__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7542;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7543 = null;
var G__7543__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7543__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7543 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7543__2.call(this,string,n);
case 3:
return G__7543__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7543;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7555 = null;
var G__7555__2 = (function (this_sym7546,coll){
var this__7548 = this;
var this_sym7546__7549 = this;
var ___7550 = this_sym7546__7549;
if((coll == null))
{return null;
} else
{var strobj__7551 = coll.strobj;
if((strobj__7551 == null))
{return cljs.core._lookup.call(null,coll,this__7548.k,null);
} else
{return (strobj__7551[this__7548.k]);
}
}
});
var G__7555__3 = (function (this_sym7547,coll,not_found){
var this__7548 = this;
var this_sym7547__7552 = this;
var ___7553 = this_sym7547__7552;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7548.k,not_found);
}
});
G__7555 = function(this_sym7547,coll,not_found){
switch(arguments.length){
case 2:
return G__7555__2.call(this,this_sym7547,coll);
case 3:
return G__7555__3.call(this,this_sym7547,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7555;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7544,args7545){
var this__7554 = this;
return this_sym7544.call.apply(this_sym7544,[this_sym7544].concat(args7545.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7564 = null;
var G__7564__2 = (function (this_sym7558,coll){
var this_sym7558__7560 = this;
var this__7561 = this_sym7558__7560;
return cljs.core._lookup.call(null,coll,this__7561.toString(),null);
});
var G__7564__3 = (function (this_sym7559,coll,not_found){
var this_sym7559__7562 = this;
var this__7563 = this_sym7559__7562;
return cljs.core._lookup.call(null,coll,this__7563.toString(),not_found);
});
G__7564 = function(this_sym7559,coll,not_found){
switch(arguments.length){
case 2:
return G__7564__2.call(this,this_sym7559,coll);
case 3:
return G__7564__3.call(this,this_sym7559,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7564;
})()
;
String.prototype.apply = (function (this_sym7556,args7557){
return this_sym7556.call.apply(this_sym7556,[this_sym7556].concat(args7557.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7566 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7566;
} else
{lazy_seq.x = x__7566.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7567 = this;
var h__2309__auto____7568 = this__7567.__hash;
if(!((h__2309__auto____7568 == null)))
{return h__2309__auto____7568;
} else
{var h__2309__auto____7569 = cljs.core.hash_coll.call(null,coll);
this__7567.__hash = h__2309__auto____7569;
return h__2309__auto____7569;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7570 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7571 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7572 = this;
var this__7573 = this;
return cljs.core.pr_str.call(null,this__7573);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7574 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7575 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7576 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7578 = this;
return (new cljs.core.LazySeq(meta,this__7578.realized,this__7578.x,this__7578.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7579 = this;
return this__7579.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7580 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7580.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7581 = this;
return this__7581.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7582 = this;
var ___7583 = this;
(this__7582.buf[this__7582.end] = o);
return this__7582.end = (this__7582.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7584 = this;
var ___7585 = this;
var ret__7586 = (new cljs.core.ArrayChunk(this__7584.buf,0,this__7584.end));
this__7584.buf = null;
return ret__7586;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7587 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7587.arr[this__7587.off]),(this__7587.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7588 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7588.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7589 = this;
if((this__7589.off === this__7589.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7589.arr,(this__7589.off + 1),this__7589.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7590 = this;
return (this__7590.arr[(this__7590.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7591 = this;
if((function (){var and__3822__auto____7592 = (i >= 0);
if(and__3822__auto____7592)
{return (i < (this__7591.end - this__7591.off));
} else
{return and__3822__auto____7592;
}
})())
{return (this__7591.arr[(this__7591.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7593 = this;
return (this__7593.end - this__7593.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7594 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7595 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7596 = this;
return cljs.core._nth.call(null,this__7596.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7597 = this;
if((cljs.core._count.call(null,this__7597.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7597.chunk),this__7597.more,this__7597.meta));
} else
{if((this__7597.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7597.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7598 = this;
if((this__7598.more == null))
{return null;
} else
{return this__7598.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7599 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7600 = this;
return (new cljs.core.ChunkedCons(this__7600.chunk,this__7600.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7601 = this;
return this__7601.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7602 = this;
return this__7602.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7603 = this;
if((this__7603.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7603.more;
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
if((function (){var G__7607__7608 = s;
if(G__7607__7608)
{if(cljs.core.truth_((function (){var or__3824__auto____7609 = null;
if(cljs.core.truth_(or__3824__auto____7609))
{return or__3824__auto____7609;
} else
{return G__7607__7608.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7607__7608.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7607__7608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7607__7608);
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
var ary__7612 = [];
var s__7613 = s;
while(true){
if(cljs.core.seq.call(null,s__7613))
{ary__7612.push(cljs.core.first.call(null,s__7613));
{
var G__7614 = cljs.core.next.call(null,s__7613);
s__7613 = G__7614;
continue;
}
} else
{return ary__7612;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7618 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7619 = 0;
var xs__7620 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7620)
{(ret__7618[i__7619] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7620)));
{
var G__7621 = (i__7619 + 1);
var G__7622 = cljs.core.next.call(null,xs__7620);
i__7619 = G__7621;
xs__7620 = G__7622;
continue;
}
} else
{}
break;
}
return ret__7618;
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
var a__7630 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7631 = cljs.core.seq.call(null,init_val_or_seq);
var i__7632 = 0;
var s__7633 = s__7631;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7634 = s__7633;
if(and__3822__auto____7634)
{return (i__7632 < size);
} else
{return and__3822__auto____7634;
}
})()))
{(a__7630[i__7632] = cljs.core.first.call(null,s__7633));
{
var G__7637 = (i__7632 + 1);
var G__7638 = cljs.core.next.call(null,s__7633);
i__7632 = G__7637;
s__7633 = G__7638;
continue;
}
} else
{return a__7630;
}
break;
}
} else
{var n__2644__auto____7635 = size;
var i__7636 = 0;
while(true){
if((i__7636 < n__2644__auto____7635))
{(a__7630[i__7636] = init_val_or_seq);
{
var G__7639 = (i__7636 + 1);
i__7636 = G__7639;
continue;
}
} else
{}
break;
}
return a__7630;
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
var a__7647 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7648 = cljs.core.seq.call(null,init_val_or_seq);
var i__7649 = 0;
var s__7650 = s__7648;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7651 = s__7650;
if(and__3822__auto____7651)
{return (i__7649 < size);
} else
{return and__3822__auto____7651;
}
})()))
{(a__7647[i__7649] = cljs.core.first.call(null,s__7650));
{
var G__7654 = (i__7649 + 1);
var G__7655 = cljs.core.next.call(null,s__7650);
i__7649 = G__7654;
s__7650 = G__7655;
continue;
}
} else
{return a__7647;
}
break;
}
} else
{var n__2644__auto____7652 = size;
var i__7653 = 0;
while(true){
if((i__7653 < n__2644__auto____7652))
{(a__7647[i__7653] = init_val_or_seq);
{
var G__7656 = (i__7653 + 1);
i__7653 = G__7656;
continue;
}
} else
{}
break;
}
return a__7647;
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
var a__7664 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7665 = cljs.core.seq.call(null,init_val_or_seq);
var i__7666 = 0;
var s__7667 = s__7665;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7668 = s__7667;
if(and__3822__auto____7668)
{return (i__7666 < size);
} else
{return and__3822__auto____7668;
}
})()))
{(a__7664[i__7666] = cljs.core.first.call(null,s__7667));
{
var G__7671 = (i__7666 + 1);
var G__7672 = cljs.core.next.call(null,s__7667);
i__7666 = G__7671;
s__7667 = G__7672;
continue;
}
} else
{return a__7664;
}
break;
}
} else
{var n__2644__auto____7669 = size;
var i__7670 = 0;
while(true){
if((i__7670 < n__2644__auto____7669))
{(a__7664[i__7670] = init_val_or_seq);
{
var G__7673 = (i__7670 + 1);
i__7670 = G__7673;
continue;
}
} else
{}
break;
}
return a__7664;
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
{var s__7678 = s;
var i__7679 = n;
var sum__7680 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7681 = (i__7679 > 0);
if(and__3822__auto____7681)
{return cljs.core.seq.call(null,s__7678);
} else
{return and__3822__auto____7681;
}
})()))
{{
var G__7682 = cljs.core.next.call(null,s__7678);
var G__7683 = (i__7679 - 1);
var G__7684 = (sum__7680 + 1);
s__7678 = G__7682;
i__7679 = G__7683;
sum__7680 = G__7684;
continue;
}
} else
{return sum__7680;
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
var s__7689 = cljs.core.seq.call(null,x);
if(s__7689)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7689))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7689),concat.call(null,cljs.core.chunk_rest.call(null,s__7689),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7689),concat.call(null,cljs.core.rest.call(null,s__7689),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7693__delegate = function (x,y,zs){
var cat__7692 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7691 = cljs.core.seq.call(null,xys);
if(xys__7691)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7691))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7691),cat.call(null,cljs.core.chunk_rest.call(null,xys__7691),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7691),cat.call(null,cljs.core.rest.call(null,xys__7691),zs));
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
return cat__7692.call(null,concat.call(null,x,y),zs);
};
var G__7693 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7693__delegate.call(this, x, y, zs);
};
G__7693.cljs$lang$maxFixedArity = 2;
G__7693.cljs$lang$applyTo = (function (arglist__7694){
var x = cljs.core.first(arglist__7694);
var y = cljs.core.first(cljs.core.next(arglist__7694));
var zs = cljs.core.rest(cljs.core.next(arglist__7694));
return G__7693__delegate(x, y, zs);
});
G__7693.cljs$lang$arity$variadic = G__7693__delegate;
return G__7693;
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
var G__7695__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7695 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7695__delegate.call(this, a, b, c, d, more);
};
G__7695.cljs$lang$maxFixedArity = 4;
G__7695.cljs$lang$applyTo = (function (arglist__7696){
var a = cljs.core.first(arglist__7696);
var b = cljs.core.first(cljs.core.next(arglist__7696));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7696)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7696))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7696))));
return G__7695__delegate(a, b, c, d, more);
});
G__7695.cljs$lang$arity$variadic = G__7695__delegate;
return G__7695;
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
var args__7738 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7739 = cljs.core._first.call(null,args__7738);
var args__7740 = cljs.core._rest.call(null,args__7738);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7739);
} else
{return f.call(null,a__7739);
}
} else
{var b__7741 = cljs.core._first.call(null,args__7740);
var args__7742 = cljs.core._rest.call(null,args__7740);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7739,b__7741);
} else
{return f.call(null,a__7739,b__7741);
}
} else
{var c__7743 = cljs.core._first.call(null,args__7742);
var args__7744 = cljs.core._rest.call(null,args__7742);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7739,b__7741,c__7743);
} else
{return f.call(null,a__7739,b__7741,c__7743);
}
} else
{var d__7745 = cljs.core._first.call(null,args__7744);
var args__7746 = cljs.core._rest.call(null,args__7744);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7739,b__7741,c__7743,d__7745);
} else
{return f.call(null,a__7739,b__7741,c__7743,d__7745);
}
} else
{var e__7747 = cljs.core._first.call(null,args__7746);
var args__7748 = cljs.core._rest.call(null,args__7746);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7739,b__7741,c__7743,d__7745,e__7747);
} else
{return f.call(null,a__7739,b__7741,c__7743,d__7745,e__7747);
}
} else
{var f__7749 = cljs.core._first.call(null,args__7748);
var args__7750 = cljs.core._rest.call(null,args__7748);
if((argc === 6))
{if(f__7749.cljs$lang$arity$6)
{return f__7749.cljs$lang$arity$6(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749);
}
} else
{var g__7751 = cljs.core._first.call(null,args__7750);
var args__7752 = cljs.core._rest.call(null,args__7750);
if((argc === 7))
{if(f__7749.cljs$lang$arity$7)
{return f__7749.cljs$lang$arity$7(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751);
}
} else
{var h__7753 = cljs.core._first.call(null,args__7752);
var args__7754 = cljs.core._rest.call(null,args__7752);
if((argc === 8))
{if(f__7749.cljs$lang$arity$8)
{return f__7749.cljs$lang$arity$8(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753);
}
} else
{var i__7755 = cljs.core._first.call(null,args__7754);
var args__7756 = cljs.core._rest.call(null,args__7754);
if((argc === 9))
{if(f__7749.cljs$lang$arity$9)
{return f__7749.cljs$lang$arity$9(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755);
}
} else
{var j__7757 = cljs.core._first.call(null,args__7756);
var args__7758 = cljs.core._rest.call(null,args__7756);
if((argc === 10))
{if(f__7749.cljs$lang$arity$10)
{return f__7749.cljs$lang$arity$10(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757);
}
} else
{var k__7759 = cljs.core._first.call(null,args__7758);
var args__7760 = cljs.core._rest.call(null,args__7758);
if((argc === 11))
{if(f__7749.cljs$lang$arity$11)
{return f__7749.cljs$lang$arity$11(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759);
}
} else
{var l__7761 = cljs.core._first.call(null,args__7760);
var args__7762 = cljs.core._rest.call(null,args__7760);
if((argc === 12))
{if(f__7749.cljs$lang$arity$12)
{return f__7749.cljs$lang$arity$12(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761);
}
} else
{var m__7763 = cljs.core._first.call(null,args__7762);
var args__7764 = cljs.core._rest.call(null,args__7762);
if((argc === 13))
{if(f__7749.cljs$lang$arity$13)
{return f__7749.cljs$lang$arity$13(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763);
}
} else
{var n__7765 = cljs.core._first.call(null,args__7764);
var args__7766 = cljs.core._rest.call(null,args__7764);
if((argc === 14))
{if(f__7749.cljs$lang$arity$14)
{return f__7749.cljs$lang$arity$14(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765);
}
} else
{var o__7767 = cljs.core._first.call(null,args__7766);
var args__7768 = cljs.core._rest.call(null,args__7766);
if((argc === 15))
{if(f__7749.cljs$lang$arity$15)
{return f__7749.cljs$lang$arity$15(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767);
}
} else
{var p__7769 = cljs.core._first.call(null,args__7768);
var args__7770 = cljs.core._rest.call(null,args__7768);
if((argc === 16))
{if(f__7749.cljs$lang$arity$16)
{return f__7749.cljs$lang$arity$16(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769);
}
} else
{var q__7771 = cljs.core._first.call(null,args__7770);
var args__7772 = cljs.core._rest.call(null,args__7770);
if((argc === 17))
{if(f__7749.cljs$lang$arity$17)
{return f__7749.cljs$lang$arity$17(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771);
}
} else
{var r__7773 = cljs.core._first.call(null,args__7772);
var args__7774 = cljs.core._rest.call(null,args__7772);
if((argc === 18))
{if(f__7749.cljs$lang$arity$18)
{return f__7749.cljs$lang$arity$18(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773);
}
} else
{var s__7775 = cljs.core._first.call(null,args__7774);
var args__7776 = cljs.core._rest.call(null,args__7774);
if((argc === 19))
{if(f__7749.cljs$lang$arity$19)
{return f__7749.cljs$lang$arity$19(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773,s__7775);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773,s__7775);
}
} else
{var t__7777 = cljs.core._first.call(null,args__7776);
var args__7778 = cljs.core._rest.call(null,args__7776);
if((argc === 20))
{if(f__7749.cljs$lang$arity$20)
{return f__7749.cljs$lang$arity$20(a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773,s__7775,t__7777);
} else
{return f__7749.call(null,a__7739,b__7741,c__7743,d__7745,e__7747,f__7749,g__7751,h__7753,i__7755,j__7757,k__7759,l__7761,m__7763,n__7765,o__7767,p__7769,q__7771,r__7773,s__7775,t__7777);
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
var fixed_arity__7793 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7794 = cljs.core.bounded_count.call(null,args,(fixed_arity__7793 + 1));
if((bc__7794 <= fixed_arity__7793))
{return cljs.core.apply_to.call(null,f,bc__7794,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7795 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7796 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7797 = cljs.core.bounded_count.call(null,arglist__7795,(fixed_arity__7796 + 1));
if((bc__7797 <= fixed_arity__7796))
{return cljs.core.apply_to.call(null,f,bc__7797,arglist__7795);
} else
{return f.cljs$lang$applyTo(arglist__7795);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7795));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7798 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7799 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7800 = cljs.core.bounded_count.call(null,arglist__7798,(fixed_arity__7799 + 1));
if((bc__7800 <= fixed_arity__7799))
{return cljs.core.apply_to.call(null,f,bc__7800,arglist__7798);
} else
{return f.cljs$lang$applyTo(arglist__7798);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7798));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7801 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7802 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7803 = cljs.core.bounded_count.call(null,arglist__7801,(fixed_arity__7802 + 1));
if((bc__7803 <= fixed_arity__7802))
{return cljs.core.apply_to.call(null,f,bc__7803,arglist__7801);
} else
{return f.cljs$lang$applyTo(arglist__7801);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7801));
}
});
var apply__6 = (function() { 
var G__7807__delegate = function (f,a,b,c,d,args){
var arglist__7804 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7805 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7806 = cljs.core.bounded_count.call(null,arglist__7804,(fixed_arity__7805 + 1));
if((bc__7806 <= fixed_arity__7805))
{return cljs.core.apply_to.call(null,f,bc__7806,arglist__7804);
} else
{return f.cljs$lang$applyTo(arglist__7804);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7804));
}
};
var G__7807 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7807__delegate.call(this, f, a, b, c, d, args);
};
G__7807.cljs$lang$maxFixedArity = 5;
G__7807.cljs$lang$applyTo = (function (arglist__7808){
var f = cljs.core.first(arglist__7808);
var a = cljs.core.first(cljs.core.next(arglist__7808));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7808)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7808))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7808)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7808)))));
return G__7807__delegate(f, a, b, c, d, args);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7809){
var obj = cljs.core.first(arglist__7809);
var f = cljs.core.first(cljs.core.next(arglist__7809));
var args = cljs.core.rest(cljs.core.next(arglist__7809));
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
var G__7810__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7810 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7810__delegate.call(this, x, y, more);
};
G__7810.cljs$lang$maxFixedArity = 2;
G__7810.cljs$lang$applyTo = (function (arglist__7811){
var x = cljs.core.first(arglist__7811);
var y = cljs.core.first(cljs.core.next(arglist__7811));
var more = cljs.core.rest(cljs.core.next(arglist__7811));
return G__7810__delegate(x, y, more);
});
G__7810.cljs$lang$arity$variadic = G__7810__delegate;
return G__7810;
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
var G__7812 = pred;
var G__7813 = cljs.core.next.call(null,coll);
pred = G__7812;
coll = G__7813;
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
{var or__3824__auto____7815 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7815))
{return or__3824__auto____7815;
} else
{{
var G__7816 = pred;
var G__7817 = cljs.core.next.call(null,coll);
pred = G__7816;
coll = G__7817;
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
var G__7818 = null;
var G__7818__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7818__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7818__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7818__3 = (function() { 
var G__7819__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7819 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7819__delegate.call(this, x, y, zs);
};
G__7819.cljs$lang$maxFixedArity = 2;
G__7819.cljs$lang$applyTo = (function (arglist__7820){
var x = cljs.core.first(arglist__7820);
var y = cljs.core.first(cljs.core.next(arglist__7820));
var zs = cljs.core.rest(cljs.core.next(arglist__7820));
return G__7819__delegate(x, y, zs);
});
G__7819.cljs$lang$arity$variadic = G__7819__delegate;
return G__7819;
})()
;
G__7818 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7818__0.call(this);
case 1:
return G__7818__1.call(this,x);
case 2:
return G__7818__2.call(this,x,y);
default:
return G__7818__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7818.cljs$lang$maxFixedArity = 2;
G__7818.cljs$lang$applyTo = G__7818__3.cljs$lang$applyTo;
return G__7818;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7821__delegate = function (args){
return x;
};
var G__7821 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7821__delegate.call(this, args);
};
G__7821.cljs$lang$maxFixedArity = 0;
G__7821.cljs$lang$applyTo = (function (arglist__7822){
var args = cljs.core.seq(arglist__7822);;
return G__7821__delegate(args);
});
G__7821.cljs$lang$arity$variadic = G__7821__delegate;
return G__7821;
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
var G__7829 = null;
var G__7829__0 = (function (){
return f.call(null,g.call(null));
});
var G__7829__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7829__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7829__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7829__4 = (function() { 
var G__7830__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7830__delegate.call(this, x, y, z, args);
};
G__7830.cljs$lang$maxFixedArity = 3;
G__7830.cljs$lang$applyTo = (function (arglist__7831){
var x = cljs.core.first(arglist__7831);
var y = cljs.core.first(cljs.core.next(arglist__7831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7831)));
return G__7830__delegate(x, y, z, args);
});
G__7830.cljs$lang$arity$variadic = G__7830__delegate;
return G__7830;
})()
;
G__7829 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7829__0.call(this);
case 1:
return G__7829__1.call(this,x);
case 2:
return G__7829__2.call(this,x,y);
case 3:
return G__7829__3.call(this,x,y,z);
default:
return G__7829__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7829.cljs$lang$maxFixedArity = 3;
G__7829.cljs$lang$applyTo = G__7829__4.cljs$lang$applyTo;
return G__7829;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7832 = null;
var G__7832__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7832__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7832__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7832__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7832__4 = (function() { 
var G__7833__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7833 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7833__delegate.call(this, x, y, z, args);
};
G__7833.cljs$lang$maxFixedArity = 3;
G__7833.cljs$lang$applyTo = (function (arglist__7834){
var x = cljs.core.first(arglist__7834);
var y = cljs.core.first(cljs.core.next(arglist__7834));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7834)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7834)));
return G__7833__delegate(x, y, z, args);
});
G__7833.cljs$lang$arity$variadic = G__7833__delegate;
return G__7833;
})()
;
G__7832 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7832__0.call(this);
case 1:
return G__7832__1.call(this,x);
case 2:
return G__7832__2.call(this,x,y);
case 3:
return G__7832__3.call(this,x,y,z);
default:
return G__7832__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7832.cljs$lang$maxFixedArity = 3;
G__7832.cljs$lang$applyTo = G__7832__4.cljs$lang$applyTo;
return G__7832;
})()
});
var comp__4 = (function() { 
var G__7835__delegate = function (f1,f2,f3,fs){
var fs__7826 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7836__delegate = function (args){
var ret__7827 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7826),args);
var fs__7828 = cljs.core.next.call(null,fs__7826);
while(true){
if(fs__7828)
{{
var G__7837 = cljs.core.first.call(null,fs__7828).call(null,ret__7827);
var G__7838 = cljs.core.next.call(null,fs__7828);
ret__7827 = G__7837;
fs__7828 = G__7838;
continue;
}
} else
{return ret__7827;
}
break;
}
};
var G__7836 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7836__delegate.call(this, args);
};
G__7836.cljs$lang$maxFixedArity = 0;
G__7836.cljs$lang$applyTo = (function (arglist__7839){
var args = cljs.core.seq(arglist__7839);;
return G__7836__delegate(args);
});
G__7836.cljs$lang$arity$variadic = G__7836__delegate;
return G__7836;
})()
;
};
var G__7835 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7835__delegate.call(this, f1, f2, f3, fs);
};
G__7835.cljs$lang$maxFixedArity = 3;
G__7835.cljs$lang$applyTo = (function (arglist__7840){
var f1 = cljs.core.first(arglist__7840);
var f2 = cljs.core.first(cljs.core.next(arglist__7840));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7840)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7840)));
return G__7835__delegate(f1, f2, f3, fs);
});
G__7835.cljs$lang$arity$variadic = G__7835__delegate;
return G__7835;
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
var G__7841__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7841 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7841__delegate.call(this, args);
};
G__7841.cljs$lang$maxFixedArity = 0;
G__7841.cljs$lang$applyTo = (function (arglist__7842){
var args = cljs.core.seq(arglist__7842);;
return G__7841__delegate(args);
});
G__7841.cljs$lang$arity$variadic = G__7841__delegate;
return G__7841;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7843__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7843 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7843__delegate.call(this, args);
};
G__7843.cljs$lang$maxFixedArity = 0;
G__7843.cljs$lang$applyTo = (function (arglist__7844){
var args = cljs.core.seq(arglist__7844);;
return G__7843__delegate(args);
});
G__7843.cljs$lang$arity$variadic = G__7843__delegate;
return G__7843;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7845__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7845 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7845__delegate.call(this, args);
};
G__7845.cljs$lang$maxFixedArity = 0;
G__7845.cljs$lang$applyTo = (function (arglist__7846){
var args = cljs.core.seq(arglist__7846);;
return G__7845__delegate(args);
});
G__7845.cljs$lang$arity$variadic = G__7845__delegate;
return G__7845;
})()
;
});
var partial__5 = (function() { 
var G__7847__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7848__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7848 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7848__delegate.call(this, args);
};
G__7848.cljs$lang$maxFixedArity = 0;
G__7848.cljs$lang$applyTo = (function (arglist__7849){
var args = cljs.core.seq(arglist__7849);;
return G__7848__delegate(args);
});
G__7848.cljs$lang$arity$variadic = G__7848__delegate;
return G__7848;
})()
;
};
var G__7847 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7847__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7847.cljs$lang$maxFixedArity = 4;
G__7847.cljs$lang$applyTo = (function (arglist__7850){
var f = cljs.core.first(arglist__7850);
var arg1 = cljs.core.first(cljs.core.next(arglist__7850));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7850)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7850))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7850))));
return G__7847__delegate(f, arg1, arg2, arg3, more);
});
G__7847.cljs$lang$arity$variadic = G__7847__delegate;
return G__7847;
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
var G__7851 = null;
var G__7851__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7851__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7851__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7851__4 = (function() { 
var G__7852__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7852 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7852__delegate.call(this, a, b, c, ds);
};
G__7852.cljs$lang$maxFixedArity = 3;
G__7852.cljs$lang$applyTo = (function (arglist__7853){
var a = cljs.core.first(arglist__7853);
var b = cljs.core.first(cljs.core.next(arglist__7853));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7853)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7853)));
return G__7852__delegate(a, b, c, ds);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
})()
;
G__7851 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7851__1.call(this,a);
case 2:
return G__7851__2.call(this,a,b);
case 3:
return G__7851__3.call(this,a,b,c);
default:
return G__7851__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7851.cljs$lang$maxFixedArity = 3;
G__7851.cljs$lang$applyTo = G__7851__4.cljs$lang$applyTo;
return G__7851;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7854 = null;
var G__7854__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7854__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7854__4 = (function() { 
var G__7855__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7855 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7855__delegate.call(this, a, b, c, ds);
};
G__7855.cljs$lang$maxFixedArity = 3;
G__7855.cljs$lang$applyTo = (function (arglist__7856){
var a = cljs.core.first(arglist__7856);
var b = cljs.core.first(cljs.core.next(arglist__7856));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7856)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7856)));
return G__7855__delegate(a, b, c, ds);
});
G__7855.cljs$lang$arity$variadic = G__7855__delegate;
return G__7855;
})()
;
G__7854 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7854__2.call(this,a,b);
case 3:
return G__7854__3.call(this,a,b,c);
default:
return G__7854__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7854.cljs$lang$maxFixedArity = 3;
G__7854.cljs$lang$applyTo = G__7854__4.cljs$lang$applyTo;
return G__7854;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7857 = null;
var G__7857__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7857__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7857__4 = (function() { 
var G__7858__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7858 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7858__delegate.call(this, a, b, c, ds);
};
G__7858.cljs$lang$maxFixedArity = 3;
G__7858.cljs$lang$applyTo = (function (arglist__7859){
var a = cljs.core.first(arglist__7859);
var b = cljs.core.first(cljs.core.next(arglist__7859));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7859)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7859)));
return G__7858__delegate(a, b, c, ds);
});
G__7858.cljs$lang$arity$variadic = G__7858__delegate;
return G__7858;
})()
;
G__7857 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7857__2.call(this,a,b);
case 3:
return G__7857__3.call(this,a,b,c);
default:
return G__7857__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7857.cljs$lang$maxFixedArity = 3;
G__7857.cljs$lang$applyTo = G__7857__4.cljs$lang$applyTo;
return G__7857;
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
var mapi__7875 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7883 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7883)
{var s__7884 = temp__3974__auto____7883;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7884))
{var c__7885 = cljs.core.chunk_first.call(null,s__7884);
var size__7886 = cljs.core.count.call(null,c__7885);
var b__7887 = cljs.core.chunk_buffer.call(null,size__7886);
var n__2644__auto____7888 = size__7886;
var i__7889 = 0;
while(true){
if((i__7889 < n__2644__auto____7888))
{cljs.core.chunk_append.call(null,b__7887,f.call(null,(idx + i__7889),cljs.core._nth.call(null,c__7885,i__7889)));
{
var G__7890 = (i__7889 + 1);
i__7889 = G__7890;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7887),mapi.call(null,(idx + size__7886),cljs.core.chunk_rest.call(null,s__7884)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7884)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7884)));
}
} else
{return null;
}
}),null));
});
return mapi__7875.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7900 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7900)
{var s__7901 = temp__3974__auto____7900;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7901))
{var c__7902 = cljs.core.chunk_first.call(null,s__7901);
var size__7903 = cljs.core.count.call(null,c__7902);
var b__7904 = cljs.core.chunk_buffer.call(null,size__7903);
var n__2644__auto____7905 = size__7903;
var i__7906 = 0;
while(true){
if((i__7906 < n__2644__auto____7905))
{var x__7907 = f.call(null,cljs.core._nth.call(null,c__7902,i__7906));
if((x__7907 == null))
{} else
{cljs.core.chunk_append.call(null,b__7904,x__7907);
}
{
var G__7909 = (i__7906 + 1);
i__7906 = G__7909;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7904),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7901)));
} else
{var x__7908 = f.call(null,cljs.core.first.call(null,s__7901));
if((x__7908 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7901));
} else
{return cljs.core.cons.call(null,x__7908,keep.call(null,f,cljs.core.rest.call(null,s__7901)));
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
var keepi__7935 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7945 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7945)
{var s__7946 = temp__3974__auto____7945;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7946))
{var c__7947 = cljs.core.chunk_first.call(null,s__7946);
var size__7948 = cljs.core.count.call(null,c__7947);
var b__7949 = cljs.core.chunk_buffer.call(null,size__7948);
var n__2644__auto____7950 = size__7948;
var i__7951 = 0;
while(true){
if((i__7951 < n__2644__auto____7950))
{var x__7952 = f.call(null,(idx + i__7951),cljs.core._nth.call(null,c__7947,i__7951));
if((x__7952 == null))
{} else
{cljs.core.chunk_append.call(null,b__7949,x__7952);
}
{
var G__7954 = (i__7951 + 1);
i__7951 = G__7954;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7949),keepi.call(null,(idx + size__7948),cljs.core.chunk_rest.call(null,s__7946)));
} else
{var x__7953 = f.call(null,idx,cljs.core.first.call(null,s__7946));
if((x__7953 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7946));
} else
{return cljs.core.cons.call(null,x__7953,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7946)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7935.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8040 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8040))
{return p.call(null,y);
} else
{return and__3822__auto____8040;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8041 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8041))
{var and__3822__auto____8042 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8042))
{return p.call(null,z);
} else
{return and__3822__auto____8042;
}
} else
{return and__3822__auto____8041;
}
})());
});
var ep1__4 = (function() { 
var G__8111__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8043 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8043))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8043;
}
})());
};
var G__8111 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8111__delegate.call(this, x, y, z, args);
};
G__8111.cljs$lang$maxFixedArity = 3;
G__8111.cljs$lang$applyTo = (function (arglist__8112){
var x = cljs.core.first(arglist__8112);
var y = cljs.core.first(cljs.core.next(arglist__8112));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8112)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8112)));
return G__8111__delegate(x, y, z, args);
});
G__8111.cljs$lang$arity$variadic = G__8111__delegate;
return G__8111;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8055 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8055))
{return p2.call(null,x);
} else
{return and__3822__auto____8055;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8056 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8056))
{var and__3822__auto____8057 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8057))
{var and__3822__auto____8058 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8058))
{return p2.call(null,y);
} else
{return and__3822__auto____8058;
}
} else
{return and__3822__auto____8057;
}
} else
{return and__3822__auto____8056;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8059 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8059))
{var and__3822__auto____8060 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8060))
{var and__3822__auto____8061 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8061))
{var and__3822__auto____8062 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8062))
{var and__3822__auto____8063 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8063))
{return p2.call(null,z);
} else
{return and__3822__auto____8063;
}
} else
{return and__3822__auto____8062;
}
} else
{return and__3822__auto____8061;
}
} else
{return and__3822__auto____8060;
}
} else
{return and__3822__auto____8059;
}
})());
});
var ep2__4 = (function() { 
var G__8113__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8064 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8064))
{return cljs.core.every_QMARK_.call(null,(function (p1__7910_SHARP_){
var and__3822__auto____8065 = p1.call(null,p1__7910_SHARP_);
if(cljs.core.truth_(and__3822__auto____8065))
{return p2.call(null,p1__7910_SHARP_);
} else
{return and__3822__auto____8065;
}
}),args);
} else
{return and__3822__auto____8064;
}
})());
};
var G__8113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8113__delegate.call(this, x, y, z, args);
};
G__8113.cljs$lang$maxFixedArity = 3;
G__8113.cljs$lang$applyTo = (function (arglist__8114){
var x = cljs.core.first(arglist__8114);
var y = cljs.core.first(cljs.core.next(arglist__8114));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8114)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8114)));
return G__8113__delegate(x, y, z, args);
});
G__8113.cljs$lang$arity$variadic = G__8113__delegate;
return G__8113;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8084 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8084))
{var and__3822__auto____8085 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8085))
{return p3.call(null,x);
} else
{return and__3822__auto____8085;
}
} else
{return and__3822__auto____8084;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8086 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8086))
{var and__3822__auto____8087 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8087))
{var and__3822__auto____8088 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8088))
{var and__3822__auto____8089 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8089))
{var and__3822__auto____8090 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8090))
{return p3.call(null,y);
} else
{return and__3822__auto____8090;
}
} else
{return and__3822__auto____8089;
}
} else
{return and__3822__auto____8088;
}
} else
{return and__3822__auto____8087;
}
} else
{return and__3822__auto____8086;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8091 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8091))
{var and__3822__auto____8092 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8092))
{var and__3822__auto____8093 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8093))
{var and__3822__auto____8094 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8094))
{var and__3822__auto____8095 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8095))
{var and__3822__auto____8096 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8096))
{var and__3822__auto____8097 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8097))
{var and__3822__auto____8098 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8098))
{return p3.call(null,z);
} else
{return and__3822__auto____8098;
}
} else
{return and__3822__auto____8097;
}
} else
{return and__3822__auto____8096;
}
} else
{return and__3822__auto____8095;
}
} else
{return and__3822__auto____8094;
}
} else
{return and__3822__auto____8093;
}
} else
{return and__3822__auto____8092;
}
} else
{return and__3822__auto____8091;
}
})());
});
var ep3__4 = (function() { 
var G__8115__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8099 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8099))
{return cljs.core.every_QMARK_.call(null,(function (p1__7911_SHARP_){
var and__3822__auto____8100 = p1.call(null,p1__7911_SHARP_);
if(cljs.core.truth_(and__3822__auto____8100))
{var and__3822__auto____8101 = p2.call(null,p1__7911_SHARP_);
if(cljs.core.truth_(and__3822__auto____8101))
{return p3.call(null,p1__7911_SHARP_);
} else
{return and__3822__auto____8101;
}
} else
{return and__3822__auto____8100;
}
}),args);
} else
{return and__3822__auto____8099;
}
})());
};
var G__8115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8115__delegate.call(this, x, y, z, args);
};
G__8115.cljs$lang$maxFixedArity = 3;
G__8115.cljs$lang$applyTo = (function (arglist__8116){
var x = cljs.core.first(arglist__8116);
var y = cljs.core.first(cljs.core.next(arglist__8116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8116)));
return G__8115__delegate(x, y, z, args);
});
G__8115.cljs$lang$arity$variadic = G__8115__delegate;
return G__8115;
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
var G__8117__delegate = function (p1,p2,p3,ps){
var ps__8102 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7912_SHARP_){
return p1__7912_SHARP_.call(null,x);
}),ps__8102);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7913_SHARP_){
var and__3822__auto____8107 = p1__7913_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8107))
{return p1__7913_SHARP_.call(null,y);
} else
{return and__3822__auto____8107;
}
}),ps__8102);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7914_SHARP_){
var and__3822__auto____8108 = p1__7914_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8108))
{var and__3822__auto____8109 = p1__7914_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8109))
{return p1__7914_SHARP_.call(null,z);
} else
{return and__3822__auto____8109;
}
} else
{return and__3822__auto____8108;
}
}),ps__8102);
});
var epn__4 = (function() { 
var G__8118__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8110 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8110))
{return cljs.core.every_QMARK_.call(null,(function (p1__7915_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7915_SHARP_,args);
}),ps__8102);
} else
{return and__3822__auto____8110;
}
})());
};
var G__8118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8118__delegate.call(this, x, y, z, args);
};
G__8118.cljs$lang$maxFixedArity = 3;
G__8118.cljs$lang$applyTo = (function (arglist__8119){
var x = cljs.core.first(arglist__8119);
var y = cljs.core.first(cljs.core.next(arglist__8119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8119)));
return G__8118__delegate(x, y, z, args);
});
G__8118.cljs$lang$arity$variadic = G__8118__delegate;
return G__8118;
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
var G__8117 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8117__delegate.call(this, p1, p2, p3, ps);
};
G__8117.cljs$lang$maxFixedArity = 3;
G__8117.cljs$lang$applyTo = (function (arglist__8120){
var p1 = cljs.core.first(arglist__8120);
var p2 = cljs.core.first(cljs.core.next(arglist__8120));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8120)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8120)));
return G__8117__delegate(p1, p2, p3, ps);
});
G__8117.cljs$lang$arity$variadic = G__8117__delegate;
return G__8117;
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
var or__3824__auto____8201 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8201))
{return or__3824__auto____8201;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8202 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8202))
{return or__3824__auto____8202;
} else
{var or__3824__auto____8203 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8203))
{return or__3824__auto____8203;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8272__delegate = function (x,y,z,args){
var or__3824__auto____8204 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8204))
{return or__3824__auto____8204;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8272 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8272__delegate.call(this, x, y, z, args);
};
G__8272.cljs$lang$maxFixedArity = 3;
G__8272.cljs$lang$applyTo = (function (arglist__8273){
var x = cljs.core.first(arglist__8273);
var y = cljs.core.first(cljs.core.next(arglist__8273));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8273)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8273)));
return G__8272__delegate(x, y, z, args);
});
G__8272.cljs$lang$arity$variadic = G__8272__delegate;
return G__8272;
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
var or__3824__auto____8216 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8216))
{return or__3824__auto____8216;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8217 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8217))
{return or__3824__auto____8217;
} else
{var or__3824__auto____8218 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8218))
{return or__3824__auto____8218;
} else
{var or__3824__auto____8219 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8219))
{return or__3824__auto____8219;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8220 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8220))
{return or__3824__auto____8220;
} else
{var or__3824__auto____8221 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8221))
{return or__3824__auto____8221;
} else
{var or__3824__auto____8222 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8222))
{return or__3824__auto____8222;
} else
{var or__3824__auto____8223 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8223))
{return or__3824__auto____8223;
} else
{var or__3824__auto____8224 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8224))
{return or__3824__auto____8224;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8274__delegate = function (x,y,z,args){
var or__3824__auto____8225 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8225))
{return or__3824__auto____8225;
} else
{return cljs.core.some.call(null,(function (p1__7955_SHARP_){
var or__3824__auto____8226 = p1.call(null,p1__7955_SHARP_);
if(cljs.core.truth_(or__3824__auto____8226))
{return or__3824__auto____8226;
} else
{return p2.call(null,p1__7955_SHARP_);
}
}),args);
}
};
var G__8274 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8274__delegate.call(this, x, y, z, args);
};
G__8274.cljs$lang$maxFixedArity = 3;
G__8274.cljs$lang$applyTo = (function (arglist__8275){
var x = cljs.core.first(arglist__8275);
var y = cljs.core.first(cljs.core.next(arglist__8275));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8275)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8275)));
return G__8274__delegate(x, y, z, args);
});
G__8274.cljs$lang$arity$variadic = G__8274__delegate;
return G__8274;
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
var or__3824__auto____8245 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8245))
{return or__3824__auto____8245;
} else
{var or__3824__auto____8246 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8246))
{return or__3824__auto____8246;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8247 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8247))
{return or__3824__auto____8247;
} else
{var or__3824__auto____8248 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8248))
{return or__3824__auto____8248;
} else
{var or__3824__auto____8249 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8249))
{return or__3824__auto____8249;
} else
{var or__3824__auto____8250 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8250))
{return or__3824__auto____8250;
} else
{var or__3824__auto____8251 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8251))
{return or__3824__auto____8251;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8252 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8252))
{return or__3824__auto____8252;
} else
{var or__3824__auto____8253 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8253))
{return or__3824__auto____8253;
} else
{var or__3824__auto____8254 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8254))
{return or__3824__auto____8254;
} else
{var or__3824__auto____8255 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8255))
{return or__3824__auto____8255;
} else
{var or__3824__auto____8256 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8256))
{return or__3824__auto____8256;
} else
{var or__3824__auto____8257 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8257))
{return or__3824__auto____8257;
} else
{var or__3824__auto____8258 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8258))
{return or__3824__auto____8258;
} else
{var or__3824__auto____8259 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8259))
{return or__3824__auto____8259;
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
var G__8276__delegate = function (x,y,z,args){
var or__3824__auto____8260 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8260))
{return or__3824__auto____8260;
} else
{return cljs.core.some.call(null,(function (p1__7956_SHARP_){
var or__3824__auto____8261 = p1.call(null,p1__7956_SHARP_);
if(cljs.core.truth_(or__3824__auto____8261))
{return or__3824__auto____8261;
} else
{var or__3824__auto____8262 = p2.call(null,p1__7956_SHARP_);
if(cljs.core.truth_(or__3824__auto____8262))
{return or__3824__auto____8262;
} else
{return p3.call(null,p1__7956_SHARP_);
}
}
}),args);
}
};
var G__8276 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8276__delegate.call(this, x, y, z, args);
};
G__8276.cljs$lang$maxFixedArity = 3;
G__8276.cljs$lang$applyTo = (function (arglist__8277){
var x = cljs.core.first(arglist__8277);
var y = cljs.core.first(cljs.core.next(arglist__8277));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8277)));
return G__8276__delegate(x, y, z, args);
});
G__8276.cljs$lang$arity$variadic = G__8276__delegate;
return G__8276;
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
var G__8278__delegate = function (p1,p2,p3,ps){
var ps__8263 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7957_SHARP_){
return p1__7957_SHARP_.call(null,x);
}),ps__8263);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7958_SHARP_){
var or__3824__auto____8268 = p1__7958_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{return p1__7958_SHARP_.call(null,y);
}
}),ps__8263);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7959_SHARP_){
var or__3824__auto____8269 = p1__7959_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{var or__3824__auto____8270 = p1__7959_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{return p1__7959_SHARP_.call(null,z);
}
}
}),ps__8263);
});
var spn__4 = (function() { 
var G__8279__delegate = function (x,y,z,args){
var or__3824__auto____8271 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{return cljs.core.some.call(null,(function (p1__7960_SHARP_){
return cljs.core.some.call(null,p1__7960_SHARP_,args);
}),ps__8263);
}
};
var G__8279 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8279__delegate.call(this, x, y, z, args);
};
G__8279.cljs$lang$maxFixedArity = 3;
G__8279.cljs$lang$applyTo = (function (arglist__8280){
var x = cljs.core.first(arglist__8280);
var y = cljs.core.first(cljs.core.next(arglist__8280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8280)));
return G__8279__delegate(x, y, z, args);
});
G__8279.cljs$lang$arity$variadic = G__8279__delegate;
return G__8279;
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
var G__8278 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8278__delegate.call(this, p1, p2, p3, ps);
};
G__8278.cljs$lang$maxFixedArity = 3;
G__8278.cljs$lang$applyTo = (function (arglist__8281){
var p1 = cljs.core.first(arglist__8281);
var p2 = cljs.core.first(cljs.core.next(arglist__8281));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8281)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8281)));
return G__8278__delegate(p1, p2, p3, ps);
});
G__8278.cljs$lang$arity$variadic = G__8278__delegate;
return G__8278;
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
var temp__3974__auto____8300 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8300)
{var s__8301 = temp__3974__auto____8300;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8301))
{var c__8302 = cljs.core.chunk_first.call(null,s__8301);
var size__8303 = cljs.core.count.call(null,c__8302);
var b__8304 = cljs.core.chunk_buffer.call(null,size__8303);
var n__2644__auto____8305 = size__8303;
var i__8306 = 0;
while(true){
if((i__8306 < n__2644__auto____8305))
{cljs.core.chunk_append.call(null,b__8304,f.call(null,cljs.core._nth.call(null,c__8302,i__8306)));
{
var G__8318 = (i__8306 + 1);
i__8306 = G__8318;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8304),map.call(null,f,cljs.core.chunk_rest.call(null,s__8301)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8301)),map.call(null,f,cljs.core.rest.call(null,s__8301)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8307 = cljs.core.seq.call(null,c1);
var s2__8308 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8309 = s1__8307;
if(and__3822__auto____8309)
{return s2__8308;
} else
{return and__3822__auto____8309;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8307),cljs.core.first.call(null,s2__8308)),map.call(null,f,cljs.core.rest.call(null,s1__8307),cljs.core.rest.call(null,s2__8308)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8310 = cljs.core.seq.call(null,c1);
var s2__8311 = cljs.core.seq.call(null,c2);
var s3__8312 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8313 = s1__8310;
if(and__3822__auto____8313)
{var and__3822__auto____8314 = s2__8311;
if(and__3822__auto____8314)
{return s3__8312;
} else
{return and__3822__auto____8314;
}
} else
{return and__3822__auto____8313;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8310),cljs.core.first.call(null,s2__8311),cljs.core.first.call(null,s3__8312)),map.call(null,f,cljs.core.rest.call(null,s1__8310),cljs.core.rest.call(null,s2__8311),cljs.core.rest.call(null,s3__8312)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8319__delegate = function (f,c1,c2,c3,colls){
var step__8317 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8316 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8316))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8316),step.call(null,map.call(null,cljs.core.rest,ss__8316)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8121_SHARP_){
return cljs.core.apply.call(null,f,p1__8121_SHARP_);
}),step__8317.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8319 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8319__delegate.call(this, f, c1, c2, c3, colls);
};
G__8319.cljs$lang$maxFixedArity = 4;
G__8319.cljs$lang$applyTo = (function (arglist__8320){
var f = cljs.core.first(arglist__8320);
var c1 = cljs.core.first(cljs.core.next(arglist__8320));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8320)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8320))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8320))));
return G__8319__delegate(f, c1, c2, c3, colls);
});
G__8319.cljs$lang$arity$variadic = G__8319__delegate;
return G__8319;
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
{var temp__3974__auto____8323 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8323)
{var s__8324 = temp__3974__auto____8323;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8324),take.call(null,(n - 1),cljs.core.rest.call(null,s__8324)));
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
var step__8330 = (function (n,coll){
while(true){
var s__8328 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8329 = (n > 0);
if(and__3822__auto____8329)
{return s__8328;
} else
{return and__3822__auto____8329;
}
})()))
{{
var G__8331 = (n - 1);
var G__8332 = cljs.core.rest.call(null,s__8328);
n = G__8331;
coll = G__8332;
continue;
}
} else
{return s__8328;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8330.call(null,n,coll);
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
var s__8335 = cljs.core.seq.call(null,coll);
var lead__8336 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8336)
{{
var G__8337 = cljs.core.next.call(null,s__8335);
var G__8338 = cljs.core.next.call(null,lead__8336);
s__8335 = G__8337;
lead__8336 = G__8338;
continue;
}
} else
{return s__8335;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8344 = (function (pred,coll){
while(true){
var s__8342 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8343 = s__8342;
if(and__3822__auto____8343)
{return pred.call(null,cljs.core.first.call(null,s__8342));
} else
{return and__3822__auto____8343;
}
})()))
{{
var G__8345 = pred;
var G__8346 = cljs.core.rest.call(null,s__8342);
pred = G__8345;
coll = G__8346;
continue;
}
} else
{return s__8342;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8344.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8349 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8349)
{var s__8350 = temp__3974__auto____8349;
return cljs.core.concat.call(null,s__8350,cycle.call(null,s__8350));
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
var s1__8355 = cljs.core.seq.call(null,c1);
var s2__8356 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8357 = s1__8355;
if(and__3822__auto____8357)
{return s2__8356;
} else
{return and__3822__auto____8357;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8355),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8356),interleave.call(null,cljs.core.rest.call(null,s1__8355),cljs.core.rest.call(null,s2__8356))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8359__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8358 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8358))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8358),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8358)));
} else
{return null;
}
}),null));
};
var G__8359 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8359__delegate.call(this, c1, c2, colls);
};
G__8359.cljs$lang$maxFixedArity = 2;
G__8359.cljs$lang$applyTo = (function (arglist__8360){
var c1 = cljs.core.first(arglist__8360);
var c2 = cljs.core.first(cljs.core.next(arglist__8360));
var colls = cljs.core.rest(cljs.core.next(arglist__8360));
return G__8359__delegate(c1, c2, colls);
});
G__8359.cljs$lang$arity$variadic = G__8359__delegate;
return G__8359;
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
var cat__8370 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8368 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8368)
{var coll__8369 = temp__3971__auto____8368;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8369),cat.call(null,cljs.core.rest.call(null,coll__8369),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8370.call(null,null,colls);
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
var G__8371__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8371 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8371__delegate.call(this, f, coll, colls);
};
G__8371.cljs$lang$maxFixedArity = 2;
G__8371.cljs$lang$applyTo = (function (arglist__8372){
var f = cljs.core.first(arglist__8372);
var coll = cljs.core.first(cljs.core.next(arglist__8372));
var colls = cljs.core.rest(cljs.core.next(arglist__8372));
return G__8371__delegate(f, coll, colls);
});
G__8371.cljs$lang$arity$variadic = G__8371__delegate;
return G__8371;
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
var temp__3974__auto____8382 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8382)
{var s__8383 = temp__3974__auto____8382;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8383))
{var c__8384 = cljs.core.chunk_first.call(null,s__8383);
var size__8385 = cljs.core.count.call(null,c__8384);
var b__8386 = cljs.core.chunk_buffer.call(null,size__8385);
var n__2644__auto____8387 = size__8385;
var i__8388 = 0;
while(true){
if((i__8388 < n__2644__auto____8387))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8384,i__8388))))
{cljs.core.chunk_append.call(null,b__8386,cljs.core._nth.call(null,c__8384,i__8388));
} else
{}
{
var G__8391 = (i__8388 + 1);
i__8388 = G__8391;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8386),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8383)));
} else
{var f__8389 = cljs.core.first.call(null,s__8383);
var r__8390 = cljs.core.rest.call(null,s__8383);
if(cljs.core.truth_(pred.call(null,f__8389)))
{return cljs.core.cons.call(null,f__8389,filter.call(null,pred,r__8390));
} else
{return filter.call(null,pred,r__8390);
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
var walk__8394 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8394.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8392_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8392_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8398__8399 = to;
if(G__8398__8399)
{if((function (){var or__3824__auto____8400 = (G__8398__8399.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8400)
{return or__3824__auto____8400;
} else
{return G__8398__8399.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8398__8399.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8398__8399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8398__8399);
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
var G__8401__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8401 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8401__delegate.call(this, f, c1, c2, c3, colls);
};
G__8401.cljs$lang$maxFixedArity = 4;
G__8401.cljs$lang$applyTo = (function (arglist__8402){
var f = cljs.core.first(arglist__8402);
var c1 = cljs.core.first(cljs.core.next(arglist__8402));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8402)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8402))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8402))));
return G__8401__delegate(f, c1, c2, c3, colls);
});
G__8401.cljs$lang$arity$variadic = G__8401__delegate;
return G__8401;
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
var temp__3974__auto____8409 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8409)
{var s__8410 = temp__3974__auto____8409;
var p__8411 = cljs.core.take.call(null,n,s__8410);
if((n === cljs.core.count.call(null,p__8411)))
{return cljs.core.cons.call(null,p__8411,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8410)));
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
var temp__3974__auto____8412 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8412)
{var s__8413 = temp__3974__auto____8412;
var p__8414 = cljs.core.take.call(null,n,s__8413);
if((n === cljs.core.count.call(null,p__8414)))
{return cljs.core.cons.call(null,p__8414,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8413)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8414,pad)));
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
var sentinel__8419 = cljs.core.lookup_sentinel;
var m__8420 = m;
var ks__8421 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8421)
{var m__8422 = cljs.core._lookup.call(null,m__8420,cljs.core.first.call(null,ks__8421),sentinel__8419);
if((sentinel__8419 === m__8422))
{return not_found;
} else
{{
var G__8423 = sentinel__8419;
var G__8424 = m__8422;
var G__8425 = cljs.core.next.call(null,ks__8421);
sentinel__8419 = G__8423;
m__8420 = G__8424;
ks__8421 = G__8425;
continue;
}
}
} else
{return m__8420;
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
cljs.core.assoc_in = (function assoc_in(m,p__8426,v){
var vec__8431__8432 = p__8426;
var k__8433 = cljs.core.nth.call(null,vec__8431__8432,0,null);
var ks__8434 = cljs.core.nthnext.call(null,vec__8431__8432,1);
if(cljs.core.truth_(ks__8434))
{return cljs.core.assoc.call(null,m,k__8433,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8433,null),ks__8434,v));
} else
{return cljs.core.assoc.call(null,m,k__8433,v);
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
var update_in__delegate = function (m,p__8435,f,args){
var vec__8440__8441 = p__8435;
var k__8442 = cljs.core.nth.call(null,vec__8440__8441,0,null);
var ks__8443 = cljs.core.nthnext.call(null,vec__8440__8441,1);
if(cljs.core.truth_(ks__8443))
{return cljs.core.assoc.call(null,m,k__8442,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8442,null),ks__8443,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8442,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8442,null),args));
}
};
var update_in = function (m,p__8435,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8435, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8444){
var m = cljs.core.first(arglist__8444);
var p__8435 = cljs.core.first(cljs.core.next(arglist__8444));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8444)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8444)));
return update_in__delegate(m, p__8435, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8447 = this;
var h__2309__auto____8448 = this__8447.__hash;
if(!((h__2309__auto____8448 == null)))
{return h__2309__auto____8448;
} else
{var h__2309__auto____8449 = cljs.core.hash_coll.call(null,coll);
this__8447.__hash = h__2309__auto____8449;
return h__2309__auto____8449;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8450 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8451 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8452 = this;
var new_array__8453 = this__8452.array.slice();
(new_array__8453[k] = v);
return (new cljs.core.Vector(this__8452.meta,new_array__8453,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8484 = null;
var G__8484__2 = (function (this_sym8454,k){
var this__8456 = this;
var this_sym8454__8457 = this;
var coll__8458 = this_sym8454__8457;
return coll__8458.cljs$core$ILookup$_lookup$arity$2(coll__8458,k);
});
var G__8484__3 = (function (this_sym8455,k,not_found){
var this__8456 = this;
var this_sym8455__8459 = this;
var coll__8460 = this_sym8455__8459;
return coll__8460.cljs$core$ILookup$_lookup$arity$3(coll__8460,k,not_found);
});
G__8484 = function(this_sym8455,k,not_found){
switch(arguments.length){
case 2:
return G__8484__2.call(this,this_sym8455,k);
case 3:
return G__8484__3.call(this,this_sym8455,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8484;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8445,args8446){
var this__8461 = this;
return this_sym8445.call.apply(this_sym8445,[this_sym8445].concat(args8446.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8462 = this;
var new_array__8463 = this__8462.array.slice();
new_array__8463.push(o);
return (new cljs.core.Vector(this__8462.meta,new_array__8463,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8464 = this;
var this__8465 = this;
return cljs.core.pr_str.call(null,this__8465);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8466 = this;
return cljs.core.ci_reduce.call(null,this__8466.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8467 = this;
return cljs.core.ci_reduce.call(null,this__8467.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8468 = this;
if((this__8468.array.length > 0))
{var vector_seq__8469 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8468.array.length))
{return cljs.core.cons.call(null,(this__8468.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8469.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8470 = this;
return this__8470.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8471 = this;
var count__8472 = this__8471.array.length;
if((count__8472 > 0))
{return (this__8471.array[(count__8472 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8473 = this;
if((this__8473.array.length > 0))
{var new_array__8474 = this__8473.array.slice();
new_array__8474.pop();
return (new cljs.core.Vector(this__8473.meta,new_array__8474,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8475 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8476 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8477 = this;
return (new cljs.core.Vector(meta,this__8477.array,this__8477.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8478 = this;
return this__8478.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8479 = this;
if((function (){var and__3822__auto____8480 = (0 <= n);
if(and__3822__auto____8480)
{return (n < this__8479.array.length);
} else
{return and__3822__auto____8480;
}
})())
{return (this__8479.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8481 = this;
if((function (){var and__3822__auto____8482 = (0 <= n);
if(and__3822__auto____8482)
{return (n < this__8481.array.length);
} else
{return and__3822__auto____8482;
}
})())
{return (this__8481.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8483 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8483.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2427__auto__){
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
var cnt__8486 = pv.cnt;
if((cnt__8486 < 32))
{return 0;
} else
{return (((cnt__8486 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8492 = level;
var ret__8493 = node;
while(true){
if((ll__8492 === 0))
{return ret__8493;
} else
{var embed__8494 = ret__8493;
var r__8495 = cljs.core.pv_fresh_node.call(null,edit);
var ___8496 = cljs.core.pv_aset.call(null,r__8495,0,embed__8494);
{
var G__8497 = (ll__8492 - 5);
var G__8498 = r__8495;
ll__8492 = G__8497;
ret__8493 = G__8498;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8504 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8505 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8504,subidx__8505,tailnode);
return ret__8504;
} else
{var child__8506 = cljs.core.pv_aget.call(null,parent,subidx__8505);
if(!((child__8506 == null)))
{var node_to_insert__8507 = push_tail.call(null,pv,(level - 5),child__8506,tailnode);
cljs.core.pv_aset.call(null,ret__8504,subidx__8505,node_to_insert__8507);
return ret__8504;
} else
{var node_to_insert__8508 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8504,subidx__8505,node_to_insert__8508);
return ret__8504;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8512 = (0 <= i);
if(and__3822__auto____8512)
{return (i < pv.cnt);
} else
{return and__3822__auto____8512;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8513 = pv.root;
var level__8514 = pv.shift;
while(true){
if((level__8514 > 0))
{{
var G__8515 = cljs.core.pv_aget.call(null,node__8513,((i >>> level__8514) & 31));
var G__8516 = (level__8514 - 5);
node__8513 = G__8515;
level__8514 = G__8516;
continue;
}
} else
{return node__8513.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8519 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8519,(i & 31),val);
return ret__8519;
} else
{var subidx__8520 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8519,subidx__8520,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8520),i,val));
return ret__8519;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8526 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8527 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8526));
if((function (){var and__3822__auto____8528 = (new_child__8527 == null);
if(and__3822__auto____8528)
{return (subidx__8526 === 0);
} else
{return and__3822__auto____8528;
}
})())
{return null;
} else
{var ret__8529 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8529,subidx__8526,new_child__8527);
return ret__8529;
}
} else
{if((subidx__8526 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8530 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8530,subidx__8526,null);
return ret__8530;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8533 = this;
return (new cljs.core.TransientVector(this__8533.cnt,this__8533.shift,cljs.core.tv_editable_root.call(null,this__8533.root),cljs.core.tv_editable_tail.call(null,this__8533.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8534 = this;
var h__2309__auto____8535 = this__8534.__hash;
if(!((h__2309__auto____8535 == null)))
{return h__2309__auto____8535;
} else
{var h__2309__auto____8536 = cljs.core.hash_coll.call(null,coll);
this__8534.__hash = h__2309__auto____8536;
return h__2309__auto____8536;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8537 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8538 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8539 = this;
if((function (){var and__3822__auto____8540 = (0 <= k);
if(and__3822__auto____8540)
{return (k < this__8539.cnt);
} else
{return and__3822__auto____8540;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8541 = this__8539.tail.slice();
(new_tail__8541[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8539.meta,this__8539.cnt,this__8539.shift,this__8539.root,new_tail__8541,null));
} else
{return (new cljs.core.PersistentVector(this__8539.meta,this__8539.cnt,this__8539.shift,cljs.core.do_assoc.call(null,coll,this__8539.shift,this__8539.root,k,v),this__8539.tail,null));
}
} else
{if((k === this__8539.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8539.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8589 = null;
var G__8589__2 = (function (this_sym8542,k){
var this__8544 = this;
var this_sym8542__8545 = this;
var coll__8546 = this_sym8542__8545;
return coll__8546.cljs$core$ILookup$_lookup$arity$2(coll__8546,k);
});
var G__8589__3 = (function (this_sym8543,k,not_found){
var this__8544 = this;
var this_sym8543__8547 = this;
var coll__8548 = this_sym8543__8547;
return coll__8548.cljs$core$ILookup$_lookup$arity$3(coll__8548,k,not_found);
});
G__8589 = function(this_sym8543,k,not_found){
switch(arguments.length){
case 2:
return G__8589__2.call(this,this_sym8543,k);
case 3:
return G__8589__3.call(this,this_sym8543,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8589;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8531,args8532){
var this__8549 = this;
return this_sym8531.call.apply(this_sym8531,[this_sym8531].concat(args8532.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8550 = this;
var step_init__8551 = [0,init];
var i__8552 = 0;
while(true){
if((i__8552 < this__8550.cnt))
{var arr__8553 = cljs.core.array_for.call(null,v,i__8552);
var len__8554 = arr__8553.length;
var init__8558 = (function (){var j__8555 = 0;
var init__8556 = (step_init__8551[1]);
while(true){
if((j__8555 < len__8554))
{var init__8557 = f.call(null,init__8556,(j__8555 + i__8552),(arr__8553[j__8555]));
if(cljs.core.reduced_QMARK_.call(null,init__8557))
{return init__8557;
} else
{{
var G__8590 = (j__8555 + 1);
var G__8591 = init__8557;
j__8555 = G__8590;
init__8556 = G__8591;
continue;
}
}
} else
{(step_init__8551[0] = len__8554);
(step_init__8551[1] = init__8556);
return init__8556;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8558))
{return cljs.core.deref.call(null,init__8558);
} else
{{
var G__8592 = (i__8552 + (step_init__8551[0]));
i__8552 = G__8592;
continue;
}
}
} else
{return (step_init__8551[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8559 = this;
if(((this__8559.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8560 = this__8559.tail.slice();
new_tail__8560.push(o);
return (new cljs.core.PersistentVector(this__8559.meta,(this__8559.cnt + 1),this__8559.shift,this__8559.root,new_tail__8560,null));
} else
{var root_overflow_QMARK___8561 = ((this__8559.cnt >>> 5) > (1 << this__8559.shift));
var new_shift__8562 = ((root_overflow_QMARK___8561)?(this__8559.shift + 5):this__8559.shift);
var new_root__8564 = ((root_overflow_QMARK___8561)?(function (){var n_r__8563 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8563,0,this__8559.root);
cljs.core.pv_aset.call(null,n_r__8563,1,cljs.core.new_path.call(null,null,this__8559.shift,(new cljs.core.VectorNode(null,this__8559.tail))));
return n_r__8563;
})():cljs.core.push_tail.call(null,coll,this__8559.shift,this__8559.root,(new cljs.core.VectorNode(null,this__8559.tail))));
return (new cljs.core.PersistentVector(this__8559.meta,(this__8559.cnt + 1),new_shift__8562,new_root__8564,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8565 = this;
if((this__8565.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8565.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8566 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8567 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8568 = this;
var this__8569 = this;
return cljs.core.pr_str.call(null,this__8569);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8570 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8571 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8572 = this;
if((this__8572.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8573 = this;
return this__8573.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8574 = this;
if((this__8574.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8574.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8575 = this;
if((this__8575.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8575.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8575.meta);
} else
{if((1 < (this__8575.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8575.meta,(this__8575.cnt - 1),this__8575.shift,this__8575.root,this__8575.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8576 = cljs.core.array_for.call(null,coll,(this__8575.cnt - 2));
var nr__8577 = cljs.core.pop_tail.call(null,coll,this__8575.shift,this__8575.root);
var new_root__8578 = (((nr__8577 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8577);
var cnt_1__8579 = (this__8575.cnt - 1);
if((function (){var and__3822__auto____8580 = (5 < this__8575.shift);
if(and__3822__auto____8580)
{return (cljs.core.pv_aget.call(null,new_root__8578,1) == null);
} else
{return and__3822__auto____8580;
}
})())
{return (new cljs.core.PersistentVector(this__8575.meta,cnt_1__8579,(this__8575.shift - 5),cljs.core.pv_aget.call(null,new_root__8578,0),new_tail__8576,null));
} else
{return (new cljs.core.PersistentVector(this__8575.meta,cnt_1__8579,this__8575.shift,new_root__8578,new_tail__8576,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8581 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8582 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8583 = this;
return (new cljs.core.PersistentVector(meta,this__8583.cnt,this__8583.shift,this__8583.root,this__8583.tail,this__8583.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8584 = this;
return this__8584.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8585 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8586 = this;
if((function (){var and__3822__auto____8587 = (0 <= n);
if(and__3822__auto____8587)
{return (n < this__8586.cnt);
} else
{return and__3822__auto____8587;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8588 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8588.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8593 = xs.length;
var xs__8594 = (((no_clone === true))?xs:xs.slice());
if((l__8593 < 32))
{return (new cljs.core.PersistentVector(null,l__8593,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8594,null));
} else
{var node__8595 = xs__8594.slice(0,32);
var v__8596 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8595,null));
var i__8597 = 32;
var out__8598 = cljs.core._as_transient.call(null,v__8596);
while(true){
if((i__8597 < l__8593))
{{
var G__8599 = (i__8597 + 1);
var G__8600 = cljs.core.conj_BANG_.call(null,out__8598,(xs__8594[i__8597]));
i__8597 = G__8599;
out__8598 = G__8600;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8598);
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
vector.cljs$lang$applyTo = (function (arglist__8601){
var args = cljs.core.seq(arglist__8601);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8602 = this;
if(((this__8602.off + 1) < this__8602.node.length))
{var s__8603 = cljs.core.chunked_seq.call(null,this__8602.vec,this__8602.node,this__8602.i,(this__8602.off + 1));
if((s__8603 == null))
{return null;
} else
{return s__8603;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8604 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8605 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8606 = this;
return (this__8606.node[this__8606.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8607 = this;
if(((this__8607.off + 1) < this__8607.node.length))
{var s__8608 = cljs.core.chunked_seq.call(null,this__8607.vec,this__8607.node,this__8607.i,(this__8607.off + 1));
if((s__8608 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8608;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8609 = this;
var l__8610 = this__8609.node.length;
var s__8611 = ((((this__8609.i + l__8610) < cljs.core._count.call(null,this__8609.vec)))?cljs.core.chunked_seq.call(null,this__8609.vec,(this__8609.i + l__8610),0):null);
if((s__8611 == null))
{return null;
} else
{return s__8611;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8613 = this;
return cljs.core.chunked_seq.call(null,this__8613.vec,this__8613.node,this__8613.i,this__8613.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8614 = this;
return this__8614.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8615 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8615.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8616 = this;
return cljs.core.array_chunk.call(null,this__8616.node,this__8616.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8617 = this;
var l__8618 = this__8617.node.length;
var s__8619 = ((((this__8617.i + l__8618) < cljs.core._count.call(null,this__8617.vec)))?cljs.core.chunked_seq.call(null,this__8617.vec,(this__8617.i + l__8618),0):null);
if((s__8619 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8619;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8622 = this;
var h__2309__auto____8623 = this__8622.__hash;
if(!((h__2309__auto____8623 == null)))
{return h__2309__auto____8623;
} else
{var h__2309__auto____8624 = cljs.core.hash_coll.call(null,coll);
this__8622.__hash = h__2309__auto____8624;
return h__2309__auto____8624;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8625 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8626 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8627 = this;
var v_pos__8628 = (this__8627.start + key);
return (new cljs.core.Subvec(this__8627.meta,cljs.core._assoc.call(null,this__8627.v,v_pos__8628,val),this__8627.start,((this__8627.end > (v_pos__8628 + 1)) ? this__8627.end : (v_pos__8628 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8654 = null;
var G__8654__2 = (function (this_sym8629,k){
var this__8631 = this;
var this_sym8629__8632 = this;
var coll__8633 = this_sym8629__8632;
return coll__8633.cljs$core$ILookup$_lookup$arity$2(coll__8633,k);
});
var G__8654__3 = (function (this_sym8630,k,not_found){
var this__8631 = this;
var this_sym8630__8634 = this;
var coll__8635 = this_sym8630__8634;
return coll__8635.cljs$core$ILookup$_lookup$arity$3(coll__8635,k,not_found);
});
G__8654 = function(this_sym8630,k,not_found){
switch(arguments.length){
case 2:
return G__8654__2.call(this,this_sym8630,k);
case 3:
return G__8654__3.call(this,this_sym8630,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8654;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8620,args8621){
var this__8636 = this;
return this_sym8620.call.apply(this_sym8620,[this_sym8620].concat(args8621.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8637 = this;
return (new cljs.core.Subvec(this__8637.meta,cljs.core._assoc_n.call(null,this__8637.v,this__8637.end,o),this__8637.start,(this__8637.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8638 = this;
var this__8639 = this;
return cljs.core.pr_str.call(null,this__8639);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8640 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8641 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8642 = this;
var subvec_seq__8643 = (function subvec_seq(i){
if((i === this__8642.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8642.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8643.call(null,this__8642.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8644 = this;
return (this__8644.end - this__8644.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8645 = this;
return cljs.core._nth.call(null,this__8645.v,(this__8645.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8646 = this;
if((this__8646.start === this__8646.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8646.meta,this__8646.v,this__8646.start,(this__8646.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8647 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8648 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8649 = this;
return (new cljs.core.Subvec(meta,this__8649.v,this__8649.start,this__8649.end,this__8649.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8650 = this;
return this__8650.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8651 = this;
return cljs.core._nth.call(null,this__8651.v,(this__8651.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8652 = this;
return cljs.core._nth.call(null,this__8652.v,(this__8652.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8653 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8653.meta);
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
var ret__8656 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8656,0,tl.length);
return ret__8656;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8660 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8661 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8660,subidx__8661,(((level === 5))?tail_node:(function (){var child__8662 = cljs.core.pv_aget.call(null,ret__8660,subidx__8661);
if(!((child__8662 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8662,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8660;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8667 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8668 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8669 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8667,subidx__8668));
if((function (){var and__3822__auto____8670 = (new_child__8669 == null);
if(and__3822__auto____8670)
{return (subidx__8668 === 0);
} else
{return and__3822__auto____8670;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8667,subidx__8668,new_child__8669);
return node__8667;
}
} else
{if((subidx__8668 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8667,subidx__8668,null);
return node__8667;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8675 = (0 <= i);
if(and__3822__auto____8675)
{return (i < tv.cnt);
} else
{return and__3822__auto____8675;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8676 = tv.root;
var node__8677 = root__8676;
var level__8678 = tv.shift;
while(true){
if((level__8678 > 0))
{{
var G__8679 = cljs.core.tv_ensure_editable.call(null,root__8676.edit,cljs.core.pv_aget.call(null,node__8677,((i >>> level__8678) & 31)));
var G__8680 = (level__8678 - 5);
node__8677 = G__8679;
level__8678 = G__8680;
continue;
}
} else
{return node__8677.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8720 = null;
var G__8720__2 = (function (this_sym8683,k){
var this__8685 = this;
var this_sym8683__8686 = this;
var coll__8687 = this_sym8683__8686;
return coll__8687.cljs$core$ILookup$_lookup$arity$2(coll__8687,k);
});
var G__8720__3 = (function (this_sym8684,k,not_found){
var this__8685 = this;
var this_sym8684__8688 = this;
var coll__8689 = this_sym8684__8688;
return coll__8689.cljs$core$ILookup$_lookup$arity$3(coll__8689,k,not_found);
});
G__8720 = function(this_sym8684,k,not_found){
switch(arguments.length){
case 2:
return G__8720__2.call(this,this_sym8684,k);
case 3:
return G__8720__3.call(this,this_sym8684,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8720;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8681,args8682){
var this__8690 = this;
return this_sym8681.call.apply(this_sym8681,[this_sym8681].concat(args8682.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8691 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8692 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8693 = this;
if(this__8693.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8694 = this;
if((function (){var and__3822__auto____8695 = (0 <= n);
if(and__3822__auto____8695)
{return (n < this__8694.cnt);
} else
{return and__3822__auto____8695;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8696 = this;
if(this__8696.root.edit)
{return this__8696.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8697 = this;
if(this__8697.root.edit)
{if((function (){var and__3822__auto____8698 = (0 <= n);
if(and__3822__auto____8698)
{return (n < this__8697.cnt);
} else
{return and__3822__auto____8698;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8697.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8703 = (function go(level,node){
var node__8701 = cljs.core.tv_ensure_editable.call(null,this__8697.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8701,(n & 31),val);
return node__8701;
} else
{var subidx__8702 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8701,subidx__8702,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8701,subidx__8702)));
return node__8701;
}
}).call(null,this__8697.shift,this__8697.root);
this__8697.root = new_root__8703;
return tcoll;
}
} else
{if((n === this__8697.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8697.cnt)].join('')));
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
var this__8704 = this;
if(this__8704.root.edit)
{if((this__8704.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8704.cnt))
{this__8704.cnt = 0;
return tcoll;
} else
{if((((this__8704.cnt - 1) & 31) > 0))
{this__8704.cnt = (this__8704.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8705 = cljs.core.editable_array_for.call(null,tcoll,(this__8704.cnt - 2));
var new_root__8707 = (function (){var nr__8706 = cljs.core.tv_pop_tail.call(null,tcoll,this__8704.shift,this__8704.root);
if(!((nr__8706 == null)))
{return nr__8706;
} else
{return (new cljs.core.VectorNode(this__8704.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8708 = (5 < this__8704.shift);
if(and__3822__auto____8708)
{return (cljs.core.pv_aget.call(null,new_root__8707,1) == null);
} else
{return and__3822__auto____8708;
}
})())
{var new_root__8709 = cljs.core.tv_ensure_editable.call(null,this__8704.root.edit,cljs.core.pv_aget.call(null,new_root__8707,0));
this__8704.root = new_root__8709;
this__8704.shift = (this__8704.shift - 5);
this__8704.cnt = (this__8704.cnt - 1);
this__8704.tail = new_tail__8705;
return tcoll;
} else
{this__8704.root = new_root__8707;
this__8704.cnt = (this__8704.cnt - 1);
this__8704.tail = new_tail__8705;
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
var this__8710 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8711 = this;
if(this__8711.root.edit)
{if(((this__8711.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8711.tail[(this__8711.cnt & 31)] = o);
this__8711.cnt = (this__8711.cnt + 1);
return tcoll;
} else
{var tail_node__8712 = (new cljs.core.VectorNode(this__8711.root.edit,this__8711.tail));
var new_tail__8713 = cljs.core.make_array.call(null,32);
(new_tail__8713[0] = o);
this__8711.tail = new_tail__8713;
if(((this__8711.cnt >>> 5) > (1 << this__8711.shift)))
{var new_root_array__8714 = cljs.core.make_array.call(null,32);
var new_shift__8715 = (this__8711.shift + 5);
(new_root_array__8714[0] = this__8711.root);
(new_root_array__8714[1] = cljs.core.new_path.call(null,this__8711.root.edit,this__8711.shift,tail_node__8712));
this__8711.root = (new cljs.core.VectorNode(this__8711.root.edit,new_root_array__8714));
this__8711.shift = new_shift__8715;
this__8711.cnt = (this__8711.cnt + 1);
return tcoll;
} else
{var new_root__8716 = cljs.core.tv_push_tail.call(null,tcoll,this__8711.shift,this__8711.root,tail_node__8712);
this__8711.root = new_root__8716;
this__8711.cnt = (this__8711.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8717 = this;
if(this__8717.root.edit)
{this__8717.root.edit = null;
var len__8718 = (this__8717.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8719 = cljs.core.make_array.call(null,len__8718);
cljs.core.array_copy.call(null,this__8717.tail,0,trimmed_tail__8719,0,len__8718);
return (new cljs.core.PersistentVector(null,this__8717.cnt,this__8717.shift,this__8717.root,trimmed_tail__8719,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8721 = this;
var h__2309__auto____8722 = this__8721.__hash;
if(!((h__2309__auto____8722 == null)))
{return h__2309__auto____8722;
} else
{var h__2309__auto____8723 = cljs.core.hash_coll.call(null,coll);
this__8721.__hash = h__2309__auto____8723;
return h__2309__auto____8723;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8724 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8725 = this;
var this__8726 = this;
return cljs.core.pr_str.call(null,this__8726);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8727 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8728 = this;
return cljs.core._first.call(null,this__8728.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8729 = this;
var temp__3971__auto____8730 = cljs.core.next.call(null,this__8729.front);
if(temp__3971__auto____8730)
{var f1__8731 = temp__3971__auto____8730;
return (new cljs.core.PersistentQueueSeq(this__8729.meta,f1__8731,this__8729.rear,null));
} else
{if((this__8729.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8729.meta,this__8729.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8732 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8733 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8733.front,this__8733.rear,this__8733.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8734 = this;
return this__8734.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8735 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8735.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8736 = this;
var h__2309__auto____8737 = this__8736.__hash;
if(!((h__2309__auto____8737 == null)))
{return h__2309__auto____8737;
} else
{var h__2309__auto____8738 = cljs.core.hash_coll.call(null,coll);
this__8736.__hash = h__2309__auto____8738;
return h__2309__auto____8738;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8739 = this;
if(cljs.core.truth_(this__8739.front))
{return (new cljs.core.PersistentQueue(this__8739.meta,(this__8739.count + 1),this__8739.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8740 = this__8739.rear;
if(cljs.core.truth_(or__3824__auto____8740))
{return or__3824__auto____8740;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8739.meta,(this__8739.count + 1),cljs.core.conj.call(null,this__8739.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8741 = this;
var this__8742 = this;
return cljs.core.pr_str.call(null,this__8742);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8743 = this;
var rear__8744 = cljs.core.seq.call(null,this__8743.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8745 = this__8743.front;
if(cljs.core.truth_(or__3824__auto____8745))
{return or__3824__auto____8745;
} else
{return rear__8744;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8743.front,cljs.core.seq.call(null,rear__8744),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8746 = this;
return this__8746.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8747 = this;
return cljs.core._first.call(null,this__8747.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8748 = this;
if(cljs.core.truth_(this__8748.front))
{var temp__3971__auto____8749 = cljs.core.next.call(null,this__8748.front);
if(temp__3971__auto____8749)
{var f1__8750 = temp__3971__auto____8749;
return (new cljs.core.PersistentQueue(this__8748.meta,(this__8748.count - 1),f1__8750,this__8748.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8748.meta,(this__8748.count - 1),cljs.core.seq.call(null,this__8748.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8751 = this;
return cljs.core.first.call(null,this__8751.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8752 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8753 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8754 = this;
return (new cljs.core.PersistentQueue(meta,this__8754.count,this__8754.front,this__8754.rear,this__8754.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8755 = this;
return this__8755.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8756 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8757 = this;
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
var len__8760 = array.length;
var i__8761 = 0;
while(true){
if((i__8761 < len__8760))
{if((k === (array[i__8761])))
{return i__8761;
} else
{{
var G__8762 = (i__8761 + incr);
i__8761 = G__8762;
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
var a__8765 = cljs.core.hash.call(null,a);
var b__8766 = cljs.core.hash.call(null,b);
if((a__8765 < b__8766))
{return -1;
} else
{if((a__8765 > b__8766))
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
var ks__8774 = m.keys;
var len__8775 = ks__8774.length;
var so__8776 = m.strobj;
var out__8777 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8778 = 0;
var out__8779 = cljs.core.transient$.call(null,out__8777);
while(true){
if((i__8778 < len__8775))
{var k__8780 = (ks__8774[i__8778]);
{
var G__8781 = (i__8778 + 1);
var G__8782 = cljs.core.assoc_BANG_.call(null,out__8779,k__8780,(so__8776[k__8780]));
i__8778 = G__8781;
out__8779 = G__8782;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8779,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8788 = {};
var l__8789 = ks.length;
var i__8790 = 0;
while(true){
if((i__8790 < l__8789))
{var k__8791 = (ks[i__8790]);
(new_obj__8788[k__8791] = (obj[k__8791]));
{
var G__8792 = (i__8790 + 1);
i__8790 = G__8792;
continue;
}
} else
{}
break;
}
return new_obj__8788;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8795 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8796 = this;
var h__2309__auto____8797 = this__8796.__hash;
if(!((h__2309__auto____8797 == null)))
{return h__2309__auto____8797;
} else
{var h__2309__auto____8798 = cljs.core.hash_imap.call(null,coll);
this__8796.__hash = h__2309__auto____8798;
return h__2309__auto____8798;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8799 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8800 = this;
if((function (){var and__3822__auto____8801 = goog.isString(k);
if(and__3822__auto____8801)
{return !((cljs.core.scan_array.call(null,1,k,this__8800.keys) == null));
} else
{return and__3822__auto____8801;
}
})())
{return (this__8800.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8802 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8803 = (this__8802.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8803)
{return or__3824__auto____8803;
} else
{return (this__8802.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8802.keys) == null)))
{var new_strobj__8804 = cljs.core.obj_clone.call(null,this__8802.strobj,this__8802.keys);
(new_strobj__8804[k] = v);
return (new cljs.core.ObjMap(this__8802.meta,this__8802.keys,new_strobj__8804,(this__8802.update_count + 1),null));
} else
{var new_strobj__8805 = cljs.core.obj_clone.call(null,this__8802.strobj,this__8802.keys);
var new_keys__8806 = this__8802.keys.slice();
(new_strobj__8805[k] = v);
new_keys__8806.push(k);
return (new cljs.core.ObjMap(this__8802.meta,new_keys__8806,new_strobj__8805,(this__8802.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8807 = this;
if((function (){var and__3822__auto____8808 = goog.isString(k);
if(and__3822__auto____8808)
{return !((cljs.core.scan_array.call(null,1,k,this__8807.keys) == null));
} else
{return and__3822__auto____8808;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8830 = null;
var G__8830__2 = (function (this_sym8809,k){
var this__8811 = this;
var this_sym8809__8812 = this;
var coll__8813 = this_sym8809__8812;
return coll__8813.cljs$core$ILookup$_lookup$arity$2(coll__8813,k);
});
var G__8830__3 = (function (this_sym8810,k,not_found){
var this__8811 = this;
var this_sym8810__8814 = this;
var coll__8815 = this_sym8810__8814;
return coll__8815.cljs$core$ILookup$_lookup$arity$3(coll__8815,k,not_found);
});
G__8830 = function(this_sym8810,k,not_found){
switch(arguments.length){
case 2:
return G__8830__2.call(this,this_sym8810,k);
case 3:
return G__8830__3.call(this,this_sym8810,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8830;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8793,args8794){
var this__8816 = this;
return this_sym8793.call.apply(this_sym8793,[this_sym8793].concat(args8794.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8817 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8818 = this;
var this__8819 = this;
return cljs.core.pr_str.call(null,this__8819);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8820 = this;
if((this__8820.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8783_SHARP_){
return cljs.core.vector.call(null,p1__8783_SHARP_,(this__8820.strobj[p1__8783_SHARP_]));
}),this__8820.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8821 = this;
return this__8821.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8822 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8823 = this;
return (new cljs.core.ObjMap(meta,this__8823.keys,this__8823.strobj,this__8823.update_count,this__8823.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8824 = this;
return this__8824.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8825 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8825.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8826 = this;
if((function (){var and__3822__auto____8827 = goog.isString(k);
if(and__3822__auto____8827)
{return !((cljs.core.scan_array.call(null,1,k,this__8826.keys) == null));
} else
{return and__3822__auto____8827;
}
})())
{var new_keys__8828 = this__8826.keys.slice();
var new_strobj__8829 = cljs.core.obj_clone.call(null,this__8826.strobj,this__8826.keys);
new_keys__8828.splice(cljs.core.scan_array.call(null,1,k,new_keys__8828),1);
cljs.core.js_delete.call(null,new_strobj__8829,k);
return (new cljs.core.ObjMap(this__8826.meta,new_keys__8828,new_strobj__8829,(this__8826.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8834 = this;
var h__2309__auto____8835 = this__8834.__hash;
if(!((h__2309__auto____8835 == null)))
{return h__2309__auto____8835;
} else
{var h__2309__auto____8836 = cljs.core.hash_imap.call(null,coll);
this__8834.__hash = h__2309__auto____8836;
return h__2309__auto____8836;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8837 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8838 = this;
var bucket__8839 = (this__8838.hashobj[cljs.core.hash.call(null,k)]);
var i__8840 = (cljs.core.truth_(bucket__8839)?cljs.core.scan_array.call(null,2,k,bucket__8839):null);
if(cljs.core.truth_(i__8840))
{return (bucket__8839[(i__8840 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8841 = this;
var h__8842 = cljs.core.hash.call(null,k);
var bucket__8843 = (this__8841.hashobj[h__8842]);
if(cljs.core.truth_(bucket__8843))
{var new_bucket__8844 = bucket__8843.slice();
var new_hashobj__8845 = goog.object.clone(this__8841.hashobj);
(new_hashobj__8845[h__8842] = new_bucket__8844);
var temp__3971__auto____8846 = cljs.core.scan_array.call(null,2,k,new_bucket__8844);
if(cljs.core.truth_(temp__3971__auto____8846))
{var i__8847 = temp__3971__auto____8846;
(new_bucket__8844[(i__8847 + 1)] = v);
return (new cljs.core.HashMap(this__8841.meta,this__8841.count,new_hashobj__8845,null));
} else
{new_bucket__8844.push(k,v);
return (new cljs.core.HashMap(this__8841.meta,(this__8841.count + 1),new_hashobj__8845,null));
}
} else
{var new_hashobj__8848 = goog.object.clone(this__8841.hashobj);
(new_hashobj__8848[h__8842] = [k,v]);
return (new cljs.core.HashMap(this__8841.meta,(this__8841.count + 1),new_hashobj__8848,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8849 = this;
var bucket__8850 = (this__8849.hashobj[cljs.core.hash.call(null,k)]);
var i__8851 = (cljs.core.truth_(bucket__8850)?cljs.core.scan_array.call(null,2,k,bucket__8850):null);
if(cljs.core.truth_(i__8851))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8876 = null;
var G__8876__2 = (function (this_sym8852,k){
var this__8854 = this;
var this_sym8852__8855 = this;
var coll__8856 = this_sym8852__8855;
return coll__8856.cljs$core$ILookup$_lookup$arity$2(coll__8856,k);
});
var G__8876__3 = (function (this_sym8853,k,not_found){
var this__8854 = this;
var this_sym8853__8857 = this;
var coll__8858 = this_sym8853__8857;
return coll__8858.cljs$core$ILookup$_lookup$arity$3(coll__8858,k,not_found);
});
G__8876 = function(this_sym8853,k,not_found){
switch(arguments.length){
case 2:
return G__8876__2.call(this,this_sym8853,k);
case 3:
return G__8876__3.call(this,this_sym8853,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8876;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8832,args8833){
var this__8859 = this;
return this_sym8832.call.apply(this_sym8832,[this_sym8832].concat(args8833.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8860 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8861 = this;
var this__8862 = this;
return cljs.core.pr_str.call(null,this__8862);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8863 = this;
if((this__8863.count > 0))
{var hashes__8864 = cljs.core.js_keys.call(null,this__8863.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8831_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8863.hashobj[p1__8831_SHARP_])));
}),hashes__8864);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8865 = this;
return this__8865.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8866 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8867 = this;
return (new cljs.core.HashMap(meta,this__8867.count,this__8867.hashobj,this__8867.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8868 = this;
return this__8868.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8869 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8869.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8870 = this;
var h__8871 = cljs.core.hash.call(null,k);
var bucket__8872 = (this__8870.hashobj[h__8871]);
var i__8873 = (cljs.core.truth_(bucket__8872)?cljs.core.scan_array.call(null,2,k,bucket__8872):null);
if(cljs.core.not.call(null,i__8873))
{return coll;
} else
{var new_hashobj__8874 = goog.object.clone(this__8870.hashobj);
if((3 > bucket__8872.length))
{cljs.core.js_delete.call(null,new_hashobj__8874,h__8871);
} else
{var new_bucket__8875 = bucket__8872.slice();
new_bucket__8875.splice(i__8873,2);
(new_hashobj__8874[h__8871] = new_bucket__8875);
}
return (new cljs.core.HashMap(this__8870.meta,(this__8870.count - 1),new_hashobj__8874,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8877 = ks.length;
var i__8878 = 0;
var out__8879 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8878 < len__8877))
{{
var G__8880 = (i__8878 + 1);
var G__8881 = cljs.core.assoc.call(null,out__8879,(ks[i__8878]),(vs[i__8878]));
i__8878 = G__8880;
out__8879 = G__8881;
continue;
}
} else
{return out__8879;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8885 = m.arr;
var len__8886 = arr__8885.length;
var i__8887 = 0;
while(true){
if((len__8886 <= i__8887))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8885[i__8887]),k))
{return i__8887;
} else
{if("\uFDD0'else")
{{
var G__8888 = (i__8887 + 2);
i__8887 = G__8888;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8891 = this;
return (new cljs.core.TransientArrayMap({},this__8891.arr.length,this__8891.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8892 = this;
var h__2309__auto____8893 = this__8892.__hash;
if(!((h__2309__auto____8893 == null)))
{return h__2309__auto____8893;
} else
{var h__2309__auto____8894 = cljs.core.hash_imap.call(null,coll);
this__8892.__hash = h__2309__auto____8894;
return h__2309__auto____8894;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8895 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8896 = this;
var idx__8897 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8897 === -1))
{return not_found;
} else
{return (this__8896.arr[(idx__8897 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8898 = this;
var idx__8899 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8899 === -1))
{if((this__8898.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8898.meta,(this__8898.cnt + 1),(function (){var G__8900__8901 = this__8898.arr.slice();
G__8900__8901.push(k);
G__8900__8901.push(v);
return G__8900__8901;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8898.arr[(idx__8899 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8898.meta,this__8898.cnt,(function (){var G__8902__8903 = this__8898.arr.slice();
(G__8902__8903[(idx__8899 + 1)] = v);
return G__8902__8903;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8904 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8936 = null;
var G__8936__2 = (function (this_sym8905,k){
var this__8907 = this;
var this_sym8905__8908 = this;
var coll__8909 = this_sym8905__8908;
return coll__8909.cljs$core$ILookup$_lookup$arity$2(coll__8909,k);
});
var G__8936__3 = (function (this_sym8906,k,not_found){
var this__8907 = this;
var this_sym8906__8910 = this;
var coll__8911 = this_sym8906__8910;
return coll__8911.cljs$core$ILookup$_lookup$arity$3(coll__8911,k,not_found);
});
G__8936 = function(this_sym8906,k,not_found){
switch(arguments.length){
case 2:
return G__8936__2.call(this,this_sym8906,k);
case 3:
return G__8936__3.call(this,this_sym8906,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8936;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8889,args8890){
var this__8912 = this;
return this_sym8889.call.apply(this_sym8889,[this_sym8889].concat(args8890.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8913 = this;
var len__8914 = this__8913.arr.length;
var i__8915 = 0;
var init__8916 = init;
while(true){
if((i__8915 < len__8914))
{var init__8917 = f.call(null,init__8916,(this__8913.arr[i__8915]),(this__8913.arr[(i__8915 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8917))
{return cljs.core.deref.call(null,init__8917);
} else
{{
var G__8937 = (i__8915 + 2);
var G__8938 = init__8917;
i__8915 = G__8937;
init__8916 = G__8938;
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
var this__8918 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8919 = this;
var this__8920 = this;
return cljs.core.pr_str.call(null,this__8920);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8921 = this;
if((this__8921.cnt > 0))
{var len__8922 = this__8921.arr.length;
var array_map_seq__8923 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8922))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8921.arr[i]),(this__8921.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8923.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8924 = this;
return this__8924.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8925 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8926 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8926.cnt,this__8926.arr,this__8926.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8927 = this;
return this__8927.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8928 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8928.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8929 = this;
var idx__8930 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8930 >= 0))
{var len__8931 = this__8929.arr.length;
var new_len__8932 = (len__8931 - 2);
if((new_len__8932 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8933 = cljs.core.make_array.call(null,new_len__8932);
var s__8934 = 0;
var d__8935 = 0;
while(true){
if((s__8934 >= len__8931))
{return (new cljs.core.PersistentArrayMap(this__8929.meta,(this__8929.cnt - 1),new_arr__8933,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8929.arr[s__8934])))
{{
var G__8939 = (s__8934 + 2);
var G__8940 = d__8935;
s__8934 = G__8939;
d__8935 = G__8940;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8933[d__8935] = (this__8929.arr[s__8934]));
(new_arr__8933[(d__8935 + 1)] = (this__8929.arr[(s__8934 + 1)]));
{
var G__8941 = (s__8934 + 2);
var G__8942 = (d__8935 + 2);
s__8934 = G__8941;
d__8935 = G__8942;
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
var len__8943 = cljs.core.count.call(null,ks);
var i__8944 = 0;
var out__8945 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8944 < len__8943))
{{
var G__8946 = (i__8944 + 1);
var G__8947 = cljs.core.assoc_BANG_.call(null,out__8945,(ks[i__8944]),(vs[i__8944]));
i__8944 = G__8946;
out__8945 = G__8947;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8945);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8948 = this;
if(cljs.core.truth_(this__8948.editable_QMARK_))
{var idx__8949 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8949 >= 0))
{(this__8948.arr[idx__8949] = (this__8948.arr[(this__8948.len - 2)]));
(this__8948.arr[(idx__8949 + 1)] = (this__8948.arr[(this__8948.len - 1)]));
var G__8950__8951 = this__8948.arr;
G__8950__8951.pop();
G__8950__8951.pop();
G__8950__8951;
this__8948.len = (this__8948.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8952 = this;
if(cljs.core.truth_(this__8952.editable_QMARK_))
{var idx__8953 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8953 === -1))
{if(((this__8952.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8952.len = (this__8952.len + 2);
this__8952.arr.push(key);
this__8952.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8952.len,this__8952.arr),key,val);
}
} else
{if((val === (this__8952.arr[(idx__8953 + 1)])))
{return tcoll;
} else
{(this__8952.arr[(idx__8953 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8954 = this;
if(cljs.core.truth_(this__8954.editable_QMARK_))
{if((function (){var G__8955__8956 = o;
if(G__8955__8956)
{if((function (){var or__3824__auto____8957 = (G__8955__8956.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8957)
{return or__3824__auto____8957;
} else
{return G__8955__8956.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8955__8956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8955__8956);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8955__8956);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8958 = cljs.core.seq.call(null,o);
var tcoll__8959 = tcoll;
while(true){
var temp__3971__auto____8960 = cljs.core.first.call(null,es__8958);
if(cljs.core.truth_(temp__3971__auto____8960))
{var e__8961 = temp__3971__auto____8960;
{
var G__8967 = cljs.core.next.call(null,es__8958);
var G__8968 = tcoll__8959.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8959,cljs.core.key.call(null,e__8961),cljs.core.val.call(null,e__8961));
es__8958 = G__8967;
tcoll__8959 = G__8968;
continue;
}
} else
{return tcoll__8959;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8962 = this;
if(cljs.core.truth_(this__8962.editable_QMARK_))
{this__8962.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8962.len,2),this__8962.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8963 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8964 = this;
if(cljs.core.truth_(this__8964.editable_QMARK_))
{var idx__8965 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8965 === -1))
{return not_found;
} else
{return (this__8964.arr[(idx__8965 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8966 = this;
if(cljs.core.truth_(this__8966.editable_QMARK_))
{return cljs.core.quot.call(null,this__8966.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8971 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8972 = 0;
while(true){
if((i__8972 < len))
{{
var G__8973 = cljs.core.assoc_BANG_.call(null,out__8971,(arr[i__8972]),(arr[(i__8972 + 1)]));
var G__8974 = (i__8972 + 2);
out__8971 = G__8973;
i__8972 = G__8974;
continue;
}
} else
{return out__8971;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2427__auto__){
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
var G__8979__8980 = arr.slice();
(G__8979__8980[i] = a);
return G__8979__8980;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8981__8982 = arr.slice();
(G__8981__8982[i] = a);
(G__8981__8982[j] = b);
return G__8981__8982;
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
var new_arr__8984 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8984,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8984,(2 * i),(new_arr__8984.length - (2 * i)));
return new_arr__8984;
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
var editable__8987 = inode.ensure_editable(edit);
(editable__8987.arr[i] = a);
return editable__8987;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8988 = inode.ensure_editable(edit);
(editable__8988.arr[i] = a);
(editable__8988.arr[j] = b);
return editable__8988;
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
var len__8995 = arr.length;
var i__8996 = 0;
var init__8997 = init;
while(true){
if((i__8996 < len__8995))
{var init__9000 = (function (){var k__8998 = (arr[i__8996]);
if(!((k__8998 == null)))
{return f.call(null,init__8997,k__8998,(arr[(i__8996 + 1)]));
} else
{var node__8999 = (arr[(i__8996 + 1)]);
if(!((node__8999 == null)))
{return node__8999.kv_reduce(f,init__8997);
} else
{return init__8997;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9000))
{return cljs.core.deref.call(null,init__9000);
} else
{{
var G__9001 = (i__8996 + 2);
var G__9002 = init__9000;
i__8996 = G__9001;
init__8997 = G__9002;
continue;
}
}
} else
{return init__8997;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9003 = this;
var inode__9004 = this;
if((this__9003.bitmap === bit))
{return null;
} else
{var editable__9005 = inode__9004.ensure_editable(e);
var earr__9006 = editable__9005.arr;
var len__9007 = earr__9006.length;
editable__9005.bitmap = (bit ^ editable__9005.bitmap);
cljs.core.array_copy.call(null,earr__9006,(2 * (i + 1)),earr__9006,(2 * i),(len__9007 - (2 * (i + 1))));
(earr__9006[(len__9007 - 2)] = null);
(earr__9006[(len__9007 - 1)] = null);
return editable__9005;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9008 = this;
var inode__9009 = this;
var bit__9010 = (1 << ((hash >>> shift) & 0x01f));
var idx__9011 = cljs.core.bitmap_indexed_node_index.call(null,this__9008.bitmap,bit__9010);
if(((this__9008.bitmap & bit__9010) === 0))
{var n__9012 = cljs.core.bit_count.call(null,this__9008.bitmap);
if(((2 * n__9012) < this__9008.arr.length))
{var editable__9013 = inode__9009.ensure_editable(edit);
var earr__9014 = editable__9013.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9014,(2 * idx__9011),earr__9014,(2 * (idx__9011 + 1)),(2 * (n__9012 - idx__9011)));
(earr__9014[(2 * idx__9011)] = key);
(earr__9014[((2 * idx__9011) + 1)] = val);
editable__9013.bitmap = (editable__9013.bitmap | bit__9010);
return editable__9013;
} else
{if((n__9012 >= 16))
{var nodes__9015 = cljs.core.make_array.call(null,32);
var jdx__9016 = ((hash >>> shift) & 0x01f);
(nodes__9015[jdx__9016] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9017 = 0;
var j__9018 = 0;
while(true){
if((i__9017 < 32))
{if((((this__9008.bitmap >>> i__9017) & 1) === 0))
{{
var G__9071 = (i__9017 + 1);
var G__9072 = j__9018;
i__9017 = G__9071;
j__9018 = G__9072;
continue;
}
} else
{(nodes__9015[i__9017] = ((!(((this__9008.arr[j__9018]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9008.arr[j__9018])),(this__9008.arr[j__9018]),(this__9008.arr[(j__9018 + 1)]),added_leaf_QMARK_):(this__9008.arr[(j__9018 + 1)])));
{
var G__9073 = (i__9017 + 1);
var G__9074 = (j__9018 + 2);
i__9017 = G__9073;
j__9018 = G__9074;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9012 + 1),nodes__9015));
} else
{if("\uFDD0'else")
{var new_arr__9019 = cljs.core.make_array.call(null,(2 * (n__9012 + 4)));
cljs.core.array_copy.call(null,this__9008.arr,0,new_arr__9019,0,(2 * idx__9011));
(new_arr__9019[(2 * idx__9011)] = key);
(new_arr__9019[((2 * idx__9011) + 1)] = val);
cljs.core.array_copy.call(null,this__9008.arr,(2 * idx__9011),new_arr__9019,(2 * (idx__9011 + 1)),(2 * (n__9012 - idx__9011)));
added_leaf_QMARK_.val = true;
var editable__9020 = inode__9009.ensure_editable(edit);
editable__9020.arr = new_arr__9019;
editable__9020.bitmap = (editable__9020.bitmap | bit__9010);
return editable__9020;
} else
{return null;
}
}
}
} else
{var key_or_nil__9021 = (this__9008.arr[(2 * idx__9011)]);
var val_or_node__9022 = (this__9008.arr[((2 * idx__9011) + 1)]);
if((key_or_nil__9021 == null))
{var n__9023 = val_or_node__9022.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9023 === val_or_node__9022))
{return inode__9009;
} else
{return cljs.core.edit_and_set.call(null,inode__9009,edit,((2 * idx__9011) + 1),n__9023);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9021))
{if((val === val_or_node__9022))
{return inode__9009;
} else
{return cljs.core.edit_and_set.call(null,inode__9009,edit,((2 * idx__9011) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9009,edit,(2 * idx__9011),null,((2 * idx__9011) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9021,val_or_node__9022,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9024 = this;
var inode__9025 = this;
return cljs.core.create_inode_seq.call(null,this__9024.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9026 = this;
var inode__9027 = this;
var bit__9028 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9026.bitmap & bit__9028) === 0))
{return inode__9027;
} else
{var idx__9029 = cljs.core.bitmap_indexed_node_index.call(null,this__9026.bitmap,bit__9028);
var key_or_nil__9030 = (this__9026.arr[(2 * idx__9029)]);
var val_or_node__9031 = (this__9026.arr[((2 * idx__9029) + 1)]);
if((key_or_nil__9030 == null))
{var n__9032 = val_or_node__9031.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9032 === val_or_node__9031))
{return inode__9027;
} else
{if(!((n__9032 == null)))
{return cljs.core.edit_and_set.call(null,inode__9027,edit,((2 * idx__9029) + 1),n__9032);
} else
{if((this__9026.bitmap === bit__9028))
{return null;
} else
{if("\uFDD0'else")
{return inode__9027.edit_and_remove_pair(edit,bit__9028,idx__9029);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9030))
{(removed_leaf_QMARK_[0] = true);
return inode__9027.edit_and_remove_pair(edit,bit__9028,idx__9029);
} else
{if("\uFDD0'else")
{return inode__9027;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9033 = this;
var inode__9034 = this;
if((e === this__9033.edit))
{return inode__9034;
} else
{var n__9035 = cljs.core.bit_count.call(null,this__9033.bitmap);
var new_arr__9036 = cljs.core.make_array.call(null,(((n__9035 < 0))?4:(2 * (n__9035 + 1))));
cljs.core.array_copy.call(null,this__9033.arr,0,new_arr__9036,0,(2 * n__9035));
return (new cljs.core.BitmapIndexedNode(e,this__9033.bitmap,new_arr__9036));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9037 = this;
var inode__9038 = this;
return cljs.core.inode_kv_reduce.call(null,this__9037.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9039 = this;
var inode__9040 = this;
var bit__9041 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9039.bitmap & bit__9041) === 0))
{return not_found;
} else
{var idx__9042 = cljs.core.bitmap_indexed_node_index.call(null,this__9039.bitmap,bit__9041);
var key_or_nil__9043 = (this__9039.arr[(2 * idx__9042)]);
var val_or_node__9044 = (this__9039.arr[((2 * idx__9042) + 1)]);
if((key_or_nil__9043 == null))
{return val_or_node__9044.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9043))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9043,val_or_node__9044], true);
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
var this__9045 = this;
var inode__9046 = this;
var bit__9047 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9045.bitmap & bit__9047) === 0))
{return inode__9046;
} else
{var idx__9048 = cljs.core.bitmap_indexed_node_index.call(null,this__9045.bitmap,bit__9047);
var key_or_nil__9049 = (this__9045.arr[(2 * idx__9048)]);
var val_or_node__9050 = (this__9045.arr[((2 * idx__9048) + 1)]);
if((key_or_nil__9049 == null))
{var n__9051 = val_or_node__9050.inode_without((shift + 5),hash,key);
if((n__9051 === val_or_node__9050))
{return inode__9046;
} else
{if(!((n__9051 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9045.bitmap,cljs.core.clone_and_set.call(null,this__9045.arr,((2 * idx__9048) + 1),n__9051)));
} else
{if((this__9045.bitmap === bit__9047))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9045.bitmap ^ bit__9047),cljs.core.remove_pair.call(null,this__9045.arr,idx__9048)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9049))
{return (new cljs.core.BitmapIndexedNode(null,(this__9045.bitmap ^ bit__9047),cljs.core.remove_pair.call(null,this__9045.arr,idx__9048)));
} else
{if("\uFDD0'else")
{return inode__9046;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9052 = this;
var inode__9053 = this;
var bit__9054 = (1 << ((hash >>> shift) & 0x01f));
var idx__9055 = cljs.core.bitmap_indexed_node_index.call(null,this__9052.bitmap,bit__9054);
if(((this__9052.bitmap & bit__9054) === 0))
{var n__9056 = cljs.core.bit_count.call(null,this__9052.bitmap);
if((n__9056 >= 16))
{var nodes__9057 = cljs.core.make_array.call(null,32);
var jdx__9058 = ((hash >>> shift) & 0x01f);
(nodes__9057[jdx__9058] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9059 = 0;
var j__9060 = 0;
while(true){
if((i__9059 < 32))
{if((((this__9052.bitmap >>> i__9059) & 1) === 0))
{{
var G__9075 = (i__9059 + 1);
var G__9076 = j__9060;
i__9059 = G__9075;
j__9060 = G__9076;
continue;
}
} else
{(nodes__9057[i__9059] = ((!(((this__9052.arr[j__9060]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9052.arr[j__9060])),(this__9052.arr[j__9060]),(this__9052.arr[(j__9060 + 1)]),added_leaf_QMARK_):(this__9052.arr[(j__9060 + 1)])));
{
var G__9077 = (i__9059 + 1);
var G__9078 = (j__9060 + 2);
i__9059 = G__9077;
j__9060 = G__9078;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9056 + 1),nodes__9057));
} else
{var new_arr__9061 = cljs.core.make_array.call(null,(2 * (n__9056 + 1)));
cljs.core.array_copy.call(null,this__9052.arr,0,new_arr__9061,0,(2 * idx__9055));
(new_arr__9061[(2 * idx__9055)] = key);
(new_arr__9061[((2 * idx__9055) + 1)] = val);
cljs.core.array_copy.call(null,this__9052.arr,(2 * idx__9055),new_arr__9061,(2 * (idx__9055 + 1)),(2 * (n__9056 - idx__9055)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9052.bitmap | bit__9054),new_arr__9061));
}
} else
{var key_or_nil__9062 = (this__9052.arr[(2 * idx__9055)]);
var val_or_node__9063 = (this__9052.arr[((2 * idx__9055) + 1)]);
if((key_or_nil__9062 == null))
{var n__9064 = val_or_node__9063.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9064 === val_or_node__9063))
{return inode__9053;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9052.bitmap,cljs.core.clone_and_set.call(null,this__9052.arr,((2 * idx__9055) + 1),n__9064)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9062))
{if((val === val_or_node__9063))
{return inode__9053;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9052.bitmap,cljs.core.clone_and_set.call(null,this__9052.arr,((2 * idx__9055) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9052.bitmap,cljs.core.clone_and_set.call(null,this__9052.arr,(2 * idx__9055),null,((2 * idx__9055) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9062,val_or_node__9063,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9065 = this;
var inode__9066 = this;
var bit__9067 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9065.bitmap & bit__9067) === 0))
{return not_found;
} else
{var idx__9068 = cljs.core.bitmap_indexed_node_index.call(null,this__9065.bitmap,bit__9067);
var key_or_nil__9069 = (this__9065.arr[(2 * idx__9068)]);
var val_or_node__9070 = (this__9065.arr[((2 * idx__9068) + 1)]);
if((key_or_nil__9069 == null))
{return val_or_node__9070.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9069))
{return val_or_node__9070;
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
var arr__9086 = array_node.arr;
var len__9087 = (2 * (array_node.cnt - 1));
var new_arr__9088 = cljs.core.make_array.call(null,len__9087);
var i__9089 = 0;
var j__9090 = 1;
var bitmap__9091 = 0;
while(true){
if((i__9089 < len__9087))
{if((function (){var and__3822__auto____9092 = !((i__9089 === idx));
if(and__3822__auto____9092)
{return !(((arr__9086[i__9089]) == null));
} else
{return and__3822__auto____9092;
}
})())
{(new_arr__9088[j__9090] = (arr__9086[i__9089]));
{
var G__9093 = (i__9089 + 1);
var G__9094 = (j__9090 + 2);
var G__9095 = (bitmap__9091 | (1 << i__9089));
i__9089 = G__9093;
j__9090 = G__9094;
bitmap__9091 = G__9095;
continue;
}
} else
{{
var G__9096 = (i__9089 + 1);
var G__9097 = j__9090;
var G__9098 = bitmap__9091;
i__9089 = G__9096;
j__9090 = G__9097;
bitmap__9091 = G__9098;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9091,new_arr__9088));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9099 = this;
var inode__9100 = this;
var idx__9101 = ((hash >>> shift) & 0x01f);
var node__9102 = (this__9099.arr[idx__9101]);
if((node__9102 == null))
{var editable__9103 = cljs.core.edit_and_set.call(null,inode__9100,edit,idx__9101,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9103.cnt = (editable__9103.cnt + 1);
return editable__9103;
} else
{var n__9104 = node__9102.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9104 === node__9102))
{return inode__9100;
} else
{return cljs.core.edit_and_set.call(null,inode__9100,edit,idx__9101,n__9104);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9105 = this;
var inode__9106 = this;
return cljs.core.create_array_node_seq.call(null,this__9105.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9107 = this;
var inode__9108 = this;
var idx__9109 = ((hash >>> shift) & 0x01f);
var node__9110 = (this__9107.arr[idx__9109]);
if((node__9110 == null))
{return inode__9108;
} else
{var n__9111 = node__9110.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9111 === node__9110))
{return inode__9108;
} else
{if((n__9111 == null))
{if((this__9107.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9108,edit,idx__9109);
} else
{var editable__9112 = cljs.core.edit_and_set.call(null,inode__9108,edit,idx__9109,n__9111);
editable__9112.cnt = (editable__9112.cnt - 1);
return editable__9112;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9108,edit,idx__9109,n__9111);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9113 = this;
var inode__9114 = this;
if((e === this__9113.edit))
{return inode__9114;
} else
{return (new cljs.core.ArrayNode(e,this__9113.cnt,this__9113.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9115 = this;
var inode__9116 = this;
var len__9117 = this__9115.arr.length;
var i__9118 = 0;
var init__9119 = init;
while(true){
if((i__9118 < len__9117))
{var node__9120 = (this__9115.arr[i__9118]);
if(!((node__9120 == null)))
{var init__9121 = node__9120.kv_reduce(f,init__9119);
if(cljs.core.reduced_QMARK_.call(null,init__9121))
{return cljs.core.deref.call(null,init__9121);
} else
{{
var G__9140 = (i__9118 + 1);
var G__9141 = init__9121;
i__9118 = G__9140;
init__9119 = G__9141;
continue;
}
}
} else
{return null;
}
} else
{return init__9119;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9122 = this;
var inode__9123 = this;
var idx__9124 = ((hash >>> shift) & 0x01f);
var node__9125 = (this__9122.arr[idx__9124]);
if(!((node__9125 == null)))
{return node__9125.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9126 = this;
var inode__9127 = this;
var idx__9128 = ((hash >>> shift) & 0x01f);
var node__9129 = (this__9126.arr[idx__9128]);
if(!((node__9129 == null)))
{var n__9130 = node__9129.inode_without((shift + 5),hash,key);
if((n__9130 === node__9129))
{return inode__9127;
} else
{if((n__9130 == null))
{if((this__9126.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9127,null,idx__9128);
} else
{return (new cljs.core.ArrayNode(null,(this__9126.cnt - 1),cljs.core.clone_and_set.call(null,this__9126.arr,idx__9128,n__9130)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9126.cnt,cljs.core.clone_and_set.call(null,this__9126.arr,idx__9128,n__9130)));
} else
{return null;
}
}
}
} else
{return inode__9127;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9131 = this;
var inode__9132 = this;
var idx__9133 = ((hash >>> shift) & 0x01f);
var node__9134 = (this__9131.arr[idx__9133]);
if((node__9134 == null))
{return (new cljs.core.ArrayNode(null,(this__9131.cnt + 1),cljs.core.clone_and_set.call(null,this__9131.arr,idx__9133,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9135 = node__9134.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9135 === node__9134))
{return inode__9132;
} else
{return (new cljs.core.ArrayNode(null,this__9131.cnt,cljs.core.clone_and_set.call(null,this__9131.arr,idx__9133,n__9135)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9136 = this;
var inode__9137 = this;
var idx__9138 = ((hash >>> shift) & 0x01f);
var node__9139 = (this__9136.arr[idx__9138]);
if(!((node__9139 == null)))
{return node__9139.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9144 = (2 * cnt);
var i__9145 = 0;
while(true){
if((i__9145 < lim__9144))
{if(cljs.core.key_test.call(null,key,(arr[i__9145])))
{return i__9145;
} else
{{
var G__9146 = (i__9145 + 2);
i__9145 = G__9146;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9147 = this;
var inode__9148 = this;
if((hash === this__9147.collision_hash))
{var idx__9149 = cljs.core.hash_collision_node_find_index.call(null,this__9147.arr,this__9147.cnt,key);
if((idx__9149 === -1))
{if((this__9147.arr.length > (2 * this__9147.cnt)))
{var editable__9150 = cljs.core.edit_and_set.call(null,inode__9148,edit,(2 * this__9147.cnt),key,((2 * this__9147.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9150.cnt = (editable__9150.cnt + 1);
return editable__9150;
} else
{var len__9151 = this__9147.arr.length;
var new_arr__9152 = cljs.core.make_array.call(null,(len__9151 + 2));
cljs.core.array_copy.call(null,this__9147.arr,0,new_arr__9152,0,len__9151);
(new_arr__9152[len__9151] = key);
(new_arr__9152[(len__9151 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9148.ensure_editable_array(edit,(this__9147.cnt + 1),new_arr__9152);
}
} else
{if(((this__9147.arr[(idx__9149 + 1)]) === val))
{return inode__9148;
} else
{return cljs.core.edit_and_set.call(null,inode__9148,edit,(idx__9149 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9147.collision_hash >>> shift) & 0x01f)),[null,inode__9148,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9153 = this;
var inode__9154 = this;
return cljs.core.create_inode_seq.call(null,this__9153.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9155 = this;
var inode__9156 = this;
var idx__9157 = cljs.core.hash_collision_node_find_index.call(null,this__9155.arr,this__9155.cnt,key);
if((idx__9157 === -1))
{return inode__9156;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9155.cnt === 1))
{return null;
} else
{var editable__9158 = inode__9156.ensure_editable(edit);
var earr__9159 = editable__9158.arr;
(earr__9159[idx__9157] = (earr__9159[((2 * this__9155.cnt) - 2)]));
(earr__9159[(idx__9157 + 1)] = (earr__9159[((2 * this__9155.cnt) - 1)]));
(earr__9159[((2 * this__9155.cnt) - 1)] = null);
(earr__9159[((2 * this__9155.cnt) - 2)] = null);
editable__9158.cnt = (editable__9158.cnt - 1);
return editable__9158;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9160 = this;
var inode__9161 = this;
if((e === this__9160.edit))
{return inode__9161;
} else
{var new_arr__9162 = cljs.core.make_array.call(null,(2 * (this__9160.cnt + 1)));
cljs.core.array_copy.call(null,this__9160.arr,0,new_arr__9162,0,(2 * this__9160.cnt));
return (new cljs.core.HashCollisionNode(e,this__9160.collision_hash,this__9160.cnt,new_arr__9162));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9163 = this;
var inode__9164 = this;
return cljs.core.inode_kv_reduce.call(null,this__9163.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9165 = this;
var inode__9166 = this;
var idx__9167 = cljs.core.hash_collision_node_find_index.call(null,this__9165.arr,this__9165.cnt,key);
if((idx__9167 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9165.arr[idx__9167])))
{return cljs.core.PersistentVector.fromArray([(this__9165.arr[idx__9167]),(this__9165.arr[(idx__9167 + 1)])], true);
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
var this__9168 = this;
var inode__9169 = this;
var idx__9170 = cljs.core.hash_collision_node_find_index.call(null,this__9168.arr,this__9168.cnt,key);
if((idx__9170 === -1))
{return inode__9169;
} else
{if((this__9168.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9168.collision_hash,(this__9168.cnt - 1),cljs.core.remove_pair.call(null,this__9168.arr,cljs.core.quot.call(null,idx__9170,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9171 = this;
var inode__9172 = this;
if((hash === this__9171.collision_hash))
{var idx__9173 = cljs.core.hash_collision_node_find_index.call(null,this__9171.arr,this__9171.cnt,key);
if((idx__9173 === -1))
{var len__9174 = this__9171.arr.length;
var new_arr__9175 = cljs.core.make_array.call(null,(len__9174 + 2));
cljs.core.array_copy.call(null,this__9171.arr,0,new_arr__9175,0,len__9174);
(new_arr__9175[len__9174] = key);
(new_arr__9175[(len__9174 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9171.collision_hash,(this__9171.cnt + 1),new_arr__9175));
} else
{if(cljs.core._EQ_.call(null,(this__9171.arr[idx__9173]),val))
{return inode__9172;
} else
{return (new cljs.core.HashCollisionNode(null,this__9171.collision_hash,this__9171.cnt,cljs.core.clone_and_set.call(null,this__9171.arr,(idx__9173 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9171.collision_hash >>> shift) & 0x01f)),[null,inode__9172])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9176 = this;
var inode__9177 = this;
var idx__9178 = cljs.core.hash_collision_node_find_index.call(null,this__9176.arr,this__9176.cnt,key);
if((idx__9178 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9176.arr[idx__9178])))
{return (this__9176.arr[(idx__9178 + 1)]);
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
var this__9179 = this;
var inode__9180 = this;
if((e === this__9179.edit))
{this__9179.arr = array;
this__9179.cnt = count;
return inode__9180;
} else
{return (new cljs.core.HashCollisionNode(this__9179.edit,this__9179.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9185 = cljs.core.hash.call(null,key1);
if((key1hash__9185 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9185,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9186 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9185,key1,val1,added_leaf_QMARK___9186).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9186);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9187 = cljs.core.hash.call(null,key1);
if((key1hash__9187 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9187,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9188 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9187,key1,val1,added_leaf_QMARK___9188).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9188);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9189 = this;
var h__2309__auto____9190 = this__9189.__hash;
if(!((h__2309__auto____9190 == null)))
{return h__2309__auto____9190;
} else
{var h__2309__auto____9191 = cljs.core.hash_coll.call(null,coll);
this__9189.__hash = h__2309__auto____9191;
return h__2309__auto____9191;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9192 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9193 = this;
var this__9194 = this;
return cljs.core.pr_str.call(null,this__9194);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9195 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9196 = this;
if((this__9196.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9196.nodes[this__9196.i]),(this__9196.nodes[(this__9196.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9196.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9197 = this;
if((this__9197.s == null))
{return cljs.core.create_inode_seq.call(null,this__9197.nodes,(this__9197.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9197.nodes,this__9197.i,cljs.core.next.call(null,this__9197.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9198 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9199 = this;
return (new cljs.core.NodeSeq(meta,this__9199.nodes,this__9199.i,this__9199.s,this__9199.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9200 = this;
return this__9200.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9201 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9201.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9208 = nodes.length;
var j__9209 = i;
while(true){
if((j__9209 < len__9208))
{if(!(((nodes[j__9209]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9209,null,null));
} else
{var temp__3971__auto____9210 = (nodes[(j__9209 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9210))
{var node__9211 = temp__3971__auto____9210;
var temp__3971__auto____9212 = node__9211.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9212))
{var node_seq__9213 = temp__3971__auto____9212;
return (new cljs.core.NodeSeq(null,nodes,(j__9209 + 2),node_seq__9213,null));
} else
{{
var G__9214 = (j__9209 + 2);
j__9209 = G__9214;
continue;
}
}
} else
{{
var G__9215 = (j__9209 + 2);
j__9209 = G__9215;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9216 = this;
var h__2309__auto____9217 = this__9216.__hash;
if(!((h__2309__auto____9217 == null)))
{return h__2309__auto____9217;
} else
{var h__2309__auto____9218 = cljs.core.hash_coll.call(null,coll);
this__9216.__hash = h__2309__auto____9218;
return h__2309__auto____9218;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9219 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9220 = this;
var this__9221 = this;
return cljs.core.pr_str.call(null,this__9221);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9222 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9223 = this;
return cljs.core.first.call(null,this__9223.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9224 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9224.nodes,this__9224.i,cljs.core.next.call(null,this__9224.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9225 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9226 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9226.nodes,this__9226.i,this__9226.s,this__9226.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9227 = this;
return this__9227.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9228 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9228.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9235 = nodes.length;
var j__9236 = i;
while(true){
if((j__9236 < len__9235))
{var temp__3971__auto____9237 = (nodes[j__9236]);
if(cljs.core.truth_(temp__3971__auto____9237))
{var nj__9238 = temp__3971__auto____9237;
var temp__3971__auto____9239 = nj__9238.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9239))
{var ns__9240 = temp__3971__auto____9239;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9236 + 1),ns__9240,null));
} else
{{
var G__9241 = (j__9236 + 1);
j__9236 = G__9241;
continue;
}
}
} else
{{
var G__9242 = (j__9236 + 1);
j__9236 = G__9242;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9245 = this;
return (new cljs.core.TransientHashMap({},this__9245.root,this__9245.cnt,this__9245.has_nil_QMARK_,this__9245.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9246 = this;
var h__2309__auto____9247 = this__9246.__hash;
if(!((h__2309__auto____9247 == null)))
{return h__2309__auto____9247;
} else
{var h__2309__auto____9248 = cljs.core.hash_imap.call(null,coll);
this__9246.__hash = h__2309__auto____9248;
return h__2309__auto____9248;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9249 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9250 = this;
if((k == null))
{if(this__9250.has_nil_QMARK_)
{return this__9250.nil_val;
} else
{return not_found;
}
} else
{if((this__9250.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9250.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9251 = this;
if((k == null))
{if((function (){var and__3822__auto____9252 = this__9251.has_nil_QMARK_;
if(and__3822__auto____9252)
{return (v === this__9251.nil_val);
} else
{return and__3822__auto____9252;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9251.meta,((this__9251.has_nil_QMARK_)?this__9251.cnt:(this__9251.cnt + 1)),this__9251.root,true,v,null));
}
} else
{var added_leaf_QMARK___9253 = (new cljs.core.Box(false));
var new_root__9254 = (((this__9251.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9251.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9253);
if((new_root__9254 === this__9251.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9251.meta,((added_leaf_QMARK___9253.val)?(this__9251.cnt + 1):this__9251.cnt),new_root__9254,this__9251.has_nil_QMARK_,this__9251.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9255 = this;
if((k == null))
{return this__9255.has_nil_QMARK_;
} else
{if((this__9255.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9255.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9278 = null;
var G__9278__2 = (function (this_sym9256,k){
var this__9258 = this;
var this_sym9256__9259 = this;
var coll__9260 = this_sym9256__9259;
return coll__9260.cljs$core$ILookup$_lookup$arity$2(coll__9260,k);
});
var G__9278__3 = (function (this_sym9257,k,not_found){
var this__9258 = this;
var this_sym9257__9261 = this;
var coll__9262 = this_sym9257__9261;
return coll__9262.cljs$core$ILookup$_lookup$arity$3(coll__9262,k,not_found);
});
G__9278 = function(this_sym9257,k,not_found){
switch(arguments.length){
case 2:
return G__9278__2.call(this,this_sym9257,k);
case 3:
return G__9278__3.call(this,this_sym9257,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9278;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9243,args9244){
var this__9263 = this;
return this_sym9243.call.apply(this_sym9243,[this_sym9243].concat(args9244.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9264 = this;
var init__9265 = ((this__9264.has_nil_QMARK_)?f.call(null,init,null,this__9264.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9265))
{return cljs.core.deref.call(null,init__9265);
} else
{if(!((this__9264.root == null)))
{return this__9264.root.kv_reduce(f,init__9265);
} else
{if("\uFDD0'else")
{return init__9265;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9266 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9267 = this;
var this__9268 = this;
return cljs.core.pr_str.call(null,this__9268);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9269 = this;
if((this__9269.cnt > 0))
{var s__9270 = ((!((this__9269.root == null)))?this__9269.root.inode_seq():null);
if(this__9269.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9269.nil_val], true),s__9270);
} else
{return s__9270;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9271 = this;
return this__9271.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9272 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9273 = this;
return (new cljs.core.PersistentHashMap(meta,this__9273.cnt,this__9273.root,this__9273.has_nil_QMARK_,this__9273.nil_val,this__9273.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9274 = this;
return this__9274.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9275 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9275.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9276 = this;
if((k == null))
{if(this__9276.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9276.meta,(this__9276.cnt - 1),this__9276.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9276.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9277 = this__9276.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9277 === this__9276.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9276.meta,(this__9276.cnt - 1),new_root__9277,this__9276.has_nil_QMARK_,this__9276.nil_val,null));
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
var len__9279 = ks.length;
var i__9280 = 0;
var out__9281 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9280 < len__9279))
{{
var G__9282 = (i__9280 + 1);
var G__9283 = cljs.core.assoc_BANG_.call(null,out__9281,(ks[i__9280]),(vs[i__9280]));
i__9280 = G__9282;
out__9281 = G__9283;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9281);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9284 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9285 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9286 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9287 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9288 = this;
if((k == null))
{if(this__9288.has_nil_QMARK_)
{return this__9288.nil_val;
} else
{return null;
}
} else
{if((this__9288.root == null))
{return null;
} else
{return this__9288.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9289 = this;
if((k == null))
{if(this__9289.has_nil_QMARK_)
{return this__9289.nil_val;
} else
{return not_found;
}
} else
{if((this__9289.root == null))
{return not_found;
} else
{return this__9289.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9290 = this;
if(this__9290.edit)
{return this__9290.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9291 = this;
var tcoll__9292 = this;
if(this__9291.edit)
{if((function (){var G__9293__9294 = o;
if(G__9293__9294)
{if((function (){var or__3824__auto____9295 = (G__9293__9294.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9295)
{return or__3824__auto____9295;
} else
{return G__9293__9294.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9293__9294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9293__9294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9293__9294);
}
})())
{return tcoll__9292.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9296 = cljs.core.seq.call(null,o);
var tcoll__9297 = tcoll__9292;
while(true){
var temp__3971__auto____9298 = cljs.core.first.call(null,es__9296);
if(cljs.core.truth_(temp__3971__auto____9298))
{var e__9299 = temp__3971__auto____9298;
{
var G__9310 = cljs.core.next.call(null,es__9296);
var G__9311 = tcoll__9297.assoc_BANG_(cljs.core.key.call(null,e__9299),cljs.core.val.call(null,e__9299));
es__9296 = G__9310;
tcoll__9297 = G__9311;
continue;
}
} else
{return tcoll__9297;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9300 = this;
var tcoll__9301 = this;
if(this__9300.edit)
{if((k == null))
{if((this__9300.nil_val === v))
{} else
{this__9300.nil_val = v;
}
if(this__9300.has_nil_QMARK_)
{} else
{this__9300.count = (this__9300.count + 1);
this__9300.has_nil_QMARK_ = true;
}
return tcoll__9301;
} else
{var added_leaf_QMARK___9302 = (new cljs.core.Box(false));
var node__9303 = (((this__9300.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9300.root).inode_assoc_BANG_(this__9300.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9302);
if((node__9303 === this__9300.root))
{} else
{this__9300.root = node__9303;
}
if(added_leaf_QMARK___9302.val)
{this__9300.count = (this__9300.count + 1);
} else
{}
return tcoll__9301;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9304 = this;
var tcoll__9305 = this;
if(this__9304.edit)
{if((k == null))
{if(this__9304.has_nil_QMARK_)
{this__9304.has_nil_QMARK_ = false;
this__9304.nil_val = null;
this__9304.count = (this__9304.count - 1);
return tcoll__9305;
} else
{return tcoll__9305;
}
} else
{if((this__9304.root == null))
{return tcoll__9305;
} else
{var removed_leaf_QMARK___9306 = (new cljs.core.Box(false));
var node__9307 = this__9304.root.inode_without_BANG_(this__9304.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9306);
if((node__9307 === this__9304.root))
{} else
{this__9304.root = node__9307;
}
if(cljs.core.truth_((removed_leaf_QMARK___9306[0])))
{this__9304.count = (this__9304.count - 1);
} else
{}
return tcoll__9305;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9308 = this;
var tcoll__9309 = this;
if(this__9308.edit)
{this__9308.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9308.count,this__9308.root,this__9308.has_nil_QMARK_,this__9308.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9314 = node;
var stack__9315 = stack;
while(true){
if(!((t__9314 == null)))
{{
var G__9316 = ((ascending_QMARK_)?t__9314.left:t__9314.right);
var G__9317 = cljs.core.conj.call(null,stack__9315,t__9314);
t__9314 = G__9316;
stack__9315 = G__9317;
continue;
}
} else
{return stack__9315;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9318 = this;
var h__2309__auto____9319 = this__9318.__hash;
if(!((h__2309__auto____9319 == null)))
{return h__2309__auto____9319;
} else
{var h__2309__auto____9320 = cljs.core.hash_coll.call(null,coll);
this__9318.__hash = h__2309__auto____9320;
return h__2309__auto____9320;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9321 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9322 = this;
var this__9323 = this;
return cljs.core.pr_str.call(null,this__9323);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9324 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9325 = this;
if((this__9325.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9325.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9326 = this;
return cljs.core.peek.call(null,this__9326.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9327 = this;
var t__9328 = cljs.core.first.call(null,this__9327.stack);
var next_stack__9329 = cljs.core.tree_map_seq_push.call(null,((this__9327.ascending_QMARK_)?t__9328.right:t__9328.left),cljs.core.next.call(null,this__9327.stack),this__9327.ascending_QMARK_);
if(!((next_stack__9329 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9329,this__9327.ascending_QMARK_,(this__9327.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9330 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9331 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9331.stack,this__9331.ascending_QMARK_,this__9331.cnt,this__9331.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9332 = this;
return this__9332.meta;
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
{if((function (){var and__3822__auto____9334 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9334)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9334;
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
{if((function (){var and__3822__auto____9336 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9336)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9336;
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
var init__9340 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9340))
{return cljs.core.deref.call(null,init__9340);
} else
{var init__9341 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9340):init__9340);
if(cljs.core.reduced_QMARK_.call(null,init__9341))
{return cljs.core.deref.call(null,init__9341);
} else
{var init__9342 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9341):init__9341);
if(cljs.core.reduced_QMARK_.call(null,init__9342))
{return cljs.core.deref.call(null,init__9342);
} else
{return init__9342;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9345 = this;
var h__2309__auto____9346 = this__9345.__hash;
if(!((h__2309__auto____9346 == null)))
{return h__2309__auto____9346;
} else
{var h__2309__auto____9347 = cljs.core.hash_coll.call(null,coll);
this__9345.__hash = h__2309__auto____9347;
return h__2309__auto____9347;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9348 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9349 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9350 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9350.key,this__9350.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9398 = null;
var G__9398__2 = (function (this_sym9351,k){
var this__9353 = this;
var this_sym9351__9354 = this;
var node__9355 = this_sym9351__9354;
return node__9355.cljs$core$ILookup$_lookup$arity$2(node__9355,k);
});
var G__9398__3 = (function (this_sym9352,k,not_found){
var this__9353 = this;
var this_sym9352__9356 = this;
var node__9357 = this_sym9352__9356;
return node__9357.cljs$core$ILookup$_lookup$arity$3(node__9357,k,not_found);
});
G__9398 = function(this_sym9352,k,not_found){
switch(arguments.length){
case 2:
return G__9398__2.call(this,this_sym9352,k);
case 3:
return G__9398__3.call(this,this_sym9352,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9398;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9343,args9344){
var this__9358 = this;
return this_sym9343.call.apply(this_sym9343,[this_sym9343].concat(args9344.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9359 = this;
return cljs.core.PersistentVector.fromArray([this__9359.key,this__9359.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9360 = this;
return this__9360.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9361 = this;
return this__9361.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9362 = this;
var node__9363 = this;
return ins.balance_right(node__9363);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9364 = this;
var node__9365 = this;
return (new cljs.core.RedNode(this__9364.key,this__9364.val,this__9364.left,this__9364.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9366 = this;
var node__9367 = this;
return cljs.core.balance_right_del.call(null,this__9366.key,this__9366.val,this__9366.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9368 = this;
var node__9369 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9370 = this;
var node__9371 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9371,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9372 = this;
var node__9373 = this;
return cljs.core.balance_left_del.call(null,this__9372.key,this__9372.val,del,this__9372.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9374 = this;
var node__9375 = this;
return ins.balance_left(node__9375);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9376 = this;
var node__9377 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9377,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9399 = null;
var G__9399__0 = (function (){
var this__9378 = this;
var this__9380 = this;
return cljs.core.pr_str.call(null,this__9380);
});
G__9399 = function(){
switch(arguments.length){
case 0:
return G__9399__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9399;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9381 = this;
var node__9382 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9382,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9383 = this;
var node__9384 = this;
return node__9384;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9385 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9386 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9387 = this;
return cljs.core.list.call(null,this__9387.key,this__9387.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9388 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9389 = this;
return this__9389.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9390 = this;
return cljs.core.PersistentVector.fromArray([this__9390.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9391 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9391.key,this__9391.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9392 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9393 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9393.key,this__9393.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9394 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9395 = this;
if((n === 0))
{return this__9395.key;
} else
{if((n === 1))
{return this__9395.val;
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
var this__9396 = this;
if((n === 0))
{return this__9396.key;
} else
{if((n === 1))
{return this__9396.val;
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
var this__9397 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9402 = this;
var h__2309__auto____9403 = this__9402.__hash;
if(!((h__2309__auto____9403 == null)))
{return h__2309__auto____9403;
} else
{var h__2309__auto____9404 = cljs.core.hash_coll.call(null,coll);
this__9402.__hash = h__2309__auto____9404;
return h__2309__auto____9404;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9405 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9406 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9407 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9407.key,this__9407.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9455 = null;
var G__9455__2 = (function (this_sym9408,k){
var this__9410 = this;
var this_sym9408__9411 = this;
var node__9412 = this_sym9408__9411;
return node__9412.cljs$core$ILookup$_lookup$arity$2(node__9412,k);
});
var G__9455__3 = (function (this_sym9409,k,not_found){
var this__9410 = this;
var this_sym9409__9413 = this;
var node__9414 = this_sym9409__9413;
return node__9414.cljs$core$ILookup$_lookup$arity$3(node__9414,k,not_found);
});
G__9455 = function(this_sym9409,k,not_found){
switch(arguments.length){
case 2:
return G__9455__2.call(this,this_sym9409,k);
case 3:
return G__9455__3.call(this,this_sym9409,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9455;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9400,args9401){
var this__9415 = this;
return this_sym9400.call.apply(this_sym9400,[this_sym9400].concat(args9401.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9416 = this;
return cljs.core.PersistentVector.fromArray([this__9416.key,this__9416.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9417 = this;
return this__9417.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9418 = this;
return this__9418.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9419 = this;
var node__9420 = this;
return (new cljs.core.RedNode(this__9419.key,this__9419.val,this__9419.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9421 = this;
var node__9422 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9423 = this;
var node__9424 = this;
return (new cljs.core.RedNode(this__9423.key,this__9423.val,this__9423.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9425 = this;
var node__9426 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9427 = this;
var node__9428 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9428,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9429 = this;
var node__9430 = this;
return (new cljs.core.RedNode(this__9429.key,this__9429.val,del,this__9429.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9431 = this;
var node__9432 = this;
return (new cljs.core.RedNode(this__9431.key,this__9431.val,ins,this__9431.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9433 = this;
var node__9434 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9433.left))
{return (new cljs.core.RedNode(this__9433.key,this__9433.val,this__9433.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9433.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9433.right))
{return (new cljs.core.RedNode(this__9433.right.key,this__9433.right.val,(new cljs.core.BlackNode(this__9433.key,this__9433.val,this__9433.left,this__9433.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9433.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9434,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9456 = null;
var G__9456__0 = (function (){
var this__9435 = this;
var this__9437 = this;
return cljs.core.pr_str.call(null,this__9437);
});
G__9456 = function(){
switch(arguments.length){
case 0:
return G__9456__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9456;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9438 = this;
var node__9439 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9438.right))
{return (new cljs.core.RedNode(this__9438.key,this__9438.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9438.left,null)),this__9438.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9438.left))
{return (new cljs.core.RedNode(this__9438.left.key,this__9438.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9438.left.left,null)),(new cljs.core.BlackNode(this__9438.key,this__9438.val,this__9438.left.right,this__9438.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9439,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9440 = this;
var node__9441 = this;
return (new cljs.core.BlackNode(this__9440.key,this__9440.val,this__9440.left,this__9440.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9442 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9443 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9444 = this;
return cljs.core.list.call(null,this__9444.key,this__9444.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9445 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9446 = this;
return this__9446.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9447 = this;
return cljs.core.PersistentVector.fromArray([this__9447.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9448 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9448.key,this__9448.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9450 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9450.key,this__9450.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9451 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9452 = this;
if((n === 0))
{return this__9452.key;
} else
{if((n === 1))
{return this__9452.val;
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
var this__9453 = this;
if((n === 0))
{return this__9453.key;
} else
{if((n === 1))
{return this__9453.val;
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
var this__9454 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9460 = comp.call(null,k,tree.key);
if((c__9460 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9460 < 0))
{var ins__9461 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9461 == null)))
{return tree.add_left(ins__9461);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9462 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9462 == null)))
{return tree.add_right(ins__9462);
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
{var app__9465 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9465))
{return (new cljs.core.RedNode(app__9465.key,app__9465.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9465.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9465.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9465,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9466 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9466))
{return (new cljs.core.RedNode(app__9466.key,app__9466.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9466.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9466.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9466,right.right,null)));
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
{var c__9472 = comp.call(null,k,tree.key);
if((c__9472 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9472 < 0))
{var del__9473 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9474 = !((del__9473 == null));
if(or__3824__auto____9474)
{return or__3824__auto____9474;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9473,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9473,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9475 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9476 = !((del__9475 == null));
if(or__3824__auto____9476)
{return or__3824__auto____9476;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9475);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9475,null));
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
var tk__9479 = tree.key;
var c__9480 = comp.call(null,k,tk__9479);
if((c__9480 === 0))
{return tree.replace(tk__9479,v,tree.left,tree.right);
} else
{if((c__9480 < 0))
{return tree.replace(tk__9479,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9479,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9483 = this;
var h__2309__auto____9484 = this__9483.__hash;
if(!((h__2309__auto____9484 == null)))
{return h__2309__auto____9484;
} else
{var h__2309__auto____9485 = cljs.core.hash_imap.call(null,coll);
this__9483.__hash = h__2309__auto____9485;
return h__2309__auto____9485;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9486 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9487 = this;
var n__9488 = coll.entry_at(k);
if(!((n__9488 == null)))
{return n__9488.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9489 = this;
var found__9490 = [null];
var t__9491 = cljs.core.tree_map_add.call(null,this__9489.comp,this__9489.tree,k,v,found__9490);
if((t__9491 == null))
{var found_node__9492 = cljs.core.nth.call(null,found__9490,0);
if(cljs.core._EQ_.call(null,v,found_node__9492.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9489.comp,cljs.core.tree_map_replace.call(null,this__9489.comp,this__9489.tree,k,v),this__9489.cnt,this__9489.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9489.comp,t__9491.blacken(),(this__9489.cnt + 1),this__9489.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9493 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9527 = null;
var G__9527__2 = (function (this_sym9494,k){
var this__9496 = this;
var this_sym9494__9497 = this;
var coll__9498 = this_sym9494__9497;
return coll__9498.cljs$core$ILookup$_lookup$arity$2(coll__9498,k);
});
var G__9527__3 = (function (this_sym9495,k,not_found){
var this__9496 = this;
var this_sym9495__9499 = this;
var coll__9500 = this_sym9495__9499;
return coll__9500.cljs$core$ILookup$_lookup$arity$3(coll__9500,k,not_found);
});
G__9527 = function(this_sym9495,k,not_found){
switch(arguments.length){
case 2:
return G__9527__2.call(this,this_sym9495,k);
case 3:
return G__9527__3.call(this,this_sym9495,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9527;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9481,args9482){
var this__9501 = this;
return this_sym9481.call.apply(this_sym9481,[this_sym9481].concat(args9482.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9502 = this;
if(!((this__9502.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9502.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9503 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9504 = this;
if((this__9504.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9504.tree,false,this__9504.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9505 = this;
var this__9506 = this;
return cljs.core.pr_str.call(null,this__9506);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9507 = this;
var coll__9508 = this;
var t__9509 = this__9507.tree;
while(true){
if(!((t__9509 == null)))
{var c__9510 = this__9507.comp.call(null,k,t__9509.key);
if((c__9510 === 0))
{return t__9509;
} else
{if((c__9510 < 0))
{{
var G__9528 = t__9509.left;
t__9509 = G__9528;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9529 = t__9509.right;
t__9509 = G__9529;
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
var this__9511 = this;
if((this__9511.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9511.tree,ascending_QMARK_,this__9511.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9512 = this;
if((this__9512.cnt > 0))
{var stack__9513 = null;
var t__9514 = this__9512.tree;
while(true){
if(!((t__9514 == null)))
{var c__9515 = this__9512.comp.call(null,k,t__9514.key);
if((c__9515 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9513,t__9514),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9515 < 0))
{{
var G__9530 = cljs.core.conj.call(null,stack__9513,t__9514);
var G__9531 = t__9514.left;
stack__9513 = G__9530;
t__9514 = G__9531;
continue;
}
} else
{{
var G__9532 = stack__9513;
var G__9533 = t__9514.right;
stack__9513 = G__9532;
t__9514 = G__9533;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9515 > 0))
{{
var G__9534 = cljs.core.conj.call(null,stack__9513,t__9514);
var G__9535 = t__9514.right;
stack__9513 = G__9534;
t__9514 = G__9535;
continue;
}
} else
{{
var G__9536 = stack__9513;
var G__9537 = t__9514.left;
stack__9513 = G__9536;
t__9514 = G__9537;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9513 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9513,ascending_QMARK_,-1,null));
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
var this__9516 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9517 = this;
return this__9517.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9518 = this;
if((this__9518.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9518.tree,true,this__9518.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9519 = this;
return this__9519.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9520 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9521 = this;
return (new cljs.core.PersistentTreeMap(this__9521.comp,this__9521.tree,this__9521.cnt,meta,this__9521.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9522 = this;
return this__9522.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9523 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9523.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9524 = this;
var found__9525 = [null];
var t__9526 = cljs.core.tree_map_remove.call(null,this__9524.comp,this__9524.tree,k,found__9525);
if((t__9526 == null))
{if((cljs.core.nth.call(null,found__9525,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9524.comp,null,0,this__9524.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9524.comp,t__9526.blacken(),(this__9524.cnt - 1),this__9524.meta,null));
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
var in__9540 = cljs.core.seq.call(null,keyvals);
var out__9541 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9540)
{{
var G__9542 = cljs.core.nnext.call(null,in__9540);
var G__9543 = cljs.core.assoc_BANG_.call(null,out__9541,cljs.core.first.call(null,in__9540),cljs.core.second.call(null,in__9540));
in__9540 = G__9542;
out__9541 = G__9543;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9541);
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
hash_map.cljs$lang$applyTo = (function (arglist__9544){
var keyvals = cljs.core.seq(arglist__9544);;
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
array_map.cljs$lang$applyTo = (function (arglist__9545){
var keyvals = cljs.core.seq(arglist__9545);;
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
var ks__9549 = [];
var obj__9550 = {};
var kvs__9551 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9551)
{ks__9549.push(cljs.core.first.call(null,kvs__9551));
(obj__9550[cljs.core.first.call(null,kvs__9551)] = cljs.core.second.call(null,kvs__9551));
{
var G__9552 = cljs.core.nnext.call(null,kvs__9551);
kvs__9551 = G__9552;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9549,obj__9550);
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
obj_map.cljs$lang$applyTo = (function (arglist__9553){
var keyvals = cljs.core.seq(arglist__9553);;
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
var in__9556 = cljs.core.seq.call(null,keyvals);
var out__9557 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9556)
{{
var G__9558 = cljs.core.nnext.call(null,in__9556);
var G__9559 = cljs.core.assoc.call(null,out__9557,cljs.core.first.call(null,in__9556),cljs.core.second.call(null,in__9556));
in__9556 = G__9558;
out__9557 = G__9559;
continue;
}
} else
{return out__9557;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9560){
var keyvals = cljs.core.seq(arglist__9560);;
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
var in__9563 = cljs.core.seq.call(null,keyvals);
var out__9564 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9563)
{{
var G__9565 = cljs.core.nnext.call(null,in__9563);
var G__9566 = cljs.core.assoc.call(null,out__9564,cljs.core.first.call(null,in__9563),cljs.core.second.call(null,in__9563));
in__9563 = G__9565;
out__9564 = G__9566;
continue;
}
} else
{return out__9564;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9567){
var comparator = cljs.core.first(arglist__9567);
var keyvals = cljs.core.rest(arglist__9567);
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
{return cljs.core.reduce.call(null,(function (p1__9568_SHARP_,p2__9569_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9571 = p1__9568_SHARP_;
if(cljs.core.truth_(or__3824__auto____9571))
{return or__3824__auto____9571;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9569_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9572){
var maps = cljs.core.seq(arglist__9572);;
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
{var merge_entry__9580 = (function (m,e){
var k__9578 = cljs.core.first.call(null,e);
var v__9579 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9578))
{return cljs.core.assoc.call(null,m,k__9578,f.call(null,cljs.core._lookup.call(null,m,k__9578,null),v__9579));
} else
{return cljs.core.assoc.call(null,m,k__9578,v__9579);
}
});
var merge2__9582 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9580,(function (){var or__3824__auto____9581 = m1;
if(cljs.core.truth_(or__3824__auto____9581))
{return or__3824__auto____9581;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9582,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9583){
var f = cljs.core.first(arglist__9583);
var maps = cljs.core.rest(arglist__9583);
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
var ret__9588 = cljs.core.ObjMap.EMPTY;
var keys__9589 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9589)
{var key__9590 = cljs.core.first.call(null,keys__9589);
var entry__9591 = cljs.core._lookup.call(null,map,key__9590,"\uFDD0'cljs.core/not-found");
{
var G__9592 = ((cljs.core.not_EQ_.call(null,entry__9591,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9588,key__9590,entry__9591):ret__9588);
var G__9593 = cljs.core.next.call(null,keys__9589);
ret__9588 = G__9592;
keys__9589 = G__9593;
continue;
}
} else
{return ret__9588;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9597 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9597.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9598 = this;
var h__2309__auto____9599 = this__9598.__hash;
if(!((h__2309__auto____9599 == null)))
{return h__2309__auto____9599;
} else
{var h__2309__auto____9600 = cljs.core.hash_iset.call(null,coll);
this__9598.__hash = h__2309__auto____9600;
return h__2309__auto____9600;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9601 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9602 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9602.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9623 = null;
var G__9623__2 = (function (this_sym9603,k){
var this__9605 = this;
var this_sym9603__9606 = this;
var coll__9607 = this_sym9603__9606;
return coll__9607.cljs$core$ILookup$_lookup$arity$2(coll__9607,k);
});
var G__9623__3 = (function (this_sym9604,k,not_found){
var this__9605 = this;
var this_sym9604__9608 = this;
var coll__9609 = this_sym9604__9608;
return coll__9609.cljs$core$ILookup$_lookup$arity$3(coll__9609,k,not_found);
});
G__9623 = function(this_sym9604,k,not_found){
switch(arguments.length){
case 2:
return G__9623__2.call(this,this_sym9604,k);
case 3:
return G__9623__3.call(this,this_sym9604,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9623;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9595,args9596){
var this__9610 = this;
return this_sym9595.call.apply(this_sym9595,[this_sym9595].concat(args9596.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9611 = this;
return (new cljs.core.PersistentHashSet(this__9611.meta,cljs.core.assoc.call(null,this__9611.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9612 = this;
var this__9613 = this;
return cljs.core.pr_str.call(null,this__9613);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9614 = this;
return cljs.core.keys.call(null,this__9614.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9615 = this;
return (new cljs.core.PersistentHashSet(this__9615.meta,cljs.core.dissoc.call(null,this__9615.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9616 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9617 = this;
var and__3822__auto____9618 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9618)
{var and__3822__auto____9619 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9619)
{return cljs.core.every_QMARK_.call(null,(function (p1__9594_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9594_SHARP_);
}),other);
} else
{return and__3822__auto____9619;
}
} else
{return and__3822__auto____9618;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9620 = this;
return (new cljs.core.PersistentHashSet(meta,this__9620.hash_map,this__9620.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9621 = this;
return this__9621.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9622 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9622.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9624 = cljs.core.count.call(null,items);
var i__9625 = 0;
var out__9626 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9625 < len__9624))
{{
var G__9627 = (i__9625 + 1);
var G__9628 = cljs.core.conj_BANG_.call(null,out__9626,(items[i__9625]));
i__9625 = G__9627;
out__9626 = G__9628;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9626);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9646 = null;
var G__9646__2 = (function (this_sym9632,k){
var this__9634 = this;
var this_sym9632__9635 = this;
var tcoll__9636 = this_sym9632__9635;
if((cljs.core._lookup.call(null,this__9634.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9646__3 = (function (this_sym9633,k,not_found){
var this__9634 = this;
var this_sym9633__9637 = this;
var tcoll__9638 = this_sym9633__9637;
if((cljs.core._lookup.call(null,this__9634.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9646 = function(this_sym9633,k,not_found){
switch(arguments.length){
case 2:
return G__9646__2.call(this,this_sym9633,k);
case 3:
return G__9646__3.call(this,this_sym9633,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9646;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9630,args9631){
var this__9639 = this;
return this_sym9630.call.apply(this_sym9630,[this_sym9630].concat(args9631.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9640 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9641 = this;
if((cljs.core._lookup.call(null,this__9641.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9642 = this;
return cljs.core.count.call(null,this__9642.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9643 = this;
this__9643.transient_map = cljs.core.dissoc_BANG_.call(null,this__9643.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9644 = this;
this__9644.transient_map = cljs.core.assoc_BANG_.call(null,this__9644.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9645 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9645.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9649 = this;
var h__2309__auto____9650 = this__9649.__hash;
if(!((h__2309__auto____9650 == null)))
{return h__2309__auto____9650;
} else
{var h__2309__auto____9651 = cljs.core.hash_iset.call(null,coll);
this__9649.__hash = h__2309__auto____9651;
return h__2309__auto____9651;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9652 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9653 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9653.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9679 = null;
var G__9679__2 = (function (this_sym9654,k){
var this__9656 = this;
var this_sym9654__9657 = this;
var coll__9658 = this_sym9654__9657;
return coll__9658.cljs$core$ILookup$_lookup$arity$2(coll__9658,k);
});
var G__9679__3 = (function (this_sym9655,k,not_found){
var this__9656 = this;
var this_sym9655__9659 = this;
var coll__9660 = this_sym9655__9659;
return coll__9660.cljs$core$ILookup$_lookup$arity$3(coll__9660,k,not_found);
});
G__9679 = function(this_sym9655,k,not_found){
switch(arguments.length){
case 2:
return G__9679__2.call(this,this_sym9655,k);
case 3:
return G__9679__3.call(this,this_sym9655,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9679;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9647,args9648){
var this__9661 = this;
return this_sym9647.call.apply(this_sym9647,[this_sym9647].concat(args9648.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9662 = this;
return (new cljs.core.PersistentTreeSet(this__9662.meta,cljs.core.assoc.call(null,this__9662.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9663 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9663.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9664 = this;
var this__9665 = this;
return cljs.core.pr_str.call(null,this__9665);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9666 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9666.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9667 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9667.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9668 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9669 = this;
return cljs.core._comparator.call(null,this__9669.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9670 = this;
return cljs.core.keys.call(null,this__9670.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9671 = this;
return (new cljs.core.PersistentTreeSet(this__9671.meta,cljs.core.dissoc.call(null,this__9671.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9672 = this;
return cljs.core.count.call(null,this__9672.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9673 = this;
var and__3822__auto____9674 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9674)
{var and__3822__auto____9675 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9675)
{return cljs.core.every_QMARK_.call(null,(function (p1__9629_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9629_SHARP_);
}),other);
} else
{return and__3822__auto____9675;
}
} else
{return and__3822__auto____9674;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9676 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9676.tree_map,this__9676.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9677 = this;
return this__9677.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9678 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9678.meta);
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
var G__9684__delegate = function (keys){
var in__9682 = cljs.core.seq.call(null,keys);
var out__9683 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9682))
{{
var G__9685 = cljs.core.next.call(null,in__9682);
var G__9686 = cljs.core.conj_BANG_.call(null,out__9683,cljs.core.first.call(null,in__9682));
in__9682 = G__9685;
out__9683 = G__9686;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9683);
}
break;
}
};
var G__9684 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9684__delegate.call(this, keys);
};
G__9684.cljs$lang$maxFixedArity = 0;
G__9684.cljs$lang$applyTo = (function (arglist__9687){
var keys = cljs.core.seq(arglist__9687);;
return G__9684__delegate(keys);
});
G__9684.cljs$lang$arity$variadic = G__9684__delegate;
return G__9684;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9688){
var keys = cljs.core.seq(arglist__9688);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9690){
var comparator = cljs.core.first(arglist__9690);
var keys = cljs.core.rest(arglist__9690);
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
{var n__9696 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9697 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9697))
{var e__9698 = temp__3971__auto____9697;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9698));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9696,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9689_SHARP_){
var temp__3971__auto____9699 = cljs.core.find.call(null,smap,p1__9689_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9699))
{var e__9700 = temp__3971__auto____9699;
return cljs.core.second.call(null,e__9700);
} else
{return p1__9689_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9730 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9723,seen){
while(true){
var vec__9724__9725 = p__9723;
var f__9726 = cljs.core.nth.call(null,vec__9724__9725,0,null);
var xs__9727 = vec__9724__9725;
var temp__3974__auto____9728 = cljs.core.seq.call(null,xs__9727);
if(temp__3974__auto____9728)
{var s__9729 = temp__3974__auto____9728;
if(cljs.core.contains_QMARK_.call(null,seen,f__9726))
{{
var G__9731 = cljs.core.rest.call(null,s__9729);
var G__9732 = seen;
p__9723 = G__9731;
seen = G__9732;
continue;
}
} else
{return cljs.core.cons.call(null,f__9726,step.call(null,cljs.core.rest.call(null,s__9729),cljs.core.conj.call(null,seen,f__9726)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9730.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9735 = cljs.core.PersistentVector.EMPTY;
var s__9736 = s;
while(true){
if(cljs.core.next.call(null,s__9736))
{{
var G__9737 = cljs.core.conj.call(null,ret__9735,cljs.core.first.call(null,s__9736));
var G__9738 = cljs.core.next.call(null,s__9736);
ret__9735 = G__9737;
s__9736 = G__9738;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9735);
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
{if((function (){var or__3824__auto____9741 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9741)
{return or__3824__auto____9741;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9742 = x.lastIndexOf("/");
if((i__9742 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9742 + 1));
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
if((function (){var or__3824__auto____9745 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9745)
{return or__3824__auto____9745;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9746 = x.lastIndexOf("/");
if((i__9746 > -1))
{return cljs.core.subs.call(null,x,2,i__9746);
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
var map__9753 = cljs.core.ObjMap.EMPTY;
var ks__9754 = cljs.core.seq.call(null,keys);
var vs__9755 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9756 = ks__9754;
if(and__3822__auto____9756)
{return vs__9755;
} else
{return and__3822__auto____9756;
}
})())
{{
var G__9757 = cljs.core.assoc.call(null,map__9753,cljs.core.first.call(null,ks__9754),cljs.core.first.call(null,vs__9755));
var G__9758 = cljs.core.next.call(null,ks__9754);
var G__9759 = cljs.core.next.call(null,vs__9755);
map__9753 = G__9757;
ks__9754 = G__9758;
vs__9755 = G__9759;
continue;
}
} else
{return map__9753;
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
var G__9762__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9747_SHARP_,p2__9748_SHARP_){
return max_key.call(null,k,p1__9747_SHARP_,p2__9748_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9762 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9762__delegate.call(this, k, x, y, more);
};
G__9762.cljs$lang$maxFixedArity = 3;
G__9762.cljs$lang$applyTo = (function (arglist__9763){
var k = cljs.core.first(arglist__9763);
var x = cljs.core.first(cljs.core.next(arglist__9763));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9763)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9763)));
return G__9762__delegate(k, x, y, more);
});
G__9762.cljs$lang$arity$variadic = G__9762__delegate;
return G__9762;
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
var G__9764__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9760_SHARP_,p2__9761_SHARP_){
return min_key.call(null,k,p1__9760_SHARP_,p2__9761_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9764 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9764__delegate.call(this, k, x, y, more);
};
G__9764.cljs$lang$maxFixedArity = 3;
G__9764.cljs$lang$applyTo = (function (arglist__9765){
var k = cljs.core.first(arglist__9765);
var x = cljs.core.first(cljs.core.next(arglist__9765));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9765)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9765)));
return G__9764__delegate(k, x, y, more);
});
G__9764.cljs$lang$arity$variadic = G__9764__delegate;
return G__9764;
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
var temp__3974__auto____9768 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9768)
{var s__9769 = temp__3974__auto____9768;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9769),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9769)));
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
var temp__3974__auto____9772 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9772)
{var s__9773 = temp__3974__auto____9772;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9773))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9773),take_while.call(null,pred,cljs.core.rest.call(null,s__9773)));
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
var comp__9775 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9775.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9787 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9788 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9788))
{var vec__9789__9790 = temp__3974__auto____9788;
var e__9791 = cljs.core.nth.call(null,vec__9789__9790,0,null);
var s__9792 = vec__9789__9790;
if(cljs.core.truth_(include__9787.call(null,e__9791)))
{return s__9792;
} else
{return cljs.core.next.call(null,s__9792);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9787,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9793 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9793))
{var vec__9794__9795 = temp__3974__auto____9793;
var e__9796 = cljs.core.nth.call(null,vec__9794__9795,0,null);
var s__9797 = vec__9794__9795;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9796))?s__9797:cljs.core.next.call(null,s__9797)));
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
var include__9809 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9810 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9810))
{var vec__9811__9812 = temp__3974__auto____9810;
var e__9813 = cljs.core.nth.call(null,vec__9811__9812,0,null);
var s__9814 = vec__9811__9812;
if(cljs.core.truth_(include__9809.call(null,e__9813)))
{return s__9814;
} else
{return cljs.core.next.call(null,s__9814);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9809,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9815 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9815))
{var vec__9816__9817 = temp__3974__auto____9815;
var e__9818 = cljs.core.nth.call(null,vec__9816__9817,0,null);
var s__9819 = vec__9816__9817;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9818))?s__9819:cljs.core.next.call(null,s__9819)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9820 = this;
var h__2309__auto____9821 = this__9820.__hash;
if(!((h__2309__auto____9821 == null)))
{return h__2309__auto____9821;
} else
{var h__2309__auto____9822 = cljs.core.hash_coll.call(null,rng);
this__9820.__hash = h__2309__auto____9822;
return h__2309__auto____9822;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9823 = this;
if((this__9823.step > 0))
{if(((this__9823.start + this__9823.step) < this__9823.end))
{return (new cljs.core.Range(this__9823.meta,(this__9823.start + this__9823.step),this__9823.end,this__9823.step,null));
} else
{return null;
}
} else
{if(((this__9823.start + this__9823.step) > this__9823.end))
{return (new cljs.core.Range(this__9823.meta,(this__9823.start + this__9823.step),this__9823.end,this__9823.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9824 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9825 = this;
var this__9826 = this;
return cljs.core.pr_str.call(null,this__9826);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9827 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9828 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9829 = this;
if((this__9829.step > 0))
{if((this__9829.start < this__9829.end))
{return rng;
} else
{return null;
}
} else
{if((this__9829.start > this__9829.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9830 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9830.end - this__9830.start) / this__9830.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9831 = this;
return this__9831.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9832 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9832.meta,(this__9832.start + this__9832.step),this__9832.end,this__9832.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9833 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9834 = this;
return (new cljs.core.Range(meta,this__9834.start,this__9834.end,this__9834.step,this__9834.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9835 = this;
return this__9835.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9836 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9836.start + (n * this__9836.step));
} else
{if((function (){var and__3822__auto____9837 = (this__9836.start > this__9836.end);
if(and__3822__auto____9837)
{return (this__9836.step === 0);
} else
{return and__3822__auto____9837;
}
})())
{return this__9836.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9838 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9838.start + (n * this__9838.step));
} else
{if((function (){var and__3822__auto____9839 = (this__9838.start > this__9838.end);
if(and__3822__auto____9839)
{return (this__9838.step === 0);
} else
{return and__3822__auto____9839;
}
})())
{return this__9838.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9840 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9840.meta);
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
var temp__3974__auto____9843 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9843)
{var s__9844 = temp__3974__auto____9843;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9844),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9844)));
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
var temp__3974__auto____9851 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9851)
{var s__9852 = temp__3974__auto____9851;
var fst__9853 = cljs.core.first.call(null,s__9852);
var fv__9854 = f.call(null,fst__9853);
var run__9855 = cljs.core.cons.call(null,fst__9853,cljs.core.take_while.call(null,(function (p1__9845_SHARP_){
return cljs.core._EQ_.call(null,fv__9854,f.call(null,p1__9845_SHARP_));
}),cljs.core.next.call(null,s__9852)));
return cljs.core.cons.call(null,run__9855,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9855),s__9852))));
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
var temp__3971__auto____9870 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9870)
{var s__9871 = temp__3971__auto____9870;
return reductions.call(null,f,cljs.core.first.call(null,s__9871),cljs.core.rest.call(null,s__9871));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9872 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9872)
{var s__9873 = temp__3974__auto____9872;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9873)),cljs.core.rest.call(null,s__9873));
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
var G__9876 = null;
var G__9876__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9876__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9876__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9876__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9876__4 = (function() { 
var G__9877__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9877 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9877__delegate.call(this, x, y, z, args);
};
G__9877.cljs$lang$maxFixedArity = 3;
G__9877.cljs$lang$applyTo = (function (arglist__9878){
var x = cljs.core.first(arglist__9878);
var y = cljs.core.first(cljs.core.next(arglist__9878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9878)));
return G__9877__delegate(x, y, z, args);
});
G__9877.cljs$lang$arity$variadic = G__9877__delegate;
return G__9877;
})()
;
G__9876 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9876__0.call(this);
case 1:
return G__9876__1.call(this,x);
case 2:
return G__9876__2.call(this,x,y);
case 3:
return G__9876__3.call(this,x,y,z);
default:
return G__9876__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9876.cljs$lang$maxFixedArity = 3;
G__9876.cljs$lang$applyTo = G__9876__4.cljs$lang$applyTo;
return G__9876;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9879 = null;
var G__9879__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9879__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9879__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9879__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9879__4 = (function() { 
var G__9880__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9880 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9880__delegate.call(this, x, y, z, args);
};
G__9880.cljs$lang$maxFixedArity = 3;
G__9880.cljs$lang$applyTo = (function (arglist__9881){
var x = cljs.core.first(arglist__9881);
var y = cljs.core.first(cljs.core.next(arglist__9881));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9881)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9881)));
return G__9880__delegate(x, y, z, args);
});
G__9880.cljs$lang$arity$variadic = G__9880__delegate;
return G__9880;
})()
;
G__9879 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9879__0.call(this);
case 1:
return G__9879__1.call(this,x);
case 2:
return G__9879__2.call(this,x,y);
case 3:
return G__9879__3.call(this,x,y,z);
default:
return G__9879__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9879.cljs$lang$maxFixedArity = 3;
G__9879.cljs$lang$applyTo = G__9879__4.cljs$lang$applyTo;
return G__9879;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9882 = null;
var G__9882__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9882__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9882__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9882__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9882__4 = (function() { 
var G__9883__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9883 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9883__delegate.call(this, x, y, z, args);
};
G__9883.cljs$lang$maxFixedArity = 3;
G__9883.cljs$lang$applyTo = (function (arglist__9884){
var x = cljs.core.first(arglist__9884);
var y = cljs.core.first(cljs.core.next(arglist__9884));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9884)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9884)));
return G__9883__delegate(x, y, z, args);
});
G__9883.cljs$lang$arity$variadic = G__9883__delegate;
return G__9883;
})()
;
G__9882 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9882__0.call(this);
case 1:
return G__9882__1.call(this,x);
case 2:
return G__9882__2.call(this,x,y);
case 3:
return G__9882__3.call(this,x,y,z);
default:
return G__9882__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9882.cljs$lang$maxFixedArity = 3;
G__9882.cljs$lang$applyTo = G__9882__4.cljs$lang$applyTo;
return G__9882;
})()
});
var juxt__4 = (function() { 
var G__9885__delegate = function (f,g,h,fs){
var fs__9875 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9886 = null;
var G__9886__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9856_SHARP_,p2__9857_SHARP_){
return cljs.core.conj.call(null,p1__9856_SHARP_,p2__9857_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9875);
});
var G__9886__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9858_SHARP_,p2__9859_SHARP_){
return cljs.core.conj.call(null,p1__9858_SHARP_,p2__9859_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9875);
});
var G__9886__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9860_SHARP_,p2__9861_SHARP_){
return cljs.core.conj.call(null,p1__9860_SHARP_,p2__9861_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9875);
});
var G__9886__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9862_SHARP_,p2__9863_SHARP_){
return cljs.core.conj.call(null,p1__9862_SHARP_,p2__9863_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9875);
});
var G__9886__4 = (function() { 
var G__9887__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9864_SHARP_,p2__9865_SHARP_){
return cljs.core.conj.call(null,p1__9864_SHARP_,cljs.core.apply.call(null,p2__9865_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9875);
};
var G__9887 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9887__delegate.call(this, x, y, z, args);
};
G__9887.cljs$lang$maxFixedArity = 3;
G__9887.cljs$lang$applyTo = (function (arglist__9888){
var x = cljs.core.first(arglist__9888);
var y = cljs.core.first(cljs.core.next(arglist__9888));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9888)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9888)));
return G__9887__delegate(x, y, z, args);
});
G__9887.cljs$lang$arity$variadic = G__9887__delegate;
return G__9887;
})()
;
G__9886 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9886__0.call(this);
case 1:
return G__9886__1.call(this,x);
case 2:
return G__9886__2.call(this,x,y);
case 3:
return G__9886__3.call(this,x,y,z);
default:
return G__9886__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9886.cljs$lang$maxFixedArity = 3;
G__9886.cljs$lang$applyTo = G__9886__4.cljs$lang$applyTo;
return G__9886;
})()
};
var G__9885 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9885__delegate.call(this, f, g, h, fs);
};
G__9885.cljs$lang$maxFixedArity = 3;
G__9885.cljs$lang$applyTo = (function (arglist__9889){
var f = cljs.core.first(arglist__9889);
var g = cljs.core.first(cljs.core.next(arglist__9889));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9889)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9889)));
return G__9885__delegate(f, g, h, fs);
});
G__9885.cljs$lang$arity$variadic = G__9885__delegate;
return G__9885;
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
var G__9892 = cljs.core.next.call(null,coll);
coll = G__9892;
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
if(cljs.core.truth_((function (){var and__3822__auto____9891 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9891)
{return (n > 0);
} else
{return and__3822__auto____9891;
}
})()))
{{
var G__9893 = (n - 1);
var G__9894 = cljs.core.next.call(null,coll);
n = G__9893;
coll = G__9894;
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
var matches__9896 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9896),s))
{if((cljs.core.count.call(null,matches__9896) === 1))
{return cljs.core.first.call(null,matches__9896);
} else
{return cljs.core.vec.call(null,matches__9896);
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
var matches__9898 = re.exec(s);
if((matches__9898 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9898) === 1))
{return cljs.core.first.call(null,matches__9898);
} else
{return cljs.core.vec.call(null,matches__9898);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9903 = cljs.core.re_find.call(null,re,s);
var match_idx__9904 = s.search(re);
var match_str__9905 = ((cljs.core.coll_QMARK_.call(null,match_data__9903))?cljs.core.first.call(null,match_data__9903):match_data__9903);
var post_match__9906 = cljs.core.subs.call(null,s,(match_idx__9904 + cljs.core.count.call(null,match_str__9905)));
if(cljs.core.truth_(match_data__9903))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9903,re_seq.call(null,re,post_match__9906));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9913__9914 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9915 = cljs.core.nth.call(null,vec__9913__9914,0,null);
var flags__9916 = cljs.core.nth.call(null,vec__9913__9914,1,null);
var pattern__9917 = cljs.core.nth.call(null,vec__9913__9914,2,null);
return (new RegExp(pattern__9917,flags__9916));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9907_SHARP_){
return print_one.call(null,p1__9907_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9927 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9927))
{var and__3822__auto____9931 = (function (){var G__9928__9929 = obj;
if(G__9928__9929)
{if((function (){var or__3824__auto____9930 = (G__9928__9929.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9930)
{return or__3824__auto____9930;
} else
{return G__9928__9929.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9928__9929.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9928__9929);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9928__9929);
}
})();
if(cljs.core.truth_(and__3822__auto____9931))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9931;
}
} else
{return and__3822__auto____9927;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9932 = !((obj == null));
if(and__3822__auto____9932)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9932;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9933__9934 = obj;
if(G__9933__9934)
{if((function (){var or__3824__auto____9935 = (G__9933__9934.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9935)
{return or__3824__auto____9935;
} else
{return G__9933__9934.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9933__9934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9933__9934);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9933__9934);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9955 = (new goog.string.StringBuffer());
var G__9956__9957 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9956__9957)
{var string__9958 = cljs.core.first.call(null,G__9956__9957);
var G__9956__9959 = G__9956__9957;
while(true){
sb__9955.append(string__9958);
var temp__3974__auto____9960 = cljs.core.next.call(null,G__9956__9959);
if(temp__3974__auto____9960)
{var G__9956__9961 = temp__3974__auto____9960;
{
var G__9974 = cljs.core.first.call(null,G__9956__9961);
var G__9975 = G__9956__9961;
string__9958 = G__9974;
G__9956__9959 = G__9975;
continue;
}
} else
{}
break;
}
} else
{}
var G__9962__9963 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9962__9963)
{var obj__9964 = cljs.core.first.call(null,G__9962__9963);
var G__9962__9965 = G__9962__9963;
while(true){
sb__9955.append(" ");
var G__9966__9967 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9964,opts));
if(G__9966__9967)
{var string__9968 = cljs.core.first.call(null,G__9966__9967);
var G__9966__9969 = G__9966__9967;
while(true){
sb__9955.append(string__9968);
var temp__3974__auto____9970 = cljs.core.next.call(null,G__9966__9969);
if(temp__3974__auto____9970)
{var G__9966__9971 = temp__3974__auto____9970;
{
var G__9976 = cljs.core.first.call(null,G__9966__9971);
var G__9977 = G__9966__9971;
string__9968 = G__9976;
G__9966__9969 = G__9977;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9972 = cljs.core.next.call(null,G__9962__9965);
if(temp__3974__auto____9972)
{var G__9962__9973 = temp__3974__auto____9972;
{
var G__9978 = cljs.core.first.call(null,G__9962__9973);
var G__9979 = G__9962__9973;
obj__9964 = G__9978;
G__9962__9965 = G__9979;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9955;
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
var sb__9981 = cljs.core.pr_sb.call(null,objs,opts);
sb__9981.append("\n");
return [cljs.core.str(sb__9981)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10000__10001 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10000__10001)
{var string__10002 = cljs.core.first.call(null,G__10000__10001);
var G__10000__10003 = G__10000__10001;
while(true){
cljs.core.string_print.call(null,string__10002);
var temp__3974__auto____10004 = cljs.core.next.call(null,G__10000__10003);
if(temp__3974__auto____10004)
{var G__10000__10005 = temp__3974__auto____10004;
{
var G__10018 = cljs.core.first.call(null,G__10000__10005);
var G__10019 = G__10000__10005;
string__10002 = G__10018;
G__10000__10003 = G__10019;
continue;
}
} else
{}
break;
}
} else
{}
var G__10006__10007 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10006__10007)
{var obj__10008 = cljs.core.first.call(null,G__10006__10007);
var G__10006__10009 = G__10006__10007;
while(true){
cljs.core.string_print.call(null," ");
var G__10010__10011 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10008,opts));
if(G__10010__10011)
{var string__10012 = cljs.core.first.call(null,G__10010__10011);
var G__10010__10013 = G__10010__10011;
while(true){
cljs.core.string_print.call(null,string__10012);
var temp__3974__auto____10014 = cljs.core.next.call(null,G__10010__10013);
if(temp__3974__auto____10014)
{var G__10010__10015 = temp__3974__auto____10014;
{
var G__10020 = cljs.core.first.call(null,G__10010__10015);
var G__10021 = G__10010__10015;
string__10012 = G__10020;
G__10010__10013 = G__10021;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10016 = cljs.core.next.call(null,G__10006__10009);
if(temp__3974__auto____10016)
{var G__10006__10017 = temp__3974__auto____10016;
{
var G__10022 = cljs.core.first.call(null,G__10006__10017);
var G__10023 = G__10006__10017;
obj__10008 = G__10022;
G__10006__10009 = G__10023;
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
pr_str.cljs$lang$applyTo = (function (arglist__10024){
var objs = cljs.core.seq(arglist__10024);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10025){
var objs = cljs.core.seq(arglist__10025);;
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
pr.cljs$lang$applyTo = (function (arglist__10026){
var objs = cljs.core.seq(arglist__10026);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10027){
var objs = cljs.core.seq(arglist__10027);;
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
print_str.cljs$lang$applyTo = (function (arglist__10028){
var objs = cljs.core.seq(arglist__10028);;
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
println.cljs$lang$applyTo = (function (arglist__10029){
var objs = cljs.core.seq(arglist__10029);;
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
println_str.cljs$lang$applyTo = (function (arglist__10030){
var objs = cljs.core.seq(arglist__10030);;
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
prn.cljs$lang$applyTo = (function (arglist__10031){
var objs = cljs.core.seq(arglist__10031);;
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
printf.cljs$lang$applyTo = (function (arglist__10032){
var fmt = cljs.core.first(arglist__10032);
var args = cljs.core.rest(arglist__10032);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10033 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10033,"{",", ","}",opts,coll);
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
var pr_pair__10034 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10034,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10035 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10035,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10036 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10036))
{var nspc__10037 = temp__3974__auto____10036;
return [cljs.core.str(nspc__10037),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10038 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10038))
{var nspc__10039 = temp__3974__auto____10038;
return [cljs.core.str(nspc__10039),cljs.core.str("/")].join('');
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
var pr_pair__10040 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10040,"{",", ","}",opts,coll);
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
var normalize__10042 = (function (n,len){
var ns__10041 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10041) < len))
{{
var G__10044 = [cljs.core.str("0"),cljs.core.str(ns__10041)].join('');
ns__10041 = G__10044;
continue;
}
} else
{return ns__10041;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10042.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10042.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10042.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10042.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10042.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10042.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10043 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10043,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10045 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10046 = this;
var G__10047__10048 = cljs.core.seq.call(null,this__10046.watches);
if(G__10047__10048)
{var G__10050__10052 = cljs.core.first.call(null,G__10047__10048);
var vec__10051__10053 = G__10050__10052;
var key__10054 = cljs.core.nth.call(null,vec__10051__10053,0,null);
var f__10055 = cljs.core.nth.call(null,vec__10051__10053,1,null);
var G__10047__10056 = G__10047__10048;
var G__10050__10057 = G__10050__10052;
var G__10047__10058 = G__10047__10056;
while(true){
var vec__10059__10060 = G__10050__10057;
var key__10061 = cljs.core.nth.call(null,vec__10059__10060,0,null);
var f__10062 = cljs.core.nth.call(null,vec__10059__10060,1,null);
var G__10047__10063 = G__10047__10058;
f__10062.call(null,key__10061,this$,oldval,newval);
var temp__3974__auto____10064 = cljs.core.next.call(null,G__10047__10063);
if(temp__3974__auto____10064)
{var G__10047__10065 = temp__3974__auto____10064;
{
var G__10072 = cljs.core.first.call(null,G__10047__10065);
var G__10073 = G__10047__10065;
G__10050__10057 = G__10072;
G__10047__10058 = G__10073;
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
var this__10066 = this;
return this$.watches = cljs.core.assoc.call(null,this__10066.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10067 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10067.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10068 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10068.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10069 = this;
return this__10069.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10070 = this;
return this__10070.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10071 = this;
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
var G__10085__delegate = function (x,p__10074){
var map__10080__10081 = p__10074;
var map__10080__10082 = ((cljs.core.seq_QMARK_.call(null,map__10080__10081))?cljs.core.apply.call(null,cljs.core.hash_map,map__10080__10081):map__10080__10081);
var validator__10083 = cljs.core._lookup.call(null,map__10080__10082,"\uFDD0'validator",null);
var meta__10084 = cljs.core._lookup.call(null,map__10080__10082,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10084,validator__10083,null));
};
var G__10085 = function (x,var_args){
var p__10074 = null;
if (goog.isDef(var_args)) {
  p__10074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10085__delegate.call(this, x, p__10074);
};
G__10085.cljs$lang$maxFixedArity = 1;
G__10085.cljs$lang$applyTo = (function (arglist__10086){
var x = cljs.core.first(arglist__10086);
var p__10074 = cljs.core.rest(arglist__10086);
return G__10085__delegate(x, p__10074);
});
G__10085.cljs$lang$arity$variadic = G__10085__delegate;
return G__10085;
})()
;
atom = function(x,var_args){
var p__10074 = var_args;
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
var temp__3974__auto____10090 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10090))
{var validate__10091 = temp__3974__auto____10090;
if(cljs.core.truth_(validate__10091.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10092 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10092,new_value);
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
var G__10093__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10093 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10093__delegate.call(this, a, f, x, y, z, more);
};
G__10093.cljs$lang$maxFixedArity = 5;
G__10093.cljs$lang$applyTo = (function (arglist__10094){
var a = cljs.core.first(arglist__10094);
var f = cljs.core.first(cljs.core.next(arglist__10094));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10094)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10094))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10094)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10094)))));
return G__10093__delegate(a, f, x, y, z, more);
});
G__10093.cljs$lang$arity$variadic = G__10093__delegate;
return G__10093;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10095){
var iref = cljs.core.first(arglist__10095);
var f = cljs.core.first(cljs.core.next(arglist__10095));
var args = cljs.core.rest(cljs.core.next(arglist__10095));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10096 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10096.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10097 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10097.state,(function (p__10098){
var map__10099__10100 = p__10098;
var map__10099__10101 = ((cljs.core.seq_QMARK_.call(null,map__10099__10100))?cljs.core.apply.call(null,cljs.core.hash_map,map__10099__10100):map__10099__10100);
var curr_state__10102 = map__10099__10101;
var done__10103 = cljs.core._lookup.call(null,map__10099__10101,"\uFDD0'done",null);
if(cljs.core.truth_(done__10103))
{return curr_state__10102;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10097.f.call(null)});
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
var map__10124__10125 = options;
var map__10124__10126 = ((cljs.core.seq_QMARK_.call(null,map__10124__10125))?cljs.core.apply.call(null,cljs.core.hash_map,map__10124__10125):map__10124__10125);
var keywordize_keys__10127 = cljs.core._lookup.call(null,map__10124__10126,"\uFDD0'keywordize-keys",null);
var keyfn__10128 = (cljs.core.truth_(keywordize_keys__10127)?cljs.core.keyword:cljs.core.str);
var f__10143 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2579__auto____10142 = (function iter__10136(s__10137){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10137__10140 = s__10137;
while(true){
if(cljs.core.seq.call(null,s__10137__10140))
{var k__10141 = cljs.core.first.call(null,s__10137__10140);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10128.call(null,k__10141),thisfn.call(null,(x[k__10141]))], true),iter__10136.call(null,cljs.core.rest.call(null,s__10137__10140)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2579__auto____10142.call(null,cljs.core.js_keys.call(null,x));
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
return f__10143.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10144){
var x = cljs.core.first(arglist__10144);
var options = cljs.core.rest(arglist__10144);
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
var mem__10149 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10153__delegate = function (args){
var temp__3971__auto____10150 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10149),args,null);
if(cljs.core.truth_(temp__3971__auto____10150))
{var v__10151 = temp__3971__auto____10150;
return v__10151;
} else
{var ret__10152 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10149,cljs.core.assoc,args,ret__10152);
return ret__10152;
}
};
var G__10153 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10153__delegate.call(this, args);
};
G__10153.cljs$lang$maxFixedArity = 0;
G__10153.cljs$lang$applyTo = (function (arglist__10154){
var args = cljs.core.seq(arglist__10154);;
return G__10153__delegate(args);
});
G__10153.cljs$lang$arity$variadic = G__10153__delegate;
return G__10153;
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
var ret__10156 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10156))
{{
var G__10157 = ret__10156;
f = G__10157;
continue;
}
} else
{return ret__10156;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10158__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10158 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10158__delegate.call(this, f, args);
};
G__10158.cljs$lang$maxFixedArity = 1;
G__10158.cljs$lang$applyTo = (function (arglist__10159){
var f = cljs.core.first(arglist__10159);
var args = cljs.core.rest(arglist__10159);
return G__10158__delegate(f, args);
});
G__10158.cljs$lang$arity$variadic = G__10158__delegate;
return G__10158;
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
var k__10161 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10161,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10161,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10170 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10170)
{return or__3824__auto____10170;
} else
{var or__3824__auto____10171 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10171)
{return or__3824__auto____10171;
} else
{var and__3822__auto____10172 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10172)
{var and__3822__auto____10173 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10173)
{var and__3822__auto____10174 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10174)
{var ret__10175 = true;
var i__10176 = 0;
while(true){
if((function (){var or__3824__auto____10177 = cljs.core.not.call(null,ret__10175);
if(or__3824__auto____10177)
{return or__3824__auto____10177;
} else
{return (i__10176 === cljs.core.count.call(null,parent));
}
})())
{return ret__10175;
} else
{{
var G__10178 = isa_QMARK_.call(null,h,child.call(null,i__10176),parent.call(null,i__10176));
var G__10179 = (i__10176 + 1);
ret__10175 = G__10178;
i__10176 = G__10179;
continue;
}
}
break;
}
} else
{return and__3822__auto____10174;
}
} else
{return and__3822__auto____10173;
}
} else
{return and__3822__auto____10172;
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
var tp__10188 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10189 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10190 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10191 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10192 = ((cljs.core.contains_QMARK_.call(null,tp__10188.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10190.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10190.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10188,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10191.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10189,parent,ta__10190),"\uFDD0'descendants":tf__10191.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10190,tag,td__10189)});
})());
if(cljs.core.truth_(or__3824__auto____10192))
{return or__3824__auto____10192;
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
var parentMap__10197 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10198 = (cljs.core.truth_(parentMap__10197.call(null,tag))?cljs.core.disj.call(null,parentMap__10197.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10199 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10198))?cljs.core.assoc.call(null,parentMap__10197,tag,childsParents__10198):cljs.core.dissoc.call(null,parentMap__10197,tag));
var deriv_seq__10200 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10180_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10180_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10180_SHARP_),cljs.core.second.call(null,p1__10180_SHARP_)));
}),cljs.core.seq.call(null,newParents__10199)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10197.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10181_SHARP_,p2__10182_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10181_SHARP_,p2__10182_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10200));
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
var xprefs__10208 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10210 = (cljs.core.truth_((function (){var and__3822__auto____10209 = xprefs__10208;
if(cljs.core.truth_(and__3822__auto____10209))
{return xprefs__10208.call(null,y);
} else
{return and__3822__auto____10209;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10210))
{return or__3824__auto____10210;
} else
{var or__3824__auto____10212 = (function (){var ps__10211 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10211) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10211),prefer_table)))
{} else
{}
{
var G__10215 = cljs.core.rest.call(null,ps__10211);
ps__10211 = G__10215;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10212))
{return or__3824__auto____10212;
} else
{var or__3824__auto____10214 = (function (){var ps__10213 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10213) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10213),y,prefer_table)))
{} else
{}
{
var G__10216 = cljs.core.rest.call(null,ps__10213);
ps__10213 = G__10216;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10214))
{return or__3824__auto____10214;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10218 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10218))
{return or__3824__auto____10218;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10236 = cljs.core.reduce.call(null,(function (be,p__10228){
var vec__10229__10230 = p__10228;
var k__10231 = cljs.core.nth.call(null,vec__10229__10230,0,null);
var ___10232 = cljs.core.nth.call(null,vec__10229__10230,1,null);
var e__10233 = vec__10229__10230;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10231))
{var be2__10235 = (cljs.core.truth_((function (){var or__3824__auto____10234 = (be == null);
if(or__3824__auto____10234)
{return or__3824__auto____10234;
} else
{return cljs.core.dominates.call(null,k__10231,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10233:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10235),k__10231,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10231),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10235)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10235;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10236))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10236));
return cljs.core.second.call(null,best_entry__10236);
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
if((function (){var and__3822__auto____10241 = mf;
if(and__3822__auto____10241)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10241;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2480__auto____10242 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10243 = (cljs.core._reset[goog.typeOf(x__2480__auto____10242)]);
if(or__3824__auto____10243)
{return or__3824__auto____10243;
} else
{var or__3824__auto____10244 = (cljs.core._reset["_"]);
if(or__3824__auto____10244)
{return or__3824__auto____10244;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10249 = mf;
if(and__3822__auto____10249)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10249;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2480__auto____10250 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10251 = (cljs.core._add_method[goog.typeOf(x__2480__auto____10250)]);
if(or__3824__auto____10251)
{return or__3824__auto____10251;
} else
{var or__3824__auto____10252 = (cljs.core._add_method["_"]);
if(or__3824__auto____10252)
{return or__3824__auto____10252;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10257 = mf;
if(and__3822__auto____10257)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10257;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2480__auto____10258 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10259 = (cljs.core._remove_method[goog.typeOf(x__2480__auto____10258)]);
if(or__3824__auto____10259)
{return or__3824__auto____10259;
} else
{var or__3824__auto____10260 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10260)
{return or__3824__auto____10260;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10265 = mf;
if(and__3822__auto____10265)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10265;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2480__auto____10266 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10267 = (cljs.core._prefer_method[goog.typeOf(x__2480__auto____10266)]);
if(or__3824__auto____10267)
{return or__3824__auto____10267;
} else
{var or__3824__auto____10268 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10268)
{return or__3824__auto____10268;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10273 = mf;
if(and__3822__auto____10273)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10273;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2480__auto____10274 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10275 = (cljs.core._get_method[goog.typeOf(x__2480__auto____10274)]);
if(or__3824__auto____10275)
{return or__3824__auto____10275;
} else
{var or__3824__auto____10276 = (cljs.core._get_method["_"]);
if(or__3824__auto____10276)
{return or__3824__auto____10276;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10281 = mf;
if(and__3822__auto____10281)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10281;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2480__auto____10282 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10283 = (cljs.core._methods[goog.typeOf(x__2480__auto____10282)]);
if(or__3824__auto____10283)
{return or__3824__auto____10283;
} else
{var or__3824__auto____10284 = (cljs.core._methods["_"]);
if(or__3824__auto____10284)
{return or__3824__auto____10284;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10289 = mf;
if(and__3822__auto____10289)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10289;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2480__auto____10290 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10291 = (cljs.core._prefers[goog.typeOf(x__2480__auto____10290)]);
if(or__3824__auto____10291)
{return or__3824__auto____10291;
} else
{var or__3824__auto____10292 = (cljs.core._prefers["_"]);
if(or__3824__auto____10292)
{return or__3824__auto____10292;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10297 = mf;
if(and__3822__auto____10297)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10297;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2480__auto____10298 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10299 = (cljs.core._dispatch[goog.typeOf(x__2480__auto____10298)]);
if(or__3824__auto____10299)
{return or__3824__auto____10299;
} else
{var or__3824__auto____10300 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10300)
{return or__3824__auto____10300;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10303 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10304 = cljs.core._get_method.call(null,mf,dispatch_val__10303);
if(cljs.core.truth_(target_fn__10304))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10303)].join('')));
}
return cljs.core.apply.call(null,target_fn__10304,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10305 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10306 = this;
cljs.core.swap_BANG_.call(null,this__10306.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10306.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10306.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10306.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10307 = this;
cljs.core.swap_BANG_.call(null,this__10307.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10307.method_cache,this__10307.method_table,this__10307.cached_hierarchy,this__10307.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10308 = this;
cljs.core.swap_BANG_.call(null,this__10308.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10308.method_cache,this__10308.method_table,this__10308.cached_hierarchy,this__10308.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10309 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10309.cached_hierarchy),cljs.core.deref.call(null,this__10309.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10309.method_cache,this__10309.method_table,this__10309.cached_hierarchy,this__10309.hierarchy);
}
var temp__3971__auto____10310 = cljs.core.deref.call(null,this__10309.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10310))
{var target_fn__10311 = temp__3971__auto____10310;
return target_fn__10311;
} else
{var temp__3971__auto____10312 = cljs.core.find_and_cache_best_method.call(null,this__10309.name,dispatch_val,this__10309.hierarchy,this__10309.method_table,this__10309.prefer_table,this__10309.method_cache,this__10309.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10312))
{var target_fn__10313 = temp__3971__auto____10312;
return target_fn__10313;
} else
{return cljs.core.deref.call(null,this__10309.method_table).call(null,this__10309.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10314 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10314.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10314.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10314.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10314.method_cache,this__10314.method_table,this__10314.cached_hierarchy,this__10314.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10315 = this;
return cljs.core.deref.call(null,this__10315.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10316 = this;
return cljs.core.deref.call(null,this__10316.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10317 = this;
return cljs.core.do_dispatch.call(null,mf,this__10317.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10319__delegate = function (_,args){
var self__10318 = this;
return cljs.core._dispatch.call(null,self__10318,args);
};
var G__10319 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10319__delegate.call(this, _, args);
};
G__10319.cljs$lang$maxFixedArity = 1;
G__10319.cljs$lang$applyTo = (function (arglist__10320){
var _ = cljs.core.first(arglist__10320);
var args = cljs.core.rest(arglist__10320);
return G__10319__delegate(_, args);
});
G__10319.cljs$lang$arity$variadic = G__10319__delegate;
return G__10319;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10321 = this;
return cljs.core._dispatch.call(null,self__10321,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2426__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10322 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10324,_){
var this__10323 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10323.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10325 = this;
var and__3822__auto____10326 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10326)
{return (this__10325.uuid === other.uuid);
} else
{return and__3822__auto____10326;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10327 = this;
var this__10328 = this;
return cljs.core.pr_str.call(null,this__10328);
});
cljs.core.UUID;
