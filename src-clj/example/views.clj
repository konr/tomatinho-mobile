(ns example.views
  (:require
    [hiccup
      [page :refer [html5]]
      [element :refer [javascript-tag]]
      [page :refer [include-js]]]))

(defn index-page []
  (html5
    [:head
     [:title "Tomatinho"]
     (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
     ]
    [:body
     [:div {:id "content"}]
     (javascript-tag "var CLOSURE_NO_DEPS = true;")
     (include-js "/js/main.js")
     (javascript-tag "$(document).ready(tomatinho.main.main);")
     ]))
