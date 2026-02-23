const CACHE_NAME = 'tashrif-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/babs-mujarrad.js',
    '/js/babs-mazid.js',
    '/js/babs-rubai.js',
    '/js/dictionary.js',
    '/js/fiil-mutal.js',
    '/js/isim-analyzer.js',
    '/js/engine.js',
    '/js/app.js',
    '/js/ui-enhancements.js',
    '/js/search-history.js',
    '/js/voice-input.js',
    '/js/pwa.js'
];

// Install - Cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate - Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - Cache-first strategy (perfect for offline app)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
            .catch(() => {
                if (event.request.destination === 'document') {
                    return caches.match('/index.html');
                }
            })
    );
});
