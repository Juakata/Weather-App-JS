!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);const r="https://cors-anywhere.herokuapp.com/",o=e=>{fetch(`${r}https://api.darksky.net/forecast/c585ab3790ed34a967b7c3810abd299b/${e[0]},${e[1]}`).then(e=>e.json()).then(e=>{const{timezone:n,currently:t}=e,{temperature:r,summary:o,humidity:i}=t;document.getElementById("timezone").innerHTML=n,document.getElementById("temperature").innerHTML=r,document.getElementById("summary").innerHTML=o,document.getElementById("humidity").innerHTML=i,(e=>{fetch(`https://api.giphy.com/v1/gifs/translate?api_key=11Fe1ivk6MxFFhuVm6lZdo7ZRtLwQ1Kf&s=${e}%20cloudy`).then(e=>e.json()).then(e=>{document.getElementById("img-weather").src=e.data.images.original.url}).catch(e=>{document.getElementById("error").style.display="block",document.getElementById("error").innerHTML=e})})(o)}).catch(e=>{document.getElementById("error").style.display="block",document.getElementById("error").innerHTML=e})},i=e=>{document.getElementById("error").style.display="none","geolocation"in navigator&&""===e?navigator.geolocation.getCurrentPosition(e=>{const n=[];n.push(e.coords.latitude),n.push(e.coords.longitude),o(n)}):fetch(`${r}http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=256d86b132c962dc71862d23501ecdc9`).then(e=>e.json()).then(e=>{const n=[];n.push(e.coord.lat),n.push(e.coord.lon),o(n)}).catch(e=>{document.getElementById("error").style.display="block",document.getElementById("error").innerHTML=`Something went wrong try again. ${e}`})};i(""),document.getElementById("changeType").addEventListener("click",(function(){const e=document.getElementById("fah"),n=document.getElementById("cel");let t=Number(document.getElementById("temperature").innerHTML);"active left-border"===e.className?(e.className="inactive left-border",n.className="active right-border",t=(t-32)/1.8,document.getElementById("temperature").innerHTML=t.toFixed(2)):(e.className="active left-border",n.className="inactive right-border",t=1.8*t+32,document.getElementById("temperature").innerHTML=t.toFixed(2))}),!1),document.getElementById("send").addEventListener("click",()=>{const e=document.getElementById("city").value;i(e)},!1)},function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r("!!../node_modules/css-loader/dist/cjs.js!./style.css",o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n,t){e=t.base?e+t.base:e,o[e]||(o[e]=[]);for(var r=0;r<n.length;r++){var i=n[r],a={css:i[1],media:i[2],sourceMap:i[3]},c=o[e];c[r]?c[r].updater(a):c.push({updater:g(a,t)})}for(var d=n.length;d<o[e].length;d++)o[e][d].updater();o[e].length=n.length,0===o[e].length&&delete o[e]}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(e,n){var t,r,o;if(n.singleton){var i=f++;t=m||(m=d(n)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i()),c(e,n,t),function(n){c(e,n||[],t)}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nimg {\n  width: 100%;\n  margin-top: 20px;\n  height: 50%;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\ndiv {\n  color: white;\n  margin: 10px;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n#changeType {\n  cursor: pointer;\n  color: #0080ff;\n}\n\n#error {\n  padding: 5px;\n  border-radius: 5px;\n  background: red;\n  color: white;\n  display: none;\n}\n\n#showInfo {\n  background: black;\n  max-width: 500px;\n  height: 100vh;\n  margin: 0 auto;\n  border-radius: 30px;\n  border: 6px solid #bfbfbf;\n}\n\n#form {\n  border: white solid 1px;\n  border-radius: 10px;\n  padding: 10px;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n\n.form-element {\n  padding: 5px;\n  color: white;\n}\n\n.form-element input {\n  width: 100%;\n  border-radius: 10px;\n  padding: 3px;\n  outline: none;\n}\n\n.form-element button {\n  margin: 0 auto;\n  display: block;\n  border-radius: 10px;\n  font-size: 15px;\n  padding: 5px;\n  background: white;\n}\n\n.form-element button:hover {\n  background: black;\n  color: white;\n  cursor: pointer;\n}\n\n.right-border {\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.left-border {\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n\n.active {\n  background: #42ff75;\n  padding: 7px 10px;\n}\n\n.inactive {\n  color: grey;\n  background: white;\n  padding: 5px 10px;\n}\n\n@media(max-width: 500px){\n  div {\n    font-size: 15px;\n  }\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);t&&(o[2]?o[2]="".concat(t," and ").concat(o[2]):o[2]=t),n.push(o)}},n}}]);