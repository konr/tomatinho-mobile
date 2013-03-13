(ns tomatinho-mobile.core
  (:require-macros [hiccups.core :refer [html]]
                   [swiss-arrows.core :refer [-<> -<>> -?<> <<- -< -<< -<><]])

  (:require [domina.events :refer [listen!]]
            [domina :refer [by-id by-class value append! prepend! destroy! log attr]]
            [hiccups.runtime :as hiccupsrt]
            [shoreleave.browser.storage.localstorage :as ls]
            #_[swiss-arrows.core :refer [

                                         -<>
                                         ;;-<>> -?<> <<- -< -<< -<><
                                         ]]
            [goog.Timer :as goog-timer]
            [goog.date.DateTime :as goog-date]))

;; Aux

(defn now []
  (let [date (goog.date.DateTime.)]
    (.setTime date (goog.now))
    date))

(defn time-string [date]
  (format "%02d:%02d:%02d"
          (.getHours   date)
          (.getMinutes date)
          (.getSeconds date)))


(defn yes-or-no [question]
  (js/confirm question))


;; Storage


;; --

(def pomodoro-length (atom (* 25 60)))
(def max-distance (* 3600 1))

(defn ^:export separate-history []
  (let [history (:history (ls/storage))]
    (loop [[h & t :as all] (rest history)
           current (-> history first vector)
           saved []]
      (if (empty? all) (js/console.log (conj saved current))
          (if (some #(>= (:end %) (- (:start h) max-distance)) current)
            (recur t (conj current h) saved)
            (recur t (vector h) (conj saved current)))
          


          )
      )))


(defn make-string [length char]
  (->> char repeat (take length) (reduce str "")))

(defn tomatinho-display-tubes
  "Displays the pomodoros done so far as a series of tubes."
  []

  )

(defn update-screen [timer current history]
  (destroy! (by-class "status"))
  (destroy! (by-class "date"))
  (doseq [{:keys [kind duration] :as a} (conj history {:kind current :duration timer})]
    (append! (by-id "pomodoros")
             (html [:li {:class (-> kind name (str " status"))}
                    (make-string (/ duration 60) "░")])))
  (append! (by-id "pomodoros") "<li class=\"status\">-></li>")
  (append! (by-id "date") (format "<h1 class=\"date\">%s</h1>" (time-string (now)))))


(defn store-event [kind duration storage]
  (let [end (goog.now)
        start (- end duration)
        history (:history storage)]
    (assoc! storage :history (conj history {:start start :duration duration :end end :kind kind}))))

(defn handle-keypress [key timer* storage]
  (let [code->char
        {13 :return
         82 :R}
        char (-> key .-evt .-charCode code->char)]
    (js/console.log (-> storage :history rest))
    (when (= char :return)
      (let [cur (:current storage)
            kind (case cur :work :gave-up :pause :pause)
            duration @timer*]
        (when (= cur :pause) (assoc! storage :current :work))
        (store-event kind duration storage)
        (reset! timer* 0)))
    (when (and (= char :R) (yes-or-no "Reset?"))
      (assoc! storage :history [])
      (assoc! storage :current :work)
      (reset! timer* 0))))

(defn handle-tick [timer* storage]
  (let [n (swap! timer* inc)
        cur (:current storage)]
    (when (and (= cur :work) (= @pomodoro-length n))
      (reset! timer* 0)
      (store-event :pomodoro n storage)
      (assoc! storage :current :pause))
    (update-screen n cur (:history storage))))


(defn ^:export history? []
  (doseq [x (:history (ls/storage))]
    (js/console.log
     (format "%s %s %s"
             (:kind x)
             (:start x)
             (:duration x))
     )))


(defn ^:export init []
  (let [timer-object (goog.Timer. (/ 1000 100))
        assure-storage
        (fn [key val storage]
          (when (not (get storage key))
            (assoc! storage key val)))

        storage (ls/storage)
        timer* (atom 0)]


    (assure-storage :current :pause storage)
    (assure-storage :history [] storage)



    (listen! timer-object goog.Timer/TICK #(handle-tick timer* storage))
    (listen! js/document :keypress #(handle-keypress % timer* storage))
    (.start timer-object)))

;;  * map-style lookup - `(:search-results storage "default value")`
;;  * `get` lookups
;;  * `(count storage)` - the number of things/keys stored
;;  * `(assoc! storage :new-key "saved")` - update or add an item
;;  * `(dissoc! storage :saved-results)` - remove an item
;;  * `(empty! storage)` - Clear out the localStorage store
