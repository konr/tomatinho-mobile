(defproject tomatinho-mobile "0.0.1"
  :description "The cool Emacs pomodoro timer, now on mobile!"
  :source-path "src-clj"
  :source-paths ["src-clj"]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.0.4"]
                 [jayq "0.1.0-alpha3"]
                 [hiccup "1.0.0"]]
  :dev-dependencies [[lein-ring "0.7.0"]]
  :plugins [[lein-cljsbuild "0.2.7"]]
  :cljsbuild {
    :builds [{:source-path "src-cljs"
              :compiler {:output-dir "resources/public/js/"
                         :output-to "resources/public/js/main.js"
                         :optimizations :simple
                         :pretty-print true}}]}
  :ring {:handler example.routes/app
         :port 3010
         :auto-refresh? true
         :auto-reload? true
         })
