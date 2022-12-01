// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("os"),require("process")):"function"==typeof define&&define.amd?define(["os","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).homedir=e(r.require$$0$1,r.require$$0)}(this,(function(r,e){"use strict";var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,l=i.toString,c=i.__defineGetter__,f=i.__defineSetter__,a=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?u:function(r,e,t){var n,o,u,s;if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(a.call(r,e)||p.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),u="get"in t,s="set"in t,o&&(u||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&c&&c.call(r,e,t.get),s&&f&&f.call(r,e,t.set),r};var s=o;function y(r,e,t){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function b(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(r){var e,t,n,o,u;if(null==r)return m.call(r);t=r[g],u=g,e=null!=(o=r)&&_.call(o,u);try{r[g]=void 0}catch(e){return m.call(r)}return n=m.call(r),e?r[g]=t:delete r[g],n}:function(r){return m.call(r)},w=Boolean.prototype.toString;var h=v();function E(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function O(r){return b(r)||E(r)}function S(){return new Function("return this;")()}y(O,"isPrimitive",b),y(O,"isObject",E);var A="object"==typeof self?self:null,M="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!b(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(A)return A;if(M)return M;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,L=Int8Array;function R(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;y(R,"REGEXP",x);var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function U(r){return null!==r&&"object"==typeof r}function V(r){var e,t,n,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=x.exec(n.toString()))return e[1]}return U(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(U,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(U));var $="function"==typeof t||"object"==typeof L||"function"==typeof B?function(r){return V(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?V(r).toLowerCase():e};function q(r){return"function"===$(r)}var G=e.env,N=e.platform,k="win32"===N;var C=e.getuid,F=q(C)?C:function(){return null};var I=r;return q(I.homedir)?I.homedir:function(){var r,e;return k?(r=G.USERPROFILE||G.HOMEDRIVE+G.HOMEPATH||G.HOME)||null:(r=G.HOME)?r:(e=G.LOGNAME||G.USER||G.LNAME||G.USERNAME,"darwin"===N?e?"/Users/"+e:null:0===F()?"/root":e?"/home/"+e:null)}}));
//# sourceMappingURL=index.js.map
