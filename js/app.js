/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  APP: UI Controller v3.0 - FINAL COMPLETE                ║
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
        
        // Render stats
        this.renderStats();
        
        // Render bab buttons
        this.renderBabButtons();
        
        // Check engine
        if (typeof TashrifEngine !== 'undefined') {
            var test = TashrifEngine.analyze("نصر", "m1");
            console.log('✅ TashrifEngine:', test ? 'OK' : 'FAIL');
        } else {
            console.warn('⚠️ TashrifEngine not loaded');
        }
        
        // Check IsimAnalyzer
        if (typeof IsimAnalyzer !== 'undefined') {
            console.log('✅ IsimAnalyzer: OK');
        } else {
            console.warn('⚠️ IsimAnalyzer not loaded');
        }
        
        // Set focus to input
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
        
        // Try TashrifEngine stats
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getStats) {
            stats = TashrifEngine.getStats();
            totalWords = stats.totalWords || 0;
        }
        // Fallback to DictionaryStats
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
        // Last resort: count DICTIONARY
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

        // Update display
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
        
        // Update button states
        var btns = document.querySelectorAll('[data-cat]');
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.toggle('active', btns[i].dataset.cat === cat);
        }
        
        // Show/hide bab section
        var babSection = document.getElementById('babSection');
        if (babSection) {
            babSection.style.display = (cat === 'isim') ? 'none' : 'block';
        }
        
        // Render bab buttons if not isim
        if (cat !== 'isim') {
            this.renderBabButtons();
        }
    },

    renderBabButtons: function() {
        var container = document.getElementById('babButtons');
        if (!container) return;
        
        var babs = null;
        
        // Try TashrifEngine first
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.getBabsByCategory) {
            babs = TashrifEngine.getBabsByCategory(this.currentCategory);
        }
        // Fallback to direct BABS objects
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
            
            // Display pattern or name
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
        
        // Update button states
        var btns = document.querySelectorAll('.bab-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
        
        var activeBtn = document.querySelector('.bab-btn[data-bab="' + babId + '"]');
        if (activeBtn) activeBtn.classList.add('active');
        
        // Show word list for this bab
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
        
        // Transliteration preview for Latin input
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

        // Search
        if (trimmed.length < 2) return;

        var results = [];
        
        // Try TashrifEngine search
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.search) {
            results = TashrifEngine.search(trimmed);
        }
        // Fallback to manual search in DICTIONARY
        else if (typeof DICTIONARY !== 'undefined') {
            var q = trimmed.toLowerCase();
            for (var key in DICTIONARY) {
                if (!DICTIONARY.hasOwnProperty(key)) continue;
                
                var data = DICTIONARY[key];
                var score = 0;
                
                // Check exact match
                if (key === trimmed) score = 100;
                // Check if key contains query
                else if (key.indexOf(trimmed) !== -1) score = 90;
                // Check meaning
                else if (data.meaning && data.meaning.toLowerCase().indexOf(q) !== -1) score = 80;
                // Check root
                else if (data.root) {
                    var rootStr = Array.isArray(data.root) ? data.root.join('') : data.root;
                    if (rootStr.indexOf(trimmed) !== -1) score = 70;
                }
                
                if (score > 0) {
                    results.push({ key: key, data: data, score: score });
                }
            }
            
            // Sort by score
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

        // Hide all results
        this.hideAllResults();
        
        // Show loader
        var loader = document.getElementById('loader');
        if (loader) loader.style.display = 'flex';

        var self = this;
        
        // Process after small delay for UX
        setTimeout(function() {
            var result = null;

            // ═══ ISIM MODE ═══
            if (self.currentCategory === 'isim') {
                console.log('Mode: ISIM');
                result = self.processIsim(value);
            }
            // ═══ FI'IL MODE ═══
            else {
                console.log('Mode: FI\'IL');
                result = self.processFiil(value);
            }

            console.log('Result:', result ? result.type : 'null');

            // Hide loader
            if (loader) loader.style.display = 'none';

            // Render result
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
        // 1. Try to find in dictionary
        var entry = null;
        
        if (typeof TashrifEngine !== 'undefined' && TashrifEngine.findWord) {
            entry = TashrifEngine.findWord(input);
        } else if (typeof DICTIONARY !== 'undefined') {
            // Manual search
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

        // 2. Manual mode (user selected bab)
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

        // Try to find in dictionary first
        var clean = input.replace(/[\u064B-\u065F\u0670]/g, '');
        var dictEntry = null;
        
        if (typeof DICTIONARY !== 'undefined') {
            dictEntry = DICTIONARY[clean];
        }

        // Analyze
        var analysis = IsimAnalyzer.analyze(input, dictEntry);
        
        if (analysis) {
            // Convert to render format
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
            // Extract Arabic letters
            for (var i = 0; i < clean.length; i++) {
                if (/[\u0600-\u06FF]/.test(clean[i])) {
                    letters.push(clean[i]);
                }
            }
        } else {
            // Latin: try transliteration
            if (typeof Transliterator !== 'undefined' && Transliterator.extractConsonants) {
                var translit = Transliterator.extractConsonants(input);
                for (var i = 0; i < translit.length; i++) {
                    letters.push(translit[i]);
                }
            }
        }

        return letters;
    },

    // ═══════════════════════════════════════════════════════════
    // RENDER FI'IL
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

        // Render Tashrif Istilahi
        this.renderTashrifIstilahi(res.rows);

        // Render Tashrif Lughawi
        if (res.tashrif_lughawi) {
            this.renderLughawi('lughawiMadhi', res.tashrif_lughawi.madhi);
            this.renderLughawi('lughawiMudhari', res.tashrif_lughawi.mudhari);
            this.renderLughawi('lughawiAmr', res.tashrif_lughawi.amr);
            
            // Show madhi by default
            this.showLughawiTab('madhi');
        } else {
            // No lughawi data
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

        this.scrollTo('resultFiil');
    },

    renderTashrifIstilahi: function(rows) {
        var container = document.getElementById('tashrifContainer');
        if (!container) return;

        container.innerHTML = '';

        if (!rows || rows.length === 0) {
            container.innerHTML = '<div style="padding:20px;text-align:center;color:#888;">Tidak ada data</div>';
            return;
        }

        var colors = ['#ffff00','#00ffff','#ff69b4','#00ff00','#ff8c00','#E879F9','#38bdf8','#a3e635','#fb923c','#f472b6'];

        for (var i = 0; i < rows.length; i++) {
            var item = rows[i];
            if (!item.mauzun || item.mauzun === '—') continue;

            var div = document.createElement('div');
            div.className = 'row-tashrif';
            var color = colors[i % colors.length];

            div.innerHTML =
                '<div class="label-cell">' +
                '<span class="brutal-border" style="width:10px;height:10px;background:' + color + ';display:inline-block;margin-right:8px;"></span>' +
                '<span>' + item.label + '</span>' +
                '</div>' +
                '<div class="wazan-mauzun-container">' +
                '<div class="arabic-text wazan-cell" style="flex:1;">' + item.wazan + '</div>' +
                '<span class="arrow-indicator">→</span>' +
                '<div class="arabic-text" style="flex:1;text-align:center;">' +
                '<span class="mauzun-cell" style="background:linear-gradient(180deg,transparent 65%,' + color + ' 65%);">' + item.mauzun + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="meaning-cell">"' + item.arti + '"</div>';

            container.appendChild(div);
        }
    },

    // ═══════════════════════════════════════════════════════════
    // RENDER ISIM
    // ═══════════════════════════════════════════════════════════

    renderIsim: function(res) {
        // Update header
        var typeText = document.getElementById('isimTypeText');
        var wordText = document.getElementById('isimWordText');

        if (typeText) {
            typeText.textContent = (res.category || 'Isim') + (res.subcategory ? ' — ' + res.subcategory : '');
        }
        if (wordText) {
            wordText.textContent = res.word || '';
        }

        // Info Grid
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

        // Derivation (if any)
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

        // Forms
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

        // Related words (placeholder)
        var relatedDiv = document.getElementById('isimRelatedWords');
        if (relatedDiv) {
            relatedDiv.innerHTML = '';
        }

        // Show result
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

        var isAmr = data.length <= 6; // Amr hanya 6 dhamir
        var html = '<div style="border:2px solid #000;border-top:none;">';

        if (isAmr) {
            // Amr: hanya mukhatab
            html += this.lughawiSectionHTML('❗ Mukhatab (Amr)', '#dcfce7', data.slice(0, 3), data.slice(3, 6));
        } else {
            // Madhi/Mudhari: 14 dhamir
            // Ghaib (0-5)
            html += this.lughawiSectionHTML('👤 Ghaib (Orang ke-3)', '#dbeafe', data.slice(0, 3), data.slice(3, 6));
            
            // Mukhatab (6-11)
            html += this.lughawiSectionHTML('🙋 Mukhatab (Orang ke-2)', '#dcfce7', data.slice(6, 9), data.slice(9, 12));
            
            // Mutakallim (12-13)
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
        for (var i = 0; i < maleData.length; i++) {
            html += this.lughawiRowHTML(maleData[i], '#dbeafe');
        }
        html += '</div>';

        // Female column
        html += '<div>';
        html += '<div style="background:#fdf2f8;padding:4px 8px;text-align:center;font-size:0.75rem;font-weight:700;border-bottom:1px solid #ddd;">♀ Muannats</div>';
        for (var i = 0; i < femaleData.length; i++) {
            html += this.lughawiRowHTML(femaleData[i], '#fce7f3');
        }
        html += '</div>';

        html += '</div>';
        return html;
    },

    lughawiRowHTML: function(item, bg) {
        if (!item) return '';
        
        return '<div class="lughawi-row" style="background:' + bg + ';">' +
            '<div class="lughawi-dhamir arabic-text">' + item.dhamir + 
            '<span class="lughawi-dhamir-label">' + item.dhamir_label + '</span></div>' +
            '<div class="lughawi-fiil arabic-text">' + item.fiil + '</div>' +
            '<div class="lughawi-meaning">' + item.arti + '</div>' +
            '</div>';
    },

    showLughawiTab: function(tab) {
        // Hide all panels
        var madhiPanel = document.getElementById('lughawiMadhi');
        var mudhariPanel = document.getElementById('lughawiMudhari');
        var amrPanel = document.getElementById('lughawiAmr');

        if (madhiPanel) madhiPanel.style.display = (tab === 'madhi') ? 'block' : 'none';
        if (mudhariPanel) mudhariPanel.style.display = (tab === 'mudhari') ? 'block' : 'none';
        if (amrPanel) amrPanel.style.display = (tab === 'amr') ? 'block' : 'none';

        // Update tab states
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