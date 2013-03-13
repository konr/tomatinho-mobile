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
                 [swiss-arrows "0.5.1"]
                 [shoreleave/shoreleave-remote-ring "0.3.0"]
                 [shoreleave/shoreleave-remote "0.3.0"]
                 [shoreleave/shoreleave-browser "0.3.0"]
                 [com.cemerick/valip "0.3.2"]
                 [compojure "1.1.5"]]


  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-swank "1.4.5"]
            [lein-ring "0.8.3"]]

  :ring {:handler tomatinho.server/handler}

  :cljsbuild {:crossovers [swiss-arrows.core]
              :builds {:dev {:source-paths ["src/cljs"]
                             :compiler {:output-to "resources/public/js/tomatinho_dev.js"
                                        :optimizations :whitespace
                                        :pretty-print true}}
                       :prod {:source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/tomatinho.js"
                                         :optimizations :advanced}}}})
