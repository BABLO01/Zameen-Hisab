// ============================================================
// Zameen Hisab v3.0 — Service Worker
// Full Offline Support — Cache First Strategy
// ============================================================

const CACHE_NAME = 'zh-v3-cache';
const OFFLINE_URL = 'index.html';

// All files to cache for offline use
const PRECACHE_ASSETS = [
  'index.html',
  'manifest.json',
  'icons/icon-72x72.png',
  'icons/icon-96x96.png',
  'icons/icon-128x128.png',
  'icons/icon-144x144.png',
  'icons/icon-152x152.png',
  'icons/icon-180x180.png',
  'icons/icon-192x192.png',
  'icons/icon-384x384.png',
  'icons/icon-512x512.png',
  'favicon.ico'
];

// ── INSTALL: Pre-cache all app files ──────────────────────
self.addEventListener('install', function(event) {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW] Pre-caching app shell');
        // Cache each file individually so one failure doesn't block all
        var cachePromises = PRECACHE_ASSETS.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('[SW] Failed to cache:', url, err);
          });
        });
        return Promise.all(cachePromises);
      })
      .then(function() {
        console.log('[SW] Pre-cache complete');
        return self.skipWaiting();
      })
  );
});

// ── ACTIVATE: Clean up old caches ─────────────────────────
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames
            .filter(function(name) { return name !== CACHE_NAME; })
            .map(function(name) {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(function() {
        console.log('[SW] Now active');
        return self.clients.claim();
      })
  );
});

// ── FETCH: Cache First, then Network ──────────────────────
self.addEventListener('fetch', function(event) {
  var request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension, browser-extension
  if (request.url.startsWith('chrome-extension://')) return;
  if (request.url.startsWith('moz-extension://')) return;

  // Google Fonts — Network first, cache fallback
  if (request.url.includes('fonts.googleapis.com') ||
      request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(request)
        .then(function(response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(function() {
          return caches.match(request);
        })
    );
    return;
  }

  // App files — Cache First
  event.respondWith(
    caches.match(request)
      .then(function(cachedResponse) {
        if (cachedResponse) {
          // Serve from cache
          return cachedResponse;
        }

        // Not in cache — fetch from network
        return fetch(request)
          .then(function(networkResponse) {
            // Only cache valid responses
            if (!networkResponse ||
                networkResponse.status !== 200 ||
                networkResponse.type === 'opaque') {
              return networkResponse;
            }

            // Cache the new response
            var responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(request, responseToCache);
            });

            return networkResponse;
          })
          .catch(function() {
            // Network failed — return cached index.html for navigation
            if (request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            return new Response('', { status: 408, statusText: 'Offline' });
          });
      })
  );
});
