if(!self.define){const i=async i=>{if("require"!==i&&(i+=".js"),!r[i]&&(await new Promise(async e=>{if("document"in self){const r=document.createElement("script");r.src=i,document.head.appendChild(r),r.onload=e}else importScripts(i),e()}),!r[i]))throw new Error(`Module ${i} didn’t register its module`);return r[i]},e=async(e,r)=>{const n=await Promise.all(e.map(i));r(1===n.length?n[0]:n)};e.toUrl=i=>`./${i}`;const r={require:Promise.resolve(e)};self.define=(e,n,a)=>{r[e]||(r[e]=new Promise(async r=>{let s={};const c={uri:location.origin+e.slice(1)},o=await Promise.all(n.map(e=>"exports"===e?s:"module"===e?c:i(e))),d=a(...o);s.default||(s.default=d),r(s)}))}}define("./sw.js",["./workbox-7c85bfc1"],(function(i){"use strict";self.addEventListener("message",i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()}),i.precacheAndRoute([{url:"/parking-timer/css/app.fed1bcb9.css",revision:"131349b6ae02acb77ef05bc23238ac86"},{url:"/parking-timer/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/parking-timer/icons/android-chrome-192x192.png",revision:"604f52af0d3d779cf9a41d311d444ff7"},{url:"/parking-timer/icons/android-chrome-512x512.png",revision:"daa664945ab4720aaab77e472ae226e2"},{url:"/parking-timer/icons/apple-touch-icon.png",revision:"4e723c652a53a9d11769f62844b6bcd5"},{url:"/parking-timer/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/parking-timer/icons/favicon-16x16.png",revision:"2cd2938e648c8e58c24f268202759e83"},{url:"/parking-timer/icons/favicon-32x32.png",revision:"ef8fadc3990926279c27a6660da2b63d"},{url:"/parking-timer/icons/favicon.ico",revision:"86526644f52870084198a52aaa325e81"},{url:"/parking-timer/icons/mstile-150x150.png",revision:"035cd8e40b5d44f0f1458232c782033d"},{url:"/parking-timer/icons/safari-pinned-tab.svg",revision:"2073a32c69c4199d43f3a80dc61ed459"},{url:"/parking-timer/icons/site.webmanifest",revision:"f2e5013859960463f1639d2907bff513"},{url:"/parking-timer/index.html",revision:"ecf9faf6ec9791375bf0e687aae0aed9"},{url:"/parking-timer/js/app.9dd9c6ea.js",revision:"75034a074c1aa9e0cd210b0257f824d0"},{url:"/parking-timer/js/chunk-vendors.2e3999f1.js",revision:"4c85065c4bf0a7da045ad194155457a7"}],{})}));
//# sourceMappingURL=sw.js.map
