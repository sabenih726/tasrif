/**
 * PWA Module - Service Worker + Install Prompt
 */
const PWA = (() => {
    let deferredPrompt = null;

    function init() {
        registerServiceWorker();
        handleInstallPrompt();
    }

    async function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const reg = await navigator.serviceWorker.register('/sw.js');
                console.log('[PWA] Service Worker registered');
            } catch (err) {
                console.warn('[PWA] SW registration failed:', err);
            }
        }
    }

    function handleInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;

            const installBtn = document.getElementById('installBtn');
            if (installBtn) {
                installBtn.style.display = 'flex';
                installBtn.addEventListener('click', install);
            }
        });

        window.addEventListener('appinstalled', () => {
            deferredPrompt = null;
            const installBtn = document.getElementById('installBtn');
            if (installBtn) installBtn.style.display = 'none';

            const pwaStatus = document.getElementById('pwaStatus');
            if (pwaStatus) pwaStatus.style.display = 'inline-flex';

            UI.showToast('📲 Aplikasi berhasil diinstall!', 'success');
        });
    }

    async function install() {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        console.log('[PWA] Install result:', result.outcome);
        deferredPrompt = null;
    }

    // Auto-init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { install };
})();
