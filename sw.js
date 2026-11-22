/* Service worker – Apuntes de Portugués (JDev)
   Cambia VERSION en cada actualización para que la app avise de la nueva versión. */
const VERSION = "1.0.0";
const CACHE = "apuntes-pt-" + VERSION;
const ARCHIVOS = [
  "./", "index.html", "css/styles.css", "js/app.js",
  "data/a1.js", "data/a2.js", "manifest.json",
  "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith("apuntes-pt-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => { if (e.data === "actualizar") self.skipWaiting(); });

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request))
  );
});
