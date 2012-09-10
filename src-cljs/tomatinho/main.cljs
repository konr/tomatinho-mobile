(ns tomatinho.main
  (:use [jayq.core :only [$ append delegate data inner]])
  (:require [clojure.browser.repl :as repl]))

(def $content
  #_($ :#content)
  (js/jQuery "#content")
  )

(defn ^:export log [text]
  (.log js/console text))

(defn ^:export main []
  (log "Starting the App")
  (repl/connect "http://localhost:9000/repl")
  (dotimes [n 100] (mess-up)))


(defn mess-up []
  (-> (js/jQuery "#content") (jayq.core/append "foobar ")))
