!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=200,o=100,i=20,l=(e,t)=>{u(e,t);const n=((e,t)=>{return e-=20,t-=20,{x:Math.random()*e,y:Math.random()*t}})(e.width,e.height);((e,t,n,r)=>{e.onload=()=>{console.log("your image has loaded"),r.drawImage(e,t,n)}})((()=>{const e=new Image;return e.src="https://img.icons8.com/office/80/000000/whale.png",e})(),n.x,n.y,t)},c=(e,t,n,r)=>{r.beginPath(),r.arc(e,t,n,0,2*Math.PI,!1),r.fillStyle="black",r.fill()},u=(e,t)=>{t.clearRect(0,0,e.width,e.height),t.fillStyle="#2E4053",t.fillRect(0,0,e.width,e.height),c(r,o,i,t)};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("ocean");e.setAttribute("width",.8*window.innerWidth),e.setAttribute("height",window.innerHeight/2);const t=e.getContext("2d");t.fillStyle="#2E4053",t.fillRect(0,0,e.width,e.height),c(r,o,i,t),document.getElementById("generatewhalebutton").onclick=()=>l(e,t)})}]);