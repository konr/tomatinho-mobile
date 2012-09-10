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
var x__17700 = (((x == null))?null:x);
if((p[goog.typeOf(x__17700)]))
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
var G__17701__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__17701 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17701__delegate.call(this, array, i, idxs);
};
G__17701.cljs$lang$maxFixedArity = 2;
G__17701.cljs$lang$applyTo = (function (arglist__17702){
var array = cljs.core.first(arglist__17702);
var i = cljs.core.first(cljs.core.next(arglist__17702));
var idxs = cljs.core.rest(cljs.core.next(arglist__17702));
return G__17701__delegate(array, i, idxs);
});
G__17701.cljs$lang$arity$variadic = G__17701__delegate;
return G__17701;
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
if((function (){var and__3822__auto____17787 = this$;
if(and__3822__auto____17787)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____17787;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2480__auto____17788 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17789 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17788)]);
if(or__3824__auto____17789)
{return or__3824__auto____17789;
} else
{var or__3824__auto____17790 = (cljs.core._invoke["_"]);
if(or__3824__auto____17790)
{return or__3824__auto____17790;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____17791 = this$;
if(and__3822__auto____17791)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____17791;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2480__auto____17792 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17793 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17792)]);
if(or__3824__auto____17793)
{return or__3824__auto____17793;
} else
{var or__3824__auto____17794 = (cljs.core._invoke["_"]);
if(or__3824__auto____17794)
{return or__3824__auto____17794;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____17795 = this$;
if(and__3822__auto____17795)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____17795;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2480__auto____17796 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17797 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17796)]);
if(or__3824__auto____17797)
{return or__3824__auto____17797;
} else
{var or__3824__auto____17798 = (cljs.core._invoke["_"]);
if(or__3824__auto____17798)
{return or__3824__auto____17798;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____17799 = this$;
if(and__3822__auto____17799)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____17799;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2480__auto____17800 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17801 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17800)]);
if(or__3824__auto____17801)
{return or__3824__auto____17801;
} else
{var or__3824__auto____17802 = (cljs.core._invoke["_"]);
if(or__3824__auto____17802)
{return or__3824__auto____17802;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____17803 = this$;
if(and__3822__auto____17803)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____17803;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2480__auto____17804 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17805 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17804)]);
if(or__3824__auto____17805)
{return or__3824__auto____17805;
} else
{var or__3824__auto____17806 = (cljs.core._invoke["_"]);
if(or__3824__auto____17806)
{return or__3824__auto____17806;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____17807 = this$;
if(and__3822__auto____17807)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____17807;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2480__auto____17808 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17809 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17808)]);
if(or__3824__auto____17809)
{return or__3824__auto____17809;
} else
{var or__3824__auto____17810 = (cljs.core._invoke["_"]);
if(or__3824__auto____17810)
{return or__3824__auto____17810;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____17811 = this$;
if(and__3822__auto____17811)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____17811;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2480__auto____17812 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17813 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17812)]);
if(or__3824__auto____17813)
{return or__3824__auto____17813;
} else
{var or__3824__auto____17814 = (cljs.core._invoke["_"]);
if(or__3824__auto____17814)
{return or__3824__auto____17814;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____17815 = this$;
if(and__3822__auto____17815)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____17815;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2480__auto____17816 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17817 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17816)]);
if(or__3824__auto____17817)
{return or__3824__auto____17817;
} else
{var or__3824__auto____17818 = (cljs.core._invoke["_"]);
if(or__3824__auto____17818)
{return or__3824__auto____17818;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____17819 = this$;
if(and__3822__auto____17819)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____17819;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2480__auto____17820 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17821 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17820)]);
if(or__3824__auto____17821)
{return or__3824__auto____17821;
} else
{var or__3824__auto____17822 = (cljs.core._invoke["_"]);
if(or__3824__auto____17822)
{return or__3824__auto____17822;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____17823 = this$;
if(and__3822__auto____17823)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____17823;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2480__auto____17824 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17825 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17824)]);
if(or__3824__auto____17825)
{return or__3824__auto____17825;
} else
{var or__3824__auto____17826 = (cljs.core._invoke["_"]);
if(or__3824__auto____17826)
{return or__3824__auto____17826;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____17827 = this$;
if(and__3822__auto____17827)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____17827;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2480__auto____17828 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17829 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17828)]);
if(or__3824__auto____17829)
{return or__3824__auto____17829;
} else
{var or__3824__auto____17830 = (cljs.core._invoke["_"]);
if(or__3824__auto____17830)
{return or__3824__auto____17830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____17831 = this$;
if(and__3822__auto____17831)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____17831;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2480__auto____17832 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17833 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17832)]);
if(or__3824__auto____17833)
{return or__3824__auto____17833;
} else
{var or__3824__auto____17834 = (cljs.core._invoke["_"]);
if(or__3824__auto____17834)
{return or__3824__auto____17834;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____17835 = this$;
if(and__3822__auto____17835)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____17835;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2480__auto____17836 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17837 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17836)]);
if(or__3824__auto____17837)
{return or__3824__auto____17837;
} else
{var or__3824__auto____17838 = (cljs.core._invoke["_"]);
if(or__3824__auto____17838)
{return or__3824__auto____17838;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____17839 = this$;
if(and__3822__auto____17839)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____17839;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2480__auto____17840 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17841 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17840)]);
if(or__3824__auto____17841)
{return or__3824__auto____17841;
} else
{var or__3824__auto____17842 = (cljs.core._invoke["_"]);
if(or__3824__auto____17842)
{return or__3824__auto____17842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____17843 = this$;
if(and__3822__auto____17843)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____17843;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2480__auto____17844 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17845 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17844)]);
if(or__3824__auto____17845)
{return or__3824__auto____17845;
} else
{var or__3824__auto____17846 = (cljs.core._invoke["_"]);
if(or__3824__auto____17846)
{return or__3824__auto____17846;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____17847 = this$;
if(and__3822__auto____17847)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____17847;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2480__auto____17848 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17849 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17848)]);
if(or__3824__auto____17849)
{return or__3824__auto____17849;
} else
{var or__3824__auto____17850 = (cljs.core._invoke["_"]);
if(or__3824__auto____17850)
{return or__3824__auto____17850;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____17851 = this$;
if(and__3822__auto____17851)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____17851;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2480__auto____17852 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17853 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17852)]);
if(or__3824__auto____17853)
{return or__3824__auto____17853;
} else
{var or__3824__auto____17854 = (cljs.core._invoke["_"]);
if(or__3824__auto____17854)
{return or__3824__auto____17854;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____17855 = this$;
if(and__3822__auto____17855)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____17855;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2480__auto____17856 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17857 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17856)]);
if(or__3824__auto____17857)
{return or__3824__auto____17857;
} else
{var or__3824__auto____17858 = (cljs.core._invoke["_"]);
if(or__3824__auto____17858)
{return or__3824__auto____17858;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____17859 = this$;
if(and__3822__auto____17859)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____17859;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2480__auto____17860 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17861 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17860)]);
if(or__3824__auto____17861)
{return or__3824__auto____17861;
} else
{var or__3824__auto____17862 = (cljs.core._invoke["_"]);
if(or__3824__auto____17862)
{return or__3824__auto____17862;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____17863 = this$;
if(and__3822__auto____17863)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____17863;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2480__auto____17864 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17865 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17864)]);
if(or__3824__auto____17865)
{return or__3824__auto____17865;
} else
{var or__3824__auto____17866 = (cljs.core._invoke["_"]);
if(or__3824__auto____17866)
{return or__3824__auto____17866;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____17867 = this$;
if(and__3822__auto____17867)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____17867;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2480__auto____17868 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17869 = (cljs.core._invoke[goog.typeOf(x__2480__auto____17868)]);
if(or__3824__auto____17869)
{return or__3824__auto____17869;
} else
{var or__3824__auto____17870 = (cljs.core._invoke["_"]);
if(or__3824__auto____17870)
{return or__3824__auto____17870;
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
if((function (){var and__3822__auto____17875 = coll;
if(and__3822__auto____17875)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____17875;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2480__auto____17876 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17877 = (cljs.core._count[goog.typeOf(x__2480__auto____17876)]);
if(or__3824__auto____17877)
{return or__3824__auto____17877;
} else
{var or__3824__auto____17878 = (cljs.core._count["_"]);
if(or__3824__auto____17878)
{return or__3824__auto____17878;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____17883 = coll;
if(and__3822__auto____17883)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____17883;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2480__auto____17884 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17885 = (cljs.core._empty[goog.typeOf(x__2480__auto____17884)]);
if(or__3824__auto____17885)
{return or__3824__auto____17885;
} else
{var or__3824__auto____17886 = (cljs.core._empty["_"]);
if(or__3824__auto____17886)
{return or__3824__auto____17886;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____17891 = coll;
if(and__3822__auto____17891)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____17891;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2480__auto____17892 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17893 = (cljs.core._conj[goog.typeOf(x__2480__auto____17892)]);
if(or__3824__auto____17893)
{return or__3824__auto____17893;
} else
{var or__3824__auto____17894 = (cljs.core._conj["_"]);
if(or__3824__auto____17894)
{return or__3824__auto____17894;
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
if((function (){var and__3822__auto____17903 = coll;
if(and__3822__auto____17903)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____17903;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2480__auto____17904 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17905 = (cljs.core._nth[goog.typeOf(x__2480__auto____17904)]);
if(or__3824__auto____17905)
{return or__3824__auto____17905;
} else
{var or__3824__auto____17906 = (cljs.core._nth["_"]);
if(or__3824__auto____17906)
{return or__3824__auto____17906;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____17907 = coll;
if(and__3822__auto____17907)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____17907;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2480__auto____17908 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17909 = (cljs.core._nth[goog.typeOf(x__2480__auto____17908)]);
if(or__3824__auto____17909)
{return or__3824__auto____17909;
} else
{var or__3824__auto____17910 = (cljs.core._nth["_"]);
if(or__3824__auto____17910)
{return or__3824__auto____17910;
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
if((function (){var and__3822__auto____17915 = coll;
if(and__3822__auto____17915)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____17915;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2480__auto____17916 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17917 = (cljs.core._first[goog.typeOf(x__2480__auto____17916)]);
if(or__3824__auto____17917)
{return or__3824__auto____17917;
} else
{var or__3824__auto____17918 = (cljs.core._first["_"]);
if(or__3824__auto____17918)
{return or__3824__auto____17918;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____17923 = coll;
if(and__3822__auto____17923)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____17923;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2480__auto____17924 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17925 = (cljs.core._rest[goog.typeOf(x__2480__auto____17924)]);
if(or__3824__auto____17925)
{return or__3824__auto____17925;
} else
{var or__3824__auto____17926 = (cljs.core._rest["_"]);
if(or__3824__auto____17926)
{return or__3824__auto____17926;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____17931 = coll;
if(and__3822__auto____17931)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____17931;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2480__auto____17932 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17933 = (cljs.core._next[goog.typeOf(x__2480__auto____17932)]);
if(or__3824__auto____17933)
{return or__3824__auto____17933;
} else
{var or__3824__auto____17934 = (cljs.core._next["_"]);
if(or__3824__auto____17934)
{return or__3824__auto____17934;
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
if((function (){var and__3822__auto____17943 = o;
if(and__3822__auto____17943)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____17943;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2480__auto____17944 = (((o == null))?null:o);
return (function (){var or__3824__auto____17945 = (cljs.core._lookup[goog.typeOf(x__2480__auto____17944)]);
if(or__3824__auto____17945)
{return or__3824__auto____17945;
} else
{var or__3824__auto____17946 = (cljs.core._lookup["_"]);
if(or__3824__auto____17946)
{return or__3824__auto____17946;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____17947 = o;
if(and__3822__auto____17947)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____17947;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2480__auto____17948 = (((o == null))?null:o);
return (function (){var or__3824__auto____17949 = (cljs.core._lookup[goog.typeOf(x__2480__auto____17948)]);
if(or__3824__auto____17949)
{return or__3824__auto____17949;
} else
{var or__3824__auto____17950 = (cljs.core._lookup["_"]);
if(or__3824__auto____17950)
{return or__3824__auto____17950;
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
if((function (){var and__3822__auto____17955 = coll;
if(and__3822__auto____17955)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____17955;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2480__auto____17956 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17957 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2480__auto____17956)]);
if(or__3824__auto____17957)
{return or__3824__auto____17957;
} else
{var or__3824__auto____17958 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____17958)
{return or__3824__auto____17958;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____17963 = coll;
if(and__3822__auto____17963)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____17963;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2480__auto____17964 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17965 = (cljs.core._assoc[goog.typeOf(x__2480__auto____17964)]);
if(or__3824__auto____17965)
{return or__3824__auto____17965;
} else
{var or__3824__auto____17966 = (cljs.core._assoc["_"]);
if(or__3824__auto____17966)
{return or__3824__auto____17966;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____17971 = coll;
if(and__3822__auto____17971)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____17971;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2480__auto____17972 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17973 = (cljs.core._dissoc[goog.typeOf(x__2480__auto____17972)]);
if(or__3824__auto____17973)
{return or__3824__auto____17973;
} else
{var or__3824__auto____17974 = (cljs.core._dissoc["_"]);
if(or__3824__auto____17974)
{return or__3824__auto____17974;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____17979 = coll;
if(and__3822__auto____17979)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____17979;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2480__auto____17980 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17981 = (cljs.core._key[goog.typeOf(x__2480__auto____17980)]);
if(or__3824__auto____17981)
{return or__3824__auto____17981;
} else
{var or__3824__auto____17982 = (cljs.core._key["_"]);
if(or__3824__auto____17982)
{return or__3824__auto____17982;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____17987 = coll;
if(and__3822__auto____17987)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____17987;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2480__auto____17988 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17989 = (cljs.core._val[goog.typeOf(x__2480__auto____17988)]);
if(or__3824__auto____17989)
{return or__3824__auto____17989;
} else
{var or__3824__auto____17990 = (cljs.core._val["_"]);
if(or__3824__auto____17990)
{return or__3824__auto____17990;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____17995 = coll;
if(and__3822__auto____17995)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____17995;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2480__auto____17996 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17997 = (cljs.core._disjoin[goog.typeOf(x__2480__auto____17996)]);
if(or__3824__auto____17997)
{return or__3824__auto____17997;
} else
{var or__3824__auto____17998 = (cljs.core._disjoin["_"]);
if(or__3824__auto____17998)
{return or__3824__auto____17998;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____18003 = coll;
if(and__3822__auto____18003)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____18003;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2480__auto____18004 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18005 = (cljs.core._peek[goog.typeOf(x__2480__auto____18004)]);
if(or__3824__auto____18005)
{return or__3824__auto____18005;
} else
{var or__3824__auto____18006 = (cljs.core._peek["_"]);
if(or__3824__auto____18006)
{return or__3824__auto____18006;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____18011 = coll;
if(and__3822__auto____18011)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____18011;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2480__auto____18012 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18013 = (cljs.core._pop[goog.typeOf(x__2480__auto____18012)]);
if(or__3824__auto____18013)
{return or__3824__auto____18013;
} else
{var or__3824__auto____18014 = (cljs.core._pop["_"]);
if(or__3824__auto____18014)
{return or__3824__auto____18014;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____18019 = coll;
if(and__3822__auto____18019)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____18019;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2480__auto____18020 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18021 = (cljs.core._assoc_n[goog.typeOf(x__2480__auto____18020)]);
if(or__3824__auto____18021)
{return or__3824__auto____18021;
} else
{var or__3824__auto____18022 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____18022)
{return or__3824__auto____18022;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____18027 = o;
if(and__3822__auto____18027)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____18027;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2480__auto____18028 = (((o == null))?null:o);
return (function (){var or__3824__auto____18029 = (cljs.core._deref[goog.typeOf(x__2480__auto____18028)]);
if(or__3824__auto____18029)
{return or__3824__auto____18029;
} else
{var or__3824__auto____18030 = (cljs.core._deref["_"]);
if(or__3824__auto____18030)
{return or__3824__auto____18030;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____18035 = o;
if(and__3822__auto____18035)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____18035;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2480__auto____18036 = (((o == null))?null:o);
return (function (){var or__3824__auto____18037 = (cljs.core._deref_with_timeout[goog.typeOf(x__2480__auto____18036)]);
if(or__3824__auto____18037)
{return or__3824__auto____18037;
} else
{var or__3824__auto____18038 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____18038)
{return or__3824__auto____18038;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____18043 = o;
if(and__3822__auto____18043)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____18043;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2480__auto____18044 = (((o == null))?null:o);
return (function (){var or__3824__auto____18045 = (cljs.core._meta[goog.typeOf(x__2480__auto____18044)]);
if(or__3824__auto____18045)
{return or__3824__auto____18045;
} else
{var or__3824__auto____18046 = (cljs.core._meta["_"]);
if(or__3824__auto____18046)
{return or__3824__auto____18046;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____18051 = o;
if(and__3822__auto____18051)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____18051;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2480__auto____18052 = (((o == null))?null:o);
return (function (){var or__3824__auto____18053 = (cljs.core._with_meta[goog.typeOf(x__2480__auto____18052)]);
if(or__3824__auto____18053)
{return or__3824__auto____18053;
} else
{var or__3824__auto____18054 = (cljs.core._with_meta["_"]);
if(or__3824__auto____18054)
{return or__3824__auto____18054;
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
if((function (){var and__3822__auto____18063 = coll;
if(and__3822__auto____18063)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____18063;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2480__auto____18064 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18065 = (cljs.core._reduce[goog.typeOf(x__2480__auto____18064)]);
if(or__3824__auto____18065)
{return or__3824__auto____18065;
} else
{var or__3824__auto____18066 = (cljs.core._reduce["_"]);
if(or__3824__auto____18066)
{return or__3824__auto____18066;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____18067 = coll;
if(and__3822__auto____18067)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____18067;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2480__auto____18068 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18069 = (cljs.core._reduce[goog.typeOf(x__2480__auto____18068)]);
if(or__3824__auto____18069)
{return or__3824__auto____18069;
} else
{var or__3824__auto____18070 = (cljs.core._reduce["_"]);
if(or__3824__auto____18070)
{return or__3824__auto____18070;
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
if((function (){var and__3822__auto____18075 = coll;
if(and__3822__auto____18075)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____18075;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2480__auto____18076 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18077 = (cljs.core._kv_reduce[goog.typeOf(x__2480__auto____18076)]);
if(or__3824__auto____18077)
{return or__3824__auto____18077;
} else
{var or__3824__auto____18078 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____18078)
{return or__3824__auto____18078;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____18083 = o;
if(and__3822__auto____18083)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____18083;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2480__auto____18084 = (((o == null))?null:o);
return (function (){var or__3824__auto____18085 = (cljs.core._equiv[goog.typeOf(x__2480__auto____18084)]);
if(or__3824__auto____18085)
{return or__3824__auto____18085;
} else
{var or__3824__auto____18086 = (cljs.core._equiv["_"]);
if(or__3824__auto____18086)
{return or__3824__auto____18086;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____18091 = o;
if(and__3822__auto____18091)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____18091;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2480__auto____18092 = (((o == null))?null:o);
return (function (){var or__3824__auto____18093 = (cljs.core._hash[goog.typeOf(x__2480__auto____18092)]);
if(or__3824__auto____18093)
{return or__3824__auto____18093;
} else
{var or__3824__auto____18094 = (cljs.core._hash["_"]);
if(or__3824__auto____18094)
{return or__3824__auto____18094;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____18099 = o;
if(and__3822__auto____18099)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____18099;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2480__auto____18100 = (((o == null))?null:o);
return (function (){var or__3824__auto____18101 = (cljs.core._seq[goog.typeOf(x__2480__auto____18100)]);
if(or__3824__auto____18101)
{return or__3824__auto____18101;
} else
{var or__3824__auto____18102 = (cljs.core._seq["_"]);
if(or__3824__auto____18102)
{return or__3824__auto____18102;
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
if((function (){var and__3822__auto____18107 = coll;
if(and__3822__auto____18107)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____18107;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2480__auto____18108 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18109 = (cljs.core._rseq[goog.typeOf(x__2480__auto____18108)]);
if(or__3824__auto____18109)
{return or__3824__auto____18109;
} else
{var or__3824__auto____18110 = (cljs.core._rseq["_"]);
if(or__3824__auto____18110)
{return or__3824__auto____18110;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____18115 = coll;
if(and__3822__auto____18115)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____18115;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2480__auto____18116 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18117 = (cljs.core._sorted_seq[goog.typeOf(x__2480__auto____18116)]);
if(or__3824__auto____18117)
{return or__3824__auto____18117;
} else
{var or__3824__auto____18118 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____18118)
{return or__3824__auto____18118;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____18123 = coll;
if(and__3822__auto____18123)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____18123;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2480__auto____18124 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18125 = (cljs.core._sorted_seq_from[goog.typeOf(x__2480__auto____18124)]);
if(or__3824__auto____18125)
{return or__3824__auto____18125;
} else
{var or__3824__auto____18126 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____18126)
{return or__3824__auto____18126;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____18131 = coll;
if(and__3822__auto____18131)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____18131;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2480__auto____18132 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18133 = (cljs.core._entry_key[goog.typeOf(x__2480__auto____18132)]);
if(or__3824__auto____18133)
{return or__3824__auto____18133;
} else
{var or__3824__auto____18134 = (cljs.core._entry_key["_"]);
if(or__3824__auto____18134)
{return or__3824__auto____18134;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____18139 = coll;
if(and__3822__auto____18139)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____18139;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2480__auto____18140 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18141 = (cljs.core._comparator[goog.typeOf(x__2480__auto____18140)]);
if(or__3824__auto____18141)
{return or__3824__auto____18141;
} else
{var or__3824__auto____18142 = (cljs.core._comparator["_"]);
if(or__3824__auto____18142)
{return or__3824__auto____18142;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____18147 = o;
if(and__3822__auto____18147)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____18147;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2480__auto____18148 = (((o == null))?null:o);
return (function (){var or__3824__auto____18149 = (cljs.core._pr_seq[goog.typeOf(x__2480__auto____18148)]);
if(or__3824__auto____18149)
{return or__3824__auto____18149;
} else
{var or__3824__auto____18150 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____18150)
{return or__3824__auto____18150;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____18155 = d;
if(and__3822__auto____18155)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____18155;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2480__auto____18156 = (((d == null))?null:d);
return (function (){var or__3824__auto____18157 = (cljs.core._realized_QMARK_[goog.typeOf(x__2480__auto____18156)]);
if(or__3824__auto____18157)
{return or__3824__auto____18157;
} else
{var or__3824__auto____18158 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____18158)
{return or__3824__auto____18158;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____18163 = this$;
if(and__3822__auto____18163)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____18163;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2480__auto____18164 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18165 = (cljs.core._notify_watches[goog.typeOf(x__2480__auto____18164)]);
if(or__3824__auto____18165)
{return or__3824__auto____18165;
} else
{var or__3824__auto____18166 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____18166)
{return or__3824__auto____18166;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____18171 = this$;
if(and__3822__auto____18171)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____18171;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2480__auto____18172 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18173 = (cljs.core._add_watch[goog.typeOf(x__2480__auto____18172)]);
if(or__3824__auto____18173)
{return or__3824__auto____18173;
} else
{var or__3824__auto____18174 = (cljs.core._add_watch["_"]);
if(or__3824__auto____18174)
{return or__3824__auto____18174;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____18179 = this$;
if(and__3822__auto____18179)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____18179;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2480__auto____18180 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18181 = (cljs.core._remove_watch[goog.typeOf(x__2480__auto____18180)]);
if(or__3824__auto____18181)
{return or__3824__auto____18181;
} else
{var or__3824__auto____18182 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____18182)
{return or__3824__auto____18182;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____18187 = coll;
if(and__3822__auto____18187)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____18187;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2480__auto____18188 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18189 = (cljs.core._as_transient[goog.typeOf(x__2480__auto____18188)]);
if(or__3824__auto____18189)
{return or__3824__auto____18189;
} else
{var or__3824__auto____18190 = (cljs.core._as_transient["_"]);
if(or__3824__auto____18190)
{return or__3824__auto____18190;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____18195 = tcoll;
if(and__3822__auto____18195)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____18195;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2480__auto____18196 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18197 = (cljs.core._conj_BANG_[goog.typeOf(x__2480__auto____18196)]);
if(or__3824__auto____18197)
{return or__3824__auto____18197;
} else
{var or__3824__auto____18198 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____18198)
{return or__3824__auto____18198;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____18203 = tcoll;
if(and__3822__auto____18203)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____18203;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2480__auto____18204 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18205 = (cljs.core._persistent_BANG_[goog.typeOf(x__2480__auto____18204)]);
if(or__3824__auto____18205)
{return or__3824__auto____18205;
} else
{var or__3824__auto____18206 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____18206)
{return or__3824__auto____18206;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____18211 = tcoll;
if(and__3822__auto____18211)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____18211;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2480__auto____18212 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18213 = (cljs.core._assoc_BANG_[goog.typeOf(x__2480__auto____18212)]);
if(or__3824__auto____18213)
{return or__3824__auto____18213;
} else
{var or__3824__auto____18214 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____18214)
{return or__3824__auto____18214;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____18219 = tcoll;
if(and__3822__auto____18219)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____18219;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2480__auto____18220 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18221 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2480__auto____18220)]);
if(or__3824__auto____18221)
{return or__3824__auto____18221;
} else
{var or__3824__auto____18222 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____18222)
{return or__3824__auto____18222;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____18227 = tcoll;
if(and__3822__auto____18227)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____18227;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2480__auto____18228 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18229 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2480__auto____18228)]);
if(or__3824__auto____18229)
{return or__3824__auto____18229;
} else
{var or__3824__auto____18230 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____18230)
{return or__3824__auto____18230;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____18235 = tcoll;
if(and__3822__auto____18235)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____18235;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2480__auto____18236 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18237 = (cljs.core._pop_BANG_[goog.typeOf(x__2480__auto____18236)]);
if(or__3824__auto____18237)
{return or__3824__auto____18237;
} else
{var or__3824__auto____18238 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____18238)
{return or__3824__auto____18238;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____18243 = tcoll;
if(and__3822__auto____18243)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____18243;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2480__auto____18244 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18245 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2480__auto____18244)]);
if(or__3824__auto____18245)
{return or__3824__auto____18245;
} else
{var or__3824__auto____18246 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____18246)
{return or__3824__auto____18246;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____18251 = x;
if(and__3822__auto____18251)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____18251;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2480__auto____18252 = (((x == null))?null:x);
return (function (){var or__3824__auto____18253 = (cljs.core._compare[goog.typeOf(x__2480__auto____18252)]);
if(or__3824__auto____18253)
{return or__3824__auto____18253;
} else
{var or__3824__auto____18254 = (cljs.core._compare["_"]);
if(or__3824__auto____18254)
{return or__3824__auto____18254;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____18259 = coll;
if(and__3822__auto____18259)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____18259;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2480__auto____18260 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18261 = (cljs.core._drop_first[goog.typeOf(x__2480__auto____18260)]);
if(or__3824__auto____18261)
{return or__3824__auto____18261;
} else
{var or__3824__auto____18262 = (cljs.core._drop_first["_"]);
if(or__3824__auto____18262)
{return or__3824__auto____18262;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____18267 = coll;
if(and__3822__auto____18267)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____18267;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2480__auto____18268 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18269 = (cljs.core._chunked_first[goog.typeOf(x__2480__auto____18268)]);
if(or__3824__auto____18269)
{return or__3824__auto____18269;
} else
{var or__3824__auto____18270 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____18270)
{return or__3824__auto____18270;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____18275 = coll;
if(and__3822__auto____18275)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____18275;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2480__auto____18276 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18277 = (cljs.core._chunked_rest[goog.typeOf(x__2480__auto____18276)]);
if(or__3824__auto____18277)
{return or__3824__auto____18277;
} else
{var or__3824__auto____18278 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____18278)
{return or__3824__auto____18278;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____18283 = coll;
if(and__3822__auto____18283)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____18283;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2480__auto____18284 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18285 = (cljs.core._chunked_next[goog.typeOf(x__2480__auto____18284)]);
if(or__3824__auto____18285)
{return or__3824__auto____18285;
} else
{var or__3824__auto____18286 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____18286)
{return or__3824__auto____18286;
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
var or__3824__auto____18288 = (x === y);
if(or__3824__auto____18288)
{return or__3824__auto____18288;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__18289__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__18290 = y;
var G__18291 = cljs.core.first.call(null,more);
var G__18292 = cljs.core.next.call(null,more);
x = G__18290;
y = G__18291;
more = G__18292;
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
var G__18289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18289__delegate.call(this, x, y, more);
};
G__18289.cljs$lang$maxFixedArity = 2;
G__18289.cljs$lang$applyTo = (function (arglist__18293){
var x = cljs.core.first(arglist__18293);
var y = cljs.core.first(cljs.core.next(arglist__18293));
var more = cljs.core.rest(cljs.core.next(arglist__18293));
return G__18289__delegate(x, y, more);
});
G__18289.cljs$lang$arity$variadic = G__18289__delegate;
return G__18289;
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
var G__18294 = null;
var G__18294__2 = (function (o,k){
return null;
});
var G__18294__3 = (function (o,k,not_found){
return not_found;
});
G__18294 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__18294__2.call(this,o,k);
case 3:
return G__18294__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18294;
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
var G__18295 = null;
var G__18295__2 = (function (_,f){
return f.call(null);
});
var G__18295__3 = (function (_,f,start){
return start;
});
G__18295 = function(_,f,start){
switch(arguments.length){
case 2:
return G__18295__2.call(this,_,f);
case 3:
return G__18295__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18295;
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
var G__18296 = null;
var G__18296__2 = (function (_,n){
return null;
});
var G__18296__3 = (function (_,n,not_found){
return not_found;
});
G__18296 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__18296__2.call(this,_,n);
case 3:
return G__18296__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18296;
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
var and__3822__auto____18297 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____18297)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____18297;
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
var cnt__18310 = cljs.core._count.call(null,cicoll);
if((cnt__18310 === 0))
{return f.call(null);
} else
{var val__18311 = cljs.core._nth.call(null,cicoll,0);
var n__18312 = 1;
while(true){
if((n__18312 < cnt__18310))
{var nval__18313 = f.call(null,val__18311,cljs.core._nth.call(null,cicoll,n__18312));
if(cljs.core.reduced_QMARK_.call(null,nval__18313))
{return cljs.core.deref.call(null,nval__18313);
} else
{{
var G__18322 = nval__18313;
var G__18323 = (n__18312 + 1);
val__18311 = G__18322;
n__18312 = G__18323;
continue;
}
}
} else
{return val__18311;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__18314 = cljs.core._count.call(null,cicoll);
var val__18315 = val;
var n__18316 = 0;
while(true){
if((n__18316 < cnt__18314))
{var nval__18317 = f.call(null,val__18315,cljs.core._nth.call(null,cicoll,n__18316));
if(cljs.core.reduced_QMARK_.call(null,nval__18317))
{return cljs.core.deref.call(null,nval__18317);
} else
{{
var G__18324 = nval__18317;
var G__18325 = (n__18316 + 1);
val__18315 = G__18324;
n__18316 = G__18325;
continue;
}
}
} else
{return val__18315;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__18318 = cljs.core._count.call(null,cicoll);
var val__18319 = val;
var n__18320 = idx;
while(true){
if((n__18320 < cnt__18318))
{var nval__18321 = f.call(null,val__18319,cljs.core._nth.call(null,cicoll,n__18320));
if(cljs.core.reduced_QMARK_.call(null,nval__18321))
{return cljs.core.deref.call(null,nval__18321);
} else
{{
var G__18326 = nval__18321;
var G__18327 = (n__18320 + 1);
val__18319 = G__18326;
n__18320 = G__18327;
continue;
}
}
} else
{return val__18319;
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
var cnt__18340 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__18341 = (arr[0]);
var n__18342 = 1;
while(true){
if((n__18342 < cnt__18340))
{var nval__18343 = f.call(null,val__18341,(arr[n__18342]));
if(cljs.core.reduced_QMARK_.call(null,nval__18343))
{return cljs.core.deref.call(null,nval__18343);
} else
{{
var G__18352 = nval__18343;
var G__18353 = (n__18342 + 1);
val__18341 = G__18352;
n__18342 = G__18353;
continue;
}
}
} else
{return val__18341;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__18344 = arr.length;
var val__18345 = val;
var n__18346 = 0;
while(true){
if((n__18346 < cnt__18344))
{var nval__18347 = f.call(null,val__18345,(arr[n__18346]));
if(cljs.core.reduced_QMARK_.call(null,nval__18347))
{return cljs.core.deref.call(null,nval__18347);
} else
{{
var G__18354 = nval__18347;
var G__18355 = (n__18346 + 1);
val__18345 = G__18354;
n__18346 = G__18355;
continue;
}
}
} else
{return val__18345;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__18348 = arr.length;
var val__18349 = val;
var n__18350 = idx;
while(true){
if((n__18350 < cnt__18348))
{var nval__18351 = f.call(null,val__18349,(arr[n__18350]));
if(cljs.core.reduced_QMARK_.call(null,nval__18351))
{return cljs.core.deref.call(null,nval__18351);
} else
{{
var G__18356 = nval__18351;
var G__18357 = (n__18350 + 1);
val__18349 = G__18356;
n__18350 = G__18357;
continue;
}
}
} else
{return val__18349;
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
var this__18358 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__18359 = this;
if(((this__18359.i + 1) < this__18359.a.length))
{return (new cljs.core.IndexedSeq(this__18359.a,(this__18359.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18360 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__18361 = this;
var c__18362 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__18362 > 0))
{return (new cljs.core.RSeq(coll,(c__18362 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__18363 = this;
var this__18364 = this;
return cljs.core.pr_str.call(null,this__18364);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__18365 = this;
if(cljs.core.counted_QMARK_.call(null,this__18365.a))
{return cljs.core.ci_reduce.call(null,this__18365.a,f,(this__18365.a[this__18365.i]),(this__18365.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__18365.a[this__18365.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18366 = this;
if(cljs.core.counted_QMARK_.call(null,this__18366.a))
{return cljs.core.ci_reduce.call(null,this__18366.a,f,start,this__18366.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__18367 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__18368 = this;
return (this__18368.a.length - this__18368.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__18369 = this;
return (this__18369.a[this__18369.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__18370 = this;
if(((this__18370.i + 1) < this__18370.a.length))
{return (new cljs.core.IndexedSeq(this__18370.a,(this__18370.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18372 = this;
var i__18373 = (n + this__18372.i);
if((i__18373 < this__18372.a.length))
{return (this__18372.a[i__18373]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18374 = this;
var i__18375 = (n + this__18374.i);
if((i__18375 < this__18374.a.length))
{return (this__18374.a[i__18375]);
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
var G__18376 = null;
var G__18376__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__18376__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__18376 = function(array,f,start){
switch(arguments.length){
case 2:
return G__18376__2.call(this,array,f);
case 3:
return G__18376__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18376;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__18377 = null;
var G__18377__2 = (function (array,k){
return (array[k]);
});
var G__18377__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__18377 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__18377__2.call(this,array,k);
case 3:
return G__18377__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18377;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__18378 = null;
var G__18378__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__18378__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__18378 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__18378__2.call(this,array,n);
case 3:
return G__18378__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18378;
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
var this__18379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18380 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__18381 = this;
var this__18382 = this;
return cljs.core.pr_str.call(null,this__18382);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18383 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18384 = this;
return (this__18384.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18385 = this;
return cljs.core._nth.call(null,this__18385.ci,this__18385.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18386 = this;
if((this__18386.i > 0))
{return (new cljs.core.RSeq(this__18386.ci,(this__18386.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18387 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__18388 = this;
return (new cljs.core.RSeq(this__18388.ci,this__18388.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18389 = this;
return this__18389.meta;
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
{if((function (){var G__18393__18394 = coll;
if(G__18393__18394)
{if((function (){var or__3824__auto____18395 = (G__18393__18394.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____18395)
{return or__3824__auto____18395;
} else
{return G__18393__18394.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__18393__18394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__18393__18394);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__18393__18394);
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
{if((function (){var G__18400__18401 = coll;
if(G__18400__18401)
{if((function (){var or__3824__auto____18402 = (G__18400__18401.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18402)
{return or__3824__auto____18402;
} else
{return G__18400__18401.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18400__18401.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18400__18401);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18400__18401);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__18403 = cljs.core.seq.call(null,coll);
if((s__18403 == null))
{return null;
} else
{return cljs.core._first.call(null,s__18403);
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
{if((function (){var G__18408__18409 = coll;
if(G__18408__18409)
{if((function (){var or__3824__auto____18410 = (G__18408__18409.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18410)
{return or__3824__auto____18410;
} else
{return G__18408__18409.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18408__18409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18408__18409);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18408__18409);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__18411 = cljs.core.seq.call(null,coll);
if(!((s__18411 == null)))
{return cljs.core._rest.call(null,s__18411);
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
{if((function (){var G__18415__18416 = coll;
if(G__18415__18416)
{if((function (){var or__3824__auto____18417 = (G__18415__18416.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____18417)
{return or__3824__auto____18417;
} else
{return G__18415__18416.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__18415__18416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__18415__18416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__18415__18416);
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
var sn__18419 = cljs.core.next.call(null,s);
if(!((sn__18419 == null)))
{{
var G__18420 = sn__18419;
s = G__18420;
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
var G__18421__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__18422 = conj.call(null,coll,x);
var G__18423 = cljs.core.first.call(null,xs);
var G__18424 = cljs.core.next.call(null,xs);
coll = G__18422;
x = G__18423;
xs = G__18424;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__18421 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18421__delegate.call(this, coll, x, xs);
};
G__18421.cljs$lang$maxFixedArity = 2;
G__18421.cljs$lang$applyTo = (function (arglist__18425){
var coll = cljs.core.first(arglist__18425);
var x = cljs.core.first(cljs.core.next(arglist__18425));
var xs = cljs.core.rest(cljs.core.next(arglist__18425));
return G__18421__delegate(coll, x, xs);
});
G__18421.cljs$lang$arity$variadic = G__18421__delegate;
return G__18421;
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
var s__18428 = cljs.core.seq.call(null,coll);
var acc__18429 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__18428))
{return (acc__18429 + cljs.core._count.call(null,s__18428));
} else
{{
var G__18430 = cljs.core.next.call(null,s__18428);
var G__18431 = (acc__18429 + 1);
s__18428 = G__18430;
acc__18429 = G__18431;
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
{if((function (){var G__18438__18439 = coll;
if(G__18438__18439)
{if((function (){var or__3824__auto____18440 = (G__18438__18439.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18440)
{return or__3824__auto____18440;
} else
{return G__18438__18439.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18438__18439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18438__18439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18438__18439);
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
{if((function (){var G__18441__18442 = coll;
if(G__18441__18442)
{if((function (){var or__3824__auto____18443 = (G__18441__18442.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18443)
{return or__3824__auto____18443;
} else
{return G__18441__18442.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18441__18442.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18441__18442);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18441__18442);
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
var G__18446__delegate = function (coll,k,v,kvs){
while(true){
var ret__18445 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__18447 = ret__18445;
var G__18448 = cljs.core.first.call(null,kvs);
var G__18449 = cljs.core.second.call(null,kvs);
var G__18450 = cljs.core.nnext.call(null,kvs);
coll = G__18447;
k = G__18448;
v = G__18449;
kvs = G__18450;
continue;
}
} else
{return ret__18445;
}
break;
}
};
var G__18446 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18446__delegate.call(this, coll, k, v, kvs);
};
G__18446.cljs$lang$maxFixedArity = 3;
G__18446.cljs$lang$applyTo = (function (arglist__18451){
var coll = cljs.core.first(arglist__18451);
var k = cljs.core.first(cljs.core.next(arglist__18451));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18451)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18451)));
return G__18446__delegate(coll, k, v, kvs);
});
G__18446.cljs$lang$arity$variadic = G__18446__delegate;
return G__18446;
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
var G__18454__delegate = function (coll,k,ks){
while(true){
var ret__18453 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__18455 = ret__18453;
var G__18456 = cljs.core.first.call(null,ks);
var G__18457 = cljs.core.next.call(null,ks);
coll = G__18455;
k = G__18456;
ks = G__18457;
continue;
}
} else
{return ret__18453;
}
break;
}
};
var G__18454 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18454__delegate.call(this, coll, k, ks);
};
G__18454.cljs$lang$maxFixedArity = 2;
G__18454.cljs$lang$applyTo = (function (arglist__18458){
var coll = cljs.core.first(arglist__18458);
var k = cljs.core.first(cljs.core.next(arglist__18458));
var ks = cljs.core.rest(cljs.core.next(arglist__18458));
return G__18454__delegate(coll, k, ks);
});
G__18454.cljs$lang$arity$variadic = G__18454__delegate;
return G__18454;
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
if((function (){var G__18462__18463 = o;
if(G__18462__18463)
{if((function (){var or__3824__auto____18464 = (G__18462__18463.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____18464)
{return or__3824__auto____18464;
} else
{return G__18462__18463.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__18462__18463.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18462__18463);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18462__18463);
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
var G__18467__delegate = function (coll,k,ks){
while(true){
var ret__18466 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__18468 = ret__18466;
var G__18469 = cljs.core.first.call(null,ks);
var G__18470 = cljs.core.next.call(null,ks);
coll = G__18468;
k = G__18469;
ks = G__18470;
continue;
}
} else
{return ret__18466;
}
break;
}
};
var G__18467 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18467__delegate.call(this, coll, k, ks);
};
G__18467.cljs$lang$maxFixedArity = 2;
G__18467.cljs$lang$applyTo = (function (arglist__18471){
var coll = cljs.core.first(arglist__18471);
var k = cljs.core.first(cljs.core.next(arglist__18471));
var ks = cljs.core.rest(cljs.core.next(arglist__18471));
return G__18467__delegate(coll, k, ks);
});
G__18467.cljs$lang$arity$variadic = G__18467__delegate;
return G__18467;
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
var h__18473 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__18473);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__18473;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__18475 = (cljs.core.string_hash_cache[k]);
if(!((h__18475 == null)))
{return h__18475;
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
if((function (){var and__3822__auto____18477 = goog.isString(o);
if(and__3822__auto____18477)
{return check_cache;
} else
{return and__3822__auto____18477;
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
{var G__18481__18482 = x;
if(G__18481__18482)
{if((function (){var or__3824__auto____18483 = (G__18481__18482.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____18483)
{return or__3824__auto____18483;
} else
{return G__18481__18482.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__18481__18482.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__18481__18482);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__18481__18482);
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
{var G__18487__18488 = x;
if(G__18487__18488)
{if((function (){var or__3824__auto____18489 = (G__18487__18488.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____18489)
{return or__3824__auto____18489;
} else
{return G__18487__18488.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__18487__18488.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__18487__18488);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__18487__18488);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__18493__18494 = x;
if(G__18493__18494)
{if((function (){var or__3824__auto____18495 = (G__18493__18494.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____18495)
{return or__3824__auto____18495;
} else
{return G__18493__18494.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__18493__18494.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__18493__18494);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__18493__18494);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__18499__18500 = x;
if(G__18499__18500)
{if((function (){var or__3824__auto____18501 = (G__18499__18500.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____18501)
{return or__3824__auto____18501;
} else
{return G__18499__18500.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__18499__18500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__18499__18500);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__18499__18500);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__18505__18506 = x;
if(G__18505__18506)
{if((function (){var or__3824__auto____18507 = (G__18505__18506.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____18507)
{return or__3824__auto____18507;
} else
{return G__18505__18506.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__18505__18506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__18505__18506);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__18505__18506);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__18511__18512 = x;
if(G__18511__18512)
{if((function (){var or__3824__auto____18513 = (G__18511__18512.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18513)
{return or__3824__auto____18513;
} else
{return G__18511__18512.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18511__18512.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18511__18512);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18511__18512);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__18517__18518 = x;
if(G__18517__18518)
{if((function (){var or__3824__auto____18519 = (G__18517__18518.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18519)
{return or__3824__auto____18519;
} else
{return G__18517__18518.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18517__18518.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18517__18518);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18517__18518);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__18523__18524 = x;
if(G__18523__18524)
{if((function (){var or__3824__auto____18525 = (G__18523__18524.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____18525)
{return or__3824__auto____18525;
} else
{return G__18523__18524.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__18523__18524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__18523__18524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__18523__18524);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__18529__18530 = x;
if(G__18529__18530)
{if((function (){var or__3824__auto____18531 = (G__18529__18530.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____18531)
{return or__3824__auto____18531;
} else
{return G__18529__18530.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__18529__18530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__18529__18530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__18529__18530);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__18535__18536 = x;
if(G__18535__18536)
{if(cljs.core.truth_((function (){var or__3824__auto____18537 = null;
if(cljs.core.truth_(or__3824__auto____18537))
{return or__3824__auto____18537;
} else
{return G__18535__18536.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__18535__18536.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__18535__18536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__18535__18536);
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
var G__18538__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__18538 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18538__delegate.call(this, keyvals);
};
G__18538.cljs$lang$maxFixedArity = 0;
G__18538.cljs$lang$applyTo = (function (arglist__18539){
var keyvals = cljs.core.seq(arglist__18539);;
return G__18538__delegate(keyvals);
});
G__18538.cljs$lang$arity$variadic = G__18538__delegate;
return G__18538;
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
var keys__18541 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__18541.push(key);
}));
return keys__18541;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__18545 = i;
var j__18546 = j;
var len__18547 = len;
while(true){
if((len__18547 === 0))
{return to;
} else
{(to[j__18546] = (from[i__18545]));
{
var G__18548 = (i__18545 + 1);
var G__18549 = (j__18546 + 1);
var G__18550 = (len__18547 - 1);
i__18545 = G__18548;
j__18546 = G__18549;
len__18547 = G__18550;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__18554 = (i + (len - 1));
var j__18555 = (j + (len - 1));
var len__18556 = len;
while(true){
if((len__18556 === 0))
{return to;
} else
{(to[j__18555] = (from[i__18554]));
{
var G__18557 = (i__18554 - 1);
var G__18558 = (j__18555 - 1);
var G__18559 = (len__18556 - 1);
i__18554 = G__18557;
j__18555 = G__18558;
len__18556 = G__18559;
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
{var G__18563__18564 = s;
if(G__18563__18564)
{if((function (){var or__3824__auto____18565 = (G__18563__18564.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18565)
{return or__3824__auto____18565;
} else
{return G__18563__18564.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18563__18564.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18563__18564);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18563__18564);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__18569__18570 = s;
if(G__18569__18570)
{if((function (){var or__3824__auto____18571 = (G__18569__18570.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____18571)
{return or__3824__auto____18571;
} else
{return G__18569__18570.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__18569__18570.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__18569__18570);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__18569__18570);
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
var and__3822__auto____18574 = goog.isString(x);
if(and__3822__auto____18574)
{return !((function (){var or__3824__auto____18575 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____18575)
{return or__3824__auto____18575;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____18574;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____18577 = goog.isString(x);
if(and__3822__auto____18577)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____18577;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____18579 = goog.isString(x);
if(and__3822__auto____18579)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____18579;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____18584 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____18584)
{return or__3824__auto____18584;
} else
{var G__18585__18586 = f;
if(G__18585__18586)
{if((function (){var or__3824__auto____18587 = (G__18585__18586.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____18587)
{return or__3824__auto____18587;
} else
{return G__18585__18586.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__18585__18586.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__18585__18586);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__18585__18586);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____18589 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____18589)
{return (n == n.toFixed());
} else
{return and__3822__auto____18589;
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
if(cljs.core.truth_((function (){var and__3822__auto____18592 = coll;
if(cljs.core.truth_(and__3822__auto____18592))
{var and__3822__auto____18593 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____18593)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____18593;
}
} else
{return and__3822__auto____18592;
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
var G__18602__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__18598 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__18599 = more;
while(true){
var x__18600 = cljs.core.first.call(null,xs__18599);
var etc__18601 = cljs.core.next.call(null,xs__18599);
if(cljs.core.truth_(xs__18599))
{if(cljs.core.contains_QMARK_.call(null,s__18598,x__18600))
{return false;
} else
{{
var G__18603 = cljs.core.conj.call(null,s__18598,x__18600);
var G__18604 = etc__18601;
s__18598 = G__18603;
xs__18599 = G__18604;
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
var G__18602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18602__delegate.call(this, x, y, more);
};
G__18602.cljs$lang$maxFixedArity = 2;
G__18602.cljs$lang$applyTo = (function (arglist__18605){
var x = cljs.core.first(arglist__18605);
var y = cljs.core.first(cljs.core.next(arglist__18605));
var more = cljs.core.rest(cljs.core.next(arglist__18605));
return G__18602__delegate(x, y, more);
});
G__18602.cljs$lang$arity$variadic = G__18602__delegate;
return G__18602;
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
{if((function (){var G__18609__18610 = x;
if(G__18609__18610)
{if(cljs.core.truth_((function (){var or__3824__auto____18611 = null;
if(cljs.core.truth_(or__3824__auto____18611))
{return or__3824__auto____18611;
} else
{return G__18609__18610.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__18609__18610.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__18609__18610);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__18609__18610);
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
var xl__18616 = cljs.core.count.call(null,xs);
var yl__18617 = cljs.core.count.call(null,ys);
if((xl__18616 < yl__18617))
{return -1;
} else
{if((xl__18616 > yl__18617))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__18616,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__18618 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____18619 = (d__18618 === 0);
if(and__3822__auto____18619)
{return ((n + 1) < len);
} else
{return and__3822__auto____18619;
}
})())
{{
var G__18620 = xs;
var G__18621 = ys;
var G__18622 = len;
var G__18623 = (n + 1);
xs = G__18620;
ys = G__18621;
len = G__18622;
n = G__18623;
continue;
}
} else
{return d__18618;
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
var r__18625 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__18625))
{return r__18625;
} else
{if(cljs.core.truth_(r__18625))
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
{var a__18627 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__18627,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__18627);
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
var temp__3971__auto____18633 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____18633)
{var s__18634 = temp__3971__auto____18633;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__18634),cljs.core.next.call(null,s__18634));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__18635 = val;
var coll__18636 = cljs.core.seq.call(null,coll);
while(true){
if(coll__18636)
{var nval__18637 = f.call(null,val__18635,cljs.core.first.call(null,coll__18636));
if(cljs.core.reduced_QMARK_.call(null,nval__18637))
{return cljs.core.deref.call(null,nval__18637);
} else
{{
var G__18638 = nval__18637;
var G__18639 = cljs.core.next.call(null,coll__18636);
val__18635 = G__18638;
coll__18636 = G__18639;
continue;
}
}
} else
{return val__18635;
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
var a__18641 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__18641);
return cljs.core.vec.call(null,a__18641);
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
if((function (){var G__18648__18649 = coll;
if(G__18648__18649)
{if((function (){var or__3824__auto____18650 = (G__18648__18649.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18650)
{return or__3824__auto____18650;
} else
{return G__18648__18649.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18648__18649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18648__18649);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18648__18649);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__18651__18652 = coll;
if(G__18651__18652)
{if((function (){var or__3824__auto____18653 = (G__18651__18652.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18653)
{return or__3824__auto____18653;
} else
{return G__18651__18652.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18651__18652.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18651__18652);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18651__18652);
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
var this__18654 = this;
return this__18654.val;
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
var G__18655__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__18655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18655__delegate.call(this, x, y, more);
};
G__18655.cljs$lang$maxFixedArity = 2;
G__18655.cljs$lang$applyTo = (function (arglist__18656){
var x = cljs.core.first(arglist__18656);
var y = cljs.core.first(cljs.core.next(arglist__18656));
var more = cljs.core.rest(cljs.core.next(arglist__18656));
return G__18655__delegate(x, y, more);
});
G__18655.cljs$lang$arity$variadic = G__18655__delegate;
return G__18655;
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
var G__18657__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__18657 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18657__delegate.call(this, x, y, more);
};
G__18657.cljs$lang$maxFixedArity = 2;
G__18657.cljs$lang$applyTo = (function (arglist__18658){
var x = cljs.core.first(arglist__18658);
var y = cljs.core.first(cljs.core.next(arglist__18658));
var more = cljs.core.rest(cljs.core.next(arglist__18658));
return G__18657__delegate(x, y, more);
});
G__18657.cljs$lang$arity$variadic = G__18657__delegate;
return G__18657;
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
var G__18659__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__18659 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18659__delegate.call(this, x, y, more);
};
G__18659.cljs$lang$maxFixedArity = 2;
G__18659.cljs$lang$applyTo = (function (arglist__18660){
var x = cljs.core.first(arglist__18660);
var y = cljs.core.first(cljs.core.next(arglist__18660));
var more = cljs.core.rest(cljs.core.next(arglist__18660));
return G__18659__delegate(x, y, more);
});
G__18659.cljs$lang$arity$variadic = G__18659__delegate;
return G__18659;
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
var G__18661__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__18661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18661__delegate.call(this, x, y, more);
};
G__18661.cljs$lang$maxFixedArity = 2;
G__18661.cljs$lang$applyTo = (function (arglist__18662){
var x = cljs.core.first(arglist__18662);
var y = cljs.core.first(cljs.core.next(arglist__18662));
var more = cljs.core.rest(cljs.core.next(arglist__18662));
return G__18661__delegate(x, y, more);
});
G__18661.cljs$lang$arity$variadic = G__18661__delegate;
return G__18661;
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
var G__18663__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__18664 = y;
var G__18665 = cljs.core.first.call(null,more);
var G__18666 = cljs.core.next.call(null,more);
x = G__18664;
y = G__18665;
more = G__18666;
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
var G__18663 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18663__delegate.call(this, x, y, more);
};
G__18663.cljs$lang$maxFixedArity = 2;
G__18663.cljs$lang$applyTo = (function (arglist__18667){
var x = cljs.core.first(arglist__18667);
var y = cljs.core.first(cljs.core.next(arglist__18667));
var more = cljs.core.rest(cljs.core.next(arglist__18667));
return G__18663__delegate(x, y, more);
});
G__18663.cljs$lang$arity$variadic = G__18663__delegate;
return G__18663;
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
var G__18668__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__18669 = y;
var G__18670 = cljs.core.first.call(null,more);
var G__18671 = cljs.core.next.call(null,more);
x = G__18669;
y = G__18670;
more = G__18671;
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
var G__18668 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18668__delegate.call(this, x, y, more);
};
G__18668.cljs$lang$maxFixedArity = 2;
G__18668.cljs$lang$applyTo = (function (arglist__18672){
var x = cljs.core.first(arglist__18672);
var y = cljs.core.first(cljs.core.next(arglist__18672));
var more = cljs.core.rest(cljs.core.next(arglist__18672));
return G__18668__delegate(x, y, more);
});
G__18668.cljs$lang$arity$variadic = G__18668__delegate;
return G__18668;
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
var G__18673__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__18674 = y;
var G__18675 = cljs.core.first.call(null,more);
var G__18676 = cljs.core.next.call(null,more);
x = G__18674;
y = G__18675;
more = G__18676;
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
var G__18673 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18673__delegate.call(this, x, y, more);
};
G__18673.cljs$lang$maxFixedArity = 2;
G__18673.cljs$lang$applyTo = (function (arglist__18677){
var x = cljs.core.first(arglist__18677);
var y = cljs.core.first(cljs.core.next(arglist__18677));
var more = cljs.core.rest(cljs.core.next(arglist__18677));
return G__18673__delegate(x, y, more);
});
G__18673.cljs$lang$arity$variadic = G__18673__delegate;
return G__18673;
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
var G__18678__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__18679 = y;
var G__18680 = cljs.core.first.call(null,more);
var G__18681 = cljs.core.next.call(null,more);
x = G__18679;
y = G__18680;
more = G__18681;
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
var G__18678 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18678__delegate.call(this, x, y, more);
};
G__18678.cljs$lang$maxFixedArity = 2;
G__18678.cljs$lang$applyTo = (function (arglist__18682){
var x = cljs.core.first(arglist__18682);
var y = cljs.core.first(cljs.core.next(arglist__18682));
var more = cljs.core.rest(cljs.core.next(arglist__18682));
return G__18678__delegate(x, y, more);
});
G__18678.cljs$lang$arity$variadic = G__18678__delegate;
return G__18678;
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
var G__18683__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__18683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18683__delegate.call(this, x, y, more);
};
G__18683.cljs$lang$maxFixedArity = 2;
G__18683.cljs$lang$applyTo = (function (arglist__18684){
var x = cljs.core.first(arglist__18684);
var y = cljs.core.first(cljs.core.next(arglist__18684));
var more = cljs.core.rest(cljs.core.next(arglist__18684));
return G__18683__delegate(x, y, more);
});
G__18683.cljs$lang$arity$variadic = G__18683__delegate;
return G__18683;
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
var G__18685__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__18685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18685__delegate.call(this, x, y, more);
};
G__18685.cljs$lang$maxFixedArity = 2;
G__18685.cljs$lang$applyTo = (function (arglist__18686){
var x = cljs.core.first(arglist__18686);
var y = cljs.core.first(cljs.core.next(arglist__18686));
var more = cljs.core.rest(cljs.core.next(arglist__18686));
return G__18685__delegate(x, y, more);
});
G__18685.cljs$lang$arity$variadic = G__18685__delegate;
return G__18685;
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
var rem__18688 = (n % d);
return cljs.core.fix.call(null,((n - rem__18688) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__18690 = cljs.core.quot.call(null,n,d);
return (n - (d * q__18690));
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
var v__18693 = (v - ((v >> 1) & 1431655765));
var v__18694 = ((v__18693 & 858993459) + ((v__18693 >> 2) & 858993459));
return ((((v__18694 + (v__18694 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__18695__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__18696 = y;
var G__18697 = cljs.core.first.call(null,more);
var G__18698 = cljs.core.next.call(null,more);
x = G__18696;
y = G__18697;
more = G__18698;
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
var G__18695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18695__delegate.call(this, x, y, more);
};
G__18695.cljs$lang$maxFixedArity = 2;
G__18695.cljs$lang$applyTo = (function (arglist__18699){
var x = cljs.core.first(arglist__18699);
var y = cljs.core.first(cljs.core.next(arglist__18699));
var more = cljs.core.rest(cljs.core.next(arglist__18699));
return G__18695__delegate(x, y, more);
});
G__18695.cljs$lang$arity$variadic = G__18695__delegate;
return G__18695;
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
var n__18703 = n;
var xs__18704 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18705 = xs__18704;
if(and__3822__auto____18705)
{return (n__18703 > 0);
} else
{return and__3822__auto____18705;
}
})()))
{{
var G__18706 = (n__18703 - 1);
var G__18707 = cljs.core.next.call(null,xs__18704);
n__18703 = G__18706;
xs__18704 = G__18707;
continue;
}
} else
{return xs__18704;
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
var G__18708__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__18709 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__18710 = cljs.core.next.call(null,more);
sb = G__18709;
more = G__18710;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__18708 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18708__delegate.call(this, x, ys);
};
G__18708.cljs$lang$maxFixedArity = 1;
G__18708.cljs$lang$applyTo = (function (arglist__18711){
var x = cljs.core.first(arglist__18711);
var ys = cljs.core.rest(arglist__18711);
return G__18708__delegate(x, ys);
});
G__18708.cljs$lang$arity$variadic = G__18708__delegate;
return G__18708;
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
var G__18712__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__18713 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__18714 = cljs.core.next.call(null,more);
sb = G__18713;
more = G__18714;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__18712 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18712__delegate.call(this, x, ys);
};
G__18712.cljs$lang$maxFixedArity = 1;
G__18712.cljs$lang$applyTo = (function (arglist__18715){
var x = cljs.core.first(arglist__18715);
var ys = cljs.core.rest(arglist__18715);
return G__18712__delegate(x, ys);
});
G__18712.cljs$lang$arity$variadic = G__18712__delegate;
return G__18712;
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
format.cljs$lang$applyTo = (function (arglist__18716){
var fmt = cljs.core.first(arglist__18716);
var args = cljs.core.rest(arglist__18716);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__18719 = cljs.core.seq.call(null,x);
var ys__18720 = cljs.core.seq.call(null,y);
while(true){
if((xs__18719 == null))
{return (ys__18720 == null);
} else
{if((ys__18720 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__18719),cljs.core.first.call(null,ys__18720)))
{{
var G__18721 = cljs.core.next.call(null,xs__18719);
var G__18722 = cljs.core.next.call(null,ys__18720);
xs__18719 = G__18721;
ys__18720 = G__18722;
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
return cljs.core.reduce.call(null,(function (p1__18723_SHARP_,p2__18724_SHARP_){
return cljs.core.hash_combine.call(null,p1__18723_SHARP_,cljs.core.hash.call(null,p2__18724_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__18728 = 0;
var s__18729 = cljs.core.seq.call(null,m);
while(true){
if(s__18729)
{var e__18730 = cljs.core.first.call(null,s__18729);
{
var G__18731 = ((h__18728 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__18730)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__18730)))) % 4503599627370496);
var G__18732 = cljs.core.next.call(null,s__18729);
h__18728 = G__18731;
s__18729 = G__18732;
continue;
}
} else
{return h__18728;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__18736 = 0;
var s__18737 = cljs.core.seq.call(null,s);
while(true){
if(s__18737)
{var e__18738 = cljs.core.first.call(null,s__18737);
{
var G__18739 = ((h__18736 + cljs.core.hash.call(null,e__18738)) % 4503599627370496);
var G__18740 = cljs.core.next.call(null,s__18737);
h__18736 = G__18739;
s__18737 = G__18740;
continue;
}
} else
{return h__18736;
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
var G__18761__18762 = cljs.core.seq.call(null,fn_map);
if(G__18761__18762)
{var G__18764__18766 = cljs.core.first.call(null,G__18761__18762);
var vec__18765__18767 = G__18764__18766;
var key_name__18768 = cljs.core.nth.call(null,vec__18765__18767,0,null);
var f__18769 = cljs.core.nth.call(null,vec__18765__18767,1,null);
var G__18761__18770 = G__18761__18762;
var G__18764__18771 = G__18764__18766;
var G__18761__18772 = G__18761__18770;
while(true){
var vec__18773__18774 = G__18764__18771;
var key_name__18775 = cljs.core.nth.call(null,vec__18773__18774,0,null);
var f__18776 = cljs.core.nth.call(null,vec__18773__18774,1,null);
var G__18761__18777 = G__18761__18772;
var str_name__18778 = cljs.core.name.call(null,key_name__18775);
(obj[str_name__18778] = f__18776);
var temp__3974__auto____18779 = cljs.core.next.call(null,G__18761__18777);
if(temp__3974__auto____18779)
{var G__18761__18780 = temp__3974__auto____18779;
{
var G__18781 = cljs.core.first.call(null,G__18761__18780);
var G__18782 = G__18761__18780;
G__18764__18771 = G__18781;
G__18761__18772 = G__18782;
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
var this__18783 = this;
var h__2309__auto____18784 = this__18783.__hash;
if(!((h__2309__auto____18784 == null)))
{return h__2309__auto____18784;
} else
{var h__2309__auto____18785 = cljs.core.hash_coll.call(null,coll);
this__18783.__hash = h__2309__auto____18785;
return h__2309__auto____18785;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18786 = this;
if((this__18786.count === 1))
{return null;
} else
{return this__18786.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18787 = this;
return (new cljs.core.List(this__18787.meta,o,coll,(this__18787.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__18788 = this;
var this__18789 = this;
return cljs.core.pr_str.call(null,this__18789);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18790 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18791 = this;
return this__18791.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18792 = this;
return this__18792.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18793 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18794 = this;
return this__18794.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18795 = this;
if((this__18795.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__18795.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18797 = this;
return (new cljs.core.List(meta,this__18797.first,this__18797.rest,this__18797.count,this__18797.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18798 = this;
return this__18798.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18799 = this;
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
var this__18800 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18801 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18802 = this;
return (new cljs.core.List(this__18802.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__18803 = this;
var this__18804 = this;
return cljs.core.pr_str.call(null,this__18804);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18805 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18806 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18807 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18808 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18809 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18810 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18811 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18812 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18813 = this;
return this__18813.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18814 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__18818__18819 = coll;
if(G__18818__18819)
{if((function (){var or__3824__auto____18820 = (G__18818__18819.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____18820)
{return or__3824__auto____18820;
} else
{return G__18818__18819.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__18818__18819.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__18818__18819);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__18818__18819);
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
var G__18821__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__18821 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18821__delegate.call(this, x, y, z, items);
};
G__18821.cljs$lang$maxFixedArity = 3;
G__18821.cljs$lang$applyTo = (function (arglist__18822){
var x = cljs.core.first(arglist__18822);
var y = cljs.core.first(cljs.core.next(arglist__18822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18822)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18822)));
return G__18821__delegate(x, y, z, items);
});
G__18821.cljs$lang$arity$variadic = G__18821__delegate;
return G__18821;
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
var this__18823 = this;
var h__2309__auto____18824 = this__18823.__hash;
if(!((h__2309__auto____18824 == null)))
{return h__2309__auto____18824;
} else
{var h__2309__auto____18825 = cljs.core.hash_coll.call(null,coll);
this__18823.__hash = h__2309__auto____18825;
return h__2309__auto____18825;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18826 = this;
if((this__18826.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__18826.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18827 = this;
return (new cljs.core.Cons(null,o,coll,this__18827.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__18828 = this;
var this__18829 = this;
return cljs.core.pr_str.call(null,this__18829);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18830 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18831 = this;
return this__18831.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18832 = this;
if((this__18832.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__18832.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18833 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18834 = this;
return (new cljs.core.Cons(meta,this__18834.first,this__18834.rest,this__18834.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18835 = this;
return this__18835.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18836 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18836.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____18841 = (coll == null);
if(or__3824__auto____18841)
{return or__3824__auto____18841;
} else
{var G__18842__18843 = coll;
if(G__18842__18843)
{if((function (){var or__3824__auto____18844 = (G__18842__18843.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18844)
{return or__3824__auto____18844;
} else
{return G__18842__18843.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18842__18843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18842__18843);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18842__18843);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__18848__18849 = x;
if(G__18848__18849)
{if((function (){var or__3824__auto____18850 = (G__18848__18849.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____18850)
{return or__3824__auto____18850;
} else
{return G__18848__18849.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__18848__18849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__18848__18849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__18848__18849);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__18851 = null;
var G__18851__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__18851__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__18851 = function(string,f,start){
switch(arguments.length){
case 2:
return G__18851__2.call(this,string,f);
case 3:
return G__18851__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18851;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__18852 = null;
var G__18852__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__18852__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__18852 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__18852__2.call(this,string,k);
case 3:
return G__18852__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18852;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__18853 = null;
var G__18853__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__18853__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__18853 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__18853__2.call(this,string,n);
case 3:
return G__18853__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18853;
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
var G__18865 = null;
var G__18865__2 = (function (this_sym18856,coll){
var this__18858 = this;
var this_sym18856__18859 = this;
var ___18860 = this_sym18856__18859;
if((coll == null))
{return null;
} else
{var strobj__18861 = coll.strobj;
if((strobj__18861 == null))
{return cljs.core._lookup.call(null,coll,this__18858.k,null);
} else
{return (strobj__18861[this__18858.k]);
}
}
});
var G__18865__3 = (function (this_sym18857,coll,not_found){
var this__18858 = this;
var this_sym18857__18862 = this;
var ___18863 = this_sym18857__18862;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__18858.k,not_found);
}
});
G__18865 = function(this_sym18857,coll,not_found){
switch(arguments.length){
case 2:
return G__18865__2.call(this,this_sym18857,coll);
case 3:
return G__18865__3.call(this,this_sym18857,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18865;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym18854,args18855){
var this__18864 = this;
return this_sym18854.call.apply(this_sym18854,[this_sym18854].concat(args18855.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__18874 = null;
var G__18874__2 = (function (this_sym18868,coll){
var this_sym18868__18870 = this;
var this__18871 = this_sym18868__18870;
return cljs.core._lookup.call(null,coll,this__18871.toString(),null);
});
var G__18874__3 = (function (this_sym18869,coll,not_found){
var this_sym18869__18872 = this;
var this__18873 = this_sym18869__18872;
return cljs.core._lookup.call(null,coll,this__18873.toString(),not_found);
});
G__18874 = function(this_sym18869,coll,not_found){
switch(arguments.length){
case 2:
return G__18874__2.call(this,this_sym18869,coll);
case 3:
return G__18874__3.call(this,this_sym18869,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18874;
})()
;
String.prototype.apply = (function (this_sym18866,args18867){
return this_sym18866.call.apply(this_sym18866,[this_sym18866].concat(args18867.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__18876 = lazy_seq.x;
if(lazy_seq.realized)
{return x__18876;
} else
{lazy_seq.x = x__18876.call(null);
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
var this__18877 = this;
var h__2309__auto____18878 = this__18877.__hash;
if(!((h__2309__auto____18878 == null)))
{return h__2309__auto____18878;
} else
{var h__2309__auto____18879 = cljs.core.hash_coll.call(null,coll);
this__18877.__hash = h__2309__auto____18879;
return h__2309__auto____18879;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18880 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18881 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__18882 = this;
var this__18883 = this;
return cljs.core.pr_str.call(null,this__18883);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18884 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18885 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18886 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18887 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18888 = this;
return (new cljs.core.LazySeq(meta,this__18888.realized,this__18888.x,this__18888.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18889 = this;
return this__18889.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18890 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18890.meta);
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
var this__18891 = this;
return this__18891.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__18892 = this;
var ___18893 = this;
(this__18892.buf[this__18892.end] = o);
return this__18892.end = (this__18892.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__18894 = this;
var ___18895 = this;
var ret__18896 = (new cljs.core.ArrayChunk(this__18894.buf,0,this__18894.end));
this__18894.buf = null;
return ret__18896;
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
var this__18897 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__18897.arr[this__18897.off]),(this__18897.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18898 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__18898.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__18899 = this;
if((this__18899.off === this__18899.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__18899.arr,(this__18899.off + 1),this__18899.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__18900 = this;
return (this__18900.arr[(this__18900.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__18901 = this;
if((function (){var and__3822__auto____18902 = (i >= 0);
if(and__3822__auto____18902)
{return (i < (this__18901.end - this__18901.off));
} else
{return and__3822__auto____18902;
}
})())
{return (this__18901.arr[(this__18901.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__18903 = this;
return (this__18903.end - this__18903.off);
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
var this__18904 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18905 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18906 = this;
return cljs.core._nth.call(null,this__18906.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18907 = this;
if((cljs.core._count.call(null,this__18907.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__18907.chunk),this__18907.more,this__18907.meta));
} else
{if((this__18907.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__18907.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__18908 = this;
if((this__18908.more == null))
{return null;
} else
{return this__18908.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18909 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__18910 = this;
return (new cljs.core.ChunkedCons(this__18910.chunk,this__18910.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18911 = this;
return this__18911.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__18912 = this;
return this__18912.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__18913 = this;
if((this__18913.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__18913.more;
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
if((function (){var G__18917__18918 = s;
if(G__18917__18918)
{if(cljs.core.truth_((function (){var or__3824__auto____18919 = null;
if(cljs.core.truth_(or__3824__auto____18919))
{return or__3824__auto____18919;
} else
{return G__18917__18918.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__18917__18918.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__18917__18918);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__18917__18918);
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
var ary__18922 = [];
var s__18923 = s;
while(true){
if(cljs.core.seq.call(null,s__18923))
{ary__18922.push(cljs.core.first.call(null,s__18923));
{
var G__18924 = cljs.core.next.call(null,s__18923);
s__18923 = G__18924;
continue;
}
} else
{return ary__18922;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__18928 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__18929 = 0;
var xs__18930 = cljs.core.seq.call(null,coll);
while(true){
if(xs__18930)
{(ret__18928[i__18929] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__18930)));
{
var G__18931 = (i__18929 + 1);
var G__18932 = cljs.core.next.call(null,xs__18930);
i__18929 = G__18931;
xs__18930 = G__18932;
continue;
}
} else
{}
break;
}
return ret__18928;
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
var a__18940 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18941 = cljs.core.seq.call(null,init_val_or_seq);
var i__18942 = 0;
var s__18943 = s__18941;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18944 = s__18943;
if(and__3822__auto____18944)
{return (i__18942 < size);
} else
{return and__3822__auto____18944;
}
})()))
{(a__18940[i__18942] = cljs.core.first.call(null,s__18943));
{
var G__18947 = (i__18942 + 1);
var G__18948 = cljs.core.next.call(null,s__18943);
i__18942 = G__18947;
s__18943 = G__18948;
continue;
}
} else
{return a__18940;
}
break;
}
} else
{var n__2644__auto____18945 = size;
var i__18946 = 0;
while(true){
if((i__18946 < n__2644__auto____18945))
{(a__18940[i__18946] = init_val_or_seq);
{
var G__18949 = (i__18946 + 1);
i__18946 = G__18949;
continue;
}
} else
{}
break;
}
return a__18940;
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
var a__18957 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18958 = cljs.core.seq.call(null,init_val_or_seq);
var i__18959 = 0;
var s__18960 = s__18958;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18961 = s__18960;
if(and__3822__auto____18961)
{return (i__18959 < size);
} else
{return and__3822__auto____18961;
}
})()))
{(a__18957[i__18959] = cljs.core.first.call(null,s__18960));
{
var G__18964 = (i__18959 + 1);
var G__18965 = cljs.core.next.call(null,s__18960);
i__18959 = G__18964;
s__18960 = G__18965;
continue;
}
} else
{return a__18957;
}
break;
}
} else
{var n__2644__auto____18962 = size;
var i__18963 = 0;
while(true){
if((i__18963 < n__2644__auto____18962))
{(a__18957[i__18963] = init_val_or_seq);
{
var G__18966 = (i__18963 + 1);
i__18963 = G__18966;
continue;
}
} else
{}
break;
}
return a__18957;
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
var a__18974 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18975 = cljs.core.seq.call(null,init_val_or_seq);
var i__18976 = 0;
var s__18977 = s__18975;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18978 = s__18977;
if(and__3822__auto____18978)
{return (i__18976 < size);
} else
{return and__3822__auto____18978;
}
})()))
{(a__18974[i__18976] = cljs.core.first.call(null,s__18977));
{
var G__18981 = (i__18976 + 1);
var G__18982 = cljs.core.next.call(null,s__18977);
i__18976 = G__18981;
s__18977 = G__18982;
continue;
}
} else
{return a__18974;
}
break;
}
} else
{var n__2644__auto____18979 = size;
var i__18980 = 0;
while(true){
if((i__18980 < n__2644__auto____18979))
{(a__18974[i__18980] = init_val_or_seq);
{
var G__18983 = (i__18980 + 1);
i__18980 = G__18983;
continue;
}
} else
{}
break;
}
return a__18974;
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
{var s__18988 = s;
var i__18989 = n;
var sum__18990 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18991 = (i__18989 > 0);
if(and__3822__auto____18991)
{return cljs.core.seq.call(null,s__18988);
} else
{return and__3822__auto____18991;
}
})()))
{{
var G__18992 = cljs.core.next.call(null,s__18988);
var G__18993 = (i__18989 - 1);
var G__18994 = (sum__18990 + 1);
s__18988 = G__18992;
i__18989 = G__18993;
sum__18990 = G__18994;
continue;
}
} else
{return sum__18990;
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
var s__18999 = cljs.core.seq.call(null,x);
if(s__18999)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__18999))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__18999),concat.call(null,cljs.core.chunk_rest.call(null,s__18999),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__18999),concat.call(null,cljs.core.rest.call(null,s__18999),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__19003__delegate = function (x,y,zs){
var cat__19002 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__19001 = cljs.core.seq.call(null,xys);
if(xys__19001)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__19001))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__19001),cat.call(null,cljs.core.chunk_rest.call(null,xys__19001),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__19001),cat.call(null,cljs.core.rest.call(null,xys__19001),zs));
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
return cat__19002.call(null,concat.call(null,x,y),zs);
};
var G__19003 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19003__delegate.call(this, x, y, zs);
};
G__19003.cljs$lang$maxFixedArity = 2;
G__19003.cljs$lang$applyTo = (function (arglist__19004){
var x = cljs.core.first(arglist__19004);
var y = cljs.core.first(cljs.core.next(arglist__19004));
var zs = cljs.core.rest(cljs.core.next(arglist__19004));
return G__19003__delegate(x, y, zs);
});
G__19003.cljs$lang$arity$variadic = G__19003__delegate;
return G__19003;
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
var G__19005__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__19005 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19005__delegate.call(this, a, b, c, d, more);
};
G__19005.cljs$lang$maxFixedArity = 4;
G__19005.cljs$lang$applyTo = (function (arglist__19006){
var a = cljs.core.first(arglist__19006);
var b = cljs.core.first(cljs.core.next(arglist__19006));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19006)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19006))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19006))));
return G__19005__delegate(a, b, c, d, more);
});
G__19005.cljs$lang$arity$variadic = G__19005__delegate;
return G__19005;
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
var args__19048 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__19049 = cljs.core._first.call(null,args__19048);
var args__19050 = cljs.core._rest.call(null,args__19048);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__19049);
} else
{return f.call(null,a__19049);
}
} else
{var b__19051 = cljs.core._first.call(null,args__19050);
var args__19052 = cljs.core._rest.call(null,args__19050);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__19049,b__19051);
} else
{return f.call(null,a__19049,b__19051);
}
} else
{var c__19053 = cljs.core._first.call(null,args__19052);
var args__19054 = cljs.core._rest.call(null,args__19052);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__19049,b__19051,c__19053);
} else
{return f.call(null,a__19049,b__19051,c__19053);
}
} else
{var d__19055 = cljs.core._first.call(null,args__19054);
var args__19056 = cljs.core._rest.call(null,args__19054);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__19049,b__19051,c__19053,d__19055);
} else
{return f.call(null,a__19049,b__19051,c__19053,d__19055);
}
} else
{var e__19057 = cljs.core._first.call(null,args__19056);
var args__19058 = cljs.core._rest.call(null,args__19056);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__19049,b__19051,c__19053,d__19055,e__19057);
} else
{return f.call(null,a__19049,b__19051,c__19053,d__19055,e__19057);
}
} else
{var f__19059 = cljs.core._first.call(null,args__19058);
var args__19060 = cljs.core._rest.call(null,args__19058);
if((argc === 6))
{if(f__19059.cljs$lang$arity$6)
{return f__19059.cljs$lang$arity$6(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059);
}
} else
{var g__19061 = cljs.core._first.call(null,args__19060);
var args__19062 = cljs.core._rest.call(null,args__19060);
if((argc === 7))
{if(f__19059.cljs$lang$arity$7)
{return f__19059.cljs$lang$arity$7(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061);
}
} else
{var h__19063 = cljs.core._first.call(null,args__19062);
var args__19064 = cljs.core._rest.call(null,args__19062);
if((argc === 8))
{if(f__19059.cljs$lang$arity$8)
{return f__19059.cljs$lang$arity$8(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063);
}
} else
{var i__19065 = cljs.core._first.call(null,args__19064);
var args__19066 = cljs.core._rest.call(null,args__19064);
if((argc === 9))
{if(f__19059.cljs$lang$arity$9)
{return f__19059.cljs$lang$arity$9(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065);
}
} else
{var j__19067 = cljs.core._first.call(null,args__19066);
var args__19068 = cljs.core._rest.call(null,args__19066);
if((argc === 10))
{if(f__19059.cljs$lang$arity$10)
{return f__19059.cljs$lang$arity$10(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067);
}
} else
{var k__19069 = cljs.core._first.call(null,args__19068);
var args__19070 = cljs.core._rest.call(null,args__19068);
if((argc === 11))
{if(f__19059.cljs$lang$arity$11)
{return f__19059.cljs$lang$arity$11(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069);
}
} else
{var l__19071 = cljs.core._first.call(null,args__19070);
var args__19072 = cljs.core._rest.call(null,args__19070);
if((argc === 12))
{if(f__19059.cljs$lang$arity$12)
{return f__19059.cljs$lang$arity$12(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071);
}
} else
{var m__19073 = cljs.core._first.call(null,args__19072);
var args__19074 = cljs.core._rest.call(null,args__19072);
if((argc === 13))
{if(f__19059.cljs$lang$arity$13)
{return f__19059.cljs$lang$arity$13(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073);
}
} else
{var n__19075 = cljs.core._first.call(null,args__19074);
var args__19076 = cljs.core._rest.call(null,args__19074);
if((argc === 14))
{if(f__19059.cljs$lang$arity$14)
{return f__19059.cljs$lang$arity$14(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075);
}
} else
{var o__19077 = cljs.core._first.call(null,args__19076);
var args__19078 = cljs.core._rest.call(null,args__19076);
if((argc === 15))
{if(f__19059.cljs$lang$arity$15)
{return f__19059.cljs$lang$arity$15(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077);
}
} else
{var p__19079 = cljs.core._first.call(null,args__19078);
var args__19080 = cljs.core._rest.call(null,args__19078);
if((argc === 16))
{if(f__19059.cljs$lang$arity$16)
{return f__19059.cljs$lang$arity$16(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079);
}
} else
{var q__19081 = cljs.core._first.call(null,args__19080);
var args__19082 = cljs.core._rest.call(null,args__19080);
if((argc === 17))
{if(f__19059.cljs$lang$arity$17)
{return f__19059.cljs$lang$arity$17(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081);
}
} else
{var r__19083 = cljs.core._first.call(null,args__19082);
var args__19084 = cljs.core._rest.call(null,args__19082);
if((argc === 18))
{if(f__19059.cljs$lang$arity$18)
{return f__19059.cljs$lang$arity$18(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083);
}
} else
{var s__19085 = cljs.core._first.call(null,args__19084);
var args__19086 = cljs.core._rest.call(null,args__19084);
if((argc === 19))
{if(f__19059.cljs$lang$arity$19)
{return f__19059.cljs$lang$arity$19(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083,s__19085);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083,s__19085);
}
} else
{var t__19087 = cljs.core._first.call(null,args__19086);
var args__19088 = cljs.core._rest.call(null,args__19086);
if((argc === 20))
{if(f__19059.cljs$lang$arity$20)
{return f__19059.cljs$lang$arity$20(a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083,s__19085,t__19087);
} else
{return f__19059.call(null,a__19049,b__19051,c__19053,d__19055,e__19057,f__19059,g__19061,h__19063,i__19065,j__19067,k__19069,l__19071,m__19073,n__19075,o__19077,p__19079,q__19081,r__19083,s__19085,t__19087);
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
var fixed_arity__19103 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19104 = cljs.core.bounded_count.call(null,args,(fixed_arity__19103 + 1));
if((bc__19104 <= fixed_arity__19103))
{return cljs.core.apply_to.call(null,f,bc__19104,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__19105 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__19106 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19107 = cljs.core.bounded_count.call(null,arglist__19105,(fixed_arity__19106 + 1));
if((bc__19107 <= fixed_arity__19106))
{return cljs.core.apply_to.call(null,f,bc__19107,arglist__19105);
} else
{return f.cljs$lang$applyTo(arglist__19105);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19105));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__19108 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__19109 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19110 = cljs.core.bounded_count.call(null,arglist__19108,(fixed_arity__19109 + 1));
if((bc__19110 <= fixed_arity__19109))
{return cljs.core.apply_to.call(null,f,bc__19110,arglist__19108);
} else
{return f.cljs$lang$applyTo(arglist__19108);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19108));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__19111 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__19112 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19113 = cljs.core.bounded_count.call(null,arglist__19111,(fixed_arity__19112 + 1));
if((bc__19113 <= fixed_arity__19112))
{return cljs.core.apply_to.call(null,f,bc__19113,arglist__19111);
} else
{return f.cljs$lang$applyTo(arglist__19111);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19111));
}
});
var apply__6 = (function() { 
var G__19117__delegate = function (f,a,b,c,d,args){
var arglist__19114 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__19115 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19116 = cljs.core.bounded_count.call(null,arglist__19114,(fixed_arity__19115 + 1));
if((bc__19116 <= fixed_arity__19115))
{return cljs.core.apply_to.call(null,f,bc__19116,arglist__19114);
} else
{return f.cljs$lang$applyTo(arglist__19114);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19114));
}
};
var G__19117 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19117__delegate.call(this, f, a, b, c, d, args);
};
G__19117.cljs$lang$maxFixedArity = 5;
G__19117.cljs$lang$applyTo = (function (arglist__19118){
var f = cljs.core.first(arglist__19118);
var a = cljs.core.first(cljs.core.next(arglist__19118));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19118)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19118))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19118)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19118)))));
return G__19117__delegate(f, a, b, c, d, args);
});
G__19117.cljs$lang$arity$variadic = G__19117__delegate;
return G__19117;
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
vary_meta.cljs$lang$applyTo = (function (arglist__19119){
var obj = cljs.core.first(arglist__19119);
var f = cljs.core.first(cljs.core.next(arglist__19119));
var args = cljs.core.rest(cljs.core.next(arglist__19119));
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
var G__19120__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__19120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19120__delegate.call(this, x, y, more);
};
G__19120.cljs$lang$maxFixedArity = 2;
G__19120.cljs$lang$applyTo = (function (arglist__19121){
var x = cljs.core.first(arglist__19121);
var y = cljs.core.first(cljs.core.next(arglist__19121));
var more = cljs.core.rest(cljs.core.next(arglist__19121));
return G__19120__delegate(x, y, more);
});
G__19120.cljs$lang$arity$variadic = G__19120__delegate;
return G__19120;
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
var G__19122 = pred;
var G__19123 = cljs.core.next.call(null,coll);
pred = G__19122;
coll = G__19123;
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
{var or__3824__auto____19125 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____19125))
{return or__3824__auto____19125;
} else
{{
var G__19126 = pred;
var G__19127 = cljs.core.next.call(null,coll);
pred = G__19126;
coll = G__19127;
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
var G__19128 = null;
var G__19128__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__19128__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__19128__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__19128__3 = (function() { 
var G__19129__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__19129 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19129__delegate.call(this, x, y, zs);
};
G__19129.cljs$lang$maxFixedArity = 2;
G__19129.cljs$lang$applyTo = (function (arglist__19130){
var x = cljs.core.first(arglist__19130);
var y = cljs.core.first(cljs.core.next(arglist__19130));
var zs = cljs.core.rest(cljs.core.next(arglist__19130));
return G__19129__delegate(x, y, zs);
});
G__19129.cljs$lang$arity$variadic = G__19129__delegate;
return G__19129;
})()
;
G__19128 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__19128__0.call(this);
case 1:
return G__19128__1.call(this,x);
case 2:
return G__19128__2.call(this,x,y);
default:
return G__19128__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__19128.cljs$lang$maxFixedArity = 2;
G__19128.cljs$lang$applyTo = G__19128__3.cljs$lang$applyTo;
return G__19128;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19131__delegate = function (args){
return x;
};
var G__19131 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19131__delegate.call(this, args);
};
G__19131.cljs$lang$maxFixedArity = 0;
G__19131.cljs$lang$applyTo = (function (arglist__19132){
var args = cljs.core.seq(arglist__19132);;
return G__19131__delegate(args);
});
G__19131.cljs$lang$arity$variadic = G__19131__delegate;
return G__19131;
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
var G__19139 = null;
var G__19139__0 = (function (){
return f.call(null,g.call(null));
});
var G__19139__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__19139__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__19139__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__19139__4 = (function() { 
var G__19140__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19140__delegate.call(this, x, y, z, args);
};
G__19140.cljs$lang$maxFixedArity = 3;
G__19140.cljs$lang$applyTo = (function (arglist__19141){
var x = cljs.core.first(arglist__19141);
var y = cljs.core.first(cljs.core.next(arglist__19141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19141)));
return G__19140__delegate(x, y, z, args);
});
G__19140.cljs$lang$arity$variadic = G__19140__delegate;
return G__19140;
})()
;
G__19139 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19139__0.call(this);
case 1:
return G__19139__1.call(this,x);
case 2:
return G__19139__2.call(this,x,y);
case 3:
return G__19139__3.call(this,x,y,z);
default:
return G__19139__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19139.cljs$lang$maxFixedArity = 3;
G__19139.cljs$lang$applyTo = G__19139__4.cljs$lang$applyTo;
return G__19139;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__19142 = null;
var G__19142__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__19142__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__19142__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__19142__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__19142__4 = (function() { 
var G__19143__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__19143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19143__delegate.call(this, x, y, z, args);
};
G__19143.cljs$lang$maxFixedArity = 3;
G__19143.cljs$lang$applyTo = (function (arglist__19144){
var x = cljs.core.first(arglist__19144);
var y = cljs.core.first(cljs.core.next(arglist__19144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19144)));
return G__19143__delegate(x, y, z, args);
});
G__19143.cljs$lang$arity$variadic = G__19143__delegate;
return G__19143;
})()
;
G__19142 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19142__0.call(this);
case 1:
return G__19142__1.call(this,x);
case 2:
return G__19142__2.call(this,x,y);
case 3:
return G__19142__3.call(this,x,y,z);
default:
return G__19142__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19142.cljs$lang$maxFixedArity = 3;
G__19142.cljs$lang$applyTo = G__19142__4.cljs$lang$applyTo;
return G__19142;
})()
});
var comp__4 = (function() { 
var G__19145__delegate = function (f1,f2,f3,fs){
var fs__19136 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__19146__delegate = function (args){
var ret__19137 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__19136),args);
var fs__19138 = cljs.core.next.call(null,fs__19136);
while(true){
if(fs__19138)
{{
var G__19147 = cljs.core.first.call(null,fs__19138).call(null,ret__19137);
var G__19148 = cljs.core.next.call(null,fs__19138);
ret__19137 = G__19147;
fs__19138 = G__19148;
continue;
}
} else
{return ret__19137;
}
break;
}
};
var G__19146 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19146__delegate.call(this, args);
};
G__19146.cljs$lang$maxFixedArity = 0;
G__19146.cljs$lang$applyTo = (function (arglist__19149){
var args = cljs.core.seq(arglist__19149);;
return G__19146__delegate(args);
});
G__19146.cljs$lang$arity$variadic = G__19146__delegate;
return G__19146;
})()
;
};
var G__19145 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19145__delegate.call(this, f1, f2, f3, fs);
};
G__19145.cljs$lang$maxFixedArity = 3;
G__19145.cljs$lang$applyTo = (function (arglist__19150){
var f1 = cljs.core.first(arglist__19150);
var f2 = cljs.core.first(cljs.core.next(arglist__19150));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19150)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19150)));
return G__19145__delegate(f1, f2, f3, fs);
});
G__19145.cljs$lang$arity$variadic = G__19145__delegate;
return G__19145;
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
var G__19151__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__19151 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19151__delegate.call(this, args);
};
G__19151.cljs$lang$maxFixedArity = 0;
G__19151.cljs$lang$applyTo = (function (arglist__19152){
var args = cljs.core.seq(arglist__19152);;
return G__19151__delegate(args);
});
G__19151.cljs$lang$arity$variadic = G__19151__delegate;
return G__19151;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__19153__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__19153 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19153__delegate.call(this, args);
};
G__19153.cljs$lang$maxFixedArity = 0;
G__19153.cljs$lang$applyTo = (function (arglist__19154){
var args = cljs.core.seq(arglist__19154);;
return G__19153__delegate(args);
});
G__19153.cljs$lang$arity$variadic = G__19153__delegate;
return G__19153;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__19155__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__19155 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19155__delegate.call(this, args);
};
G__19155.cljs$lang$maxFixedArity = 0;
G__19155.cljs$lang$applyTo = (function (arglist__19156){
var args = cljs.core.seq(arglist__19156);;
return G__19155__delegate(args);
});
G__19155.cljs$lang$arity$variadic = G__19155__delegate;
return G__19155;
})()
;
});
var partial__5 = (function() { 
var G__19157__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19158__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__19158 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19158__delegate.call(this, args);
};
G__19158.cljs$lang$maxFixedArity = 0;
G__19158.cljs$lang$applyTo = (function (arglist__19159){
var args = cljs.core.seq(arglist__19159);;
return G__19158__delegate(args);
});
G__19158.cljs$lang$arity$variadic = G__19158__delegate;
return G__19158;
})()
;
};
var G__19157 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19157__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__19157.cljs$lang$maxFixedArity = 4;
G__19157.cljs$lang$applyTo = (function (arglist__19160){
var f = cljs.core.first(arglist__19160);
var arg1 = cljs.core.first(cljs.core.next(arglist__19160));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19160)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19160))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19160))));
return G__19157__delegate(f, arg1, arg2, arg3, more);
});
G__19157.cljs$lang$arity$variadic = G__19157__delegate;
return G__19157;
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
var G__19161 = null;
var G__19161__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__19161__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__19161__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__19161__4 = (function() { 
var G__19162__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__19162 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19162__delegate.call(this, a, b, c, ds);
};
G__19162.cljs$lang$maxFixedArity = 3;
G__19162.cljs$lang$applyTo = (function (arglist__19163){
var a = cljs.core.first(arglist__19163);
var b = cljs.core.first(cljs.core.next(arglist__19163));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19163)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19163)));
return G__19162__delegate(a, b, c, ds);
});
G__19162.cljs$lang$arity$variadic = G__19162__delegate;
return G__19162;
})()
;
G__19161 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__19161__1.call(this,a);
case 2:
return G__19161__2.call(this,a,b);
case 3:
return G__19161__3.call(this,a,b,c);
default:
return G__19161__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19161.cljs$lang$maxFixedArity = 3;
G__19161.cljs$lang$applyTo = G__19161__4.cljs$lang$applyTo;
return G__19161;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__19164 = null;
var G__19164__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__19164__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__19164__4 = (function() { 
var G__19165__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__19165 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19165__delegate.call(this, a, b, c, ds);
};
G__19165.cljs$lang$maxFixedArity = 3;
G__19165.cljs$lang$applyTo = (function (arglist__19166){
var a = cljs.core.first(arglist__19166);
var b = cljs.core.first(cljs.core.next(arglist__19166));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19166)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19166)));
return G__19165__delegate(a, b, c, ds);
});
G__19165.cljs$lang$arity$variadic = G__19165__delegate;
return G__19165;
})()
;
G__19164 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19164__2.call(this,a,b);
case 3:
return G__19164__3.call(this,a,b,c);
default:
return G__19164__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19164.cljs$lang$maxFixedArity = 3;
G__19164.cljs$lang$applyTo = G__19164__4.cljs$lang$applyTo;
return G__19164;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__19167 = null;
var G__19167__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__19167__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__19167__4 = (function() { 
var G__19168__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__19168 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19168__delegate.call(this, a, b, c, ds);
};
G__19168.cljs$lang$maxFixedArity = 3;
G__19168.cljs$lang$applyTo = (function (arglist__19169){
var a = cljs.core.first(arglist__19169);
var b = cljs.core.first(cljs.core.next(arglist__19169));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19169)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19169)));
return G__19168__delegate(a, b, c, ds);
});
G__19168.cljs$lang$arity$variadic = G__19168__delegate;
return G__19168;
})()
;
G__19167 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19167__2.call(this,a,b);
case 3:
return G__19167__3.call(this,a,b,c);
default:
return G__19167__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19167.cljs$lang$maxFixedArity = 3;
G__19167.cljs$lang$applyTo = G__19167__4.cljs$lang$applyTo;
return G__19167;
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
var mapi__19185 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19193 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19193)
{var s__19194 = temp__3974__auto____19193;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19194))
{var c__19195 = cljs.core.chunk_first.call(null,s__19194);
var size__19196 = cljs.core.count.call(null,c__19195);
var b__19197 = cljs.core.chunk_buffer.call(null,size__19196);
var n__2644__auto____19198 = size__19196;
var i__19199 = 0;
while(true){
if((i__19199 < n__2644__auto____19198))
{cljs.core.chunk_append.call(null,b__19197,f.call(null,(idx + i__19199),cljs.core._nth.call(null,c__19195,i__19199)));
{
var G__19200 = (i__19199 + 1);
i__19199 = G__19200;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19197),mapi.call(null,(idx + size__19196),cljs.core.chunk_rest.call(null,s__19194)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__19194)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__19194)));
}
} else
{return null;
}
}),null));
});
return mapi__19185.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19210 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19210)
{var s__19211 = temp__3974__auto____19210;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19211))
{var c__19212 = cljs.core.chunk_first.call(null,s__19211);
var size__19213 = cljs.core.count.call(null,c__19212);
var b__19214 = cljs.core.chunk_buffer.call(null,size__19213);
var n__2644__auto____19215 = size__19213;
var i__19216 = 0;
while(true){
if((i__19216 < n__2644__auto____19215))
{var x__19217 = f.call(null,cljs.core._nth.call(null,c__19212,i__19216));
if((x__19217 == null))
{} else
{cljs.core.chunk_append.call(null,b__19214,x__19217);
}
{
var G__19219 = (i__19216 + 1);
i__19216 = G__19219;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19214),keep.call(null,f,cljs.core.chunk_rest.call(null,s__19211)));
} else
{var x__19218 = f.call(null,cljs.core.first.call(null,s__19211));
if((x__19218 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__19211));
} else
{return cljs.core.cons.call(null,x__19218,keep.call(null,f,cljs.core.rest.call(null,s__19211)));
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
var keepi__19245 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19255 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19255)
{var s__19256 = temp__3974__auto____19255;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19256))
{var c__19257 = cljs.core.chunk_first.call(null,s__19256);
var size__19258 = cljs.core.count.call(null,c__19257);
var b__19259 = cljs.core.chunk_buffer.call(null,size__19258);
var n__2644__auto____19260 = size__19258;
var i__19261 = 0;
while(true){
if((i__19261 < n__2644__auto____19260))
{var x__19262 = f.call(null,(idx + i__19261),cljs.core._nth.call(null,c__19257,i__19261));
if((x__19262 == null))
{} else
{cljs.core.chunk_append.call(null,b__19259,x__19262);
}
{
var G__19264 = (i__19261 + 1);
i__19261 = G__19264;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19259),keepi.call(null,(idx + size__19258),cljs.core.chunk_rest.call(null,s__19256)));
} else
{var x__19263 = f.call(null,idx,cljs.core.first.call(null,s__19256));
if((x__19263 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__19256));
} else
{return cljs.core.cons.call(null,x__19263,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__19256)));
}
}
} else
{return null;
}
}),null));
});
return keepi__19245.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19350 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____19350))
{return p.call(null,y);
} else
{return and__3822__auto____19350;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19351 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____19351))
{var and__3822__auto____19352 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____19352))
{return p.call(null,z);
} else
{return and__3822__auto____19352;
}
} else
{return and__3822__auto____19351;
}
})());
});
var ep1__4 = (function() { 
var G__19421__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19353 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19353))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____19353;
}
})());
};
var G__19421 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19421__delegate.call(this, x, y, z, args);
};
G__19421.cljs$lang$maxFixedArity = 3;
G__19421.cljs$lang$applyTo = (function (arglist__19422){
var x = cljs.core.first(arglist__19422);
var y = cljs.core.first(cljs.core.next(arglist__19422));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19422)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19422)));
return G__19421__delegate(x, y, z, args);
});
G__19421.cljs$lang$arity$variadic = G__19421__delegate;
return G__19421;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19365 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19365))
{return p2.call(null,x);
} else
{return and__3822__auto____19365;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19366 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19366))
{var and__3822__auto____19367 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19367))
{var and__3822__auto____19368 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19368))
{return p2.call(null,y);
} else
{return and__3822__auto____19368;
}
} else
{return and__3822__auto____19367;
}
} else
{return and__3822__auto____19366;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19369 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19369))
{var and__3822__auto____19370 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19370))
{var and__3822__auto____19371 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____19371))
{var and__3822__auto____19372 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19372))
{var and__3822__auto____19373 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19373))
{return p2.call(null,z);
} else
{return and__3822__auto____19373;
}
} else
{return and__3822__auto____19372;
}
} else
{return and__3822__auto____19371;
}
} else
{return and__3822__auto____19370;
}
} else
{return and__3822__auto____19369;
}
})());
});
var ep2__4 = (function() { 
var G__19423__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19374 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19374))
{return cljs.core.every_QMARK_.call(null,(function (p1__19220_SHARP_){
var and__3822__auto____19375 = p1.call(null,p1__19220_SHARP_);
if(cljs.core.truth_(and__3822__auto____19375))
{return p2.call(null,p1__19220_SHARP_);
} else
{return and__3822__auto____19375;
}
}),args);
} else
{return and__3822__auto____19374;
}
})());
};
var G__19423 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19423__delegate.call(this, x, y, z, args);
};
G__19423.cljs$lang$maxFixedArity = 3;
G__19423.cljs$lang$applyTo = (function (arglist__19424){
var x = cljs.core.first(arglist__19424);
var y = cljs.core.first(cljs.core.next(arglist__19424));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19424)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19424)));
return G__19423__delegate(x, y, z, args);
});
G__19423.cljs$lang$arity$variadic = G__19423__delegate;
return G__19423;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19394 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19394))
{var and__3822__auto____19395 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19395))
{return p3.call(null,x);
} else
{return and__3822__auto____19395;
}
} else
{return and__3822__auto____19394;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19396 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19396))
{var and__3822__auto____19397 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19397))
{var and__3822__auto____19398 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____19398))
{var and__3822__auto____19399 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19399))
{var and__3822__auto____19400 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19400))
{return p3.call(null,y);
} else
{return and__3822__auto____19400;
}
} else
{return and__3822__auto____19399;
}
} else
{return and__3822__auto____19398;
}
} else
{return and__3822__auto____19397;
}
} else
{return and__3822__auto____19396;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19401 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19401))
{var and__3822__auto____19402 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19402))
{var and__3822__auto____19403 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____19403))
{var and__3822__auto____19404 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19404))
{var and__3822__auto____19405 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19405))
{var and__3822__auto____19406 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____19406))
{var and__3822__auto____19407 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____19407))
{var and__3822__auto____19408 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____19408))
{return p3.call(null,z);
} else
{return and__3822__auto____19408;
}
} else
{return and__3822__auto____19407;
}
} else
{return and__3822__auto____19406;
}
} else
{return and__3822__auto____19405;
}
} else
{return and__3822__auto____19404;
}
} else
{return and__3822__auto____19403;
}
} else
{return and__3822__auto____19402;
}
} else
{return and__3822__auto____19401;
}
})());
});
var ep3__4 = (function() { 
var G__19425__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19409 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19409))
{return cljs.core.every_QMARK_.call(null,(function (p1__19221_SHARP_){
var and__3822__auto____19410 = p1.call(null,p1__19221_SHARP_);
if(cljs.core.truth_(and__3822__auto____19410))
{var and__3822__auto____19411 = p2.call(null,p1__19221_SHARP_);
if(cljs.core.truth_(and__3822__auto____19411))
{return p3.call(null,p1__19221_SHARP_);
} else
{return and__3822__auto____19411;
}
} else
{return and__3822__auto____19410;
}
}),args);
} else
{return and__3822__auto____19409;
}
})());
};
var G__19425 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19425__delegate.call(this, x, y, z, args);
};
G__19425.cljs$lang$maxFixedArity = 3;
G__19425.cljs$lang$applyTo = (function (arglist__19426){
var x = cljs.core.first(arglist__19426);
var y = cljs.core.first(cljs.core.next(arglist__19426));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19426)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19426)));
return G__19425__delegate(x, y, z, args);
});
G__19425.cljs$lang$arity$variadic = G__19425__delegate;
return G__19425;
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
var G__19427__delegate = function (p1,p2,p3,ps){
var ps__19412 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__19222_SHARP_){
return p1__19222_SHARP_.call(null,x);
}),ps__19412);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__19223_SHARP_){
var and__3822__auto____19417 = p1__19223_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____19417))
{return p1__19223_SHARP_.call(null,y);
} else
{return and__3822__auto____19417;
}
}),ps__19412);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__19224_SHARP_){
var and__3822__auto____19418 = p1__19224_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____19418))
{var and__3822__auto____19419 = p1__19224_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____19419))
{return p1__19224_SHARP_.call(null,z);
} else
{return and__3822__auto____19419;
}
} else
{return and__3822__auto____19418;
}
}),ps__19412);
});
var epn__4 = (function() { 
var G__19428__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19420 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19420))
{return cljs.core.every_QMARK_.call(null,(function (p1__19225_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__19225_SHARP_,args);
}),ps__19412);
} else
{return and__3822__auto____19420;
}
})());
};
var G__19428 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19428__delegate.call(this, x, y, z, args);
};
G__19428.cljs$lang$maxFixedArity = 3;
G__19428.cljs$lang$applyTo = (function (arglist__19429){
var x = cljs.core.first(arglist__19429);
var y = cljs.core.first(cljs.core.next(arglist__19429));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19429)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19429)));
return G__19428__delegate(x, y, z, args);
});
G__19428.cljs$lang$arity$variadic = G__19428__delegate;
return G__19428;
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
var G__19427 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19427__delegate.call(this, p1, p2, p3, ps);
};
G__19427.cljs$lang$maxFixedArity = 3;
G__19427.cljs$lang$applyTo = (function (arglist__19430){
var p1 = cljs.core.first(arglist__19430);
var p2 = cljs.core.first(cljs.core.next(arglist__19430));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19430)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19430)));
return G__19427__delegate(p1, p2, p3, ps);
});
G__19427.cljs$lang$arity$variadic = G__19427__delegate;
return G__19427;
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
var or__3824__auto____19511 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____19511))
{return or__3824__auto____19511;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____19512 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____19512))
{return or__3824__auto____19512;
} else
{var or__3824__auto____19513 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____19513))
{return or__3824__auto____19513;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__19582__delegate = function (x,y,z,args){
var or__3824__auto____19514 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19514))
{return or__3824__auto____19514;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__19582 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19582__delegate.call(this, x, y, z, args);
};
G__19582.cljs$lang$maxFixedArity = 3;
G__19582.cljs$lang$applyTo = (function (arglist__19583){
var x = cljs.core.first(arglist__19583);
var y = cljs.core.first(cljs.core.next(arglist__19583));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19583)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19583)));
return G__19582__delegate(x, y, z, args);
});
G__19582.cljs$lang$arity$variadic = G__19582__delegate;
return G__19582;
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
var or__3824__auto____19526 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19526))
{return or__3824__auto____19526;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____19527 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19527))
{return or__3824__auto____19527;
} else
{var or__3824__auto____19528 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19528))
{return or__3824__auto____19528;
} else
{var or__3824__auto____19529 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19529))
{return or__3824__auto____19529;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____19530 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19530))
{return or__3824__auto____19530;
} else
{var or__3824__auto____19531 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19531))
{return or__3824__auto____19531;
} else
{var or__3824__auto____19532 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____19532))
{return or__3824__auto____19532;
} else
{var or__3824__auto____19533 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19533))
{return or__3824__auto____19533;
} else
{var or__3824__auto____19534 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19534))
{return or__3824__auto____19534;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__19584__delegate = function (x,y,z,args){
var or__3824__auto____19535 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19535))
{return or__3824__auto____19535;
} else
{return cljs.core.some.call(null,(function (p1__19265_SHARP_){
var or__3824__auto____19536 = p1.call(null,p1__19265_SHARP_);
if(cljs.core.truth_(or__3824__auto____19536))
{return or__3824__auto____19536;
} else
{return p2.call(null,p1__19265_SHARP_);
}
}),args);
}
};
var G__19584 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19584__delegate.call(this, x, y, z, args);
};
G__19584.cljs$lang$maxFixedArity = 3;
G__19584.cljs$lang$applyTo = (function (arglist__19585){
var x = cljs.core.first(arglist__19585);
var y = cljs.core.first(cljs.core.next(arglist__19585));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19585)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19585)));
return G__19584__delegate(x, y, z, args);
});
G__19584.cljs$lang$arity$variadic = G__19584__delegate;
return G__19584;
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
var or__3824__auto____19555 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19555))
{return or__3824__auto____19555;
} else
{var or__3824__auto____19556 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19556))
{return or__3824__auto____19556;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____19557 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19557))
{return or__3824__auto____19557;
} else
{var or__3824__auto____19558 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19558))
{return or__3824__auto____19558;
} else
{var or__3824__auto____19559 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____19559))
{return or__3824__auto____19559;
} else
{var or__3824__auto____19560 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19560))
{return or__3824__auto____19560;
} else
{var or__3824__auto____19561 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19561))
{return or__3824__auto____19561;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____19562 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19562))
{return or__3824__auto____19562;
} else
{var or__3824__auto____19563 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19563))
{return or__3824__auto____19563;
} else
{var or__3824__auto____19564 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____19564))
{return or__3824__auto____19564;
} else
{var or__3824__auto____19565 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19565))
{return or__3824__auto____19565;
} else
{var or__3824__auto____19566 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19566))
{return or__3824__auto____19566;
} else
{var or__3824__auto____19567 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____19567))
{return or__3824__auto____19567;
} else
{var or__3824__auto____19568 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____19568))
{return or__3824__auto____19568;
} else
{var or__3824__auto____19569 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____19569))
{return or__3824__auto____19569;
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
var G__19586__delegate = function (x,y,z,args){
var or__3824__auto____19570 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19570))
{return or__3824__auto____19570;
} else
{return cljs.core.some.call(null,(function (p1__19266_SHARP_){
var or__3824__auto____19571 = p1.call(null,p1__19266_SHARP_);
if(cljs.core.truth_(or__3824__auto____19571))
{return or__3824__auto____19571;
} else
{var or__3824__auto____19572 = p2.call(null,p1__19266_SHARP_);
if(cljs.core.truth_(or__3824__auto____19572))
{return or__3824__auto____19572;
} else
{return p3.call(null,p1__19266_SHARP_);
}
}
}),args);
}
};
var G__19586 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19586__delegate.call(this, x, y, z, args);
};
G__19586.cljs$lang$maxFixedArity = 3;
G__19586.cljs$lang$applyTo = (function (arglist__19587){
var x = cljs.core.first(arglist__19587);
var y = cljs.core.first(cljs.core.next(arglist__19587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19587)));
return G__19586__delegate(x, y, z, args);
});
G__19586.cljs$lang$arity$variadic = G__19586__delegate;
return G__19586;
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
var G__19588__delegate = function (p1,p2,p3,ps){
var ps__19573 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__19267_SHARP_){
return p1__19267_SHARP_.call(null,x);
}),ps__19573);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__19268_SHARP_){
var or__3824__auto____19578 = p1__19268_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____19578))
{return or__3824__auto____19578;
} else
{return p1__19268_SHARP_.call(null,y);
}
}),ps__19573);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__19269_SHARP_){
var or__3824__auto____19579 = p1__19269_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____19579))
{return or__3824__auto____19579;
} else
{var or__3824__auto____19580 = p1__19269_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____19580))
{return or__3824__auto____19580;
} else
{return p1__19269_SHARP_.call(null,z);
}
}
}),ps__19573);
});
var spn__4 = (function() { 
var G__19589__delegate = function (x,y,z,args){
var or__3824__auto____19581 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19581))
{return or__3824__auto____19581;
} else
{return cljs.core.some.call(null,(function (p1__19270_SHARP_){
return cljs.core.some.call(null,p1__19270_SHARP_,args);
}),ps__19573);
}
};
var G__19589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19589__delegate.call(this, x, y, z, args);
};
G__19589.cljs$lang$maxFixedArity = 3;
G__19589.cljs$lang$applyTo = (function (arglist__19590){
var x = cljs.core.first(arglist__19590);
var y = cljs.core.first(cljs.core.next(arglist__19590));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19590)));
return G__19589__delegate(x, y, z, args);
});
G__19589.cljs$lang$arity$variadic = G__19589__delegate;
return G__19589;
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
var G__19588 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19588__delegate.call(this, p1, p2, p3, ps);
};
G__19588.cljs$lang$maxFixedArity = 3;
G__19588.cljs$lang$applyTo = (function (arglist__19591){
var p1 = cljs.core.first(arglist__19591);
var p2 = cljs.core.first(cljs.core.next(arglist__19591));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19591)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19591)));
return G__19588__delegate(p1, p2, p3, ps);
});
G__19588.cljs$lang$arity$variadic = G__19588__delegate;
return G__19588;
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
var temp__3974__auto____19610 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19610)
{var s__19611 = temp__3974__auto____19610;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19611))
{var c__19612 = cljs.core.chunk_first.call(null,s__19611);
var size__19613 = cljs.core.count.call(null,c__19612);
var b__19614 = cljs.core.chunk_buffer.call(null,size__19613);
var n__2644__auto____19615 = size__19613;
var i__19616 = 0;
while(true){
if((i__19616 < n__2644__auto____19615))
{cljs.core.chunk_append.call(null,b__19614,f.call(null,cljs.core._nth.call(null,c__19612,i__19616)));
{
var G__19628 = (i__19616 + 1);
i__19616 = G__19628;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19614),map.call(null,f,cljs.core.chunk_rest.call(null,s__19611)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__19611)),map.call(null,f,cljs.core.rest.call(null,s__19611)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__19617 = cljs.core.seq.call(null,c1);
var s2__19618 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____19619 = s1__19617;
if(and__3822__auto____19619)
{return s2__19618;
} else
{return and__3822__auto____19619;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__19617),cljs.core.first.call(null,s2__19618)),map.call(null,f,cljs.core.rest.call(null,s1__19617),cljs.core.rest.call(null,s2__19618)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__19620 = cljs.core.seq.call(null,c1);
var s2__19621 = cljs.core.seq.call(null,c2);
var s3__19622 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____19623 = s1__19620;
if(and__3822__auto____19623)
{var and__3822__auto____19624 = s2__19621;
if(and__3822__auto____19624)
{return s3__19622;
} else
{return and__3822__auto____19624;
}
} else
{return and__3822__auto____19623;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__19620),cljs.core.first.call(null,s2__19621),cljs.core.first.call(null,s3__19622)),map.call(null,f,cljs.core.rest.call(null,s1__19620),cljs.core.rest.call(null,s2__19621),cljs.core.rest.call(null,s3__19622)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__19629__delegate = function (f,c1,c2,c3,colls){
var step__19627 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__19626 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__19626))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__19626),step.call(null,map.call(null,cljs.core.rest,ss__19626)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__19431_SHARP_){
return cljs.core.apply.call(null,f,p1__19431_SHARP_);
}),step__19627.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__19629 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19629__delegate.call(this, f, c1, c2, c3, colls);
};
G__19629.cljs$lang$maxFixedArity = 4;
G__19629.cljs$lang$applyTo = (function (arglist__19630){
var f = cljs.core.first(arglist__19630);
var c1 = cljs.core.first(cljs.core.next(arglist__19630));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19630)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19630))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19630))));
return G__19629__delegate(f, c1, c2, c3, colls);
});
G__19629.cljs$lang$arity$variadic = G__19629__delegate;
return G__19629;
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
{var temp__3974__auto____19633 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19633)
{var s__19634 = temp__3974__auto____19633;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__19634),take.call(null,(n - 1),cljs.core.rest.call(null,s__19634)));
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
var step__19640 = (function (n,coll){
while(true){
var s__19638 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____19639 = (n > 0);
if(and__3822__auto____19639)
{return s__19638;
} else
{return and__3822__auto____19639;
}
})()))
{{
var G__19641 = (n - 1);
var G__19642 = cljs.core.rest.call(null,s__19638);
n = G__19641;
coll = G__19642;
continue;
}
} else
{return s__19638;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__19640.call(null,n,coll);
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
var s__19645 = cljs.core.seq.call(null,coll);
var lead__19646 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__19646)
{{
var G__19647 = cljs.core.next.call(null,s__19645);
var G__19648 = cljs.core.next.call(null,lead__19646);
s__19645 = G__19647;
lead__19646 = G__19648;
continue;
}
} else
{return s__19645;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__19654 = (function (pred,coll){
while(true){
var s__19652 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____19653 = s__19652;
if(and__3822__auto____19653)
{return pred.call(null,cljs.core.first.call(null,s__19652));
} else
{return and__3822__auto____19653;
}
})()))
{{
var G__19655 = pred;
var G__19656 = cljs.core.rest.call(null,s__19652);
pred = G__19655;
coll = G__19656;
continue;
}
} else
{return s__19652;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__19654.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19659 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19659)
{var s__19660 = temp__3974__auto____19659;
return cljs.core.concat.call(null,s__19660,cycle.call(null,s__19660));
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
var s1__19665 = cljs.core.seq.call(null,c1);
var s2__19666 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____19667 = s1__19665;
if(and__3822__auto____19667)
{return s2__19666;
} else
{return and__3822__auto____19667;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__19665),cljs.core.cons.call(null,cljs.core.first.call(null,s2__19666),interleave.call(null,cljs.core.rest.call(null,s1__19665),cljs.core.rest.call(null,s2__19666))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__19669__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__19668 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__19668))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__19668),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__19668)));
} else
{return null;
}
}),null));
};
var G__19669 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19669__delegate.call(this, c1, c2, colls);
};
G__19669.cljs$lang$maxFixedArity = 2;
G__19669.cljs$lang$applyTo = (function (arglist__19670){
var c1 = cljs.core.first(arglist__19670);
var c2 = cljs.core.first(cljs.core.next(arglist__19670));
var colls = cljs.core.rest(cljs.core.next(arglist__19670));
return G__19669__delegate(c1, c2, colls);
});
G__19669.cljs$lang$arity$variadic = G__19669__delegate;
return G__19669;
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
var cat__19680 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____19678 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____19678)
{var coll__19679 = temp__3971__auto____19678;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__19679),cat.call(null,cljs.core.rest.call(null,coll__19679),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__19680.call(null,null,colls);
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
var G__19681__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__19681 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19681__delegate.call(this, f, coll, colls);
};
G__19681.cljs$lang$maxFixedArity = 2;
G__19681.cljs$lang$applyTo = (function (arglist__19682){
var f = cljs.core.first(arglist__19682);
var coll = cljs.core.first(cljs.core.next(arglist__19682));
var colls = cljs.core.rest(cljs.core.next(arglist__19682));
return G__19681__delegate(f, coll, colls);
});
G__19681.cljs$lang$arity$variadic = G__19681__delegate;
return G__19681;
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
var temp__3974__auto____19692 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19692)
{var s__19693 = temp__3974__auto____19692;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19693))
{var c__19694 = cljs.core.chunk_first.call(null,s__19693);
var size__19695 = cljs.core.count.call(null,c__19694);
var b__19696 = cljs.core.chunk_buffer.call(null,size__19695);
var n__2644__auto____19697 = size__19695;
var i__19698 = 0;
while(true){
if((i__19698 < n__2644__auto____19697))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__19694,i__19698))))
{cljs.core.chunk_append.call(null,b__19696,cljs.core._nth.call(null,c__19694,i__19698));
} else
{}
{
var G__19701 = (i__19698 + 1);
i__19698 = G__19701;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19696),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__19693)));
} else
{var f__19699 = cljs.core.first.call(null,s__19693);
var r__19700 = cljs.core.rest.call(null,s__19693);
if(cljs.core.truth_(pred.call(null,f__19699)))
{return cljs.core.cons.call(null,f__19699,filter.call(null,pred,r__19700));
} else
{return filter.call(null,pred,r__19700);
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
var walk__19704 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__19704.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__19702_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__19702_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__19708__19709 = to;
if(G__19708__19709)
{if((function (){var or__3824__auto____19710 = (G__19708__19709.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____19710)
{return or__3824__auto____19710;
} else
{return G__19708__19709.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__19708__19709.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__19708__19709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__19708__19709);
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
var G__19711__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__19711 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19711__delegate.call(this, f, c1, c2, c3, colls);
};
G__19711.cljs$lang$maxFixedArity = 4;
G__19711.cljs$lang$applyTo = (function (arglist__19712){
var f = cljs.core.first(arglist__19712);
var c1 = cljs.core.first(cljs.core.next(arglist__19712));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19712)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19712))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19712))));
return G__19711__delegate(f, c1, c2, c3, colls);
});
G__19711.cljs$lang$arity$variadic = G__19711__delegate;
return G__19711;
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
var temp__3974__auto____19719 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19719)
{var s__19720 = temp__3974__auto____19719;
var p__19721 = cljs.core.take.call(null,n,s__19720);
if((n === cljs.core.count.call(null,p__19721)))
{return cljs.core.cons.call(null,p__19721,partition.call(null,n,step,cljs.core.drop.call(null,step,s__19720)));
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
var temp__3974__auto____19722 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19722)
{var s__19723 = temp__3974__auto____19722;
var p__19724 = cljs.core.take.call(null,n,s__19723);
if((n === cljs.core.count.call(null,p__19724)))
{return cljs.core.cons.call(null,p__19724,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__19723)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__19724,pad)));
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
var sentinel__19729 = cljs.core.lookup_sentinel;
var m__19730 = m;
var ks__19731 = cljs.core.seq.call(null,ks);
while(true){
if(ks__19731)
{var m__19732 = cljs.core._lookup.call(null,m__19730,cljs.core.first.call(null,ks__19731),sentinel__19729);
if((sentinel__19729 === m__19732))
{return not_found;
} else
{{
var G__19733 = sentinel__19729;
var G__19734 = m__19732;
var G__19735 = cljs.core.next.call(null,ks__19731);
sentinel__19729 = G__19733;
m__19730 = G__19734;
ks__19731 = G__19735;
continue;
}
}
} else
{return m__19730;
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
cljs.core.assoc_in = (function assoc_in(m,p__19736,v){
var vec__19741__19742 = p__19736;
var k__19743 = cljs.core.nth.call(null,vec__19741__19742,0,null);
var ks__19744 = cljs.core.nthnext.call(null,vec__19741__19742,1);
if(cljs.core.truth_(ks__19744))
{return cljs.core.assoc.call(null,m,k__19743,assoc_in.call(null,cljs.core._lookup.call(null,m,k__19743,null),ks__19744,v));
} else
{return cljs.core.assoc.call(null,m,k__19743,v);
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
var update_in__delegate = function (m,p__19745,f,args){
var vec__19750__19751 = p__19745;
var k__19752 = cljs.core.nth.call(null,vec__19750__19751,0,null);
var ks__19753 = cljs.core.nthnext.call(null,vec__19750__19751,1);
if(cljs.core.truth_(ks__19753))
{return cljs.core.assoc.call(null,m,k__19752,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__19752,null),ks__19753,f,args));
} else
{return cljs.core.assoc.call(null,m,k__19752,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__19752,null),args));
}
};
var update_in = function (m,p__19745,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__19745, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__19754){
var m = cljs.core.first(arglist__19754);
var p__19745 = cljs.core.first(cljs.core.next(arglist__19754));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19754)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19754)));
return update_in__delegate(m, p__19745, f, args);
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
var this__19757 = this;
var h__2309__auto____19758 = this__19757.__hash;
if(!((h__2309__auto____19758 == null)))
{return h__2309__auto____19758;
} else
{var h__2309__auto____19759 = cljs.core.hash_coll.call(null,coll);
this__19757.__hash = h__2309__auto____19759;
return h__2309__auto____19759;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19760 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19761 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19762 = this;
var new_array__19763 = this__19762.array.slice();
(new_array__19763[k] = v);
return (new cljs.core.Vector(this__19762.meta,new_array__19763,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__19794 = null;
var G__19794__2 = (function (this_sym19764,k){
var this__19766 = this;
var this_sym19764__19767 = this;
var coll__19768 = this_sym19764__19767;
return coll__19768.cljs$core$ILookup$_lookup$arity$2(coll__19768,k);
});
var G__19794__3 = (function (this_sym19765,k,not_found){
var this__19766 = this;
var this_sym19765__19769 = this;
var coll__19770 = this_sym19765__19769;
return coll__19770.cljs$core$ILookup$_lookup$arity$3(coll__19770,k,not_found);
});
G__19794 = function(this_sym19765,k,not_found){
switch(arguments.length){
case 2:
return G__19794__2.call(this,this_sym19765,k);
case 3:
return G__19794__3.call(this,this_sym19765,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19794;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym19755,args19756){
var this__19771 = this;
return this_sym19755.call.apply(this_sym19755,[this_sym19755].concat(args19756.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19772 = this;
var new_array__19773 = this__19772.array.slice();
new_array__19773.push(o);
return (new cljs.core.Vector(this__19772.meta,new_array__19773,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__19774 = this;
var this__19775 = this;
return cljs.core.pr_str.call(null,this__19775);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__19776 = this;
return cljs.core.ci_reduce.call(null,this__19776.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__19777 = this;
return cljs.core.ci_reduce.call(null,this__19777.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19778 = this;
if((this__19778.array.length > 0))
{var vector_seq__19779 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__19778.array.length))
{return cljs.core.cons.call(null,(this__19778.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__19779.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19780 = this;
return this__19780.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19781 = this;
var count__19782 = this__19781.array.length;
if((count__19782 > 0))
{return (this__19781.array[(count__19782 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19783 = this;
if((this__19783.array.length > 0))
{var new_array__19784 = this__19783.array.slice();
new_array__19784.pop();
return (new cljs.core.Vector(this__19783.meta,new_array__19784,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19785 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19786 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19787 = this;
return (new cljs.core.Vector(meta,this__19787.array,this__19787.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19788 = this;
return this__19788.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19789 = this;
if((function (){var and__3822__auto____19790 = (0 <= n);
if(and__3822__auto____19790)
{return (n < this__19789.array.length);
} else
{return and__3822__auto____19790;
}
})())
{return (this__19789.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19791 = this;
if((function (){var and__3822__auto____19792 = (0 <= n);
if(and__3822__auto____19792)
{return (n < this__19791.array.length);
} else
{return and__3822__auto____19792;
}
})())
{return (this__19791.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19793 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__19793.meta);
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
var cnt__19796 = pv.cnt;
if((cnt__19796 < 32))
{return 0;
} else
{return (((cnt__19796 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__19802 = level;
var ret__19803 = node;
while(true){
if((ll__19802 === 0))
{return ret__19803;
} else
{var embed__19804 = ret__19803;
var r__19805 = cljs.core.pv_fresh_node.call(null,edit);
var ___19806 = cljs.core.pv_aset.call(null,r__19805,0,embed__19804);
{
var G__19807 = (ll__19802 - 5);
var G__19808 = r__19805;
ll__19802 = G__19807;
ret__19803 = G__19808;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__19814 = cljs.core.pv_clone_node.call(null,parent);
var subidx__19815 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__19814,subidx__19815,tailnode);
return ret__19814;
} else
{var child__19816 = cljs.core.pv_aget.call(null,parent,subidx__19815);
if(!((child__19816 == null)))
{var node_to_insert__19817 = push_tail.call(null,pv,(level - 5),child__19816,tailnode);
cljs.core.pv_aset.call(null,ret__19814,subidx__19815,node_to_insert__19817);
return ret__19814;
} else
{var node_to_insert__19818 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__19814,subidx__19815,node_to_insert__19818);
return ret__19814;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____19822 = (0 <= i);
if(and__3822__auto____19822)
{return (i < pv.cnt);
} else
{return and__3822__auto____19822;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__19823 = pv.root;
var level__19824 = pv.shift;
while(true){
if((level__19824 > 0))
{{
var G__19825 = cljs.core.pv_aget.call(null,node__19823,((i >>> level__19824) & 31));
var G__19826 = (level__19824 - 5);
node__19823 = G__19825;
level__19824 = G__19826;
continue;
}
} else
{return node__19823.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__19829 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__19829,(i & 31),val);
return ret__19829;
} else
{var subidx__19830 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__19829,subidx__19830,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__19830),i,val));
return ret__19829;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__19836 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__19837 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__19836));
if((function (){var and__3822__auto____19838 = (new_child__19837 == null);
if(and__3822__auto____19838)
{return (subidx__19836 === 0);
} else
{return and__3822__auto____19838;
}
})())
{return null;
} else
{var ret__19839 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__19839,subidx__19836,new_child__19837);
return ret__19839;
}
} else
{if((subidx__19836 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__19840 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__19840,subidx__19836,null);
return ret__19840;
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
var this__19843 = this;
return (new cljs.core.TransientVector(this__19843.cnt,this__19843.shift,cljs.core.tv_editable_root.call(null,this__19843.root),cljs.core.tv_editable_tail.call(null,this__19843.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19844 = this;
var h__2309__auto____19845 = this__19844.__hash;
if(!((h__2309__auto____19845 == null)))
{return h__2309__auto____19845;
} else
{var h__2309__auto____19846 = cljs.core.hash_coll.call(null,coll);
this__19844.__hash = h__2309__auto____19846;
return h__2309__auto____19846;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19847 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19848 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19849 = this;
if((function (){var and__3822__auto____19850 = (0 <= k);
if(and__3822__auto____19850)
{return (k < this__19849.cnt);
} else
{return and__3822__auto____19850;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__19851 = this__19849.tail.slice();
(new_tail__19851[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__19849.meta,this__19849.cnt,this__19849.shift,this__19849.root,new_tail__19851,null));
} else
{return (new cljs.core.PersistentVector(this__19849.meta,this__19849.cnt,this__19849.shift,cljs.core.do_assoc.call(null,coll,this__19849.shift,this__19849.root,k,v),this__19849.tail,null));
}
} else
{if((k === this__19849.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__19849.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__19899 = null;
var G__19899__2 = (function (this_sym19852,k){
var this__19854 = this;
var this_sym19852__19855 = this;
var coll__19856 = this_sym19852__19855;
return coll__19856.cljs$core$ILookup$_lookup$arity$2(coll__19856,k);
});
var G__19899__3 = (function (this_sym19853,k,not_found){
var this__19854 = this;
var this_sym19853__19857 = this;
var coll__19858 = this_sym19853__19857;
return coll__19858.cljs$core$ILookup$_lookup$arity$3(coll__19858,k,not_found);
});
G__19899 = function(this_sym19853,k,not_found){
switch(arguments.length){
case 2:
return G__19899__2.call(this,this_sym19853,k);
case 3:
return G__19899__3.call(this,this_sym19853,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19899;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym19841,args19842){
var this__19859 = this;
return this_sym19841.call.apply(this_sym19841,[this_sym19841].concat(args19842.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__19860 = this;
var step_init__19861 = [0,init];
var i__19862 = 0;
while(true){
if((i__19862 < this__19860.cnt))
{var arr__19863 = cljs.core.array_for.call(null,v,i__19862);
var len__19864 = arr__19863.length;
var init__19868 = (function (){var j__19865 = 0;
var init__19866 = (step_init__19861[1]);
while(true){
if((j__19865 < len__19864))
{var init__19867 = f.call(null,init__19866,(j__19865 + i__19862),(arr__19863[j__19865]));
if(cljs.core.reduced_QMARK_.call(null,init__19867))
{return init__19867;
} else
{{
var G__19900 = (j__19865 + 1);
var G__19901 = init__19867;
j__19865 = G__19900;
init__19866 = G__19901;
continue;
}
}
} else
{(step_init__19861[0] = len__19864);
(step_init__19861[1] = init__19866);
return init__19866;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__19868))
{return cljs.core.deref.call(null,init__19868);
} else
{{
var G__19902 = (i__19862 + (step_init__19861[0]));
i__19862 = G__19902;
continue;
}
}
} else
{return (step_init__19861[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19869 = this;
if(((this__19869.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__19870 = this__19869.tail.slice();
new_tail__19870.push(o);
return (new cljs.core.PersistentVector(this__19869.meta,(this__19869.cnt + 1),this__19869.shift,this__19869.root,new_tail__19870,null));
} else
{var root_overflow_QMARK___19871 = ((this__19869.cnt >>> 5) > (1 << this__19869.shift));
var new_shift__19872 = ((root_overflow_QMARK___19871)?(this__19869.shift + 5):this__19869.shift);
var new_root__19874 = ((root_overflow_QMARK___19871)?(function (){var n_r__19873 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__19873,0,this__19869.root);
cljs.core.pv_aset.call(null,n_r__19873,1,cljs.core.new_path.call(null,null,this__19869.shift,(new cljs.core.VectorNode(null,this__19869.tail))));
return n_r__19873;
})():cljs.core.push_tail.call(null,coll,this__19869.shift,this__19869.root,(new cljs.core.VectorNode(null,this__19869.tail))));
return (new cljs.core.PersistentVector(this__19869.meta,(this__19869.cnt + 1),new_shift__19872,new_root__19874,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19875 = this;
if((this__19875.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__19875.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__19876 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__19877 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__19878 = this;
var this__19879 = this;
return cljs.core.pr_str.call(null,this__19879);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__19880 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__19881 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19882 = this;
if((this__19882.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19883 = this;
return this__19883.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19884 = this;
if((this__19884.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__19884.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19885 = this;
if((this__19885.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__19885.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19885.meta);
} else
{if((1 < (this__19885.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__19885.meta,(this__19885.cnt - 1),this__19885.shift,this__19885.root,this__19885.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__19886 = cljs.core.array_for.call(null,coll,(this__19885.cnt - 2));
var nr__19887 = cljs.core.pop_tail.call(null,coll,this__19885.shift,this__19885.root);
var new_root__19888 = (((nr__19887 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__19887);
var cnt_1__19889 = (this__19885.cnt - 1);
if((function (){var and__3822__auto____19890 = (5 < this__19885.shift);
if(and__3822__auto____19890)
{return (cljs.core.pv_aget.call(null,new_root__19888,1) == null);
} else
{return and__3822__auto____19890;
}
})())
{return (new cljs.core.PersistentVector(this__19885.meta,cnt_1__19889,(this__19885.shift - 5),cljs.core.pv_aget.call(null,new_root__19888,0),new_tail__19886,null));
} else
{return (new cljs.core.PersistentVector(this__19885.meta,cnt_1__19889,this__19885.shift,new_root__19888,new_tail__19886,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19891 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19892 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19893 = this;
return (new cljs.core.PersistentVector(meta,this__19893.cnt,this__19893.shift,this__19893.root,this__19893.tail,this__19893.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19894 = this;
return this__19894.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19895 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19896 = this;
if((function (){var and__3822__auto____19897 = (0 <= n);
if(and__3822__auto____19897)
{return (n < this__19896.cnt);
} else
{return and__3822__auto____19897;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19898 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19898.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__19903 = xs.length;
var xs__19904 = (((no_clone === true))?xs:xs.slice());
if((l__19903 < 32))
{return (new cljs.core.PersistentVector(null,l__19903,5,cljs.core.PersistentVector.EMPTY_NODE,xs__19904,null));
} else
{var node__19905 = xs__19904.slice(0,32);
var v__19906 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__19905,null));
var i__19907 = 32;
var out__19908 = cljs.core._as_transient.call(null,v__19906);
while(true){
if((i__19907 < l__19903))
{{
var G__19909 = (i__19907 + 1);
var G__19910 = cljs.core.conj_BANG_.call(null,out__19908,(xs__19904[i__19907]));
i__19907 = G__19909;
out__19908 = G__19910;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19908);
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
vector.cljs$lang$applyTo = (function (arglist__19911){
var args = cljs.core.seq(arglist__19911);;
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
var this__19912 = this;
if(((this__19912.off + 1) < this__19912.node.length))
{var s__19913 = cljs.core.chunked_seq.call(null,this__19912.vec,this__19912.node,this__19912.i,(this__19912.off + 1));
if((s__19913 == null))
{return null;
} else
{return s__19913;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19914 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19915 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19916 = this;
return (this__19916.node[this__19916.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19917 = this;
if(((this__19917.off + 1) < this__19917.node.length))
{var s__19918 = cljs.core.chunked_seq.call(null,this__19917.vec,this__19917.node,this__19917.i,(this__19917.off + 1));
if((s__19918 == null))
{return cljs.core.List.EMPTY;
} else
{return s__19918;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__19919 = this;
var l__19920 = this__19919.node.length;
var s__19921 = ((((this__19919.i + l__19920) < cljs.core._count.call(null,this__19919.vec)))?cljs.core.chunked_seq.call(null,this__19919.vec,(this__19919.i + l__19920),0):null);
if((s__19921 == null))
{return null;
} else
{return s__19921;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19922 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__19923 = this;
return cljs.core.chunked_seq.call(null,this__19923.vec,this__19923.node,this__19923.i,this__19923.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__19924 = this;
return this__19924.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19925 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19925.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__19926 = this;
return cljs.core.array_chunk.call(null,this__19926.node,this__19926.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__19927 = this;
var l__19928 = this__19927.node.length;
var s__19929 = ((((this__19927.i + l__19928) < cljs.core._count.call(null,this__19927.vec)))?cljs.core.chunked_seq.call(null,this__19927.vec,(this__19927.i + l__19928),0):null);
if((s__19929 == null))
{return cljs.core.List.EMPTY;
} else
{return s__19929;
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
var this__19932 = this;
var h__2309__auto____19933 = this__19932.__hash;
if(!((h__2309__auto____19933 == null)))
{return h__2309__auto____19933;
} else
{var h__2309__auto____19934 = cljs.core.hash_coll.call(null,coll);
this__19932.__hash = h__2309__auto____19934;
return h__2309__auto____19934;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19935 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19936 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__19937 = this;
var v_pos__19938 = (this__19937.start + key);
return (new cljs.core.Subvec(this__19937.meta,cljs.core._assoc.call(null,this__19937.v,v_pos__19938,val),this__19937.start,((this__19937.end > (v_pos__19938 + 1)) ? this__19937.end : (v_pos__19938 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__19964 = null;
var G__19964__2 = (function (this_sym19939,k){
var this__19941 = this;
var this_sym19939__19942 = this;
var coll__19943 = this_sym19939__19942;
return coll__19943.cljs$core$ILookup$_lookup$arity$2(coll__19943,k);
});
var G__19964__3 = (function (this_sym19940,k,not_found){
var this__19941 = this;
var this_sym19940__19944 = this;
var coll__19945 = this_sym19940__19944;
return coll__19945.cljs$core$ILookup$_lookup$arity$3(coll__19945,k,not_found);
});
G__19964 = function(this_sym19940,k,not_found){
switch(arguments.length){
case 2:
return G__19964__2.call(this,this_sym19940,k);
case 3:
return G__19964__3.call(this,this_sym19940,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19964;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym19930,args19931){
var this__19946 = this;
return this_sym19930.call.apply(this_sym19930,[this_sym19930].concat(args19931.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19947 = this;
return (new cljs.core.Subvec(this__19947.meta,cljs.core._assoc_n.call(null,this__19947.v,this__19947.end,o),this__19947.start,(this__19947.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__19948 = this;
var this__19949 = this;
return cljs.core.pr_str.call(null,this__19949);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__19950 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__19951 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19952 = this;
var subvec_seq__19953 = (function subvec_seq(i){
if((i === this__19952.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__19952.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__19953.call(null,this__19952.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19954 = this;
return (this__19954.end - this__19954.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19955 = this;
return cljs.core._nth.call(null,this__19955.v,(this__19955.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19956 = this;
if((this__19956.start === this__19956.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__19956.meta,this__19956.v,this__19956.start,(this__19956.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19957 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19959 = this;
return (new cljs.core.Subvec(meta,this__19959.v,this__19959.start,this__19959.end,this__19959.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19960 = this;
return this__19960.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19961 = this;
return cljs.core._nth.call(null,this__19961.v,(this__19961.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19962 = this;
return cljs.core._nth.call(null,this__19962.v,(this__19962.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19963 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__19963.meta);
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
var ret__19966 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__19966,0,tl.length);
return ret__19966;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__19970 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__19971 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__19970,subidx__19971,(((level === 5))?tail_node:(function (){var child__19972 = cljs.core.pv_aget.call(null,ret__19970,subidx__19971);
if(!((child__19972 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__19972,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__19970;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__19977 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__19978 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__19979 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__19977,subidx__19978));
if((function (){var and__3822__auto____19980 = (new_child__19979 == null);
if(and__3822__auto____19980)
{return (subidx__19978 === 0);
} else
{return and__3822__auto____19980;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__19977,subidx__19978,new_child__19979);
return node__19977;
}
} else
{if((subidx__19978 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__19977,subidx__19978,null);
return node__19977;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____19985 = (0 <= i);
if(and__3822__auto____19985)
{return (i < tv.cnt);
} else
{return and__3822__auto____19985;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__19986 = tv.root;
var node__19987 = root__19986;
var level__19988 = tv.shift;
while(true){
if((level__19988 > 0))
{{
var G__19989 = cljs.core.tv_ensure_editable.call(null,root__19986.edit,cljs.core.pv_aget.call(null,node__19987,((i >>> level__19988) & 31)));
var G__19990 = (level__19988 - 5);
node__19987 = G__19989;
level__19988 = G__19990;
continue;
}
} else
{return node__19987.arr;
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
var G__20030 = null;
var G__20030__2 = (function (this_sym19993,k){
var this__19995 = this;
var this_sym19993__19996 = this;
var coll__19997 = this_sym19993__19996;
return coll__19997.cljs$core$ILookup$_lookup$arity$2(coll__19997,k);
});
var G__20030__3 = (function (this_sym19994,k,not_found){
var this__19995 = this;
var this_sym19994__19998 = this;
var coll__19999 = this_sym19994__19998;
return coll__19999.cljs$core$ILookup$_lookup$arity$3(coll__19999,k,not_found);
});
G__20030 = function(this_sym19994,k,not_found){
switch(arguments.length){
case 2:
return G__20030__2.call(this,this_sym19994,k);
case 3:
return G__20030__3.call(this,this_sym19994,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20030;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym19991,args19992){
var this__20000 = this;
return this_sym19991.call.apply(this_sym19991,[this_sym19991].concat(args19992.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20001 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20002 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__20003 = this;
if(this__20003.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__20004 = this;
if((function (){var and__3822__auto____20005 = (0 <= n);
if(and__3822__auto____20005)
{return (n < this__20004.cnt);
} else
{return and__3822__auto____20005;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20006 = this;
if(this__20006.root.edit)
{return this__20006.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__20007 = this;
if(this__20007.root.edit)
{if((function (){var and__3822__auto____20008 = (0 <= n);
if(and__3822__auto____20008)
{return (n < this__20007.cnt);
} else
{return and__3822__auto____20008;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__20007.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__20013 = (function go(level,node){
var node__20011 = cljs.core.tv_ensure_editable.call(null,this__20007.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__20011,(n & 31),val);
return node__20011;
} else
{var subidx__20012 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__20011,subidx__20012,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__20011,subidx__20012)));
return node__20011;
}
}).call(null,this__20007.shift,this__20007.root);
this__20007.root = new_root__20013;
return tcoll;
}
} else
{if((n === this__20007.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__20007.cnt)].join('')));
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
var this__20014 = this;
if(this__20014.root.edit)
{if((this__20014.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__20014.cnt))
{this__20014.cnt = 0;
return tcoll;
} else
{if((((this__20014.cnt - 1) & 31) > 0))
{this__20014.cnt = (this__20014.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__20015 = cljs.core.editable_array_for.call(null,tcoll,(this__20014.cnt - 2));
var new_root__20017 = (function (){var nr__20016 = cljs.core.tv_pop_tail.call(null,tcoll,this__20014.shift,this__20014.root);
if(!((nr__20016 == null)))
{return nr__20016;
} else
{return (new cljs.core.VectorNode(this__20014.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____20018 = (5 < this__20014.shift);
if(and__3822__auto____20018)
{return (cljs.core.pv_aget.call(null,new_root__20017,1) == null);
} else
{return and__3822__auto____20018;
}
})())
{var new_root__20019 = cljs.core.tv_ensure_editable.call(null,this__20014.root.edit,cljs.core.pv_aget.call(null,new_root__20017,0));
this__20014.root = new_root__20019;
this__20014.shift = (this__20014.shift - 5);
this__20014.cnt = (this__20014.cnt - 1);
this__20014.tail = new_tail__20015;
return tcoll;
} else
{this__20014.root = new_root__20017;
this__20014.cnt = (this__20014.cnt - 1);
this__20014.tail = new_tail__20015;
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
var this__20020 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__20021 = this;
if(this__20021.root.edit)
{if(((this__20021.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__20021.tail[(this__20021.cnt & 31)] = o);
this__20021.cnt = (this__20021.cnt + 1);
return tcoll;
} else
{var tail_node__20022 = (new cljs.core.VectorNode(this__20021.root.edit,this__20021.tail));
var new_tail__20023 = cljs.core.make_array.call(null,32);
(new_tail__20023[0] = o);
this__20021.tail = new_tail__20023;
if(((this__20021.cnt >>> 5) > (1 << this__20021.shift)))
{var new_root_array__20024 = cljs.core.make_array.call(null,32);
var new_shift__20025 = (this__20021.shift + 5);
(new_root_array__20024[0] = this__20021.root);
(new_root_array__20024[1] = cljs.core.new_path.call(null,this__20021.root.edit,this__20021.shift,tail_node__20022));
this__20021.root = (new cljs.core.VectorNode(this__20021.root.edit,new_root_array__20024));
this__20021.shift = new_shift__20025;
this__20021.cnt = (this__20021.cnt + 1);
return tcoll;
} else
{var new_root__20026 = cljs.core.tv_push_tail.call(null,tcoll,this__20021.shift,this__20021.root,tail_node__20022);
this__20021.root = new_root__20026;
this__20021.cnt = (this__20021.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20027 = this;
if(this__20027.root.edit)
{this__20027.root.edit = null;
var len__20028 = (this__20027.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__20029 = cljs.core.make_array.call(null,len__20028);
cljs.core.array_copy.call(null,this__20027.tail,0,trimmed_tail__20029,0,len__20028);
return (new cljs.core.PersistentVector(null,this__20027.cnt,this__20027.shift,this__20027.root,trimmed_tail__20029,null));
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
var this__20031 = this;
var h__2309__auto____20032 = this__20031.__hash;
if(!((h__2309__auto____20032 == null)))
{return h__2309__auto____20032;
} else
{var h__2309__auto____20033 = cljs.core.hash_coll.call(null,coll);
this__20031.__hash = h__2309__auto____20033;
return h__2309__auto____20033;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20034 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__20035 = this;
var this__20036 = this;
return cljs.core.pr_str.call(null,this__20036);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20037 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20038 = this;
return cljs.core._first.call(null,this__20038.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20039 = this;
var temp__3971__auto____20040 = cljs.core.next.call(null,this__20039.front);
if(temp__3971__auto____20040)
{var f1__20041 = temp__3971__auto____20040;
return (new cljs.core.PersistentQueueSeq(this__20039.meta,f1__20041,this__20039.rear,null));
} else
{if((this__20039.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__20039.meta,this__20039.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20042 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20043 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__20043.front,this__20043.rear,this__20043.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20044 = this;
return this__20044.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20045 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20045.meta);
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
var this__20046 = this;
var h__2309__auto____20047 = this__20046.__hash;
if(!((h__2309__auto____20047 == null)))
{return h__2309__auto____20047;
} else
{var h__2309__auto____20048 = cljs.core.hash_coll.call(null,coll);
this__20046.__hash = h__2309__auto____20048;
return h__2309__auto____20048;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20049 = this;
if(cljs.core.truth_(this__20049.front))
{return (new cljs.core.PersistentQueue(this__20049.meta,(this__20049.count + 1),this__20049.front,cljs.core.conj.call(null,(function (){var or__3824__auto____20050 = this__20049.rear;
if(cljs.core.truth_(or__3824__auto____20050))
{return or__3824__auto____20050;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__20049.meta,(this__20049.count + 1),cljs.core.conj.call(null,this__20049.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__20051 = this;
var this__20052 = this;
return cljs.core.pr_str.call(null,this__20052);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20053 = this;
var rear__20054 = cljs.core.seq.call(null,this__20053.rear);
if(cljs.core.truth_((function (){var or__3824__auto____20055 = this__20053.front;
if(cljs.core.truth_(or__3824__auto____20055))
{return or__3824__auto____20055;
} else
{return rear__20054;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__20053.front,cljs.core.seq.call(null,rear__20054),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20056 = this;
return this__20056.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__20057 = this;
return cljs.core._first.call(null,this__20057.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__20058 = this;
if(cljs.core.truth_(this__20058.front))
{var temp__3971__auto____20059 = cljs.core.next.call(null,this__20058.front);
if(temp__3971__auto____20059)
{var f1__20060 = temp__3971__auto____20059;
return (new cljs.core.PersistentQueue(this__20058.meta,(this__20058.count - 1),f1__20060,this__20058.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__20058.meta,(this__20058.count - 1),cljs.core.seq.call(null,this__20058.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20061 = this;
return cljs.core.first.call(null,this__20061.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20062 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20063 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20064 = this;
return (new cljs.core.PersistentQueue(meta,this__20064.count,this__20064.front,this__20064.rear,this__20064.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20065 = this;
return this__20065.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20066 = this;
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
var this__20067 = this;
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
var len__20070 = array.length;
var i__20071 = 0;
while(true){
if((i__20071 < len__20070))
{if((k === (array[i__20071])))
{return i__20071;
} else
{{
var G__20072 = (i__20071 + incr);
i__20071 = G__20072;
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
var a__20075 = cljs.core.hash.call(null,a);
var b__20076 = cljs.core.hash.call(null,b);
if((a__20075 < b__20076))
{return -1;
} else
{if((a__20075 > b__20076))
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
var ks__20084 = m.keys;
var len__20085 = ks__20084.length;
var so__20086 = m.strobj;
var out__20087 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__20088 = 0;
var out__20089 = cljs.core.transient$.call(null,out__20087);
while(true){
if((i__20088 < len__20085))
{var k__20090 = (ks__20084[i__20088]);
{
var G__20091 = (i__20088 + 1);
var G__20092 = cljs.core.assoc_BANG_.call(null,out__20089,k__20090,(so__20086[k__20090]));
i__20088 = G__20091;
out__20089 = G__20092;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__20089,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__20098 = {};
var l__20099 = ks.length;
var i__20100 = 0;
while(true){
if((i__20100 < l__20099))
{var k__20101 = (ks[i__20100]);
(new_obj__20098[k__20101] = (obj[k__20101]));
{
var G__20102 = (i__20100 + 1);
i__20100 = G__20102;
continue;
}
} else
{}
break;
}
return new_obj__20098;
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
var this__20105 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20106 = this;
var h__2309__auto____20107 = this__20106.__hash;
if(!((h__2309__auto____20107 == null)))
{return h__2309__auto____20107;
} else
{var h__2309__auto____20108 = cljs.core.hash_imap.call(null,coll);
this__20106.__hash = h__2309__auto____20108;
return h__2309__auto____20108;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20109 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20110 = this;
if((function (){var and__3822__auto____20111 = goog.isString(k);
if(and__3822__auto____20111)
{return !((cljs.core.scan_array.call(null,1,k,this__20110.keys) == null));
} else
{return and__3822__auto____20111;
}
})())
{return (this__20110.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20112 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____20113 = (this__20112.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____20113)
{return or__3824__auto____20113;
} else
{return (this__20112.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__20112.keys) == null)))
{var new_strobj__20114 = cljs.core.obj_clone.call(null,this__20112.strobj,this__20112.keys);
(new_strobj__20114[k] = v);
return (new cljs.core.ObjMap(this__20112.meta,this__20112.keys,new_strobj__20114,(this__20112.update_count + 1),null));
} else
{var new_strobj__20115 = cljs.core.obj_clone.call(null,this__20112.strobj,this__20112.keys);
var new_keys__20116 = this__20112.keys.slice();
(new_strobj__20115[k] = v);
new_keys__20116.push(k);
return (new cljs.core.ObjMap(this__20112.meta,new_keys__20116,new_strobj__20115,(this__20112.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20117 = this;
if((function (){var and__3822__auto____20118 = goog.isString(k);
if(and__3822__auto____20118)
{return !((cljs.core.scan_array.call(null,1,k,this__20117.keys) == null));
} else
{return and__3822__auto____20118;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__20140 = null;
var G__20140__2 = (function (this_sym20119,k){
var this__20121 = this;
var this_sym20119__20122 = this;
var coll__20123 = this_sym20119__20122;
return coll__20123.cljs$core$ILookup$_lookup$arity$2(coll__20123,k);
});
var G__20140__3 = (function (this_sym20120,k,not_found){
var this__20121 = this;
var this_sym20120__20124 = this;
var coll__20125 = this_sym20120__20124;
return coll__20125.cljs$core$ILookup$_lookup$arity$3(coll__20125,k,not_found);
});
G__20140 = function(this_sym20120,k,not_found){
switch(arguments.length){
case 2:
return G__20140__2.call(this,this_sym20120,k);
case 3:
return G__20140__3.call(this,this_sym20120,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20140;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym20103,args20104){
var this__20126 = this;
return this_sym20103.call.apply(this_sym20103,[this_sym20103].concat(args20104.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20127 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__20128 = this;
var this__20129 = this;
return cljs.core.pr_str.call(null,this__20129);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20130 = this;
if((this__20130.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__20093_SHARP_){
return cljs.core.vector.call(null,p1__20093_SHARP_,(this__20130.strobj[p1__20093_SHARP_]));
}),this__20130.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20131 = this;
return this__20131.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20132 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20133 = this;
return (new cljs.core.ObjMap(meta,this__20133.keys,this__20133.strobj,this__20133.update_count,this__20133.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20134 = this;
return this__20134.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20135 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__20135.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20136 = this;
if((function (){var and__3822__auto____20137 = goog.isString(k);
if(and__3822__auto____20137)
{return !((cljs.core.scan_array.call(null,1,k,this__20136.keys) == null));
} else
{return and__3822__auto____20137;
}
})())
{var new_keys__20138 = this__20136.keys.slice();
var new_strobj__20139 = cljs.core.obj_clone.call(null,this__20136.strobj,this__20136.keys);
new_keys__20138.splice(cljs.core.scan_array.call(null,1,k,new_keys__20138),1);
cljs.core.js_delete.call(null,new_strobj__20139,k);
return (new cljs.core.ObjMap(this__20136.meta,new_keys__20138,new_strobj__20139,(this__20136.update_count + 1),null));
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
var this__20144 = this;
var h__2309__auto____20145 = this__20144.__hash;
if(!((h__2309__auto____20145 == null)))
{return h__2309__auto____20145;
} else
{var h__2309__auto____20146 = cljs.core.hash_imap.call(null,coll);
this__20144.__hash = h__2309__auto____20146;
return h__2309__auto____20146;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20147 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20148 = this;
var bucket__20149 = (this__20148.hashobj[cljs.core.hash.call(null,k)]);
var i__20150 = (cljs.core.truth_(bucket__20149)?cljs.core.scan_array.call(null,2,k,bucket__20149):null);
if(cljs.core.truth_(i__20150))
{return (bucket__20149[(i__20150 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20151 = this;
var h__20152 = cljs.core.hash.call(null,k);
var bucket__20153 = (this__20151.hashobj[h__20152]);
if(cljs.core.truth_(bucket__20153))
{var new_bucket__20154 = bucket__20153.slice();
var new_hashobj__20155 = goog.object.clone(this__20151.hashobj);
(new_hashobj__20155[h__20152] = new_bucket__20154);
var temp__3971__auto____20156 = cljs.core.scan_array.call(null,2,k,new_bucket__20154);
if(cljs.core.truth_(temp__3971__auto____20156))
{var i__20157 = temp__3971__auto____20156;
(new_bucket__20154[(i__20157 + 1)] = v);
return (new cljs.core.HashMap(this__20151.meta,this__20151.count,new_hashobj__20155,null));
} else
{new_bucket__20154.push(k,v);
return (new cljs.core.HashMap(this__20151.meta,(this__20151.count + 1),new_hashobj__20155,null));
}
} else
{var new_hashobj__20158 = goog.object.clone(this__20151.hashobj);
(new_hashobj__20158[h__20152] = [k,v]);
return (new cljs.core.HashMap(this__20151.meta,(this__20151.count + 1),new_hashobj__20158,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20159 = this;
var bucket__20160 = (this__20159.hashobj[cljs.core.hash.call(null,k)]);
var i__20161 = (cljs.core.truth_(bucket__20160)?cljs.core.scan_array.call(null,2,k,bucket__20160):null);
if(cljs.core.truth_(i__20161))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__20186 = null;
var G__20186__2 = (function (this_sym20162,k){
var this__20164 = this;
var this_sym20162__20165 = this;
var coll__20166 = this_sym20162__20165;
return coll__20166.cljs$core$ILookup$_lookup$arity$2(coll__20166,k);
});
var G__20186__3 = (function (this_sym20163,k,not_found){
var this__20164 = this;
var this_sym20163__20167 = this;
var coll__20168 = this_sym20163__20167;
return coll__20168.cljs$core$ILookup$_lookup$arity$3(coll__20168,k,not_found);
});
G__20186 = function(this_sym20163,k,not_found){
switch(arguments.length){
case 2:
return G__20186__2.call(this,this_sym20163,k);
case 3:
return G__20186__3.call(this,this_sym20163,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20186;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym20142,args20143){
var this__20169 = this;
return this_sym20142.call.apply(this_sym20142,[this_sym20142].concat(args20143.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20170 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__20171 = this;
var this__20172 = this;
return cljs.core.pr_str.call(null,this__20172);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20173 = this;
if((this__20173.count > 0))
{var hashes__20174 = cljs.core.js_keys.call(null,this__20173.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__20141_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__20173.hashobj[p1__20141_SHARP_])));
}),hashes__20174);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20175 = this;
return this__20175.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20176 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20177 = this;
return (new cljs.core.HashMap(meta,this__20177.count,this__20177.hashobj,this__20177.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20178 = this;
return this__20178.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20179 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__20179.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20180 = this;
var h__20181 = cljs.core.hash.call(null,k);
var bucket__20182 = (this__20180.hashobj[h__20181]);
var i__20183 = (cljs.core.truth_(bucket__20182)?cljs.core.scan_array.call(null,2,k,bucket__20182):null);
if(cljs.core.not.call(null,i__20183))
{return coll;
} else
{var new_hashobj__20184 = goog.object.clone(this__20180.hashobj);
if((3 > bucket__20182.length))
{cljs.core.js_delete.call(null,new_hashobj__20184,h__20181);
} else
{var new_bucket__20185 = bucket__20182.slice();
new_bucket__20185.splice(i__20183,2);
(new_hashobj__20184[h__20181] = new_bucket__20185);
}
return (new cljs.core.HashMap(this__20180.meta,(this__20180.count - 1),new_hashobj__20184,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__20187 = ks.length;
var i__20188 = 0;
var out__20189 = cljs.core.HashMap.EMPTY;
while(true){
if((i__20188 < len__20187))
{{
var G__20190 = (i__20188 + 1);
var G__20191 = cljs.core.assoc.call(null,out__20189,(ks[i__20188]),(vs[i__20188]));
i__20188 = G__20190;
out__20189 = G__20191;
continue;
}
} else
{return out__20189;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__20195 = m.arr;
var len__20196 = arr__20195.length;
var i__20197 = 0;
while(true){
if((len__20196 <= i__20197))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__20195[i__20197]),k))
{return i__20197;
} else
{if("\uFDD0'else")
{{
var G__20198 = (i__20197 + 2);
i__20197 = G__20198;
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
var this__20201 = this;
return (new cljs.core.TransientArrayMap({},this__20201.arr.length,this__20201.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20202 = this;
var h__2309__auto____20203 = this__20202.__hash;
if(!((h__2309__auto____20203 == null)))
{return h__2309__auto____20203;
} else
{var h__2309__auto____20204 = cljs.core.hash_imap.call(null,coll);
this__20202.__hash = h__2309__auto____20204;
return h__2309__auto____20204;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20205 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20206 = this;
var idx__20207 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20207 === -1))
{return not_found;
} else
{return (this__20206.arr[(idx__20207 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20208 = this;
var idx__20209 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20209 === -1))
{if((this__20208.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__20208.meta,(this__20208.cnt + 1),(function (){var G__20210__20211 = this__20208.arr.slice();
G__20210__20211.push(k);
G__20210__20211.push(v);
return G__20210__20211;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__20208.arr[(idx__20209 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__20208.meta,this__20208.cnt,(function (){var G__20212__20213 = this__20208.arr.slice();
(G__20212__20213[(idx__20209 + 1)] = v);
return G__20212__20213;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20214 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__20246 = null;
var G__20246__2 = (function (this_sym20215,k){
var this__20217 = this;
var this_sym20215__20218 = this;
var coll__20219 = this_sym20215__20218;
return coll__20219.cljs$core$ILookup$_lookup$arity$2(coll__20219,k);
});
var G__20246__3 = (function (this_sym20216,k,not_found){
var this__20217 = this;
var this_sym20216__20220 = this;
var coll__20221 = this_sym20216__20220;
return coll__20221.cljs$core$ILookup$_lookup$arity$3(coll__20221,k,not_found);
});
G__20246 = function(this_sym20216,k,not_found){
switch(arguments.length){
case 2:
return G__20246__2.call(this,this_sym20216,k);
case 3:
return G__20246__3.call(this,this_sym20216,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20246;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym20199,args20200){
var this__20222 = this;
return this_sym20199.call.apply(this_sym20199,[this_sym20199].concat(args20200.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20223 = this;
var len__20224 = this__20223.arr.length;
var i__20225 = 0;
var init__20226 = init;
while(true){
if((i__20225 < len__20224))
{var init__20227 = f.call(null,init__20226,(this__20223.arr[i__20225]),(this__20223.arr[(i__20225 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__20227))
{return cljs.core.deref.call(null,init__20227);
} else
{{
var G__20247 = (i__20225 + 2);
var G__20248 = init__20227;
i__20225 = G__20247;
init__20226 = G__20248;
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
var this__20228 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__20229 = this;
var this__20230 = this;
return cljs.core.pr_str.call(null,this__20230);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20231 = this;
if((this__20231.cnt > 0))
{var len__20232 = this__20231.arr.length;
var array_map_seq__20233 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__20232))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__20231.arr[i]),(this__20231.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__20233.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20234 = this;
return this__20234.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20235 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20236 = this;
return (new cljs.core.PersistentArrayMap(meta,this__20236.cnt,this__20236.arr,this__20236.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20237 = this;
return this__20237.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20238 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20238.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20239 = this;
var idx__20240 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20240 >= 0))
{var len__20241 = this__20239.arr.length;
var new_len__20242 = (len__20241 - 2);
if((new_len__20242 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__20243 = cljs.core.make_array.call(null,new_len__20242);
var s__20244 = 0;
var d__20245 = 0;
while(true){
if((s__20244 >= len__20241))
{return (new cljs.core.PersistentArrayMap(this__20239.meta,(this__20239.cnt - 1),new_arr__20243,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__20239.arr[s__20244])))
{{
var G__20249 = (s__20244 + 2);
var G__20250 = d__20245;
s__20244 = G__20249;
d__20245 = G__20250;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__20243[d__20245] = (this__20239.arr[s__20244]));
(new_arr__20243[(d__20245 + 1)] = (this__20239.arr[(s__20244 + 1)]));
{
var G__20251 = (s__20244 + 2);
var G__20252 = (d__20245 + 2);
s__20244 = G__20251;
d__20245 = G__20252;
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
var len__20253 = cljs.core.count.call(null,ks);
var i__20254 = 0;
var out__20255 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__20254 < len__20253))
{{
var G__20256 = (i__20254 + 1);
var G__20257 = cljs.core.assoc_BANG_.call(null,out__20255,(ks[i__20254]),(vs[i__20254]));
i__20254 = G__20256;
out__20255 = G__20257;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20255);
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
var this__20258 = this;
if(cljs.core.truth_(this__20258.editable_QMARK_))
{var idx__20259 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__20259 >= 0))
{(this__20258.arr[idx__20259] = (this__20258.arr[(this__20258.len - 2)]));
(this__20258.arr[(idx__20259 + 1)] = (this__20258.arr[(this__20258.len - 1)]));
var G__20260__20261 = this__20258.arr;
G__20260__20261.pop();
G__20260__20261.pop();
G__20260__20261;
this__20258.len = (this__20258.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__20262 = this;
if(cljs.core.truth_(this__20262.editable_QMARK_))
{var idx__20263 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__20263 === -1))
{if(((this__20262.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__20262.len = (this__20262.len + 2);
this__20262.arr.push(key);
this__20262.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__20262.len,this__20262.arr),key,val);
}
} else
{if((val === (this__20262.arr[(idx__20263 + 1)])))
{return tcoll;
} else
{(this__20262.arr[(idx__20263 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__20264 = this;
if(cljs.core.truth_(this__20264.editable_QMARK_))
{if((function (){var G__20265__20266 = o;
if(G__20265__20266)
{if((function (){var or__3824__auto____20267 = (G__20265__20266.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____20267)
{return or__3824__auto____20267;
} else
{return G__20265__20266.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__20265__20266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20265__20266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20265__20266);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__20268 = cljs.core.seq.call(null,o);
var tcoll__20269 = tcoll;
while(true){
var temp__3971__auto____20270 = cljs.core.first.call(null,es__20268);
if(cljs.core.truth_(temp__3971__auto____20270))
{var e__20271 = temp__3971__auto____20270;
{
var G__20277 = cljs.core.next.call(null,es__20268);
var G__20278 = tcoll__20269.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__20269,cljs.core.key.call(null,e__20271),cljs.core.val.call(null,e__20271));
es__20268 = G__20277;
tcoll__20269 = G__20278;
continue;
}
} else
{return tcoll__20269;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20272 = this;
if(cljs.core.truth_(this__20272.editable_QMARK_))
{this__20272.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__20272.len,2),this__20272.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__20273 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__20274 = this;
if(cljs.core.truth_(this__20274.editable_QMARK_))
{var idx__20275 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__20275 === -1))
{return not_found;
} else
{return (this__20274.arr[(idx__20275 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__20276 = this;
if(cljs.core.truth_(this__20276.editable_QMARK_))
{return cljs.core.quot.call(null,this__20276.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__20281 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__20282 = 0;
while(true){
if((i__20282 < len))
{{
var G__20283 = cljs.core.assoc_BANG_.call(null,out__20281,(arr[i__20282]),(arr[(i__20282 + 1)]));
var G__20284 = (i__20282 + 2);
out__20281 = G__20283;
i__20282 = G__20284;
continue;
}
} else
{return out__20281;
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
var G__20289__20290 = arr.slice();
(G__20289__20290[i] = a);
return G__20289__20290;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__20291__20292 = arr.slice();
(G__20291__20292[i] = a);
(G__20291__20292[j] = b);
return G__20291__20292;
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
var new_arr__20294 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__20294,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__20294,(2 * i),(new_arr__20294.length - (2 * i)));
return new_arr__20294;
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
var editable__20297 = inode.ensure_editable(edit);
(editable__20297.arr[i] = a);
return editable__20297;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__20298 = inode.ensure_editable(edit);
(editable__20298.arr[i] = a);
(editable__20298.arr[j] = b);
return editable__20298;
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
var len__20305 = arr.length;
var i__20306 = 0;
var init__20307 = init;
while(true){
if((i__20306 < len__20305))
{var init__20310 = (function (){var k__20308 = (arr[i__20306]);
if(!((k__20308 == null)))
{return f.call(null,init__20307,k__20308,(arr[(i__20306 + 1)]));
} else
{var node__20309 = (arr[(i__20306 + 1)]);
if(!((node__20309 == null)))
{return node__20309.kv_reduce(f,init__20307);
} else
{return init__20307;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__20310))
{return cljs.core.deref.call(null,init__20310);
} else
{{
var G__20311 = (i__20306 + 2);
var G__20312 = init__20310;
i__20306 = G__20311;
init__20307 = G__20312;
continue;
}
}
} else
{return init__20307;
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
var this__20313 = this;
var inode__20314 = this;
if((this__20313.bitmap === bit))
{return null;
} else
{var editable__20315 = inode__20314.ensure_editable(e);
var earr__20316 = editable__20315.arr;
var len__20317 = earr__20316.length;
editable__20315.bitmap = (bit ^ editable__20315.bitmap);
cljs.core.array_copy.call(null,earr__20316,(2 * (i + 1)),earr__20316,(2 * i),(len__20317 - (2 * (i + 1))));
(earr__20316[(len__20317 - 2)] = null);
(earr__20316[(len__20317 - 1)] = null);
return editable__20315;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__20318 = this;
var inode__20319 = this;
var bit__20320 = (1 << ((hash >>> shift) & 0x01f));
var idx__20321 = cljs.core.bitmap_indexed_node_index.call(null,this__20318.bitmap,bit__20320);
if(((this__20318.bitmap & bit__20320) === 0))
{var n__20322 = cljs.core.bit_count.call(null,this__20318.bitmap);
if(((2 * n__20322) < this__20318.arr.length))
{var editable__20323 = inode__20319.ensure_editable(edit);
var earr__20324 = editable__20323.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__20324,(2 * idx__20321),earr__20324,(2 * (idx__20321 + 1)),(2 * (n__20322 - idx__20321)));
(earr__20324[(2 * idx__20321)] = key);
(earr__20324[((2 * idx__20321) + 1)] = val);
editable__20323.bitmap = (editable__20323.bitmap | bit__20320);
return editable__20323;
} else
{if((n__20322 >= 16))
{var nodes__20325 = cljs.core.make_array.call(null,32);
var jdx__20326 = ((hash >>> shift) & 0x01f);
(nodes__20325[jdx__20326] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__20327 = 0;
var j__20328 = 0;
while(true){
if((i__20327 < 32))
{if((((this__20318.bitmap >>> i__20327) & 1) === 0))
{{
var G__20381 = (i__20327 + 1);
var G__20382 = j__20328;
i__20327 = G__20381;
j__20328 = G__20382;
continue;
}
} else
{(nodes__20325[i__20327] = ((!(((this__20318.arr[j__20328]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__20318.arr[j__20328])),(this__20318.arr[j__20328]),(this__20318.arr[(j__20328 + 1)]),added_leaf_QMARK_):(this__20318.arr[(j__20328 + 1)])));
{
var G__20383 = (i__20327 + 1);
var G__20384 = (j__20328 + 2);
i__20327 = G__20383;
j__20328 = G__20384;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__20322 + 1),nodes__20325));
} else
{if("\uFDD0'else")
{var new_arr__20329 = cljs.core.make_array.call(null,(2 * (n__20322 + 4)));
cljs.core.array_copy.call(null,this__20318.arr,0,new_arr__20329,0,(2 * idx__20321));
(new_arr__20329[(2 * idx__20321)] = key);
(new_arr__20329[((2 * idx__20321) + 1)] = val);
cljs.core.array_copy.call(null,this__20318.arr,(2 * idx__20321),new_arr__20329,(2 * (idx__20321 + 1)),(2 * (n__20322 - idx__20321)));
added_leaf_QMARK_.val = true;
var editable__20330 = inode__20319.ensure_editable(edit);
editable__20330.arr = new_arr__20329;
editable__20330.bitmap = (editable__20330.bitmap | bit__20320);
return editable__20330;
} else
{return null;
}
}
}
} else
{var key_or_nil__20331 = (this__20318.arr[(2 * idx__20321)]);
var val_or_node__20332 = (this__20318.arr[((2 * idx__20321) + 1)]);
if((key_or_nil__20331 == null))
{var n__20333 = val_or_node__20332.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20333 === val_or_node__20332))
{return inode__20319;
} else
{return cljs.core.edit_and_set.call(null,inode__20319,edit,((2 * idx__20321) + 1),n__20333);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20331))
{if((val === val_or_node__20332))
{return inode__20319;
} else
{return cljs.core.edit_and_set.call(null,inode__20319,edit,((2 * idx__20321) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__20319,edit,(2 * idx__20321),null,((2 * idx__20321) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__20331,val_or_node__20332,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__20334 = this;
var inode__20335 = this;
return cljs.core.create_inode_seq.call(null,this__20334.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20336 = this;
var inode__20337 = this;
var bit__20338 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20336.bitmap & bit__20338) === 0))
{return inode__20337;
} else
{var idx__20339 = cljs.core.bitmap_indexed_node_index.call(null,this__20336.bitmap,bit__20338);
var key_or_nil__20340 = (this__20336.arr[(2 * idx__20339)]);
var val_or_node__20341 = (this__20336.arr[((2 * idx__20339) + 1)]);
if((key_or_nil__20340 == null))
{var n__20342 = val_or_node__20341.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__20342 === val_or_node__20341))
{return inode__20337;
} else
{if(!((n__20342 == null)))
{return cljs.core.edit_and_set.call(null,inode__20337,edit,((2 * idx__20339) + 1),n__20342);
} else
{if((this__20336.bitmap === bit__20338))
{return null;
} else
{if("\uFDD0'else")
{return inode__20337.edit_and_remove_pair(edit,bit__20338,idx__20339);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20340))
{(removed_leaf_QMARK_[0] = true);
return inode__20337.edit_and_remove_pair(edit,bit__20338,idx__20339);
} else
{if("\uFDD0'else")
{return inode__20337;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__20343 = this;
var inode__20344 = this;
if((e === this__20343.edit))
{return inode__20344;
} else
{var n__20345 = cljs.core.bit_count.call(null,this__20343.bitmap);
var new_arr__20346 = cljs.core.make_array.call(null,(((n__20345 < 0))?4:(2 * (n__20345 + 1))));
cljs.core.array_copy.call(null,this__20343.arr,0,new_arr__20346,0,(2 * n__20345));
return (new cljs.core.BitmapIndexedNode(e,this__20343.bitmap,new_arr__20346));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__20347 = this;
var inode__20348 = this;
return cljs.core.inode_kv_reduce.call(null,this__20347.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20349 = this;
var inode__20350 = this;
var bit__20351 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20349.bitmap & bit__20351) === 0))
{return not_found;
} else
{var idx__20352 = cljs.core.bitmap_indexed_node_index.call(null,this__20349.bitmap,bit__20351);
var key_or_nil__20353 = (this__20349.arr[(2 * idx__20352)]);
var val_or_node__20354 = (this__20349.arr[((2 * idx__20352) + 1)]);
if((key_or_nil__20353 == null))
{return val_or_node__20354.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20353))
{return cljs.core.PersistentVector.fromArray([key_or_nil__20353,val_or_node__20354], true);
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
var this__20355 = this;
var inode__20356 = this;
var bit__20357 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20355.bitmap & bit__20357) === 0))
{return inode__20356;
} else
{var idx__20358 = cljs.core.bitmap_indexed_node_index.call(null,this__20355.bitmap,bit__20357);
var key_or_nil__20359 = (this__20355.arr[(2 * idx__20358)]);
var val_or_node__20360 = (this__20355.arr[((2 * idx__20358) + 1)]);
if((key_or_nil__20359 == null))
{var n__20361 = val_or_node__20360.inode_without((shift + 5),hash,key);
if((n__20361 === val_or_node__20360))
{return inode__20356;
} else
{if(!((n__20361 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__20355.bitmap,cljs.core.clone_and_set.call(null,this__20355.arr,((2 * idx__20358) + 1),n__20361)));
} else
{if((this__20355.bitmap === bit__20357))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__20355.bitmap ^ bit__20357),cljs.core.remove_pair.call(null,this__20355.arr,idx__20358)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20359))
{return (new cljs.core.BitmapIndexedNode(null,(this__20355.bitmap ^ bit__20357),cljs.core.remove_pair.call(null,this__20355.arr,idx__20358)));
} else
{if("\uFDD0'else")
{return inode__20356;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20362 = this;
var inode__20363 = this;
var bit__20364 = (1 << ((hash >>> shift) & 0x01f));
var idx__20365 = cljs.core.bitmap_indexed_node_index.call(null,this__20362.bitmap,bit__20364);
if(((this__20362.bitmap & bit__20364) === 0))
{var n__20366 = cljs.core.bit_count.call(null,this__20362.bitmap);
if((n__20366 >= 16))
{var nodes__20367 = cljs.core.make_array.call(null,32);
var jdx__20368 = ((hash >>> shift) & 0x01f);
(nodes__20367[jdx__20368] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__20369 = 0;
var j__20370 = 0;
while(true){
if((i__20369 < 32))
{if((((this__20362.bitmap >>> i__20369) & 1) === 0))
{{
var G__20385 = (i__20369 + 1);
var G__20386 = j__20370;
i__20369 = G__20385;
j__20370 = G__20386;
continue;
}
} else
{(nodes__20367[i__20369] = ((!(((this__20362.arr[j__20370]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__20362.arr[j__20370])),(this__20362.arr[j__20370]),(this__20362.arr[(j__20370 + 1)]),added_leaf_QMARK_):(this__20362.arr[(j__20370 + 1)])));
{
var G__20387 = (i__20369 + 1);
var G__20388 = (j__20370 + 2);
i__20369 = G__20387;
j__20370 = G__20388;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__20366 + 1),nodes__20367));
} else
{var new_arr__20371 = cljs.core.make_array.call(null,(2 * (n__20366 + 1)));
cljs.core.array_copy.call(null,this__20362.arr,0,new_arr__20371,0,(2 * idx__20365));
(new_arr__20371[(2 * idx__20365)] = key);
(new_arr__20371[((2 * idx__20365) + 1)] = val);
cljs.core.array_copy.call(null,this__20362.arr,(2 * idx__20365),new_arr__20371,(2 * (idx__20365 + 1)),(2 * (n__20366 - idx__20365)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__20362.bitmap | bit__20364),new_arr__20371));
}
} else
{var key_or_nil__20372 = (this__20362.arr[(2 * idx__20365)]);
var val_or_node__20373 = (this__20362.arr[((2 * idx__20365) + 1)]);
if((key_or_nil__20372 == null))
{var n__20374 = val_or_node__20373.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20374 === val_or_node__20373))
{return inode__20363;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__20362.bitmap,cljs.core.clone_and_set.call(null,this__20362.arr,((2 * idx__20365) + 1),n__20374)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20372))
{if((val === val_or_node__20373))
{return inode__20363;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__20362.bitmap,cljs.core.clone_and_set.call(null,this__20362.arr,((2 * idx__20365) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__20362.bitmap,cljs.core.clone_and_set.call(null,this__20362.arr,(2 * idx__20365),null,((2 * idx__20365) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__20372,val_or_node__20373,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20375 = this;
var inode__20376 = this;
var bit__20377 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20375.bitmap & bit__20377) === 0))
{return not_found;
} else
{var idx__20378 = cljs.core.bitmap_indexed_node_index.call(null,this__20375.bitmap,bit__20377);
var key_or_nil__20379 = (this__20375.arr[(2 * idx__20378)]);
var val_or_node__20380 = (this__20375.arr[((2 * idx__20378) + 1)]);
if((key_or_nil__20379 == null))
{return val_or_node__20380.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20379))
{return val_or_node__20380;
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
var arr__20396 = array_node.arr;
var len__20397 = (2 * (array_node.cnt - 1));
var new_arr__20398 = cljs.core.make_array.call(null,len__20397);
var i__20399 = 0;
var j__20400 = 1;
var bitmap__20401 = 0;
while(true){
if((i__20399 < len__20397))
{if((function (){var and__3822__auto____20402 = !((i__20399 === idx));
if(and__3822__auto____20402)
{return !(((arr__20396[i__20399]) == null));
} else
{return and__3822__auto____20402;
}
})())
{(new_arr__20398[j__20400] = (arr__20396[i__20399]));
{
var G__20403 = (i__20399 + 1);
var G__20404 = (j__20400 + 2);
var G__20405 = (bitmap__20401 | (1 << i__20399));
i__20399 = G__20403;
j__20400 = G__20404;
bitmap__20401 = G__20405;
continue;
}
} else
{{
var G__20406 = (i__20399 + 1);
var G__20407 = j__20400;
var G__20408 = bitmap__20401;
i__20399 = G__20406;
j__20400 = G__20407;
bitmap__20401 = G__20408;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__20401,new_arr__20398));
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
var this__20409 = this;
var inode__20410 = this;
var idx__20411 = ((hash >>> shift) & 0x01f);
var node__20412 = (this__20409.arr[idx__20411]);
if((node__20412 == null))
{var editable__20413 = cljs.core.edit_and_set.call(null,inode__20410,edit,idx__20411,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__20413.cnt = (editable__20413.cnt + 1);
return editable__20413;
} else
{var n__20414 = node__20412.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20414 === node__20412))
{return inode__20410;
} else
{return cljs.core.edit_and_set.call(null,inode__20410,edit,idx__20411,n__20414);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__20415 = this;
var inode__20416 = this;
return cljs.core.create_array_node_seq.call(null,this__20415.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20417 = this;
var inode__20418 = this;
var idx__20419 = ((hash >>> shift) & 0x01f);
var node__20420 = (this__20417.arr[idx__20419]);
if((node__20420 == null))
{return inode__20418;
} else
{var n__20421 = node__20420.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__20421 === node__20420))
{return inode__20418;
} else
{if((n__20421 == null))
{if((this__20417.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__20418,edit,idx__20419);
} else
{var editable__20422 = cljs.core.edit_and_set.call(null,inode__20418,edit,idx__20419,n__20421);
editable__20422.cnt = (editable__20422.cnt - 1);
return editable__20422;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__20418,edit,idx__20419,n__20421);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__20423 = this;
var inode__20424 = this;
if((e === this__20423.edit))
{return inode__20424;
} else
{return (new cljs.core.ArrayNode(e,this__20423.cnt,this__20423.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__20425 = this;
var inode__20426 = this;
var len__20427 = this__20425.arr.length;
var i__20428 = 0;
var init__20429 = init;
while(true){
if((i__20428 < len__20427))
{var node__20430 = (this__20425.arr[i__20428]);
if(!((node__20430 == null)))
{var init__20431 = node__20430.kv_reduce(f,init__20429);
if(cljs.core.reduced_QMARK_.call(null,init__20431))
{return cljs.core.deref.call(null,init__20431);
} else
{{
var G__20450 = (i__20428 + 1);
var G__20451 = init__20431;
i__20428 = G__20450;
init__20429 = G__20451;
continue;
}
}
} else
{return null;
}
} else
{return init__20429;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20432 = this;
var inode__20433 = this;
var idx__20434 = ((hash >>> shift) & 0x01f);
var node__20435 = (this__20432.arr[idx__20434]);
if(!((node__20435 == null)))
{return node__20435.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__20436 = this;
var inode__20437 = this;
var idx__20438 = ((hash >>> shift) & 0x01f);
var node__20439 = (this__20436.arr[idx__20438]);
if(!((node__20439 == null)))
{var n__20440 = node__20439.inode_without((shift + 5),hash,key);
if((n__20440 === node__20439))
{return inode__20437;
} else
{if((n__20440 == null))
{if((this__20436.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__20437,null,idx__20438);
} else
{return (new cljs.core.ArrayNode(null,(this__20436.cnt - 1),cljs.core.clone_and_set.call(null,this__20436.arr,idx__20438,n__20440)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__20436.cnt,cljs.core.clone_and_set.call(null,this__20436.arr,idx__20438,n__20440)));
} else
{return null;
}
}
}
} else
{return inode__20437;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20441 = this;
var inode__20442 = this;
var idx__20443 = ((hash >>> shift) & 0x01f);
var node__20444 = (this__20441.arr[idx__20443]);
if((node__20444 == null))
{return (new cljs.core.ArrayNode(null,(this__20441.cnt + 1),cljs.core.clone_and_set.call(null,this__20441.arr,idx__20443,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__20445 = node__20444.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20445 === node__20444))
{return inode__20442;
} else
{return (new cljs.core.ArrayNode(null,this__20441.cnt,cljs.core.clone_and_set.call(null,this__20441.arr,idx__20443,n__20445)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20446 = this;
var inode__20447 = this;
var idx__20448 = ((hash >>> shift) & 0x01f);
var node__20449 = (this__20446.arr[idx__20448]);
if(!((node__20449 == null)))
{return node__20449.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__20454 = (2 * cnt);
var i__20455 = 0;
while(true){
if((i__20455 < lim__20454))
{if(cljs.core.key_test.call(null,key,(arr[i__20455])))
{return i__20455;
} else
{{
var G__20456 = (i__20455 + 2);
i__20455 = G__20456;
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
var this__20457 = this;
var inode__20458 = this;
if((hash === this__20457.collision_hash))
{var idx__20459 = cljs.core.hash_collision_node_find_index.call(null,this__20457.arr,this__20457.cnt,key);
if((idx__20459 === -1))
{if((this__20457.arr.length > (2 * this__20457.cnt)))
{var editable__20460 = cljs.core.edit_and_set.call(null,inode__20458,edit,(2 * this__20457.cnt),key,((2 * this__20457.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__20460.cnt = (editable__20460.cnt + 1);
return editable__20460;
} else
{var len__20461 = this__20457.arr.length;
var new_arr__20462 = cljs.core.make_array.call(null,(len__20461 + 2));
cljs.core.array_copy.call(null,this__20457.arr,0,new_arr__20462,0,len__20461);
(new_arr__20462[len__20461] = key);
(new_arr__20462[(len__20461 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__20458.ensure_editable_array(edit,(this__20457.cnt + 1),new_arr__20462);
}
} else
{if(((this__20457.arr[(idx__20459 + 1)]) === val))
{return inode__20458;
} else
{return cljs.core.edit_and_set.call(null,inode__20458,edit,(idx__20459 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__20457.collision_hash >>> shift) & 0x01f)),[null,inode__20458,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__20463 = this;
var inode__20464 = this;
return cljs.core.create_inode_seq.call(null,this__20463.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20465 = this;
var inode__20466 = this;
var idx__20467 = cljs.core.hash_collision_node_find_index.call(null,this__20465.arr,this__20465.cnt,key);
if((idx__20467 === -1))
{return inode__20466;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__20465.cnt === 1))
{return null;
} else
{var editable__20468 = inode__20466.ensure_editable(edit);
var earr__20469 = editable__20468.arr;
(earr__20469[idx__20467] = (earr__20469[((2 * this__20465.cnt) - 2)]));
(earr__20469[(idx__20467 + 1)] = (earr__20469[((2 * this__20465.cnt) - 1)]));
(earr__20469[((2 * this__20465.cnt) - 1)] = null);
(earr__20469[((2 * this__20465.cnt) - 2)] = null);
editable__20468.cnt = (editable__20468.cnt - 1);
return editable__20468;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__20470 = this;
var inode__20471 = this;
if((e === this__20470.edit))
{return inode__20471;
} else
{var new_arr__20472 = cljs.core.make_array.call(null,(2 * (this__20470.cnt + 1)));
cljs.core.array_copy.call(null,this__20470.arr,0,new_arr__20472,0,(2 * this__20470.cnt));
return (new cljs.core.HashCollisionNode(e,this__20470.collision_hash,this__20470.cnt,new_arr__20472));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__20473 = this;
var inode__20474 = this;
return cljs.core.inode_kv_reduce.call(null,this__20473.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20475 = this;
var inode__20476 = this;
var idx__20477 = cljs.core.hash_collision_node_find_index.call(null,this__20475.arr,this__20475.cnt,key);
if((idx__20477 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__20475.arr[idx__20477])))
{return cljs.core.PersistentVector.fromArray([(this__20475.arr[idx__20477]),(this__20475.arr[(idx__20477 + 1)])], true);
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
var this__20478 = this;
var inode__20479 = this;
var idx__20480 = cljs.core.hash_collision_node_find_index.call(null,this__20478.arr,this__20478.cnt,key);
if((idx__20480 === -1))
{return inode__20479;
} else
{if((this__20478.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__20478.collision_hash,(this__20478.cnt - 1),cljs.core.remove_pair.call(null,this__20478.arr,cljs.core.quot.call(null,idx__20480,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20481 = this;
var inode__20482 = this;
if((hash === this__20481.collision_hash))
{var idx__20483 = cljs.core.hash_collision_node_find_index.call(null,this__20481.arr,this__20481.cnt,key);
if((idx__20483 === -1))
{var len__20484 = this__20481.arr.length;
var new_arr__20485 = cljs.core.make_array.call(null,(len__20484 + 2));
cljs.core.array_copy.call(null,this__20481.arr,0,new_arr__20485,0,len__20484);
(new_arr__20485[len__20484] = key);
(new_arr__20485[(len__20484 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__20481.collision_hash,(this__20481.cnt + 1),new_arr__20485));
} else
{if(cljs.core._EQ_.call(null,(this__20481.arr[idx__20483]),val))
{return inode__20482;
} else
{return (new cljs.core.HashCollisionNode(null,this__20481.collision_hash,this__20481.cnt,cljs.core.clone_and_set.call(null,this__20481.arr,(idx__20483 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__20481.collision_hash >>> shift) & 0x01f)),[null,inode__20482])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20486 = this;
var inode__20487 = this;
var idx__20488 = cljs.core.hash_collision_node_find_index.call(null,this__20486.arr,this__20486.cnt,key);
if((idx__20488 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__20486.arr[idx__20488])))
{return (this__20486.arr[(idx__20488 + 1)]);
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
var this__20489 = this;
var inode__20490 = this;
if((e === this__20489.edit))
{this__20489.arr = array;
this__20489.cnt = count;
return inode__20490;
} else
{return (new cljs.core.HashCollisionNode(this__20489.edit,this__20489.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__20495 = cljs.core.hash.call(null,key1);
if((key1hash__20495 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__20495,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___20496 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__20495,key1,val1,added_leaf_QMARK___20496).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___20496);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__20497 = cljs.core.hash.call(null,key1);
if((key1hash__20497 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__20497,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___20498 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__20497,key1,val1,added_leaf_QMARK___20498).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___20498);
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
var this__20499 = this;
var h__2309__auto____20500 = this__20499.__hash;
if(!((h__2309__auto____20500 == null)))
{return h__2309__auto____20500;
} else
{var h__2309__auto____20501 = cljs.core.hash_coll.call(null,coll);
this__20499.__hash = h__2309__auto____20501;
return h__2309__auto____20501;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20502 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__20503 = this;
var this__20504 = this;
return cljs.core.pr_str.call(null,this__20504);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20505 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20506 = this;
if((this__20506.s == null))
{return cljs.core.PersistentVector.fromArray([(this__20506.nodes[this__20506.i]),(this__20506.nodes[(this__20506.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__20506.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20507 = this;
if((this__20507.s == null))
{return cljs.core.create_inode_seq.call(null,this__20507.nodes,(this__20507.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__20507.nodes,this__20507.i,cljs.core.next.call(null,this__20507.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20508 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20509 = this;
return (new cljs.core.NodeSeq(meta,this__20509.nodes,this__20509.i,this__20509.s,this__20509.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20510 = this;
return this__20510.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20511 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20511.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__20518 = nodes.length;
var j__20519 = i;
while(true){
if((j__20519 < len__20518))
{if(!(((nodes[j__20519]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__20519,null,null));
} else
{var temp__3971__auto____20520 = (nodes[(j__20519 + 1)]);
if(cljs.core.truth_(temp__3971__auto____20520))
{var node__20521 = temp__3971__auto____20520;
var temp__3971__auto____20522 = node__20521.inode_seq();
if(cljs.core.truth_(temp__3971__auto____20522))
{var node_seq__20523 = temp__3971__auto____20522;
return (new cljs.core.NodeSeq(null,nodes,(j__20519 + 2),node_seq__20523,null));
} else
{{
var G__20524 = (j__20519 + 2);
j__20519 = G__20524;
continue;
}
}
} else
{{
var G__20525 = (j__20519 + 2);
j__20519 = G__20525;
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
var this__20526 = this;
var h__2309__auto____20527 = this__20526.__hash;
if(!((h__2309__auto____20527 == null)))
{return h__2309__auto____20527;
} else
{var h__2309__auto____20528 = cljs.core.hash_coll.call(null,coll);
this__20526.__hash = h__2309__auto____20528;
return h__2309__auto____20528;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20529 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__20530 = this;
var this__20531 = this;
return cljs.core.pr_str.call(null,this__20531);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20532 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20533 = this;
return cljs.core.first.call(null,this__20533.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20534 = this;
return cljs.core.create_array_node_seq.call(null,null,this__20534.nodes,this__20534.i,cljs.core.next.call(null,this__20534.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20535 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20536 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__20536.nodes,this__20536.i,this__20536.s,this__20536.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20537 = this;
return this__20537.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20538 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20538.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__20545 = nodes.length;
var j__20546 = i;
while(true){
if((j__20546 < len__20545))
{var temp__3971__auto____20547 = (nodes[j__20546]);
if(cljs.core.truth_(temp__3971__auto____20547))
{var nj__20548 = temp__3971__auto____20547;
var temp__3971__auto____20549 = nj__20548.inode_seq();
if(cljs.core.truth_(temp__3971__auto____20549))
{var ns__20550 = temp__3971__auto____20549;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__20546 + 1),ns__20550,null));
} else
{{
var G__20551 = (j__20546 + 1);
j__20546 = G__20551;
continue;
}
}
} else
{{
var G__20552 = (j__20546 + 1);
j__20546 = G__20552;
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
var this__20555 = this;
return (new cljs.core.TransientHashMap({},this__20555.root,this__20555.cnt,this__20555.has_nil_QMARK_,this__20555.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20556 = this;
var h__2309__auto____20557 = this__20556.__hash;
if(!((h__2309__auto____20557 == null)))
{return h__2309__auto____20557;
} else
{var h__2309__auto____20558 = cljs.core.hash_imap.call(null,coll);
this__20556.__hash = h__2309__auto____20558;
return h__2309__auto____20558;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20559 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20560 = this;
if((k == null))
{if(this__20560.has_nil_QMARK_)
{return this__20560.nil_val;
} else
{return not_found;
}
} else
{if((this__20560.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__20560.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20561 = this;
if((k == null))
{if((function (){var and__3822__auto____20562 = this__20561.has_nil_QMARK_;
if(and__3822__auto____20562)
{return (v === this__20561.nil_val);
} else
{return and__3822__auto____20562;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20561.meta,((this__20561.has_nil_QMARK_)?this__20561.cnt:(this__20561.cnt + 1)),this__20561.root,true,v,null));
}
} else
{var added_leaf_QMARK___20563 = (new cljs.core.Box(false));
var new_root__20564 = (((this__20561.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__20561.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___20563);
if((new_root__20564 === this__20561.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20561.meta,((added_leaf_QMARK___20563.val)?(this__20561.cnt + 1):this__20561.cnt),new_root__20564,this__20561.has_nil_QMARK_,this__20561.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20565 = this;
if((k == null))
{return this__20565.has_nil_QMARK_;
} else
{if((this__20565.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__20565.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__20588 = null;
var G__20588__2 = (function (this_sym20566,k){
var this__20568 = this;
var this_sym20566__20569 = this;
var coll__20570 = this_sym20566__20569;
return coll__20570.cljs$core$ILookup$_lookup$arity$2(coll__20570,k);
});
var G__20588__3 = (function (this_sym20567,k,not_found){
var this__20568 = this;
var this_sym20567__20571 = this;
var coll__20572 = this_sym20567__20571;
return coll__20572.cljs$core$ILookup$_lookup$arity$3(coll__20572,k,not_found);
});
G__20588 = function(this_sym20567,k,not_found){
switch(arguments.length){
case 2:
return G__20588__2.call(this,this_sym20567,k);
case 3:
return G__20588__3.call(this,this_sym20567,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20588;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym20553,args20554){
var this__20573 = this;
return this_sym20553.call.apply(this_sym20553,[this_sym20553].concat(args20554.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20574 = this;
var init__20575 = ((this__20574.has_nil_QMARK_)?f.call(null,init,null,this__20574.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__20575))
{return cljs.core.deref.call(null,init__20575);
} else
{if(!((this__20574.root == null)))
{return this__20574.root.kv_reduce(f,init__20575);
} else
{if("\uFDD0'else")
{return init__20575;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20576 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__20577 = this;
var this__20578 = this;
return cljs.core.pr_str.call(null,this__20578);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20579 = this;
if((this__20579.cnt > 0))
{var s__20580 = ((!((this__20579.root == null)))?this__20579.root.inode_seq():null);
if(this__20579.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__20579.nil_val], true),s__20580);
} else
{return s__20580;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20581 = this;
return this__20581.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20582 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20583 = this;
return (new cljs.core.PersistentHashMap(meta,this__20583.cnt,this__20583.root,this__20583.has_nil_QMARK_,this__20583.nil_val,this__20583.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20584 = this;
return this__20584.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20585 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__20585.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20586 = this;
if((k == null))
{if(this__20586.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__20586.meta,(this__20586.cnt - 1),this__20586.root,false,null,null));
} else
{return coll;
}
} else
{if((this__20586.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__20587 = this__20586.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__20587 === this__20586.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20586.meta,(this__20586.cnt - 1),new_root__20587,this__20586.has_nil_QMARK_,this__20586.nil_val,null));
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
var len__20589 = ks.length;
var i__20590 = 0;
var out__20591 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__20590 < len__20589))
{{
var G__20592 = (i__20590 + 1);
var G__20593 = cljs.core.assoc_BANG_.call(null,out__20591,(ks[i__20590]),(vs[i__20590]));
i__20590 = G__20592;
out__20591 = G__20593;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20591);
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
var this__20594 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__20595 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__20596 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20597 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__20598 = this;
if((k == null))
{if(this__20598.has_nil_QMARK_)
{return this__20598.nil_val;
} else
{return null;
}
} else
{if((this__20598.root == null))
{return null;
} else
{return this__20598.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__20599 = this;
if((k == null))
{if(this__20599.has_nil_QMARK_)
{return this__20599.nil_val;
} else
{return not_found;
}
} else
{if((this__20599.root == null))
{return not_found;
} else
{return this__20599.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20600 = this;
if(this__20600.edit)
{return this__20600.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__20601 = this;
var tcoll__20602 = this;
if(this__20601.edit)
{if((function (){var G__20603__20604 = o;
if(G__20603__20604)
{if((function (){var or__3824__auto____20605 = (G__20603__20604.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____20605)
{return or__3824__auto____20605;
} else
{return G__20603__20604.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__20603__20604.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20603__20604);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20603__20604);
}
})())
{return tcoll__20602.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__20606 = cljs.core.seq.call(null,o);
var tcoll__20607 = tcoll__20602;
while(true){
var temp__3971__auto____20608 = cljs.core.first.call(null,es__20606);
if(cljs.core.truth_(temp__3971__auto____20608))
{var e__20609 = temp__3971__auto____20608;
{
var G__20620 = cljs.core.next.call(null,es__20606);
var G__20621 = tcoll__20607.assoc_BANG_(cljs.core.key.call(null,e__20609),cljs.core.val.call(null,e__20609));
es__20606 = G__20620;
tcoll__20607 = G__20621;
continue;
}
} else
{return tcoll__20607;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__20610 = this;
var tcoll__20611 = this;
if(this__20610.edit)
{if((k == null))
{if((this__20610.nil_val === v))
{} else
{this__20610.nil_val = v;
}
if(this__20610.has_nil_QMARK_)
{} else
{this__20610.count = (this__20610.count + 1);
this__20610.has_nil_QMARK_ = true;
}
return tcoll__20611;
} else
{var added_leaf_QMARK___20612 = (new cljs.core.Box(false));
var node__20613 = (((this__20610.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__20610.root).inode_assoc_BANG_(this__20610.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___20612);
if((node__20613 === this__20610.root))
{} else
{this__20610.root = node__20613;
}
if(added_leaf_QMARK___20612.val)
{this__20610.count = (this__20610.count + 1);
} else
{}
return tcoll__20611;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__20614 = this;
var tcoll__20615 = this;
if(this__20614.edit)
{if((k == null))
{if(this__20614.has_nil_QMARK_)
{this__20614.has_nil_QMARK_ = false;
this__20614.nil_val = null;
this__20614.count = (this__20614.count - 1);
return tcoll__20615;
} else
{return tcoll__20615;
}
} else
{if((this__20614.root == null))
{return tcoll__20615;
} else
{var removed_leaf_QMARK___20616 = (new cljs.core.Box(false));
var node__20617 = this__20614.root.inode_without_BANG_(this__20614.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___20616);
if((node__20617 === this__20614.root))
{} else
{this__20614.root = node__20617;
}
if(cljs.core.truth_((removed_leaf_QMARK___20616[0])))
{this__20614.count = (this__20614.count - 1);
} else
{}
return tcoll__20615;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__20618 = this;
var tcoll__20619 = this;
if(this__20618.edit)
{this__20618.edit = null;
return (new cljs.core.PersistentHashMap(null,this__20618.count,this__20618.root,this__20618.has_nil_QMARK_,this__20618.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__20624 = node;
var stack__20625 = stack;
while(true){
if(!((t__20624 == null)))
{{
var G__20626 = ((ascending_QMARK_)?t__20624.left:t__20624.right);
var G__20627 = cljs.core.conj.call(null,stack__20625,t__20624);
t__20624 = G__20626;
stack__20625 = G__20627;
continue;
}
} else
{return stack__20625;
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
var this__20628 = this;
var h__2309__auto____20629 = this__20628.__hash;
if(!((h__2309__auto____20629 == null)))
{return h__2309__auto____20629;
} else
{var h__2309__auto____20630 = cljs.core.hash_coll.call(null,coll);
this__20628.__hash = h__2309__auto____20630;
return h__2309__auto____20630;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20631 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__20632 = this;
var this__20633 = this;
return cljs.core.pr_str.call(null,this__20633);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20634 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20635 = this;
if((this__20635.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__20635.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__20636 = this;
return cljs.core.peek.call(null,this__20636.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__20637 = this;
var t__20638 = cljs.core.first.call(null,this__20637.stack);
var next_stack__20639 = cljs.core.tree_map_seq_push.call(null,((this__20637.ascending_QMARK_)?t__20638.right:t__20638.left),cljs.core.next.call(null,this__20637.stack),this__20637.ascending_QMARK_);
if(!((next_stack__20639 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__20639,this__20637.ascending_QMARK_,(this__20637.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20640 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20641 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__20641.stack,this__20641.ascending_QMARK_,this__20641.cnt,this__20641.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20642 = this;
return this__20642.meta;
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
{if((function (){var and__3822__auto____20644 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____20644)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____20644;
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
{if((function (){var and__3822__auto____20646 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____20646)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____20646;
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
var init__20650 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__20650))
{return cljs.core.deref.call(null,init__20650);
} else
{var init__20651 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__20650):init__20650);
if(cljs.core.reduced_QMARK_.call(null,init__20651))
{return cljs.core.deref.call(null,init__20651);
} else
{var init__20652 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__20651):init__20651);
if(cljs.core.reduced_QMARK_.call(null,init__20652))
{return cljs.core.deref.call(null,init__20652);
} else
{return init__20652;
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
var this__20655 = this;
var h__2309__auto____20656 = this__20655.__hash;
if(!((h__2309__auto____20656 == null)))
{return h__2309__auto____20656;
} else
{var h__2309__auto____20657 = cljs.core.hash_coll.call(null,coll);
this__20655.__hash = h__2309__auto____20657;
return h__2309__auto____20657;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__20658 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__20659 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__20660 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__20660.key,this__20660.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__20708 = null;
var G__20708__2 = (function (this_sym20661,k){
var this__20663 = this;
var this_sym20661__20664 = this;
var node__20665 = this_sym20661__20664;
return node__20665.cljs$core$ILookup$_lookup$arity$2(node__20665,k);
});
var G__20708__3 = (function (this_sym20662,k,not_found){
var this__20663 = this;
var this_sym20662__20666 = this;
var node__20667 = this_sym20662__20666;
return node__20667.cljs$core$ILookup$_lookup$arity$3(node__20667,k,not_found);
});
G__20708 = function(this_sym20662,k,not_found){
switch(arguments.length){
case 2:
return G__20708__2.call(this,this_sym20662,k);
case 3:
return G__20708__3.call(this,this_sym20662,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20708;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym20653,args20654){
var this__20668 = this;
return this_sym20653.call.apply(this_sym20653,[this_sym20653].concat(args20654.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__20669 = this;
return cljs.core.PersistentVector.fromArray([this__20669.key,this__20669.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__20670 = this;
return this__20670.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__20671 = this;
return this__20671.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__20672 = this;
var node__20673 = this;
return ins.balance_right(node__20673);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__20674 = this;
var node__20675 = this;
return (new cljs.core.RedNode(this__20674.key,this__20674.val,this__20674.left,this__20674.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__20676 = this;
var node__20677 = this;
return cljs.core.balance_right_del.call(null,this__20676.key,this__20676.val,this__20676.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__20678 = this;
var node__20679 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__20680 = this;
var node__20681 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__20681,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__20682 = this;
var node__20683 = this;
return cljs.core.balance_left_del.call(null,this__20682.key,this__20682.val,del,this__20682.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__20684 = this;
var node__20685 = this;
return ins.balance_left(node__20685);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__20686 = this;
var node__20687 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__20687,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__20709 = null;
var G__20709__0 = (function (){
var this__20688 = this;
var this__20690 = this;
return cljs.core.pr_str.call(null,this__20690);
});
G__20709 = function(){
switch(arguments.length){
case 0:
return G__20709__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20709;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__20691 = this;
var node__20692 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__20692,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__20693 = this;
var node__20694 = this;
return node__20694;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__20695 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__20696 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__20697 = this;
return cljs.core.list.call(null,this__20697.key,this__20697.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__20698 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__20699 = this;
return this__20699.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__20700 = this;
return cljs.core.PersistentVector.fromArray([this__20700.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__20701 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__20701.key,this__20701.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20702 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__20703 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__20703.key,this__20703.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__20704 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__20705 = this;
if((n === 0))
{return this__20705.key;
} else
{if((n === 1))
{return this__20705.val;
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
var this__20706 = this;
if((n === 0))
{return this__20706.key;
} else
{if((n === 1))
{return this__20706.val;
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
var this__20707 = this;
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
var this__20712 = this;
var h__2309__auto____20713 = this__20712.__hash;
if(!((h__2309__auto____20713 == null)))
{return h__2309__auto____20713;
} else
{var h__2309__auto____20714 = cljs.core.hash_coll.call(null,coll);
this__20712.__hash = h__2309__auto____20714;
return h__2309__auto____20714;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__20715 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__20716 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__20717 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__20717.key,this__20717.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__20765 = null;
var G__20765__2 = (function (this_sym20718,k){
var this__20720 = this;
var this_sym20718__20721 = this;
var node__20722 = this_sym20718__20721;
return node__20722.cljs$core$ILookup$_lookup$arity$2(node__20722,k);
});
var G__20765__3 = (function (this_sym20719,k,not_found){
var this__20720 = this;
var this_sym20719__20723 = this;
var node__20724 = this_sym20719__20723;
return node__20724.cljs$core$ILookup$_lookup$arity$3(node__20724,k,not_found);
});
G__20765 = function(this_sym20719,k,not_found){
switch(arguments.length){
case 2:
return G__20765__2.call(this,this_sym20719,k);
case 3:
return G__20765__3.call(this,this_sym20719,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20765;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym20710,args20711){
var this__20725 = this;
return this_sym20710.call.apply(this_sym20710,[this_sym20710].concat(args20711.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__20726 = this;
return cljs.core.PersistentVector.fromArray([this__20726.key,this__20726.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__20727 = this;
return this__20727.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__20728 = this;
return this__20728.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__20729 = this;
var node__20730 = this;
return (new cljs.core.RedNode(this__20729.key,this__20729.val,this__20729.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__20731 = this;
var node__20732 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__20733 = this;
var node__20734 = this;
return (new cljs.core.RedNode(this__20733.key,this__20733.val,this__20733.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__20735 = this;
var node__20736 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__20737 = this;
var node__20738 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__20738,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__20739 = this;
var node__20740 = this;
return (new cljs.core.RedNode(this__20739.key,this__20739.val,del,this__20739.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__20741 = this;
var node__20742 = this;
return (new cljs.core.RedNode(this__20741.key,this__20741.val,ins,this__20741.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__20743 = this;
var node__20744 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20743.left))
{return (new cljs.core.RedNode(this__20743.key,this__20743.val,this__20743.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__20743.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20743.right))
{return (new cljs.core.RedNode(this__20743.right.key,this__20743.right.val,(new cljs.core.BlackNode(this__20743.key,this__20743.val,this__20743.left,this__20743.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__20743.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__20744,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__20766 = null;
var G__20766__0 = (function (){
var this__20745 = this;
var this__20747 = this;
return cljs.core.pr_str.call(null,this__20747);
});
G__20766 = function(){
switch(arguments.length){
case 0:
return G__20766__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20766;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__20748 = this;
var node__20749 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20748.right))
{return (new cljs.core.RedNode(this__20748.key,this__20748.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__20748.left,null)),this__20748.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20748.left))
{return (new cljs.core.RedNode(this__20748.left.key,this__20748.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__20748.left.left,null)),(new cljs.core.BlackNode(this__20748.key,this__20748.val,this__20748.left.right,this__20748.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__20749,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__20750 = this;
var node__20751 = this;
return (new cljs.core.BlackNode(this__20750.key,this__20750.val,this__20750.left,this__20750.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__20752 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__20753 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__20754 = this;
return cljs.core.list.call(null,this__20754.key,this__20754.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__20755 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__20756 = this;
return this__20756.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__20757 = this;
return cljs.core.PersistentVector.fromArray([this__20757.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__20758 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__20758.key,this__20758.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20759 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__20760 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__20760.key,this__20760.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__20761 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__20762 = this;
if((n === 0))
{return this__20762.key;
} else
{if((n === 1))
{return this__20762.val;
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
var this__20763 = this;
if((n === 0))
{return this__20763.key;
} else
{if((n === 1))
{return this__20763.val;
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
var this__20764 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__20770 = comp.call(null,k,tree.key);
if((c__20770 === 0))
{(found[0] = tree);
return null;
} else
{if((c__20770 < 0))
{var ins__20771 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__20771 == null)))
{return tree.add_left(ins__20771);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__20772 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__20772 == null)))
{return tree.add_right(ins__20772);
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
{var app__20775 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__20775))
{return (new cljs.core.RedNode(app__20775.key,app__20775.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__20775.left,null)),(new cljs.core.RedNode(right.key,right.val,app__20775.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__20775,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__20776 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__20776))
{return (new cljs.core.RedNode(app__20776.key,app__20776.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__20776.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__20776.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__20776,right.right,null)));
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
{var c__20782 = comp.call(null,k,tree.key);
if((c__20782 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__20782 < 0))
{var del__20783 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____20784 = !((del__20783 == null));
if(or__3824__auto____20784)
{return or__3824__auto____20784;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__20783,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__20783,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__20785 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____20786 = !((del__20785 == null));
if(or__3824__auto____20786)
{return or__3824__auto____20786;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__20785);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__20785,null));
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
var tk__20789 = tree.key;
var c__20790 = comp.call(null,k,tk__20789);
if((c__20790 === 0))
{return tree.replace(tk__20789,v,tree.left,tree.right);
} else
{if((c__20790 < 0))
{return tree.replace(tk__20789,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__20789,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__20793 = this;
var h__2309__auto____20794 = this__20793.__hash;
if(!((h__2309__auto____20794 == null)))
{return h__2309__auto____20794;
} else
{var h__2309__auto____20795 = cljs.core.hash_imap.call(null,coll);
this__20793.__hash = h__2309__auto____20795;
return h__2309__auto____20795;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20796 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20797 = this;
var n__20798 = coll.entry_at(k);
if(!((n__20798 == null)))
{return n__20798.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20799 = this;
var found__20800 = [null];
var t__20801 = cljs.core.tree_map_add.call(null,this__20799.comp,this__20799.tree,k,v,found__20800);
if((t__20801 == null))
{var found_node__20802 = cljs.core.nth.call(null,found__20800,0);
if(cljs.core._EQ_.call(null,v,found_node__20802.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__20799.comp,cljs.core.tree_map_replace.call(null,this__20799.comp,this__20799.tree,k,v),this__20799.cnt,this__20799.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__20799.comp,t__20801.blacken(),(this__20799.cnt + 1),this__20799.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20803 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__20837 = null;
var G__20837__2 = (function (this_sym20804,k){
var this__20806 = this;
var this_sym20804__20807 = this;
var coll__20808 = this_sym20804__20807;
return coll__20808.cljs$core$ILookup$_lookup$arity$2(coll__20808,k);
});
var G__20837__3 = (function (this_sym20805,k,not_found){
var this__20806 = this;
var this_sym20805__20809 = this;
var coll__20810 = this_sym20805__20809;
return coll__20810.cljs$core$ILookup$_lookup$arity$3(coll__20810,k,not_found);
});
G__20837 = function(this_sym20805,k,not_found){
switch(arguments.length){
case 2:
return G__20837__2.call(this,this_sym20805,k);
case 3:
return G__20837__3.call(this,this_sym20805,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20837;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym20791,args20792){
var this__20811 = this;
return this_sym20791.call.apply(this_sym20791,[this_sym20791].concat(args20792.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20812 = this;
if(!((this__20812.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__20812.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20813 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__20814 = this;
if((this__20814.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20814.tree,false,this__20814.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__20815 = this;
var this__20816 = this;
return cljs.core.pr_str.call(null,this__20816);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__20817 = this;
var coll__20818 = this;
var t__20819 = this__20817.tree;
while(true){
if(!((t__20819 == null)))
{var c__20820 = this__20817.comp.call(null,k,t__20819.key);
if((c__20820 === 0))
{return t__20819;
} else
{if((c__20820 < 0))
{{
var G__20838 = t__20819.left;
t__20819 = G__20838;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__20839 = t__20819.right;
t__20819 = G__20839;
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
var this__20821 = this;
if((this__20821.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20821.tree,ascending_QMARK_,this__20821.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__20822 = this;
if((this__20822.cnt > 0))
{var stack__20823 = null;
var t__20824 = this__20822.tree;
while(true){
if(!((t__20824 == null)))
{var c__20825 = this__20822.comp.call(null,k,t__20824.key);
if((c__20825 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__20823,t__20824),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__20825 < 0))
{{
var G__20840 = cljs.core.conj.call(null,stack__20823,t__20824);
var G__20841 = t__20824.left;
stack__20823 = G__20840;
t__20824 = G__20841;
continue;
}
} else
{{
var G__20842 = stack__20823;
var G__20843 = t__20824.right;
stack__20823 = G__20842;
t__20824 = G__20843;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__20825 > 0))
{{
var G__20844 = cljs.core.conj.call(null,stack__20823,t__20824);
var G__20845 = t__20824.right;
stack__20823 = G__20844;
t__20824 = G__20845;
continue;
}
} else
{{
var G__20846 = stack__20823;
var G__20847 = t__20824.left;
stack__20823 = G__20846;
t__20824 = G__20847;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__20823 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__20823,ascending_QMARK_,-1,null));
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
var this__20826 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__20827 = this;
return this__20827.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20828 = this;
if((this__20828.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20828.tree,true,this__20828.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20829 = this;
return this__20829.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20830 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20831 = this;
return (new cljs.core.PersistentTreeMap(this__20831.comp,this__20831.tree,this__20831.cnt,meta,this__20831.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20832 = this;
return this__20832.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20833 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__20833.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20834 = this;
var found__20835 = [null];
var t__20836 = cljs.core.tree_map_remove.call(null,this__20834.comp,this__20834.tree,k,found__20835);
if((t__20836 == null))
{if((cljs.core.nth.call(null,found__20835,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__20834.comp,null,0,this__20834.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__20834.comp,t__20836.blacken(),(this__20834.cnt - 1),this__20834.meta,null));
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
var in__20850 = cljs.core.seq.call(null,keyvals);
var out__20851 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__20850)
{{
var G__20852 = cljs.core.nnext.call(null,in__20850);
var G__20853 = cljs.core.assoc_BANG_.call(null,out__20851,cljs.core.first.call(null,in__20850),cljs.core.second.call(null,in__20850));
in__20850 = G__20852;
out__20851 = G__20853;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20851);
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
hash_map.cljs$lang$applyTo = (function (arglist__20854){
var keyvals = cljs.core.seq(arglist__20854);;
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
array_map.cljs$lang$applyTo = (function (arglist__20855){
var keyvals = cljs.core.seq(arglist__20855);;
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
var ks__20859 = [];
var obj__20860 = {};
var kvs__20861 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__20861)
{ks__20859.push(cljs.core.first.call(null,kvs__20861));
(obj__20860[cljs.core.first.call(null,kvs__20861)] = cljs.core.second.call(null,kvs__20861));
{
var G__20862 = cljs.core.nnext.call(null,kvs__20861);
kvs__20861 = G__20862;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__20859,obj__20860);
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
obj_map.cljs$lang$applyTo = (function (arglist__20863){
var keyvals = cljs.core.seq(arglist__20863);;
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
var in__20866 = cljs.core.seq.call(null,keyvals);
var out__20867 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__20866)
{{
var G__20868 = cljs.core.nnext.call(null,in__20866);
var G__20869 = cljs.core.assoc.call(null,out__20867,cljs.core.first.call(null,in__20866),cljs.core.second.call(null,in__20866));
in__20866 = G__20868;
out__20867 = G__20869;
continue;
}
} else
{return out__20867;
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
sorted_map.cljs$lang$applyTo = (function (arglist__20870){
var keyvals = cljs.core.seq(arglist__20870);;
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
var in__20873 = cljs.core.seq.call(null,keyvals);
var out__20874 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__20873)
{{
var G__20875 = cljs.core.nnext.call(null,in__20873);
var G__20876 = cljs.core.assoc.call(null,out__20874,cljs.core.first.call(null,in__20873),cljs.core.second.call(null,in__20873));
in__20873 = G__20875;
out__20874 = G__20876;
continue;
}
} else
{return out__20874;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__20877){
var comparator = cljs.core.first(arglist__20877);
var keyvals = cljs.core.rest(arglist__20877);
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
{return cljs.core.reduce.call(null,(function (p1__20878_SHARP_,p2__20879_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____20881 = p1__20878_SHARP_;
if(cljs.core.truth_(or__3824__auto____20881))
{return or__3824__auto____20881;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__20879_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__20882){
var maps = cljs.core.seq(arglist__20882);;
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
{var merge_entry__20890 = (function (m,e){
var k__20888 = cljs.core.first.call(null,e);
var v__20889 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__20888))
{return cljs.core.assoc.call(null,m,k__20888,f.call(null,cljs.core._lookup.call(null,m,k__20888,null),v__20889));
} else
{return cljs.core.assoc.call(null,m,k__20888,v__20889);
}
});
var merge2__20892 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__20890,(function (){var or__3824__auto____20891 = m1;
if(cljs.core.truth_(or__3824__auto____20891))
{return or__3824__auto____20891;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__20892,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__20893){
var f = cljs.core.first(arglist__20893);
var maps = cljs.core.rest(arglist__20893);
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
var ret__20898 = cljs.core.ObjMap.EMPTY;
var keys__20899 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__20899)
{var key__20900 = cljs.core.first.call(null,keys__20899);
var entry__20901 = cljs.core._lookup.call(null,map,key__20900,"\uFDD0'cljs.core/not-found");
{
var G__20902 = ((cljs.core.not_EQ_.call(null,entry__20901,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__20898,key__20900,entry__20901):ret__20898);
var G__20903 = cljs.core.next.call(null,keys__20899);
ret__20898 = G__20902;
keys__20899 = G__20903;
continue;
}
} else
{return ret__20898;
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
var this__20907 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__20907.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20908 = this;
var h__2309__auto____20909 = this__20908.__hash;
if(!((h__2309__auto____20909 == null)))
{return h__2309__auto____20909;
} else
{var h__2309__auto____20910 = cljs.core.hash_iset.call(null,coll);
this__20908.__hash = h__2309__auto____20910;
return h__2309__auto____20910;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__20911 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__20912 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20912.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__20933 = null;
var G__20933__2 = (function (this_sym20913,k){
var this__20915 = this;
var this_sym20913__20916 = this;
var coll__20917 = this_sym20913__20916;
return coll__20917.cljs$core$ILookup$_lookup$arity$2(coll__20917,k);
});
var G__20933__3 = (function (this_sym20914,k,not_found){
var this__20915 = this;
var this_sym20914__20918 = this;
var coll__20919 = this_sym20914__20918;
return coll__20919.cljs$core$ILookup$_lookup$arity$3(coll__20919,k,not_found);
});
G__20933 = function(this_sym20914,k,not_found){
switch(arguments.length){
case 2:
return G__20933__2.call(this,this_sym20914,k);
case 3:
return G__20933__3.call(this,this_sym20914,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20933;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym20905,args20906){
var this__20920 = this;
return this_sym20905.call.apply(this_sym20905,[this_sym20905].concat(args20906.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20921 = this;
return (new cljs.core.PersistentHashSet(this__20921.meta,cljs.core.assoc.call(null,this__20921.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__20922 = this;
var this__20923 = this;
return cljs.core.pr_str.call(null,this__20923);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20924 = this;
return cljs.core.keys.call(null,this__20924.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__20925 = this;
return (new cljs.core.PersistentHashSet(this__20925.meta,cljs.core.dissoc.call(null,this__20925.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20926 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20927 = this;
var and__3822__auto____20928 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____20928)
{var and__3822__auto____20929 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____20929)
{return cljs.core.every_QMARK_.call(null,(function (p1__20904_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20904_SHARP_);
}),other);
} else
{return and__3822__auto____20929;
}
} else
{return and__3822__auto____20928;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20930 = this;
return (new cljs.core.PersistentHashSet(meta,this__20930.hash_map,this__20930.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20931 = this;
return this__20931.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20932 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__20932.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__20934 = cljs.core.count.call(null,items);
var i__20935 = 0;
var out__20936 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__20935 < len__20934))
{{
var G__20937 = (i__20935 + 1);
var G__20938 = cljs.core.conj_BANG_.call(null,out__20936,(items[i__20935]));
i__20935 = G__20937;
out__20936 = G__20938;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20936);
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
var G__20956 = null;
var G__20956__2 = (function (this_sym20942,k){
var this__20944 = this;
var this_sym20942__20945 = this;
var tcoll__20946 = this_sym20942__20945;
if((cljs.core._lookup.call(null,this__20944.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__20956__3 = (function (this_sym20943,k,not_found){
var this__20944 = this;
var this_sym20943__20947 = this;
var tcoll__20948 = this_sym20943__20947;
if((cljs.core._lookup.call(null,this__20944.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__20956 = function(this_sym20943,k,not_found){
switch(arguments.length){
case 2:
return G__20956__2.call(this,this_sym20943,k);
case 3:
return G__20956__3.call(this,this_sym20943,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20956;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym20940,args20941){
var this__20949 = this;
return this_sym20940.call.apply(this_sym20940,[this_sym20940].concat(args20941.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__20950 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__20951 = this;
if((cljs.core._lookup.call(null,this__20951.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__20952 = this;
return cljs.core.count.call(null,this__20952.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__20953 = this;
this__20953.transient_map = cljs.core.dissoc_BANG_.call(null,this__20953.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__20954 = this;
this__20954.transient_map = cljs.core.assoc_BANG_.call(null,this__20954.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20955 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__20955.transient_map),null));
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
var this__20959 = this;
var h__2309__auto____20960 = this__20959.__hash;
if(!((h__2309__auto____20960 == null)))
{return h__2309__auto____20960;
} else
{var h__2309__auto____20961 = cljs.core.hash_iset.call(null,coll);
this__20959.__hash = h__2309__auto____20961;
return h__2309__auto____20961;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__20962 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__20963 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20963.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__20989 = null;
var G__20989__2 = (function (this_sym20964,k){
var this__20966 = this;
var this_sym20964__20967 = this;
var coll__20968 = this_sym20964__20967;
return coll__20968.cljs$core$ILookup$_lookup$arity$2(coll__20968,k);
});
var G__20989__3 = (function (this_sym20965,k,not_found){
var this__20966 = this;
var this_sym20965__20969 = this;
var coll__20970 = this_sym20965__20969;
return coll__20970.cljs$core$ILookup$_lookup$arity$3(coll__20970,k,not_found);
});
G__20989 = function(this_sym20965,k,not_found){
switch(arguments.length){
case 2:
return G__20989__2.call(this,this_sym20965,k);
case 3:
return G__20989__3.call(this,this_sym20965,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20989;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym20957,args20958){
var this__20971 = this;
return this_sym20957.call.apply(this_sym20957,[this_sym20957].concat(args20958.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20972 = this;
return (new cljs.core.PersistentTreeSet(this__20972.meta,cljs.core.assoc.call(null,this__20972.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__20973 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__20973.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__20974 = this;
var this__20975 = this;
return cljs.core.pr_str.call(null,this__20975);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__20976 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__20976.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__20977 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__20977.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__20978 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__20979 = this;
return cljs.core._comparator.call(null,this__20979.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20980 = this;
return cljs.core.keys.call(null,this__20980.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__20981 = this;
return (new cljs.core.PersistentTreeSet(this__20981.meta,cljs.core.dissoc.call(null,this__20981.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20982 = this;
return cljs.core.count.call(null,this__20982.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20983 = this;
var and__3822__auto____20984 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____20984)
{var and__3822__auto____20985 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____20985)
{return cljs.core.every_QMARK_.call(null,(function (p1__20939_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20939_SHARP_);
}),other);
} else
{return and__3822__auto____20985;
}
} else
{return and__3822__auto____20984;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20986 = this;
return (new cljs.core.PersistentTreeSet(meta,this__20986.tree_map,this__20986.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20987 = this;
return this__20987.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20988 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__20988.meta);
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
var G__20994__delegate = function (keys){
var in__20992 = cljs.core.seq.call(null,keys);
var out__20993 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__20992))
{{
var G__20995 = cljs.core.next.call(null,in__20992);
var G__20996 = cljs.core.conj_BANG_.call(null,out__20993,cljs.core.first.call(null,in__20992));
in__20992 = G__20995;
out__20993 = G__20996;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20993);
}
break;
}
};
var G__20994 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20994__delegate.call(this, keys);
};
G__20994.cljs$lang$maxFixedArity = 0;
G__20994.cljs$lang$applyTo = (function (arglist__20997){
var keys = cljs.core.seq(arglist__20997);;
return G__20994__delegate(keys);
});
G__20994.cljs$lang$arity$variadic = G__20994__delegate;
return G__20994;
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
sorted_set.cljs$lang$applyTo = (function (arglist__20998){
var keys = cljs.core.seq(arglist__20998);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__21000){
var comparator = cljs.core.first(arglist__21000);
var keys = cljs.core.rest(arglist__21000);
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
{var n__21006 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____21007 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____21007))
{var e__21008 = temp__3971__auto____21007;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__21008));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__21006,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__20999_SHARP_){
var temp__3971__auto____21009 = cljs.core.find.call(null,smap,p1__20999_SHARP_);
if(cljs.core.truth_(temp__3971__auto____21009))
{var e__21010 = temp__3971__auto____21009;
return cljs.core.second.call(null,e__21010);
} else
{return p1__20999_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__21040 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__21033,seen){
while(true){
var vec__21034__21035 = p__21033;
var f__21036 = cljs.core.nth.call(null,vec__21034__21035,0,null);
var xs__21037 = vec__21034__21035;
var temp__3974__auto____21038 = cljs.core.seq.call(null,xs__21037);
if(temp__3974__auto____21038)
{var s__21039 = temp__3974__auto____21038;
if(cljs.core.contains_QMARK_.call(null,seen,f__21036))
{{
var G__21041 = cljs.core.rest.call(null,s__21039);
var G__21042 = seen;
p__21033 = G__21041;
seen = G__21042;
continue;
}
} else
{return cljs.core.cons.call(null,f__21036,step.call(null,cljs.core.rest.call(null,s__21039),cljs.core.conj.call(null,seen,f__21036)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__21040.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__21045 = cljs.core.PersistentVector.EMPTY;
var s__21046 = s;
while(true){
if(cljs.core.next.call(null,s__21046))
{{
var G__21047 = cljs.core.conj.call(null,ret__21045,cljs.core.first.call(null,s__21046));
var G__21048 = cljs.core.next.call(null,s__21046);
ret__21045 = G__21047;
s__21046 = G__21048;
continue;
}
} else
{return cljs.core.seq.call(null,ret__21045);
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
{if((function (){var or__3824__auto____21051 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____21051)
{return or__3824__auto____21051;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__21052 = x.lastIndexOf("/");
if((i__21052 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__21052 + 1));
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
if((function (){var or__3824__auto____21055 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____21055)
{return or__3824__auto____21055;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__21056 = x.lastIndexOf("/");
if((i__21056 > -1))
{return cljs.core.subs.call(null,x,2,i__21056);
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
var map__21063 = cljs.core.ObjMap.EMPTY;
var ks__21064 = cljs.core.seq.call(null,keys);
var vs__21065 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____21066 = ks__21064;
if(and__3822__auto____21066)
{return vs__21065;
} else
{return and__3822__auto____21066;
}
})())
{{
var G__21067 = cljs.core.assoc.call(null,map__21063,cljs.core.first.call(null,ks__21064),cljs.core.first.call(null,vs__21065));
var G__21068 = cljs.core.next.call(null,ks__21064);
var G__21069 = cljs.core.next.call(null,vs__21065);
map__21063 = G__21067;
ks__21064 = G__21068;
vs__21065 = G__21069;
continue;
}
} else
{return map__21063;
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
var G__21072__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__21057_SHARP_,p2__21058_SHARP_){
return max_key.call(null,k,p1__21057_SHARP_,p2__21058_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__21072 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21072__delegate.call(this, k, x, y, more);
};
G__21072.cljs$lang$maxFixedArity = 3;
G__21072.cljs$lang$applyTo = (function (arglist__21073){
var k = cljs.core.first(arglist__21073);
var x = cljs.core.first(cljs.core.next(arglist__21073));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21073)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21073)));
return G__21072__delegate(k, x, y, more);
});
G__21072.cljs$lang$arity$variadic = G__21072__delegate;
return G__21072;
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
var G__21074__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__21070_SHARP_,p2__21071_SHARP_){
return min_key.call(null,k,p1__21070_SHARP_,p2__21071_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__21074 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21074__delegate.call(this, k, x, y, more);
};
G__21074.cljs$lang$maxFixedArity = 3;
G__21074.cljs$lang$applyTo = (function (arglist__21075){
var k = cljs.core.first(arglist__21075);
var x = cljs.core.first(cljs.core.next(arglist__21075));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21075)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21075)));
return G__21074__delegate(k, x, y, more);
});
G__21074.cljs$lang$arity$variadic = G__21074__delegate;
return G__21074;
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
var temp__3974__auto____21078 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21078)
{var s__21079 = temp__3974__auto____21078;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__21079),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__21079)));
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
var temp__3974__auto____21082 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21082)
{var s__21083 = temp__3974__auto____21082;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__21083))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__21083),take_while.call(null,pred,cljs.core.rest.call(null,s__21083)));
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
var comp__21085 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__21085.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__21097 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____21098 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____21098))
{var vec__21099__21100 = temp__3974__auto____21098;
var e__21101 = cljs.core.nth.call(null,vec__21099__21100,0,null);
var s__21102 = vec__21099__21100;
if(cljs.core.truth_(include__21097.call(null,e__21101)))
{return s__21102;
} else
{return cljs.core.next.call(null,s__21102);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__21097,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____21103 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____21103))
{var vec__21104__21105 = temp__3974__auto____21103;
var e__21106 = cljs.core.nth.call(null,vec__21104__21105,0,null);
var s__21107 = vec__21104__21105;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__21106))?s__21107:cljs.core.next.call(null,s__21107)));
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
var include__21119 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____21120 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____21120))
{var vec__21121__21122 = temp__3974__auto____21120;
var e__21123 = cljs.core.nth.call(null,vec__21121__21122,0,null);
var s__21124 = vec__21121__21122;
if(cljs.core.truth_(include__21119.call(null,e__21123)))
{return s__21124;
} else
{return cljs.core.next.call(null,s__21124);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__21119,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____21125 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____21125))
{var vec__21126__21127 = temp__3974__auto____21125;
var e__21128 = cljs.core.nth.call(null,vec__21126__21127,0,null);
var s__21129 = vec__21126__21127;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__21128))?s__21129:cljs.core.next.call(null,s__21129)));
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
var this__21130 = this;
var h__2309__auto____21131 = this__21130.__hash;
if(!((h__2309__auto____21131 == null)))
{return h__2309__auto____21131;
} else
{var h__2309__auto____21132 = cljs.core.hash_coll.call(null,rng);
this__21130.__hash = h__2309__auto____21132;
return h__2309__auto____21132;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__21133 = this;
if((this__21133.step > 0))
{if(((this__21133.start + this__21133.step) < this__21133.end))
{return (new cljs.core.Range(this__21133.meta,(this__21133.start + this__21133.step),this__21133.end,this__21133.step,null));
} else
{return null;
}
} else
{if(((this__21133.start + this__21133.step) > this__21133.end))
{return (new cljs.core.Range(this__21133.meta,(this__21133.start + this__21133.step),this__21133.end,this__21133.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__21134 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__21135 = this;
var this__21136 = this;
return cljs.core.pr_str.call(null,this__21136);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__21137 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__21138 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__21139 = this;
if((this__21139.step > 0))
{if((this__21139.start < this__21139.end))
{return rng;
} else
{return null;
}
} else
{if((this__21139.start > this__21139.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__21140 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__21140.end - this__21140.start) / this__21140.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__21141 = this;
return this__21141.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__21142 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__21142.meta,(this__21142.start + this__21142.step),this__21142.end,this__21142.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__21143 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__21144 = this;
return (new cljs.core.Range(meta,this__21144.start,this__21144.end,this__21144.step,this__21144.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__21145 = this;
return this__21145.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__21146 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__21146.start + (n * this__21146.step));
} else
{if((function (){var and__3822__auto____21147 = (this__21146.start > this__21146.end);
if(and__3822__auto____21147)
{return (this__21146.step === 0);
} else
{return and__3822__auto____21147;
}
})())
{return this__21146.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__21148 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__21148.start + (n * this__21148.step));
} else
{if((function (){var and__3822__auto____21149 = (this__21148.start > this__21148.end);
if(and__3822__auto____21149)
{return (this__21148.step === 0);
} else
{return and__3822__auto____21149;
}
})())
{return this__21148.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__21150 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__21150.meta);
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
var temp__3974__auto____21153 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21153)
{var s__21154 = temp__3974__auto____21153;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__21154),take_nth.call(null,n,cljs.core.drop.call(null,n,s__21154)));
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
var temp__3974__auto____21161 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21161)
{var s__21162 = temp__3974__auto____21161;
var fst__21163 = cljs.core.first.call(null,s__21162);
var fv__21164 = f.call(null,fst__21163);
var run__21165 = cljs.core.cons.call(null,fst__21163,cljs.core.take_while.call(null,(function (p1__21155_SHARP_){
return cljs.core._EQ_.call(null,fv__21164,f.call(null,p1__21155_SHARP_));
}),cljs.core.next.call(null,s__21162)));
return cljs.core.cons.call(null,run__21165,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__21165),s__21162))));
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
var temp__3971__auto____21180 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____21180)
{var s__21181 = temp__3971__auto____21180;
return reductions.call(null,f,cljs.core.first.call(null,s__21181),cljs.core.rest.call(null,s__21181));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21182 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21182)
{var s__21183 = temp__3974__auto____21182;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__21183)),cljs.core.rest.call(null,s__21183));
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
var G__21186 = null;
var G__21186__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__21186__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__21186__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__21186__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__21186__4 = (function() { 
var G__21187__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__21187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21187__delegate.call(this, x, y, z, args);
};
G__21187.cljs$lang$maxFixedArity = 3;
G__21187.cljs$lang$applyTo = (function (arglist__21188){
var x = cljs.core.first(arglist__21188);
var y = cljs.core.first(cljs.core.next(arglist__21188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21188)));
return G__21187__delegate(x, y, z, args);
});
G__21187.cljs$lang$arity$variadic = G__21187__delegate;
return G__21187;
})()
;
G__21186 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21186__0.call(this);
case 1:
return G__21186__1.call(this,x);
case 2:
return G__21186__2.call(this,x,y);
case 3:
return G__21186__3.call(this,x,y,z);
default:
return G__21186__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21186.cljs$lang$maxFixedArity = 3;
G__21186.cljs$lang$applyTo = G__21186__4.cljs$lang$applyTo;
return G__21186;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__21189 = null;
var G__21189__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__21189__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__21189__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__21189__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__21189__4 = (function() { 
var G__21190__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__21190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21190__delegate.call(this, x, y, z, args);
};
G__21190.cljs$lang$maxFixedArity = 3;
G__21190.cljs$lang$applyTo = (function (arglist__21191){
var x = cljs.core.first(arglist__21191);
var y = cljs.core.first(cljs.core.next(arglist__21191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21191)));
return G__21190__delegate(x, y, z, args);
});
G__21190.cljs$lang$arity$variadic = G__21190__delegate;
return G__21190;
})()
;
G__21189 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21189__0.call(this);
case 1:
return G__21189__1.call(this,x);
case 2:
return G__21189__2.call(this,x,y);
case 3:
return G__21189__3.call(this,x,y,z);
default:
return G__21189__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21189.cljs$lang$maxFixedArity = 3;
G__21189.cljs$lang$applyTo = G__21189__4.cljs$lang$applyTo;
return G__21189;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__21192 = null;
var G__21192__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__21192__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__21192__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__21192__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__21192__4 = (function() { 
var G__21193__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__21193 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21193__delegate.call(this, x, y, z, args);
};
G__21193.cljs$lang$maxFixedArity = 3;
G__21193.cljs$lang$applyTo = (function (arglist__21194){
var x = cljs.core.first(arglist__21194);
var y = cljs.core.first(cljs.core.next(arglist__21194));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21194)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21194)));
return G__21193__delegate(x, y, z, args);
});
G__21193.cljs$lang$arity$variadic = G__21193__delegate;
return G__21193;
})()
;
G__21192 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21192__0.call(this);
case 1:
return G__21192__1.call(this,x);
case 2:
return G__21192__2.call(this,x,y);
case 3:
return G__21192__3.call(this,x,y,z);
default:
return G__21192__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21192.cljs$lang$maxFixedArity = 3;
G__21192.cljs$lang$applyTo = G__21192__4.cljs$lang$applyTo;
return G__21192;
})()
});
var juxt__4 = (function() { 
var G__21195__delegate = function (f,g,h,fs){
var fs__21185 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__21196 = null;
var G__21196__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__21166_SHARP_,p2__21167_SHARP_){
return cljs.core.conj.call(null,p1__21166_SHARP_,p2__21167_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__21185);
});
var G__21196__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__21168_SHARP_,p2__21169_SHARP_){
return cljs.core.conj.call(null,p1__21168_SHARP_,p2__21169_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__21185);
});
var G__21196__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__21170_SHARP_,p2__21171_SHARP_){
return cljs.core.conj.call(null,p1__21170_SHARP_,p2__21171_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__21185);
});
var G__21196__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__21172_SHARP_,p2__21173_SHARP_){
return cljs.core.conj.call(null,p1__21172_SHARP_,p2__21173_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__21185);
});
var G__21196__4 = (function() { 
var G__21197__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__21174_SHARP_,p2__21175_SHARP_){
return cljs.core.conj.call(null,p1__21174_SHARP_,cljs.core.apply.call(null,p2__21175_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__21185);
};
var G__21197 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21197__delegate.call(this, x, y, z, args);
};
G__21197.cljs$lang$maxFixedArity = 3;
G__21197.cljs$lang$applyTo = (function (arglist__21198){
var x = cljs.core.first(arglist__21198);
var y = cljs.core.first(cljs.core.next(arglist__21198));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21198)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21198)));
return G__21197__delegate(x, y, z, args);
});
G__21197.cljs$lang$arity$variadic = G__21197__delegate;
return G__21197;
})()
;
G__21196 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21196__0.call(this);
case 1:
return G__21196__1.call(this,x);
case 2:
return G__21196__2.call(this,x,y);
case 3:
return G__21196__3.call(this,x,y,z);
default:
return G__21196__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21196.cljs$lang$maxFixedArity = 3;
G__21196.cljs$lang$applyTo = G__21196__4.cljs$lang$applyTo;
return G__21196;
})()
};
var G__21195 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21195__delegate.call(this, f, g, h, fs);
};
G__21195.cljs$lang$maxFixedArity = 3;
G__21195.cljs$lang$applyTo = (function (arglist__21199){
var f = cljs.core.first(arglist__21199);
var g = cljs.core.first(cljs.core.next(arglist__21199));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21199)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21199)));
return G__21195__delegate(f, g, h, fs);
});
G__21195.cljs$lang$arity$variadic = G__21195__delegate;
return G__21195;
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
var G__21202 = cljs.core.next.call(null,coll);
coll = G__21202;
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
if(cljs.core.truth_((function (){var and__3822__auto____21201 = cljs.core.seq.call(null,coll);
if(and__3822__auto____21201)
{return (n > 0);
} else
{return and__3822__auto____21201;
}
})()))
{{
var G__21203 = (n - 1);
var G__21204 = cljs.core.next.call(null,coll);
n = G__21203;
coll = G__21204;
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
var matches__21206 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__21206),s))
{if((cljs.core.count.call(null,matches__21206) === 1))
{return cljs.core.first.call(null,matches__21206);
} else
{return cljs.core.vec.call(null,matches__21206);
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
var matches__21208 = re.exec(s);
if((matches__21208 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__21208) === 1))
{return cljs.core.first.call(null,matches__21208);
} else
{return cljs.core.vec.call(null,matches__21208);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__21213 = cljs.core.re_find.call(null,re,s);
var match_idx__21214 = s.search(re);
var match_str__21215 = ((cljs.core.coll_QMARK_.call(null,match_data__21213))?cljs.core.first.call(null,match_data__21213):match_data__21213);
var post_match__21216 = cljs.core.subs.call(null,s,(match_idx__21214 + cljs.core.count.call(null,match_str__21215)));
if(cljs.core.truth_(match_data__21213))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__21213,re_seq.call(null,re,post_match__21216));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__21223__21224 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___21225 = cljs.core.nth.call(null,vec__21223__21224,0,null);
var flags__21226 = cljs.core.nth.call(null,vec__21223__21224,1,null);
var pattern__21227 = cljs.core.nth.call(null,vec__21223__21224,2,null);
return (new RegExp(pattern__21227,flags__21226));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__21217_SHARP_){
return print_one.call(null,p1__21217_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____21237 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____21237))
{var and__3822__auto____21241 = (function (){var G__21238__21239 = obj;
if(G__21238__21239)
{if((function (){var or__3824__auto____21240 = (G__21238__21239.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____21240)
{return or__3824__auto____21240;
} else
{return G__21238__21239.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__21238__21239.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__21238__21239);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__21238__21239);
}
})();
if(cljs.core.truth_(and__3822__auto____21241))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____21241;
}
} else
{return and__3822__auto____21237;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____21242 = !((obj == null));
if(and__3822__auto____21242)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____21242;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__21243__21244 = obj;
if(G__21243__21244)
{if((function (){var or__3824__auto____21245 = (G__21243__21244.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____21245)
{return or__3824__auto____21245;
} else
{return G__21243__21244.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__21243__21244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__21243__21244);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__21243__21244);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__21265 = (new goog.string.StringBuffer());
var G__21266__21267 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__21266__21267)
{var string__21268 = cljs.core.first.call(null,G__21266__21267);
var G__21266__21269 = G__21266__21267;
while(true){
sb__21265.append(string__21268);
var temp__3974__auto____21270 = cljs.core.next.call(null,G__21266__21269);
if(temp__3974__auto____21270)
{var G__21266__21271 = temp__3974__auto____21270;
{
var G__21284 = cljs.core.first.call(null,G__21266__21271);
var G__21285 = G__21266__21271;
string__21268 = G__21284;
G__21266__21269 = G__21285;
continue;
}
} else
{}
break;
}
} else
{}
var G__21272__21273 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__21272__21273)
{var obj__21274 = cljs.core.first.call(null,G__21272__21273);
var G__21272__21275 = G__21272__21273;
while(true){
sb__21265.append(" ");
var G__21276__21277 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__21274,opts));
if(G__21276__21277)
{var string__21278 = cljs.core.first.call(null,G__21276__21277);
var G__21276__21279 = G__21276__21277;
while(true){
sb__21265.append(string__21278);
var temp__3974__auto____21280 = cljs.core.next.call(null,G__21276__21279);
if(temp__3974__auto____21280)
{var G__21276__21281 = temp__3974__auto____21280;
{
var G__21286 = cljs.core.first.call(null,G__21276__21281);
var G__21287 = G__21276__21281;
string__21278 = G__21286;
G__21276__21279 = G__21287;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____21282 = cljs.core.next.call(null,G__21272__21275);
if(temp__3974__auto____21282)
{var G__21272__21283 = temp__3974__auto____21282;
{
var G__21288 = cljs.core.first.call(null,G__21272__21283);
var G__21289 = G__21272__21283;
obj__21274 = G__21288;
G__21272__21275 = G__21289;
continue;
}
} else
{}
break;
}
} else
{}
return sb__21265;
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
var sb__21291 = cljs.core.pr_sb.call(null,objs,opts);
sb__21291.append("\n");
return [cljs.core.str(sb__21291)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__21310__21311 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__21310__21311)
{var string__21312 = cljs.core.first.call(null,G__21310__21311);
var G__21310__21313 = G__21310__21311;
while(true){
cljs.core.string_print.call(null,string__21312);
var temp__3974__auto____21314 = cljs.core.next.call(null,G__21310__21313);
if(temp__3974__auto____21314)
{var G__21310__21315 = temp__3974__auto____21314;
{
var G__21328 = cljs.core.first.call(null,G__21310__21315);
var G__21329 = G__21310__21315;
string__21312 = G__21328;
G__21310__21313 = G__21329;
continue;
}
} else
{}
break;
}
} else
{}
var G__21316__21317 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__21316__21317)
{var obj__21318 = cljs.core.first.call(null,G__21316__21317);
var G__21316__21319 = G__21316__21317;
while(true){
cljs.core.string_print.call(null," ");
var G__21320__21321 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__21318,opts));
if(G__21320__21321)
{var string__21322 = cljs.core.first.call(null,G__21320__21321);
var G__21320__21323 = G__21320__21321;
while(true){
cljs.core.string_print.call(null,string__21322);
var temp__3974__auto____21324 = cljs.core.next.call(null,G__21320__21323);
if(temp__3974__auto____21324)
{var G__21320__21325 = temp__3974__auto____21324;
{
var G__21330 = cljs.core.first.call(null,G__21320__21325);
var G__21331 = G__21320__21325;
string__21322 = G__21330;
G__21320__21323 = G__21331;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____21326 = cljs.core.next.call(null,G__21316__21319);
if(temp__3974__auto____21326)
{var G__21316__21327 = temp__3974__auto____21326;
{
var G__21332 = cljs.core.first.call(null,G__21316__21327);
var G__21333 = G__21316__21327;
obj__21318 = G__21332;
G__21316__21319 = G__21333;
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
pr_str.cljs$lang$applyTo = (function (arglist__21334){
var objs = cljs.core.seq(arglist__21334);;
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
prn_str.cljs$lang$applyTo = (function (arglist__21335){
var objs = cljs.core.seq(arglist__21335);;
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
pr.cljs$lang$applyTo = (function (arglist__21336){
var objs = cljs.core.seq(arglist__21336);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__21337){
var objs = cljs.core.seq(arglist__21337);;
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
print_str.cljs$lang$applyTo = (function (arglist__21338){
var objs = cljs.core.seq(arglist__21338);;
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
println.cljs$lang$applyTo = (function (arglist__21339){
var objs = cljs.core.seq(arglist__21339);;
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
println_str.cljs$lang$applyTo = (function (arglist__21340){
var objs = cljs.core.seq(arglist__21340);;
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
prn.cljs$lang$applyTo = (function (arglist__21341){
var objs = cljs.core.seq(arglist__21341);;
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
printf.cljs$lang$applyTo = (function (arglist__21342){
var fmt = cljs.core.first(arglist__21342);
var args = cljs.core.rest(arglist__21342);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21343 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21343,"{",", ","}",opts,coll);
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
var pr_pair__21344 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21344,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21345 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21345,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____21346 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____21346))
{var nspc__21347 = temp__3974__auto____21346;
return [cljs.core.str(nspc__21347),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____21348 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____21348))
{var nspc__21349 = temp__3974__auto____21348;
return [cljs.core.str(nspc__21349),cljs.core.str("/")].join('');
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
var pr_pair__21350 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21350,"{",", ","}",opts,coll);
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
var normalize__21352 = (function (n,len){
var ns__21351 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__21351) < len))
{{
var G__21354 = [cljs.core.str("0"),cljs.core.str(ns__21351)].join('');
ns__21351 = G__21354;
continue;
}
} else
{return ns__21351;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__21352.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__21352.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__21352.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__21352.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__21352.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__21352.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__21353 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21353,"{",", ","}",opts,coll);
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
var this__21355 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__21356 = this;
var G__21357__21358 = cljs.core.seq.call(null,this__21356.watches);
if(G__21357__21358)
{var G__21360__21362 = cljs.core.first.call(null,G__21357__21358);
var vec__21361__21363 = G__21360__21362;
var key__21364 = cljs.core.nth.call(null,vec__21361__21363,0,null);
var f__21365 = cljs.core.nth.call(null,vec__21361__21363,1,null);
var G__21357__21366 = G__21357__21358;
var G__21360__21367 = G__21360__21362;
var G__21357__21368 = G__21357__21366;
while(true){
var vec__21369__21370 = G__21360__21367;
var key__21371 = cljs.core.nth.call(null,vec__21369__21370,0,null);
var f__21372 = cljs.core.nth.call(null,vec__21369__21370,1,null);
var G__21357__21373 = G__21357__21368;
f__21372.call(null,key__21371,this$,oldval,newval);
var temp__3974__auto____21374 = cljs.core.next.call(null,G__21357__21373);
if(temp__3974__auto____21374)
{var G__21357__21375 = temp__3974__auto____21374;
{
var G__21382 = cljs.core.first.call(null,G__21357__21375);
var G__21383 = G__21357__21375;
G__21360__21367 = G__21382;
G__21357__21368 = G__21383;
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
var this__21376 = this;
return this$.watches = cljs.core.assoc.call(null,this__21376.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__21377 = this;
return this$.watches = cljs.core.dissoc.call(null,this__21377.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__21378 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__21378.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__21379 = this;
return this__21379.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__21380 = this;
return this__21380.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__21381 = this;
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
var G__21395__delegate = function (x,p__21384){
var map__21390__21391 = p__21384;
var map__21390__21392 = ((cljs.core.seq_QMARK_.call(null,map__21390__21391))?cljs.core.apply.call(null,cljs.core.hash_map,map__21390__21391):map__21390__21391);
var validator__21393 = cljs.core._lookup.call(null,map__21390__21392,"\uFDD0'validator",null);
var meta__21394 = cljs.core._lookup.call(null,map__21390__21392,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__21394,validator__21393,null));
};
var G__21395 = function (x,var_args){
var p__21384 = null;
if (goog.isDef(var_args)) {
  p__21384 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21395__delegate.call(this, x, p__21384);
};
G__21395.cljs$lang$maxFixedArity = 1;
G__21395.cljs$lang$applyTo = (function (arglist__21396){
var x = cljs.core.first(arglist__21396);
var p__21384 = cljs.core.rest(arglist__21396);
return G__21395__delegate(x, p__21384);
});
G__21395.cljs$lang$arity$variadic = G__21395__delegate;
return G__21395;
})()
;
atom = function(x,var_args){
var p__21384 = var_args;
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
var temp__3974__auto____21400 = a.validator;
if(cljs.core.truth_(temp__3974__auto____21400))
{var validate__21401 = temp__3974__auto____21400;
if(cljs.core.truth_(validate__21401.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__21402 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__21402,new_value);
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
var G__21403__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__21403 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__21403__delegate.call(this, a, f, x, y, z, more);
};
G__21403.cljs$lang$maxFixedArity = 5;
G__21403.cljs$lang$applyTo = (function (arglist__21404){
var a = cljs.core.first(arglist__21404);
var f = cljs.core.first(cljs.core.next(arglist__21404));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21404)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21404))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21404)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21404)))));
return G__21403__delegate(a, f, x, y, z, more);
});
G__21403.cljs$lang$arity$variadic = G__21403__delegate;
return G__21403;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__21405){
var iref = cljs.core.first(arglist__21405);
var f = cljs.core.first(cljs.core.next(arglist__21405));
var args = cljs.core.rest(cljs.core.next(arglist__21405));
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
var this__21406 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__21406.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__21407 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__21407.state,(function (p__21408){
var map__21409__21410 = p__21408;
var map__21409__21411 = ((cljs.core.seq_QMARK_.call(null,map__21409__21410))?cljs.core.apply.call(null,cljs.core.hash_map,map__21409__21410):map__21409__21410);
var curr_state__21412 = map__21409__21411;
var done__21413 = cljs.core._lookup.call(null,map__21409__21411,"\uFDD0'done",null);
if(cljs.core.truth_(done__21413))
{return curr_state__21412;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__21407.f.call(null)});
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
var map__21434__21435 = options;
var map__21434__21436 = ((cljs.core.seq_QMARK_.call(null,map__21434__21435))?cljs.core.apply.call(null,cljs.core.hash_map,map__21434__21435):map__21434__21435);
var keywordize_keys__21437 = cljs.core._lookup.call(null,map__21434__21436,"\uFDD0'keywordize-keys",null);
var keyfn__21438 = (cljs.core.truth_(keywordize_keys__21437)?cljs.core.keyword:cljs.core.str);
var f__21453 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2579__auto____21452 = (function iter__21446(s__21447){
return (new cljs.core.LazySeq(null,false,(function (){
var s__21447__21450 = s__21447;
while(true){
if(cljs.core.seq.call(null,s__21447__21450))
{var k__21451 = cljs.core.first.call(null,s__21447__21450);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__21438.call(null,k__21451),thisfn.call(null,(x[k__21451]))], true),iter__21446.call(null,cljs.core.rest.call(null,s__21447__21450)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2579__auto____21452.call(null,cljs.core.js_keys.call(null,x));
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
return f__21453.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__21454){
var x = cljs.core.first(arglist__21454);
var options = cljs.core.rest(arglist__21454);
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
var mem__21459 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__21463__delegate = function (args){
var temp__3971__auto____21460 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__21459),args,null);
if(cljs.core.truth_(temp__3971__auto____21460))
{var v__21461 = temp__3971__auto____21460;
return v__21461;
} else
{var ret__21462 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__21459,cljs.core.assoc,args,ret__21462);
return ret__21462;
}
};
var G__21463 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21463__delegate.call(this, args);
};
G__21463.cljs$lang$maxFixedArity = 0;
G__21463.cljs$lang$applyTo = (function (arglist__21464){
var args = cljs.core.seq(arglist__21464);;
return G__21463__delegate(args);
});
G__21463.cljs$lang$arity$variadic = G__21463__delegate;
return G__21463;
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
var ret__21466 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__21466))
{{
var G__21467 = ret__21466;
f = G__21467;
continue;
}
} else
{return ret__21466;
}
break;
}
});
var trampoline__2 = (function() { 
var G__21468__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__21468 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21468__delegate.call(this, f, args);
};
G__21468.cljs$lang$maxFixedArity = 1;
G__21468.cljs$lang$applyTo = (function (arglist__21469){
var f = cljs.core.first(arglist__21469);
var args = cljs.core.rest(arglist__21469);
return G__21468__delegate(f, args);
});
G__21468.cljs$lang$arity$variadic = G__21468__delegate;
return G__21468;
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
var k__21471 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__21471,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__21471,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____21480 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____21480)
{return or__3824__auto____21480;
} else
{var or__3824__auto____21481 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____21481)
{return or__3824__auto____21481;
} else
{var and__3822__auto____21482 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____21482)
{var and__3822__auto____21483 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____21483)
{var and__3822__auto____21484 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____21484)
{var ret__21485 = true;
var i__21486 = 0;
while(true){
if((function (){var or__3824__auto____21487 = cljs.core.not.call(null,ret__21485);
if(or__3824__auto____21487)
{return or__3824__auto____21487;
} else
{return (i__21486 === cljs.core.count.call(null,parent));
}
})())
{return ret__21485;
} else
{{
var G__21488 = isa_QMARK_.call(null,h,child.call(null,i__21486),parent.call(null,i__21486));
var G__21489 = (i__21486 + 1);
ret__21485 = G__21488;
i__21486 = G__21489;
continue;
}
}
break;
}
} else
{return and__3822__auto____21484;
}
} else
{return and__3822__auto____21483;
}
} else
{return and__3822__auto____21482;
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
var tp__21498 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__21499 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__21500 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__21501 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____21502 = ((cljs.core.contains_QMARK_.call(null,tp__21498.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__21500.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__21500.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__21498,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__21501.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__21499,parent,ta__21500),"\uFDD0'descendants":tf__21501.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__21500,tag,td__21499)});
})());
if(cljs.core.truth_(or__3824__auto____21502))
{return or__3824__auto____21502;
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
var parentMap__21507 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__21508 = (cljs.core.truth_(parentMap__21507.call(null,tag))?cljs.core.disj.call(null,parentMap__21507.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__21509 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__21508))?cljs.core.assoc.call(null,parentMap__21507,tag,childsParents__21508):cljs.core.dissoc.call(null,parentMap__21507,tag));
var deriv_seq__21510 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__21490_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__21490_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__21490_SHARP_),cljs.core.second.call(null,p1__21490_SHARP_)));
}),cljs.core.seq.call(null,newParents__21509)));
if(cljs.core.contains_QMARK_.call(null,parentMap__21507.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__21491_SHARP_,p2__21492_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__21491_SHARP_,p2__21492_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__21510));
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
var xprefs__21518 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____21520 = (cljs.core.truth_((function (){var and__3822__auto____21519 = xprefs__21518;
if(cljs.core.truth_(and__3822__auto____21519))
{return xprefs__21518.call(null,y);
} else
{return and__3822__auto____21519;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____21520))
{return or__3824__auto____21520;
} else
{var or__3824__auto____21522 = (function (){var ps__21521 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__21521) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__21521),prefer_table)))
{} else
{}
{
var G__21525 = cljs.core.rest.call(null,ps__21521);
ps__21521 = G__21525;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____21522))
{return or__3824__auto____21522;
} else
{var or__3824__auto____21524 = (function (){var ps__21523 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__21523) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__21523),y,prefer_table)))
{} else
{}
{
var G__21526 = cljs.core.rest.call(null,ps__21523);
ps__21523 = G__21526;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____21524))
{return or__3824__auto____21524;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____21528 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____21528))
{return or__3824__auto____21528;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__21546 = cljs.core.reduce.call(null,(function (be,p__21538){
var vec__21539__21540 = p__21538;
var k__21541 = cljs.core.nth.call(null,vec__21539__21540,0,null);
var ___21542 = cljs.core.nth.call(null,vec__21539__21540,1,null);
var e__21543 = vec__21539__21540;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__21541))
{var be2__21545 = (cljs.core.truth_((function (){var or__3824__auto____21544 = (be == null);
if(or__3824__auto____21544)
{return or__3824__auto____21544;
} else
{return cljs.core.dominates.call(null,k__21541,cljs.core.first.call(null,be),prefer_table);
}
})())?e__21543:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__21545),k__21541,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__21541),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__21545)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__21545;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__21546))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__21546));
return cljs.core.second.call(null,best_entry__21546);
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
if((function (){var and__3822__auto____21551 = mf;
if(and__3822__auto____21551)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____21551;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2480__auto____21552 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21553 = (cljs.core._reset[goog.typeOf(x__2480__auto____21552)]);
if(or__3824__auto____21553)
{return or__3824__auto____21553;
} else
{var or__3824__auto____21554 = (cljs.core._reset["_"]);
if(or__3824__auto____21554)
{return or__3824__auto____21554;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____21559 = mf;
if(and__3822__auto____21559)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____21559;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2480__auto____21560 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21561 = (cljs.core._add_method[goog.typeOf(x__2480__auto____21560)]);
if(or__3824__auto____21561)
{return or__3824__auto____21561;
} else
{var or__3824__auto____21562 = (cljs.core._add_method["_"]);
if(or__3824__auto____21562)
{return or__3824__auto____21562;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____21567 = mf;
if(and__3822__auto____21567)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____21567;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2480__auto____21568 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21569 = (cljs.core._remove_method[goog.typeOf(x__2480__auto____21568)]);
if(or__3824__auto____21569)
{return or__3824__auto____21569;
} else
{var or__3824__auto____21570 = (cljs.core._remove_method["_"]);
if(or__3824__auto____21570)
{return or__3824__auto____21570;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____21575 = mf;
if(and__3822__auto____21575)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____21575;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2480__auto____21576 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21577 = (cljs.core._prefer_method[goog.typeOf(x__2480__auto____21576)]);
if(or__3824__auto____21577)
{return or__3824__auto____21577;
} else
{var or__3824__auto____21578 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____21578)
{return or__3824__auto____21578;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____21583 = mf;
if(and__3822__auto____21583)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____21583;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2480__auto____21584 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21585 = (cljs.core._get_method[goog.typeOf(x__2480__auto____21584)]);
if(or__3824__auto____21585)
{return or__3824__auto____21585;
} else
{var or__3824__auto____21586 = (cljs.core._get_method["_"]);
if(or__3824__auto____21586)
{return or__3824__auto____21586;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____21591 = mf;
if(and__3822__auto____21591)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____21591;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2480__auto____21592 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21593 = (cljs.core._methods[goog.typeOf(x__2480__auto____21592)]);
if(or__3824__auto____21593)
{return or__3824__auto____21593;
} else
{var or__3824__auto____21594 = (cljs.core._methods["_"]);
if(or__3824__auto____21594)
{return or__3824__auto____21594;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____21599 = mf;
if(and__3822__auto____21599)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____21599;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2480__auto____21600 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21601 = (cljs.core._prefers[goog.typeOf(x__2480__auto____21600)]);
if(or__3824__auto____21601)
{return or__3824__auto____21601;
} else
{var or__3824__auto____21602 = (cljs.core._prefers["_"]);
if(or__3824__auto____21602)
{return or__3824__auto____21602;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____21607 = mf;
if(and__3822__auto____21607)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____21607;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2480__auto____21608 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21609 = (cljs.core._dispatch[goog.typeOf(x__2480__auto____21608)]);
if(or__3824__auto____21609)
{return or__3824__auto____21609;
} else
{var or__3824__auto____21610 = (cljs.core._dispatch["_"]);
if(or__3824__auto____21610)
{return or__3824__auto____21610;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__21613 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__21614 = cljs.core._get_method.call(null,mf,dispatch_val__21613);
if(cljs.core.truth_(target_fn__21614))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__21613)].join('')));
}
return cljs.core.apply.call(null,target_fn__21614,args);
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
var this__21615 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__21616 = this;
cljs.core.swap_BANG_.call(null,this__21616.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21616.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21616.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21616.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__21617 = this;
cljs.core.swap_BANG_.call(null,this__21617.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__21617.method_cache,this__21617.method_table,this__21617.cached_hierarchy,this__21617.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__21618 = this;
cljs.core.swap_BANG_.call(null,this__21618.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__21618.method_cache,this__21618.method_table,this__21618.cached_hierarchy,this__21618.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__21619 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__21619.cached_hierarchy),cljs.core.deref.call(null,this__21619.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__21619.method_cache,this__21619.method_table,this__21619.cached_hierarchy,this__21619.hierarchy);
}
var temp__3971__auto____21620 = cljs.core.deref.call(null,this__21619.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____21620))
{var target_fn__21621 = temp__3971__auto____21620;
return target_fn__21621;
} else
{var temp__3971__auto____21622 = cljs.core.find_and_cache_best_method.call(null,this__21619.name,dispatch_val,this__21619.hierarchy,this__21619.method_table,this__21619.prefer_table,this__21619.method_cache,this__21619.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____21622))
{var target_fn__21623 = temp__3971__auto____21622;
return target_fn__21623;
} else
{return cljs.core.deref.call(null,this__21619.method_table).call(null,this__21619.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__21624 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__21624.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__21624.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__21624.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__21624.method_cache,this__21624.method_table,this__21624.cached_hierarchy,this__21624.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__21625 = this;
return cljs.core.deref.call(null,this__21625.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__21626 = this;
return cljs.core.deref.call(null,this__21626.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__21627 = this;
return cljs.core.do_dispatch.call(null,mf,this__21627.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__21629__delegate = function (_,args){
var self__21628 = this;
return cljs.core._dispatch.call(null,self__21628,args);
};
var G__21629 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21629__delegate.call(this, _, args);
};
G__21629.cljs$lang$maxFixedArity = 1;
G__21629.cljs$lang$applyTo = (function (arglist__21630){
var _ = cljs.core.first(arglist__21630);
var args = cljs.core.rest(arglist__21630);
return G__21629__delegate(_, args);
});
G__21629.cljs$lang$arity$variadic = G__21629__delegate;
return G__21629;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__21631 = this;
return cljs.core._dispatch.call(null,self__21631,args);
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
var this__21632 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_21634,_){
var this__21633 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__21633.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__21635 = this;
var and__3822__auto____21636 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____21636)
{return (this__21635.uuid === other.uuid);
} else
{return and__3822__auto____21636;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__21637 = this;
var this__21638 = this;
return cljs.core.pr_str.call(null,this__21638);
});
cljs.core.UUID;
