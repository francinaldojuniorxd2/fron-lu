!function(){"use strict";var t="/fon-lu/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["61.844ba1f2.async.js",61],["p__Dashboard__index.f4f0f2c4.async.js",181],["288.d2c1ee36.async.js",288],["295.05db2a44.async.js",295],["p__Invoice__index.d76311a9.async.js",301],["t__plugin-layout__Layout.6cae69f5.chunk.css",358],["t__plugin-layout__Layout.a7927c37.async.js",358],["p__User__Login__index.c64198ce.async.js",366],["390.cbac4733.async.js",390],["475.e7646f61.async.js",475],["551.0031d45d.async.js",551],["p__404.9be3905b.async.js",571],["714.4083487f.async.js",714],["905.c106d226.async.js",905]],"r":{"/*":[11,13],"/":[2,5,6,9,13],"/dashboard":[1,3,2,5,6,9,13],"/invoice":[0,4,12,2,5,6,9,13],"/user/login":[7,9,10,12]}},{publicPath:"/fon-lu/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();