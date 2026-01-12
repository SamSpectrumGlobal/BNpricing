/* ========= SERVICE WORKER – SAFE UPDATE VERSION ========= */

const CACHE_VERSION = 'v3'; // 🔴 CHANGE THIS ON EVERY RELEASE
const CACHE_NAME = `mattress-app-${CACHE_VERSION}`;

/* Files you REALLY need offline (keep minimal) */
const CORE_ASSETS = [
  './',
  './index19.html'
];

/* INSTALL: force new SW to activate immediately */
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    })
  );
});

/* ACTIVATE: delete ALL old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* FETCH: NETWORK FIRST (prevents stale code forever) */
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Update cache with fresh version
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request);
      })
  );
});
