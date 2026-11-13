/* Service worker du Quiz secourisme — PSC · PSE1 · PSE2
 *
 * Stratégie :
 *  - pages (navigation) : réseau d'abord, cache en secours → l'application est
 *    toujours à jour quand le réseau est disponible, utilisable hors ligne sinon ;
 *  - ressources (CSS, JS, images) : cache d'abord, réseau en secours.
 *
 * IMPORTANT : toute modification des fichiers de l'application doit s'accompagner
 * d'une incrémentation de VERSION, sinon les visiteurs garderont l'ancienne copie.
 */
const VERSION = "27";
const CACHE = `quiz-pse-v${VERSION}`;

const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./questions.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./assets/noel-sapin.svg",
  "./assets/noel-boules.svg",
  "./assets/noel-flocon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key.startsWith("quiz-pse-") && key !== CACHE).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          /* Seule une page réellement servie remplace la coque hors ligne :
           * une 404 (URL inconnue) ou une 500 est quand même renvoyée par
           * fetch(), et la cacher ici l'aurait servie à la place de
           * l'application lors des navigations suivantes. */
          if (response && response.ok && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put("./index.html", copy));
          }
          return response;
        })
        .catch(() =>
          caches.match("./index.html").then((cached) => cached || caches.match("./"))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request)
          .then((response) => {
            if (response && response.status === 200 && response.type === "basic") {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          /* Une ressource manquante ne doit pas être remplacée par la page :
           * le navigateur refuserait du HTML à la place du CSS ou du JS. */
          .catch(() => Response.error())
    )
  );
});
