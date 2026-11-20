const CACHE_NAME = 'oklch-palette-v1';

// Core local app files using relative paths so GitHub Pages subpaths work cleanly
const APP_SHELL_ASSETS = [
    './',
    './index.html',
    './manifest.webmanifest',
    './favicon--32x32.png',
    './favicon--192x192.png',
    './favicon--512x512.png'
];

// External CDN libraries required for styling and 3D visualization
const CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/three@0.128.0/build/three.min.js',
    'https://unpkg.com/three@0.128.0/examples/js/controls/OrbitControls.js'
];

// Install event: cache app shell and pre-warm external CDN dependencies
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            await cache.addAll(APP_SHELL_ASSETS);
            // Cache external scripts individually so an opaque response never blocks installation
            await Promise.allSettled(
                CDN_ASSETS.map(async (url) => {
                    const response = await fetch(url, { mode: 'no-cors' });
                    if (response) {
                        await cache.put(url, response);
                    }
                })
            );
        })
    );
    self.skipWaiting();
});

// Activate event: remove outdated caches when CACHE_NAME is bumped
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        )
    );
    self.clients.claim();
});

// Fetch event: serve cached assets immediately while updating cache in the background
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const networkFetch = fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => cachedResponse);

            return cachedResponse || networkFetch;
        })
    );
});