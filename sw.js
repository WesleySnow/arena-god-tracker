// Arena God Tracker — Service Worker
// 策略：
//   同源应用外壳（HTML/JS/图标）→ 缓存优先 + 后台静默更新（秒开，下次访问拿到新版）
//   跨域数据与图片（DDragon/CDragon/攻略站图标）→ 网络优先，失败回退缓存（离线可看最后一次数据）
const CACHE_VERSION = 'agt-v10.3';
const SHELL_CACHE = CACHE_VERSION + '-shell';
const RUNTIME_CACHE = CACHE_VERSION + '-runtime';
const SHELL_FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(SHELL_CACHE)
            .then(c => c.addAll(SHELL_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== SHELL_CACHE && k !== RUNTIME_CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        // 应用外壳：缓存优先，同时后台更新缓存
        e.respondWith(
            caches.match(req).then(hit => {
                const refresh = fetch(req).then(res => {
                    if (res && res.ok) {
                        const copy = res.clone();
                        caches.open(SHELL_CACHE).then(c => c.put(req, copy));
                    }
                    return res;
                }).catch(() => hit);
                return hit || refresh;
            })
        );
    } else {
        // 跨域资源：网络优先，成功则更新运行时缓存，失败回退缓存
        e.respondWith(
            fetch(req).then(res => {
                if (res && (res.ok || res.type === 'opaque')) {
                    const copy = res.clone();
                    caches.open(RUNTIME_CACHE).then(c => c.put(req, copy));
                }
                return res;
            }).catch(() => caches.match(req))
        );
    }
});
