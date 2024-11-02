self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/business/denner.png',
                '/business/fight_sports.png',
                '/business/inter.png',
                '/business/jysk.png',
                '/business/kambly.png',
                '/business/kambly_cafe.png',
                '/business/qualipet.png',
                '/business/secret_dance.png',
                '/business/star_hair.png',
                '/business/zebra_new.png',
                '/business/detail_view/denner.jpg',
                '/business/detail_view/g_muai.jpg',
                '/business/detail_view/g_muai2.jpg',
                '/business/detail_view/g_secret.jpg',
                '/business/detail_view/g_starhair.jpg',
                '/business/detail_view/interdiscount.jpg',
                '/business/detail_view/interdiscount-1.jpg',
                '/business/detail_view/jysk.jpg',
                '/business/detail_view/kambly.jpg',
                '/business/detail_view/kambly-1.jpg',
                '/business/detail_view/kambly-2.jpg',
                '/business/detail_view/kambly-3.jpg',
                '/business/detail_view/laden_cafe1.jpg',
                '/business/detail_view/laden_cafe2.jpg',
                '/business/detail_view/laden_cafe3.jpg',
                '/business/detail_view/qualipet.jpg',
                '/business/detail_view/zebra.jpg',
                '/business/detail_view/zebra-1.jpg',
                '/business/icons/arrow.svg',
                '/home/arrow_right.svg',
                '/home/dot_clicked.svg',
                '/home/dot_unclicked.svg',
                '/home/facebook.svg',
                '/home/instagram.svg',
                '/logo/centerio.png',
                '/logo/centerio_t.png',
                '/logo/logo.png',
                '/logo/logo_t.png',
                '/logo/logo_t_blue.png',
                '/mall/entrance.png',
                '/mall/inside.png',
                '/mall/inside_denner.png',
                '/mall/inside_inter.png',
                '/mall/inside_lift.png',
                '/mall/outside.png',
                '/mall/outside_bottom_right.png',
                '/mall/outside_business.png',
                '/mall/seeland_outside.png',
                '/rental_space/rental_space_first_floor.png',
                '/rental_space/rental_space_second_floor.png',
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
