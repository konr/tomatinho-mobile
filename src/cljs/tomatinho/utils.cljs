(ns tomatinho.utils
  (:require [goog.date.DateTime :as goog-date]
            [shoreleave.browser.storage.localstorage :as ls]))


(def storage (ls/storage))

(defn s->ms [s]  (* s 1000))
(defn ms->s [ms]  (/ ms 1000))

(defn make-time [unix]
  (let [date (goog.date.DateTime.)]
    (.setTime date unix)
    date))

(defn format-time [unix]
  (let [date (make-time unix)]
    (format "%02d:%02d" (.getHours date) (.getMinutes date))))

(defn now []
  (make-time (goog.now)))

(defn aggregate-time-blocks
  ([history pomodoro-length timer-object]
     (let [now {:end (goog.now) :kind :current :duration timer-object}
           max-distance pomodoro-length
           with-distance (->> (-> history vec (conj now) (conj now))
                              (partition 2 1)
                              (map (fn [[{e1 :end :as original} {e2 :end d2 :duration}]]
                                     (assoc original :distance (- e2 d2 e1)))))]
       (loop [[h & t :as all] with-distance
              current [] saved []]
         (if (empty? all) (-> saved (conj current) reverse (#(map reverse %)))
             (if (< (:distance h) max-distance)
               (recur t (conj current h) saved)
               (recur t [] (conj saved (conj current h)))))))))



(defn find-first [function coll]
  (->> coll (filter function) first))

(defn yes-or-no [question]
  (js/confirm question))

(defn log [& al]
  (js/console.log (clj->js al)))

(defn date-string [date]
  (format "%02d/%02d"
          (.getDate  date)
          (.getMonth date)))
