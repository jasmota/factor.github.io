if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const t=e=>r(e,n),f={module:{uri:n},exports:c,require:t};i[n]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-c1986377"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icono.jfif",revision:"b6c6e5015eedaa1a92b743a007c797e2"},{url:"icono.png",revision:"0c44355bd94e78bb2bed4b4054de58a9"},{url:"index.html",revision:"d6493ed135bd29f258b916597f062b17"},{url:"manifest.json",revision:"deb804bbbf72ad2a7a4fc1f525c2604f"},{url:"README.md",revision:"749bf9887a5edcf93ff4d269c9a005e1"},{url:"script.js",revision:"43553bc2cfa02d43baf585eac6ef28e4"},{url:"style.css",revision:"4c2203f39daf9b719130b9466872c0f2"},{url:"worker.js",revision:"5ed6405673b40417e42c2a572766837c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map