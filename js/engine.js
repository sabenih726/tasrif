/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  TRANSLITERASI: Latin → Arab                             ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var Transliterator = {

    map: [
        ['dha','ظ'],['tha','ث'],['kha','خ'],['sha','ش'],['gha','غ'],
        ['dh','ذ'],['th','ث'],['kh','خ'],['sh','ش'],['gh','غ'],
        ['zh','ظ'],['ts','ث'],['sy','ش'],['dz','ذ'],
        ['a',''],['b','ب'],['t','ت'],['j','ج'],['h','ح'],
        ['d','د'],['r','ر'],['z','ز'],['s','س'],
        ['S','ص'],['D','ض'],['T','ط'],['Z','ظ'],
        ['f','ف'],['q','ق'],['k','ك'],['l','ل'],
        ['m','م'],['n','ن'],['w','و'],['y','ي'],
        ['i',''],['u',''],['o',''],['e',''],
        ['p','ف'],['g','غ'],['c','ش'],['v','ف'],['x','ص']
    ],

    extractConsonants: function(latin) {
        var text = latin.toLowerCase().trim();
        var noVowels = text.replace(/[aiueo]/g, '');
        var result = '';
        var idx = 0;

        while (idx < noVowels.length) {
            var matched = false;
            for (var len = 3; len >= 1; len--) {
                if (idx + len > noVowels.length) continue;
                var chunk = noVowels.substring(idx, idx + len);
                for (var m = 0; m < this.map.length; m++) {
                    if (this.map[m][0] === chunk && this.map[m][1] !== '') {
                        result += this.map[m][1];
                        idx += len;
                        matched = true;
                        break;
                    }
                }
                if (matched) break;
            }
            if (!matched) idx++;
        }
        return result;
    },

    findInDictionary: function(latin, dictionary) {
        var consonants = this.extractConsonants(latin);
        console.log('[Translit] "' + latin + '" → consonants: "' + consonants + '"');

        // 1. Exact match konsonan
        if (dictionary[consonants]) {
            return { key: consonants, entry: dictionary[consonants] };
        }

        // 2. Match root
        for (var key in dictionary) {
            if (!dictionary.hasOwnProperty(key)) continue;
            var rootStr = dictionary[key].root.join('');
            if (rootStr === consonants) {
                return { key: key, entry: dictionary[key] };
            }
        }

        // 3. Partial match
        for (var key in dictionary) {
            if (!dictionary.hasOwnProperty(key)) continue;
            if (key.indexOf(consonants) !== -1 || consonants.indexOf(key) !== -1) {
                return { key: key, entry: dictionary[key] };
            }
        }

        // 4. Cari arti Indonesia
        var lower = latin.toLowerCase();
        for (var key in dictionary) {
            if (!dictionary.hasOwnProperty(key)) continue;
            if (dictionary[key].meaning.toLowerCase().indexOf(lower) !== -1) {
                return { key: key, entry: dictionary[key] };
            }
        }

        return null;
    }
};


/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ENGINE: Mesin Tashrif Utama v3.0                        ║
 * ║  - Dengan integrasi FiilMutal (I'lal)                   ║
 * ║  - Tanpa duplikasi fungsi                                ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var TashrifEngine = {

    // ═══════════════════════════════════════
    // BAB MANAGEMENT
    // ═══════════════════════════════════════

    getAllBabs: function() {
        var result = {};
        var sources = [];
        if (typeof BABS_MUJARRAD !== 'undefined') sources.push(BABS_MUJARRAD);
        if (typeof BABS_MAZID !== 'undefined') sources.push(BABS_MAZID);
        if (typeof BABS_RUBAI !== 'undefined') sources.push(BABS_RUBAI);

        for (var s = 0; s < sources.length; s++) {
            for (var key in sources[s]) {
                if (sources[s].hasOwnProperty(key)) {
                    result[key] = sources[s][key];
                }
            }
        }
        return result;
    },

    getBab: function(babId) {
        var all = this.getAllBabs();
        return all[babId] || null;
    },

    getBabsByCategory: function(category) {
        var all = this.getAllBabs();
        var result = {};
        for (var key in all) {
            if (all.hasOwnProperty(key) && all[key].category === category) {
                result[key] = all[key];
            }
        }
        return result;
    },

    // ═══════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════

    stripHarakat: function(text) {
        return text
            .replace(/[\u064B-\u065F]/g, '')
            .replace(/\u0670/g, '')
            .replace(/\u0640/g, '')
            .trim();
    },

    // ═══════════════════════════════════════
    // TEMPLATE & WAZAN (SATU-SATUNYA VERSI)
    // ═══════════════════════════════════════

    /**
     * applyTemplate: Ganti placeholder {f},{a},{l},{q} dengan huruf root.
     * TIDAK menerapkan i'lal.
     */
    applyTemplate: function(template, root) {
        if (template === "—") return "—";
        var result = template
            .replace(/\{f\}/g, root[0])
            .replace(/\{a\}/g, root[1])
            .replace(/\{l\}/g, root[2]);
        if (root[3]) result = result.replace(/\{q\}/g, root[3]);
        return result;
    },

    /**
     * applyWazan: applyTemplate + kaidah i'lal dari FiilMutal.
     * Gunakan ini untuk semua output yang ditampilkan ke user.
     */
    applyWazan: function(template, root, fiilType, dhamir) {
        // 1. Terapkan template dasar
        var result = this.applyTemplate(template, root);

        // 2. Terapkan i'lal jika FiilMutal tersedia
        if (typeof FiilMutal !== 'undefined') {
            var mutalType = FiilMutal.detectType(root);
            if (mutalType) {
                var before = result;
                result = FiilMutal.applyIlal(result, root, fiilType, dhamir);
                if (before !== result) {
                    console.log('[I\'lal] ' + mutalType.type + ': "' + before + '" → "' + result + '"');
                }
            }
        }

        return result;
    },

    // ═══════════════════════════════════════
    // FIND WORD — Arab + Latin + Indonesia
    // ═══════════════════════════════════════

    findWord: function(input) {
        var isArabic = /[\u0600-\u06FF]/.test(input);
        var clean = this.stripHarakat(input);

        console.log('[findWord] Input:"' + input + '" Clean:"' + clean + '" Arabic:' + isArabic);

        if (isArabic) {
            // Exact match
            if (typeof DICTIONARY !== 'undefined' && DICTIONARY[clean]) {
                console.log('[findWord] ✅ Exact:', clean);
                return this.makeEntry(clean);
            }
            // Partial match
            for (var key in DICTIONARY) {
                if (!DICTIONARY.hasOwnProperty(key)) continue;
                if (clean.indexOf(key) !== -1 || key.indexOf(clean) !== -1) {
                    console.log('[findWord] ✅ Partial:', key);
                    return this.makeEntry(key);
                }
            }
            // Root match
            for (var key in DICTIONARY) {
                if (!DICTIONARY.hasOwnProperty(key)) continue;
                var rs = DICTIONARY[key].root.join('');
                if (rs === clean) {
                    console.log('[findWord] ✅ Root:', key);
                    return this.makeEntry(key);
                }
            }
        } else {
            // Latin: transliterasi + arti Indonesia
            var found = Transliterator.findInDictionary(input, DICTIONARY);
            if (found) {
                console.log('[findWord] ✅ Translit:', found.key);
                return {
                    key: found.key,
                    bab: found.entry.bab,
                    root: found.entry.root,
                    meaning: found.entry.meaning,
                    tags: found.entry.tags
                };
            }
        }

        console.log('[findWord] ❌ Not found');
        return null;
    },

    makeEntry: function(key) {
        var d = DICTIONARY[key];
        return {
            key: key,
            bab: d.bab,
            root: d.root,
            meaning: d.meaning,
            tags: d.tags
        };
    },

    // ═══════════════════════════════════════
    // SEARCH
    // ═══════════════════════════════════════

    search: function(query) {
        var results = [];
        var q = query.trim();
        if (!q || q.length < 1) return results;
        if (typeof DICTIONARY === 'undefined') return results;

        var isArabic = /[\u0600-\u06FF]/.test(q);
        var clean = this.stripHarakat(q);

        for (var key in DICTIONARY) {
            if (!DICTIONARY.hasOwnProperty(key)) continue;
            var val = DICTIONARY[key];
            var match = false;

            if (isArabic) {
                var rs = val.root.join('');
                match = key.indexOf(clean) !== -1 ||
                        clean.indexOf(key) !== -1 ||
                        rs.indexOf(clean) !== -1 ||
                        clean.indexOf(rs) !== -1;
            } else {
                var lq = q.toLowerCase();
                match = val.meaning.toLowerCase().indexOf(lq) !== -1;
                if (!match) {
                    var translit = Transliterator.extractConsonants(q);
                    if (translit.length >= 2) {
                        match = key.indexOf(translit) !== -1 || translit.indexOf(key) !== -1;
                    }
                }
            }

            if (match) {
                results.push({
                    key: key,
                    bab: val.bab,
                    root: val.root,
                    meaning: val.meaning,
                    tags: val.tags
                });
                if (results.length >= 20) break;
            }
        }
        return results;
    },

    // ═══════════════════════════════════════
    // GENERATE LUGHAWI (SATU-SATUNYA VERSI)
    // Dengan integrasi FiilMutal
    // ═══════════════════════════════════════

    generateLughawi: function(bab, sighat, root, meaning) {
        var data = bab.lughawi;
        if (!data || !data[sighat]) return [];

        var sd = data[sighat];
        var results = [];
        var f = root[0], a = root[1], l = root[2], q = root[3];

        // ─── MADHI ─────────────────────────
        if (sighat === 'madhi') {
            var av = sd.ainVowel;
            for (var i = 0; i < sd.suffixes.length; i++) {
                var e = sd.suffixes[i];
                var fiil;
                var isSukun = e.suf.charAt(0) === 'ْ' || e.suf === 'ْنَ';

                if (bab.category === 'mazid' && sd.base) {
                    // Mazid: gunakan base template + i'lal
                    var baseWord = this.applyTemplate(sd.base, root);
                    fiil = baseWord + e.suf;
                    // Terapkan i'lal pada hasil akhir
                    if (typeof FiilMutal !== 'undefined' && FiilMutal.detectType(root)) {
                        fiil = FiilMutal.applyIlal(fiil, root, 'madhi', e.dhamir);
                    }
                } else if (bab.category === 'rubai' && q) {
                    fiil = f + "َ" + a + "ْ" + l + "َ" + q + e.suf;
                } else {
                    // Mujarrad
                    if (isSukun) {
                        fiil = f + "َ" + a + av + l + e.suf;
                    } else {
                        fiil = f + "َ" + a + "َ" + l + e.suf;
                    }
                    // Terapkan i'lal
                    if (typeof FiilMutal !== 'undefined' && FiilMutal.detectType(root)) {
                        fiil = FiilMutal.applyIlal(fiil, root, 'madhi', e.dhamir);
                    }
                }

                results.push({
                    dhamir: e.dhamir,
                    dhamir_label: e.label,
                    fiil: fiil,
                    arti: e.label + " telah " + meaning
                });
            }
        }

        // ─── MUDHARI ───────────────────────
        else if (sighat === 'mudhari') {
            var vw = sd.vowel;
            for (var i = 0; i < sd.conjugations.length; i++) {
                var e = sd.conjugations[i];
                var fiil;

                if (bab.category === 'rubai' && q) {
                    fiil = e.pre + f + "َ" + a + "ْ" + l + "ِ" + q + e.suf;
                } else {
                    fiil = e.pre + f + "ْ" + a + vw + l + e.suf;
                    // Terapkan i'lal
                    if (typeof FiilMutal !== 'undefined' && FiilMutal.detectType(root)) {
                        fiil = FiilMutal.applyIlal(fiil, root, 'mudhari', e.dhamir);
                    }
                }

                results.push({
                    dhamir: e.dhamir,
                    dhamir_label: e.label,
                    fiil: fiil,
                    arti: e.label + " sedang/akan " + meaning
                });
            }
        }

        // ─── AMR ───────────────────────────
        else if (sighat === 'amr') {
            var vw = sd.vowel;
            var pfx = sd.prefix || "اُ";
            for (var i = 0; i < sd.conjugations.length; i++) {
                var e = sd.conjugations[i];
                var fiil;

                if (bab.category === 'rubai' && q) {
                    fiil = pfx + f + "َ" + a + "ْ" + l + "ِ" + q + e.suf;
                } else {
                    fiil = pfx + f + "ْ" + a + vw + l + e.suf;
                    // Terapkan i'lal
                    if (typeof FiilMutal !== 'undefined' && FiilMutal.detectType(root)) {
                        fiil = FiilMutal.applyIlal(fiil, root, 'amr', e.dhamir);
                    }
                }

                results.push({
                    dhamir: e.dhamir,
                    dhamir_label: e.label,
                    fiil: fiil,
                    arti: meaning + "lah! (" + e.label + ")"
                });
            }
        }

        return results;
    },

    // ═══════════════════════════════════════
    // GENERATE FULL TASHRIF (SATU-SATUNYA VERSI)
    // Dengan integrasi FiilMutal
    // ═══════════════════════════════════════

    generateFullTashrif: function(root, babId, meaning) {
        var bab = this.getBab(babId);
        if (!bab) {
            console.error('[Engine] Bab not found:', babId);
            return null;
        }

        console.log('[Engine] Generate:', root.join(','), 'Bab:', babId);

        // Deteksi mu'tal sekali di awal
        var isMutal = false;
        var mutalInfo = null;
        if (typeof FiilMutal !== 'undefined') {
            mutalInfo = FiilMutal.detectType(root);
            isMutal = !!mutalInfo;
            if (isMutal) {
                console.log('[Engine] Fi\'il Mu\'tal detected:', mutalInfo.type);
            }
        }

        var artiMap = {
            "Madhi Ma'lum": "Telah " + meaning,
            "Mudhari Ma'lum": "Sedang/akan " + meaning,
            "Mashdar": "Hal " + meaning,
            "Isim Fa'il": "Yang " + meaning + " / pelaku",
            "Isim Maf'ul": "Yang di-" + meaning,
            "Fi'il Amr": meaning + "lah!",
            "Fi'il Nahi": "Jangan " + meaning + "!",
            "Isim Zaman/Makan": "Tempat/waktu " + meaning,
            "Madhi Majhul": "Telah di-" + meaning,
            "Mudhari Majhul": "Sedang/akan di-" + meaning
        };

        // ─── TASHRIF ISTILAHI ──────────────
        var rows = [];
        for (var i = 0; i < bab.istilahi.length; i++) {
            var item = bab.istilahi[i];

            // Deteksi fiilType berdasarkan label
            var fiilType = 'madhi';
            var label = item.label.toLowerCase();
            if (label.indexOf('mudhari') !== -1) fiilType = 'mudhari';
            else if (label.indexOf('amr') !== -1) fiilType = 'amr';
            else if (label.indexOf('nahi') !== -1) fiilType = 'nahi';
            else if (label.indexOf('mashdar') !== -1) fiilType = 'masdar';
            else if (label.indexOf('fa\'il') !== -1 || label.indexOf('fail') !== -1) fiilType = 'ism-fail';
            else if (label.indexOf('maf\'ul') !== -1 || label.indexOf('maful') !== -1) fiilType = 'ism-maful';

            // Gunakan applyWazan (template + i'lal)
            var mauzun = this.applyWazan(item.template, root, fiilType, null);

            rows.push({
                label: item.label,
                wazan: item.wazan,
                mauzun: mauzun,
                arti: artiMap[item.label] || meaning
            });
        }

        // ─── TASHRIF LUGHAWI ──────────────
        var lughawi = null;
        if (bab.lughawi) {
            lughawi = {
                madhi: this.generateLughawi(bab, 'madhi', root, meaning),
                mudhari: this.generateLughawi(bab, 'mudhari', root, meaning),
                amr: this.generateLughawi(bab, 'amr', root, meaning)
            };
            console.log('[Engine] Lughawi: M=' + lughawi.madhi.length +
                ' D=' + lughawi.mudhari.length +
                ' A=' + lughawi.amr.length);
        }

        return {
            type: 'fiil',
            bab_title: bab.name,
            main_pattern: bab.pattern,
            root: root.join(' '),
            meaning: meaning,
            babId: babId,
            isMutal: isMutal,
            mutalType: mutalInfo ? mutalInfo.type : null,
            headerClass: bab.headerClass,
            zigzagClass: bab.zigzagClass,
            color: bab.color,
            rows: rows,
            tashrif_lughawi: lughawi
        };
    },

    // ═══════════════════════════════════════
    // ANALYZE — Main entry point
    // ═══════════════════════════════════════

    analyze: function(input, forcedBab) {
        console.log('[Analyze] Input:"' + input + '" Bab:', forcedBab || 'auto');

        // 1. Cari di kamus
        var entry = this.findWord(input);
        if (entry) {
            var babId = forcedBab || entry.bab;
            return this.generateFullTashrif(entry.root, babId, entry.meaning);
        }

        // 2. Manual mode
        if (forcedBab) {
            var clean = this.stripHarakat(input);
            var bab = this.getBab(forcedBab);
            if (!bab) return null;

            var need = bab.rootLength || 3;
            var letters = [];
            for (var i = 0; i < clean.length; i++) {
                if (/[\u0600-\u06FF]/.test(clean[i])) letters.push(clean[i]);
            }

            if (letters.length >= need) {
                return this.generateFullTashrif(letters.slice(0, need), forcedBab, "...");
            }
        }

        // 3. Coba isim
        if (!forcedBab && typeof IsimAnalyzer !== 'undefined') {
            var isimResult = IsimAnalyzer.analyze(input);
            if (isimResult) return isimResult;
        }

        return null;
    },

    // ═══════════════════════════════════════
    // STATS
    // ═══════════════════════════════════════

    getStats: function() {
        var muj = (typeof BABS_MUJARRAD !== 'undefined') ? Object.keys(BABS_MUJARRAD).length : 0;
        var maz = (typeof BABS_MAZID !== 'undefined') ? Object.keys(BABS_MAZID).length : 0;
        var rub = (typeof BABS_RUBAI !== 'undefined') ? Object.keys(BABS_RUBAI).length : 0;
        var dictTotal = (typeof DICTIONARY !== 'undefined') ? Object.keys(DICTIONARY).length : 0;
        var isJ = (typeof IsimAnalyzer !== 'undefined' && IsimAnalyzer.jamidWords) ? Object.keys(IsimAnalyzer.jamidWords).length : 0;
        var isP = (typeof IsimAnalyzer !== 'undefined' && IsimAnalyzer.patterns) ? IsimAnalyzer.patterns.length : 0;

        return {
            totalWords: dictTotal,
            totalBabs: muj + maz + rub,
            mujarrad: muj,
            mazid: maz,
            rubai: rub,
            isimJamid: isJ,
            isimPatterns: isP
        };
    }
};

// Export
if (typeof window !== 'undefined') {
    window.Transliterator = Transliterator;
    window.TashrifEngine = TashrifEngine;
}