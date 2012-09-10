(ns tomatinho.main
  (:use [jayq.core :only [$ append delegate data]])
  (:require [clojure.browser.repl :as repl]))

(defn ^:export connect []
  (repl/connect "http://localhost:9000/repl")
  )

(defn ^:export alerta []
  (js/alert "Olá, mundo!"))

(defn ^:export main []

(js/alert "oi")
  )
(alerta)
(connect)

