// sw.js - 基本的 Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activate');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // 简单的透传策略，不进行离线缓存拦截，保证数据实时性
    e.respondWith(fetch(e.request));
});