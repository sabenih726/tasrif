/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  APP: UI Controller v3.1 - FIXED COMPLETE               ║
 * ║  - FIX: renderTashrifIstilahi added                      ║
 * ║  - FIX: container ID matched with HTML                   ║
 * ║  - Support Fi'il (Mujarrad, Mazid, Ruba'i)              ║
 * ║  - Support Isim (Jamid & Musytaq)                        ║
 * ║  - Search: Arab, Latin, Indonesia                        ║
 * ║  - Auto-detect & Manual mode                             ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var App = {

    currentCategory: 'mujarrad',
    currentBab: null,
    currentWord: null,
    currentData: null,

    // ═══════════════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════════════

    init: function() {
        console.log('🚀 Initializing TASHRIF SHOROF PRO...');
        
        this.renderStats();
        this.renderBabButtons();
        
        if (typeof TashrifEngine !== 'undefined') {
            var test = TashrifEngine.analyze("نصر", "m1");
            console.log('✅ TashrifEngine:', test ? 'OK' : 'FAIL');
        } else {
            console.warn('⚠️ TashrifEngine not loaded');
        }
        
        if (typeof IsimAnalyzer !== 'undefined') {
            console.log('✅ IsimAnalyzer: OK');
        } else {
            console.warn('⚠️ IsimAnalyzer not loaded');
        }
        
        var input = document.getElementById('userInput');
        if (input) input.focus();
        
        console.log('✅ Initialization complete');
    },

    // ═══════════════════════════════════════════════════════════
    // STATS & DISPLAY
    // ═══════════════════════════════════════════════════════════

    renderStats: function() {
        var stats = null;
        var totalWords = 0;
        
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getStats) {
            stats = TashrifEngine.getStats();
            totalWords = stats.totalWords || 0;
        }
        else if (typeof DictionaryStats !== 'undefined' && DictionaryStats.getTotal) {
            totalWords = DictionaryStats.getTotal();
            var catStats = DictionaryStats.getTotalByCategory();
            stats = {
                totalWords: totalWords,
                mujarrad: catStats.mujarrad || 0,
                mazid: catStats.mazid || 0,
                rubai: catStats.rubai || 0,
                isimJamid: catStats.isim || 0
            };
        }
        else if (typeof DICTIONARY !== 'undefined') {
            totalWords = Object.keys(DICTIONARY).length;
            stats = {
                totalWords: totalWords,
                mujarrad: 0,
                mazid: 0,
                rubai: 0,
                isimJamid: 0
            };
        }

        var totalEl = document.getElementById('totalWords');
        if (totalEl) totalEl.textContent = totalWords;

        var statsBar = document.getElementById('statsBar');
        if (statsBar && stats) {
            statsBar.innerHTML =
                '<span>🗄️ ' + stats.totalWords + ' Kata</span>' +
                '<span>📕 ' + stats.mujarrad + ' Mujarrad</span>' +
                '<span>📗 ' + stats.mazid + ' Mazid</span>' +
                '<span>📙 ' + stats.rubai + ' Ruba\'i</span>' +
                '<span>📘 ' + stats.isimJamid + ' Isim</span>' +
                '<span>📡 Offline</span>';
        }
    },

    // ═══════════════════════════════════════════════════════════
    // CATEGORY & BAB SELECTION
    // ═══════════════════════════════════════════════════════════

    setCategory: function(cat) {
        this.currentCategory = cat;
        this.currentBab = null;
        
        var btns = document.querySelectorAll('[data-cat]');
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.toggle('active', btns[i].dataset.cat === cat);
        }
        
        var babSection = document.getElementById('babSection');
        if (babSection) {
            babSection.style.display = (cat === 'isim') ? 'none' : 'block';
        }
        
        if (cat !== 'isim') {
            this.renderBabButtons();
        }
    },

    renderBabButtons: function() {
        var container = document.getElementById('babButtons');
        if (!container) return;
        
        var babs = null;
        
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getBabsByCategory) {
            babs = TashrifEngine.getBabsByCategory(this.currentCategory);
        }
        else {
            if (this.currentCategory === 'mujarrad' && typeof BABS_MUJARRAD !== 'undefined') {
                babs = BABS_MUJARRAD;
            } else if (this.currentCategory === 'mazid' && typeof BABS_MAZID !== 'undefined') {
                babs = BABS_MAZID;
            } else if (this.currentCategory === 'rubai' && typeof BABS_RUBAI !== 'undefined') {
                babs = BABS_RUBAI;
            }
        }

        if (!babs) {
            container.innerHTML = '<p style="color:#888;font-size:0.875rem;">Tidak ada bab tersedia</p>';
            return;
        }

        container.innerHTML = '';
        
        for (var id in babs) {
            if (!babs.hasOwnProperty(id)) continue;
            
            var bab = babs[id];
            var btn = document.createElement('button');
            btn.className = 'bab-btn';
            btn.setAttribute('data-bab', id);
            
            var displayText = '';
            if (bab.pattern) {
                displayText = '<span class="arabic-text">' + bab.pattern + '</span>';
            } else if (bab.nameAr) {
                displayText = '<span class="arabic-text">' + bab.nameAr + '</span>';
            } else if (bab.name) {
                displayText = bab.name;
            } else {
                displayText = id;
            }
            
            btn.innerHTML = displayText;
            btn.onclick = (function(babId) { 
                return function() { App.selectBab(babId); }; 
            })(id);
            
            container.appendChild(btn);
        }
    },

    selectBab: function(babId) {
        this.currentBab = babId;
        
        var btns = document.querySelectorAll('.bab-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
        
        var activeBtn = document.querySelector('.bab-btn[data-bab="' + babId + '"]');
        if (activeBtn) activeBtn.classList.add('active');
        
        var words = [];
        if (typeof DictionaryStats !== 'undefined' && DictionaryStats.getByBab) {
            words = DictionaryStats.getByBab(babId);
        }
        
        var bab = null;
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getBab) {
            bab = TashrifEngine.getBab(babId);
        }
        
        var title = bab ? (bab.name || babId) : babId;
        this.showWordList(words, title);
    },

    showWordList: function(words, title) {
        var resultsDiv = document.getElementById('searchResults');
        if (!resultsDiv) return;
        
        if (!words || words.length === 0) {
            resultsDiv.style.display = 'none';
            return;
        }

        var html = '<div style="font-size:12px;font-weight:700;text-transform:uppercase;margin:12px 0 8px;padding:8px;background:#f0f0f0;border:2px solid #000;">📋 ' + title + ' (' + words.length + ' kata):</div>';
        
        for (var i = 0; i < words.length; i++) {
            var entry = words[i];
            var key = entry[0];
            var data = entry[1];
            
            var rootDisplay = data.root ? (Array.isArray(data.root) ? data.root.join('') : data.root) : key;
            var meaning = data.meaning || '—';
            
            html += '<div class="search-result-item" onclick="App.selectWord(\'' + key + '\')">' +
                '<span class="arabic-text" style="font-size:1.1rem;font-weight:700;">' + rootDisplay + '</span>' +
                '<span style="font-size:0.75rem;margin-left:12px;color:#666;">' + meaning + '</span>' +
                '</div>';
        }
        
        resultsDiv.innerHTML = html;
        resultsDiv.style.display = 'block';
    },

    selectWord: function(key) {
        if (typeof DICTIONARY === 'undefined' || !DICTIONARY[key]) return;
        
        var entry = DICTIONARY[key];
        var rootDisplay = entry.root ? (Array.isArray(entry.root) ? entry.root.join('') : entry.root) : key;
        
        var input = document.getElementById('userInput');
        if (input) input.value = rootDisplay;
        
        var resultsDiv = document.getElementById('searchResults');
        if (resultsDiv) resultsDiv.style.display = 'none';
        
        this.currentBab = entry.bab;
        this.process();
    },

    // ═══════════════════════════════════════════════════════════
    // SEARCH & TRANSLITERATION
    // ═══════════════════════════════════════════════════════════

    onSearch: function(value) {
        if (!value || value.trim().length === 0) {
            var resultsDiv = document.getElementById('searchResults');
            if (resultsDiv) resultsDiv.style.display = 'none';
            
            var preview = document.getElementById('translitPreview');
            if (preview) preview.style.display = 'none';
            return;
        }

        var trimmed = value.trim();
        var isArabic = /[\u0600-\u06FF]/.test(trimmed);
        
        var preview = document.getElementById('translitPreview');
        var previewResult = document.getElementById('translitResult');
        
        if (!isArabic && trimmed.length >= 2 && preview && previewResult) {
            var translit = '';
            
            if (typeof Transliterator !== 'undefined' && Transliterator.extractConsonants) {
                translit = Transliterator.extractConsonants(trimmed);
            }
            
            if (translit.length > 0) {
                previewResult.textContent = translit;
                preview.style.display = 'flex';
            } else {
                preview.style.display = 'none';
            }
        } else if (preview) {
            preview.style.display = 'none';
        }

        if (trimmed.length < 2) return;

        var results = [];
        
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.search) {
            results = TashrifEngine.search(trimmed);
        }
        else if (typeof DICTIONARY !== 'undefined') {
            var q = trimmed.toLowerCase();
            for (var key in DICTIONARY) {
                if (!DICTIONARY.hasOwnProperty(key)) continue;
                
                var data = DICTIONARY[key];
                var score = 0;
                
                if (key === trimmed) score = 100;
                else if (key.indexOf(trimmed) !== -1) score = 90;
                else if (data.meaning && data.meaning.toLowerCase().indexOf(q) !== -1) score = 80;
                else if (data.root) {
                    var rootStr = Array.isArray(data.root) ? data.root.join('') : data.root;
                    if (rootStr.indexOf(trimmed) !== -1) score = 70;
                }
                
                if (score > 0) {
                    results.push({ key: key, data: data, score: score });
                }
            }
            
            results.sort(function(a, b) { return b.score - a.score; });
            results = results.slice(0, 10);
        }

        var resultsDiv = document.getElementById('searchResults');
        if (!resultsDiv) return;

        if (results.length > 0) {
            var wordList = [];
            for (var i = 0; i < results.length; i++) {
                wordList.push([results[i].key, results[i].data || results[i]]);
            }
            this.showWordList(wordList, 'Hasil: "' + trimmed + '"');
        } else {
            var hint = this.currentBab ? 'Tekan TASHRIF untuk analisis manual' : 'Pilih bab terlebih dahulu';
            resultsDiv.innerHTML = '<div style="padding:12px;text-align:center;color:#888;font-size:0.875rem;border:2px dashed #ccc;margin-top:8px;">❌ Tidak ditemukan. ' + hint + '</div>';
            resultsDiv.style.display = 'block';
        }
    },

    // ═══════════════════════════════════════════════════════════
    // MAIN PROCESS
    // ═══════════════════════════════════════════════════════════

    process: function() {
        var input = document.getElementById('userInput');
        if (!input) return;
        
        var value = input.value.trim();
        if (!value) {
            this.showError("⚠️ MASUKKAN KATA!\n\nKetik kata Arab, Latin, atau Indonesia.");
            return;
        }

        console.log('=== PROCESS ===');
        console.log('Input:', value);
        console.log('Category:', this.currentCategory);
        console.log('Bab:', this.currentBab || 'auto');

        this.hideAllResults();
        
        var loader = document.getElementById('loader');
        if (loader) loader.style.display = 'flex';

        var self = this;
        
        setTimeout(function() {
            var result = null;

            if (self.currentCategory === 'isim') {
                console.log('Mode: ISIM');
                result = self.processIsim(value);
            }
            else {
                console.log('Mode: FI\'IL');
                result = self.processFiil(value);
            }

            console.log('Result:', result ? result.type : 'null');

            if (loader) loader.style.display = 'none';

            if (result) {
                if (result.type === 'fiil') {
                    self.renderFiil(result);
                } else if (result.type === 'isim') {
                    self.renderIsim(result);
                }
            } else {
                self.showError('❌ Kata "' + value + '" tidak ditemukan.\n\n💡 Tips:\n• Ketik Arab: نصر\n• Ketik Latin: nasara\n• Ketik Indonesia: menolong\n• Atau pilih bab & klik dari daftar');
            }
        }, 150);
    },

    // ═══════════════════════════════════════════════════════════
    // PROCESS FI'IL
    // ═══════════════════════════════════════════════════════════

    processFiil: function(input) {
        var entry = null;
        
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.findWord) {
            entry = TashrifEngine.findWord(input);
        } else if (typeof DICTIONARY !== 'undefined') {
            var clean = input.replace(/[\u064B-\u065F\u0670]/g, '');
            entry = DICTIONARY[clean];
        }

        if (entry) {
            console.log('Found in dictionary:', entry);
            var babId = this.currentBab || entry.bab;
            
            if (typeof TashrifEngine !== 'undefined' && TashrifEngine.generateFullTashrif) {
                return TashrifEngine.generateFullTashrif(entry.root, babId, entry.meaning);
            }
        }

        if (this.currentBab) {
            console.log('Manual mode with bab:', this.currentBab);
            
            var letters = this.extractLetters(input);
            console.log('Extracted letters:', letters);
            
            if (letters.length >= 3) {
                var bab = null;
                if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getBab) {
                    bab = TashrifEngine.getBab(this.currentBab);
                }
                
                var needLength = (bab && bab.rootLength) ? bab.rootLength : 3;
                var root = letters.slice(0, needLength);
                
                console.log('Root for tashrif:', root);
                
                if (typeof TashrifEngine !== 'undefined' && TashrifEngine.generateFullTashrif) {
                    return TashrifEngine.generateFullTashrif(root, this.currentBab, "...");
                }
            }
        }

        return null;
    },

    // ═══════════════════════════════════════════════════════════
    // PROCESS ISIM
    // ═══════════════════════════════════════════════════════════

    processIsim: function(input) {
        if (typeof IsimAnalyzer === 'undefined') {
            console.error('IsimAnalyzer not loaded');
            return null;
        }

        var clean = input.replace(/[\u064B-\u065F\u0670]/g, '');
        var dictEntry = null;
        
        if (typeof DICTIONARY !== 'undefined') {
            dictEntry = DICTIONARY[clean];
        }

        var analysis = IsimAnalyzer.analyze(input, dictEntry);
        
        if (analysis) {
            return {
                type: 'isim',
                word: input,
                category: analysis.category || 'Isim',
                subcategory: analysis.type ? analysis.type.name : 'Unknown',
                root: analysis.root || '—',
                wazan: analysis.wazan || '—',
                gender: analysis.gender || '—',
                meaning: analysis.meaning || '—',
                derived_from: null,
                forms: analysis.forms || [],
                related_words: []
            };
        }

        return null;
    },

    // ═══════════════════════════════════════════════════════════
    // HELPER: EXTRACT LETTERS
    // ═══════════════════════════════════════════════════════════

    extractLetters: function(input) {
        var clean = input.replace(/[\u064B-\u065F\u0670]/g, '');
        var isArabic = /[\u0600-\u06FF]/.test(input);
        var letters = [];

        if (isArabic) {
            for (var i = 0; i < clean.length; i++) {
                if (/[\u0600-\u06FF]/.test(clean[i])) {
                    letters.push(clean[i]);
                }
            }
        } else {
            if (typeof Transliterator !== 'undefined' && Transliterator.extractConsonants) {
                var translit = Transliterator.extractConsonants(input);
                for (var j = 0; j < translit.length; j++) {
                    letters.push(translit[j]);
                }
            }
        }

        return letters;
    },

    // ═══════════════════════════════════════════════════════════
    // ★★★ RENDER TASHRIF ISTILAHI ★★★
    // ═══════════════════════════════════════════════════════════

    renderTashrifIstilahi: function(rows) {
        // Container ID = tashrifIstilahi (sesuai HTML)
        var container = document.getElementById('tashrifIstilahi');

        if (!container) {
            console.warn('[App] #tashrifIstilahi container not found in HTML');
            return;
        }

        // Jika rows kosong
        if (!rows || rows.length === 0) {
            container.innerHTML =
                '<div style="padding:20px;text-align:center;color:#888;' +
                'border:2px dashed #ccc;margin:8px 0;">' +
                'Data Tashrif Istilahi tidak tersedia</div>';
            return;
        }

        // ═══ SIGHAT CONFIG (Label, Warna, Icon) ═══
        var sighatConfig = [
            { label: "Fi'il Madhi",         labelAr: 'فِعْل مَاضِي',       icon: '1️⃣',  bg: '#dbeafe', accent: '#3b82f6' },
            { label: "Fi'il Mudhari'",      labelAr: 'فِعْل مُضَارِع',     icon: '2️⃣',  bg: '#dcfce7', accent: '#22c55e' },
            { label: 'Masdar',              labelAr: 'مَصْدَر',            icon: '3️⃣',  bg: '#fef9c3', accent: '#eab308' },
            { label: "Isim Fa'il",          labelAr: 'اِسْم فَاعِل',       icon: '4️⃣',  bg: '#fce7f3', accent: '#ec4899' },
            { label: "Isim Maf'ul",         labelAr: 'اِسْم مَفْعُول',     icon: '5️⃣',  bg: '#e0e7ff', accent: '#6366f1' },
            { label: "Fi'il Amr",           labelAr: 'فِعْل أَمْر',        icon: '6️⃣',  bg: '#ffedd5', accent: '#f97316' },
            { label: "Fi'il Nahi",          labelAr: 'فِعْل نَهْي',        icon: '7️⃣',  bg: '#fecdd3', accent: '#ef4444' },
            { label: 'Madhi Majhul',        labelAr: 'مَاضِي مَجْهُول',    icon: '8️⃣',  bg: '#f3e8ff', accent: '#a855f7' },
            { label: "Mudhari' Majhul",     labelAr: 'مُضَارِع مَجْهُول',  icon: '9️⃣',  bg: '#ccfbf1', accent: '#14b8a6' },
            { label: "Naibu Fa'il",         labelAr: 'نَائِب فَاعِل',      icon: '🔟',  bg: '#f0fdf4', accent: '#86efac' },
            { label: 'Isim Zaman/Makan',    labelAr: 'ظَرْف زَمَان/مَكَان', icon: '📍',  bg: '#fefce8', accent: '#fde047' },
            { label: 'Isim Alat',           labelAr: 'اِسْم آلَة',         icon: '🔧',  bg: '#fdf4ff', accent: '#d946ef' }
        ];

        // ═══ BUILD TABLE ═══
        var html = '';
        html += '<div style="overflow-x:auto;">';
        html += '<table style="width:100%;border-collapse:collapse;min-width:480px;">';

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cfg = sighatConfig[i] || {
                label: 'Sighat ' + (i + 1),
                labelAr: '',
                icon: '•',
                bg: '#f8fafc',
                accent: '#94a3b8'
            };

            // ═══ PARSE ROW (support multiple formats) ═══
            var label = '';
            var wazan = '';
            var value = '';
            var meaning = '';

            if (Array.isArray(row)) {
                // Format: ['label', 'wazan', 'value'] atau ['label', 'wazan', 'value', 'meaning']
                label = row[0] || '';
                wazan = row[1] || '';
                value = row[2] || '';
                meaning = row[3] || '';
            } else if (typeof row === 'object' && row !== null) {
                // Format: { label, wazan, value/arabic/form, meaning/arti }
                label = row.label || row.sighat || row.name || '';
                wazan = row.wazan || row.pattern || '';
                value = row.value || row.arabic || row.form || '';
                meaning = row.meaning || row.arti || '';
            } else if (typeof row === 'string') {
                value = row;
            }

            // Fallback label dari config
            if (!label) label = cfg.label;

            // ═══ ROW HTML ═══
            html += '<tr style="border-bottom:1px solid #e2e8f0;" ' +
                    'onmouseover="this.style.background=\'#f8fafc\'" ' +
                    'onmouseout="this.style.background=\'\'">';

            // KOLOM 1: Bentuk (Label Sighat)
            html += '<td style="' +
                    'background:' + cfg.bg + ';' +
                    'padding:10px 8px;' +
                    'border-left:5px solid ' + cfg.accent + ';' +
                    'border-bottom:1px solid #e2e8f0;' +
                    'text-align:center;vertical-align:middle;width:28%;">' +
                    '<div style="font-size:0.7rem;font-weight:700;color:#374151;text-transform:uppercase;">' +
                    cfg.icon + ' ' + label + '</div>';
            
            if (cfg.labelAr) {
                html += '<div class="arabic-text" style="font-size:0.85rem;color:#6b7280;margin-top:2px;">' +
                        cfg.labelAr + '</div>';
            }
            html += '</td>';

            // KOLOM 2: Wazan → Mauzun
            html += '<td style="' +
                    'padding:10px 8px;' +
                    'border-bottom:1px solid #e2e8f0;' +
                    'text-align:center;vertical-align:middle;width:40%;">';
            
            if (wazan && value) {
                html += '<span class="arabic-text" style="font-size:1rem;color:#6b7280;">' + wazan + '</span>' +
                        '<span style="margin:0 6px;color:#9ca3af;">→</span>' +
                        '<span class="arabic-text" style="font-size:1.3rem;font-weight:700;color:#1e293b;">' + value + '</span>';
            } else if (value) {
                html += '<span class="arabic-text" style="font-size:1.3rem;font-weight:700;color:#1e293b;">' + value + '</span>';
            } else if (wazan) {
                html += '<span class="arabic-text" style="font-size:1rem;color:#6b7280;">' + wazan + '</span>';
            } else {
                html += '<span style="color:#ccc;">—</span>';
            }
            
            html += '</td>';

            // KOLOM 3: Arti
            html += '<td style="' +
                    'padding:10px 8px;' +
                    'border-bottom:1px solid #e2e8f0;' +
                    'text-align:right;vertical-align:middle;width:32%;' +
                    'font-size:0.8rem;color:#6b7280;">' +
                    (meaning || '') +
                    '</td>';

            html += '</tr>';
        }

        html += '</table></div>';

        container.innerHTML = html;

        console.log('[App] ✅ Tashrif Istilahi rendered:', rows.length, 'rows');
    },

    // ═══════════════════════════════════════════════════════════
    // RENDER FI'IL (WITH BADGES)
    // ═══════════════════════════════════════════════════════════
    
    renderFiil: function(res) {
        // Update header
        var babText = document.getElementById('babText');
        var patternText = document.getElementById('patternText');
        var rootText = document.getElementById('rootText');
        var meaningText = document.getElementById('meaningText');
        var resultHeader = document.getElementById('resultHeader');
        var zigzagDiv = document.getElementById('zigzagDiv');
        var babBadge = document.getElementById('babBadge');
    
        if (babText) babText.textContent = (res.bab_title || '').toUpperCase();
        if (patternText) patternText.textContent = res.main_pattern || '—';
        if (rootText) rootText.textContent = res.root ? 'Akar: ' + res.root : '';
        if (meaningText) meaningText.textContent = res.meaning ? '📖 ' + res.meaning : '';
        
        if (resultHeader) {
            resultHeader.className = 'header-brutal ' + (res.headerClass || 'header-fiil');
        }
        
        if (zigzagDiv) {
            zigzagDiv.className = res.zigzagClass || 'zigzag';
        }
        
        if (babBadge) {
            babBadge.style.background = res.color || '#facc15';
        }
    
        // ★ FI'IL TYPE BADGES ★
        this.renderFiilTypeBadges(res);
    
        // ★ TASHRIF ISTILAHI ★
        this.renderTashrifIstilahi(res.rows);
    
        // ★ TASHRIF LUGHAWI ★
        if (res.tashrif_lughawi) {
            this.renderLughawi('lughawiMadhi', res.tashrif_lughawi.madhi);
            this.renderLughawi('lughawiMudhari', res.tashrif_lughawi.mudhari);
            this.renderLughawi('lughawiAmr', res.tashrif_lughawi.amr);
            
            this.showLughawiTab('madhi');
        } else {
            var emptyMsg = '<div style="padding:20px;text-align:center;color:#888;">Tidak tersedia</div>';
            var madhiEl = document.getElementById('lughawiMadhi');
            var mudhariEl = document.getElementById('lughawiMudhari');
            var amrEl = document.getElementById('lughawiAmr');
            
            if (madhiEl) madhiEl.innerHTML = emptyMsg;
            if (mudhariEl) mudhariEl.innerHTML = emptyMsg;
            if (amrEl) amrEl.innerHTML = emptyMsg;
        }
    
        // Show result
        var resultFiil = document.getElementById('resultFiil');
        if (resultFiil) {
            resultFiil.style.display = 'block';
        }
    
        // Sync bookmark button
        if (typeof ResultActions !== 'undefined' && ResultActions.syncBookmarkButton) {
            ResultActions.syncBookmarkButton();
        }
    
        this.scrollTo('resultFiil');
    },

    // ═══════════════════════════════════════════════════════════
    // RENDER FI'IL TYPE BADGES
    // ═══════════════════════════════════════════════════════════
    
    renderFiilTypeBadges: function(res) {
        var container = document.getElementById('fiilTypeBadges');
        
        if (!container) {
            var headerContent = document.querySelector('#resultHeader .header-content-positioned');
            if (headerContent) {
                container = document.createElement('div');
                container.id = 'fiilTypeBadges';
                container.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:12px;';
                headerContent.appendChild(container);
            } else {
                return;
            }
        }
        
        container.innerHTML = '';
        
        var badges = [];
        
        // 1. MUDHA'AF
        if (res.isMudhaaf) {
            badges.push({
                type: 'mudhaaf',
                icon: '🔁',
                nameAr: 'مُضَعَّف',
                nameId: "Mudha'af",
                desc: 'Huruf Ain = Lam (idgham)',
                color: '#f59e0b',
                textColor: '#000'
            });
        }
        
        // 2. MU'TAL
        if (res.isMutal && res.mutalType) {
            var mutalData = {
                'mitsal': { nameAr: 'مِثَال', nameId: "Mitsal", desc: "Fa' = huruf illah" },
                'ajwaf': { nameAr: 'أَجْوَف', nameId: "Ajwaf", desc: "Ain = huruf illah" },
                'naqish': { nameAr: 'نَاقِص', nameId: "Naqis", desc: "Lam = huruf illah" },
                'lafif_mafruq': { nameAr: 'لَفِيف مَفْرُوق', nameId: "Lafif Mafruq", desc: "Fa'+Lam = illah" },
                'lafif_maqrun': { nameAr: 'لَفِيف مَقْرُون', nameId: "Lafif Maqrun", desc: "Ain+Lam = illah" }
            };
            
            var mt = mutalData[res.mutalType] || { nameAr: 'مُعْتَل', nameId: "Mu'tal", desc: "Mengandung huruf illah" };
            badges.push({
                type: 'mutal',
                icon: '🔀',
                nameAr: mt.nameAr,
                nameId: mt.nameId,
                desc: mt.desc,
                color: '#8b5cf6',
                textColor: '#fff'
            });
        }
        
        // 3. MAHMUZ
        var rootArr = res.root ? res.root.split(' ') : [];
        var hamzahChars = ['ء', 'أ', 'إ', 'ؤ', 'ئ'];
        var hasHamzah = false;
        
        for (var i = 0; i < rootArr.length; i++) {
            for (var h = 0; h < hamzahChars.length; h++) {
                if (rootArr[i] === hamzahChars[h]) {
                    hasHamzah = true;
                    break;
                }
            }
            if (hasHamzah) break;
        }
        
        if (hasHamzah) {
            badges.push({
                type: 'mahmuz',
                icon: '⚡',
                nameAr: 'مَهْمُوز',
                nameId: 'Mahmuz',
                desc: 'Mengandung hamzah',
                color: '#ec4899',
                textColor: '#fff'
            });
        }
        
        // 4. SHAHIH (default)
        if (badges.length === 0) {
            badges.push({
                type: 'shahih',
                icon: '✓',
                nameAr: 'صَحِيح',
                nameId: 'Shahih',
                desc: "Fi'il Shahih Salim",
                color: '#10b981',
                textColor: '#fff'
            });
        }
        
        // RENDER
        for (var b = 0; b < badges.length; b++) {
            var badge = badges[b];
            
            var el = document.createElement('span');
            el.className = 'fiil-type-badge fiil-type-' + badge.type;
            el.title = badge.desc;
            el.style.cssText = 
                'display:inline-flex;align-items:center;gap:6px;' +
                'padding:8px 14px;background:' + badge.color + ';' +
                'color:' + badge.textColor + ';border:3px solid #000;' +
                'font-weight:700;box-shadow:3px 3px 0 #000;cursor:help;';
            
            el.innerHTML = 
                '<span style="font-size:1.1rem;">' + badge.icon + '</span>' +
                '<span class="arabic-text" style="font-size:1rem;">' + badge.nameAr + '</span>' +
                '<span style="font-size:0.7rem;opacity:0.85;">(' + badge.nameId + ')</span>';
            
            container.appendChild(el);
        }
        
        container.style.display = 'flex';
    },
    
    // ═══════════════════════════════════════════════════════════
    // RENDER ISIM
    // ═══════════════════════════════════════════════════════════

    renderIsim: function(res) {
        var typeText = document.getElementById('isimTypeText');
        var wordText = document.getElementById('isimWordText');

        if (typeText) {
            typeText.textContent = (res.category || 'Isim') + (res.subcategory ? ' — ' + res.subcategory : '');
        }
        if (wordText) {
            wordText.textContent = res.word || '';
        }

        var infoGrid = document.getElementById('isimInfoGrid');
        if (infoGrid) {
            infoGrid.innerHTML =
                '<div class="info-card">' +
                '<div class="info-label">🌱 Akar</div>' +
                '<div class="info-value-ar arabic-text">' + (res.root || '—') + '</div>' +
                '</div>' +
                '<div class="info-card">' +
                '<div class="info-label">⚖️ Wazan</div>' +
                '<div class="info-value-ar arabic-text">' + (res.wazan || '—') + '</div>' +
                '</div>' +
                '<div class="info-card">' +
                '<div class="info-label">⚥ Gender</div>' +
                '<div class="info-value">' + (res.gender || '—') + '</div>' +
                '</div>' +
                '<div class="info-card">' +
                '<div class="info-label">📖 Arti</div>' +
                '<div class="info-value">' + (res.meaning || '—') + '</div>' +
                '</div>';
        }

        var derivDiv = document.getElementById('isimDerivation');
        if (derivDiv) {
            if (res.derived_from) {
                derivDiv.style.display = 'block';
                derivDiv.innerHTML =
                    '<div class="derivation-box">' +
                    '<div style="font-size:0.75rem;font-weight:700;margin-bottom:8px;color:#666;">📚 DERIVASI</div>' +
                    '<span class="arabic-text" style="font-size:1.5rem;font-weight:700;">' + res.derived_from + '</span> → ' +
                    '<span class="arabic-text" style="font-size:1.5rem;font-weight:700;color:#1e40af;">' + res.word + '</span>' +
                    '</div>';
            } else {
                derivDiv.style.display = 'none';
            }
        }

        var formsContainer = document.getElementById('isimFormsContainer');
        if (formsContainer) {
            var formsHTML = '';
            var formColors = ['#60a5fa','#34d399','#fbbf24','#f472b6'];

            if (res.forms && res.forms.length > 0) {
                formsHTML += '<div class="section-label">🔢 BENTUK-BENTUK</div>';
                
                for (var i = 0; i < res.forms.length; i++) {
                    var form = res.forms[i];
                    if (!form.arabic || form.arabic === '—') continue;

                    var color = formColors[i % formColors.length];

                    formsHTML +=
                        '<div class="row-isim">' +
                        '<div class="label-cell" style="background:' + color + ';color:#000;padding:8px 12px;">' + form.label + '</div>' +
                        '<div class="arabic-text text-center" style="font-size:1.25rem;font-weight:700;padding:8px;">' + form.arabic + '</div>' +
                        '<div style="font-size:0.75rem;color:#666;text-align:center;padding:8px;">' + (form.meaning || form.note || '') + '</div>' +
                        '</div>';
                }
            }

            formsContainer.innerHTML = formsHTML;
        }

        var relatedDiv = document.getElementById('isimRelatedWords');
        if (relatedDiv) {
            relatedDiv.innerHTML = '';
        }

        var resultIsim = document.getElementById('resultIsim');
        if (resultIsim) {
            resultIsim.style.display = 'block';
        }

        this.scrollTo('resultIsim');
    },

    // ═══════════════════════════════════════════════════════════
    // RENDER LUGHAWI TABLE
    // ═══════════════════════════════════════════════════════════

    renderLughawi: function(containerId, data) {
        var container = document.getElementById(containerId);
        if (!container) return;

        if (!data || data.length === 0) {
            container.innerHTML = '<div style="padding:20px;text-align:center;color:#888;">Tidak tersedia</div>';
            return;
        }

        var isAmr = data.length <= 6;
        var html = '<div style="border:2px solid #000;border-top:none;">';

        if (isAmr) {
            html += this.lughawiSectionHTML('❗ Mukhatab (Amr)', '#dcfce7', data.slice(0, 3), data.slice(3, 6));
        } else {
            html += this.lughawiSectionHTML('👤 Ghaib (Orang ke-3)', '#dbeafe', data.slice(0, 3), data.slice(3, 6));
            html += this.lughawiSectionHTML('🙋 Mukhatab (Orang ke-2)', '#dcfce7', data.slice(6, 9), data.slice(9, 12));
            
            html += '<div style="background:#fef9c3;padding:8px 12px;border-top:2px solid #000;border-bottom:2px solid #000;font-size:0.75rem;font-weight:700;text-transform:uppercase;">🙋‍♂️ Mutakallim (Orang ke-1)</div>';
            for (var i = 12; i < 14 && i < data.length; i++) {
                html += this.lughawiRowHTML(data[i], '#f0fdf4');
            }
        }

        html += '</div>';
        container.innerHTML = html;
    },

    lughawiSectionHTML: function(title, bg, maleData, femaleData) {
        var html = '<div style="background:' + bg + ';padding:8px 12px;border-bottom:2px solid #000;font-size:0.75rem;font-weight:700;text-transform:uppercase;">' + title + '</div>';
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;">';

        // Male column
        html += '<div style="border-right:2px solid #000;">';
        html += '<div style="background:#eff6ff;padding:4px 8px;text-align:center;font-size:0.75rem;font-weight:700;border-bottom:1px solid #ddd;">♂ Mudzakkar</div>';
        if (maleData) {
            for (var i = 0; i < maleData.length; i++) {
                html += this.lughawiRowHTML(maleData[i], '#dbeafe');
            }
        }
        html += '</div>';

        // Female column
        html += '<div>';
        html += '<div style="background:#fdf2f8;padding:4px 8px;text-align:center;font-size:0.75rem;font-weight:700;border-bottom:1px solid #ddd;">♀ Muannats</div>';
        if (femaleData) {
            for (var i = 0; i < femaleData.length; i++) {
                html += this.lughawiRowHTML(femaleData[i], '#fce7f3');
            }
        }
        html += '</div>';

        html += '</div>';
        return html;
    },

    lughawiRowHTML: function(item, bg) {
        if (!item) return '';
        
        return '<div class="lughawi-row" style="background:' + bg + ';">' +
            '<div class="lughawi-dhamir arabic-text">' + (item.dhamir || '') + 
            '<span class="lughawi-dhamir-label">' + (item.dhamir_label || '') + '</span></div>' +
            '<div class="lughawi-fiil arabic-text">' + (item.fiil || '') + '</div>' +
            '<div class="lughawi-meaning">' + (item.arti || '') + '</div>' +
            '</div>';
    },

    showLughawiTab: function(tab) {
        var madhiPanel = document.getElementById('lughawiMadhi');
        var mudhariPanel = document.getElementById('lughawiMudhari');
        var amrPanel = document.getElementById('lughawiAmr');

        if (madhiPanel) madhiPanel.style.display = (tab === 'madhi') ? 'block' : 'none';
        if (mudhariPanel) mudhariPanel.style.display = (tab === 'mudhari') ? 'block' : 'none';
        if (amrPanel) amrPanel.style.display = (tab === 'amr') ? 'block' : 'none';

        var tabs = document.querySelectorAll('.lughawi-tab');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            var tabText = tabs[i].textContent.toLowerCase();
            if (tabText.indexOf(tab) !== -1) {
                tabs[i].classList.add('active');
            }
        }
    },

    // ═══════════════════════════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════════════════════════

    hideAllResults: function() {
        var resultFiil = document.getElementById('resultFiil');
        var resultIsim = document.getElementById('resultIsim');
        var searchResults = document.getElementById('searchResults');
        var translitPreview = document.getElementById('translitPreview');

        if (resultFiil) resultFiil.style.display = 'none';
        if (resultIsim) resultIsim.style.display = 'none';
        if (searchResults) searchResults.style.display = 'none';
        if (translitPreview) translitPreview.style.display = 'none';
    },

    clearSearch: function() {
        var input = document.getElementById('userInput');
        if (input) {
            input.value = '';
            input.focus();
        }
        
        this.hideAllResults();
        
        var clearBtn = document.getElementById('clearInput');
        if (clearBtn) clearBtn.style.display = 'none';
    },

    scrollTo: function(id) {
        setTimeout(function() {
            var el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    },

    showError: function(msg) {
        var errorMessage = document.getElementById('errorMessage');
        var errorModal = document.getElementById('errorModal');

        if (errorMessage) errorMessage.textContent = msg;
        if (errorModal) errorModal.style.display = 'flex';
    },

    closeModal: function() {
        var errorModal = document.getElementById('errorModal');
        if (errorModal) errorModal.style.display = 'none';
    }
};

// ═══════════════════════════════════════════════════════════
// INITIALIZE ON DOM READY
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

// Export untuk browser
if (typeof window !== 'undefined') {
    window.App = App;
}
