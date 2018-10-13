!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var r=n(2),o=n(12),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function u(t){return null!==t&&"object"==typeof t}function a(t){return"[object Function]"===i.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:u,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:a,isStream:function(t){return u(t)&&a(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";(function(e){var r=n(0),o=n(14),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var u={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(4):void 0!==e&&(t=n(4)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(i)}),t.exports=u}).call(this,n(3))},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var a,c=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=u(p);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||f||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0),o=n(15),i=n(17),s=n(18),u=n(19),a=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(20);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||u(t.url)||(h=new window.XDomainRequest,d="onload",v=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var m=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(m+":"+y)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[d]=function(){if(h&&(4===h.readyState||v)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?h.response:h.responseText,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:t,request:h};o(e,f,r),h=null}},h.onerror=function(){f(a("Network Error",t,null,h)),h=null},h.ontimeout=function(){f(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var w=n(21),g=(t.withCredentials||u(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(p[t.xsrfHeaderName]=g)}if("setRequestHeader"in h&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),f(t),h=null)}),void 0===l&&(l=null),h.send(l)})}},function(t,e,n){"use strict";var r=n(16);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/*!
 * @overview  wpo365-fxlib - a tiny helper library intended to offer developers that want to build custom integrations for WordPress and Microsoft Office 365. It expects WordPress Single Sign-on plugin wpo365-login(-premium) to be installed, activated and configured. For documentation please visit https://www.wpo365.com/.
 * @copyright Copyright (c) 2018 Marco van Wieren
 * @license   Licensed under MIT license
 * @version   v0.1.0
 */
var r=n(9);e.TokenCache=r.TokenCache,e.TokenRequestError=r.TokenRequestError,e.TokenRequest=r.TokenRequest},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n(29),s=function(){function t(){var e=localStorage.getItem("wpo365TokenCache");e&&(t.tokens=JSON.parse(e),console.log(t.tokens))}return t.getToken=function(e,n){return new i.Promise(function(r,i){null==t.instance&&(t.instance=new t);for(var s=0,a=t.tokens;s<a.length;s++){var c=a[s];if(c.name==e.name&&c.expires>Date.now())return console.log("INFO: Getting cached token"),console.log(t.tokens),void r(c)}var f=new FormData;f.append("action","get_tokencache"),f.append("resource",e.toString()),f.append("nonce",window.wpo365FxNonce),o.default.post(n.wpAjaxAdminUrl,f).then(function(n){if(console.log(n),200!=n.status){var o=new u;throw o.data={status:"NOK",error_codes:"-1",message:"Unknown error occurred",result:null},o}if("OK"!=n.data.status){var i=new u;throw i.data=n.data,i}for(var s=n.data.result.split(","),a={name:e.name,expires:1e3*parseInt(s[0]),bearer:s[1]},c=t.tokens.length-1;c>=0;c--)t.tokens[c].name==e.name&&t.tokens.splice(c,1);t.tokens.push(a),localStorage.setItem("wpo365TokenCache",JSON.stringify(t.tokens)),r(a)}).catch(function(t){i(t)})})},t.tokens=[],t.instance=null,t}();e.TokenCache=s;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(Error);e.TokenRequestError=u;var a=function(){function t(t,e){this.name=t,this.resourceId=e}return t.prototype.toString=function(){return this.name+","+this.resourceId},t}();e.TokenRequest=a},function(t,e,n){t.exports=n(11)},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(13),s=n(1);function u(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var a=u(s);a.Axios=i,a.create=function(t){return u(r.merge(s,t))},a.Cancel=n(7),a.CancelToken=n(27),a.isCancel=n(6),a.all=function(t){return Promise.all(t)},a.spread=n(28),t.exports=a,t.exports.default=a},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,n){"use strict";var r=n(1),o=n(0),i=n(22),s=n(23);function u(t){this.defaults=t,this.interceptors={request:new i,response:new i}}u.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){u.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){u.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=u},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},function(t,e,n){"use strict";var r=n(0);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),s="",u=0,a=r;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&e>>8-u%1*8)){if((n=i.charCodeAt(u+=.75))>255)throw new o;e=e<<8|n}return s}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var u=[];u.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},function(t,e,n){"use strict";var r=n(0),o=n(24),i=n(6),s=n(1),u=n(25),a=n(26);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!u(t.url)&&(t.url=a(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(7);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,u=function(t,e){d[o]=t,d[o+1]=e,2===(o+=2)&&(s?s(v):m())};var a="undefined"!=typeof window?window:void 0,c=a||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(v,1)}}var d=new Array(1e3);function v(){for(var t=0;t<o;t+=2){(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0}o=0}var m=void 0;function y(t,e){var n=this,r=new this.constructor(_);void 0===r[g]&&N(r);var o=n._state;if(o){var i=arguments[o-1];u(function(){return q(o,r,i,n._result)})}else R(n,r,t,e);return r}function w(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(_);return j(e,t),e}m=l?function(){return e.nextTick(v)}:f?function(){var t=0,e=new f(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():p?function(){var t=new MessageChannel;return t.port1.onmessage=v,function(){return t.port2.postMessage(0)}}():void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(v)}:h()}catch(t){return h()}}():h();var g=Math.random().toString(36).substring(2);function _(){}var b=void 0,x=1,T=2,A={error:null};function S(t){try{return t.then}catch(t){return A.error=t,A}}function E(e,n,r){n.constructor===e.constructor&&r===y&&n.constructor.resolve===w?function(t,e){e._state===x?O(t,e._result):e._state===T?k(t,e._result):R(e,void 0,function(e){return j(t,e)},function(e){return k(t,e)})}(e,n):r===A?(k(e,A.error),A.error=null):void 0===r?O(e,n):t(r)?function(t,e,n){u(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?j(t,n):O(t,n))},function(e){r||(r=!0,k(t,e))},t._label);!r&&o&&(r=!0,k(t,o))},t)}(e,n,r):O(e,n)}function j(t,e){t===e?k(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?O(t,e):E(t,e,S(e))}function C(t){t._onerror&&t._onerror(t._result),P(t)}function O(t,e){t._state===b&&(t._result=e,t._state=x,0!==t._subscribers.length&&u(P,t))}function k(t,e){t._state===b&&(t._state=T,t._result=e,u(C,t))}function R(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+x]=n,o[i+T]=r,0===i&&t._state&&u(P,t)}function P(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?q(n,r,o,i):o(i);t._subscribers.length=0}}function q(e,n,r,o){var i=t(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return A.error=t,A}}(r,o))===A?(c=!0,u=s.error,s.error=null):a=!0,n===s)return void k(n,new TypeError("A promises callback cannot return that same promise."))}else s=o,a=!0;n._state!==b||(i&&a?j(n,s):c?k(n,u):e===x?O(n,s):e===T&&k(n,s))}var L=0;function N(t){t[g]=L++,t._state=void 0,t._result=void 0,t._subscribers=[]}var B=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(_),this.promise[g]||N(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):k(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===b&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===w){var o=S(t);if(o===y&&t._state!==b)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(_);E(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===b&&(this._remaining--,t===T?k(r,n):this._result[e]=n),0===this._remaining&&O(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;R(t,void 0,function(t){return n._settledAt(x,e,t)},function(t){return n._settledAt(T,e,t)})},t}();var U=function(){function e(t){this[g]=L++,this._result=this._state=void 0,this._subscribers=[],_!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){j(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return U.prototype.then=y,U.all=function(t){return new B(this,t).promise},U.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},U.resolve=w,U.reject=function(t){var e=new this(_);return k(e,t),e},U._setScheduler=function(t){s=t},U._setAsap=function(t){u=t},U._asap=u,U.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=U},U.Promise=U,U})}).call(this,n(3),n(30))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);
//# sourceMappingURL=lib.js.map