(function(e){function t(t){for(var a,r,s=t[0],d=t[1],c=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-797ed053":"36922bd1"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-797ed053":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-797ed053":"3f72e675"}[e]+".css",i=d.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===a||l===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],u.parentNode.removeChild(u),n(o)},u.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("ecee"),i=n("c074"),o=n("ad3d"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],c=n("854a"),l=n.n(c);l.a.options.closeButton=!0;var f={},u=f,p=(n("5c0b"),n("2877")),m=Object(p["a"])(u,s,d,!1,null,null,null),h=m.exports,v=(n("d3b7"),n("8c4f"));a["a"].use(v["a"]);var g=[{path:"/*",component:function(){return n.e("chunk-797ed053").then(n.bind(null,"49d7"))}},{path:"/editor",name:"editor",component:function(){return n.e("chunk-797ed053").then(n.bind(null,"49d7"))}}],y=new v["a"]({mode:"history",base:"/",routes:g}),x=y,b=(n("a4d3"),n("99af"),n("cb29"),n("4de4"),n("4160"),n("d81d"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),P=n("2f62"),w=n("d5d2");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(b["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["a"].use(P["a"]);var S=new P["a"].Store({state:{maxPixelSize:{width:0,height:0},templatesInit:new Array(4).fill().map((function(e,t){return{id:t,canvas:null,grid:[],width:300,height:250,pixelSize:{width:0,height:0},padding:{x:10,y:13},step:{y:26,x:29},offset:{x:{even:0,odd:0},y:{even:0,odd:0}},logoPaddingPercent:12}})),activeTemplateId:0,files:[]},getters:{templates:function(e){return e.templatesInit.map((function(e){var t=Math.floor(e.width/2),n=Math.floor(e.height/2),a=I({},e,{sizeStr:"".concat(e.width).concat(e.height),maxPadding:{x:t>100?100:t,y:n>100?100:n},minSide:{x:Math.ceil(2*e.padding.x),y:Math.ceil(2*e.padding.y)}});return a}))},activeTemplate:function(e,t){return t.templates[e.activeTemplateId]}},mutations:{setMaxPixelSize:function(e,t){e.maxPixelSize=t},setCanvas:function(e,t){var n=t.id,r=t.canvas;a["a"].set(e.templatesInit[n],"canvas",r)},setCanvasSize:function(e,t){var n=t.width,r=t.height,i=t.forAll,o=t.templates;e.templatesInit.forEach((function(t,s){(i||t.id===e.activeTemplateId)&&(n<=o[s].minSide.x||r<=o[s].minSide.y||(a["a"].set(e.templatesInit[s],"width",n),a["a"].set(e.templatesInit[s],"height",r)))}))},setPixelSize:function(e,t){var n=t.id,r=t.pixelSize;a["a"].set(e.templatesInit[n],"pixelSize",r)},setPadding:function(e,t){var n=t.padding,r=t.forAll,i=t.templates;e.templatesInit.forEach((function(t,o){(r||t.id===e.activeTemplateId)&&(n.x>i[o].maxPadding.x||n.y>i[o].maxPadding.y||a["a"].set(e.templatesInit[o],"padding",n))}))},setPaddingLogo:function(e,t){var n=t.padding,r=t.forAll;e.templatesInit.forEach((function(t,i){(r||t.id===e.activeTemplateId)&&a["a"].set(e.templatesInit[i],"logoPaddingPercent",n)}))},setStep:function(e,t){var n=t.step,r=t.forAll;e.templatesInit.forEach((function(t,i){(r||t.id===e.activeTemplateId)&&a["a"].set(e.templatesInit[i],"step",n)}))},setOffset:function(e,t){var n=t.offset,r=t.forAll;e.templatesInit.forEach((function(t,i){(r||t.id===e.activeTemplateId)&&a["a"].set(e.templatesInit[i],"offset",n)}))},setTemplateId:function(e,t){e.activeTemplateId=t},setGrid:function(e,t){var n=t.forAll,r=t.id,i="undefined"===typeof r?e.activeTemplateId:r;e.templatesInit.forEach((function(t,r){if(n||t.id===i){var o=Object(w["a"])(t),s=o.grid,d=o.startPoint;a["a"].set(e.templatesInit[r],"grid",s),a["a"].set(e.templatesInit[r],"startPoint",d)}}))},addFiles:function(e,t){var n=[];t.forEach((function(a,r){var i=new Image;i.onload=function(){r===t.length-1&&n.forEach((function(t){e.files.push(t)}))},i.src=a,n.push({id:Math.random(),img:i})}))},deleteFile:function(e,t){e.files.splice(t,1)},changeFilesOrder:function(e,t){var n=t.oldIndex,a=t.newIndex;e.files.splice(a,0,e.files.splice(n,1)[0])}},actions:{setPadding:function(e,t){var n=e.commit,a=e.getters;n("setPadding",I({},t,{templates:a.templates})),n("setGrid",I({},t))},setPaddingLogo:function(e,t){var n=e.commit,a=e.getters;n("setPaddingLogo",I({},t,{templates:a.templates})),n("setGrid",I({},t))},setCanvasSize:function(e,t){var n=e.commit,a=e.getters;n("setCanvasSize",I({},t,{templates:a.templates})),n("setGrid",I({},t))},setStep:function(e,t){var n=e.commit,a=e.getters;n("setStep",I({},t,{templates:a.templates})),n("setGrid",I({},t))},setOffset:function(e,t){var n=e.commit,a=e.getters;n("setOffset",I({},t,{templates:a.templates})),n("setGrid",I({},t))}},modules:{}});r["c"].add(i["c"],i["a"],i["e"],i["d"],i["b"]),a["a"].component("font-awesome-icon",o["a"]),a["a"].component("font-awesome-layers",o["b"]),a["a"].config.productionTip=!1,new a["a"]({router:x,store:S,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},d5d2:function(e,t,n){"use strict";t["a"]=function(e){var t=[],n={x:Math.round(e.step.x*(e.logoPaddingPercent/100)),y:Math.round(e.step.y*(e.logoPaddingPercent/100))},a={x:e.step.x+2*n.x,y:e.step.y+2*n.y},r=e.height-e.padding.y-a.y/2,i=r,o=0,s=e.padding.y+a.y/2;if(2===e.id){var d=r+a.y/2+n.y;o=Math.ceil((e.height-d)/a.y),i=o*a.y+r,s=-a.y/2+n.y}var c=2!==e.id?e.width-e.padding.x-a.x/2:e.width+a.x/2-n.x-1;c+=a.x;var l={x:{},y:{}};e.offset&&(e.offset.x.even&&Math.abs(e.offset.x.even)<=a.x&&(l.x.even=e.offset.x.even),e.offset.x.odd&&Math.abs(e.offset.x.odd)<=a.x&&(l.x.odd=e.offset.x.odd),e.offset.y.even&&Math.abs(e.offset.y.even)<=n.y&&(l.y.even=e.offset.y.even),e.offset.y.odd&&Math.abs(e.offset.y.odd)<=n.y&&(l.y.odd=e.offset.y.odd));var f=[],u=0;while(i>=s){var p=e.padding.x+a.x/2,m=0,h=[];3!==e.id&&(p-=a.x/2*(o%2));var v=o%2===0?"even":"odd",g=l.x[v]||0,y=void 0;y=2===e.id?p<=0?p:p-Math.ceil((p-a.x/2-n.x)/a.x)*a.x:p>=e.padding.x+a.x/2?p:p+a.x,y-=a.x;while(y<=c){var x={x:y+g,y:i,cleanX:y},b=void 0;if(3===e.id){var P=m%2===0?"even":"odd";b=l.y[P]}else b=l.y[v];x.y+=b||0,i===r&&y===p&&(f=[u,m]),h.push({coords:x}),y+=a.x,m+=1}h.length&&t.push(h),i-=a.y,o+=1,u+=1}return{grid:t,startPoint:f}}}});