(ns tomatinho-mobile.macros)

(defmacro for-finally [declarations body finally]
  `(~finally (for ~declarations ~body)))
