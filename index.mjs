// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/os-platform@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@esm/index.mjs";var o,s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function u(){return"/tmp"}var d={EOL:"\n",arch:function(){return"javascript"},platform:function(){return"browser"},tmpdir:u,tmpDir:u,networkInterfaces:function(){return{}},getNetworkInterfaces:function(){return{}},release:function(){return void 0!==s.navigator?s.navigator.appVersion:""},type:function(){return"Browser"},cpus:function(){return[]},totalmem:function(){return Number.MAX_VALUE},freemem:function(){return Number.MAX_VALUE},uptime:function(){return 0},loadavg:function(){return[]},hostname:function(){return void 0!==s.location?s.location.hostname:""},endianness:function(){if(void 0===o){var n=new ArrayBuffer(2),e=new Uint8Array(n),r=new Uint16Array(n);if(e[0]=1,e[1]=2,258===r[0])o="BE";else{if(513!==r[0])throw new Error("unable to figure out endianess");o="LE"}}return o}};var f=n(d.homedir)?d.homedir:function(){var n,o;return r?(n=e.USERPROFILE||e.HOMEDRIVE+e.HOMEPATH||e.HOME)||null:(n=e.HOME)?n:(o=e.LOGNAME||e.USER||e.LNAME||e.USERNAME,"darwin"===t?o?"/Users/"+o:null:0===i()?"/root":o?"/home/"+o:null)};export{f as default};
//# sourceMappingURL=index.mjs.map
