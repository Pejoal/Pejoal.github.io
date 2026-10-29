// Service Worker — handles stale _nuxt chunk 404s after redeployment.
// When a chunk hash changes (new build), old cached URLs 404. We detect this
// and reload the page so the client fetches the fresh HTML + new chunk URLs.

const CACHE_NAME = 'pejoal-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clear ALL old caches so stale _nuxt chunks don't linger
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only intercept same-origin _nuxt chunk requests
  if (url.origin === self.location.origin && url.pathname.startsWith('/_nuxt/')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Chunk not found (stale hash after redeploy) — tell all clients to reload
        self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => client.navigate(client.url));
        });
        // Return an empty response to avoid an unhandled rejection
        return new Response('', { status: 503, statusText: 'Reloading for update' });
      })
    );
  }
});
