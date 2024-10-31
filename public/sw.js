self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/mall/inside_denner.png',
                '/mall/inside_inter.png',
                '/mall/inside.png',
                '/mall/entrance.png',
                '/mall/outside.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName !== 'v1').map(cacheName => caches.delete(cacheName))
            );
        })
    );
});
