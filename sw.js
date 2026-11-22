/* Service worker – Apuntes de Portugués
   Estrategia: primero red (siempre lo último publicado) y, sin conexión, la copia guardada.
   Cambia VERSION en cada actualización. */
const VERSION = "1.5.0";
const CACHE = "apuntes-pt-" + VERSION;
const ARCHIVOS = [
  "./", "index.html", "css/styles.css", "js/app.js",
  "data/a1.js", "data/a2.js", "data/b1.js", "data/ampliacion.js", "data/verbos.js", "data/glosario.js", "data/ejercicios.js", "data/examenes.js", "manifest.json",
  "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  // cache: "reload" evita copiar versiones antiguas guardadas por el navegador
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(ARCHIVOS.map((u) =>
        fetch(new Request(u, { cache: "reload" })).then((r) => { if (r.ok) return c.put(u, r); })
      )))
      .then(() => self.skipWaiting())
  );
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
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req, { cache: "no-cache" })
      .then((r) => {
        if (r.ok) { const copia = r.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
        return r;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
  );
});
