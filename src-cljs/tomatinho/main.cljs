(ns tomatinho.main
  (:use [jayq.core :only [$ append delegate data inner]])
  (:require [clojure.browser.repl :as repl]))

(def $content
  #_($ :#content)
  (js/jQuery "#content")
  )

(defn ^:export main []
  (repl/connect "http://localhost:9000/repl")
  (-> (js/jQuery "#content") (jayq.core/append "foobar ")))

(main)
