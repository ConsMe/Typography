(function(t){function e(e){for(var a,r,c=e[0],s=e[1],f=e[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(u.length)u.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-598baa7c":"08d7202b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-598baa7c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-598baa7c":"ba5cda63"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var f=o[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===a||d===i))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){f=u[c],d=f.getAttribute("data-href");if(d===a||d===i)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],l.parentNode.removeChild(l),n(o)},l.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t);var u=new Error;f=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var u=0;u<f.length;u++)e(f[u]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("ecee"),i=n("c074"),o=n("ad3d"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],f=n("854a"),d=n.n(f);d.a.options.closeButton=!0;var u={},l=u,p=(n("5c0b"),n("2877")),m=Object(p["a"])(l,c,s,!1,null,null,null),h=m.exports,v=(n("d3b7"),n("8c4f"));a["a"].use(v["a"]);var g=[{path:"/*",component:function(){return n.e("chunk-598baa7c").then(n.bind(null,"49d7"))}},{path:"/editor",name:"editor",component:function(){return n.e("chunk-598baa7c").then(n.bind(null,"49d7"))}}],y=new v["a"]({mode:"history",base:"",routes:g}),x=y,b=(n("a4d3"),n("99af"),n("cb29"),n("4de4"),n("c740"),n("4160"),n("d81d"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),O=n("2f62"),w=n("d5d2");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}a["a"].use(O["a"]);var S=new O["a"].Store({state:{maxPixelSize:{width:0,height:0},templatesInit:new Array(4).fill().map((function(t,e){return{id:e,canvas:null,grid:[],width:300,height:250,pixelSize:{width:0,height:0},padding:{x:13,y:16},logoSize:{y:26,x:29},step:{y:3,x:3},offset:{x:{even:0,odd:0},y:{even:0,odd:0}},logoPaddingPercent:12,dopLogoPadding:{x:0,y:0},totalOffset:{x:0,y:0}}})),activeTemplateId:0,files:[]},getters:{templates:function(t){return t.templatesInit.map((function(t){var e=Math.floor(t.width/2),n=Math.floor(t.height/2),a=I({},t,{sizeStr:"".concat(t.width).concat(t.height),maxPadding:{x:e>100?100:e,y:n>100?100:n},minSide:{x:Math.ceil(2*t.padding.x),y:Math.ceil(2*t.padding.y)}});return a}))},activeTemplate:function(t,e){return e.templates[t.activeTemplateId]}},mutations:{setMaxPixelSize:function(t,e){t.maxPixelSize=e},setCanvas:function(t,e){var n=e.id,r=e.canvas;a["a"].set(t.templatesInit[n],"canvas",r)},setCanvasSize:function(t,e){var n=e.width,r=e.height,i=e.forAll,o=e.templates;t.templatesInit.forEach((function(e,c){(i||e.id===t.activeTemplateId)&&(n<=o[c].minSide.x||r<=o[c].minSide.y||(a["a"].set(t.templatesInit[c],"width",n),a["a"].set(t.templatesInit[c],"height",r)))}))},setPixelSize:function(t,e){var n=e.id,r=e.pixelSize;a["a"].set(t.templatesInit[n],"pixelSize",r)},setPadding:function(t,e){var n=e.padding,r=e.forAll,i=e.templates;t.templatesInit.forEach((function(e,o){(r||e.id===t.activeTemplateId)&&(n.x>i[o].maxPadding.x||n.y>i[o].maxPadding.y||a["a"].set(t.templatesInit[o],"padding",n))}))},setPaddingLogo:function(t,e){var n=e.padding,r=e.forAll;t.templatesInit.forEach((function(e,i){(r||e.id===t.activeTemplateId)&&a["a"].set(t.templatesInit[i],"logoPaddingPercent",n)}))},setStep:function(t,e){var n=e.step,r=e.forAll;t.templatesInit.forEach((function(e,i){(r||e.id===t.activeTemplateId)&&a["a"].set(t.templatesInit[i],"step",n)}))},setOffset:function(t,e){var n=e.offset,r=e.forAll;t.templatesInit.forEach((function(e,i){(r||e.id===t.activeTemplateId)&&a["a"].set(t.templatesInit[i],"offset",n)}))},setTotalOffset:function(t,e){var n=e.totalOffset,r=e.forAll;t.templatesInit.forEach((function(e,i){(r||e.id===t.activeTemplateId)&&a["a"].set(t.templatesInit[i],"totalOffset",n)}))},setTemplateId:function(t,e){t.activeTemplateId=e},setGrid:function(t,e){var n=e.forAll,r=e.id,i="undefined"===typeof r?t.activeTemplateId:r;t.templatesInit.forEach((function(e,r){if(n||e.id===i){var o=Object(w["a"])(e),c=o.grid,s=o.startPoint,f=o.offsetLimit,d=o.offset,u=o.stepLimit;a["a"].set(t.templatesInit[r],"grid",c),a["a"].set(t.templatesInit[r],"startPoint",s),a["a"].set(t.templatesInit[r],"offsetLimit",f),t.templatesInit[r].offset=d,t.templatesInit[r].stepLimit=u}}))},addFiles:function(t,e){var n=[];e.forEach((function(a,r){var i=new Image;i.onload=function(){r===e.length-1&&n.forEach((function(e){t.files.push(e)}))},i.src=a,n.push({id:Math.random(),img:i})}))},deleteFile:function(t,e){t.files.splice(e,1)},changeFilesOrder:function(t,e){var n=e.oldIndex,a=e.newIndex;t.files.splice(a,0,t.files.splice(n,1)[0])},setDopLogoPadding:function(t,e){var n=e.dopLogoPadding,r=e.id,i=t.templatesInit.findIndex((function(t){return t.id===r}));a["a"].set(t.templatesInit[i],"dopLogoPadding",n)}},actions:{setPadding:function(t,e){var n=t.commit,a=t.getters;n("setPadding",I({},e,{templates:a.templates})),n("setGrid",I({},e))},setPaddingLogo:function(t,e){var n=t.commit,a=t.getters;n("setPaddingLogo",I({},e,{templates:a.templates})),n("setGrid",I({},e))},setCanvasSize:function(t,e){var n=t.commit,a=t.getters;n("setCanvasSize",I({},e,{templates:a.templates})),n("setGrid",I({},e))},setStep:function(t,e){var n=t.commit,a=t.getters;n("setStep",I({},e,{templates:a.templates})),n("setGrid",I({},e))},setOffset:function(t,e){var n=t.commit,a=t.getters;n("setOffset",I({},e,{templates:a.templates})),n("setGrid",I({},e))},setTotalOffset:function(t,e){var n=t.commit;n("setTotalOffset",I({},e)),n("setGrid",I({},e))},setDopLogoPadding:function(t,e){var n=t.commit;n("setDopLogoPadding",I({},e)),n("setGrid",I({},e))}},modules:{}});r["c"].add(i["c"],i["a"],i["e"],i["d"],i["b"]),a["a"].component("font-awesome-icon",o["a"]),a["a"].component("font-awesome-layers",o["b"]),a["a"].config.productionTip=!1,new a["a"]({router:x,store:S,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},d5d2:function(t,e,n){"use strict";n("4160"),n("d81d"),n("b64b"),n("159b"),n("99af"),n("cb29"),n("4de4"),n("13d5"),n("45fc");var a=n("2909"),r=function(t){var e=function(t){return JSON.parse(JSON.stringify(t))},n=e({logoSize:t.logoSize,step:t.step,offset:t.offset,id:t.id,width:t.width,height:t.height}),r=n.logoSize,i=["even","odd","even","odd","even"],o=function(t,n){var a=e(t);return Object.keys(a).forEach((function(t){Object.keys(a[t]).forEach((function(e){Math.abs(a[t][e])>n[t]&&(a[t][e]=a[t][e]>0?n[t]:-n[t])}))})),a},c=r.x/2,s=r.y/2,f=function(t,e){var a={x:r.x+2*e.x,y:r.y+2*e.y},f=o(t,a);return i.map((function(t,e){var r=3!==n.id&&"odd"===t?a.x/2:0;return i.map((function(i,o){var d=o*a.x+f.x[t]+r,u=e*a.y+f.y[3===n.id?i:t];return{x1:d-c,x2:d+c,y1:u-s,y2:u+s}}))})).reduce((function(t,e){return t.concat(e)}),[])},d=function(t,e){var n=t.map((function(n,a){return a?n["".concat(e,"1")]-t[a-1]["".concat(e,"2")]:null})).filter((function(t){return null!==t}));return Math.min.apply(Math,Object(a["a"])(n))},u=function(t,e){var n,a="x"===e?"y":"x",r=t[12];return t.filter((function(t){return t["".concat(a,"1")]<r["".concat(a,"2")]&&t["".concat(a,"2")]>r["".concat(a,"2")]||t["".concat(a,"2")]>r["".concat(a,"1")]&&t["".concat(a,"1")]<r["".concat(a,"1")]||t["".concat(a,"1")]===r["".concat(a,"1")]&&t["".concat(a,"2")]===r["".concat(a,"2")]})).sort((function(t,n){return t["".concat(e,"1")]-n["".concat(e,"1")]})).filter((function(t,a){return a?t["".concat(e,"1")]!==n&&(n=t["".concat(e,"1")],!0):(n=t["".concat(e,"1")],!0)}))},l=f(n.offset,n.step),p=u(l,"x"),m={x:d(p,"x")},h=u(l,"y");m.y=d(h,"y");var v={x:{},y:{}};Object.keys(n.offset).forEach((function(t){Object.keys(n.offset[t]).forEach((function(a){v[t][a]={},[1,-1].forEach((function(i){var o=i>0?"max":"min",c=r[t]+2*n.step[t],s=n.offset[t][a],l=new Array(2*c).fill("").some((function(r,c){var l=i*(c+1),p=e(n.offset);p[t][a]+=l;var m=f(p,n.step),h=u(m,t),g=d(h,t);return g<=0?(v[t][a][o]=g<0?s:p[t][a],!0):(s=p[t][a],!1)}));l||(v[t][a][o]=c*i)}))}))}));var g={x:{},y:{}};return["x","y"].forEach((function(t){var a=r[t]+2*n.step[t],i="x"===t?n.width/2:n.height/2;[1,-1].forEach((function(r){var o=r>0?"max":"min",c=n.step[t];r>0&&(c=n.step[t]+a>i?i-n.step[t]:a);var s=n.step[t],l=new Array(c).fill("").some((function(a,i){var c=r*(i+1),l=e(n.step);l[t]+=c;var p=f(n.offset,l),m=u(p,t),h=d(m,t);return h<=0?(g[t][o]=h<0?s:l[t],!0):(s=l[t],!1)}));l||(g[t][o]=r<0?0:i)}))})),{offsetLimits:v,stepLimits:g}};e["a"]=function(t){var e=[],n={x:t.step.x,y:t.step.y},a={x:t.logoSize.x,y:t.logoSize.y},i={x:2*n.x+a.x,y:2*n.y+a.y},o={width:t.width,height:t.height},c=Math.ceil(t.padding.y/a.y+.1);c+=c%2?1:0;var s=Math.ceil(t.padding.x/a.x+.1);s+=s%2?1:2;var f=o.height-t.padding.y-a.y/2+i.y*c,d=f,u=0,l=0-2*i.y,p=o.width+2*i.x,m=[],h=t.padding.x+a.x/2-i.x*s;while(d>=l){var v=0,g=[],y=h;3!==t.id&&(y+=i.x/2*(u%2));while(y<=p){var x={x:y,y:d,cleanX:y};m.length||u!==c||v!==s||(m=[u,v],x.isStartPoint=!0),g.push({coords:x}),y+=i.x,v+=1}g.length&&e.push(g),d-=i.y,u+=1}var b=t.offset;Object.keys(b).forEach((function(t){Object.keys(b[t]).forEach((function(e){Math.abs(b[t][e])>i[t]&&(b[t][e]=b[t][e]>0?i[t]:-i[t])}))}));var O=t.totalOffset;e=e.map((function(e,n){var a=n%2?"even":"odd";return e.map((function(e,n){var r=n%2?"even":"odd";return{coords:{x:e.coords.x+b.x[a]+O.x,cleanX:e.coords.cleanX+O.x,y:3===t.id?e.coords.y+b.y[r]+O.y:e.coords.y+b.y[a]+O.y,orderX:a,orderY:3===t.id?r:a,isStartPoint:e.coords.isStartPoint}}}))}));var w={},P={};if(t.canvas){var I=r(t);I&&(w=I.offsetLimits,P=I.stepLimits)}return{grid:e,startPoint:m,offsetLimit:w,offset:b,stepLimit:P}}}});