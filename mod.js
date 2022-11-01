// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function e(){return"/tmp"}var n={homedir:function(){return"$HOME"},EOL:"\n",arch:function(){return"javascript"},platform:function(){return"browser"},tmpdir:e,tmpDir:e,networkInterfaces:function(){return{}},getNetworkInterfaces:function(){return{}},release:function(){return void 0!==t.navigator?t.navigator.appVersion:""},type:function(){return"Browser"},cpus:function(){return[]},totalmem:function(){return Number.MAX_VALUE},freemem:function(){return Number.MAX_VALUE},uptime:function(){return 0},loadavg:function(){return[]},hostname:function(){return void 0!==t.location?t.location.hostname:""},endianness:function(){if(void 0===r){var t=new ArrayBuffer(2),e=new Uint8Array(t),n=new Uint16Array(t);if(e[0]=1,e[1]=2,258===n[0])r="BE";else{if(513!==n[0])throw new Error("unable to figure out endianess");r="LE"}}return r}},o=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var u,a=Object.defineProperty,c=Object.prototype,f=c.toString,l=c.__defineGetter__,s=c.__defineSetter__,p=c.__lookupGetter__,y=c.__lookupSetter__;u=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?a:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(p.call(r,t)||y.call(r,t)?(n=r.__proto__,r.__proto__=c,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(r,t,e.get),u&&s&&s.call(r,t,e.set),r};var m=u;function v(r,t,e){m(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function w(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return d&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var E="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(r){var t,e,n,o,i;if(null==r)return h.call(r);e=r[E],i=E,t=null!=(o=r)&&g.call(o,i);try{r[E]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[E]=e:delete r[E],n}:function(r){return h.call(r)},j=Boolean.prototype.toString;var T=b();function A(r){return"object"==typeof r&&(r instanceof Boolean||(T?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function O(r){return w(r)||A(r)}function S(){return new Function("return this;")()}v(O,"isPrimitive",w),v(O,"isObject",A);var M="object"==typeof self?self:null,L="object"==typeof window?window:null,N="object"==typeof t?t:null;var B=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(M)return M;if(L)return L;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,U=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;v(k,"REGEXP",V);var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function R(r){return null!==r&&"object"==typeof r}function x(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return R(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}v(R,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!H(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(R));var D="function"==typeof o||"object"==typeof U||"function"==typeof P?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function I(r){return"function"===D(r)}function G(){throw new Error("setTimeout has not been defined")}function C(){throw new Error("clearTimeout has not been defined")}var F=G,X=C;function z(r){if(F===setTimeout)return setTimeout(r,0);if((F===G||!F)&&setTimeout)return F=setTimeout,setTimeout(r,0);try{return F(r,0)}catch(t){try{return F.call(null,r,0)}catch(t){return F.call(this,r,0)}}}"function"==typeof t.setTimeout&&(F=setTimeout),"function"==typeof t.clearTimeout&&(X=clearTimeout);var $,q=[],J=!1,K=-1;function Q(){J&&$&&(J=!1,$.length?q=$.concat(q):K=-1,q.length&&W())}function W(){if(!J){var r=z(Q);J=!0;for(var t=q.length;t;){for($=q,q=[];++K<t;)$&&$[K].run();K=-1,t=q.length}$=null,J=!1,function(r){if(X===clearTimeout)return clearTimeout(r);if((X===C||!X)&&clearTimeout)return X=clearTimeout,clearTimeout(r);try{X(r)}catch(t){try{return X.call(null,r)}catch(t){return X.call(this,r)}}}(r)}}function Y(r,t){this.fun=r,this.array=t}Y.prototype.run=function(){this.fun.apply(null,this.array)};function Z(){}var rr=Z,tr=Z,er=Z,nr=Z,or=Z,ir=Z,ur=Z;var ar=t.performance||{},cr=ar.now||ar.mozNow||ar.msNow||ar.oNow||ar.webkitNow||function(){return(new Date).getTime()};var fr=new Date;var lr={nextTick:function(r){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];q.push(new Y(r,t)),1!==q.length||J||z(W)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:rr,addListener:tr,once:er,off:nr,removeListener:or,removeAllListeners:ir,emit:ur,binding:function(r){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(r){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(r){var t=.001*cr.call(ar),e=Math.floor(t),n=Math.floor(t%1*1e9);return r&&(e-=r[0],(n-=r[1])<0&&(e--,n+=1e9)),[e,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-fr)/1e3}},sr=lr.env,pr=lr.platform,yr="win32"===pr;var mr=lr.getuid,vr=I(mr)?mr:function(){return null};var wr=I(n.homedir)?n.homedir:function(){var r,t;return yr?(r=sr.USERPROFILE||sr.HOMEDRIVE+sr.HOMEPATH||sr.HOME)||null:(r=sr.HOME)?r:(t=sr.LOGNAME||sr.USER||sr.LNAME||sr.USERNAME,"darwin"===pr?t?"/Users/"+t:null:0===vr()?"/root":t?"/home/"+t:null)};export{wr as default};
//# sourceMappingURL=mod.js.map
