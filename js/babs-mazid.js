/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  DATA: FI'IL TSULASI MAZID (3 huruf + tambahan)         ║
 * ║                                                          ║
 * ║  12 Wazan Mazid yang paling umum:                        ║
 * ║  Mazid 1 huruf  (3): أَفْعَلَ، فَعَّلَ، فَاعَلَ          ║
 * ║  Mazid 2 huruf  (5): تَفَعَّلَ، تَفَاعَلَ، اِنْفَعَلَ...  ║
 * ║  Mazid 3 huruf  (4): اِسْتَفْعَلَ...                     ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const BABS_MAZID = {

    // ══════════════════════════════════════
    // MAZID 1 HURUF (Tambahan 1 huruf)
    // ══════════════════════════════════════

    // أَفْعَلَ - يُفْعِلُ (إِفْعَال)
    // Makna: Transitif/kausalif — "menjadikan"
    "z1": {
        id: "z1",
        category: "mazid",
        name: "أَفْعَلَ — Mazid 1 Huruf (Hamzah)",
        pattern: "أَفْعَلَ - يُفْعِلُ",
        description: "Tambahan Hamzah di awal — makna: menjadikan/kausalif",
        color: "#10b981",
        headerClass: "header-mazid",
        zigzagClass: "zigzag-green",
        rootLength: 3,

        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "أَفْعَلَ",       template: "أَ{f}ْ{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يُفْعِلُ",       template: "يُ{f}ْ{a}ِ{l}ُ" },
            { label: "Mashdar",            wazan: "إِفْعَالًا",     template: "إِ{f}ْ{a}َا{l}ًا" },
            { label: "Isim Fa'il",         wazan: "مُفْعِلٌ",       template: "مُ{f}ْ{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مُفْعَلٌ",       template: "مُ{f}ْ{a}َ{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "أَفْعِلْ",       template: "أَ{f}ْ{a}ِ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تُفْعِلْ",    template: "لَا تُ{f}ْ{a}ِ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مُفْعَلٌ",       template: "مُ{f}ْ{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "أُفْعِلَ",       template: "أُ{f}ْ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",       template: "يُ{f}ْ{a}َ{l}ُ" }
        ],

        lughawi: {
            madhi: {
                base: "أَ{f}ْ{a}َ{l}",
                suffixes: [
                    { dhamir: "هُوَ",       label: "Dia lk",      suf: "َ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", suf: "َا" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   suf: "ُوا" },
                    { dhamir: "هِيَ",       label: "Dia pr",      suf: "َتْ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", suf: "َتَا" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     suf: "ْتَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    suf: "ْتُمَا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   suf: "ْتُمْ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     suf: "ْتِ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", suf: "ْتُمَا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   suf: "ْتُنَّ" },
                    { dhamir: "أَنَا",      label: "Saya",        suf: "ْتُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        suf: "ْنَا" }
                ]
            },
            mudhari: {
                mid: "ْ", vowel: "ِ",
                conjugations: [
                    { dhamir: "هُوَ",       label: "Dia lk",      pre: "يُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", pre: "يُ", suf: "َانِ" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   pre: "يُ", suf: "ُونَ" },
                    { dhamir: "هِيَ",       label: "Dia pr",      pre: "تُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   pre: "يُ", suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "تُ", suf: "ُ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "تُ", suf: "ُونَ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "تُ", suf: "ِينَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "تُ", suf: "ْنَ" },
                    { dhamir: "أَنَا",      label: "Saya",        pre: "أُ", suf: "ُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        pre: "نُ", suf: "ُ" }
                ]
            },
            amr: {
                mid: "ْ", vowel: "ِ",
                conjugations: [
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "أَ", suf: "ْ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "أَ", suf: "َا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "أَ", suf: "ُوا" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "أَ", suf: "ِي" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "أَ", suf: "َا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "أَ", suf: "ْنَ" }
                ]
            }
        }
    },

    // فَعَّلَ - يُفَعِّلُ (تَفْعِيل)
    // Makna: Intensif/pengulangan — "banyak melakukan"
    "z2": {
        id: "z2",
        category: "mazid",
        name: "فَعَّلَ — Mazid 1 Huruf (Tasydid 'Ain)",
        pattern: "فَعَّلَ - يُفَعِّلُ",
        description: "Tasydid pada 'Ain — makna: intensif/transitif",
        color: "#059669",
        headerClass: "header-mazid",
        zigzagClass: "zigzag-green",
        rootLength: 3,

        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعَّلَ",       template: "{f}َ{a}َّ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يُفَعِّلُ",     template: "يُ{f}َ{a}ِّ{l}ُ" },
            { label: "Mashdar",            wazan: "تَفْعِيلًا",    template: "تَ{f}ْ{a}ِي{l}ًا" },
            { label: "Isim Fa'il",         wazan: "مُفَعِّلٌ",     template: "مُ{f}َ{a}ِّ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مُفَعَّلٌ",     template: "مُ{f}َ{a}َّ{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "فَعِّلْ",       template: "{f}َ{a}ِّ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تُفَعِّلْ",  template: "لَا تُ{f}َ{a}ِّ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مُفَعَّلٌ",     template: "مُ{f}َ{a}َّ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِّلَ",       template: "{f}ُ{a}ِّ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفَعَّلُ",     template: "يُ{f}َ{a}َّ{l}ُ" }
        ],

        lughawi: {
            madhi: {
                base: "{f}َ{a}َّ{l}",
                suffixes: [
                    { dhamir: "هُوَ",       label: "Dia lk",      suf: "َ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", suf: "َا" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   suf: "ُوا" },
                    { dhamir: "هِيَ",       label: "Dia pr",      suf: "َتْ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", suf: "َتَا" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     suf: "ْتَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    suf: "ْتُمَا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   suf: "ْتُمْ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     suf: "ْتِ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", suf: "ْتُمَا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   suf: "ْتُنَّ" },
                    { dhamir: "أَنَا",      label: "Saya",        suf: "ْتُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        suf: "ْنَا" }
                ]
            },
            mudhari: {
                mid: "َ", vowel: "ِّ",
                conjugations: [
                    { dhamir: "هُوَ",       label: "Dia lk",      pre: "يُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", pre: "يُ", suf: "َانِ" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   pre: "يُ", suf: "ُونَ" },
                    { dhamir: "هِيَ",       label: "Dia pr",      pre: "تُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   pre: "يُ", suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "تُ", suf: "ُ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "تُ", suf: "ُونَ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "تُ", suf: "ِينَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "تُ", suf: "ْنَ" },
                    { dhamir: "أَنَا",      label: "Saya",        pre: "أُ", suf: "ُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        pre: "نُ", suf: "ُ" }
                ]
            },
            amr: {
                mid: "َ", vowel: "ِّ",
                conjugations: [
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "", suf: "ْ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "", suf: "َا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "", suf: "ُوا" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "", suf: "ِي" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "", suf: "َا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "", suf: "ْنَ" }
                ]
            }
        }
    },

    // فَاعَلَ - يُفَاعِلُ (مُفَاعَلَة / فِعَال)
    "z3": {
        id: "z3",
        category: "mazid",
        name: "فَاعَلَ — Mazid 1 Huruf (Alif)",
        pattern: "فَاعَلَ - يُفَاعِلُ",
        description: "Tambahan Alif setelah Fa' — makna: saling/berhadapan",
        color: "#047857",
        headerClass: "header-mazid",
        zigzagClass: "zigzag-green",
        rootLength: 3,

        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَاعَلَ",       template: "{f}َا{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يُفَاعِلُ",     template: "يُ{f}َا{a}ِ{l}ُ" },
            { label: "Mashdar",            wazan: "مُفَاعَلَةً",   template: "مُ{f}َا{a}َ{l}َةً" },
            { label: "Isim Fa'il",         wazan: "مُفَاعِلٌ",     template: "مُ{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مُفَاعَلٌ",     template: "مُ{f}َا{a}َ{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "فَاعِلْ",       template: "{f}َا{a}ِ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تُفَاعِلْ",  template: "لَا تُ{f}َا{a}ِ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مُفَاعَلٌ",     template: "مُ{f}َا{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُوعِلَ",       template: "{f}ُو{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفَاعَلُ",     template: "يُ{f}َا{a}َ{l}ُ" }
        ],

        lughawi: {
            madhi: {
                base: "{f}َا{a}َ{l}",
                suffixes: [
                    { dhamir: "هُوَ",       label: "Dia lk",      suf: "َ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", suf: "َا" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   suf: "ُوا" },
                    { dhamir: "هِيَ",       label: "Dia pr",      suf: "َتْ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", suf: "َتَا" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     suf: "ْتَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    suf: "ْتُمَا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   suf: "ْتُمْ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     suf: "ْتِ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", suf: "ْتُمَا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   suf: "ْتُنَّ" },
                    { dhamir: "أَنَا",      label: "Saya",        suf: "ْتُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        suf: "ْنَا" }
                ]
            },
            mudhari: {
                mid: "َا", vowel: "ِ",
                conjugations: [
                    { dhamir: "هُوَ",       label: "Dia lk",      pre: "يُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", pre: "يُ", suf: "َانِ" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   pre: "يُ", suf: "ُونَ" },
                    { dhamir: "هِيَ",       label: "Dia pr",      pre: "تُ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   pre: "يُ", suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "تُ", suf: "ُ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "تُ", suf: "ُونَ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "تُ", suf: "ِينَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "تُ", suf: "َانِ" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "تُ", suf: "ْنَ" },
                    { dhamir: "أَنَا",      label: "Saya",        pre: "أُ", suf: "ُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        pre: "نُ", suf: "ُ" }
                ]
            },
            amr: {
                mid: "َا", vowel: "ِ",
                conjugations: [
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "", suf: "ْ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "", suf: "َا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "", suf: "ُوا" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "", suf: "ِي" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "", suf: "َا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "", suf: "ْنَ" }
                ]
            }
        }
    },

    // ══════════════════════════════════════
    // MAZID 2 HURUF
    // ══════════════════════════════════════

    // اِسْتَفْعَلَ - يَسْتَفْعِلُ (اِسْتِفْعَال)
    "z4": {
        id: "z4",
        category: "mazid",
        name: "اِسْتَفْعَلَ — Mazid 3 Huruf (اسـت)",
        pattern: "اِسْتَفْعَلَ - يَسْتَفْعِلُ",
        description: "Tambahan ا-س-ت — makna: meminta/menganggap",
        color: "#065f46",
        headerClass: "header-mazid",
        zigzagClass: "zigzag-green",
        rootLength: 3,

        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "اِسْتَفْعَلَ",     template: "اِسْتَ{f}ْ{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَسْتَفْعِلُ",     template: "يَسْتَ{f}ْ{a}ِ{l}ُ" },
            { label: "Mashdar",            wazan: "اِسْتِفْعَالًا",   template: "اِسْتِ{f}ْ{a}َا{l}ًا" },
            { label: "Isim Fa'il",         wazan: "مُسْتَفْعِلٌ",     template: "مُسْتَ{f}ْ{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مُسْتَفْعَلٌ",     template: "مُسْتَ{f}ْ{a}َ{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اِسْتَفْعِلْ",     template: "اِسْتَ{f}ْ{a}ِ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَسْتَفْعِلْ",  template: "لَا تَسْتَ{f}ْ{a}ِ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مُسْتَفْعَلٌ",     template: "مُسْتَ{f}ْ{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "اُسْتُفْعِلَ",     template: "اُسْتُ{f}ْ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُسْتَفْعَلُ",     template: "يُسْتَ{f}ْ{a}َ{l}ُ" }
        ],

        lughawi: {
            madhi: {
                base: "اِسْتَ{f}ْ{a}َ{l}",
                suffixes: [
                    { dhamir: "هُوَ",       label: "Dia lk",      suf: "َ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", suf: "َا" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   suf: "ُوا" },
                    { dhamir: "هِيَ",       label: "Dia pr",      suf: "َتْ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", suf: "َتَا" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     suf: "ْتَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    suf: "ْتُمَا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   suf: "ْتُمْ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     suf: "ْتِ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", suf: "ْتُمَا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   suf: "ْتُنَّ" },
                    { dhamir: "أَنَا",      label: "Saya",        suf: "ْتُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        suf: "ْنَا" }
                ]
            },
            mudhari: {
                pattern: "sta", // special: pre + سْتَ + {f} + ْ + {a} + vowel + {l} + suf
                mid: "ْ", vowel: "ِ",
                conjugations: [
                    { dhamir: "هُوَ",       label: "Dia lk",      pre: "يَسْتَ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 lk", pre: "يَسْتَ", suf: "َانِ" },
                    { dhamir: "هُمْ",       label: "Mereka lk",   pre: "يَسْتَ", suf: "ُونَ" },
                    { dhamir: "هِيَ",       label: "Dia pr",      pre: "تَسْتَ", suf: "ُ" },
                    { dhamir: "هُمَا",      label: "Mereka 2 pr", pre: "تَسْتَ", suf: "َانِ" },
                    { dhamir: "هُنَّ",      label: "Mereka pr",   pre: "يَسْتَ", suf: "ْنَ" },
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "تَسْتَ", suf: "ُ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "تَسْتَ", suf: "َانِ" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "تَسْتَ", suf: "ُونَ" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "تَسْتَ", suf: "ِينَ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "تَسْتَ", suf: "َانِ" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "تَسْتَ", suf: "ْنَ" },
                    { dhamir: "أَنَا",      label: "Saya",        pre: "أَسْتَ", suf: "ُ" },
                    { dhamir: "نَحْنُ",     label: "Kami",        pre: "نَسْتَ", suf: "ُ" }
                ]
            },
            amr: {
                mid: "ْ", vowel: "ِ",
                conjugations: [
                    { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "اِسْتَ", suf: "ْ" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "اِسْتَ", suf: "َا" },
                    { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "اِسْتَ", suf: "ُوا" },
                    { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "اِسْتَ", suf: "ِي" },
                    { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "اِسْتَ", suf: "َا" },
                    { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "اِسْتَ", suf: "ْنَ" }
                ]
            }
        }
    }

    // Tambahkan bab mazid lainnya dengan pola yang sama:
    // z5: تَفَعَّلَ - يَتَفَعَّلُ (refleksif dari فَعَّلَ)
    // z6: تَفَاعَلَ - يَتَفَاعَلُ (saling/pura-pura)
    // z7: اِنْفَعَلَ - يَنْفَعِلُ (pasif/refleksif)
    // z8: اِفْتَعَلَ - يَفْتَعِلُ (refleksif)
    // z9: اِفْعَلَّ - يَفْعَلُّ (warna/cacat)
};