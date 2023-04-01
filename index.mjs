// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/os-platform@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@esm/index.mjs";function i(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var s,u="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function a(){if(void 0===s){var e=new ArrayBuffer(2),t=new Uint8Array(e),n=new Uint16Array(e);if(t[0]=1,t[1]=2,258===n[0])s="BE";else{if(513!==n[0])throw new Error("unable to figure out endianess");s="LE"}}return s}function f(){return void 0!==u.location?u.location.hostname:""}function d(){return[]}function l(){return 0}function p(){return Number.MAX_VALUE}function c(){return Number.MAX_VALUE}function m(){return[]}function v(){return"Browser"}function h(){return void 0!==u.navigator?u.navigator.appVersion:""}function j(){return{}}function E(){return{}}function w(){return"javascript"}function b(){return"browser"}function g(){return"/tmp"}var y=g;function O(){return"$HOME"}var M={homedir:O,EOL:"\n",arch:w,platform:b,tmpdir:y,tmpDir:g,networkInterfaces:j,getNetworkInterfaces:E,release:h,type:v,cpus:m,totalmem:c,freemem:p,uptime:l,loadavg:d,hostname:f,endianness:a};var A=i(Object.freeze({__proto__:null,EOL:"\n",arch:w,cpus:m,default:M,endianness:a,freemem:p,getNetworkInterfaces:E,homedir:O,hostname:f,loadavg:d,networkInterfaces:j,platform:b,release:h,tmpDir:g,tmpdir:y,totalmem:c,type:v,uptime:l})),_=e(A.homedir)?A.homedir:function(){var e,i;return n?(e=t.USERPROFILE||t.HOMEDRIVE+t.HOMEPATH||t.HOME)||null:(e=t.HOME)?e:(i=t.LOGNAME||t.USER||t.LNAME||t.USERNAME,"darwin"===r?i?"/Users/"+i:null:0===o()?"/root":i?"/home/"+i:null)};export{_ as default};
//# sourceMappingURL=index.mjs.map