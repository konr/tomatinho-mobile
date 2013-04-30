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
var G__3410 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["now","archive","agenda"], true));
while(true){
if(G__3410)
{var id = cljs.core.first.call(null,G__3410);
var button_class_3411 = [cljs.core.str("button-"),cljs.core.str(id)].join('');
var id_with_hash_3412 = [cljs.core.str("#"),cljs.core.str(id)].join('');
domina.events.listen_BANG_.call(null,domina.by_class.call(null,button_class_3411),"\uFDD0'click",((function (G__3410,button_class_3411,id_with_hash_3412,id){
return (function (){
return $.mobile.changePage(id_with_hash_3412);
});})(G__3410,button_class_3411,id_with_hash_3412,id))
);
{
var G__3413 = cljs.core.next.call(null,G__3410);
G__3410 = G__3413;
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
var G__3415 = cljs.core.seq.call(null,jayq.core.$.call(null,"div[data-role=popup]"));
while(true){
if(G__3415)
{var popup = cljs.core.first.call(null,G__3415);
tomatinho.jquery_mobile.close_popup.call(null,popup);
{
var G__3416 = cljs.core.next.call(null,G__3415);
G__3415 = G__3416;
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
