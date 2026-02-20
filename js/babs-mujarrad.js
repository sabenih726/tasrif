/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  DATA: 6 BAB FI'IL TSULASI MUJARRAD (FIXED)             ║
 * ╚══════════════════════════════════════════════════════════╝
 */

function buildMujarradLughawi(madhiAinVowel, mudhariVowel, amrPrefix) {
    return {
        madhi: {
            ainVowel: madhiAinVowel,
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
            vowel: mudhariVowel,
            conjugations: [
                { dhamir: "هُوَ",       label: "Dia lk",      pre: "يَ", suf: "ُ" },
                { dhamir: "هُمَا",      label: "Mereka 2 lk", pre: "يَ", suf: "َانِ" },
                { dhamir: "هُمْ",       label: "Mereka lk",   pre: "يَ", suf: "ُونَ" },
                { dhamir: "هِيَ",       label: "Dia pr",      pre: "تَ", suf: "ُ" },
                { dhamir: "هُمَا",      label: "Mereka 2 pr", pre: "تَ", suf: "َانِ" },
                { dhamir: "هُنَّ",      label: "Mereka pr",   pre: "يَ", suf: "ْنَ" },
                { dhamir: "أَنْتَ",     label: "Kamu lk",     pre: "تَ", suf: "ُ" },
                { dhamir: "أَنْتُمَا",  label: "Kalian 2",    pre: "تَ", suf: "َانِ" },
                { dhamir: "أَنْتُمْ",   label: "Kalian lk",   pre: "تَ", suf: "ُونَ" },
                { dhamir: "أَنْتِ",     label: "Kamu pr",     pre: "تَ", suf: "ِينَ" },
                { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", pre: "تَ", suf: "َانِ" },
                { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   pre: "تَ", suf: "ْنَ" },
                { dhamir: "أَنَا",      label: "Saya",        pre: "أَ", suf: "ُ" },
                { dhamir: "نَحْنُ",     label: "Kami",        pre: "نَ", suf: "ُ" }
            ]
        },
        amr: {
            prefix: amrPrefix,
            vowel: mudhariVowel,
            conjugations: [
                { dhamir: "أَنْتَ",     label: "Kamu lk",     suf: "ْ" },
                { dhamir: "أَنْتُمَا",  label: "Kalian 2",    suf: "َا" },
                { dhamir: "أَنْتُمْ",   label: "Kalian lk",   suf: "ُوا" },
                { dhamir: "أَنْتِ",     label: "Kamu pr",     suf: "ِي" },
                { dhamir: "أَنْتُمَا",  label: "Kalian 2 pr", suf: "َا" },
                { dhamir: "أَنْتُنَّ",  label: "Kalian pr",   suf: "ْنَ" }
            ]
        }
    };
}

var BABS_MUJARRAD = {

    "m1": {
        id: "m1", category: "mujarrad",
        name: "Bab 1 — فَعَلَ يَفْعُلُ",
        pattern: "فَعَلَ - يَفْعُلُ",
        description: "Fathah - Dhammah",
        color: "#facc15", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعَلَ",        template: "{f}َ{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعُلُ",      template: "يَ{f}ْ{a}ُ{l}ُ" },
            { label: "Mashdar",            wazan: "فَعْلًا",       template: "{f}َ{a}ْ{l}ًا" },
            { label: "Isim Fa'il",         wazan: "فَاعِلٌ",       template: "{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مَفْعُولٌ",     template: "مَ{f}ْ{a}ُو{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اُفْعُلْ",      template: "اُ{f}ْ{a}ُ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعُلْ",   template: "لَا تَ{f}ْ{a}ُ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مَفْعَلٌ",      template: "مَ{f}ْ{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِلَ",        template: "{f}ُ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",      template: "يُ{f}ْ{a}َ{l}ُ" }
        ],
        lughawi: buildMujarradLughawi("َ", "ُ", "اُ")
    },

    "m2": {
        id: "m2", category: "mujarrad",
        name: "Bab 2 — فَعَلَ يَفْعِلُ",
        pattern: "فَعَلَ - يَفْعِلُ",
        description: "Fathah - Kasrah",
        color: "#38bdf8", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعَلَ",        template: "{f}َ{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعِلُ",      template: "يَ{f}ْ{a}ِ{l}ُ" },
            { label: "Mashdar",            wazan: "فَعْلًا",       template: "{f}َ{a}ْ{l}ًا" },
            { label: "Isim Fa'il",         wazan: "فَاعِلٌ",       template: "{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مَفْعُولٌ",     template: "مَ{f}ْ{a}ُو{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اِفْعِلْ",      template: "اِ{f}ْ{a}ِ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعِلْ",   template: "لَا تَ{f}ْ{a}ِ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مَفْعِلٌ",      template: "مَ{f}ْ{a}ِ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِلَ",        template: "{f}ُ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",      template: "يُ{f}ْ{a}َ{l}ُ" }
        ],
        lughawi: buildMujarradLughawi("َ", "ِ", "اِ")
    },

    "m3": {
        id: "m3", category: "mujarrad",
        name: "Bab 3 — فَعَلَ يَفْعَلُ",
        pattern: "فَعَلَ - يَفْعَلُ",
        description: "Fathah - Fathah",
        color: "#fb923c", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعَلَ",        template: "{f}َ{a}َ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعَلُ",      template: "يَ{f}ْ{a}َ{l}ُ" },
            { label: "Mashdar",            wazan: "فَعْلًا",       template: "{f}َ{a}ْ{l}ًا" },
            { label: "Isim Fa'il",         wazan: "فَاعِلٌ",       template: "{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مَفْعُولٌ",     template: "مَ{f}ْ{a}ُو{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اِفْعَلْ",      template: "اِ{f}ْ{a}َ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعَلْ",   template: "لَا تَ{f}ْ{a}َ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مَفْعَلٌ",      template: "مَ{f}ْ{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِلَ",        template: "{f}ُ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",      template: "يُ{f}ْ{a}َ{l}ُ" }
        ],
        lughawi: buildMujarradLughawi("َ", "َ", "اِ")
    },

    "m4": {
        id: "m4", category: "mujarrad",
        name: "Bab 4 — فَعِلَ يَفْعَلُ",
        pattern: "فَعِلَ - يَفْعَلُ",
        description: "Kasrah - Fathah",
        color: "#f472b6", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعِلَ",        template: "{f}َ{a}ِ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعَلُ",      template: "يَ{f}ْ{a}َ{l}ُ" },
            { label: "Mashdar",            wazan: "فَعَلًا",       template: "{f}َ{a}َ{l}ًا" },
            { label: "Isim Fa'il",         wazan: "فَاعِلٌ",       template: "{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مَفْعُولٌ",     template: "مَ{f}ْ{a}ُو{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اِفْعَلْ",      template: "اِ{f}ْ{a}َ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعَلْ",   template: "لَا تَ{f}ْ{a}َ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مَفْعَلٌ",      template: "مَ{f}ْ{a}َ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِلَ",        template: "{f}ُ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",      template: "يُ{f}ْ{a}َ{l}ُ" }
        ],
        lughawi: buildMujarradLughawi("ِ", "َ", "اِ")
    },

    "m5": {
        id: "m5", category: "mujarrad",
        name: "Bab 5 — فَعُلَ يَفْعُلُ",
        pattern: "فَعُلَ - يَفْعُلُ",
        description: "Dhammah - Dhammah",
        color: "#a78bfa", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعُلَ",        template: "{f}َ{a}ُ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعُلُ",      template: "يَ{f}ْ{a}ُ{l}ُ" },
            { label: "Mashdar",            wazan: "فَعَالَةً",      template: "{f}َ{a}َا{l}َةً" },
            { label: "Isim Fa'il",         wazan: "فَعِيلٌ",       template: "{f}َ{a}ِي{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "—",             template: "—" },
            { label: "Fi'il Amr",          wazan: "اُفْعُلْ",      template: "اُ{f}ْ{a}ُ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعُلْ",   template: "لَا تَ{f}ْ{a}ُ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "—",             template: "—" },
            { label: "Madhi Majhul",       wazan: "—",             template: "—" },
            { label: "Mudhari Majhul",     wazan: "—",             template: "—" }
        ],
        lughawi: buildMujarradLughawi("ُ", "ُ", "اُ")
    },

    "m6": {
        id: "m6", category: "mujarrad",
        name: "Bab 6 — فَعِلَ يَفْعِلُ",
        pattern: "فَعِلَ - يَفْعِلُ",
        description: "Kasrah - Kasrah",
        color: "#2dd4bf", headerClass: "header-fiil", zigzagClass: "zigzag",
        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعِلَ",        template: "{f}َ{a}ِ{l}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يَفْعِلُ",      template: "يَ{f}ْ{a}ِ{l}ُ" },
            { label: "Mashdar",            wazan: "فِعْلًا",       template: "{f}ِ{a}ْ{l}ًا" },
            { label: "Isim Fa'il",         wazan: "فَاعِلٌ",       template: "{f}َا{a}ِ{l}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مَفْعُولٌ",     template: "مَ{f}ْ{a}ُو{l}ٌ" },
            { label: "Fi'il Amr",          wazan: "اِفْعِلْ",      template: "اِ{f}ْ{a}ِ{l}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تَفْعِلْ",   template: "لَا تَ{f}ْ{a}ِ{l}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مَفْعِلٌ",      template: "مَ{f}ْ{a}ِ{l}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعِلَ",        template: "{f}ُ{a}ِ{l}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفْعَلُ",      template: "يُ{f}ْ{a}َ{l}ُ" }
        ],
        lughawi: buildMujarradLughawi("ِ", "ِ", "اِ")
    }
};