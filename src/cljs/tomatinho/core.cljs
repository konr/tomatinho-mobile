(ns tomatinho.core
  (:require [domina.events :refer [listen! unlisten!]]
            [tomatinho.templates :as t]
            [tomatinho.utils :refer [s->ms ms->s format-time now make-time
                                     find-first aggregate-time-blocks
                                     date-string yes-or-no log]]
            [tomatinho.jquery-mobile :refer [swipe-between-pages animate-navbar
                                             make-popup close-popup
                                             make-popup-without-opening
                                             make-horizontal-control-group
                                             close-all-popups
                                             update-page
                                             reposition-popup-to-origin]]
            [goog.object :as gobj]
            [goog.dom :as dom]
            [domina :refer [by-id by-class value append! prepend! destroy!
                            set-text! set-value! nodes html-to-dom add-class! remove-class!]]
            [hiccups.runtime :as hiccupsrt]
            [domina.css :refer [sel]]
            [shoreleave.browser.storage.localstorage :as ls]
            [goog.Timer :as goog-timer]
            [goog.date.DateTime :as goog-date]))


(declare handle-click-goal handle-plan-click handle-goal-prompt archive create-info-popup inhibit-sleep
         update-goals pomodoro-length timer*)

;; Aux
(def pomodoro-length (s->ms (* 25 60)))


;; Atoms
(def editanda (atom nil))
(def timer* (atom nil))
(def last-updated (atom {}))
(def storage (ls/storage))

(defn append-to-body! [x]
  (append! (sel "div.ui-page-active") x))



;; PhoneGap

(defn beep
  ([] (beep 1))
  ([n] (try (-> (js* "navigator") (.-notification) (.beep n))
            (catch js/Object e nil))))

(defn vibrate
  ([] (vibrate (s->ms 1)))
  ([n] (try (-> (js* "navigator") (.-notification) (.vibrate n))
            (catch js/Object e nil))))

(defn prompt
  ([message prior callback] (prompt message prior callback "" []))
  ([message prior callback title labels]
     (-> message (js/window.prompt prior) callback)
     ;; Cordova's prompt not working :(
     #_(try (-> (js* "navigator") (.-notification)
                (.prompt message callback title (clj->js labels)))
            (catch js/Object e nil))))

;; --


(defn update-notification []
  (let [options [:quiet :normal :noisy]
        new  (t/notification options (:notifications storage))]

    ;; Destroy
    (doseq [option options]
      (unlisten! (-> "#notification a.b%s" (format (name option)) sel) :click))
    (destroy! (sel "#notification div"))

    ;; Create
    (prepend! (sel "#notification") new)
    (make-horizontal-control-group "#notification .buttons")


    (doseq [option options]
      (listen! (-> "#notification a.b%s" (format (name option)) sel) :click
               #(do (assoc! storage :notifications option) (update-notification))))))

(defn update-resources []
  (let [;; Time
        right-now      (goog.now)
        morning        (-> (doto (now) (.setHours 8) (.setMinutes 0)) .getTime)
        first-pomodoro (if-let [{:keys [end duration]} (-> storage :history first)]
                         (- end duration))
        ;; Sets
        planned (-> storage :planned)
        current-set (let [!! (-> right-now make-time)] #{[(.getHours !!) (if (< (.getMinutes !!) 30) 0 30)]})
        actual (->> storage :history
                    (map #(->> (- (:end %) (:duration %)) make-time
                               ((fn [k] {:end (:end %)
                                        :hours (.getHours k)
                                        :truncated-minutes (if (< (.getMinutes k) 30) 0 30)})))))
        ;; Work day
        start (or (-> storage :day-start)
                  (-> (if first-pomodoro (min (max morning first-pomodoro) right-now) right-now) make-time .getHours))
        end (-> storage :day-end)
        so-far (->> storage :history count)
        facienda (let [{h :hours m :truncate-minutes} (last actual)
                       after-h-m (fn [[h' m']] (or (< h h') (and (= h h') (< m m'))))]
                   (->> planned (filter after-h-m) count))]

    ;; Remove debris
    (doto (sel "#day-plan tr.time")
      unlisten!
      destroy!)

    ;; Update countation
    (doseq [[place text] [["#start-hour"     (format "%02d:00" start)]
                          ["#end-hour"       (format "%02d:00" end)]
                          ["#pomodoro-max"   (+ facienda so-far)]
                          ["#pomodoro-count" so-far]]]
      (set-text! (sel place) text))

    ;; Update hour table
    (doseq [hour (range start (inc end))]
      (let [find-nearest-actual (fn [minutes] (find-first #(and (= (:truncated-minutes %) minutes) (= (:hours %) hour)) actual))
            get-time-at (fn [minutes] (-> (doto (now) (.setHours hour) (.setMinutes minutes)) .getTime (+ pomodoro-length)))]
        (append! (sel "#day-plan tbody") (t/hour-line hour planned current-set (map find-nearest-actual [0 30]) (map get-time-at [0 30])))))
    (doseq [kind [:click]]
      (listen! (sel "#day-plan tr.time") kind #(handle-plan-click % kind)))))



(defn update-button
  ([] (update-button @timer* (:current storage) (now)))
  ([timer current now-object]
     ;; hopefully economical
     (destroy! (by-id "timer-text"))
     (append! (by-id "current-time") (t/time-button timer current now-object))))

(defn update-status []
  (destroy! (by-class "status"))
  (let [timer @timer*
        current (-> storage :current)]
    (doseq [items (aggregate-time-blocks (:history storage) pomodoro-length timer)]
      (append! (by-id "pomodoros") (t/pomodoro-list items pomodoro-length timer current)))))

(defn update-goals-popup []
  (let [goals (-> storage :goals vec)
        new (t/goals-popup-list goals)]
    (prepend! (sel "#goals-popup .placeholder") new)
    (update-page)
    (reposition-popup-to-origin "#goals-popup")
    (doseq [[id {:keys [name date complete]}] goals]
      (listen! (by-id id) :click #(handle-click-goal id complete))
      (listen! (-> (str "d" (cljs.core/name id)) by-id) :click
               #(do (assoc! storage :goals (dissoc (:goals storage) id)) (update-goals)))
      (listen! (-> (str "e" (cljs.core/name id)) by-id) :click
               #(do (reset! editanda id) (prompt "Name the goal" name handle-goal-prompt))))))

(defn update-goals []
  (destroy! (by-class "goal"))
  (let [goals (-> storage :goals vec)
        new (t/simple-goals-list goals)]
    (doseq [parent (-> ".simple-list ul" sel nodes)] (append! parent new))
    (when (sel "#goals-popup") (update-goals-popup))))


(defn update-reflectanda []
  (destroy! (by-class "reflectanda"))
  (let [nodes (t/reflectanda (-> storage :reflectanda) create-info-popup)
        parent (sel "#review tbody")]
    (doseq [node nodes] (append! parent node))))


(defn create-info-popup [n]
  (destroy! (by-id "info-popup"))
  (-> storage :reflectanda vec (get n) (t/info-popup pomodoro-length) make-popup))

(defn handle-range-click [e]
  (if-let [[kind hour] (->> e .-evt .-target .-id (re-seq #"\w+"))]
    (let [keyword (get {"start" :day-start "end" :day-end} kind)]
      (assoc! storage keyword (int hour))
      (update-resources)
      (close-popup "#popup"))))

(defn create-range-popup [e]
  (destroy! (by-id "popup"))
  (let [[start end] (->> [:day-start :day-end] (map storage))
        current (.getHours (now))
        popup (t/range-popup start end current)]
    (make-popup popup)
    (listen! (sel "table.range td") :click handle-range-click)))

(defn create-goals-popup []
  (unlisten! (sel "#goals-popup .add") :click)
  (destroy! (by-id "goals-popup"))

  (-> (t/goals-popup-base) append-to-body!)
  (make-popup "#goals-popup")
  (listen! (sel "#goals-popup .add") :click
           #(do (reset! editanda nil) (prompt "Name the goal" "" handle-goal-prompt)))

  (update-goals))


(defn create-archive-popup []
  (close-all-popups)
  (destroy! (sel "#archive-popup"))
  (append-to-body! (t/archive-popup))
  (make-popup "#archive-popup")
  (doseq [x (range 1 6)]
    (listen! (by-id (str "f" x)) :click #(do (close-popup "#archive-popup") (archive x)))))


(defn update-all []
  (update-resources)
  (update-notification)
  (update-reflectanda)
  (update-goals)
  (update-status)
  (update-button))

(defn handle-click-goal [id checked?]
  (assoc! storage :goals
          (update-in (:goals storage) [id :complete] (fn [& _] (not checked?))))
  (update-goals))




(defn parent [node]
  (-> node (dom/getAncestor identity)))


(extend-protocol IEncodeClojure
  goog.events.BrowserEvent
  (-js->clj
    ([x {:keys [keywordize-keys] :as options}]
       (let [keyfn (if keywordize-keys keyword str)]
         (zipmap (map keyfn (gobj/getKeys x)) (map -js->clj (gobj/getValues x)))))
    ([x] (-js->clj x {:keywordize-keys false}))))

(defn handle-plan-click [e kind]
  (let [event (->> e .-evt js->clj)
        target (event "target")]
    (log event target)
    (if-let [[kind & cetera] (->> target .-id (re-seq #"\w+"))]
      (if (= kind "planned")
        (let [planned (-> storage :planned)
              pair (map int cetera)
              exists? (find-first #(= % pair) planned)
              [old new] (if exists? ["present" "absent"] ["absent" "present"])]
          ;; Just for speed
          (doto target (remove-class! old) (add-class! new))
          (assoc! storage :planned ((if exists? disj conj) planned pair)) )
        (let [[presence end] cetera
              end (int end)
              without (->> storage :history (filter #(not= (:end %) end)) vec)]
          (when (yes-or-no "Are you sure you want to change the history?")
            (assoc! storage :history
                    (if (= presence "present") without
                        (->> {:end end :duration pomodoro-length :kind :pomodoro}
                             (conj without) (sort #(< (:end %1) (:end %2))))))
            (update-resources)
            (update-status)))))))


(defn handle-goal-prompt [name]
  (when name
    (let [date (goog.now)
          complete nil
          id @editanda
          id (or id (str date "-" name))
          pretty {id {:name name :date date :complete complete}}]
      (assoc! storage :goals (conj (:goals storage) pretty))
      (update-goals))))

(defn handle-click []
  (inhibit-sleep)
  (if (= (:current storage) :pause)
    (assoc! storage :current :work)
    (assoc! storage :current :pause))
  (reset! timer* 0)
  (reset! last-updated (zipmap [:agenda :pomodoro-list :beep :start-time]
                               (repeat (goog.now))))
  (update-button)
  (update-status))

(defn handle-forgo-click [e]
  (when (yes-or-no "Are you sure?")
    (assoc! storage :reflectanda [])
    (update-reflectanda)))


(defn ^:export tick []
  (let [now-object (now)
        unix-now (.getTime now-object)
        seconds-to-now #(-> unix-now (- %) ms->s)
        {:keys [agenda pomodoro-list start-time] :as lu} @last-updated
        n (reset! timer* (seconds-to-now start-time))
        cur (:current storage)
        duration-ms (s->ms n)]
    (update-button n cur now-object)

    ;; Finish an overdue pomodoro
    (when (and (= cur :work) (>= duration-ms pomodoro-length))
      (reset! timer* 0)
      (reset! last-updated (assoc lu :start-time unix-now))
      (assoc! storage :history
              (conj (:history storage) {:duration duration-ms :end (.getTime now-object) :kind :pomodoro}))
      (assoc! storage :current :pause)
      (update-resources))

    (when (> (seconds-to-now pomodoro-list) 30)
      (reset! last-updated (assoc lu :pomodoro-list unix-now)) (update-status))
    (when (and (or (= 30 (.getMinutes now-object)) (= 0 (.getMinutes now-object)))
               (> (seconds-to-now agenda) 60))
      (reset! last-updated (assoc lu :agenda unix-now)) (update-resources))
    (when (> (seconds-to-now (:beep lu)) 60)
      (reset! last-updated (assoc lu :beep unix-now))
      (case (:notifications storage)
        :quiet (log "so peaceful this message won't even show up")
        :normal (if (= :work cur)
                  (vibrate 0.5)
                  (do (vibrate 1) (beep)))
        :noisy (if (= :work cur)
                 (vibrate)
                 (let [away (-> n (/ 60) (/ 5) int (min 5))]
                   (vibrate) (beep away)))))))

;; ------------------------------------------------------

(defn ^:export inhibit-sleep
  ([] (inhibit-sleep pomodoro-length))
  ([milis]
     (try (.exec (js* "cordova")
                 #(log "lock acquired")
                 #(log "lock NOT acquired")
                 "KeepAwake" "keep_awake"
                 (-> milis str vector clj->js))
          (catch js/Object e nil))))

(defn ^:export reset []
  (when (yes-or-no "Really reset?")
    (reset! timer* 0)
    (doto storage
      (assoc! :current :pause)
      (assoc! :history [])
      (assoc! :goals {})
      (assoc! :planned #{}))
    (update-all)))

(defn ^:export archive [feeling]
  (assoc! storage :reflectanda
          (conj (:reflectanda storage)
                {:date (date-string (now))
                 :history (:history storage)
                 :feeling feeling
                 :goals (vals (:goals storage))}))
  (reset! timer* 0)
  (doto storage
    (assoc! :current :pause)
    (assoc! :history [])
    (assoc! :goals (->> storage :goals (filter (fn [[_ {:keys [complete]}]] (not complete))) (into {})))
    (assoc! :planned #{}))
  (update-all))

(->> storage :goals vec (filter (fn [[_ {:keys [complete]}]] complete)) (into {}) log)

(defn ^:export init []
  ;; Trying to keep the jquery stuff apart
  (swipe-between-pages)
  (animate-navbar)

  ;; Default values
  (doseq [[k v] [[:current :pause] [:history []] [:goals {}] [:planned #{}]
                 [:day-start 8] [:day-end 23] [:notifications :normal] [:refletanda []]]]
    (when (not (get storage k))
      (assoc! storage k v)))

  (doto storage (assoc! :current :pause))
  (reset! last-updated (zipmap [:agenda :pomodoro-list :beep :start-time]
                               (repeat (goog.now))))

  ;; Top-level listeners
  (listen! (sel "#current-time")   :click handle-click)
  (listen! (sel ".simple-list")    :click create-goals-popup)
  (listen! (sel "#resources")      :click create-range-popup)
  (listen! (sel "#forgo-reviews")  :click handle-forgo-click)
  (listen! (sel "#forgo-reviews")  :click handle-forgo-click)


  ;; JS timer, for browser testing
  #_(doto (goog.Timer. (/ 1000 1))
      (listen! goog.Timer/TICK tick)
      .start)

  (update-all))

(init)
