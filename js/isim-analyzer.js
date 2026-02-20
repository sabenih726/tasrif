/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ISIM ANALYZER v3.0 - FIXED & INTEGRATED                 ║
 * ║  - Sinkron dengan DICTIONARY                             ║
 * ║  - Support tanpa harakat                                 ║
 * ║  - Analisis morfologi lengkap                            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var IsimAnalyzer = {

    // Tipe-tipe Isim dengan wazan
    types: {
        "ism-fail": {
            name: "Isim Fa'il",
            nameAr: "اسم الفاعل",
            description: "Menunjukkan pelaku perbuatan",
            wazan: "فَاعِل",
            examples: ["كَاتِب", "قَارِئ", "نَاصِر"]
        },
        "ism-maful": {
            name: "Isim Maf'ul",
            nameAr: "اسم المفعول",
            description: "Menunjukkan objek perbuatan",
            wazan: "مَفْعُول",
            examples: ["مَكْتُوب", "مَقْرُوء", "مَنْصُور"]
        },
        "ism-makan": {
            name: "Isim Makan",
            nameAr: "اسم المكان",
            description: "Menunjukkan tempat",
            wazan: "مَفْعَل / مَفْعِل",
            examples: ["مَدْرَسَة", "مَسْجِد", "مَكْتَب"]
        },
        "ism-zaman": {
            name: "Isim Zaman",
            nameAr: "اسم الزمان",
            description: "Menunjukkan waktu",
            wazan: "مَفْعَل",
            examples: ["مَطْلَع", "مَغْرِب"]
        },
        "ism-alat": {
            name: "Isim Alat",
            nameAr: "اسم الآلة",
            description: "Menunjukkan alat",
            wazan: "مِفْعَل / مِفْعَال",
            examples: ["مِفْتَاح", "مِصْبَاح", "مِكْنَسَة"]
        },
        "sifat-musyabbahah": {
            name: "Sifat Musyabbahah",
            nameAr: "الصفة المشبهة",
            description: "Sifat yang tetap/melekat",
            wazan: "فَعِيل / فَعْلَان",
            examples: ["كَرِيم", "جَمِيل", "عَظِيم"]
        },
        "isim-jamid": {
            name: "Isim Jamid",
            nameAr: "الاسم الجامد",
            description: "Kata benda asli (tidak dari fi'il)",
            wazan: "—",
            examples: ["كِتَاب", "قَلَم", "بَيْت"]
        },
        "isim-dhomir": {
            name: "Isim Dhomir",
            nameAr: "الضمير",
            description: "Kata ganti",
            wazan: "—",
            examples: ["أنا", "هو", "هي"]
        }
    },

    // Analisis kata berdasarkan DICTIONARY
    analyze: function(word, dictData) {
        // Jika ada data dari dictionary
        if (dictData && dictData.bab === 'isim') {
            return this.analyzeFromDict(word, dictData);
        }

        // Jika tidak ada di dictionary, coba analisis pattern
        return this.analyzePattern(word);
    },

    // Analisis berdasarkan data dictionary
    analyzeFromDict: function(word, data) {
        var result = {
            word: word,
            root: data.root ? data.root.join(" - ") : "—",
            meaning: data.meaning || "—",
            category: "Isim",
            type: this.detectType(word, data),
            wazan: this.getWazan(word, data),
            gender: this.detectGender(word),
            forms: this.generateForms(word, data)
        };

        return result;
    },

    // Deteksi tipe isim
    detectType: function(word, data) {
        if (data.tags) {
            if (data.tags.includes("isim_fail")) return this.types["ism-fail"];
            if (data.tags.includes("isim_maful")) return this.types["ism-maful"];
            if (data.tags.includes("isim_makan") || data.tags.includes("tempat")) return this.types["ism-makan"];
            if (data.tags.includes("isim_zaman") || data.tags.includes("waktu")) return this.types["ism-zaman"];
            if (data.tags.includes("isim_alat") || data.tags.includes("alat")) return this.types["ism-alat"];
            if (data.tags.includes("sifat")) return this.types["sifat-musyabbahah"];
        }

        // Deteksi berdasarkan pattern
        if (word.startsWith("م")) {
            if (word.endsWith("ة")) return this.types["ism-makan"];
            if (word.match(/^م.+ول$/)) return this.types["ism-maful"];
            if (word.match(/^م.+ل$/)) return this.types["ism-makan"];
        }

        return this.types["isim-jamid"];
    },

    // Dapatkan wazan
    getWazan: function(word, data) {
        var type = this.detectType(word, data);
        return type.wazan || "—";
    },

    // Deteksi gender
    detectGender: function(word) {
        // Kata yang berakhiran ta marbuthah (ة) umumnya muannats
        if (word.endsWith("ة")) return "Muannats (مؤنث)";
        
        // Kata-kata muannats khusus
        var muannatsWords = ["شمس", "ارض", "سماء", "نار", "دار"];
        if (muannatsWords.indexOf(word) !== -1) return "Muannats (مؤنث)";
        
        return "Mudzakkar (مذكر)";
    },

    // Generate bentuk-bentuk isim
    generateForms: function(word, data) {
        var forms = [];
        var isMuannats = this.detectGender(word).includes("Muannats");

        // Bentuk dasar
        forms.push({
            label: "Mufrad (مفرد)",
            arabic: word,
            latin: data.latin || "—",
            meaning: "Tunggal"
        });

        // Bentuk mutsanna
        if (isMuannats && word.endsWith("ة")) {
            forms.push({
                label: "Mutsanna (مثنى)",
                arabic: word.slice(0, -1) + "تَانِ",
                latin: "—",
                meaning: "Dua (muannats)"
            });
        } else {
            forms.push({
                label: "Mutsanna (مثنى)",
                arabic: word + "َانِ",
                latin: "—",
                meaning: "Dua"
            });
        }

        // Bentuk jamak
        if (data.plural) {
            forms.push({
                label: "Jamak (جمع)",
                arabic: data.plural,
                latin: "—",
                meaning: "Banyak"
            });
        } else {
            // Auto-generate jamak
            if (isMuannats && word.endsWith("ة")) {
                forms.push({
                    label: "Jamak (جمع)",
                    arabic: word.slice(0, -1) + "اتٌ",
                    latin: "—",
                    meaning: "Banyak (muannats)"
                });
            } else {
                forms.push({
                    label: "Jamak (جمع)",
                    arabic: word + "ُونَ",
                    latin: "—",
                    meaning: "Banyak (mudzakkar)"
                });
            }
        }

        return forms;
    },

    // Analisis berdasarkan pattern (untuk kata yang tidak ada di dictionary)
    analyzePattern: function(word) {
        // Pola-pola umum isim
        var patterns = [
            {
                test: /^م.+ة$/,
                type: this.types["ism-makan"],
                description: "Kemungkinan tempat (berakhiran mim-ta marbuthah)"
            },
            {
                test: /^م.+ول$/,
                type: this.types["ism-maful"],
                description: "Kemungkinan isim maf'ul (pola maf'ul)"
            },
            {
                test: /^.+يل$/,
                type: this.types["sifat-musyabbahah"],
                description: "Kemungkinan sifat (pola fa'il)"
            }
        ];

        for (var i = 0; i < patterns.length; i++) {
            if (patterns[i].test.test(word)) {
                return {
                    word: word,
                    root: "—",
                    meaning: patterns[i].description,
                    category: "Isim",
                    type: patterns[i].type,
                    wazan: patterns[i].type.wazan,
                    gender: this.detectGender(word),
                    forms: []
                };
            }
        }

        return null;
    },

    // Helper: Dapatkan info lengkap tipe
    getTypeInfo: function(typeName) {
        return this.types[typeName] || this.types["isim-jamid"];
    }
};

// Export untuk browser
if (typeof window !== 'undefined') {
    window.IsimAnalyzer = IsimAnalyzer;
}