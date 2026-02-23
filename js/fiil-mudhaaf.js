/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  Fi'il Mudha'af (المضعّف) — Kaidah Idgham               ║
 * ║  Contoh: عَدَّ / يَعُدُّ / مَدَّ / يَمُدُّ              ║
 * ║                                                          ║
 * ║  Kaidah Utama:                                           ║
 * ║  • Ain = Lam (root[1] === root[2])                       ║
 * ║  • Idgham: dua huruf sama bergabung + tasydid             ║
 * ║  • Fakkul Idgham: dipisah saat bertemu sukun sufiks      ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var FiilMudhaaf = {

    // ═══════════════════════════════════════
    // DETEKSI MUDHA'AF
    // ═══════════════════════════════════════

    detect: function(root) {
        if (!root || root.length < 3) return null;

        // Mudha'af Tsulatsi: ain = lam (root[1] === root[2])
        if (root.length === 3 && root[1] === root[2]) {
            return {
                type: 'mudhaaf-tsulatsi',
                merged: root[1],
                desc: 'عين و لام متماثلان'
            };
        }

        // Mudha'af Ruba'i: fa=lam1 & ain=lam2 (زَلْزَلَ)
        if (root.length === 4 && root[0] === root[2] && root[1] === root[3]) {
            return {
                type: 'mudhaaf-rubai',
                desc: 'رباعي مضعّف'
            };
        }

        return null;
    },

    // ═══════════════════════════════════════
    // CEK APAKAH DHAMIR BUTUH FAKKUL IDGHAM
    // Sufiks yang dimulai konsonan/sukun
    // ═══════════════════════════════════════

    needsFakk: function(dhamir) {
        var fakkDhamirs = [
            'أَنَا',       // ـتُ
            'نَحْنُ',      // ـنَا
            'أَنْتَ',      // ـتَ
            'أَنْتِ',      // ـتِ
            'أَنْتُمَا',   // ـتُمَا
            'أَنْتُمْ',    // ـتُمْ
            'أَنْتُنَّ'    // ـتُنَّ
        ];
        for (var i = 0; i < fakkDhamirs.length; i++) {
            if (dhamir === fakkDhamirs[i]) return true;
        }
        return false;
    },

    // Cek dhamir hunna (هُنَّ) — juga fakk di mudhari/amr
    isHunna: function(dhamir) {
        return dhamir === 'هُنَّ' || dhamir === 'أَنْتُنَّ';
    },

    // ═══════════════════════════════════════
    // MADHI MUDHA'AF
    // عَدَّ، عَدَدْتُ، عَدَّتْ، عَدُّوا
    // ═══════════════════════════════════════

    conjugateMadhi: function(root, ainVowel, suffixes) {
        var f = root[0];
        var a = root[1]; // = root[2] (huruf sama)
        var results = [];

        for (var i = 0; i < suffixes.length; i++) {
            var e = suffixes[i];
            var fiil;

            if (this.needsFakk(e.dhamir)) {
                // ═══ FAKKUL IDGHAM ═══
                // عَدَدْتُ، عَدَدْنَا، عَدَدْتَ، عَدَدْتِ...
                fiil = f + "َ" + a + ainVowel + a + e.suf;
            }
            else if (e.suf === 'ْنَ') {
                // هُنَّ: عَدَدْنَ (fakk juga)
                fiil = f + "َ" + a + ainVowel + a + e.suf;
            }
            else if (e.suf === '' || e.suf === 'َ') {
                // هُوَ: عَدَّ  |  هِيَ dasar: عَدَّ
                fiil = f + "َ" + a + "َّ";
                if (e.suf === 'َ') fiil += ""; // هُوَ tetap عَدَّ
            }
            else if (e.suf === 'َتْ') {
                // هِيَ: عَدَّتْ
                fiil = f + "َ" + a + "َّ" + "تْ";
            }
            else if (e.suf === 'َا') {
                // هُمَا مذكر: عَدَّا
                fiil = f + "َ" + a + "َّ" + "ا";
            }
            else if (e.suf === 'َتَا') {
                // هُمَا مؤنث: عَدَّتَا
                fiil = f + "َ" + a + "َّ" + "تَا";
            }
            else if (e.suf === 'ُوا') {
                // هُمْ: عَدُّوا
                fiil = f + "َ" + a + "ُّ" + "وا";
            }
            else {
                // Default: idgham
                fiil = f + "َ" + a + "َّ" + e.suf;
            }

            results.push({
                dhamir: e.dhamir,
                dhamir_label: e.label,
                fiil: fiil
            });
        }

        return results;
    },

    // ═══════════════════════════════════════
    // MUDHARI MUDHA'AF
    // يَعُدُّ، يَعُدُّونَ، يَعْدُدْنَ
    // ═══════════════════════════════════════

    conjugateMudhari: function(root, ainVowel, conjugations) {
        var f = root[0];
        var a = root[1];
        var results = [];

        // ainVowel: harakat ain di mudhari (ُ untuk يَعُدُّ، ِ untuk يَفِرُّ)
        // Tasydid vowel = ainVowel + syaddah
        var tasydid;
        if (ainVowel === 'ُ') tasydid = 'ُّ';
        else if (ainVowel === 'ِ') tasydid = 'ِّ';
        else if (ainVowel === 'َ') tasydid = 'َّ';
        else tasydid = 'ُّ'; // default dhammah

        for (var i = 0; i < conjugations.length; i++) {
            var e = conjugations[i];
            var fiil;

            if (e.suf === 'ْنَ') {
                // هُنَّ / أَنْتُنَّ: يَعْدُدْنَ (fakkul idgham)
                fiil = e.pre + f + "ْ" + a + ainVowel + a + e.suf;
            }
            else if (e.suf === 'ُونَ') {
                // هُمْ: يَعُدُّونَ
                fiil = e.pre + f + "َ" + a + tasydid + "ونَ";
            }
            else if (e.suf === 'ِينَ') {
                // أَنْتِ: تَعُدِّينَ
                fiil = e.pre + f + "َ" + a + tasydid.replace('ُّ','ِّ').replace('ِّ','ِّ') + "ينَ";
                // Sebenarnya tetap tasydid + kasrah
                fiil = e.pre + f + "َ" + a + "ِّ" + "ينَ";
            }
            else if (e.suf === 'َانِ') {
                // هُمَا: يَعُدَّانِ
                fiil = e.pre + f + "َ" + a + "َّ" + "انِ";
            }
            else {
                // Default: يَعُدُّ
                fiil = e.pre + f + "َ" + a + tasydid;
                if (e.suf && e.suf !== '') {
                    fiil += e.suf;
                }
            }

            results.push({
                dhamir: e.dhamir,
                dhamir_label: e.label,
                fiil: fiil
            });
        }

        return results;
    },

    // ═══════════════════════════════════════
    // AMR MUDHA'AF
    // عُدَّ، عُدُّوا، اُعْدُدْنَ
    // ═══════════════════════════════════════

    conjugateAmr: function(root, ainVowel, conjugations) {
        var f = root[0];
        var a = root[1];
        var results = [];

        var tasydid;
        if (ainVowel === 'ُ') tasydid = 'ُّ';
        else if (ainVowel === 'ِ') tasydid = 'ِّ';
        else tasydid = 'ُّ';

        for (var i = 0; i < conjugations.length; i++) {
            var e = conjugations[i];
            var fiil;

            if (e.suf === 'ْنَ') {
                // أَنْتُنَّ: اُعْدُدْنَ (fakkul idgham, pakai hamzah washal)
                fiil = "اُ" + f + "ْ" + a + ainVowel + a + e.suf;
            }
            else if (e.suf === 'ُوا' || e.suf === 'وا') {
                // أَنْتُمْ: عُدُّوا
                fiil = f + tasydid + "وا";
            }
            else if (e.suf === 'ِي' || e.suf === 'ي') {
                // أَنْتِ: عُدِّي
                fiil = f + "ُ" + a + "ِّ" + "ي";
            }
            else if (e.suf === 'َا' || e.suf === 'ا') {
                // أَنْتُمَا: عُدَّا
                fiil = f + "ُ" + a + "َّ" + "ا";
            }
            else {
                // أَنْتَ: عُدَّ
                fiil = f + "ُ" + a + "َّ";
                if (e.suf && e.suf !== '' && e.suf !== 'ْ') {
                    fiil += e.suf;
                }
            }

            results.push({
                dhamir: e.dhamir,
                dhamir_label: e.label,
                fiil: fiil
            });
        }

        return results;
    },

    // ═══════════════════════════════════════
    // TASHRIF ISTILAHI MUDHA'AF
    // Koreksi template untuk mudha'af
    // ═══════════════════════════════════════

    fixIstilahi: function(label, template, root) {
        var f = root[0], a = root[1];

        var labelLower = label.toLowerCase();

        // Madhi Ma'lum: عَدَّ
        if (labelLower.indexOf('madhi') !== -1 && labelLower.indexOf("ma'lum") !== -1) {
            return f + "َ" + a + "َّ";
        }

        // Mudhari Ma'lum: يَعُدُّ  
        if (labelLower.indexOf('mudhari') !== -1 && labelLower.indexOf("ma'lum") !== -1) {
            return "يَ" + f + "ُ" + a + "ُّ";
        }

        // Mashdar: عَدًّا (atau sesuai bab)
        if (labelLower.indexOf('mashdar') !== -1) {
            return f + "َ" + a + "ًّ" + "ا";
        }

        // Isim Fa'il: عَادٌّ
        if (labelLower.indexOf("fa'il") !== -1 || labelLower.indexOf('fail') !== -1) {
            return f + "َا" + a + "ٌّ";
        }

        // Isim Maf'ul: مَعْدُودٌ
        if (labelLower.indexOf("maf'ul") !== -1 || labelLower.indexOf('maful') !== -1) {
            return "مَ" + f + "ْ" + a + "ُو" + a + "ٌ";
        }

        // Fi'il Amr: عُدَّ
        if (labelLower.indexOf('amr') !== -1) {
            return f + "ُ" + a + "َّ";
        }

        // Fi'il Nahi: لَا تَعُدَّ
        if (labelLower.indexOf('nahi') !== -1) {
            return "لَا تَ" + f + "ُ" + a + "َّ";
        }

        // Madhi Majhul: عُدَّ
        if (labelLower.indexOf('madhi') !== -1 && labelLower.indexOf('majhul') !== -1) {
            return f + "ُ" + a + "َّ";
        }

        // Mudhari Majhul: يُعَدُّ
        if (labelLower.indexOf('mudhari') !== -1 && labelLower.indexOf('majhul') !== -1) {
            return "يُ" + f + "َ" + a + "ُّ";
        }

        // Isim Zaman/Makan: مَعَدٌّ
        if (labelLower.indexOf('zaman') !== -1 || labelLower.indexOf('makan') !== -1) {
            return "مَ" + f + "َ" + a + "ٌّ";
        }

        // Fallback: gunakan template biasa
        return null;
    }
};

// Export
if (typeof window !== 'undefined') {
    window.FiilMudhaaf = FiilMudhaaf;
}
