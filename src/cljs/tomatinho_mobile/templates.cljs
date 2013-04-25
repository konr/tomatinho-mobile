(ns tomatinho.templates
  (:require-macros [hiccups.core :refer [html]])
  (:require [tomatinho.utils :refer [s->ms ms->s format-time now make-time
                                     aggregate-time-blocks]]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :refer [listen!]]
            [domina :refer [html-to-dom]]))



(defn feeling-to-emoticons [feeling]
  (let [kind (if (< feeling 3) "tristis" (if (> feeling 3) "laetus" "medius"))
        src (format "img/%s.png" kind)]
    (for [_ (range feeling)] [:img {:src src}])))

(defn header [content]
  ;; http://stackoverflow.com/questions/8088837/jquery-mobile-triggercreate-command-not-working
  [:div {:data-role "header" :class "ui-header ui-bar-a"}
   [:h3 {:class "ui-title"} content]])

(defn time-string [date]
  (format "%02d:%02d:%02d"
          (.getHours   date)
          (.getMinutes date)
          (.getSeconds date)))


(defn hour-line [hour planned current-set [actual-0 actual-30] [time-0 time-30]]
  (let [present-if-true #(if % "present" "absent")
        also-current-when #(if %1 (str "current " %2) %2)]
    (html
     [:tr.time
      [:td.hour {:rowspan "2"} (format "%dh" hour)]
      [:td {:class (present-if-true (contains? planned [hour 0]))
            :id (format "%s-%s-%s" "planned" hour 0)}]
      [:td {:class (->> actual-0 present-if-true (also-current-when (contains? current-set [hour 0])))
            :id (format "%s-%s-%s" "actual" (present-if-true actual-0) (-> actual-0 :end (or time-0)))}]]
     [:tr.time
      [:td {:class (present-if-true (contains? planned [hour 30]))
            :id (format "%s-%s-%s" "planned" hour 30)}]
      [:td {:class (->> actual-30 present-if-true (also-current-when (contains? current-set [hour 30])))
            :id (format "%s-%s-%s" "actual" (present-if-true actual-30) (-> actual-30 :end (or time-30)))}]])))


(defn notification [options current]
  (html [:div.buttons {:data-role "controlgroup" :data-type "horizontal"}
         (for [option options]
           [:a {:data-role "button"
                :class (format "b%s %s" (name option) (if (= option current) "ui-btn-active" ""))}
            (name option)])]))

(defn time-button [timer current now-object]

  (html [:span#timer-text
         [:h1 (time-string now-object)]
         [:h2 (case current
                :work (format "%02d'%02d" (/ timer 60) (mod timer 60))
                :pause (format "(inactive for %d')" (/ timer 60)))]]))


(defn pomodoro-list [[{:keys [kind end duration]} :as items] pomodoro-length timer current]
  (html [:div.history
         [:h2 {:class "status"}
          (if (and (= (count items) 1) (= kind :current)) "Now"
              (format "%s - %s"
                      (format-time (- (-> items last :end) (-> items last :duration)))
                      (if (= kind :current) "Now" (format-time end))))]
         (for [{:keys [kind duration distance end distance]} items]
           (let [percentage (if (= kind :pomodoro) 100
                                (if (= current :work) (-> 100.0 s->ms (/ pomodoro-length) (* timer)) 0))
                 text (if (= kind :pomodoro) "&nbsp;" (format "%d%%" percentage))
                 bar (html [:table.pomodoro-wrapper {:style "width: 100%"}
                            [:tr
                             (if (= percentage 0)
                               [:td {:class (format "current %s" (if (= current :work) "red" "green"))}]
                               [:td {:class (str "percentage " (if (= kind :current) "current"))
                                     :style (format "width: %f%%; background-color: red" percentage)} text
                                (when (and (> distance 0) (= percentage 100))
                                  [:span {:style "float: right; background-color: #0f0; border-radius: 1em; margin: -0.3em"}
                                   (format "+%d'" (-> distance ms->s (/ 60) int))])])
                             (when (and (= kind :current))
                               [:td {:style (format "border: 0; width: %f%%;" (- 100 percentage))} "→"])]])]
             (html [:div {:class (-> kind name (str " status"))} bar])))]))


(defn goals-popup-list [goals]
  (html
   [:ul {:data-role "listview" :class "goal"}
    (for [[id {:keys [name date complete]}] goals]
      [:li
       (if complete
         [:a {:id id :class "selected"} [:s.text name]]
         [:a {:id id} [:span.text name]])
       [:a {:class "split-button-custom delete" :id (str "d" (cljs.core/name id))
            :data-role "button" :data-icon "delete" :data-iconpos "notext"} "Delete"]
       [:a {:class "split-button-custom delete" :id (str "e" (cljs.core/name id))
            :href "#add-popup" :data-rel "popup"
            :data-role "button" :data-icon "edit" :data-iconpos "notext"} "Edit"]
       [:a {:style "display: none"}]])]))


(defn simple-goals-list [goals]
  (let [fake {:no-goals {:complete false :name "No goals set!"}
              :press {:complete false :name "Press here to set goals"}}]
    (html (for [[id {:keys [name complete]}] (if (empty? goals) fake goals)]
            [:li {:class "goal"} (if complete [:s name] name)]))))

(defn goals-popup-base []
  (html
   [:div {:data-role "popup" :id "goals-popup"}
    (header "Goals")
    [:div.placeholder]
    [:a.add {:data-role "button" :data-rel "popup" :href "#add-popup"} "Add"]]))

(defn add-popup [name]
  (html
   [:div {:data-role "popup" :id "add-popup"}
    (header "New goal")
    [:input {:type "text" :value name}]
    [:a.add {:data-role "button"} "Add"]]))


(defn info-popup [{:keys [date feeling goals history]} pomodoro-length]
  (html [:div {:data-role "popup" :id "info-popup"}
         (header date)
         [:p "Feeling: " (feeling-to-emoticons feeling)]
         [:h3 "Goals"]
         [:ul (for [{:keys [name date complete]} goals]
                [:li (if complete [:s name] name)])]
         [:h3 "Pomodoros"]
         [:table
          [:tbody
           (for [group (-> (aggregate-time-blocks history pomodoro-length 10) reverse rest)]
             [:tr
              [:td (format "%s:"
                           (format-time (- (-> group last :end) (-> group last :duration)))
                           (-> group first :end format-time))]
              [:td (for [_ (-> group count range)]
                     [:img {:src "img/tomate.png" :style "width: 1em"}])]])]]]))


(defn archive-popup []
  (html [:div {:data-role "popup" :id "archive-popup"}
         (header "How did it go?")
         (for [x (range 1 6)]
           [:button {:id (str "f" x)} (feeling-to-emoticons x)])]))

(defn range-popup [start end current]
  (html
   [:div {:data-role "popup" :id "popup"}
    (header "Start")
    [:table.range
     [:thead
      [:tr
       [:th "Start"]
       [:th "End"]]]
     [:tbody
      (for [hour (range 24)]
        [:tr
         [:td {:id (str "start-" hour)
               :class (if (= hour current) "current"
                          (if (= hour start) "limit"
                              (if (and (< hour end) (> hour start)) "within")))} hour]
         [:td {:id (str "end-" hour)
               :class (if (= hour current) "current"
                          (if (= hour end) "limit"
                              (if (and (< hour end) (> hour start)) "within")))} hour]])]]]))


(defn reflectanda [reflectanda on-click-fn]
  (if (-> reflectanda count zero?)
    (html [:tr.reflectanda [:td "-"] [:td "-"] [:td "0" [:img {:src "img/tomate.png" :style "width: 1em"}]] [:td "-/-"]])
    (for [[n {:keys [date feeling goals history]}] (zipmap (iterate inc 0) reflectanda)]
      (let [item [:tr.reflectanda
                  [:td date]
                  [:td (feeling-to-emoticons feeling)]
                  [:td (->> history count str (format "%d")) [:img {:src "img/tomate.png" :style "width: 1em"}]]
                  [:td (format "%d/%d" (->> goals (filter :complete) count) (->> goals count))]]
            node (-> item html html-to-dom)]
        (listen! node :click #(on-click-fn n))
        node))))
