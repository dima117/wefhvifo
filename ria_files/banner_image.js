!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="https://yastatic.net/pcode-bundles/",e(0)}({0:function(t,e,n){t.exports=n(171)},8:function(t,e,n){t.exports=n(9)},9:function(t,e,n){var r;!function(i){function o(t){var e=p(t);if(g)for(var n,r=0;n=C[r++];)t.hasOwnProperty(n)&&e.push(n);return e}function s(t,e,n){for(var r,i,s=o(n),a=0,c=s.length;a<c;)"__self"!==(r=s[a++])&&(i=n[r],!v(i)||i.prototype&&i.prototype.__self||u&&!(i.toString().indexOf(".__base")>-1)?e[r]=i:e[r]=function(n,r){var i=t[n]?t[n]:"__constructor"===n?e.__self.__parent:y,o=function(){var t=this.__base;this.__base=o.__base;var e=r.apply(this,arguments);return this.__base=t,e};return o.__base=i,o}(r,i))}function a(t,e){for(var n,r=1;n=t[r++];)e?v(n)?c.self(e,n.prototype,n):c.self(e,n):e=v(n)?c(t[0],n.prototype,n):c(t[0],n);return e||t[0]}function c(){var t=arguments,e=m(t[0]),n=e||v(t[0]),r=n?e?a(t[0]):t[0]:f,i=t[n?1:0]||{},o=t[n?2:1],c=i.__constructor||n&&r.prototype&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:n?function(){return r.apply(this,arguments)}:function(){};if(!n)return c.prototype=i,c.prototype.__self=c.prototype.constructor=c,d(c,o);d(c,r),c.__parent=r;var u=r.prototype,h=c.prototype=l(u);return h.__self=h.constructor=c,i&&s(u,h,i),o&&s(r,c,o),c}var u=function(){return"_"}.toString().indexOf("_")>-1,f=function(){},h=Object.prototype.hasOwnProperty,l=Object.create||function(t){var e=function(){};return e.prototype=t,new e},p=Object.keys||function(t){var e=[];for(var n in t)h.call(t,n)&&e.push(n);return e},d=function(t,e){for(var n in e)h.call(e,n)&&(t[n]=e[n]);return t},_=Object.prototype.toString,m=Array.isArray||function(t){return"[object Array]"===_.call(t)},v=function(t){return"[object Function]"===_.call(t)},y=function(){},g=!0,b={toString:""};for(var O in b)b.hasOwnProperty(O)&&(g=!1);var C=g?["toString","valueOf"]:null;c.self=function(){var t=arguments,e=m(t[0]),n=e?a(t[0],t[0][0]):t[0],r=t[1],i=t[2],o=n.prototype;return r&&s(o,o,r),i&&s(n,n,i),n};var x=!0;t.exports=c,x=!1,"object"==typeof modules&&"function"==typeof modules.define&&(modules.define("inherit",function(t){t(c)}),x=!1),r=function(t,e,n){n.exports=c}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)),x=!1,x&&(i.inherit=c)}(this)},10:function(t,e){"use strict";t.exports=function(t){var e=document.documentElement,n=e.codeLoader;"function"==typeof n&&n(t)}},14:function(t,e,n){"use strict";function r(){var t=document.createElement("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&t.firstChild&&t.firstChild.namespaceURI)}function i(){var t=document.createElement("canvas");return Boolean(t&&t.getContext&&t.getContext("2d"))}function o(){var t=document.createElement("video");return Boolean(t&&t.canPlayType&&t.canPlayType("video/mp4"))}function s(t){var e=u.match(new RegExp(t+"/([\\d.]+)"));return e&&e[1]||"0"}function a(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}var c=n(15),u=(navigator||{}).userAgent||"",f=(navigator||{}).platform||"",h="undefined"!=typeof window.ontouchstart,l=c();t.exports={isAMP:Boolean(window.ampSeen),isSafeframe:Boolean(window.$sf&&window.$sf.ext),chromeVersion:s("Chrome"),firefoxVersion:s("Firefox"),ieVer:l,IS_DESKTOP:!h&&screen.width>=1024&&screen.height>=728,IS_IE8:8===l,isChrome:/Chrome/gi.test(u),isEdge:/Edge/gi.test(u),isOperaMini:/Opera Mini/gi.test(u),isFirefox:/Firefox/gi.test(u),isIe:Boolean(l),isIEMobile:/IEMobile|Nokia|Lumia/gi.test(u),isSupportCanvas:i(),isSupportMP4Video:o(),isSupportPassiveEvents:a(),isSVGSupported:r(),isTouch:h,isWebkit:/WebKit/gi.test(u),isWin:/Windows NT/gi.test(f),isYaBro:/YaBrowser/gi.test(u),operaVersion:s("Opera"),safariVersion:s("Safari"),yaBroVersion:s("YaBrowser")}},15:function(t,e){var n=function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return parseInt(t.substring(r+3,t.indexOf(".",r)),10)}var i=t.indexOf("Edge/");return i>0&&parseInt(t.substring(i+5,t.indexOf(".",i)),10)};t.exports=n},16:function(t,e){"use strict";t.exports=function(){}},19:function(t,e){"use strict";function n(t){(new Image).src=t}function r(t,e){!t||"string"!=typeof t||e&&a[t]||(a[t]=!0,n(t))}function i(t,e){"string"==typeof t&&0!==t.indexOf("%AWAPS")&&r(t,e)}function o(){return Math.round(65535*Math.random())}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o(),i=arguments[3];"string"==typeof t&&"string"==typeof e&&r(t.replace(e,n),i)}var a={};t.exports={report:r,awReport:i,reportRandom:s,randomSeed:o}},28:function(t,e){"use strict";e.__esModule=!0,e.FORMAT_STRING=0,e.FORMAT_INT=1,e.FORMAT_FLOAT=2,e.FORMAT_ENCODED=3,e.FORMAT_BASE64=4,e.FORMAT_ARRAY=5,e.FORMAT_LENGTH=6,e.FORMAT_BOOLEAN=7},34:function(t,e){"use strict";function n(t){return"undefined"!=typeof f.style[t]}function r(t,e){return p.indexOf(t)===-1&&!(isNaN(e)||0===e)}function i(t){var e=[],n=void 0;for(n in t){var i=t[n];if(t.hasOwnProperty(n)&&"undefined"!=typeof i&&null!==i){var o="";r(n,i)&&(o+="px"),e.push(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+":"+i+o)}}return e.join(";")}function o(t,e){return e+(r(t,e)?"px":"")}function s(t){return("function"==typeof getComputedStyle?getComputedStyle(t,null):t.currentStyle)||{}}function a(t,e){var n=void 0;for(n in e)e.hasOwnProperty(n)&&"undefined"!=typeof e[n]&&(t.style[n]=e[n])}var c=["","webkit","moz","o","ms"],u={},f=document.createElement("div"),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u[t]||function(){for(var e=""+t[0].toUpperCase()+t.slice(1),n=0;n<c.length;n++){var r=c[n],i=r?""+r+e:t;if("undefined"!=typeof f.style[i])return u[t]=i}return u[t]=t}()},l={contains:function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1},add:function(t,e){this.contains(t,e)||(t.className+=" "+e)},remove:function(t,e){this.contains(t,e)&&(t.className=(" "+t.className+" ").replace(" "+e+" "," ").replace(/^\s+|\s+$/g,""))},toggle:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.contains(t,e);n?this.add(t,e):this.remove(t,e)}},p=["opacity"],d="_CACHE_TRANSFORM_MATRIX_PROPERTY",_=function(t,e,n,r){var i=h("transform"),o=r&&t[d]||s(t)[i];if((!o||o.indexOf("none")>-1)&&(o="matrix(1, 0, 0, 1, 0, 0)"),o.indexOf("matrix")>-1){var a=o.slice(7,-1).split(",").map(function(t){return Number(t)});switch(e){case"scale":a[0]=n,a[3]=n;break;case"left":a[4]=n;break;case"top":a[5]=n;break;default:return!0}var c="matrix("+a.join(",")+")";c!==o&&(t[d]=c,t.style[i]=c)}},m=function(t){var e=s(t),n=t.clientWidth,r=t.clientHeight,i=parseFloat(e.paddingLeft),o=parseFloat(e.paddingRight),a=parseFloat(e.paddingTop),c=parseFloat(e.paddingBottom);return{width:n-i-o,height:r-a-c}};t.exports={addPixel:o,cssClass:l,cssText:i,getInnerSizeOfElement:m,getStyle:s,isPropExist:n,normalizeStyleProp:h,setStyles:a,setTransformMatrix:_}},37:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(38),o=n(8),s=n(41),a=n(19),c=a.report,u=n(14),f=u.isAMP,h=n(14),l=h.isSafeframe,p=n(42),d=n(44),_=n(54),m=n(62),v=2e3,y=.5;t.exports=o(s,{__constructor:function(t,e,n){this.__base(t,e,n),this._initTracking()},destroy:function(){this._clearContainerStyles(),this._destroyVisibilityChecker(),this.__base()},show:function(){this._container&&(this._container.style.display="")},hide:function(){this._container&&(this._container.style.display="none")},_afterRender:function(){this._setStylesToContainer()},_processParams:function(t){var e=this._getValidationRules();t=r({},t);var n=p.getParamsError(e,t);if(n)throw this._triggerCallback("onError",{message:n,type:"processBundleParams"}),new Error("adfox#processBundleParams: "+n);return t=p.processParams(e,t)},_getValidationRules:function(){return{}},_initTracking:function(){if(this._params.trackingUrl)for(var t=this._params.trackingUrl.split("|"),e=0;e<t.length;e++)t[e].match(/adfox\.ru\/transparent\.gif$/)||c(t[e])},_triggerCallback:function(t,e){this.__base(t,e),"onRender"===t&&this._initVisibilityChecker()},_getVisibilityCheckerContainer:function(){return this._container},_getVisibilityCheckerPortion:function(){return y},_initVisibilityChecker:function(){var t=this;if(this._params.eventConfirmVisibility){var e=function(){return c(t._params.eventConfirmVisibility)},n=void 0;n=f?m:l?i.VisibilityCheckerSafeframe:_,this._visibilityConfirmer=new d(this._getVisibilityCheckerContainer(),e,{delay:v,portion:this._getVisibilityCheckerPortion(),VisibilityChecker:n})}},_destroyVisibilityChecker:function(){this._visibilityConfirmer&&(this._visibilityConfirmer.stop(),this._visibilityConfirmer=null)},_setStylesToContainer:function(){this._params.styles&&(this._container.style.cssText=this._params.styles)},_clearContainerStyles:function(){this._container&&this._params.styles&&(this._container.style.cssText="")}})},38:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};e.__esModule=!0;var i,o,s=n(39),a=n(40),c={portion:0,disableAutoStart:!1};"undefined"!=typeof document.webkitHidden?(i="webkitHidden",o="webkitvisibilitychange"):(i="hidden",o="visibilitychange");var u=function(){function t(t,e,n){void 0===n&&(n={}),this.element=t,this.callback=e,this.options=r({},c,n),this.options.disableAutoStart!==!0&&this.start()}return t.prototype.start=function(){var t=this;this.stop(),this.check(),window.$sf.ext.register(0,0,function(e){"geom-update"===e&&t.check()}),"undefined"!=typeof document.addEventListener&&"undefined"!=typeof document[i]&&(this.handleVisibilityChange=function(){return t.check()},s.addEventListener(document,o,this.handleVisibilityChange,!1))},t.prototype.stop=function(){window.$sf.ext.register(),this.handleVisibilityChange&&(s.removeEventListener(document,o,this.handleVisibilityChange),this.handleVisibilityChange=!1)},t.prototype.check=function(){var t=a.hasDimensions(this.element),e=this.options.portion,n=!document.hidden,r=window.$sf.ext.inViewPercentage()/100;this.callback(t&&r>=e&&n)},t}();e.VisibilityCheckerSafeframe=u},39:function(t,e){"use strict";function n(t,e,n,r){void 0===r&&(r=!1),t.addEventListener(e,n,r)}function r(t,e,n){t.removeEventListener(e,n,!1)}e.__esModule=!0,e.addEventListener=n,e.removeEventListener=r},40:function(t,e){"use strict";function n(t){var e=t.getBoundingClientRect();if(e){var n=Math.abs(e.left-e.right),r=Math.abs(e.top-e.bottom);return n>0&&r>0}return!0}e.__esModule=!0,e.hasDimensions=n},41:function(t,e,n){"use strict";var r=n(8),i=n(16);t.exports=r({__constructor:function(t,e,n){this._isDestroyed=!1,this._destroyHandlers=[],this._win=t,this._doc=t.document,this._params=this._processParams(e),this._callbacks=n},renderTo:function(t){this._container=t,this._beforeRender(),this._render(),this._isDestroyed||this._afterRender()},destroy:function(){this._isDestroyed||(this._isDestroyed=!0,this._removeEvents())},_beforeRender:i,_render:i,_afterRender:i,_processParams:function(t){return t},_removeEvents:function(){var t=void 0;for(t=0;t<this._destroyHandlers.length;t++)this._destroyHandlers[t]();this._destroyHandlers=[]},_triggerCallback:function(t,e){this._callbacks&&this._callbacks[t]&&this._callbacks[t](e)}})},42:function(t,e,n){"use strict";function r(t,e){for(var n in t)if(t.hasOwnProperty(n)){var r=i(e,t[n],e[n],n);if(r)return r}return!1}function i(t,e,n,r){var i=e.required;if(i)if("boolean"==typeof i){if(o(n))return'param "'+r+'" is required';if(a(n)||s(n)&&n.length<1)return'param "'+r+"\" can't be empty"}else if(O(n,i,t))return'param "'+r+'" is required when '+i.whenParam+' is "'+t[i.whenParam]+'"';if(!o(n)){if(p(e)&&!s(n))return'param "'+r+'" must be a Array';if(u(e)&&!c(n))return'param "'+r+'" must be only "yes" or "no"';if(f(e)&&!_(n))return'param "'+r+'" must be a Number';if(h(e)&&!m(n))return'param "'+r+'" must be a Number';if(d(e)&&!v(n))return'param "'+r+'" must be a Length. Example: "9", "9px", "9%"';if(l(e)&&!y(n))return'param "'+r+'" encoded incorrect';if(g(e)&&!b(e,n))return'param "'+r+'" must contain only a special value'}return!1}function o(t){return"undefined"==typeof t}function s(t){return"[object Array]"===Object.prototype.toString.call(t)}function a(t){return""===t}function c(t){return"boolean"==typeof t||"yes"===t||"no"===t}function u(t){return t.format===w.FORMAT_BOOLEAN}function f(t){return t.format===w.FORMAT_INT}function h(t){return t.format===w.FORMAT_FLOAT}function l(t){return t.format===w.FORMAT_ENCODED}function p(t){return t.format===w.FORMAT_ARRAY}function d(t){return t.format===w.FORMAT_LENGTH}function _(t){return!isNaN(parseInt(t,10))}function m(t){return!isNaN(parseFloat(t))}function v(t){var e="undefined"==typeof t?"undefined":x(t),n="string"===e||"number"===e;return n&&(/^-?[\d]+\.?[\d]*(px|%)?$/.test(t.toString())||""===t)}function y(t){try{return decodeURIComponent(t),"string"==typeof t}catch(t){return!1}}function g(t){return Boolean(t.oneOf)}function b(t,e){for(var n=0;n<t.oneOf.length;n++)if(e===t.oneOf[n])return!0;return!1}function O(t,e,n){return!t&&e.hasOneOfTheseValues.indexOf(n[e.whenParam])!==-1}function C(t,e){var n=void 0;for(n in t)t.hasOwnProperty(n)&&("undefined"!=typeof e[n]?(t[n].format===w.FORMAT_BOOLEAN&&(e[n]="boolean"==typeof e[n]?e[n]:"yes"===e[n]),t[n].format===w.FORMAT_INT&&(e[n]=parseInt(e[n],10)),t[n].format===w.FORMAT_FLOAT&&(e[n]=parseFloat(e[n])),t[n].format===w.FORMAT_BASE64&&(e[n]=T(e[n])),t[n].format===w.FORMAT_ENCODED&&(e[n]=decodeURIComponent(e[n])),t[n].format===w.FORMAT_LENGTH&&e[n].toString().indexOf("%")===-1&&e[n].toString().indexOf("px")===-1&&""!==e[n]&&(e[n]+="px")):t[n].format===w.FORMAT_ARRAY&&(e[n]=[]));return e}var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=n(28),A=n(43),T=A.decode;t.exports={processParams:C,getParamsError:r}},43:function(t,e){function n(t,e){e=e||1e6;var n,i,o,a,c,u,f,h="",l=0;for(t=r(t,3*e/4|0);l<t.length;)n=t.charCodeAt(l++),i=t.charCodeAt(l++),o=t.charCodeAt(l++),a=n>>2,c=(3&n)<<4|i>>4,u=(15&i)<<2|o>>6,f=63&o,isNaN(i)?u=f=64:isNaN(o)&&(f=64),h=h+s.charAt(a)+s.charAt(c)+s.charAt(u)+s.charAt(f);return h}function r(t,e){t=t.replace(/\r\n/g,"\n");for(var n,r="",i=0;i<t.length;i++){var o=t.charCodeAt(i);if(o<128?n=a(o):o>127&&o<2048?(n=a(o>>6|192),n+=a(63&o|128)):(n=a(o>>12|224),n+=a(o>>6&63|128),n+=a(63&o|128)),r.length+n.length>e)break;r+=n}return r}function i(t){var e,n,r,i,a,c,u,f="",h=0;for(t=t.replace(/[^A-Za-z0-9\-\_\=]/g,"");h<t.length;)i=s.indexOf(t.charAt(h++)),a=s.indexOf(t.charAt(h++)),c=s.indexOf(t.charAt(h++)),u=s.indexOf(t.charAt(h++)),e=i<<2|a>>4,n=(15&a)<<4|c>>2,r=(3&c)<<6|u,f+=String.fromCharCode(e),64!=c&&(f+=String.fromCharCode(n)),64!=u&&(f+=String.fromCharCode(r));return o(f)}function o(t){for(var e="",n=0,r=0,i=0;n<t.length;)if(r=t.charCodeAt(n),r<128)e+=String.fromCharCode(r),n++;else if(r>191&&r<224)i=t.charCodeAt(n+1),e+=String.fromCharCode((31&r)<<6|63&i),n+=2;else{i=t.charCodeAt(n+1);var o=t.charCodeAt(n+2);e+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o),n+=3}return e}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",a=String.fromCharCode;t.exports={encode:n,decode:i}},44:function(t,e,n){var r=n(45),i=n(50),o=n(51),s=n(52),a={delay:0},c=r(Object,{constructor:function(t,e,n){this._element=t,this._callback=e,this._confirmTimeoutId=null,this._options=n=i({},a,n),this._visibilityChecker=new this._options.VisibilityChecker(t,o(this._check,this),{disableAutoStart:!0,portion:n.portion}),n.disableAutoStart!==!0&&this.start()},start:function(){this._visibilityChecker.start()},stop:function(){this._cancelConfirmSchedule(),this._visibilityChecker.stop()},_check:function(t){t?this._scheduleConfirm():this._cancelConfirmSchedule()},_scheduleConfirm:function(){return 0===this._options.delay?void this.confirm():void(null===this._confirmTimeoutId&&(this._confirmTimeoutId=setTimeout(s("VisibilityConfirmer#confirm",this.confirm,this),this._options.delay)))},_cancelConfirmSchedule:function(){null!==this._confirmTimeoutId&&(clearTimeout(this._confirmTimeoutId),this._confirmTimeoutId=null)},confirm:function(){this._confirmed||(this._confirmed=!0,this.stop(),this._callback())}});t.exports=c},45:function(t,e,n){var r=n(46),i=n(50);t.exports=function(t,e){var n=e.constructor;e.hasOwnProperty("constructor")||(n=function(){n.__parent.apply(this,arguments)});var o=r(t.prototype);return o.constructor=n,n.__super=t.prototype,n.__parent=t,o.__self=n,n.prototype=i(o,e),n}},46:function(t,e,n){var r=n(47),i=n(49);t.exports=function(){return r(Object,"create")?Object.create:function(t,e){function n(){}if(n.prototype=t,i(e))for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return new n}}()},47:function(t,e,n){var r=n(48);t.exports=function(t,e){var n=t[e];if(!r(n)){var i=n;try{delete t[e],n=t[e],t[e]=i}catch(t){}}return n}},48:function(t,e){t.exports=function(t){if(!t||!t.toString)return!1;var e=t.toString();return/\[native code\]/.test(e)||/\/\* source code not available \*\//.test(e)}},49:function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"===e||"function"===e)}},50:function(t,e){t.exports=function(t){for(var e,n=1,r=arguments.length;n<r;n++)if(e=arguments[n])for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},51:function(t,e){t.exports=function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){for(var r=[],i=0,o=arguments.length;i<o;i++)r[i]=n[i]||arguments[i];return t.apply(e,r)}}},52:function(t,e,n){function r(t,e,n,o){return function(){try{return e.apply(n||this,arguments)}catch(e){if(i(o)&&o(e),e.preventProtect===!0)throw e;r.log(e,t)}}}var i=n(53);r.log=function(t,e){console.log("LOG:"+e+":"+t)},r.setTimeout=function(t,e,n,i){return window.setTimeout(r("timeout",t,n,i),e)},t.exports=r},53:function(t,e){t.exports=function(t){return"[object Function]"==={}.toString.call(t)}},54:function(t,e,n){var r=n(55),i=n(59),o=n(52),s=n(50),a=n(51),c=n(45),u=300,f={interval:300,portion:0,disableAutoStart:!1},h=c(Object,{constructor:function(t,e,n){this._element=t,this._callback=e,this._options=s({},f,n),this._displayObserver=new r(a(this._check,this)),this._options.disableAutoStart!==!0&&this.start()},start:function(){this.stop(),this._element&&(this._firstTimeout=o.setTimeout(function(){this._displayObserver.observe(this._element)},u,this))},stop:function(){clearTimeout(this._firstTimeout),this._displayObserver.disconnect()},_check:function(t){var e=this._options.portion,n=t&&!i.isOverlaid(this._element)&&i.isInViewport(this._element,e);this._callback(n)}});t.exports=h},55:function(t,e,n){function r(t){this.element=t,this.observers=[]}function i(t){var e=t.element,n=o(e);n||(n=new r(e),g.push(n)),n.observers.push(t),s(n),g.length&&!v&&a()}function o(t){for(var e=0;e<g.length;e++){var n=g[e];if(n.element===t)return n}return null}function s(t){var e=t.element,n=_(e);p(t.observers.concat(),function(t){t.handler(n,e)})}function a(){v=setInterval(u,m)}function c(){clearInterval(v),v=null}function u(){p(g.concat(),s)}function f(t){var e=o(t.element);e&&(h(e.observers,t),e.observers.length||h(g,e),!g.length&&v&&c())}function h(t,e){var n=d(t,e);n>-1&&t.splice(n,1)}var l=n(45),p=n(56),d=n(57),_=n(58),m=300,v=null,y=l(Object,{constructor:function(t){this.handler=t},observe:function(t){return this.disconnect(),this.element=t,i(this),this},disconnect:function(){return f(this),this}}),g=[];t.exports=y},56:function(t,e){t.exports=function(t,e,n){for(var r=0,i=t.length;r<i;++r)e.call(n,t[r],r,t)}},57:function(t,e,n){var r=n(47);t.exports=function(){var t=r(Array.prototype,"indexOf");return t?function(e,n,r){return t.call(e,n,r)}:function(t,e,n){var r=t.length>>>0,i=Number(n)||0;for(i=i<0?Math.ceil(i):Math.floor(i),i<0&&(i+=r);i<r;i++)if(i in t&&t[i]===e)return i;return-1}}()},58:function(t,e){function n(t){var e=t.getBoundingClientRect();if(e){var n=Math.abs(e.left-e.right),r=Math.abs(e.top-e.bottom);return n>0&&r>0}return!0}t.exports=n},59:function(t,e,n){function r(t,e,n){return Math.max(Math.min(e,n)-Math.max(t,0),0)}function i(t,e){if(a.isOperaMini)return t.offsetWidth>0&&t.offsetHeight>0;var n=t.getBoundingClientRect(),i=n.right-n.left,o=n.bottom-n.top,c=0;if(i>0&&o>0){var u=s(),f=r(n.left,n.right,u.width),h=r(n.top,n.bottom,u.height);c=f*h/(i*o)}return c>=(e||Number.MIN_VALUE)}function o(t){if(!document.elementFromPoint||!t.contains||a.isOperaMini)return!1;var e=t.getBoundingClientRect(),n=t.clientWidth/2,r=t.clientHeight/2,i=e.left+n,o=e.top+r,s=document.elementFromPoint(i,o);return!!s&&(t!==s&&!t.contains(s))}var s=n(60),a=n(61);t.exports={isInViewport:i,isOverlaid:o}},60:function(t,e){function n(){var t=window,e=t.innerWidth,n=t.innerHeight;if(!e){var r=t.document.documentElement;e=r.clientWidth,n=r.clientHeight}return{width:e,height:n}}t.exports=n},61:function(t,e){var n=navigator,r=n.userAgent.toLowerCase(),i=r.indexOf("opera mini")>-1;t.exports={isOperaMini:i}},62:function(t,e,n){var r=n(45),i=n(50),o=n(52),s={portion:0,disableAutoStart:!1},a=r(Object,{constructor:function(t,e,n){this._unlisten=null,this._callback=e,this._options=i({},s,n),this._lastRatio=0,this._protectedCheck=o("AmpVisibilityChecker#_check",this._check,this),this._protectedIntersectionChange=o("AmpVisibilityChecker#_onIntersectionChange",this._onIntersectionChange,this),this._options.disableAutoStart!==!0&&this.start()},start:function(){this.stop(),this._unlisten=window.context.observeIntersection(this._protectedIntersectionChange),window.addEventListener("amp:visibilitychange",this._protectedCheck)},stop:function(){this._unlisten&&(this._unlisten(),this._unlisten=null),window.removeEventListener("amp:visibilitychange",this._protectedCheck)},_onIntersectionChange:function(t){t.length>0&&(this._lastRatio=t[t.length-1].intersectionRatio,this._check())},_check:function(){this._callback(!window.context.hidden&&this._options.portion<=this._lastRatio)}});t.exports=a},170:function(t,e,n){"use strict";var r=n(28),i=n(8),o=n(37),s=n(34),a=s.setStyles,c="contain",u="cover",f="";t.exports=i(o,{_getValidationRules:function(){return{height:{format:r.FORMAT_LENGTH},imageUrl:{required:!0},scale:{oneOf:[c,u,f]},width:{required:!0,format:r.FORMAT_LENGTH}}},destroy:function(){this._container&&(this._container.innerHTML=""),this.__base()},renderTo:function(t){this.__base(t);var e=this._getElementImg(),n=this._getWrapper();this._params.scale===f?n.appendChild(e):this._setScaleProperties(n),t.appendChild(n)},_getElementImg:function(){var t=this,e=new Image;e.onload=function(){t._isDestroyed||t._triggerCallback("onRender")},e.onerror=function(){t._isDestroyed||(t._triggerCallback("onDestroy"),t._triggerCallback("onError",{type:"adfoxBackend",message:"Image can't load"}))},this._params.alt&&(e.alt=this._params.alt),e.src=this._params.imageUrl;var n={width:"100%",height:"auto",border:"0",verticalAlign:"middle",maxWidth:this._params.width};return a(e,n),e},_setScaleProperties:function(t){a(t,{background:"url('"+this._params.imageUrl+"') no-repeat center / "+this._params.scale,display:"block",height:this._params.height,width:this._params.width})},_getWrapper:function(){var t=this._params.reference?"a":"div",e=this._doc.createElement(t);return this._params.reference&&(e.href=this._params.reference,e.target=this._params.target||"_blank"),e}})},171:function(t,e,n){"use strict";var r=n(170),i=n(10);i(r)}});