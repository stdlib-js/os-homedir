"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=o(function(h,u){
var e=require('@stdlib/process-env/dist'),E=require('@stdlib/assert-is-windows/dist'),a=require('@stdlib/os-platform/dist'),s=require('@stdlib/process-getuid/dist');function v(){var i,r;return E?(i=e.USERPROFILE||e.HOMEDRIVE+e.HOMEPATH||e.HOME,i||null):(i=e.HOME,i||(r=e.LOGNAME||e.USER||e.LNAME||e.USERNAME,a==="darwin"?r?"/Users/"+r:null:s()===0?"/root":r?"/home/"+r:null))}u.exports=v
});var n=require("os"),M=require('@stdlib/assert-is-function/dist'),O=t(),m=M(n.homedir)?n.homedir:O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
