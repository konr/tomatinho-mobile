(ns tomatinho.jquery-mobile
  (:require
   [domina :refer [by-class]]
   [domina.events :refer [listen!]]
   [jayq.core :refer [$]]))

(defn swipe-between-pages []
  (.live ($ :div.ui-page) "swipeleft"
         #(let [next (-> ($ "div.ui-page-active") (.next "div[data-role='page']"))]
            (when (-> next count zero? not) (-> (js* "$.mobile") (.changePage next #_(clj->js {:transition "slide"}))))))
  (.live ($ :div.ui-page) "swiperight"
         #(let [prev (-> ($ "div.ui-page-active") (.prev "div[data-role='page']"))]
            (when (-> prev count zero? not)
              (-> (js* "$.mobile") (.changePage prev #_(clj->js {:transition "slide" :reverse true})))
              (-> prev (.addClass "ui-page-active"))))))

(defn animate-navbar []
  (doseq [id ["now" "archive" "agenda"]]
    (let [button-class (str "button-" id)
          id-with-hash (str "#" id)]
      (listen! (by-class button-class) :click #(-> (js* "$.mobile") (.changePage id-with-hash))))))

(defn close-popup [selector]
  (-> selector $ (.popup "close")))

(defn close-all-popups []
  (doseq [popup ($ "div[data-role=popup]")]
    (close-popup popup)))

(defn make-popup [selector]
  (-> selector $ (.trigger "create") .popup (.popup "open")))

(defn make-popup-without-opening [selector]
  (-> selector $ (.trigger "create") .popup))

(defn make-horizontal-control-group [selector]
  (-> selector $ (.trigger "create") (.controlgroup)
      (.controlgroup "option" "type" "horizontal")))

(defn update-page []
  (-> ($ "div.ui-page-active") (.trigger "pagecreate")))

(defn reposition-popup-to-origin [selector]
  (.popup ($ selector) "reposition" (clj->js {:positionTo "origin"})))
