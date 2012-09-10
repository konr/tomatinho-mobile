goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__10867 = s;
var limit__10868 = limit;
var parts__10869 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__10868,1))
{return cljs.core.conj.call(null,parts__10869,s__10867);
} else
{var temp__3971__auto____10870 = cljs.core.re_find.call(null,re,s__10867);
if(cljs.core.truth_(temp__3971__auto____10870))
{var m__10871 = temp__3971__auto____10870;
var index__10872 = s__10867.indexOf(m__10871);
{
var G__10873 = s__10867.substring((index__10872 + cljs.core.count.call(null,m__10871)));
var G__10874 = (limit__10868 - 1);
var G__10875 = cljs.core.conj.call(null,parts__10869,s__10867.substring(0,index__10872));
s__10867 = G__10873;
limit__10868 = G__10874;
parts__10869 = G__10875;
continue;
}
} else
{return cljs.core.conj.call(null,parts__10869,s__10867);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__10879 = s.length;
while(true){
if((index__10879 === 0))
{return "";
} else
{var ch__10880 = cljs.core._lookup.call(null,s,(index__10879 - 1),null);
if((function (){var or__3824__auto____10881 = cljs.core._EQ_.call(null,ch__10880,"\n");
if(or__3824__auto____10881)
{return or__3824__auto____10881;
} else
{return cljs.core._EQ_.call(null,ch__10880,"\r");
}
})())
{{
var G__10882 = (index__10879 - 1);
index__10879 = G__10882;
continue;
}
} else
{return s.substring(0,index__10879);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__10886 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3824__auto____10887 = cljs.core.not.call(null,s__10886);
if(or__3824__auto____10887)
{return or__3824__auto____10887;
} else
{var or__3824__auto____10888 = cljs.core._EQ_.call(null,"",s__10886);
if(or__3824__auto____10888)
{return or__3824__auto____10888;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__10886);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__10895 = (new goog.string.StringBuffer());
var length__10896 = s.length;
var index__10897 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__10896,index__10897))
{return buffer__10895.toString();
} else
{var ch__10898 = s.charAt(index__10897);
var temp__3971__auto____10899 = cljs.core._lookup.call(null,cmap,ch__10898,null);
if(cljs.core.truth_(temp__3971__auto____10899))
{var replacement__10900 = temp__3971__auto____10899;
buffer__10895.append([cljs.core.str(replacement__10900)].join(''));
} else
{buffer__10895.append(ch__10898);
}
{
var G__10901 = (index__10897 + 1);
index__10897 = G__10901;
continue;
}
}
break;
}
});
