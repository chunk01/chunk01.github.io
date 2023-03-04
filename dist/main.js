(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var i=864e5;function o(e){t(1,arguments);var n=r(e),a=n.getUTCDay(),i=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function u(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var u=o(i),d=new Date(0);d.setUTCFullYear(a,0,4),d.setUTCHours(0,0,0,0);var l=o(d);return n.getTime()>=u.getTime()?a+1:n.getTime()>=l.getTime()?a:a-1}var d=6048e5;var l={};function s(){return l}function c(e,n){var i,o,u,d,l,c,m,h;t(1,arguments);var f=s(),g=a(null!==(i=null!==(o=null!==(u=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==o?o:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),b=v.getUTCDay(),w=(b<g?7:0)+b-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function m(e,n){var i,o,u,d,l,m,h,f;t(1,arguments);var g=r(e),v=g.getUTCFullYear(),b=s(),w=a(null!==(i=null!==(o=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:b.firstWeekContainsDate)&&void 0!==o?o:null===(h=b.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,w),y.setUTCHours(0,0,0,0);var p=c(y,n),T=new Date(0);T.setUTCFullYear(v,0,w),T.setUTCHours(0,0,0,0);var C=c(T,n);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}var h=6048e5;function f(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return f("yy"===e?r%100:r,e.length)},v=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},b=function(t,e){return f(t.getUTCDate(),e.length)},w=function(t,e){return f(t.getUTCHours()%12||12,e.length)},y=function(t,e){return f(t.getUTCHours(),e.length)},p=function(t,e){return f(t.getUTCMinutes(),e.length)},T=function(t,e){return f(t.getUTCSeconds(),e.length)},C=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return f(Math.floor(r*Math.pow(10,n-3)),e.length)};var E={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=m(t,r),i=a>0?a:1-a;return"YY"===e?f(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):f(i,e.length)},R:function(t,e){return f(u(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,i,o){var u=function(e,n){t(1,arguments);var i=r(e),o=c(i,n).getTime()-function(e,n){var r,i,o,u,d,l,h,f;t(1,arguments);var g=s(),v=a(null!==(r=null!==(i=null!==(o=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),b=m(e,n),w=new Date(0);return w.setUTCFullYear(b,0,v),w.setUTCHours(0,0,0,0),c(w,n)}(i,n).getTime();return Math.round(o/h)+1}(e,o);return"wo"===n?i.ordinalNumber(u,{unit:"week"}):f(u,n.length)},I:function(e,n,a){var i=function(e){t(1,arguments);var n=r(e),a=o(n).getTime()-function(e){t(1,arguments);var n=u(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/d)+1}(e);return"Io"===n?a.ordinalNumber(i,{unit:"week"}):f(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/i)+1}(e);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):f(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return f(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return C(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return k(a);case"XXXX":case"XX":return x(a);default:return x(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return k(a);case"xxxx":case"xx":return x(a);default:return x(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+M(a,":");default:return"GMT"+x(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+M(a,":");default:return"GMT"+x(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return f(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return f((r._originalDate||t).getTime(),e.length)}};function M(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+f(i,2)}function k(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):x(t,e)}function x(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+f(Math.floor(a/60),2)+n+f(a%60,2)}const D=E;var P=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},S=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:S,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return P(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",P(a,e)).replace("{{time}}",S(i,e))}};const W=U;var A=["D","DD"],L=["YY","YYYY"];function Y(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var N,O={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function I(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return o=t.valueCallback?t.valueCallback(l):l,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}const F={code:"en-US",formatDistance:function(t,e,n){var r,a=B[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return q[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:I({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:I({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:I({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:I({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:I({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(N.matchPattern);if(!n)return null;var r=n[0],a=t.match(N.parsePattern);if(!a)return null;var i=N.valueCallback?N.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,X=/''/g,R=/[a-zA-Z]/;function J(n,i,o){var u,d,l,c,m,h,f,g,v,b,w,y,p,T,C,E,M,k;t(2,arguments);var x=String(i),P=s(),S=null!==(u=null!==(d=null==o?void 0:o.locale)&&void 0!==d?d:P.locale)&&void 0!==u?u:F,U=a(null!==(l=null!==(c=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(f=o.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:P.firstWeekContainsDate)&&void 0!==c?c:null===(v=P.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==l?l:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=a(null!==(w=null!==(y=null!==(p=null!==(T=null==o?void 0:o.weekStartsOn)&&void 0!==T?T:null==o||null===(C=o.locale)||void 0===C||null===(E=C.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==p?p:P.weekStartsOn)&&void 0!==y?y:null===(M=P.locale)||void 0===M||null===(k=M.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==w?w:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var j=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(j))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(j),O=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var i=r(e).getTime(),o=a(n);return new Date(i+o)}(e,-a(n))}(j,N),q={firstWeekContainsDate:U,weekStartsOn:B,locale:S,_originalDate:j};return x.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,W[e])(t,S.formatLong):t})).join("").match(z).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(G))?r[1].replace(X,"'"):e;var u,d=D[a];if(d)return null!=o&&o.useAdditionalWeekYearTokens||(u=t,-1===L.indexOf(u))||Y(t,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==A.indexOf(t)}(t)||Y(t,i,String(n)),d(O,t,S.localize,q);if(a.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}const _=[];class V{constructor(t){this.title=t,this.todoList=[],this.date=J(new Date,"yyyy-MM-dd"),_.push(this)}}V.prototype.addTodo=function(t){this.todoList.push(t)};class K{constructor(t){this.title=t}}const $=t=>{let e=document.getElementsByClassName("active")[0].innerText,n=document.createElement("h2");n.setAttribute("id","projectHeader"),n.innerText=t.title;let r=document.createElement("div");r.setAttribute("id","itemList");let a=document.createElement("button");a.setAttribute("id","homeAddBtn"),a.innerText="Add Task";let i=document.createElement("div");i.setAttribute("id","addPopup");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","taskNameInput"),i.appendChild(o);let u=document.createElement("div");u.setAttribute("id","buttonContainer");let d=document.createElement("button");d.setAttribute("id","addTask"),d.innerText="Add";let l=document.createElement("button");l.setAttribute("id","cancel"),l.innerText="Cancel",u.appendChild(d),u.appendChild(l),i.appendChild(u),d.addEventListener("click",(function(){for(let t=0;t<_.length;t++)if(_[t].title==e){_[t].todoList.push(new K(document.getElementById("taskNameInput").value)),document.getElementById("itemList").innerHTML="";for(let e=0;e<_[t].todoList.length;e++){let n=document.createElement("button");n.setAttribute("id",_[t].todoList[e].title),n.innerText=_[t].todoList[e].title,r.appendChild(n)}}document.getElementById("addPopup").style.visibility="hidden",document.getElementById("homeAddBtn").style.visibility=""})),l.addEventListener("click",(function(){document.getElementById("addPopup").style.visibility="hidden",document.getElementById("homeAddBtn").style.visibility=""})),a.addEventListener("click",(function(){document.getElementById("homeAddBtn").style.visibility="hidden",document.getElementById("project").appendChild(i),document.getElementById("addPopup").style.visibility=""})),document.getElementById("project").appendChild(n),document.getElementById("project").appendChild(r),document.getElementById("project").appendChild(a)};(()=>{let t=document.createElement("div");t.setAttribute("id","header");let e=document.createElement("h1");e.setAttribute("id","title"),e.innerText="Todo List",t.appendChild(e);let n=document.createElement("div");n.setAttribute("id","content");let r=document.createElement("div");r.setAttribute("id","dash");let a=document.createElement("div");a.setAttribute("id","default");let i=document.createElement("button");i.setAttribute("id","inbox"),i.innerText="Inbox",i.classList.add("active");let o=document.createElement("button");o.setAttribute("id","today"),o.innerText="Today";let u=document.createElement("button");u.setAttribute("id","week"),u.innerText="This Week",i.addEventListener("click",(function(){i.classList.add("active")})),a.appendChild(i),a.appendChild(o),a.appendChild(u),r.appendChild(a);let d=document.createElement("h2");d.innerText="Projects";let l=document.createElement("div");l.setAttribute("id","customProjectList");let s=document.createElement("button");s.setAttribute("id","addProject"),s.innerText="Add Project",r.appendChild(d),r.appendChild(l),r.appendChild(s);let c=document.createElement("div");c.setAttribute("id","buttonContainerDash");let m=document.createElement("button");m.setAttribute("id","addProject"),m.innerText="Add";let h=document.createElement("button");h.setAttribute("id","cancelProject"),h.innerText="Cancel",c.appendChild(m),c.appendChild(h),s.addEventListener("click",(function(){document.getElementById("addProject").style.visibility="hidden",r.appendChild(c)})),m.addEventListener("click",(function(){})),h.addEventListener("click",(function(){document.getElementById("buttonContainerDash").style.visibility="hidden",document.getElementById("addProject").style.visibility=""}));let f=document.createElement("div");f.setAttribute("id","innerContent"),n.appendChild(r),n.appendChild(f);let g=document.createElement("div");g.setAttribute("id","project"),f.appendChild(g);let v=document.createElement("div");v.setAttribute("id","footer");let b=document.createElement("p");b.setAttribute("id","footerContent"),b.innerText="Copyright © 2023 chunk01",v.appendChild(b),document.body.appendChild(t),document.body.appendChild(n),document.body.appendChild(v)})();const Z=new V("Inbox");$(Z),document.getElementById("inbox").addEventListener("click",(function(){document.getElementById("project").innerHTML="",$(Z)})),document.getElementById("today").addEventListener("click",(function(){document.getElementById("project").innerHTML="",displayTasksToday()})),document.getElementById("week").addEventListener("click",(function(){document.getElementById("project").innerHTML="",displayTasksWeek()}))})();