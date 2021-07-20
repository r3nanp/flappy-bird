const cacheName = 'Flappy Bird'

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(async cache => {
      await cache.addAll(['/'])
      return self.skipWaiting()
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request)
      })
  )
})

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(cacheName) !== 0
          })
          .map(function (key) {
            return caches.delete(key)
          })
      )
    })
  )
})
