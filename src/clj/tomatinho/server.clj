(ns tomatinho.server
  (:require [compojure.core :refer [defroutes GET POST]]
            [compojure.route :refer [resources not-found]]
            [compojure.handler :refer [site]]))

(defroutes app-routes
  (GET "/" [] "<p>Hello, Tomate! :D</p>")
  (resources "/")
  (not-found "<h1>:O</h1>404"))

(def handler
  (site app-routes))
