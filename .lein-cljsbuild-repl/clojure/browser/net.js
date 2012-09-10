goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__21659){
var vec__21660__21661 = p__21659;
var k__21662 = cljs.core.nth.call(null,vec__21660__21661,0,null);
var v__21663 = cljs.core.nth.call(null,vec__21660__21661,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__21662.toLowerCase()),v__21663], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____21680 = this$;
if(and__3822__auto____21680)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____21680;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2480__auto____21681 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21682 = (clojure.browser.net.connect[goog.typeOf(x__2480__auto____21681)]);
if(or__3824__auto____21682)
{return or__3824__auto____21682;
} else
{var or__3824__auto____21683 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____21683)
{return or__3824__auto____21683;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____21684 = this$;
if(and__3822__auto____21684)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____21684;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2480__auto____21685 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21686 = (clojure.browser.net.connect[goog.typeOf(x__2480__auto____21685)]);
if(or__3824__auto____21686)
{return or__3824__auto____21686;
} else
{var or__3824__auto____21687 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____21687)
{return or__3824__auto____21687;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____21688 = this$;
if(and__3822__auto____21688)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____21688;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2480__auto____21689 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21690 = (clojure.browser.net.connect[goog.typeOf(x__2480__auto____21689)]);
if(or__3824__auto____21690)
{return or__3824__auto____21690;
} else
{var or__3824__auto____21691 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____21691)
{return or__3824__auto____21691;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____21692 = this$;
if(and__3822__auto____21692)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____21692;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2480__auto____21693 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21694 = (clojure.browser.net.connect[goog.typeOf(x__2480__auto____21693)]);
if(or__3824__auto____21694)
{return or__3824__auto____21694;
} else
{var or__3824__auto____21695 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____21695)
{return or__3824__auto____21695;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____21716 = this$;
if(and__3822__auto____21716)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____21716;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2480__auto____21717 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21718 = (clojure.browser.net.transmit[goog.typeOf(x__2480__auto____21717)]);
if(or__3824__auto____21718)
{return or__3824__auto____21718;
} else
{var or__3824__auto____21719 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____21719)
{return or__3824__auto____21719;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____21720 = this$;
if(and__3822__auto____21720)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____21720;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2480__auto____21721 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21722 = (clojure.browser.net.transmit[goog.typeOf(x__2480__auto____21721)]);
if(or__3824__auto____21722)
{return or__3824__auto____21722;
} else
{var or__3824__auto____21723 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____21723)
{return or__3824__auto____21723;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____21724 = this$;
if(and__3822__auto____21724)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____21724;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2480__auto____21725 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21726 = (clojure.browser.net.transmit[goog.typeOf(x__2480__auto____21725)]);
if(or__3824__auto____21726)
{return or__3824__auto____21726;
} else
{var or__3824__auto____21727 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____21727)
{return or__3824__auto____21727;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____21728 = this$;
if(and__3822__auto____21728)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____21728;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2480__auto____21729 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21730 = (clojure.browser.net.transmit[goog.typeOf(x__2480__auto____21729)]);
if(or__3824__auto____21730)
{return or__3824__auto____21730;
} else
{var or__3824__auto____21731 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____21731)
{return or__3824__auto____21731;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____21732 = this$;
if(and__3822__auto____21732)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____21732;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2480__auto____21733 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21734 = (clojure.browser.net.transmit[goog.typeOf(x__2480__auto____21733)]);
if(or__3824__auto____21734)
{return or__3824__auto____21734;
} else
{var or__3824__auto____21735 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____21735)
{return or__3824__auto____21735;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____21740 = this$;
if(and__3822__auto____21740)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____21740;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2480__auto____21741 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21742 = (clojure.browser.net.close[goog.typeOf(x__2480__auto____21741)]);
if(or__3824__auto____21742)
{return or__3824__auto____21742;
} else
{var or__3824__auto____21743 = (clojure.browser.net.close["_"]);
if(or__3824__auto____21743)
{return or__3824__auto____21743;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__21744){
var vec__21745__21746 = p__21744;
var k__21747 = cljs.core.nth.call(null,vec__21745__21746,0,null);
var v__21748 = cljs.core.nth.call(null,vec__21745__21746,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__21747.toLowerCase()),v__21748], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__21749){
var vec__21750__21751 = p__21749;
var k__21752 = cljs.core.nth.call(null,vec__21750__21751,0,null);
var v__21753 = cljs.core.nth.call(null,vec__21750__21751,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__21752.toLowerCase()),v__21753], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____21762 = this$;
if(and__3822__auto____21762)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____21762;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2480__auto____21763 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21764 = (clojure.browser.net.register_service[goog.typeOf(x__2480__auto____21763)]);
if(or__3824__auto____21764)
{return or__3824__auto____21764;
} else
{var or__3824__auto____21765 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____21765)
{return or__3824__auto____21765;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____21766 = this$;
if(and__3822__auto____21766)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____21766;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2480__auto____21767 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21768 = (clojure.browser.net.register_service[goog.typeOf(x__2480__auto____21767)]);
if(or__3824__auto____21768)
{return or__3824__auto____21768;
} else
{var or__3824__auto____21769 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____21769)
{return or__3824__auto____21769;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____21781 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____21781))
{var config__21782 = temp__3974__auto____21781;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__21782)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__21783){
var vec__21784__21785 = p__21783;
var k__21786 = cljs.core.nth.call(null,vec__21784__21785,0,null);
var v__21787 = cljs.core.nth.call(null,vec__21784__21785,1,null);
var temp__3971__auto____21788 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__21786,null);
if(cljs.core.truth_(temp__3971__auto____21788))
{var field__21789 = temp__3971__auto____21788;
var G__21790__21791 = sum;
(G__21790__21791[field__21789] = v__21787);
return G__21790__21791;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
