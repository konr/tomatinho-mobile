goog.provide('tomatinho.jquery_mobile');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina');
tomatinho.jquery_mobile.swipe_between_pages = (function swipe_between_pages(){
jayq.core.$.call(null,"\uFDD0'div.ui-page").live("swipeleft",(function (){
var next = jayq.core.$.call(null,"div.ui-page-active").next("div[data-role='page']");
if(!((cljs.core.count.call(null,next) === 0)))
{return $.mobile.changePage(next);
} else
{return null;
}
}));
return jayq.core.$.call(null,"\uFDD0'div.ui-page").live("swiperight",(function (){
var prev = jayq.core.$.call(null,"div.ui-page-active").prev("div[data-role='page']");
if(!((cljs.core.count.call(null,prev) === 0)))
{$.mobile.changePage(prev);
return prev.addClass("ui-page-active");
} else
{return null;
}
}));
});
tomatinho.jquery_mobile.animate_navbar = (function animate_navbar(){
var G__9027 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["now","archive","agenda"], true));
while(true){
if(G__9027)
{var id = cljs.core.first.call(null,G__9027);
var button_class_9028 = [cljs.core.str("button-"),cljs.core.str(id)].join('');
var id_with_hash_9029 = [cljs.core.str("#"),cljs.core.str(id)].join('');
domina.events.listen_BANG_.call(null,domina.by_class.call(null,button_class_9028),"\uFDD0'click",((function (G__9027,button_class_9028,id_with_hash_9029,id){
return (function (){
return $.mobile.changePage(id_with_hash_9029);
});})(G__9027,button_class_9028,id_with_hash_9029,id))
);
{
var G__9030 = cljs.core.next.call(null,G__9027);
G__9027 = G__9030;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.jquery_mobile.close_popup = (function close_popup(selector){
return jayq.core.$.call(null,selector).popup("close");
});
tomatinho.jquery_mobile.close_all_popups = (function close_all_popups(){
var G__9032 = cljs.core.seq.call(null,jayq.core.$.call(null,"div[data-role=popup]"));
while(true){
if(G__9032)
{var popup = cljs.core.first.call(null,G__9032);
tomatinho.jquery_mobile.close_popup.call(null,popup);
{
var G__9033 = cljs.core.next.call(null,G__9032);
G__9032 = G__9033;
continue;
}
} else
{return null;
}
break;
}
});
tomatinho.jquery_mobile.make_popup = (function make_popup(selector){
return jayq.core.$.call(null,selector).trigger("create").popup().popup("open");
});
tomatinho.jquery_mobile.make_popup_without_opening = (function make_popup_without_opening(selector){
return jayq.core.$.call(null,selector).trigger("create").popup();
});
tomatinho.jquery_mobile.make_horizontal_control_group = (function make_horizontal_control_group(selector){
return jayq.core.$.call(null,selector).trigger("create").controlgroup().controlgroup("option","type","horizontal");
});
tomatinho.jquery_mobile.update_page = (function update_page(){
return jayq.core.$.call(null,"div.ui-page-active").trigger("pagecreate");
});
tomatinho.jquery_mobile.reposition_popup_to_origin = (function reposition_popup_to_origin(selector){
return jayq.core.$.call(null,selector).popup("reposition",cljs.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'positionTo"],{"\uFDD0'positionTo":"origin"})));
});
