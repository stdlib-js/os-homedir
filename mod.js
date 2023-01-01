// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r,t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){if(void 0===r){var e=new ArrayBuffer(2),t=new Uint8Array(e),n=new Uint16Array(e);if(t[0]=1,t[1]=2,258===n[0])r="BE";else{if(513!==n[0])throw new Error("unable to figure out endianess");r="LE"}}return r}function o(){return void 0!==t.location?t.location.hostname:""}function i(){return[]}function u(){return 0}function a(){return Number.MAX_VALUE}function c(){return Number.MAX_VALUE}function f(){return[]}function l(){return"Browser"}function s(){return void 0!==t.navigator?t.navigator.appVersion:""}function p(){return{}}function m(){return{}}function y(){return"javascript"}function v(){return"browser"}function d(){return"/tmp"}var b=d;function w(){return"$HOME"}var h={homedir:w,EOL:"\n",arch:y,platform:v,tmpdir:b,tmpDir:d,networkInterfaces:p,getNetworkInterfaces:m,release:s,type:l,cpus:f,totalmem:c,freemem:a,uptime:u,loadavg:i,hostname:o,endianness:n},g=e(Object.freeze({__proto__:null,endianness:n,hostname:o,loadavg:i,uptime:u,freemem:a,totalmem:c,cpus:f,type:l,release:s,networkInterfaces:p,getNetworkInterfaces:m,arch:y,platform:v,tmpDir:d,tmpdir:b,EOL:"\n",homedir:w,default:h})),_=/./,E="function"==typeof Object.defineProperty?Object.defineProperty:null;var j,O=Object.defineProperty,T=Object.prototype,A=T.toString,L=T.__defineGetter__,S=T.__defineSetter__,M=T.__lookupGetter__,k=T.__lookupSetter__;j=function(){try{return E({},"x",{}),!0}catch(e){return!1}}()?O:function(e,r,t){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(M.call(e,r)||k.call(e,r)?(n=e.__proto__,e.__proto__=T,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),u&&S&&S.call(e,r,t.set),e};var N=j;function P(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function V(){return U&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var I=Object.prototype.hasOwnProperty;var x="function"==typeof Symbol?Symbol.toStringTag:"";var H=V()?function(e){var r,t,n,o,i;if(null==e)return D.call(e);t=e[x],i=x,r=null!=(o=e)&&I.call(o,i);try{e[x]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[x]=t:delete e[x],n}:function(e){return D.call(e)},R=Boolean.prototype.toString;var G=V();function z(e){return"object"==typeof e&&(e instanceof Boolean||(G?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function C(e){return B(e)||z(e)}function F(){return new Function("return this;")()}P(C,"isPrimitive",B),P(C,"isObject",z);var X="object"==typeof self?self:null,$="object"==typeof window?window:null,q="object"==typeof t?t:null;var J=function(e){if(arguments.length){if(!B(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return F()}if(X)return X;if($)return $;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),K=J.document&&J.document.childNodes,Q=Int8Array;function W(){return/^\s*function\s*([^(]*)/i}var Y=/^\s*function\s*([^(]*)/i;P(W,"REGEXP",Y);var Z=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function ee(e){return null!==e&&"object"==typeof e}function re(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Y.exec(n.toString()))return r[1]}return ee(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}P(ee,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Z(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ee));var te="function"==typeof _||"object"==typeof Q||"function"==typeof K?function(e){return re(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?re(e).toLowerCase():r};function ne(e){return"function"===te(e)}function oe(){throw new Error("setTimeout has not been defined")}function ie(){throw new Error("clearTimeout has not been defined")}var ue=oe,ae=ie;function ce(e){if(ue===setTimeout)return setTimeout(e,0);if((ue===oe||!ue)&&setTimeout)return ue=setTimeout,setTimeout(e,0);try{return ue(e,0)}catch(r){try{return ue.call(null,e,0)}catch(r){return ue.call(this,e,0)}}}"function"==typeof t.setTimeout&&(ue=setTimeout),"function"==typeof t.clearTimeout&&(ae=clearTimeout);var fe,le=[],se=!1,pe=-1;function me(){se&&fe&&(se=!1,fe.length?le=fe.concat(le):pe=-1,le.length&&ye())}function ye(){if(!se){var e=ce(me);se=!0;for(var r=le.length;r;){for(fe=le,le=[];++pe<r;)fe&&fe[pe].run();pe=-1,r=le.length}fe=null,se=!1,function(e){if(ae===clearTimeout)return clearTimeout(e);if((ae===ie||!ae)&&clearTimeout)return ae=clearTimeout,clearTimeout(e);try{ae(e)}catch(r){try{return ae.call(null,e)}catch(r){return ae.call(this,e)}}}(e)}}function ve(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];le.push(new de(e,r)),1!==le.length||se||ce(ye)}function de(e,r){this.fun=e,this.array=r}de.prototype.run=function(){this.fun.apply(null,this.array)};var be={},we=[],he={},ge={},_e={};function Ee(){}var je=Ee,Oe=Ee,Te=Ee,Ae=Ee,Le=Ee,Se=Ee,Me=Ee;function ke(e){throw new Error("process.binding is not supported")}function Ne(){return"/"}function Pe(e){throw new Error("process.chdir is not supported")}function Be(){return 0}var Ue=t.performance||{},Ve=Ue.now||Ue.mozNow||Ue.msNow||Ue.oNow||Ue.webkitNow||function(){return(new Date).getTime()};function De(e){var r=.001*Ve.call(Ue),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Ie=new Date;function xe(){return(new Date-Ie)/1e3}var He={nextTick:ve,title:"browser",browser:true,env:be,argv:we,version:"",versions:he,on:je,addListener:Oe,once:Te,off:Ae,removeListener:Le,removeAllListeners:Se,emit:Me,binding:ke,cwd:Ne,chdir:Pe,umask:Be,hrtime:De,platform:"browser",release:ge,config:_e,uptime:xe},Re=e(Object.freeze({__proto__:null,addListener:Oe,argv:we,binding:ke,browser:true,chdir:Pe,config:_e,cwd:Ne,default:He,emit:Me,env:be,hrtime:De,nextTick:ve,off:Ae,on:je,once:Te,platform:"browser",release:ge,removeAllListeners:Se,removeListener:Le,title:"browser",umask:Be,uptime:xe,version:"",versions:he})),Ge=Re.env,ze=Re.platform,Ce="win32"===ze;var Fe=Re.getuid,Xe=ne(Fe)?Fe:function(){return null};var $e=g,qe=ne($e.homedir)?$e.homedir:function(){var e,r;return Ce?(e=Ge.USERPROFILE||Ge.HOMEDRIVE+Ge.HOMEPATH||Ge.HOME)||null:(e=Ge.HOME)?e:(r=Ge.LOGNAME||Ge.USER||Ge.LNAME||Ge.USERNAME,"darwin"===ze?r?"/Users/"+r:null:0===Xe()?"/root":r?"/home/"+r:null)};export{qe as default};
//# sourceMappingURL=mod.js.map
