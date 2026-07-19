"use strict";var E=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var t=E(function(l,u){
var e=require('@stdlib/process-env/dist'),a=require('@stdlib/assert-is-windows/dist'),s=require('@stdlib/os-platform/dist'),v=require('@stdlib/process-getuid/dist');function M(){var i,r;return a?(i=e.USERPROFILE||e.HOMEDRIVE+e.HOMEPATH||e.HOME,i||null):(i=e.HOME,i||(r=e.LOGNAME||e.USER||e.LNAME||e.USERNAME,s==="darwin"?r?"/Users/"+r:null:v()===0?"/root":r?"/home/"+r:null))}u.exports=M
});var n=require("os"),O=require('@stdlib/assert-is-function/dist'),m=t(),q=O(n.homedir)?n.homedir:m;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
