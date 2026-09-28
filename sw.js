const CACHE="quiz-pse-v13";
const CORE=["./","./index.html","./questions.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("quiz-pse-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return;
  const isHtml=e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("/index.html");
  e.respondWith(
    isHtml
      ? fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return res}).catch(()=>caches.match("./index.html"))
      : caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match("./index.html")))
  );
});