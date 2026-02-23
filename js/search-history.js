/**
 * Search History Module
 */
const SearchHistory = (() => {
    const STORAGE_KEY = 'tashrif-search-history';
    const MAX_ITEMS = 20;

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch { return []; }
    }

    function add(query, result) {
        if (!query || query.trim().length < 2) return;

        let history = getHistory();

        // Remove duplicate
        history = history.filter(h => h.query !== query.trim());

        // Add to front
        history.unshift({
            query: query.trim(),
            result: result || '',
            timestamp: Date.now()
        });

        // Limit
        history = history.slice(0, MAX_ITEMS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }

    function clear() {
        localStorage.removeItem(STORAGE_KEY);
        render();
        UI.showToast('🗑️ Riwayat dihapus');
    }

    function render() {
        const list = document.getElementById('historyList');
        const history = getHistory();
        if (!list) return;

        if (history.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🕐</span>
                    <p>Belum ada riwayat</p>
                </div>`;
            return;
        }

        list.innerHTML = history.map(h => {
            const timeAgo = getTimeAgo(h.timestamp);
            return `
                <div class="panel-item" onclick="SearchHistory.load('${escapeHtml(h.query)}')">
                    <div class="panel-item-arabic">${escapeHtml(h.query)}</div>
                    <div class="panel-item-info">${timeAgo}</div>
                </div>`;
        }).join('');
    }

    function load(query) {
        const input = document.getElementById('userInput');
        if (input) {
            input.value = query;
            UI.closeAllPanels();
            if (typeof App !== 'undefined' && App.process) {
                App.process();
            }
        }
    }

    function renderRecent() {
        const list = document.getElementById('recentList');
        const section = document.getElementById('recentSearches');
        const history = getHistory();

        if (!list || !section) return;

        if (history.length === 0) {
            section.style.display = 'none';
            return;
        }

        section.style.display = 'block';
        list.innerHTML = history.slice(0, 5).map(h => `
            <div class="recent-item" onclick="SearchHistory.load('${escapeHtml(h.query)}')">
                🕐 ${escapeHtml(h.query)}
            </div>
        `).join('');
    }

    function getTimeAgo(timestamp) {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        if (seconds < 60) return 'Baru saja';
        if (seconds < 3600) return Math.floor(seconds / 60) + ' menit lalu';
        if (seconds < 86400) return Math.floor(seconds / 3600) + ' jam lalu';
        return Math.floor(seconds / 86400) + ' hari lalu';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    return { add, clear, render, renderRecent, load, getHistory };
})();
