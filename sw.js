// Uygulama olarak yüklenebilmek için gerekli. Önbellek tutmaz: her güncelleme anında gelir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
    if (e.request.mode !== 'navigate') return;
    e.respondWith(fetch(e.request).catch(() => new Response(
        '<meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;background:#0f172a;color:#fff;text-align:center;padding-top:30vh"><h2>İnternet bağlantısı yok</h2><p>Bağlanınca sayfayı yenileyin.</p>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )));
});
