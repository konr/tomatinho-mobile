(defproject tomatinho-mobile "0"
  :description "The cool Emacs pomodoro timer, now on mobile!"
  :url "http://konr.mobi/wiki/Tomatinho"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  ;; CLJ
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.2-SNAPSHOT"]
                 [tailrecursion/javelin "1.0.0-SNAPSHOT"]
                 [hiccups "0.2.0"]
                 [shoreleave/shoreleave-remote-ring "0.3.0"]
                 [shoreleave/shoreleave-remote "0.3.0"]
                 [shoreleave/shoreleave-browser "0.3.0"]
                 [com.cemerick/valip "0.3.2"]
                 [jayq "2.3.0"]
                 [compojure "1.1.5"]]


  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-swank "1.4.5"]
            [lein-ring "0.8.3"]]

  :ring {:handler tomatinho.server/handler}

  ;; CLJS
  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :compiler {:output-to "resources/public/js/tomatinho_dev.js"
                                        :optimizations :whitespace
                                        :pretty-print true}}
                       :prod {:source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/tomatinho.js"
                                         #_:externs #_["resources/public/externs/jquery-1.8.2.min.js"
                                                   "resources/public/externs/jquery.mobile-1.3.0.min.js"]
                                         :optimizations :simple}}}})
