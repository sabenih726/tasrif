/**
 * ============================================
 * ui-enhancements.js
 * UI Enhancements Module
 * TASHRIF SHOROF PRO
 * Dark Mode, Keyboard Shortcuts, Toast, 
 * Panels, Back-to-Top, Result Actions
 * ============================================
 */

// ═══════════════════════════════════════════════════════════════
//  UI MODULE
// ═══════════════════════════════════════════════════════════════
const UI = (() => {

    // ══════ DARK MODE ══════
    function initDarkMode() {
        const toggle = document.getElementById('darkModeToggle');
        const saved = localStorage.getItem('tashrif-theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', saved);
        updateDarkModeIcon(saved);
        
        if (toggle) {
            toggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('tashrif-theme', next);
                updateDarkModeIcon(next);
                showToast(next === 'dark' ? '🌙 Mode Gelap' : '☀️ Mode Terang');
            });
        }
    }

    function updateDarkModeIcon(theme) {
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // ══════ TOAST NOTIFICATIONS ══════
    function showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type !== 'info' ? 'toast-' + type : ''}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, duration);
    }

    // ══════ SIDE PANELS ══════
    function openPanel(panelId) {
        closeAllPanels();
        const panel = document.getElementById(panelId);
        const overlay = document.getElementById('panelOverlay');
        if (panel) panel.classList.add('open');
        if (overlay) overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closePanel(panelId) {
        const panel = document.getElementById(panelId);
        const overlay = document.getElementById('panelOverlay');
        if (panel) panel.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function closeAllPanels() {
        document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
        const overlay = document.getElementById('panelOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ══════ BACK TO TOP ══════
    function initBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ══════ KEYBOARD SHORTCUTS ══════
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);

            // "/" - Focus search
            if (e.key === '/' && !isInput) {
                e.preventDefault();
                const input = document.getElementById('userInput');
                if (input) input.focus();
            }

            // "Escape" - Close panels / clear search
            if (e.key === 'Escape') {
                closeAllPanels();
                hideKeyboardHint();
                const input = document.getElementById('userInput');
                if (input && document.activeElement === input) {
                    input.blur();
                    if (typeof App !== 'undefined' && App.clearSearch) {
                        App.clearSearch();
                    }
                }
            }

            // "D" - Toggle dark mode
            if (e.key === 'd' && !isInput) {
                document.getElementById('darkModeToggle')?.click();
            }

            // "?" - Show keyboard shortcuts
            if (e.key === '?' && !isInput) {
                toggleKeyboardHint();
            }

            // Arrow navigation in search results
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                const results = document.querySelectorAll('.search-result-item');
                if (results.length === 0) return;

                e.preventDefault();
                const current = document.querySelector('.search-result-item.highlighted');
                let index = current ? Array.from(results).indexOf(current) : -1;

                if (current) current.classList.remove('highlighted');

                if (e.key === 'ArrowDown') {
                    index = (index + 1) % results.length;
                } else {
                    index = index <= 0 ? results.length - 1 : index - 1;
                }

                results[index].classList.add('highlighted');
                results[index].scrollIntoView({ block: 'nearest' });
            }

            // "Enter" on highlighted result
            if (e.key === 'Enter' && !isInput) {
                const highlighted = document.querySelector('.search-result-item.highlighted');
                if (highlighted) {
                    e.preventDefault();
                    highlighted.click();
                }
            }
        });
    }

    function toggleKeyboardHint() {
        const hint = document.getElementById('keyboardHint');
        if (!hint) return;
        hint.style.display = hint.style.display === 'none' ? 'flex' : 'none';
    }

    function hideKeyboardHint() {
        const hint = document.getElementById('keyboardHint');
        if (hint) hint.style.display = 'none';
    }

    // ══════ INPUT MODE DETECTION ══════
    function initInputMode() {
        const input = document.getElementById('userInput');
        const modeEl = document.getElementById('inputMode');
        const modeLabel = document.getElementById('modeLabel');
        const clearBtn = document.getElementById('clearInput');

        if (!input || !modeEl) return;

        input.addEventListener('input', () => {
            const val = input.value.trim();

            // Show/hide clear button
            if (clearBtn) {
                clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
            }

            if (!val) {
                modeEl.className = 'input-mode';
                if (modeLabel) modeLabel.textContent = 'ABC';
                return;
            }

            // Detect input type
            const hasArabic = /[\u0600-\u06FF]/.test(val);
            const hasLatin = /[a-zA-Z]/.test(val);

            if (hasArabic) {
                modeEl.className = 'input-mode mode-arabic';
                if (modeLabel) modeLabel.textContent = 'عرب';
            } else if (hasLatin) {
                const words = val.split(/\s+/);
                const avgLen = words.reduce((a, b) => a + b.length, 0) / words.length;

                if (avgLen > 5 || /^(me|ber|di|ter|per|ke|se)/i.test(val)) {
                    modeEl.className = 'input-mode mode-indo';
                    if (modeLabel) modeLabel.textContent = 'IND';
                } else {
                    modeEl.className = 'input-mode mode-latin';
                    if (modeLabel) modeLabel.textContent = 'LAT';
                }
            }
        });
    }

    // ══════ TOOLBAR PANEL TOGGLES ══════
    function initToolbarPanels() {
        const historyBtn = document.getElementById('historyToggle');
        const bookmarkBtn = document.getElementById('bookmarkToggle');

        if (historyBtn) {
            historyBtn.addEventListener('click', () => {
                const panel = document.getElementById('historyPanel');
                if (panel?.classList.contains('open')) {
                    closePanel('historyPanel');
                } else {
                    openPanel('historyPanel');
                    if (typeof SearchHistory !== 'undefined') {
                        SearchHistory.render();
                    }
                }
            });
        }

        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => {
                const panel = document.getElementById('bookmarkPanel');
                if (panel?.classList.contains('open')) {
                    closePanel('bookmarkPanel');
                } else {
                    openPanel('bookmarkPanel');
                    renderBookmarks();
                }
            });
        }
    }

    // ══════ BOOKMARKS ══════
    function getBookmarks() {
        try {
            return JSON.parse(localStorage.getItem('tashrif-bookmarks') || '[]');
        } catch { return []; }
    }

    function addBookmark(data) {
        const bookmarks = getBookmarks();
        const exists = bookmarks.some(b => b.word === data.word);
        if (exists) {
            showToast('⚠️ Sudah di-bookmark');
            return false;
        }
        bookmarks.unshift({ ...data, timestamp: Date.now() });
        localStorage.setItem('tashrif-bookmarks', JSON.stringify(bookmarks.slice(0, 50)));
        showToast('🔖 Bookmark ditambahkan!', 'success');
        return true;
    }

    function removeBookmark(word) {
        let bookmarks = getBookmarks();
        bookmarks = bookmarks.filter(b => b.word !== word);
        localStorage.setItem('tashrif-bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        showToast('🗑️ Bookmark dihapus');
    }

    function isBookmarked(word) {
        const bookmarks = getBookmarks();
        return bookmarks.some(b => b.word === word);
    }

    function renderBookmarks() {
        const list = document.getElementById('bookmarkList');
        const bookmarks = getBookmarks();
        if (!list) return;

        if (bookmarks.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🔖</span>
                    <p>Belum ada bookmark</p>
                </div>`;
            return;
        }

        list.innerHTML = bookmarks.map(b => `
            <div class="panel-item" onclick="UI.loadBookmark('${escapeHtmlAttr(b.word)}')">
                <button class="panel-item-delete" 
                        onclick="event.stopPropagation(); UI.removeBookmark('${escapeHtmlAttr(b.word)}')">
                    ✕
                </button>
                <div class="panel-item-arabic">${escapeHtml(b.word)}</div>
                <div class="panel-item-info">${escapeHtml(b.meaning || '')} — ${escapeHtml(b.category || '')}</div>
            </div>
        `).join('');
    }

    function loadBookmark(word) {
        const input = document.getElementById('userInput');
        if (input) {
            input.value = word;
            closeAllPanels();
            if (typeof App !== 'undefined' && App.process) {
                App.process();
            }
        }
    }

    // ══════ SHARE & COPY ══════
    function shareResult(text) {
        if (navigator.share) {
            navigator.share({
                title: 'TASHRIF SHOROF PRO',
                text: text,
                url: window.location.href
            }).catch(() => {});
        } else {
            copyToClipboard(text);
        }
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('📋 Disalin ke clipboard!', 'success');
            }).catch(() => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('📋 Disalin!', 'success');
        } catch {
            showToast('⚠️ Gagal menyalin', 'error');
        }
        document.body.removeChild(textarea);
    }

    // ══════ HTML ESCAPE UTILITIES ══════
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = String(text);
        return div.innerHTML;
    }

    function escapeHtmlAttr(text) {
        if (!text) return '';
        return String(text)
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ══════ INIT ALL ══════
    function init() {
        initDarkMode();
        initBackToTop();
        initKeyboardShortcuts();
        initInputMode();
        initToolbarPanels();
        console.log('[UI] Enhancements initialized');
    }

    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ══════ PUBLIC API ══════
    return {
        showToast,
        openPanel,
        closePanel,
        closeAllPanels,
        addBookmark,
        removeBookmark,
        isBookmarked,
        renderBookmarks,
        loadBookmark,
        shareResult,
        copyToClipboard,
        escapeHtml,
        escapeHtmlAttr
    };
})();


// ═══════════════════════════════════════════════════════════════
//  RESULT ACTIONS MODULE
//  Bridge between HTML onclick and UI module
// ═══════════════════════════════════════════════════════════════
const ResultActions = (() => {

    /**
     * Get current result data from the displayed result
     * @returns {Object|null}
     */
    function getCurrentResult() {
        const patternEl = document.getElementById('patternText');
        const meaningEl = document.getElementById('meaningText');
        const babEl = document.getElementById('babText');
        const rootEl = document.getElementById('rootText');

        // Check Fi'il result
        const fiilResult = document.getElementById('resultFiil');
        if (fiilResult && fiilResult.style.display !== 'none' 
            && !fiilResult.classList.contains('result-section-hidden')) {
            return {
                type: 'fiil',
                word: patternEl?.textContent?.trim() || '',
                meaning: meaningEl?.textContent?.trim() || '',
                bab: babEl?.textContent?.trim() || '',
                root: rootEl?.textContent?.trim() || '',
                category: babEl?.textContent?.trim() || 'Fiil'
            };
        }

        // Check Isim result
        const isimResult = document.getElementById('resultIsim');
        if (isimResult && isimResult.style.display !== 'none'
            && !isimResult.classList.contains('result-section-hidden')) {
            const isimWord = document.getElementById('isimWordText');
            const isimType = document.getElementById('isimTypeText');
            return {
                type: 'isim',
                word: isimWord?.textContent?.trim() || '',
                meaning: '',
                bab: '',
                root: '',
                category: isimType?.textContent?.trim() || 'Isim'
            };
        }

        return null;
    }

    /**
     * Build formatted text from result data
     * @param {Object} data
     * @returns {string}
     */
    function buildResultText(data) {
        if (!data) return '';

        const lines = [
            '═══════════════════════',
            '  TASHRIF SHOROF PRO',
            '═══════════════════════',
            ''
        ];

        lines.push(`📝 Kata  : ${data.word}`);
        if (data.bab) lines.push(`📖 Bab   : ${data.bab}`);
        if (data.root) lines.push(`🔤 Akar  : ${data.root}`);
        if (data.meaning) lines.push(`📘 Arti  : ${data.meaning}`);

        // Get tashrif istilahi rows
        const rows = document.querySelectorAll('.row-tashrif');
        if (rows.length > 0) {
            lines.push('');
            lines.push('── Tashrif Istilahi ──');
            
            rows.forEach(row => {
                const label = row.querySelector('.label-cell');
                const mauzun = row.querySelector('.mauzun-cell');
                const wazan = row.querySelector('.wazan-cell');
                const meaning = row.querySelector('.meaning-cell');
                
                if (label && mauzun) {
                    const labelText = label.textContent.trim().replace(/\s+/g, ' ');
                    const mauzunText = mauzun.textContent.trim();
                    const wazanText = wazan?.textContent?.trim() || '';
                    const meaningText = meaning?.textContent?.trim() || '';
                    
                    let line = `${labelText}: ${mauzunText}`;
                    if (wazanText) line += ` (${wazanText})`;
                    if (meaningText) line += ` — ${meaningText}`;
                    
                    lines.push(line);
                }
            });
        }

        // Get active lughawi tab data
        const activeLughawi = document.querySelector('.lughawi-panel-block');
        if (activeLughawi) {
            const lughawiRows = activeLughawi.querySelectorAll('.lughawi-row');
            if (lughawiRows.length > 0) {
                lines.push('');
                lines.push('── Tashrif Lughawi ──');
                
                lughawiRows.forEach(row => {
                    const dhamir = row.querySelector('.lughawi-dhamir');
                    const fiil = row.querySelector('.lughawi-fiil');
                    const meaning = row.querySelector('.lughawi-meaning');
                    
                    if (dhamir && fiil) {
                        const dhText = dhamir.textContent.trim().replace(/\s+/g, ' ');
                        const fiilText = fiil.textContent.trim();
                        const meanText = meaning?.textContent?.trim() || '';
                        
                        lines.push(`${dhText} → ${fiilText} (${meanText})`);
                    }
                });
            }
        }

        lines.push('');
        lines.push('═══════════════════════');
        lines.push('tashrif-shorof-pro.web.app');

        return lines.join('\n');
    }

    /**
     * Copy current result to clipboard
     */
    function copy() {
        const data = getCurrentResult();
        if (!data) {
            UI.showToast('⚠️ Tidak ada hasil untuk disalin', 'error');
            return;
        }

        const text = buildResultText(data);
        UI.copyToClipboard(text);
    }

    /**
     * Bookmark current result
     */
    function bookmark() {
        const data = getCurrentResult();
        if (!data) {
            UI.showToast('⚠️ Tidak ada hasil untuk di-bookmark', 'error');
            return;
        }

        // Check if already bookmarked
        if (UI.isBookmarked(data.word)) {
            // Toggle off - remove bookmark
            UI.removeBookmark(data.word);
            updateBookmarkButton(false);
            return;
        }

        // Add bookmark
        const success = UI.addBookmark({
            word: data.word,
            meaning: data.meaning,
            category: data.category,
            bab: data.bab || '',
            root: data.root || ''
        });

        if (success) {
            updateBookmarkButton(true);
        }
    }

    /**
     * Update bookmark button visual state
     * @param {boolean} isBookmarked
     */
    function updateBookmarkButton(isBookmarked) {
        const btn = document.getElementById('bookmarkBtn');
        if (!btn) return;

        if (isBookmarked) {
            btn.classList.add('bookmarked');
            btn.innerHTML = '✅ Tersimpan';
        } else {
            btn.classList.remove('bookmarked');
            btn.innerHTML = '🔖 Bookmark';
        }
    }

    /**
     * Check and update bookmark button state for current result
     * Call this when a new result is displayed
     */
    function syncBookmarkButton() {
        const data = getCurrentResult();
        if (data) {
            updateBookmarkButton(UI.isBookmarked(data.word));
        } else {
            updateBookmarkButton(false);
        }
    }

    /**
     * Share current result
     */
    function share() {
        const data = getCurrentResult();
        if (!data) {
            UI.showToast('⚠️ Tidak ada hasil untuk dibagikan', 'error');
            return;
        }

        const text = buildResultText(data);
        UI.shareResult(text);
    }

    // ══════ PUBLIC API ══════
    return {
        copy,
        bookmark,
        share,
        syncBookmarkButton,
        getCurrentResult,
        buildResultText
    };
})();
