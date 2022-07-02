// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).homedir=r()}(this,(function(){"use strict";var e,r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function t(){return"/tmp"}var n={EOL:"\n",arch:function(){return"javascript"},platform:function(){return"browser"},tmpdir:t,tmpDir:t,networkInterfaces:function(){return{}},getNetworkInterfaces:function(){return{}},release:function(){return void 0!==r.navigator?r.navigator.appVersion:""},type:function(){return"Browser"},cpus:function(){return[]},totalmem:function(){return Number.MAX_VALUE},freemem:function(){return Number.MAX_VALUE},uptime:function(){return 0},loadavg:function(){return[]},hostname:function(){return void 0!==r.location?r.location.hostname:""},endianness:function(){if(void 0===e){var r=new ArrayBuffer(2),t=new Uint8Array(r),n=new Uint16Array(r);if(t[0]=1,t[1]=2,258===n[0])e="BE";else{if(513!==n[0])throw new Error("unable to figure out endianess");e="LE"}}return e}};function o(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var i=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=function(){try{return u({},"x",{}),!0}catch(e){return!1}},c=Object.defineProperty,f=Object.prototype,l=f.toString,s=f.__defineGetter__,p=f.__defineSetter__,v=f.__lookupGetter__,y=f.__lookupSetter__;var m=function(e,r,t){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===l.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(v.call(e,r)||y.call(e,r)?(n=e.__proto__,e.__proto__=f,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(e,r,t.get),u&&p&&p.call(e,r,t.set),e},d=c,b=m,w=a()?d:b;var h=function(e,r,t){w(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=h;var _=function(e){return"boolean"==typeof e};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return E&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,O=T;var A=function(e){return O.call(e)},L=Object.prototype.hasOwnProperty;var S=function(e,r){return null!=e&&L.call(e,r)},M="function"==typeof Symbol?Symbol.toStringTag:"",P=S,k=M,N=T;var B=A,U=function(e){var r,t,n;if(null==e)return N.call(e);t=e[k],r=P(e,k);try{e[k]=void 0}catch(r){return N.call(e)}return n=N.call(e),r?e[k]=t:delete e[k],n},x=j()?U:B,V=Boolean.prototype.toString;var R=x,D=function(e){try{return V.call(e),!0}catch(e){return!1}},G=j();var H=function(e){return"object"==typeof e&&(e instanceof Boolean||(G?D(e):"[object Boolean]"===R(e)))},I=_,X=H;var z=g,C=function(e){return I(e)||X(e)},F=H;z(C,"isPrimitive",_),z(C,"isObject",F);var q=C;var J=function(){return new Function("return this;")()},K="object"==typeof self?self:null,Q="object"==typeof window?window:null,W="object"==typeof r?r:null;module.exports=W;var Y=q.isPrimitive,Z=J,$=K,ee=Q,re=o(Object.freeze({__proto__:null}));var te=function(e){if(arguments.length){if(!Y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Z()}if($)return $;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")},ne=te(),oe=ne.document&&ne.document.childNodes,ie=Int8Array,ue=i,ae=oe,ce=ie;var fe=function(){return"function"==typeof ue||"object"==typeof ce||"function"==typeof ae};var le=function(){return/^\s*function\s*([^(]*)/i},se=le;g(se,"REGEXP",le());var pe=se,ve=x;var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===ve(e)};var me=function(e){return null!==e&&"object"==typeof e};g(me,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(me));var de=me;var be=x,we=pe.REGEXP,he=function(e){return de(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var ge=function(e){var r,t,n;if(("Object"===(t=be(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=we.exec(n.toString()))return r[1]}return he(e)?"Buffer":t},_e=ge;var Ee=function(e){var r;return null===e?"null":"object"===(r=typeof e)?_e(e).toLowerCase():r},je=ge;var Te=Ee,Oe=function(e){return je(e).toLowerCase()},Ae=fe()?Oe:Te;var Le=function(e){return"function"===Ae(e)};function Se(){throw new Error("setTimeout has not been defined")}function Me(){throw new Error("clearTimeout has not been defined")}var Pe=Se,ke=Me;function Ne(e){if(Pe===setTimeout)return setTimeout(e,0);if((Pe===Se||!Pe)&&setTimeout)return Pe=setTimeout,setTimeout(e,0);try{return Pe(e,0)}catch(r){try{return Pe.call(null,e,0)}catch(r){return Pe.call(this,e,0)}}}"function"==typeof r.setTimeout&&(Pe=setTimeout),"function"==typeof r.clearTimeout&&(ke=clearTimeout);var Be,Ue=[],xe=!1,Ve=-1;function Re(){xe&&Be&&(xe=!1,Be.length?Ue=Be.concat(Ue):Ve=-1,Ue.length&&De())}function De(){if(!xe){var e=Ne(Re);xe=!0;for(var r=Ue.length;r;){for(Be=Ue,Ue=[];++Ve<r;)Be&&Be[Ve].run();Ve=-1,r=Ue.length}Be=null,xe=!1,function(e){if(ke===clearTimeout)return clearTimeout(e);if((ke===Me||!ke)&&clearTimeout)return ke=clearTimeout,clearTimeout(e);try{ke(e)}catch(r){try{return ke.call(null,e)}catch(r){return ke.call(this,e)}}}(e)}}function Ge(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Ue.push(new He(e,r)),1!==Ue.length||xe||Ne(De)}function He(e,r){this.fun=e,this.array=r}He.prototype.run=function(){this.fun.apply(null,this.array)};var Ie="browser",Xe="browser",ze={},Ce=[],Fe={},qe={},Je={};function Ke(){}var Qe=Ke,We=Ke,Ye=Ke,Ze=Ke,$e=Ke,er=Ke,rr=Ke;function tr(e){throw new Error("process.binding is not supported")}function nr(){return"/"}function or(e){throw new Error("process.chdir is not supported")}function ir(){return 0}var ur=r.performance||{},ar=ur.now||ur.mozNow||ur.msNow||ur.oNow||ur.webkitNow||function(){return(new Date).getTime()};function cr(e){var r=.001*ar.call(ur),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var fr=new Date;function lr(){return(new Date-fr)/1e3}var sr={nextTick:Ge,title:Ie,browser:true,env:ze,argv:Ce,version:"",versions:Fe,on:Qe,addListener:We,once:Ye,off:Ze,removeListener:$e,removeAllListeners:er,emit:rr,binding:tr,cwd:nr,chdir:or,umask:ir,hrtime:cr,platform:Xe,release:qe,config:Je,uptime:lr},pr=o(Object.freeze({__proto__:null,addListener:We,argv:Ce,binding:tr,browser:true,chdir:or,config:Je,cwd:nr,default:sr,emit:rr,env:ze,hrtime:cr,nextTick:Ge,off:Ze,on:Qe,once:Ye,platform:Xe,release:qe,removeAllListeners:er,removeListener:$e,title:Ie,umask:ir,uptime:lr,version:"",versions:Fe})),vr=pr.env,yr=pr.platform,mr="win32"===yr;var dr=function(){return null},br=pr.getuid,wr=Le(br)?br:dr;return Le(n.homedir)?n.homedir:function(){var e,r;return mr?(e=vr.USERPROFILE||vr.HOMEDRIVE+vr.HOMEPATH||vr.HOME)||null:(e=vr.HOME)?e:(r=vr.LOGNAME||vr.USER||vr.LNAME||vr.USERNAME,"darwin"===yr?r?"/Users/"+r:null:0===wr()?"/root":r?"/home/"+r:null)}}));
//# sourceMappingURL=browser.js.map
