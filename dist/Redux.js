import{i as r,a as n}from"./utils-492a9a90.js";function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(0===r.length)return function(r){return r};if(1===r.length)return r[0];var t=r[r.length-1],e=r.slice(0,-1);return function(r){return e.reduceRight((function(r,n){return n(r)}),t(r))}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e=function(){return(e=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)};var o={createStore:function t(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var u=o[0],c=o[1];if(r(o[0])&&r(o[1]))throw new Error("只接受一个增强其，请使用compose方法自行合并。");if(r(o[0])&&void 0===o[1]&&(u={},c=o[0]),c)return c(t)(e,u);var a=Object.assign({},u),f=e,s=[];function p(){return a}function h(r){if(!n(r))throw new Error("action 只能是普通对象！");return a=f(a,r),s.forEach((function(r){r()})),r}function l(n){if(!r(n))throw new Error("listener 只能是function类型!");return s.push(n),function(){var r=s.indexOf(n);s.splice(r,1)}}function v(n){if(!r(n))throw new Error("reducer 只能是function类型!");f=n}var d={getState:p,dispatch:h,subscribe:l,replaceReducer:v};return d},combineReducers:function(r){var n=Object.keys(r);return function(t,e){var o={};return n.forEach((function(n){var i=r[n];o[n]=i(t[n],e)})),o}},bindActionCreators:function(r,n){var t=Object.keys(r),e={};return t.forEach((function(t){e[t]=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n(r[t].apply(r,e))}})),e},compose:t,applyMiddleware:function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(n){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var u=n.apply(void 0,o),c=u.dispatch,a={getState:u.getState,dispatch:function(r){return c(r)}},f=r.map((function(r){return r(a)}));return c=t.apply(void 0,f)(u.dispatch),e(e({},u),{dispatch:c})}}}};export default o;
