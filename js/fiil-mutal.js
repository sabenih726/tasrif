/**
 * ============================================
 * fiil-mutal.js - Fi'il Mu'tal Handler
 * Menangani kata Arab dengan huruf illat
 * (و ا ي) pada posisi Fa, Ain, atau Lam
 * 
 * API yang dipanggil engine.js:
 *   FiilMutal.detectType(root)        → root = [fa, ain, lam]
 *   FiilMutal.applyIlal(word, root, fiilType, dhamir)
 * ============================================
 */

var FiilMutal = (function() {
    
    // Huruf illat (weak letters)
    var HURUF_ILLAT = ['و', 'ا', 'ي', 'ى'];
    
    // Harakat
    var FATHAH  = 'َ';
    var KASRAH  = 'ِ';
    var DHAMMAH = 'ُ';
    var SUKUN   = 'ْ';
    var ALIF    = 'ا';
    var WAW     = 'و';
    var YA      = 'ي';
    var ALIF_MAQSURAH = 'ى';
    
    /**
     * Cek apakah huruf adalah huruf illat
     */
    function isIllat(char) {
        return HURUF_ILLAT.indexOf(char) !== -1;
    }
    
    /**
     * detectType - Deteksi jenis fi'il mu'tal
     * Dipanggil oleh engine.js: FiilMutal.detectType(root)
     * 
     * @param {Array} root - [fa, ain, lam] atau [fa, ain, lam, qaf]
     * @returns {Object|null} - null jika shahih (bukan mu'tal)
     */
    function detectType(root) {
        if (!root || root.length < 3) return null;
        
        var fa  = root[0];
        var ain = root[1];
        var lam = root[2];
        
        var faIllat  = isIllat(fa);
        var ainIllat = isIllat(ain);
        var lamIllat = isIllat(lam);
        
        // Shahih: tidak ada huruf illat → return null
        if (!faIllat && !ainIllat && !lamIllat) {
            return null;
        }
        
        // Mitsal: huruf illat di Fa (وعد، وجد، وصل)
        if (faIllat && !ainIllat && !lamIllat) {
            return {
                type: 'mitsal',
                subtype: fa === WAW ? 'mitsal-wawi' : 'mitsal-yai',
                position: 'fa',
                letter: fa,
                description: 'Mitsal (' + fa + ' di Fa\')'
            };
        }
        
        // Ajwaf: huruf illat di Ain (قال، نام، سار)
        if (!faIllat && ainIllat && !lamIllat) {
            return {
                type: 'ajwaf',
                subtype: ain === WAW ? 'ajwaf-wawi' : 'ajwaf-yai',
                position: 'ain',
                letter: ain,
                description: 'Ajwaf (' + ain + ' di \'Ain)'
            };
        }
        
        // Naqish: huruf illat di Lam (دعا، رمى، غزو)
        if (!faIllat && !ainIllat && lamIllat) {
            return {
                type: 'naqish',
                subtype: lam === WAW ? 'naqish-wawi' : 'naqish-yai',
                position: 'lam',
                letter: lam,
                description: 'Naqish (' + lam + ' di Lam)'
            };
        }
        
        // Lafif Mafruq: huruf illat di Fa dan Lam (وقى، وفى)
        if (faIllat && !ainIllat && lamIllat) {
            return {
                type: 'lafif_mafruq',
                subtype: 'lafif-mafruq',
                position: 'fa+lam',
                letter: fa + '+' + lam,
                description: 'Lafif Mafruq (' + fa + ' di Fa\', ' + lam + ' di Lam)'
            };
        }
        
        // Lafif Maqrun: huruf illat di Ain dan Lam (روى، حوى)
        if (!faIllat && ainIllat && lamIllat) {
            return {
                type: 'lafif_maqrun',
                subtype: 'lafif-maqrun',
                position: 'ain+lam',
                letter: ain + '+' + lam,
                description: 'Lafif Maqrun (' + ain + ' di \'Ain, ' + lam + ' di Lam)'
            };
        }
        
        // Catch-all (seharusnya tidak sampai sini)
        return {
            type: 'mutal',
            subtype: 'unknown',
            position: 'unknown',
            letter: '',
            description: 'Mu\'tal (tipe tidak dikenali)'
        };
    }
    
    /**
     * applyIlal - Terapkan kaidah i'lal (perubahan huruf illat)
     * Dipanggil oleh engine.js: FiilMutal.applyIlal(word, root, fiilType, dhamir)
     * 
     * @param {string} word - Kata yang sudah di-generate dari template
     * @param {Array} root - [fa, ain, lam]
     * @param {string} fiilType - 'madhi', 'mudhari', 'amr', 'nahi', 'masdar', 'ism-fail', 'ism-maful'
     * @param {string|null} dhamir - Dhamir (هو، هي، etc) atau null
     * @returns {string} - Kata setelah i'lal diterapkan
     */
    function applyIlal(word, root, fiilType, dhamir) {
        if (!word || !root || root.length < 3) return word || '';
        
        var info = detectType(root);
        if (!info) return word; // Shahih, tidak perlu i'lal
        
        var result = word;
        
        try {
            switch (info.type) {
                case 'mitsal':
                    result = applyIlalMitsal(word, root, fiilType, dhamir, info);
                    break;
                case 'ajwaf':
                    result = applyIlalAjwaf(word, root, fiilType, dhamir, info);
                    break;
                case 'naqish':
                    result = applyIlalNaqish(word, root, fiilType, dhamir, info);
                    break;
                case 'lafif_mafruq':
                    result = applyIlalLafifMafruq(word, root, fiilType, dhamir, info);
                    break;
                case 'lafif_maqrun':
                    result = applyIlalLafifMaqrun(word, root, fiilType, dhamir, info);
                    break;
            }
        } catch (err) {
            console.warn('[FiilMutal] I\'lal error for "' + word + '":', err.message);
            return word; // Return original if error
        }
        
        return result;
    }
    
    // ═══════════════════════════════════════════════════════════
    // I'LAL RULES PER TYPE
    // ═══════════════════════════════════════════════════════════
    
    /**
     * I'lal Mitsal (huruf illat di Fa)
     * Contoh: وعد → يَعِدُ (waw di-buang di mudhari)
     */
    function applyIlalMitsal(word, root, fiilType, dhamir, info) {
        var fa = root[0];
        
        // Kaidah utama Mitsal Wawi:
        // Di mudhari/amr, huruf Waw di Fa dibuang jika Ain berharakat kasrah
        if (fa === WAW && (fiilType === 'mudhari' || fiilType === 'amr')) {
            // Cari pola: prefix + وْ → buang وْ
            // Contoh: يَوْعِدُ → يَعِدُ
            var regex = new RegExp(WAW + SUKUN);
            if (regex.test(word)) {
                word = word.replace(regex, '');
            }
        }
        
        return word;
    }
    
    /**
     * I'lal Ajwaf (huruf illat di Ain)
     * Contoh: قَوَلَ → قَالَ (waw berubah jadi alif)
     *         نَوَمَ → نَامَ
     *         سَيَرَ → سَارَ
     */
    function applyIlalAjwaf(word, root, fiilType, dhamir, info) {
        var ain = root[1];
        var fa = root[0];
        var lam = root[2];
        
        if (fiilType === 'madhi') {
            // Kaidah: Jika ain illat berharakat dan sebelumnya fathah
            // وَ → ا (ajwaf wawi): قَوَلَ → قَالَ
            // يَ → ا (ajwaf yai): سَيَرَ → سَارَ
            
            // Pattern: fa + fathah + ain + fathah → fa + fathah + alif
            var patternWaw = fa + FATHAH + WAW + FATHAH;
            var patternYa  = fa + FATHAH + YA + FATHAH;
            
            if (word.indexOf(patternWaw) !== -1) {
                word = word.replace(patternWaw, fa + FATHAH + ALIF);
            } else if (word.indexOf(patternYa) !== -1) {
                word = word.replace(patternYa, fa + FATHAH + ALIF);
            }
            
            // Jika suffix dimulai dengan sukun (seperti ـْتُ، ـْنَ)
            // Huruf illat dibuang: قَالَ → قُلْتُ
            // Ini complex, untuk sekarang return as-is
        }
        
        if (fiilType === 'mudhari') {
            // Kaidah: ain illat berubah sesuai harakat
            // Ajwaf Wawi: يَقْوُلُ → يَقُوْلُ  
            // Ajwaf Yai:  يَسْيِرُ → يَسِيْرُ
            
            var patternMudWaw = fa + SUKUN + WAW + DHAMMAH;
            var patternMudYa  = fa + SUKUN + YA + KASRAH;
            
            if (word.indexOf(patternMudWaw) !== -1) {
                word = word.replace(patternMudWaw, fa + DHAMMAH + WAW + SUKUN);
            } else if (word.indexOf(patternMudYa) !== -1) {
                word = word.replace(patternMudYa, fa + KASRAH + YA + SUKUN);
            }
        }
        
        return word;
    }
    
    /**
     * I'lal Naqish (huruf illat di Lam)
     * Contoh: دَعَوَ → دَعَا
     *         رَمَيَ → رَمَى
     */
    function applyIlalNaqish(word, root, fiilType, dhamir, info) {
        var lam = root[2];
        var ain = root[1];
        
        if (fiilType === 'madhi') {
            // Kaidah: Lam illat berubah
            // وَ di akhir → ا : دَعَوَ → دَعَا
            // يَ di akhir → ى : رَمَيَ → رَمَى
            
            // Naqish Wawi: akhiran وَ → ا
            if (lam === WAW) {
                var endingWaw = WAW + FATHAH;
                if (word.lastIndexOf(endingWaw) === word.length - 2) {
                    word = word.slice(0, -2) + ALIF;
                }
            }
            
            // Naqish Yai: akhiran يَ → ى
            if (lam === YA) {
                var endingYa = YA + FATHAH;
                if (word.lastIndexOf(endingYa) === word.length - 2) {
                    word = word.slice(0, -2) + ALIF_MAQSURAH;
                }
            }
        }
        
        if (fiilType === 'mudhari') {
            // Kaidah: Naqish di mudhari
            // يَدْعُوُ → يَدْعُو (dhammah di akhir dibuang)
            // يَرْمِيُ → يَرْمِي (dhammah di akhir dibuang)
            
            // Buang harakat terakhir jika setelah huruf illat
            var lastTwo = word.slice(-2);
            if ((lastTwo === WAW + DHAMMAH) || (lastTwo === YA + DHAMMAH)) {
                word = word.slice(0, -1); // Buang dhammah
            }
        }
        
        if (fiilType === 'amr') {
            // Amr naqish: buang huruf illat di akhir
            // اُدْعُوْ → اُدْعُ
            var lastChar = word.slice(-1);
            var lastWithSukun = word.slice(-2);
            if (lastWithSukun === WAW + SUKUN || lastWithSukun === YA + SUKUN) {
                word = word.slice(0, -2);
            }
        }
        
        return word;
    }
    
    /**
     * I'lal Lafif Mafruq (huruf illat di Fa + Lam)
     * Contoh: وقى، وعى، وفى
     * Gabungan aturan Mitsal + Naqish
     */
    function applyIlalLafifMafruq(word, root, fiilType, dhamir, info) {
        // Terapkan aturan Mitsal dulu
        word = applyIlalMitsal(word, root, fiilType, dhamir, info);
        // Lalu terapkan aturan Naqish
        word = applyIlalNaqish(word, root, fiilType, dhamir, info);
        return word;
    }
    
    /**
     * I'lal Lafif Maqrun (huruf illat di Ain + Lam)
     * Contoh: روى، حوى، طوى
     * Gabungan aturan Ajwaf + Naqish (lebih kompleks)
     */
    function applyIlalLafifMaqrun(word, root, fiilType, dhamir, info) {
        // Untuk sekarang, terapkan aturan Naqish saja
        // (aturan Ajwaf + Naqish bersamaan sangat kompleks)
        word = applyIlalNaqish(word, root, fiilType, dhamir, info);
        return word;
    }
    
    // ═══════════════════════════════════════════════════════════
    // UTILITY FUNCTIONS
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Cek apakah root adalah mu'tal
     */
    function isMutal(root) {
        return detectType(root) !== null;
    }
    
    /**
     * Get info lengkap tentang root
     */
    function analyze(root) {
        var type = detectType(root);
        return {
            root: root,
            rootStr: root.join('-'),
            isMutal: type !== null,
            type: type ? type.type : 'shahih',
            info: type
        };
    }
    
    // ═══════════════════════════════════════════════════════════
    
    console.log('[FiilMutal] ✅ Module loaded');
    
    // PUBLIC API — sesuai dengan yang dipanggil engine.js
    return {
        detectType: detectType,     // engine.js: FiilMutal.detectType(root)
        applyIlal: applyIlal,       // engine.js: FiilMutal.applyIlal(word, root, fiilType, dhamir)
        isIllat: isIllat,
        isMutal: isMutal,
        analyze: analyze,
        HURUF_ILLAT: HURUF_ILLAT
    };
    
})();
