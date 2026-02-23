const CACHE_NAME = 'tashrif-v2';

const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/babs-mujarrad.js',
    './js/babs-mazid.js',
    './js/babs-rubai.js',
    './js/dictionary.js',
    './js/fiil-mutal.js',
    './js/isim-analyzer.js',
    './js/engine.js',
    './js/app.js',
    './js/ui-enhancements.js',
    './js/search-history.js',
    './js/voice-input.js',
    './js/pwa.js'
];

// Install - Cache assets one by one (resilient)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            console.log('[SW] Caching assets...');

            // Cache each file individually - don't fail if one is missing
            const results = await Promise.allSettled(
                ASSETS.map(async (url) => {
                    try {
                        const response = await fetch(url);
                        if (response.ok) {
                            await cache.put(url, response);
                            console.log('[SW] ✅ Cached:', url);
                        } else {
                            console.warn('[SW] ⚠️ Skip (not found):', url, response.status);
                        }
                    } catch (err) {
                        console.warn('[SW] ⚠️ Skip (error):', url, err.message);
                    }
                })
            );

            const cached = results.filter(r => r.status === 'fulfilled').length;
            console.log(`[SW] Cached ${cached}/${ASSETS.length} assets`);

            return self.skipWaiting();
        })
    );
});

// Activate - Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] 🗑️ Delete old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => {
            console.log('[SW] ✅ Activated');
            return self.clients.claim();
        })
    );
});

// Fetch - Cache-first, fallback to network
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Skip non-same-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) {
                // Return cache, but also update in background
                fetchAndCache(event.request);
                return cached;
            }

            // Not in cache, fetch from network
            return fetchAndCache(event.request);
        }).catch(() => {
            // Offline fallback
            if (event.request.destination === 'document') {
                return caches.match('./index.html');
            }
        })
    );
});

// Helper: Fetch and update cache
async function fetchAndCache(request) {
    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }

        return response;
    } catch (err) {
        // Network failed, try cache
        const cached = await caches.match(request);
        if (cached) return cached;
        throw err;
    }
}
