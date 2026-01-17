const CACHE_NAME = 'kap-hub-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './ai-gallery.html',
    './m365-helfer.html',
    './self-service.html',
    './news.html',
    './global-styles.css',
    './global-utils.js',
    './m365-data.js',
    './m365-logic.js',
    './news-data.js',
    './news-logic.js',
    './self-service-data.js',
    './self-service-logic.js',
    './manifest.json'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
