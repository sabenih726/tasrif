/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  DATA: FI'IL RUBA'I (4 huruf asli)                      ║
 * ║                                                          ║
 * ║  Template: {f} = huruf 1, {a} = huruf 2,                ║
 * ║            {l} = huruf 3, {q} = huruf 4                 ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const BABS_RUBAI = {

    // فَعْلَلَ - يُفَعْلِلُ
    // Contoh: دَحْرَجَ - يُدَحْرِجُ (menggulingkan)
    "r1": {
        id: "r1",
        category: "rubai",
        name: "فَعْلَلَ — Ruba'i Mujarrad",
        pattern: "فَعْلَلَ - يُفَعْلِلُ",
        description: "4 huruf asli tanpa tambahan",
        color: "#f97316",
        headerClass: "header-rubai",
        zigzagClass: "zigzag-orange",
        rootLength: 4,

        istilahi: [
            { label: "Madhi Ma'lum",      wazan: "فَعْلَلَ",      template: "{f}َ{a}ْ{l}َ{q}َ" },
            { label: "Mudhari Ma'lum",     wazan: "يُفَعْلِلُ",    template: "يُ{f}َ{a}ْ{l}ِ{q}ُ" },
            { label: "Mashdar",            wazan: "فَعْلَلَةً",    template: "{f}َ{a}ْ{l}َ{q}َةً" },
            { label: "Isim Fa'il",         wazan: "مُفَعْلِلٌ",    template: "مُ{f}َ{a}ْ{l}ِ{q}ٌ" },
            { label: "Isim Maf'ul",        wazan: "مُفَعْلَلٌ",    template: "مُ{f}َ{a}ْ{l}َ{q}ٌ" },
            { label: "Fi'il Amr",          wazan: "فَعْلِلْ",      template: "{f}َ{a}ْ{l}ِ{q}ْ" },
            { label: "Fi'il Nahi",         wazan: "لَا تُفَعْلِلْ", template: "لَا تُ{f}َ{a}ْ{l}ِ{q}ْ" },
            { label: "Isim Zaman/Makan",   wazan: "مُفَعْلَلٌ",    template: "مُ{f}َ{a}ْ{l}َ{q}ٌ" },
            { label: "Madhi Majhul",       wazan: "فُعْلِلَ",      template: "{f}ُ{a}ْ{l}ِ{q}َ" },
            { label: "Mudhari Majhul",     wazan: "يُفَعْلَلُ",    template: "يُ{f}َ{a}ْ{l}َ{q}ُ" }
        ],

        lughawi: {
            madhi: {
                base: "{f}َ{a}ْ{l}َ{q}",
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
                mid: "َ{a}ْ", vowel: "ِ", // special: needs 2nd root letter in mid
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
      }
};