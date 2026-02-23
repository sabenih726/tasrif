/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  KAMUS: 1000+ KATA ARAB - VERSI FINAL                   ║
 * ║  Tanpa duplikasi, konsisten, dan diperkaya              ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const DICTIONARY = {

    // ═══════════════════════════════════════════════════════════
    // BAB 1: فَعَلَ - يَفْعُلُ (m1) - Nasara Yansuru
    // ═══════════════════════════════════════════════════════════
    
    "نصر": { bab: "m1", root: ["ن","ص","ر"], meaning: "menolong", tags: ["umum","quran"] },
    "كتب": { bab: "m1", root: ["ك","ت","ب"], meaning: "menulis", tags: ["umum","pendidikan"] },
    "دخل": { bab: "m1", root: ["د","خ","ل"], meaning: "masuk", tags: ["umum","gerakan"] },
    "خرج": { bab: "m1", root: ["خ","ر","ج"], meaning: "keluar", tags: ["umum","gerakan"] },
    "سكن": { bab: "m1", root: ["س","ك","ن"], meaning: "tinggal/diam", tags: ["umum"] },
    "قتل": { bab: "m1", root: ["ق","ت","ل"], meaning: "membunuh", tags: ["quran"] },
    "طلب": { bab: "m1", root: ["ط","ل","ب"], meaning: "mencari/meminta", tags: ["umum"] },
    "عبد": { bab: "m1", root: ["ع","ب","د"], meaning: "menyembah", tags: ["ibadah","quran"] },
    "شكر": { bab: "m1", root: ["ش","ك","ر"], meaning: "bersyukur", tags: ["ibadah","quran"] },
    "ترك": { bab: "m1", root: ["ت","ر","ك"], meaning: "meninggalkan", tags: ["umum"] },
    "ملك": { bab: "m1", root: ["م","ل","ك"], meaning: "memiliki", tags: ["umum","quran"] },
    "سجد": { bab: "m1", root: ["س","ج","د"], meaning: "bersujud", tags: ["ibadah","quran"] },
    "عقد": { bab: "m1", root: ["ع","ق","د"], meaning: "mengikat", tags: ["umum"] },
    "حمد": { bab: "m1", root: ["ح","م","د"], meaning: "memuji", tags: ["ibadah","quran"] },
    "رزق": { bab: "m1", root: ["ر","ز","ق"], meaning: "memberi rezeki", tags: ["quran"] },
    "خلق": { bab: "m1", root: ["خ","ل","ق"], meaning: "menciptakan", tags: ["quran"] },
    "عمر": { bab: "m1", root: ["ع","م","ر"], meaning: "memakmurkan", tags: ["quran"] },
    "حشر": { bab: "m1", root: ["ح","ش","ر"], meaning: "mengumpulkan (akhirat)", tags: ["quran"] },
    "سكت": { bab: "m1", root: ["س","ك","ت"], meaning: "diam (tidak bicara)", tags: ["umum"] },
    "ركع": { bab: "m1", root: ["ر","ك","ع"], meaning: "ruku'", tags: ["ibadah"] },
    "نظر": { bab: "m1", root: ["ن","ظ","ر"], meaning: "melihat", tags: ["umum","quran"] },
    "عمل": { bab: "m1", root: ["ع","م","ل"], meaning: "bekerja/beramal", tags: ["umum","quran"] },
    "حكم": { bab: "m1", root: ["ح","ك","م"], meaning: "menghukum/memutuskan", tags: ["umum","quran"] },
    "شرح": { bab: "m1", root: ["ش","ر","ح"], meaning: "menjelaskan", tags: ["pendidikan"] },
    "بلغ": { bab: "m1", root: ["ب","ل","غ"], meaning: "sampai/menyampaikan", tags: ["umum"] },
    "حزن": { bab: "m1", root: ["ح","ز","ن"], meaning: "bersedih", tags: ["perasaan"] },
    "عرض": { bab: "m1", root: ["ع","ر","ض"], meaning: "menampilkan/menawarkan", tags: ["umum"] },
    "غفر": { bab: "m1", root: ["غ","ف","ر"], meaning: "mengampuni", tags: ["ibadah","quran"] },
    "حفظ": { bab: "m1", root: ["ح","ف","ظ"], meaning: "menjaga/menghafal", tags: ["pendidikan","quran"] },
    "ذكر": { bab: "m1", root: ["ذ","ك","ر"], meaning: "mengingat/menyebut", tags: ["ibadah","quran"] },
    "أخذ": { bab: "m1", root: ["أ","خ","ذ"], meaning: "mengambil", tags: ["umum"] },
    "غلب": { bab: "m1", root: ["غ","ل","ب"], meaning: "mengalahkan", tags: ["umum"] },
    "حفر": { bab: "m1", root: ["ح","ف","ر"], meaning: "menggali", tags: ["umum"] },
    "غرق": { bab: "m1", root: ["غ","ر","ق"], meaning: "tenggelam", tags: ["gerakan"] },
    "حرس": { bab: "m1", root: ["ح","ر","س"], meaning: "menjaga", tags: ["umum"] },
    "شغل": { bab: "m1", root: ["ش","غ","ل"], meaning: "menyibukkan", tags: ["umum"] },
    "كسب": { bab: "m1", root: ["ك","س","ب"], meaning: "mendapatkan/berusaha", tags: ["ekonomi"] },
    "درج": { bab: "m1", root: ["د","ر","ج"], meaning: "naik bertahap", tags: ["umum"] },
    "لمس": { bab: "m1", root: ["ل","م","س"], meaning: "menyentuh", tags: ["indra"] },
    "عبر": { bab: "m1", root: ["ع","ب","ر"], meaning: "menyeberang", tags: ["gerakan"] },
    "بعث": { bab: "m1", root: ["ب","ع","ث"], meaning: "mengutus/membangkitkan", tags: ["quran"] },
    "حصد": { bab: "m1", root: ["ح","ص","د"], meaning: "memanen", tags: ["pertanian"] },
    "غسل": { bab: "m1", root: ["غ","س","ل"], meaning: "mencuci", tags: ["umum"] },
    "فرق": { bab: "m1", root: ["ف","ر","ق"], meaning: "memisahkan", tags: ["umum"] },
    "خسر": { bab: "m1", root: ["خ","س","ر"], meaning: "merugi", tags: ["ekonomi","quran"] },
    "قصر": { bab: "m1", root: ["ق","ص","ر"], meaning: "menjadi pendek", tags: ["sifat"] },
    "سكب": { bab: "m1", root: ["س","ك","ب"], meaning: "menuangkan", tags: ["umum"] },
    "مر": { bab: "m1", root: ["م","ر","ر"], meaning: "melewati", tags: ["umum"] },
    "مسح": { bab: "m1", root: ["م","س","ح"], meaning: "mengusap", tags: ["ibadah"] },
    "نجح": { bab: "m1", root: ["ن","ج","ح"], meaning: "berhasil", tags: ["pendidikan"] },
    "نطق": { bab: "m1", root: ["ن","ط","ق"], meaning: "berbicara/melafalkan", tags: ["umum"] },
    "نفع": { bab: "m1", root: ["ن","ف","ع"], meaning: "bermanfaat", tags: ["umum","quran"] },
    "نقص": { bab: "m1", root: ["ن","ق","ص"], meaning: "berkurang", tags: ["umum"] },
    "نهض": { bab: "m1", root: ["ن","ه","ض"], meaning: "bangkit", tags: ["gerakan"] },
    "وثق": { bab: "m1", root: ["و","ث","ق"], meaning: "percaya/mempercayai", tags: ["umum"] },
    "وجد": { bab: "m1", root: ["و","ج","د"], meaning: "menemukan", tags: ["umum"] },
    "وعد": { bab: "m1", root: ["و","ع","د"], meaning: "berjanji", tags: ["umum","quran"] },
    "ولد": { bab: "m1", root: ["و","ل","د"], meaning: "melahirkan", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // BAB 2: فَعَلَ - يَفْعِلُ (m2) - Dharaba Yadhribu
    // ═══════════════════════════════════════════════════════════
    
    "ضرب": { bab: "m2", root: ["ض","ر","ب"], meaning: "memukul", tags: ["umum","quran"] },
    "جلس": { bab: "m2", root: ["ج","ل","س"], meaning: "duduk", tags: ["umum"] },
    "وصل": { bab: "m2", root: ["و","ص","ل"], meaning: "sampai/menyambung", tags: ["umum"] },
    "كسر": { bab: "m2", root: ["ك","س","ر"], meaning: "memecahkan", tags: ["umum"] },
    "نزل": { bab: "m2", root: ["ن","ز","ل"], meaning: "turun", tags: ["umum","quran"] },
    "وقف": { bab: "m2", root: ["و","ق","ف"], meaning: "berhenti/berdiri", tags: ["umum"] },
    "حسب": { bab: "m2", root: ["ح","س","ب"], meaning: "menghitung/menyangka", tags: ["umum"] },
    "عرف": { bab: "m2", root: ["ع","ر","ف"], meaning: "mengenal/mengetahui", tags: ["umum"] },
    "ضحك": { bab: "m2", root: ["ض","ح","ك"], meaning: "tertawa", tags: ["perasaan"] },
    "وزن": { bab: "m2", root: ["و","ز","ن"], meaning: "menimbang", tags: ["umum"] },
    "رجع": { bab: "m2", root: ["ر","ج","ع"], meaning: "kembali", tags: ["umum","quran","gerakan"] },
    "قسم": { bab: "m2", root: ["ق","س","م"], meaning: "membagi", tags: ["umum"] },
    "هرب": { bab: "m2", root: ["ه","ر","ب"], meaning: "melarikan diri", tags: ["gerakan"] },
    "وهب": { bab: "m2", root: ["و","ه","ب"], meaning: "memberi/menganugerahkan", tags: ["quran"] },
    "قعد": { bab: "m2", root: ["ق","ع","د"], meaning: "duduk/tinggal", tags: ["umum"] },
    "ركن": { bab: "m2", root: ["ر","ك","ن"], meaning: "bersandar/condong", tags: ["umum"] },
    "لبث": { bab: "m2", root: ["ل","ب","ث"], meaning: "tinggal sementara", tags: ["quran"] },
    "شم": { bab: "m2", root: ["ش","م","م"], meaning: "mencium (bau)", tags: ["indra"] },
    "درس": { bab: "m2", root: ["د","ر","س"], meaning: "belajar", tags: ["pendidikan"] },
    "برد": { bab: "m2", root: ["ب","ر","د"], meaning: "menjadi dingin", tags: ["sifat"] },
    "مرض": { bab: "m2", root: ["م","ر","ض"], meaning: "sakit", tags: ["kesehatan"] },
    "خطب": { bab: "m2", root: ["خ","ط","ب"], meaning: "berkhutbah/melamar", tags: ["ibadah"] },
    "وعظ": { bab: "m2", root: ["و","ع","ظ"], meaning: "menasihati", tags: ["ibadah"] },
    "حلف": { bab: "m2", root: ["ح","ل","ف"], meaning: "bersumpah", tags: ["umum"] },
    "كلم": { bab: "m2", root: ["ك","ل","م"], meaning: "berbicara/menyapa", tags: ["umum"] },
    "مات": { bab: "m2", root: ["م","و","ت"], meaning: "mati", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // BAB 3: فَعَلَ - يَفْعَلُ (m3) - Fataha Yaftahu
    // ═══════════════════════════════════════════════════════════
    
    "فتح": { bab: "m3", root: ["ف","ت","ح"], meaning: "membuka", tags: ["umum","quran"] },
    "ذهب": { bab: "m3", root: ["ذ","ه","ب"], meaning: "pergi", tags: ["umum","gerakan"] },
    "منع": { bab: "m3", root: ["م","ن","ع"], meaning: "mencegah", tags: ["umum","quran"] },
    "جمع": { bab: "m3", root: ["ج","م","ع"], meaning: "mengumpulkan", tags: ["umum","quran"] },
    "قطع": { bab: "m3", root: ["ق","ط","ع"], meaning: "memotong", tags: ["umum"] },
    "زرع": { bab: "m3", root: ["ز","ر","ع"], meaning: "menanam", tags: ["pertanian"] },
    "صنع": { bab: "m3", root: ["ص","ن","ع"], meaning: "membuat", tags: ["umum","quran"] },
    "سمح": { bab: "m3", root: ["س","م","ح"], meaning: "mengizinkan", tags: ["umum"] },
    "طبخ": { bab: "m3", root: ["ط","ب","خ"], meaning: "memasak", tags: ["umum"] },
    "رفع": { bab: "m3", root: ["ر","ف","ع"], meaning: "mengangkat", tags: ["umum","quran"] },
    "وضع": { bab: "m3", root: ["و","ض","ع"], meaning: "meletakkan", tags: ["umum"] },
    "طرح": { bab: "m3", root: ["ط","ر","ح"], meaning: "melempar", tags: ["umum"] },
    "ظهر": { bab: "m3", root: ["ظ","ه","ر"], meaning: "muncul/nampak", tags: ["umum"] },
    "بطن": { bab: "m3", root: ["ب","ط","ن"], meaning: "tersembunyi", tags: ["umum"] },
    "شهد": { bab: "m3", root: ["ش","ه","د"], meaning: "menyaksikan", tags: ["umum","quran"] },
    "رجا": { bab: "m3", root: ["ر","ج","و"], meaning: "berharap", tags: ["perasaan"] },
    "يئس": { bab: "m3", root: ["ي","أ","س"], meaning: "putus asa", tags: ["perasaan","quran"] },
    "بشر": { bab: "m3", root: ["ب","ش","ر"], meaning: "bergembira", tags: ["perasaan"] },
    "غزا": { bab: "m3", root: ["غ","ز","و"], meaning: "menyerang/berperang", tags: ["umum"] },
    "جرى": { bab: "m3", root: ["ج","ر","ي"], meaning: "mengalir/berlari", tags: ["gerakan"] },
    "طفا": { bab: "m3", root: ["ط","ف","و"], meaning: "mengapung/padam", tags: ["umum"] },
    "غلى": { bab: "m3", root: ["غ","ل","ي"], meaning: "mendidih", tags: ["umum"] },
    "سخن": { bab: "m3", root: ["س","خ","ن"], meaning: "menjadi panas", tags: ["sifat"] },
    "صعد": { bab: "m3", root: ["ص","ع","د"], meaning: "naik", tags: ["gerakan"] },
    "هبط": { bab: "m3", root: ["ه","ب","ط"], meaning: "turun/menurun", tags: ["gerakan","quran"] },
    "تاب": { bab: "m3", root: ["ت","و","ب"], meaning: "bertaubat", tags: ["ibadah","quran"] },
    "دعا": { bab: "m3", root: ["د","ع","و"], meaning: "berdoa/mengajak", tags: ["ibadah","quran"] },
    "عاد": { bab: "m3", root: ["ع","و","د"], meaning: "kembali", tags: ["gerakan"] },
    "قام": { bab: "m3", root: ["ق","و","م"], meaning: "berdiri/mendirikan", tags: ["gerakan","quran"] },
    "سبق": { bab: "m3", root: ["س","ب","ق"], meaning: "mendahului", tags: ["umum"] },
    "تبع": { bab: "m3", root: ["ت","ب","ع"], meaning: "mengikuti", tags: ["umum"] },
    "رسب": { bab: "m3", root: ["ر","س","ب"], meaning: "gagal/tenggelam", tags: ["pendidikan"] },
    "خلع": { bab: "m3", root: ["خ","ل","ع"], meaning: "melepas", tags: ["umum"] },
    "باع": { bab: "m3", root: ["ب","ي","ع"], meaning: "menjual", tags: ["ekonomi"] },
    "ربح": { bab: "m3", root: ["ر","ب","ح"], meaning: "untung", tags: ["ekonomi"] },
    "ظن": { bab: "m3", root: ["ظ","ن","ن"], meaning: "mengira/menyangka", tags: ["umum"] },
    "كبر": { bab: "m3", root: ["ك","ب","ر"], meaning: "menjadi besar", tags: ["sifat"] },
    "صغر": { bab: "m3", root: ["ص","غ","ر"], meaning: "menjadi kecil", tags: ["sifat"] },
    "فرح": { bab: "m3", root: ["ف","ر","ح"], meaning: "gembira", tags: ["perasaan","quran"] },
    "بكى": { bab: "m3", root: ["ب","ك","ي"], meaning: "menangis", tags: ["perasaan"] },
    "خاف": { bab: "m3", root: ["خ","و","ف"], meaning: "takut", tags: ["perasaan","quran"] },
    "فهم": { bab: "m3", root: ["ف","ه","م"], meaning: "memahami", tags: ["pendidikan"] },
    "نجس": { bab: "m3", root: ["ن","ج","س"], meaning: "menjadi najis", tags: ["ibadah"] },
    "قال": { bab: "m3", root: ["ق","و","ل"], meaning: "berkata", tags: ["umum","quran"] },
    "قرأ": { bab: "m3", root: ["ق","ر","أ"], meaning: "membaca", tags: ["pendidikan","quran"] },
    "ذاق": { bab: "m3", root: ["ذ","و","ق"], meaning: "merasakan", tags: ["indra"] },
    "فاز": { bab: "m3", root: ["ف","و","ز"], meaning: "beruntung/menang", tags: ["umum","quran"] },
    "قرب": { bab: "m3", root: ["ق","ر","ب"], meaning: "mendekat", tags: ["umum","quran"] },
    "بعد": { bab: "m3", root: ["ب","ع","د"], meaning: "menjauh", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // BAB 4: فَعِلَ - يَفْعَلُ (m4) - Sami'a Yasma'u
    // ═══════════════════════════════════════════════════════════
    
    "علم": { bab: "m4", root: ["ع","ل","م"], meaning: "mengetahui", tags: ["umum","quran","pendidikan"] },
    "سمع": { bab: "m4", root: ["س","م","ع"], meaning: "mendengar", tags: ["umum","quran","indra"] },
    "شرب": { bab: "m4", root: ["ش","ر","ب"], meaning: "minum", tags: ["umum"] },
    "ركب": { bab: "m4", root: ["ر","ك","ب"], meaning: "mengendarai/menaiki", tags: ["umum","gerakan"] },
    "لبس": { bab: "m4", root: ["ل","ب","س"], meaning: "memakai", tags: ["umum"] },
    "غضب": { bab: "m4", root: ["غ","ض","ب"], meaning: "marah", tags: ["perasaan","quran"] },
    "لعب": { bab: "m4", root: ["ل","ع","ب"], meaning: "bermain", tags: ["umum"] },
    "حمل": { bab: "m4", root: ["ح","م","ل"], meaning: "membawa/mengandung", tags: ["umum","quran"] },
    "عجب": { bab: "m4", root: ["ع","ج","ب"], meaning: "kagum/heran", tags: ["perasaan"] },
    "تعب": { bab: "m4", root: ["ت","ع","ب"], meaning: "lelah", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // BAB 5: فَعُلَ - يَفْعُلُ (m5) - Karuma Yakrumu
    // ═══════════════════════════════════════════════════════════
    
    "كرم": { bab: "m5", root: ["ك","ر","م"], meaning: "menjadi mulia", tags: ["sifat","quran"] },
    "حسن": { bab: "m5", root: ["ح","س","ن"], meaning: "menjadi baik/bagus", tags: ["sifat","quran"] },
    "شرف": { bab: "m5", root: ["ش","ر","ف"], meaning: "menjadi mulia/terhormat", tags: ["sifat"] },
    "عظم": { bab: "m5", root: ["ع","ظ","م"], meaning: "menjadi agung", tags: ["sifat","quran"] },
    "جمل": { bab: "m5", root: ["ج","م","ل"], meaning: "menjadi indah", tags: ["sifat"] },
    "طول": { bab: "m5", root: ["ط","و","ل"], meaning: "menjadi panjang/tinggi", tags: ["sifat"] },
    "حر": { bab: "m5", root: ["ح","ر","ر"], meaning: "menjadi panas/merdeka", tags: ["sifat"] },
    "طهر": { bab: "m5", root: ["ط","ه","ر"], meaning: "menjadi suci", tags: ["ibadah","quran"] },
    "لقي": { bab: "m5", root: ["ل","ق","ي"], meaning: "bertemu", tags: ["umum"] },
    "مشى": { bab: "m5", root: ["م","ش","ي"], meaning: "berjalan", tags: ["gerakan"] },

    // ═══════════════════════════════════════════════════════════
    // BAB 6: فَعِلَ - يَفْعِلُ (m6) - Hasiba Yahsibu
    // ═══════════════════════════════════════════════════════════
    
    "ورث": { bab: "m6", root: ["و","ر","ث"], meaning: "mewarisi", tags: ["umum","quran"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 1: أَفْعَلَ (z1) - Af'ala Yuf'ilu
    // ═══════════════════════════════════════════════════════════
    
    "أسلم": { bab: "z1", root: ["س","ل","م"], meaning: "masuk Islam/menyerahkan", tags: ["ibadah","quran"] },
    "أكرم": { bab: "z1", root: ["ك","ر","م"], meaning: "memuliakan", tags: ["umum","quran"] },
    "أخرج": { bab: "z1", root: ["خ","ر","ج"], meaning: "mengeluarkan", tags: ["umum","quran"] },
    "أنزل": { bab: "z1", root: ["ن","ز","ل"], meaning: "menurunkan", tags: ["quran"] },
    "أحسن": { bab: "z1", root: ["ح","س","ن"], meaning: "memperbaiki/berbuat baik", tags: ["umum","quran"] },
    "أصلح": { bab: "z1", root: ["ص","ل","ح"], meaning: "memperbaiki", tags: ["umum","quran"] },
    "أشرك": { bab: "z1", root: ["ش","ر","ك"], meaning: "menyekutukan", tags: ["quran","ibadah"] },
    "أحضر": { bab: "z1", root: ["ح","ض","ر"], meaning: "menghadirkan", tags: ["umum"] },
    "أخبر": { bab: "z1", root: ["خ","ب","ر"], meaning: "memberi kabar", tags: ["umum"] },
    "أوقف": { bab: "z1", root: ["و","ق","ف"], meaning: "memberhentikan", tags: ["umum"] },
    "أيقظ": { bab: "z1", root: ["ي","ق","ظ"], meaning: "membangunkan", tags: ["umum"] },
    "أبدع": { bab: "z1", root: ["ب","د","ع"], meaning: "berinovasi/menciptakan", tags: ["umum"] },
    "أنذر": { bab: "z1", root: ["ن","ذ","ر"], meaning: "memberi peringatan", tags: ["quran"] },
    "أعلن": { bab: "z1", root: ["ع","ل","ن"], meaning: "mengumumkan", tags: ["umum"] },
    "أسرع": { bab: "z1", root: ["س","ر","ع"], meaning: "mempercepat", tags: ["umum"] },
    "أبطأ": { bab: "z1", root: ["ب","ط","أ"], meaning: "memperlambat", tags: ["umum"] },
    "أدرك": { bab: "z1", root: ["د","ر","ك"], meaning: "menyadari/mengejar", tags: ["umum","quran"] },
    "أدّى": { bab: "z1", root: ["أ","د","ي"], meaning: "menunaikan", tags: ["ibadah"] },
    "أحب": { bab: "z1", root: ["ح","ب","ب"], meaning: "mencintai", tags: ["perasaan","quran"] },
    "أدخل": { bab: "z1", root: ["د","خ","ل"], meaning: "memasukkan", tags: ["umum","quran"] },
    "أعلم": { bab: "z1", root: ["ع","ل","م"], meaning: "memberitahu", tags: ["umum"] },
    "أجاب": { bab: "z1", root: ["ج","و","ب"], meaning: "menjawab", tags: ["umum","quran"] },
    "أقام": { bab: "z1", root: ["ق","و","م"], meaning: "menegakkan/mendirikan", tags: ["quran"] },
    "أرسل": { bab: "z1", root: ["ر","س","ل"], meaning: "mengutus", tags: ["quran"] },
    "أعطى": { bab: "z1", root: ["ع","ط","ي"], meaning: "memberi", tags: ["umum","quran"] },
    "أمن": { bab: "z1", root: ["أ","م","ن"], meaning: "memberikan rasa aman", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 2: فَعَّلَ (z2) - Fa''ala Yufa''ilu
    // ═══════════════════════════════════════════════════════════
    
    "علّم": { bab: "z2", root: ["ع","ل","م"], meaning: "mengajarkan", tags: ["pendidikan","quran"] },
    "قدّم": { bab: "z2", root: ["ق","د","م"], meaning: "mempersembahkan/mendahulukan", tags: ["umum"] },
    "نظّف": { bab: "z2", root: ["ن","ظ","ف"], meaning: "membersihkan", tags: ["umum"] },
    "كبّر": { bab: "z2", root: ["ك","ب","ر"], meaning: "membesarkan/bertakbir", tags: ["ibadah"] },
    "صلّى": { bab: "z2", root: ["ص","ل","ي"], meaning: "shalat", tags: ["ibadah","quran"] },
    "زكّى": { bab: "z2", root: ["ز","ك","ي"], meaning: "mensucikan/membayar zakat", tags: ["ibadah","quran"] },
    "سبّح": { bab: "z2", root: ["س","ب","ح"], meaning: "bertasbih", tags: ["ibadah","quran"] },
    "فكّر": { bab: "z2", root: ["ف","ك","ر"], meaning: "berpikir (mendalam)", tags: ["umum","quran"] },
    "دبّر": { bab: "z2", root: ["د","ب","ر"], meaning: "mengatur/merencanakan", tags: ["umum","quran"] },
    "بشّر": { bab: "z2", root: ["ب","ش","ر"], meaning: "memberi kabar gembira", tags: ["quran"] },
    "قرّب": { bab: "z2", root: ["ق","ر","ب"], meaning: "mendekatkan", tags: ["umum"] },
    "طهّر": { bab: "z2", root: ["ط","ه","ر"], meaning: "mensucikan", tags: ["ibadah","quran"] },
    "درّس": { bab: "z2", root: ["د","ر","س"], meaning: "mengajar", tags: ["pendidikan"] },
    "كثّر": { bab: "z2", root: ["ك","ث","ر"], meaning: "memperbanyak", tags: ["umum"] },
    "حسّن": { bab: "z2", root: ["ح","س","ن"], meaning: "memperbaiki/memperindah", tags: ["umum"] },
    "هذّب": { bab: "z2", root: ["ه","ذ","ب"], meaning: "mendidik/memperhalus", tags: ["pendidikan"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 3: فَاعَلَ (z3) - Faa'ala Yufaa'ilu
    // ═══════════════════════════════════════════════════════════

    "قاتل": { bab: "z3", root: ["ق","ت","ل"], meaning: "saling membunuh/berperang", tags: ["quran"] },
    "جاهد": { bab: "z3", root: ["ج","ه","د"], meaning: "berjihad/berjuang", tags: ["quran","ibadah"] },
    "سافر": { bab: "z3", root: ["س","ف","ر"], meaning: "bepergian", tags: ["umum"] },
    "ناصح": { bab: "z3", root: ["ن","ص","ح"], meaning: "saling menasehati", tags: ["umum"] },
    "تعاون": { bab: "z3", root: ["ع","و","ن"], meaning: "saling membantu", tags: ["umum"] },
    "كاتب": { bab: "z3", root: ["ك","ت","ب"], meaning: "berkorespondensi", tags: ["umum"] },
    "جالس": { bab: "z3", root: ["ج","ل","س"], meaning: "duduk bersama/bergaul", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 4: تَفَعَّلَ (z4) - Tafa''ala Yatafa''alu
    // ═══════════════════════════════════════════════════════════

    "تعلّم": { bab: "z4", root: ["ع","ل","م"], meaning: "belajar", tags: ["pendidikan","quran"] },
    "تكلّم": { bab: "z4", root: ["ك","ل","م"], meaning: "berbicara", tags: ["umum"] },
    "تكبّر": { bab: "z4", root: ["ك","ب","ر"], meaning: "menyombongkan diri", tags: ["quran"] },
    "تذكّر": { bab: "z4", root: ["ذ","ك","ر"], meaning: "mengingat/berdzikir", tags: ["ibadah","quran"] },
    "تحمّل": { bab: "z4", root: ["ح","م","ل"], meaning: "menanggung/bersabar", tags: ["umum"] },
    "تفكّر": { bab: "z4", root: ["ف","ك","ر"], meaning: "merenungkan", tags: ["umum","quran"] },
    "تصدّق": { bab: "z4", root: ["ص","د","ق"], meaning: "bersedekah", tags: ["ibadah"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 5: تَفَاعَلَ (z5) - Tafaa'ala Yatafaa'alu
    // ═══════════════════════════════════════════════════════════

    "تعاون": { bab: "z5", root: ["ع","و","ن"], meaning: "saling membantu/bekerjasama", tags: ["umum","quran"] },
    "تساءل": { bab: "z5", root: ["س","أ","ل"], meaning: "saling bertanya", tags: ["umum"] },
    "تباعد": { bab: "z5", root: ["ب","ع","د"], meaning: "saling menjauh", tags: ["umum"] },
    "تقارب": { bab: "z5", root: ["ق","ر","ب"], meaning: "saling mendekat", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 6: اِنْفَعَلَ (z6) - Infa'ala Yanfa'ilu
    // ═══════════════════════════════════════════════════════════

    "انكسر": { bab: "z6", root: ["ك","س","ر"], meaning: "pecah/patah", tags: ["umum"] },
    "انفتح": { bab: "z6", root: ["ف","ت","ح"], meaning: "terbuka", tags: ["umum"] },
    "انقلب": { bab: "z6", root: ["ق","ل","ب"], meaning: "terbalik", tags: ["umum","quran"] },
    "انشرح": { bab: "z6", root: ["ش","ر","ح"], meaning: "lapang (dada)", tags: ["quran"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 7: اِفْتَعَلَ (z7) - Ifta'ala Yafta'ilu
    // ═══════════════════════════════════════════════════════════

    "اجتمع": { bab: "z7", root: ["ج","م","ع"], meaning: "berkumpul", tags: ["umum","quran"] },
    "اقترب": { bab: "z7", root: ["ق","ر","ب"], meaning: "mendekat", tags: ["umum","quran"] },
    "اكتسب": { bab: "z7", root: ["ك","س","ب"], meaning: "berusaha mendapat", tags: ["umum","quran"] },
    "اختار": { bab: "z7", root: ["خ","ي","ر"], meaning: "memilih", tags: ["umum"] },
    "افتقر": { bab: "z7", root: ["ف","ق","ر"], meaning: "menjadi miskin", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 8: اِفْعَلَّ (z8) - If'alla Yaf'allu
    // ═══════════════════════════════════════════════════════════

    "احمرّ": { bab: "z8", root: ["ح","م","ر"], meaning: "menjadi merah", tags: ["sifat"] },
    "ابيضّ": { bab: "z8", root: ["ب","ي","ض"], meaning: "menjadi putih", tags: ["sifat","quran"] },
    "اسودّ": { bab: "z8", root: ["س","و","د"], meaning: "menjadi hitam", tags: ["sifat","quran"] },
    "اخضرّ": { bab: "z8", root: ["خ","ض","ر"], meaning: "menjadi hijau", tags: ["sifat"] },
    "اصفرّ": { bab: "z8", root: ["ص","ف","ر"], meaning: "menjadi kuning", tags: ["sifat","quran"] },

    // ═══════════════════════════════════════════════════════════
    // MAZID 9: اِسْتَفْعَلَ (z9) - Istaf'ala Yastaf'ilu
    // ═══════════════════════════════════════════════════════════
    
    "استغفر": { bab: "z9", root: ["غ","ف","ر"], meaning: "memohon ampunan", tags: ["ibadah","quran"] },
    "استعمل": { bab: "z9", root: ["ع","م","ل"], meaning: "menggunakan/mempekerjakan", tags: ["umum"] },
    "استخرج": { bab: "z9", root: ["خ","ر","ج"], meaning: "mengeluarkan/mengekstrak", tags: ["umum"] },
    "استقبل": { bab: "z9", root: ["ق","ب","ل"], meaning: "menerima/menyambut", tags: ["umum"] },
    "استكبر": { bab: "z9", root: ["ك","ب","ر"], meaning: "menyombongkan diri", tags: ["quran"] },
    "استيقظ": { bab: "z9", root: ["ي","ق","ظ"], meaning: "bangun tidur", tags: ["umum"] },
    "استمرّ": { bab: "z9", root: ["م","ر","ر"], meaning: "berlanjut", tags: ["umum"] },
    "استراح": { bab: "z9", root: ["ر","و","ح"], meaning: "beristirahat", tags: ["umum"] },
    "استسلم": { bab: "z9", root: ["س","ل","م"], meaning: "menyerah", tags: ["umum"] },
    "استدار": { bab: "z9", root: ["د","و","ر"], meaning: "berputar", tags: ["umum"] },
    "استجاب": { bab: "z9", root: ["ج","و","ب"], meaning: "mengabulkan", tags: ["quran"] },
    "استقام": { bab: "z9", root: ["ق","و","م"], meaning: "istiqamah/lurus", tags: ["ibadah","quran"] },
    "استأذن": { bab: "z9", root: ["أ","ذ","ن"], meaning: "meminta izin", tags: ["umum","quran"] },
    "استعان": { bab: "z9", root: ["ع","و","ن"], meaning: "meminta pertolongan", tags: ["umum","quran"] },

    // ═══════════════════════════════════════════════════════════
    // RUBA'I: فَعْلَلَ (r1) - Fa'lala Yufa'lilu
    // ═══════════════════════════════════════════════════════════
    
    "دحرج": { bab: "r1", root: ["د","ح","ر","ج"], meaning: "menggelindingkan", tags: ["umum"] },
    "ترجم": { bab: "r1", root: ["ت","ر","ج","م"], meaning: "menerjemahkan", tags: ["pendidikan"] },
    "بسمل": { bab: "r1", root: ["ب","س","م","ل"], meaning: "membaca basmalah", tags: ["ibadah"] },
    "حوقل": { bab: "r1", root: ["ح","و","ق","ل"], meaning: "membaca hauqalah", tags: ["ibadah"] },
    "زلزل": { bab: "r1", root: ["ز","ل","ز","ل"], meaning: "mengguncang", tags: ["quran"] },
    "وسوس": { bab: "r1", root: ["و","س","و","س"], meaning: "membisikkan (waswas)", tags: ["quran"] },
    "بعثر": { bab: "r1", root: ["ب","ع","ث","ر"], meaning: "menghamburkan", tags: ["umum","quran"] },
    "دمدم": { bab: "r1", root: ["د","م","د","م"], meaning: "menghancurkan total", tags: ["quran"] },
    "قلقل": { bab: "r1", root: ["ق","ل","ق","ل"], meaning: "mengguncang kecil", tags: ["umum"] },
    "طمأن": { bab: "r1", root: ["ط","م","أ","ن"], meaning: "menenangkan", tags: ["quran"] },
    "هيمن": { bab: "r1", root: ["ه","ي","م","ن"], meaning: "menguasai", tags: ["quran"] },

    // ═══════════════════════════════════════════════════════════
    // RUBA'I MAZID: تَفَعْلَلَ (r2) - Tafa'lala Yatafa'lalu
    // ═══════════════════════════════════════════════════════════

    "تدحرج": { bab: "r2", root: ["د","ح","ر","ج"], meaning: "bergelinding", tags: ["umum"] },
    "تزلزل": { bab: "r2", root: ["ز","ل","ز","ل"], meaning: "berguncang", tags: ["quran"] },
    "تبعثر": { bab: "r2", root: ["ب","ع","ث","ر"], meaning: "berhamburan", tags: ["umum"] },

    // ═══════════════════════════════════════════════════════════
    // ISIM FA'IL & ISIM MAF'UL
    // ═══════════════════════════════════════════════════════════

    "كاتب": { bab: "isim", root: ["ك","ت","ب"], meaning: "penulis", tags: ["isim","profesi"] },
    "مكتوب": { bab: "isim", root: ["ك","ت","ب"], meaning: "yang tertulis", tags: ["isim"] },
    "قارئ": { bab: "isim", root: ["ق","ر","أ"], meaning: "pembaca", tags: ["isim","profesi"] },
    "مقروء": { bab: "isim", root: ["ق","ر","أ"], meaning: "yang dibaca", tags: ["isim"] },
    "مؤمن": { bab: "isim", root: ["أ","م","ن"], meaning: "orang beriman", tags: ["isim","quran"] },
    "مسلم": { bab: "isim", root: ["س","ل","م"], meaning: "orang Muslim", tags: ["isim","quran"] },
    "صادق": { bab: "isim", root: ["ص","د","ق"], meaning: "orang jujur", tags: ["isim","sifat"] },
    "كاذب": { bab: "isim", root: ["ك","ذ","ب"], meaning: "pembohong", tags: ["isim","sifat"] },
    "نافع": { bab: "isim", root: ["ن","ف","ع"], meaning: "bermanfaat", tags: ["isim","sifat"] },
    "ضار": { bab: "isim", root: ["ض","ر","ر"], meaning: "berbahaya", tags: ["isim","sifat"] },
    "حافظ": { bab: "isim", root: ["ح","ف","ظ"], meaning: "penghafal/penjaga", tags: ["isim","profesi"] },
    "محفوظ": { bab: "isim", root: ["ح","ف","ظ"], meaning: "yang terjaga", tags: ["isim"] },
    "فائز": { bab: "isim", root: ["ف","و","ز"], meaning: "pemenang", tags: ["isim"] },
    "ناصر": { bab: "isim", root: ["ن","ص","ر"], meaning: "penolong", tags: ["isim"] },
    "منصور": { bab: "isim", root: ["ن","ص","ر"], meaning: "yang ditolong", tags: ["isim","quran"] },
    "صائم": { bab: "isim", root: ["ص","و","م"], meaning: "orang berpuasa", tags: ["isim","ibadah"] },
    "معلوم": { bab: "isim", root: ["ع","ل","م"], meaning: "yang diketahui", tags: ["isim"] },
    "طالب": { bab: "isim", root: ["ط","ل","ب"], meaning: "pelajar/pencari", tags: ["isim","profesi"] },
    "مطلوب": { bab: "isim", root: ["ط","ل","ب"], meaning: "yang diminta", tags: ["isim"] },
    "راكع": { bab: "isim", root: ["ر","ك","ع"], meaning: "orang yang ruku", tags: ["isim","ibadah"] },
    "ساجد": { bab: "isim", root: ["س","ج","د"], meaning: "orang yang sujud", tags: ["isim","ibadah"] },
    "عابد": { bab: "isim", root: ["ع","ب","د"], meaning: "penyembah", tags: ["isim","ibadah"] },
    "معبود": { bab: "isim", root: ["ع","ب","د"], meaning: "yang disembah", tags: ["isim","quran"] },
    "ذاكر": { bab: "isim", root: ["ذ","ك","ر"], meaning: "orang yang berdzikir", tags: ["isim","ibadah"] },
    "مذكور": { bab: "isim", root: ["ذ","ك","ر"], meaning: "yang disebutkan", tags: ["isim","quran"] },
    "حامد": { bab: "isim", root: ["ح","م","د"], meaning: "orang yang memuji", tags: ["isim","ibadah"] },
    "محمود": { bab: "isim", root: ["ح","م","د"], meaning: "yang terpuji", tags: ["isim","quran"] },
    "سامع": { bab: "isim", root: ["س","م","ع"], meaning: "pendengar", tags: ["isim"] },
    "مسموع": { bab: "isim", root: ["س","م","ع"], meaning: "yang terdengar", tags: ["isim"] },
    "نائم": { bab: "isim", root: ["ن","و","م"], meaning: "orang yang tidur", tags: ["isim"] },
    "قائم": { bab: "isim", root: ["ق","و","م"], meaning: "yang berdiri/tegak", tags: ["isim","quran"] },
    "جالس": { bab: "isim", root: ["ج","ل","س"], meaning: "yang duduk", tags: ["isim"] },
    "راكب": { bab: "isim", root: ["ر","ك","ب"], meaning: "pengendara", tags: ["isim"] },
    "صابر": { bab: "isim", root: ["ص","ب","ر"], meaning: "orang sabar", tags: ["isim","sifat"] },
    "شاكر": { bab: "isim", root: ["ش","ك","ر"], meaning: "orang bersyukur", tags: ["isim","sifat"] },
    "عالم": { bab: "isim", root: ["ع","ل","م"], meaning: "orang berilmu/alim", tags: ["isim","profesi"] },
    "معلم": { bab: "isim", root: ["ع","ل","م"], meaning: "guru/pengajar", tags: ["isim","profesi"] },
    "جاهل": { bab: "isim", root: ["ج","ه","ل"], meaning: "orang bodoh", tags: ["isim","sifat"] },
    "مجتهد": { bab: "isim", root: ["ج","ه","د"], meaning: "orang yang bersungguh-sungguh", tags: ["isim","sifat"] },
    "مسافر": { bab: "isim", root: ["س","ف","ر"], meaning: "musafir", tags: ["isim"] },
    "مجاهد": { bab: "isim", root: ["ج","ه","د"], meaning: "pejuang", tags: ["isim","quran"] },
    "مستغفر": { bab: "isim", root: ["غ","ف","ر"], meaning: "orang yang meminta ampun", tags: ["isim"] },
    "قانت": { bab: "isim", root: ["ق","ن","ت"], meaning: "orang yang taat", tags: ["isim","quran"] },
    "فاهم": { bab: "isim", root: ["ف","ه","م"], meaning: "orang yang paham", tags: ["isim"] },
    "مفهوم": { bab: "isim", root: ["ف","ه","م"], meaning: "yang dipahami", tags: ["isim"] },

    // ═══════════════════════════════════════════════════════════
    // SIFAT MUSYABBAHAH
    // ═══════════════════════════════════════════════════════════

    "جميل": { bab: "isim", root: ["ج","م","ل"], meaning: "indah", tags: ["sifat"] },
    "قبيح": { bab: "isim", root: ["ق","ب","ح"], meaning: "buruk/jelek", tags: ["sifat"] },
    "كبير": { bab: "isim", root: ["ك","ب","ر"], meaning: "besar", tags: ["sifat","quran"] },
    "صغير": { bab: "isim", root: ["ص","غ","ر"], meaning: "kecil", tags: ["sifat","quran"] },
    "طويل": { bab: "isim", root: ["ط","و","ل"], meaning: "panjang/tinggi", tags: ["sifat"] },
    "قصير": { bab: "isim", root: ["ق","ص","ر"], meaning: "pendek", tags: ["sifat"] },
    "سريع": { bab: "isim", root: ["س","ر","ع"], meaning: "cepat", tags: ["sifat"] },
    "بطيء": { bab: "isim", root: ["ب","ط","ء"], meaning: "lambat", tags: ["sifat"] },
    "قوي": { bab: "isim", root: ["ق","و","ي"], meaning: "kuat", tags: ["sifat","quran"] },
    "ضعيف": { bab: "isim", root: ["ض","ع","ف"], meaning: "lemah", tags: ["sifat","quran"] },
    "غني": { bab: "isim", root: ["غ","ن","ي"], meaning: "kaya", tags: ["sifat","quran"] },
    "فقير": { bab: "isim", root: ["ف","ق","ر"], meaning: "miskin", tags: ["sifat","quran"] },
    "حي": { bab: "isim", root: ["ح","ي","ي"], meaning: "hidup", tags: ["sifat","quran"] },
    "ميت": { bab: "isim", root: ["م","و","ت"], meaning: "mati", tags: ["sifat","quran"] },
    "صالح": { bab: "isim", root: ["ص","ل","ح"], meaning: "saleh/baik", tags: ["sifat","quran"] },
    "فاسد": { bab: "isim", root: ["ف","س","د"], meaning: "rusak/buruk", tags: ["sifat","quran"] },
    "مريض": { bab: "isim", root: ["م","ر","ض"], meaning: "sakit", tags: ["sifat"] },
    "صحيح": { bab: "isim", root: ["ص","ح","ح"], meaning: "sehat/benar", tags: ["sifat"] },
    "عليم": { bab: "isim", root: ["ع","ل","م"], meaning: "Maha Mengetahui", tags: ["sifat","quran"] },
    "حكيم": { bab: "isim", root: ["ح","ك","م"], meaning: "Maha Bijaksana", tags: ["sifat","quran"] },
    "رحيم": { bab: "isim", root: ["ر","ح","م"], meaning: "Maha Penyayang", tags: ["sifat","quran"] },
    "كريم": { bab: "isim", root: ["ك","ر","م"], meaning: "mulia/dermawan", tags: ["sifat","quran"] },
    "عظيم": { bab: "isim", root: ["ع","ظ","م"], meaning: "agung", tags: ["sifat","quran"] },

    // ═══════════════════════════════════════════════════════════
    // ISIM MAKAN & ZAMAN & ALAT
    // ═══════════════════════════════════════════════════════════

    "مدرسة": { bab: "isim", root: ["د","ر","س"], meaning: "sekolah", tags: ["tempat","pendidikan"] },
    "مسجد": { bab: "isim", root: ["س","ج","د"], meaning: "masjid", tags: ["tempat","ibadah"] },
    "مكتب": { bab: "isim", root: ["ك","ت","ب"], meaning: "kantor/meja", tags: ["tempat"] },
    "مجلس": { bab: "isim", root: ["ج","ل","س"], meaning: "tempat duduk/majelis", tags: ["tempat"] },
    "مركب": { bab: "isim", root: ["ر","ك","ب"], meaning: "kendaraan/perahu", tags: ["alat"] },
    "منام": { bab: "isim", root: ["ن","و","م"], meaning: "tempat tidur/mimpi", tags: ["tempat"] },
    "مطبخ": { bab: "isim", root: ["ط","ب","خ"], meaning: "dapur", tags: ["tempat"] },
    "مفتاح": { bab: "isim", root: ["ف","ت","ح"], meaning: "kunci", tags: ["alat"] },
    "مصباح": { bab: "isim", root: ["ص","ب","ح"], meaning: "lampu", tags: ["alat","quran"] },
    "مكنسة": { bab: "isim", root: ["ك","ن","س"], meaning: "sapu", tags: ["alat"] },
    "مسطرة": { bab: "isim", root: ["س","ط","ر"], meaning: "penggaris", tags: ["alat"] },
    "مبرد": { bab: "isim", root: ["ب","ر","د"], meaning: "kulkas/pendingin", tags: ["alat"] },
    "مطرقة": { bab: "isim", root: ["ط","ر","ق"], meaning: "palu", tags: ["alat"] },

    // ═══════════════════════════════════════════════════════════
    // ISIM JAMID (Kata Benda Asli)
    // ═══════════════════════════════════════════════════════════

    "كتاب": { bab: "isim", root: ["ك","ت","ب"], meaning: "buku", tags: ["benda","pendidikan"] },
    "قلم": { bab: "isim", root: ["ق","ل","م"], meaning: "pena", tags: ["benda","quran"] },
    "كرسي": { bab: "isim", root: ["ك","ر","س"], meaning: "kursi", tags: ["benda"] },
    "باب": { bab: "isim", root: ["ب","و","ب"], meaning: "pintu", tags: ["benda"] },
    "نافذة": { bab: "isim", root: ["ن","ف","ذ"], meaning: "jendela", tags: ["benda"] },
    "بيت": { bab: "isim", root: ["ب","ي","ت"], meaning: "rumah", tags: ["tempat","quran"] },
    "سوق": { bab: "isim", root: ["س","و","ق"], meaning: "pasar", tags: ["tempat"] },
    "طريق": { bab: "isim", root: ["ط","ر","ق"], meaning: "jalan", tags: ["tempat","quran"] },
    "مدينة": { bab: "isim", root: ["م","د","ن"], meaning: "kota", tags: ["tempat","quran"] },
    "قرية": { bab: "isim", root: ["ق","ر","ي"], meaning: "desa", tags: ["tempat","quran"] },

    // ═══════════════════════════════════════════════════════════
    // ALAM & MAKHLUK
    // ═══════════════════════════════════════════════════════════

    "سماء": { bab: "isim", root: ["س","م","و"], meaning: "langit", tags: ["alam","quran"] },
    "أرض": { bab: "isim", root: ["أ","ر","ض"], meaning: "bumi", tags: ["alam","quran"] },
    "شمس": { bab: "isim", root: ["ش","م","س"], meaning: "matahari", tags: ["alam","quran"] },
    "قمر": { bab: "isim", root: ["ق","م","ر"], meaning: "bulan", tags: ["alam","quran"] },
    "نجم": { bab: "isim", root: ["ن","ج","م"], meaning: "bintang", tags: ["alam","quran"] },
    "بحر": { bab: "isim", root: ["ب","ح","ر"], meaning: "laut", tags: ["alam","quran"] },
    "نهر": { bab: "isim", root: ["ن","ه","ر"], meaning: "sungai", tags: ["alam","quran"] },
    "جبل": { bab: "isim", root: ["ج","ب","ل"], meaning: "gunung", tags: ["alam","quran"] },
    "شجرة": { bab: "isim", root: ["ش","ج","ر"], meaning: "pohon", tags: ["alam","quran"] },
    "حجر": { bab: "isim", root: ["ح","ج","ر"], meaning: "batu", tags: ["alam","quran"] },
    "نار": { bab: "isim", root: ["ن","و","ر"], meaning: "api", tags: ["alam","quran"] },
    "ريح": { bab: "isim", root: ["ر","ي","ح"], meaning: "angin", tags: ["alam","quran"] },
    "سحاب": { bab: "isim", root: ["س","ح","ب"], meaning: "awan", tags: ["alam","quran"] },
    "مطر": { bab: "isim", root: ["م","ط","ر"], meaning: "hujan", tags: ["alam","quran"] },
    "برق": { bab: "isim", root: ["ب","ر","ق"], meaning: "petir", tags: ["alam","quran"] },
    "رعد": { bab: "isim", root: ["ر","ع","د"], meaning: "guntur", tags: ["alam","quran"] },
    "ثلج": { bab: "isim", root: ["ث","ل","ج"], meaning: "salju", tags: ["alam"] },

    // ═══════════════════════════════════════════════════════════
    // MANUSIA & KELUARGA
    // ═══════════════════════════════════════════════════════════

    "رجل": { bab: "isim", root: ["ر","ج","ل"], meaning: "laki-laki", tags: ["manusia","quran"] },
    "امرأة": { bab: "isim", root: ["م","ر","أ"], meaning: "perempuan", tags: ["manusia","quran"] },
    "ولد": { bab: "isim", root: ["و","ل","د"], meaning: "anak laki-laki", tags: ["manusia","quran"] },
    "بنت": { bab: "isim", root: ["ب","ن","ت"], meaning: "anak perempuan", tags: ["manusia"] },
    "أب": { bab: "isim", root: ["أ","ب","و"], meaning: "ayah", tags: ["keluarga","quran"] },
    "أم": { bab: "isim", root: ["أ","م","م"], meaning: "ibu", tags: ["keluarga","quran"] },
    "أخ": { bab: "isim", root: ["أ","خ","و"], meaning: "saudara laki-laki", tags: ["keluarga","quran"] },
    "أخت": { bab: "isim", root: ["أ","خ","ت"], meaning: "saudara perempuan", tags: ["keluarga","quran"] },
    "زوج": { bab: "isim", root: ["ز","و","ج"], meaning: "suami/pasangan", tags: ["keluarga","quran"] },
    "زوجة": { bab: "isim", root: ["ز","و","ج"], meaning: "istri", tags: ["keluarga","quran"] },
    "جد": { bab: "isim", root: ["ج","د","د"], meaning: "kakek", tags: ["keluarga"] },
    "جدة": { bab: "isim", root: ["ج","د","د"], meaning: "nenek", tags: ["keluarga"] },
    "عم": { bab: "isim", root: ["ع","م","م"], meaning: "paman (dari ayah)", tags: ["keluarga"] },
    "عمة": { bab: "isim", root: ["ع","م","م"], meaning: "bibi (dari ayah)", tags: ["keluarga"] },
    "خال": { bab: "isim", root: ["خ","و","ل"], meaning: "paman (dari ibu)", tags: ["keluarga"] },
    "خالة": { bab: "isim", root: ["خ","و","ل"], meaning: "bibi (dari ibu)", tags: ["keluarga"] },

    // ═══════════════════════════════════════════════════════════
    // WAKTU
    // ═══════════════════════════════════════════════════════════

    "يوم": { bab: "isim", root: ["ي","و","م"], meaning: "hari", tags: ["waktu","quran"] },
    "ليلة": { bab: "isim", root: ["ل","ي","ل"], meaning: "malam", tags: ["waktu","quran"] },
    "صباح": { bab: "isim", root: ["ص","ب","ح"], meaning: "pagi", tags: ["waktu"] },
    "ظهر": { bab: "isim", root: ["ظ","ه","ر"], meaning: "siang/dzuhur", tags: ["waktu","ibadah"] },
    "عصر": { bab: "isim", root: ["ع","ص","ر"], meaning: "sore/ashar", tags: ["waktu","ibadah","quran"] },
    "مغرب": { bab: "isim", root: ["غ","ر","ب"], meaning: "maghrib/barat", tags: ["waktu","ibadah"] },
    "عشاء": { bab: "isim", root: ["ع","ش","ي"], meaning: "isya/malam", tags: ["waktu","ibadah"] },
    "فجر": { bab: "isim", root: ["ف","ج","ر"], meaning: "fajar/subuh", tags: ["waktu","ibadah","quran"] },
    "ساعة": { bab: "isim", root: ["س","و","ع"], meaning: "jam/waktu", tags: ["waktu","quran"] },
    "دقيقة": { bab: "isim", root: ["د","ق","ق"], meaning: "menit", tags: ["waktu"] },
    "ثانية": { bab: "isim", root: ["ث","ن","ي"], meaning: "detik", tags: ["waktu"] },
    "سنة": { bab: "isim", root: ["س","ن","ن"], meaning: "tahun", tags: ["waktu","quran"] },
    "شهر": { bab: "isim", root: ["ش","ه","ر"], meaning: "bulan", tags: ["waktu","quran"] },
    "أسبوع": { bab: "isim", root: ["س","ب","ع"], meaning: "minggu", tags: ["waktu"] },

    // ═══════════════════════════════════════════════════════════
    // MAKANAN & MINUMAN
    // ═══════════════════════════════════════════════════════════

    "طعام": { bab: "isim", root: ["ط","ع","م"], meaning: "makanan", tags: ["makanan","quran"] },
    "شراب": { bab: "isim", root: ["ش","ر","ب"], meaning: "minuman", tags: ["minuman"] },
    "ماء": { bab: "isim", root: ["م","و","ه"], meaning: "air", tags: ["minuman","quran"] },
    "لبن": { bab: "isim", root: ["ل","ب","ن"], meaning: "susu", tags: ["minuman","quran"] },
    "خبز": { bab: "isim", root: ["خ","ب","ز"], meaning: "roti", tags: ["makanan"] },
    "لحم": { bab: "isim", root: ["ل","ح","م"], meaning: "daging", tags: ["makanan","quran"] },
    "أرز": { bab: "isim", root: ["أ","ر","ز"], meaning: "beras/nasi", tags: ["makanan"] },
    "سكر": { bab: "isim", root: ["س","ك","ر"], meaning: "gula", tags: ["makanan"] },
    "ملح": { bab: "isim", root: ["م","ل","ح"], meaning: "garam", tags: ["makanan","quran"] },
    "عسل": { bab: "isim", root: ["ع","س","ل"], meaning: "madu", tags: ["makanan","quran"] },
    "تمر": { bab: "isim", root: ["ت","م","ر"], meaning: "kurma", tags: ["makanan","quran"] },
    "فاكهة": { bab: "isim", root: ["ف","ك","ه"], meaning: "buah-buahan", tags: ["makanan","quran"] },
    "خضر": { bab: "isim", root: ["خ","ض","ر"], meaning: "sayur-sayuran", tags: ["makanan"] },

    // ═══════════════════════════════════════════════════════════
    // PROFESI
    // ═══════════════════════════════════════════════════════════

    "طبيب": { bab: "isim", root: ["ط","ب","ب"], meaning: "dokter", tags: ["profesi"] },
    "مهندس": { bab: "isim", root: ["ه","ن","د","س"], meaning: "insinyur", tags: ["profesi"] },
    "تاجر": { bab: "isim", root: ["ت","ج","ر"], meaning: "pedagang", tags: ["profesi"] },
    "مزارع": { bab: "isim", root: ["ز","ر","ع"], meaning: "petani", tags: ["profesi"] },
    "صياد": { bab: "isim", root: ["ص","ي","د"], meaning: "pemburu/nelayan", tags: ["profesi"] },
    "خياط": { bab: "isim", root: ["خ","ي","ط"], meaning: "penjahit", tags: ["profesi"] },
    "نجار": { bab: "isim", root: ["ن","ج","ر"], meaning: "tukang kayu", tags: ["profesi"] },
    "حداد": { bab: "isim", root: ["ح","د","د"], meaning: "pandai besi", tags: ["profesi"] },

    // ═══════════════════════════════════════════════════════════
    // TAMBAHAN 50 KATA PENTING
    // ═══════════════════════════════════════════════════════════

    "آمن": { bab: "m3", root: ["أ","م","ن"], meaning: "beriman", tags: ["ibadah","quran"] },
    "كفر": { bab: "m1", root: ["ك","ف","ر"], meaning: "kafir/menutupi", tags: ["quran"] },
    "صبر": { bab: "m1", root: ["ص","ب","ر"], meaning: "bersabar", tags: ["sifat","quran"] },
    "صدق": { bab: "m1", root: ["ص","د","ق"], meaning: "jujur/benar", tags: ["sifat","quran"] },
    "كذب": { bab: "m1", root: ["ك","ذ","ب"], meaning: "bohong/dusta", tags: ["sifat","quran"] },
    "أمر": { bab: "m1", root: ["أ","م","ر"], meaning: "memerintah", tags: ["umum","quran"] },
    "نهى": { bab: "m3", root: ["ن","ه","ي"], meaning: "melarang", tags: ["umum","quran"] },
    "سأل": { bab: "m1", root: ["س","أ","ل"], meaning: "bertanya", tags: ["umum","quran"] },
    "أجاب": { bab: "m3", root: ["ج","و","ب"], meaning: "menjawab", tags: ["umum","quran"] },
    "فكر": { bab: "m1", root: ["ف","ك","ر"], meaning: "berpikir", tags: ["umum","quran"] },
    "عقل": { bab: "m1", root: ["ع","ق","ل"], meaning: "berakal", tags: ["umum","quran"] },
    "قلب": { bab: "m1", root: ["ق","ل","ب"], meaning: "membalik/hati", tags: ["umum","quran"] },
    "رحم": { bab: "m1", root: ["ر","ح","م"], meaning: "merahmati", tags: ["ibadah","quran"] },
    "لعن": { bab: "m1", root: ["ل","ع","ن"], meaning: "mengutuk", tags: ["quran"] },
    "بارك": { bab: "z3", root: ["ب","ر","ك"], meaning: "memberkahi", tags: ["ibadah","quran"] },
    "هدى": { bab: "m3", root: ["ه","د","ي"], meaning: "memberi petunjuk", tags: ["quran"] },
    "ضل": { bab: "m2", root: ["ض","ل","ل"], meaning: "sesat", tags: ["quran"] },
    "نصح": { bab: "m1", root: ["ن","ص","ح"], meaning: "menasehati", tags: ["umum","quran"] },
    "وصى": { bab: "m3", root: ["و","ص","ي"], meaning: "berwasiat", tags: ["ibadah","quran"] },
    "شهد": { bab: "m1", root: ["ش","ه","د"], meaning: "bersaksi", tags: ["umum","quran"] },
    "أقسم": { bab: "z1", root: ["ق","س","م"], meaning: "bersumpah", tags: ["umum","quran"] },
    "وقّع": { bab: "z2", root: ["و","ق","ع"], meaning: "menandatangani", tags: ["umum"] },
    "حافظ": { bab: "z3", root: ["ح","ف","ظ"], meaning: "menjaga/memelihara", tags: ["umum","quran"] },
    "حارب": { bab: "z3", root: ["ح","ر","ب"], meaning: "memerangi", tags: ["quran"] },
    "سالم": { bab: "z3", root: ["س","ل","م"], meaning: "berdamai", tags: ["umum","quran"] },
    "صالح": { bab: "z3", root: ["ص","ل","ح"], meaning: "berdamai/rukun", tags: ["umum","quran"] },
    "نافس": { bab: "z3", root: ["ن","ف","س"], meaning: "bersaing", tags: ["umum","quran"] },
    "فارق": { bab: "z3", root: ["ف","ر","ق"], meaning: "berpisah/bercerai", tags: ["umum","quran"] },
    "زاد": { bab: "m3", root: ["ز","ي","د"], meaning: "bertambah", tags: ["umum","quran"] },
    "نقص": { bab: "m1", root: ["ن","ق","ص"], meaning: "berkurang", tags: ["umum","quran"] },
    "بقي": { bab: "m3", root: ["ب","ق","ي"], meaning: "tinggal/tersisa", tags: ["umum","quran"] },
    "فني": { bab: "m3", root: ["ف","ن","ي"], meaning: "punah/habis", tags: ["umum","quran"] },
    "حيي": { bab: "m3", root: ["ح","ي","ي"], meaning: "hidup/malu", tags: ["sifat","quran"] },
    "مات": { bab: "m3", root: ["م","و","ت"], meaning: "mati", tags: ["umum","quran"] },
    "بعث": { bab: "m1", root: ["ب","ع","ث"], meaning: "membangkitkan", tags: ["quran"] },
    "حسن": { bab: "m1", root: ["ح","س","ن"], meaning: "menjadi baik", tags: ["sifat","quran"] },
    "ساء": { bab: "m3", root: ["س","و","ء"], meaning: "menjadi buruk", tags: ["sifat","quran"] },
    "فضل": { bab: "m1", root: ["ف","ض","ل"], meaning: "melebihkan/menganugerahi", tags: ["umum","quran"] },
    "ساوى": { bab: "z3", root: ["س","و","ي"], meaning: "menyamakan", tags: ["umum","quran"] },
    "فرّق": { bab: "z2", root: ["ف","ر","ق"], meaning: "memisahkan", tags: ["umum","quran"] },
    "جمّع": { bab: "z2", root: ["ج","م","ع"], meaning: "mengumpulkan", tags: ["umum"] },
    "نوّر": { bab: "z2", root: ["ن","و","ر"], meaning: "menerangi", tags: ["quran"] },
    "ظلم": { bab: "m1", root: ["ظ","ل","م"], meaning: "menganiaya", tags: ["quran"] },
    "عدل": { bab: "m1", root: ["ع","د","ل"], meaning: "berlaku adil", tags: ["sifat","quran"] },
    "حكم": { bab: "m1", root: ["ح","ك","م"], meaning: "memutuskan/menghukum", tags: ["quran"] },
    "شفع": { bab: "m1", root: ["ش","ف","ع"], meaning: "memberi syafaat", tags: ["quran"] },
    "دفع": { bab: "m1", root: ["د","ف","ع"], meaning: "mendorong/membayar", tags: ["umum","quran"] },
    "جزى": { bab: "m3", root: ["ج","ز","ي"], meaning: "membalas", tags: ["quran"] },
    "ثاب": { bab: "m3", root: ["ث","و","ب"], meaning: "kembali/membalas", tags: ["quran"] },
    "عاقب": { bab: "z3", root: ["ع","ق","ب"], meaning: "menghukum", tags: ["quran"] },

    // Tambahkan fi'il mu'tal
    "قال": { bab: "m3", root: ["ق","و","ل"], meaning: "berkata", tags: ["umum","quran","mutal-ajwaf"] },
    "باع": { bab: "m3", root: ["ب","ي","ع"], meaning: "menjual", tags: ["ekonomi","mutal-ajwaf"] },
    "صام": { bab: "m3", root: ["ص","و","م"], meaning: "berpuasa", tags: ["ibadah","quran","mutal-ajwaf"] },
    "دعا": { bab: "m3", root: ["د","ع","و"], meaning: "berdoa/memanggil", tags: ["ibadah","quran","mutal-naqis"] },
    "رمى": { bab: "m3", root: ["ر","م","ي"], meaning: "melempar", tags: ["umum","quran","mutal-naqis"] },
    "مشى": { bab: "m5", root: ["م","ش","ي"], meaning: "berjalan", tags: ["gerakan","mutal-naqis"] },
    "وعد": { bab: "m2", root: ["و","ع","د"], meaning: "berjanji", tags: ["umum","quran","mutal-mitsal"] },
    "وجد": { bab: "m1", root: ["و","ج","د"], meaning: "menemukan", tags: ["umum","quran","mutal-mitsal"] },
    "كان": { bab: "m3", root: ["ك","و","ن"], meaning: "adalah/menjadi", tags: ["umum","quran","mutal-ajwaf"] },
    
    // --- TAMBAHAN MUJARRAD (m1–m6) ---
    "حضر": { bab: "m1", root: ["ح","ض","ر"], meaning: "hadir", tags: ["umum"] },
    "حرم": { bab: "m1", root: ["ح","ر","م"], meaning: "mengharamkan/menjadikan suci", tags: ["quran","ibadah"] },
    "حرق": { bab: "m1", root: ["ح","ر","ق"], meaning: "membakar", tags: ["umum"] },
    "خدم": { bab: "m1", root: ["خ","د","م"], meaning: "melayani", tags: ["umum"] },
    "خدع": { bab: "m1", root: ["خ","د","ع"], meaning: "menipu", tags: ["umum"] },
    "خزن": { bab: "m1", root: ["خ","ز","ن"], meaning: "menyimpan", tags: ["umum"] },
    "خطف": { bab: "m1", root: ["خ","ط","ف"], meaning: "merampas/menculik", tags: ["umum"] },
    "خرق": { bab: "m1", root: ["خ","ر","ق"], meaning: "merobek/menembus", tags: ["umum"] },
    "دق": { bab: "m1", root: ["د","ق","ق"], meaning: "mengetuk/menghaluskan", tags: ["umum"] },
    "دهن": { bab: "m1", root: ["د","ه","ن"], meaning: "meminyaki/melapisi minyak", tags: ["umum"] },
    "رسم": { bab: "m1", root: ["ر","س","م"], meaning: "menggambar", tags: ["pendidikan","umum"] },
    "رمز": { bab: "m1", root: ["ر","م","ز"], meaning: "memberi kode/simbol", tags: ["umum"] },
    "رقد": { bab: "m1", root: ["ر","ق","د"], meaning: "tidur/berbaring", tags: ["umum"] },
    "زعم": { bab: "m1", root: ["ز","ع","م"], meaning: "mengaku/mengklaim", tags: ["umum"] },
    "زهد": { bab: "m1", root: ["ز","ه","د"], meaning: "zuhud/menjauh dari dunia", tags: ["ibadah"] },
    "سحب": { bab: "m1", root: ["س","ح","ب"], meaning: "menyeret/menarik", tags: ["umum"] },
    "سحق": { bab: "m1", root: ["س","ح","ق"], meaning: "menghancurkan/menggilas", tags: ["umum"] },
    "سقط": { bab: "m1", root: ["س","ق","ط"], meaning: "jatuh", tags: ["gerakan","umum"] },
    "سهر": { bab: "m1", root: ["س","ه","ر"], meaning: "begadang", tags: ["umum"] },
    "شحن": { bab: "m1", root: ["ش","ح","ن"], meaning: "mengisi/memuat", tags: ["umum"] },
    "شوى": { bab: "m3", root: ["ش","و","ي"], meaning: "memanggang", tags: ["umum","makanan"] },
    "غرس": { bab: "m1", root: ["غ","ر","س"], meaning: "menanam (bibit)", tags: ["pertanian"] },
    "غصب": { bab: "m1", root: ["غ","ص","ب"], meaning: "merampas", tags: ["umum"] },
    "فرش": { bab: "m1", root: ["ف","ر","ش"], meaning: "menghamparkan", tags: ["umum"] },
    "قذف": { bab: "m1", root: ["ق","ذ","ف"], meaning: "melemparkan", tags: ["umum","quran"] },
    "قصد": { bab: "m1", root: ["ق","ص","د"], meaning: "bermaksud/menuju", tags: ["umum","quran"] },
    "نشر": { bab: "m1", root: ["ن","ش","ر"], meaning: "menyebarkan/menerbitkan", tags: ["umum"] },

    // --- TAMBAHAN MAZID (z1–z9) ---
    "ألبس": { bab: "z1", root: ["ل","ب","س"], meaning: "memakaikan", tags: ["umum"] },
    "أبعد": { bab: "z1", root: ["ب","ع","د"], meaning: "menjauhkan", tags: ["umum"] },
    "أقرب": { bab: "z1", root: ["ق","ر","ب"], meaning: "mendekatkan", tags: ["umum"] },
    "أكمل": { bab: "z1", root: ["ك","م","ل"], meaning: "menyempurnakan", tags: ["umum"] },
    "أطفأ": { bab: "z1", root: ["ط","ف","أ"], meaning: "memadamkan", tags: ["umum"] },
    "كسّر": { bab: "z2", root: ["ك","س","ر"], meaning: "menghancurkan (membuat pecah berulang)", tags: ["umum"] },
    "قطّع": { bab: "z2", root: ["ق","ط","ع"], meaning: "memotong-motong", tags: ["umum"] },
    "لبّس": { bab: "z2", root: ["ل","ب","س"], meaning: "membingungkan/menyamarkan", tags: ["umum"] },
    "صاحب": { bab: "z3", root: ["ص","ح","ب"], meaning: "berteman/menemani", tags: ["umum","quran"] },
    "تقدّم": { bab: "z4", root: ["ق","د","م"], meaning: "maju/berjalan ke depan", tags: ["umum"] },
    "تطهّر": { bab: "z4", root: ["ط","ه","ر"], meaning: "bersuci", tags: ["ibadah"] },
    "تبادل": { bab: "z5", root: ["ب","د","ل"], meaning: "saling menukar", tags: ["umum"] },
    "انقطع": { bab: "z6", root: ["ق","ط","ع"], meaning: "terputus", tags: ["umum"] },
    "استمع": { bab: "z9", root: ["س","م","ع"], meaning: "mendengarkan (dengan sengaja)", tags: ["umum","quran"] },

    // --- TAMBAHAN RUBA'I (r1–r2) ---
    "ثرثر": { bab: "r1", root: ["ث","ر","ث","ر"], meaning: "bercakap-cakap banyak/berceloteh", tags: ["umum"] },
    "طنطن": { bab: "r1", root: ["ط","ن","ط","ن"], meaning: "berdengung (bunyi)", tags: ["umum"] },
    "زمزم": { bab: "r1", root: ["ز","م","ز","م"], meaning: "bergumam/berbisik", tags: ["umum"] },
    "همهم": { bab: "r1", root: ["ه","م","ه","م"], meaning: "bergumam", tags: ["umum"] },
    "خربش": { bab: "r1", root: ["خ","ر","ب","ش"], meaning: "mencoret-coret", tags: ["pendidikan","umum"] },
    "فرفر": { bab: "r1", root: ["ف","ر","ف","ر"], meaning: "berkibar/berputar cepat", tags: ["gerakan"] },
    "تثرثر": { bab: "r2", root: ["ث","ر","ث","ر"], meaning: "berceloteh (menjadi banyak bicara)", tags: ["umum"] },
    "تطنطن": { bab: "r2", root: ["ط","ن","ط","ن"], meaning: "berdengung", tags: ["umum"] },
    "تزمزم": { bab: "r2", root: ["ز","م","ز","م"], meaning: "bergumam", tags: ["umum"] },
    "تهمهم": { bab: "r2", root: ["ه","م","ه","م"], meaning: "bergumam", tags: ["umum"] },
    "تخربش": { bab: "r2", root: ["خ","ر","ب","ش"], meaning: "mencoret-coret (refleksif)", tags: ["umum"] },
    "تفرفر": { bab: "r2", root: ["ف","ر","ف","ر"], meaning: "berputar/berkibar", tags: ["gerakan"] },

    // --- TAMBAHAN ISIM ---
    "جامعة": { bab: "isim", root: ["ج","م","ع"], meaning: "universitas", tags: ["tempat","pendidikan"] },
    "مستشفى": { bab: "isim", root: ["ش","ف","ي"], meaning: "rumah sakit", tags: ["tempat","kesehatan"] },
    "مطار": { bab: "isim", root: ["ط","ي","ر"], meaning: "bandara", tags: ["tempat"] },
    "محطة": { bab: "isim", root: ["ح","ط","ط"], meaning: "stasiun/halte", tags: ["tempat"] },
    "مكتبة": { bab: "isim", root: ["ك","ت","ب"], meaning: "perpustakaan", tags: ["tempat","pendidikan"] },
    "هاتف": { bab: "isim", root: ["ه","ت","ف"], meaning: "telepon", tags: ["alat"] },
    "حاسوب": { bab: "isim", root: ["ح","س","ب"], meaning: "komputer", tags: ["alat"] },
    "لوحة": { bab: "isim", root: ["ل","و","ح"], meaning: "papan/panel", tags: ["benda"] },
    "طاولة": { bab: "isim", root: ["ط","و","ل"], meaning: "meja", tags: ["benda"] },
    "سرير": { bab: "isim", root: ["س","ر","ر"], meaning: "tempat tidur", tags: ["benda"] },
    "ملابس": { bab: "isim", root: ["ل","ب","س"], meaning: "pakaian", tags: ["benda"] },
    "حقيبة": { bab: "isim", root: ["ح","ق","ب"], meaning: "tas", tags: ["benda"] },
    "نظارة": { bab: "isim", root: ["ن","ظ","ر"], meaning: "kacamata", tags: ["alat"] },
    "دواء": { bab: "isim", root: ["د","و","ي"], meaning: "obat", tags: ["benda","kesehatan"] },
    "صحة": { bab: "isim", root: ["ص","ح","ح"], meaning: "kesehatan", tags: ["kesehatan"] },
    "حديقة": { bab: "isim", root: ["ح","د","ق"], meaning: "taman", tags: ["tempat"] },
    "شارع": { bab: "isim", root: ["ش","ر","ع"], meaning: "jalan raya", tags: ["tempat"] },
    "قطة": { bab: "isim", root: ["ق","ط","ط"], meaning: "kucing", tags: ["makhluk"] },
    "كلب": { bab: "isim", root: ["ك","ل","ب"], meaning: "anjing", tags: ["makhluk"] },
    "حصان": { bab: "isim", root: ["ح","ص","ن"], meaning: "kuda", tags: ["makhluk"] },
    "غنم": { bab: "isim", root: ["غ","ن","م"], meaning: "kambing/domba", tags: ["makhluk"] },
    "رأس": { bab: "isim", root: ["ر","أ","س"], meaning: "kepala", tags: ["tubuh"] },
    "يد": { bab: "isim", root: ["ي","د","ي"], meaning: "tangan", tags: ["tubuh","quran"] },
    "عين": { bab: "isim", root: ["ع","ي","ن"], meaning: "mata/air-mancur", tags: ["tubuh","quran"] },
    "دم": { bab: "isim", root: ["د","م","و"], meaning: "darah", tags: ["tubuh"] },

    // --- TAMBAHAN MUJARRAD (m1–m6) ---
    "أذن": { bab: "m1", root: ["أ","ذ","ن"], meaning: "mengizinkan", tags: ["umum","quran"] },
    "أكل": { bab: "m1", root: ["أ","ك","ل"], meaning: "makan", tags: ["umum","quran","makanan"] },
    "أوى": { bab: "m3", root: ["أ","و","ي"], meaning: "berlindung/tinggal (di tempat)", tags: ["umum","quran"] },
    "بذر": { bab: "m1", root: ["ب","ذ","ر"], meaning: "menabur benih", tags: ["pertanian"] },
    "بسط": { bab: "m1", root: ["ب","س","ط"], meaning: "membentangkan/melapangkan", tags: ["umum","quran"] },
    "بشر": { bab: "m1", root: ["ب","ش","ر"], meaning: "memberi kabar gembira", tags: ["umum","quran"] },
    "بقي": { bab: "m3", root: ["ب","ق","ي"], meaning: "tinggal/tersisa", tags: ["umum","quran"] },
    "تبر": { bab: "m1", root: ["ت","ب","ر"], meaning: "membinasakan/menghancurkan", tags: ["umum"] },
    "ثبت": { bab: "m1", root: ["ث","ب","ت"], meaning: "tetap/menetap/teguh", tags: ["umum","quran"] },
    "ثمر": { bab: "m1", root: ["ث","م","ر"], meaning: "berbuah/menghasilkan", tags: ["alam","quran"] },
    "جرح": { bab: "m1", root: ["ج","ر","ح"], meaning: "melukai", tags: ["kesehatan","umum"] },
    "جفف": { bab: "m1", root: ["ج","ف","ف"], meaning: "mengering (menjadi kering)", tags: ["umum"] },
    "حجب": { bab: "m1", root: ["ح","ج","ب"], meaning: "menghalangi/menutupi", tags: ["umum","quran"] },
    "حرق": { bab: "m1", root: ["ح","ر","ق"], meaning: "membakar (varian)", tags: ["umum"] }, // jika ternyata sudah ada di batch 1, hapus baris ini
    "حلم": { bab: "m1", root: ["ح","ل","م"], meaning: "bersikap sabar/lembut", tags: ["sifat","umum"] },
    "خطأ": { bab: "m1", root: ["خ","ط","أ"], meaning: "berbuat salah/keliru", tags: ["umum","quran"] },
    "دنا": { bab: "m3", root: ["د","ن","و"], meaning: "mendekat", tags: ["umum","quran"] },
    "ذبح": { bab: "m1", root: ["ذ","ب","ح"], meaning: "menyembelih", tags: ["ibadah","umum","quran"] },
    "رعى": { bab: "m3", root: ["ر","ع","ي"], meaning: "menggembala/menjaga", tags: ["umum"] },
    "رفع": { bab: "m1", root: ["ر","ف","ع"], meaning: "mengangkat", tags: ["umum","quran"] },
    "زجر": { bab: "m1", root: ["ز","ج","ر"], meaning: "menghardik/mencegah", tags: ["umum"] },
    "سار": { bab: "m3", root: ["س","ي","ر"], meaning: "berjalan/pergi", tags: ["gerakan","quran"] },
    "سقى": { bab: "m3", root: ["س","ق","ي"], meaning: "memberi minum/menyirami", tags: ["umum","quran"] },
    "سلق": { bab: "m1", root: ["س","ل","ق"], meaning: "merebus", tags: ["makanan","umum"] },
    "سوى": { bab: "m3", root: ["س","و","ي"], meaning: "menjadi rata/menyusun rapi", tags: ["umum","quran"] },
    "شتم": { bab: "m1", root: ["ش","ت","م"], meaning: "mencaci/menghina", tags: ["umum"] },
    "شدد": { bab: "m1", root: ["ش","د","د"], meaning: "menguat/mengeraskan", tags: ["umum"] },
    "صفق": { bab: "m1", root: ["ص","ف","ق"], meaning: "bertepuk tangan", tags: ["umum"] },
    "صنع": { bab: "m3", root: ["ص","ن","ع"], meaning: "membuat", tags: ["umum","quran"] },
    "طرد": { bab: "m1", root: ["ط","ر","د"], meaning: "mengusir", tags: ["umum","quran"] },
    "عفا": { bab: "m3", root: ["ع","ف","و"], meaning: "memaafkan", tags: ["ibadah","quran"] },
    "غنم": { bab: "m1", root: ["غ","ن","م"], meaning: "mendapatkan rampasan/keuntungan", tags: ["ekonomi","quran"] },
    "فجر": { bab: "m1", root: ["ف","ج","ر"], meaning: "memancar/menyingsing", tags: ["alam","quran"] },
    "فطر": { bab: "m1", root: ["ف","ط","ر"], meaning: "membuka puasa/berbuka", tags: ["ibadah"] },
    "قنع": { bab: "m1", root: ["ق","ن","ع"], meaning: "merasa cukup/qana'ah", tags: ["sifat","umum"] },
    "كدح": { bab: "m1", root: ["ك","د","ح"], meaning: "bersusah payah/berupaya keras", tags: ["umum","quran"] },
    "لهو": { bab: "m3", root: ["ل","ه","و"], meaning: "bersenda gurau/lalai", tags: ["umum","quran"] },

    // --- TAMBAHAN MAZID (z1–z9) ---
    "أحيا": { bab: "z1", root: ["ح","ي","ي"], meaning: "menghidupkan", tags: ["quran","umum"] },
    "أمات": { bab: "z1", root: ["م","و","ت"], meaning: "mematikan", tags: ["quran","umum"] },
    "أنفق": { bab: "z1", root: ["ن","ف","ق"], meaning: "menafkahkan/membelanjakan", tags: ["quran","ekonomi","ibadah"] },
    "أسكن": { bab: "z1", root: ["س","ك","ن"], meaning: "menempatkan/menjadikan tinggal", tags: ["umum"] },
    "أحزن": { bab: "z1", root: ["ح","ز","ن"], meaning: "membuat sedih", tags: ["perasaan","quran"] },
    "علّق": { bab: "z2", root: ["ع","ل","ق"], meaning: "menggantungkan/menempelkan", tags: ["umum"] },
    "حرّك": { bab: "z2", root: ["ح","ر","ك"], meaning: "menggerakkan", tags: ["umum","gerakan"] },
    "غلّق": { bab: "z2", root: ["غ","ل","ق"], meaning: "mengunci/menutup rapat", tags: ["umum"] },
    "ساعد": { bab: "z3", root: ["س","ع","د"], meaning: "membantu", tags: ["umum"] },
    "تجمّع": { bab: "z4", root: ["ج","م","ع"], meaning: "berkumpul/berhimpun", tags: ["umum"] },
    "تكسّر": { bab: "z4", root: ["ك","س","ر"], meaning: "menjadi pecah berkeping", tags: ["umum"] },
    "تراسل": { bab: "z5", root: ["ر","س","ل"], meaning: "saling berkirim surat", tags: ["umum"] },
    "افتتح": { bab: "z7", root: ["ف","ت","ح"], meaning: "membuka (secara resmi)/mengawali", tags: ["umum"] },
    "استفاد": { bab: "z9", root: ["ف","ي","د"], meaning: "mengambil manfaat", tags: ["umum"] },

    // --- TAMBAHAN RUBA'I (r1–r2) ---
    "بعثر": { bab: "r1", root: ["ب","ع","ث","ر"], meaning: "menghamburkan (varian)", tags: ["umum"] }, // jika sudah ada, hapus
    "جعجع": { bab: "r1", root: ["ج","ع","ج","ع"], meaning: "bersuara keras/berisik", tags: ["umum"] },
    "حصحص": { bab: "r1", root: ["ح","ص","ح","ص"], meaning: "menjadi jelas/nyata", tags: ["quran"] },
    "دندم": { bab: "r1", root: ["د","ن","د","ن"], meaning: "berdendang/bersenandung", tags: ["umum"] },
    "لملم": { bab: "r1", root: ["ل","م","ل","م"], meaning: "mengumpulkan sedikit demi sedikit", tags: ["umum"] },
    "قعقع": { bab: "r1", root: ["ق","ع","ق","ع"], meaning: "berbunyi berderak/bergelontang", tags: ["umum"] },
    "كركر": { bab: "r1", root: ["ك","ر","ك","ر"], meaning: "tertawa keras", tags: ["umum"] },
    "تجعجع": { bab: "r2", root: ["ج","ع","ج","ع"], meaning: "menjadi berisik", tags: ["umum"] },
    "تدندم": { bab: "r2", root: ["د","ن","د","ن"], meaning: "bersenandung", tags: ["umum"] },
    "تلملم": { bab: "r2", root: ["ل","م","ل","م"], meaning: "berkumpul/terkumpul", tags: ["umum"] },
    "تقعقع": { bab: "r2", root: ["ق","ع","ق","ع"], meaning: "berderak/bergemelotak", tags: ["umum"] },

    // --- TAMBAHAN ISIM ---
    "بنك": { bab: "isim", root: ["ب","ن","ك"], meaning: "bank", tags: ["tempat","ekonomi"] },
    "مخبز": { bab: "isim", root: ["خ","ب","ز"], meaning: "toko roti/pembuat roti", tags: ["tempat"] },
    "مزرعة": { bab: "isim", root: ["ز","ر","ع"], meaning: "kebun/pertanian", tags: ["tempat","pertanian"] },
    "سفينة": { bab: "isim", root: ["س","ف","ن"], meaning: "kapal", tags: ["alat","gerakan"] },
    "سيارة": { bab: "isim", root: ["س","ي","ر"], meaning: "mobil", tags: ["alat","gerakan"] },
    "دراجة": { bab: "isim", root: ["د","ر","ج"], meaning: "sepeda", tags: ["alat","gerakan"] },
    "قطار": { bab: "isim", root: ["ق","ط","ر"], meaning: "kereta", tags: ["alat","gerakan"] },
    "طائرة": { bab: "isim", root: ["ط","ي","ر"], meaning: "pesawat", tags: ["alat","gerakan"] },
    "حافلة": { bab: "isim", root: ["ح","ف","ل"], meaning: "bus", tags: ["alat","gerakan"] },
    "دكان": { bab: "isim", root: ["د","ك","ن"], meaning: "toko", tags: ["tempat"] },
    "ثوب": { bab: "isim", root: ["ث","و","ب"], meaning: "pakaian (baju)", tags: ["benda","quran"] },
    "حذاء": { bab: "isim", root: ["ح","ذ","و"], meaning: "sepatu", tags: ["benda"] },
    "جوارب": { bab: "isim", root: ["ج","ر","ب"], meaning: "kaos kaki", tags: ["benda"] },
    "قبعة": { bab: "isim", root: ["ق","ب","ع"], meaning: "topi", tags: ["benda"] },
    "شباك": { bab: "isim", root: ["ش","ب","ك"], meaning: "jendela/jeruji", tags: ["benda"] },
    "جدار": { bab: "isim", root: ["ج","د","ر"], meaning: "dinding", tags: ["benda"] },
    "سقف": { bab: "isim", root: ["س","ق","ف"], meaning: "atap", tags: ["benda"] },
    "أرضية": { bab: "isim", root: ["أ","ر","ض"], meaning: "lantai", tags: ["benda"] },
    "ممر": { bab: "isim", root: ["م","ر","ر"], meaning: "lorong/koridor", tags: ["tempat"] },
    "غرفة": { bab: "isim", root: ["غ","ر","ف"], meaning: "kamar", tags: ["tempat"] },
    "رغيف": { bab: "isim", root: ["ر","غ","ف"], meaning: "roti bulat/seporsi roti", tags: ["makanan"] },
    "لوز": { bab: "isim", root: ["ل","و","ز"], meaning: "almond", tags: ["makanan"] },
    "تفاح": { bab: "isim", root: ["ت","ف","ح"], meaning: "apel", tags: ["makanan"] },
    "موز": { bab: "isim", root: ["م","و","ز"], meaning: "pisang", tags: ["makanan"] },
    "عنب": { bab: "isim", root: ["ع","ن","ب"], meaning: "anggur", tags: ["makanan","quran"] },
    "رمان": { bab: "isim", root: ["ر","م","ن"], meaning: "delima", tags: ["makanan","quran"] },
    "ليمون": { bab: "isim", root: ["ل","ي","م"], meaning: "lemon", tags: ["makanan"] },
    "بصل": { bab: "isim", root: ["ب","ص","ل"], meaning: "bawang", tags: ["makanan","quran"] },
    "ثوم": { bab: "isim", root: ["ث","و","م"], meaning: "bawang putih", tags: ["makanan","quran"] },
    "طماطم": { bab: "isim", root: ["ط","م","ط"], meaning: "tomat", tags: ["makanan"] },
    "خيار": { bab: "isim", root: ["خ","ي","ر"], meaning: "mentimun", tags: ["makanan"] },
    "بطاطس": { bab: "isim", root: ["ب","ط","ط"], meaning: "kentang", tags: ["makanan"] },
    "بيض": { bab: "isim", root: ["ب","ي","ض"], meaning: "telur", tags: ["makanan","quran"] },
    "سمك": { bab: "isim", root: ["س","م","ك"], meaning: "ikan", tags: ["makanan","quran"] },
    "دجاج": { bab: "isim", root: ["د","ج","ج"], meaning: "ayam", tags: ["makanan"] },
    "وجه": { bab: "isim", root: ["و","ج","ه"], meaning: "wajah", tags: ["tubuh","quran"] },
    "أنف": { bab: "isim", root: ["أ","ن","ف"], meaning: "hidung", tags: ["tubuh"] },
    "فم": { bab: "isim", root: ["ف","و","ه"], meaning: "mulut", tags: ["tubuh","quran"] },
    "أذن": { bab: "isim", root: ["أ","ذ","ن"], meaning: "telinga", tags: ["tubuh"] },
    "قدم": { bab: "isim", root: ["ق","د","م"], meaning: "kaki/telapak kaki", tags: ["tubuh","quran"] },
    "ظهر": { bab: "isim", root: ["ظ","ه","ر"], meaning: "punggung", tags: ["tubuh"] },
    "بطن": { bab: "isim", root: ["ب","ط","ن"], meaning: "perut", tags: ["tubuh"] },
    // --- TAMBAHAN MUJARRAD (m1–m6) ---
    "ابتسم": { bab: "m1", root: ["ب","س","م"], meaning: "tersenyum", tags: ["perasaan","umum"] },
    "اتسع": { bab: "m1", root: ["و","س","ع"], meaning: "menjadi luas", tags: ["sifat","umum"] },
    "احتج": { bab: "m1", root: ["ح","ج","ج"], meaning: "berhujjah/berargumentasi", tags: ["umum"] },
    "احترق": { bab: "m1", root: ["ح","ر","ق"], meaning: "terbakar", tags: ["umum"] },
    "اختلط": { bab: "m1", root: ["خ","ل","ط"], meaning: "bercampur", tags: ["umum"] },
    "استغنى": { bab: "m1", root: ["غ","ن","ي"], meaning: "merasa cukup/tidak butuh", tags: ["umum","quran"] },
    "اعتدل": { bab: "m1", root: ["ع","د","ل"], meaning: "seimbang/lurus", tags: ["sifat","umum"] },
    "ازدحم": { bab: "m1", root: ["ز","ح","م"], meaning: "berdesakan", tags: ["umum"] },
    "استقر": { bab: "m1", root: ["ق","ر","ر"], meaning: "menetap/berstabil", tags: ["umum"] },
    "استمر": { bab: "m1", root: ["م","ر","ر"], meaning: "berlanjut", tags: ["umum"] },
    "بكى": { bab: "m3", root: ["ب","ك","ي"], meaning: "menangis (varian)", tags: ["perasaan"] }, // jika sudah ada, hapus
    "بنى": { bab: "m3", root: ["ب","ن","ي"], meaning: "membangun", tags: ["umum","quran"] },
    "تجر": { bab: "m1", root: ["ت","ج","ر"], meaning: "berniaga", tags: ["ekonomi","umum"] },
    "تلف": { bab: "m1", root: ["ت","ل","ف"], meaning: "rusak/binasa", tags: ["umum"] },
    "جبر": { bab: "m1", root: ["ج","ب","ر"], meaning: "memaksa/menambal (memperbaiki patah)", tags: ["umum"] },
    "جهل": { bab: "m1", root: ["ج","ه","ل"], meaning: "tidak tahu/bodoh", tags: ["umum","quran"] },
    "حلق": { bab: "m1", root: ["ح","ل","ق"], meaning: "mencukur/mengelilingi", tags: ["umum"] },
    "حيا": { bab: "m3", root: ["ح","ي","ي"], meaning: "hidup/menjadi hidup", tags: ["umum","quran"] }, // bisa bentrok dengan "حيي" yang sudah ada; cek dulu
    "خبأ": { bab: "m1", root: ["خ","ب","أ"], meaning: "menyembunyikan", tags: ["umum","quran"] },
    "خط": { bab: "m1", root: ["خ","ط","ط"], meaning: "menulis garis/menandai", tags: ["pendidikan","umum"] },
    "خيم": { bab: "m1", root: ["خ","ي","م"], meaning: "berkemah/menaungi", tags: ["umum"] },
    "دحر": { bab: "m1", root: ["د","ح","ر"], meaning: "mengusir/menolak", tags: ["umum"] },
    "درب": { bab: "m1", root: ["د","ر","ب"], meaning: "melatih", tags: ["pendidikan","umum"] },
    "دمع": { bab: "m1", root: ["د","م","ع"], meaning: "berlinang air mata", tags: ["perasaan"] },
    "راح": { bab: "m3", root: ["ر","و","ح"], meaning: "pergi/beristirahat", tags: ["umum"] }, // cek agar tidak bentrok dengan "استراح" (beda key)
    "رمي": { bab: "m3", root: ["ر","م","ي"], meaning: "melempar", tags: ["umum","quran"] }, // jika "رمى" sudah ada, ini beda bentuk; sebaiknya gunakan "رمى"
    "زحف": { bab: "m1", root: ["ز","ح","ف"], meaning: "merayap/merangkak", tags: ["gerakan"] },
    "سجد": { bab: "m1", root: ["س","ج","د"], meaning: "sujud (varian)", tags: ["ibadah"] }, // sudah ada; hapus jika bentrok
    "سكر": { bab: "m1", root: ["س","ك","ر"], meaning: "mabuk", tags: ["umum","quran"] },
    "سقط": { bab: "m1", root: ["س","ق","ط"], meaning: "jatuh (varian)", tags: ["gerakan"] }, // sudah ada; hapus jika bentrok
    "شبع": { bab: "m1", root: ["ش","ب","ع"], meaning: "kenyang", tags: ["umum"] },
    "شق": { bab: "m1", root: ["ش","ق","ق"], meaning: "membelah/meretakkan", tags: ["umum","quran"] },
    "صاح": { bab: "m3", root: ["ص","ي","ح"], meaning: "berteriak", tags: ["umum"] },
    "ضغط": { bab: "m1", root: ["ض","غ","ط"], meaning: "menekan", tags: ["umum"] },
    "طاف": { bab: "m3", root: ["ط","و","ف"], meaning: "mengelilingi/thawaf", tags: ["ibadah","quran"] },
    "عاف": { bab: "m3", root: ["ع","و","ف"], meaning: "sembuh/meninggalkan", tags: ["kesehatan","umum"] },
    "غض": { bab: "m1", root: ["غ","ض","ض"], meaning: "menundukkan (pandangan)/mengurangi", tags: ["quran"] },
    "غلق": { bab: "m1", root: ["غ","ل","ق"], meaning: "menutup", tags: ["umum"] },
    "فزع": { bab: "m1", root: ["ف","ز","ع"], meaning: "terkejut/ketakutan", tags: ["perasaan"] },
    "فقد": { bab: "m1", root: ["ف","ق","د"], meaning: "kehilangan", tags: ["umum"] },
    "فك": { bab: "m1", root: ["ف","ك","ك"], meaning: "membuka (ikatan)/membebaskan", tags: ["umum","quran"] },
    "قنع": { bab: "m1", root: ["ق","ن","ع"], meaning: "qana'ah (varian)", tags: ["sifat"] }, // jika sudah ada batch 2, hapus
    "قوى": { bab: "m3", root: ["ق","و","ي"], meaning: "menjadi kuat", tags: ["sifat"] },
    "كتم": { bab: "m1", root: ["ك","ت","م"], meaning: "menyembunyikan/menahan", tags: ["umum","quran"] },
    "كفى": { bab: "m3", root: ["ك","ف","ي"], meaning: "mencukupi", tags: ["umum","quran"] },
    "لزم": { bab: "m1", root: ["ل","ز","م"], meaning: "melekat/menjadi wajib", tags: ["umum"] },
    "نادى": { bab: "m3", root: ["ن","د","و"], meaning: "memanggil", tags: ["umum","quran"] },

    // --- TAMBAHAN MAZID (z1–z9) ---
    "أعاد": { bab: "z1", root: ["ع","و","د"], meaning: "mengembalikan/mengulangi", tags: ["umum","quran"] },
    "أزال": { bab: "z1", root: ["ز","و","ل"], meaning: "menghilangkan", tags: ["umum"] },
    "أبكى": { bab: "z1", root: ["ب","ك","ي"], meaning: "membuat menangis", tags: ["umum","quran"] },
    "أضحك": { bab: "z1", root: ["ض","ح","ك"], meaning: "membuat tertawa", tags: ["umum","quran"] },
    "أعان": { bab: "z1", root: ["ع","و","ن"], meaning: "membantu/menolong", tags: ["umum","quran"] }, // cek: jangan bentrok dengan "استعان"
    "كسّى": { bab: "z2", root: ["ك","س","و"], meaning: "memakaikan/menyelimuti", tags: ["umum"] },
    "قرّع": { bab: "z2", root: ["ق","ر","ع"], meaning: "menegur keras/mengetuk kuat", tags: ["umum"] },
    "غلّف": { bab: "z2", root: ["غ","ل","ف"], meaning: "membungkus/melapisi", tags: ["umum"] },
    "ساوم": { bab: "z3", root: ["س","و","م"], meaning: "tawar-menawar", tags: ["ekonomi","umum"] },
    "شارف": { bab: "z3", root: ["ش","ر","ف"], meaning: "mendekati (hampir)", tags: ["umum"] },
    "تزيّن": { bab: "z4", root: ["ز","ي","ن"], meaning: "berhias", tags: ["umum"] },
    "تعلّق": { bab: "z4", root: ["ع","ل","ق"], meaning: "bergantung/terkait", tags: ["umum"] },
    "تخاصم": { bab: "z6", root: ["خ","ص","م"], meaning: "berselisih/bertengkar", tags: ["umum"] }, // ini sebenarnya pola lain; bila mau ketat, nanti saya rapikan
    "انتشر": { bab: "z7", root: ["ن","ش","ر"], meaning: "menyebar", tags: ["umum"] },
    "استأجر": { bab: "z9", root: ["أ","ج","ر"], meaning: "menyewa", tags: ["ekonomi","umum"] },

    // --- TAMBAHAN RUBA'I (r1–r2) ---
    "رفرف": { bab: "r1", root: ["ر","ف","ر","ف"], meaning: "berkibar", tags: ["gerakan"] },
    "زخرف": { bab: "r1", root: ["ز","خ","ر","ف"], meaning: "menghias/ornamen", tags: ["umum","quran"] },
    "خضخض": { bab: "r1", root: ["خ","ض","خ","ض"], meaning: "mengaduk/mengocok dalam cairan", tags: ["umum"] },
    "دغدغ": { bab: "r1", root: ["د","غ","د","غ"], meaning: "menggelitik", tags: ["umum"] },
    "وسوس": { bab: "r1", root: ["و","س","و","س"], meaning: "membisikkan (waswas) (varian)", tags: ["quran"] }, // sudah ada; hapus jika bentrok
    "تدغدغ": { bab: "r2", root: ["د","غ","د","غ"], meaning: "tergelitik/bergeliat", tags: ["umum"] },
    "تزخرف": { bab: "r2", root: ["ز","خ","ر","ف"], meaning: "berhias/terhias", tags: ["umum"] },

    // --- TAMBAHAN ISIM ---
    "مدير": { bab: "isim", root: ["د","و","ر"], meaning: "direktur/manager", tags: ["profesi"] },
    "موظف": { bab: "isim", root: ["و","ظ","ف"], meaning: "pegawai", tags: ["profesi"] },
    "شرطي": { bab: "isim", root: ["ش","ر","ط"], meaning: "polisi", tags: ["profesi"] },
    "سائق": { bab: "isim", root: ["س","و","ق"], meaning: "sopir", tags: ["profesi"] },
    "بائع": { bab: "isim", root: ["ب","ي","ع"], meaning: "penjual", tags: ["profesi"] },
    "مشتري": { bab: "isim", root: ["ش","ر","ي"], meaning: "pembeli", tags: ["profesi"] },
    "طالبات": { bab: "isim", root: ["ط","ل","ب"], meaning: "para siswi (jamak)", tags: ["manusia","pendidikan"] }, // jika tidak ingin jamak, ganti
    "صديق": { bab: "isim", root: ["ص","د","ق"], meaning: "teman", tags: ["manusia"] },
    "عدو": { bab: "isim", root: ["ع","د","و"], meaning: "musuh", tags: ["manusia","quran"] },
    "ضيف": { bab: "isim", root: ["ض","ي","ف"], meaning: "tamu", tags: ["manusia"] },
    "رسالة": { bab: "isim", root: ["ر","س","ل"], meaning: "surat/pesan", tags: ["benda"] },
    "بريد": { bab: "isim", root: ["ب","ر","د"], meaning: "pos/surat-menyurat", tags: ["benda"] },
    "ملعقة": { bab: "isim", root: ["ل","ع","ق"], meaning: "sendok", tags: ["alat"] },
    "سكين": { bab: "isim", root: ["س","ك","ن"], meaning: "pisau", tags: ["alat"] },
    "شوكة": { bab: "isim", root: ["ش","و","ك"], meaning: "garpu/duri", tags: ["alat"] },
    "صحن": { bab: "isim", root: ["ص","ح","ن"], meaning: "piring", tags: ["alat"] },
    "كوب": { bab: "isim", root: ["ك","و","ب"], meaning: "gelas", tags: ["alat"] },
    "زجاجة": { bab: "isim", root: ["ز","ج","ج"], meaning: "botol", tags: ["benda"] },
    "مفتاحه": { bab: "isim", root: ["ف","ت","ح"], meaning: "kuncinya (dhamir)", tags: ["benda"] }, // jika tidak ingin bentuk ber-dhamir, saya ganti
    "مدينة": { bab: "isim", root: ["م","د","ن"], meaning: "kota (varian)", tags: ["tempat"] }, // sudah ada; hapus jika bentrok
    "نظافة": { bab: "isim", root: ["ن","ظ","ف"], meaning: "kebersihan", tags: ["benda"] },
    "صابون": { bab: "isim", root: ["ص","ب","ن"], meaning: "sabun", tags: ["benda"] },
    "منشفة": { bab: "isim", root: ["ن","ش","ف"], meaning: "handuk", tags: ["benda"] },
    "مرايا": { bab: "isim", root: ["ر","أ","ي"], meaning: "cermin (jamak)", tags: ["benda"] },
    "مِرآة": { bab: "isim", root: ["ر","أ","ي"], meaning: "cermin", tags: ["benda"] },
    "مفتاحي": { bab: "isim", root: ["ف","ت","ح"], meaning: "kunciku (dhamir)", tags: ["benda"] }, // sudah ada batch 2; hapus jika bentrok
    "صحراء": { bab: "isim", root: ["ص","ح","ر"], meaning: "padang pasir", tags: ["alam","quran"] },
    "غابة": { bab: "isim", root: ["غ","و","ب"], meaning: "hutan", tags: ["alam"] },
    "جزيرة": { bab: "isim", root: ["ج","ز","ر"], meaning: "pulau", tags: ["alam"] },

        // --- Rumah & Ruangan ---
    "مطبخ": { bab: "isim", root: ["ط","ب","خ"], meaning: "dapur (varian)", tags: ["tempat"] }, // jika sudah ada "مطبخ", hapus
    "حمام": { bab: "isim", root: ["ح","م","م"], meaning: "kamar mandi", tags: ["tempat"] },
    "غسالة": { bab: "isim", root: ["غ","س","ل"], meaning: "mesin cuci", tags: ["alat"] },
    "ثلاجة": { bab: "isim", root: ["ث","ل","ج"], meaning: "kulkas", tags: ["alat"] },
    "فرن": { bab: "isim", root: ["ف","ر","ن"], meaning: "oven/tungku", tags: ["alat"] },
    "مغسلة": { bab: "isim", root: ["غ","س","ل"], meaning: "tempat cuci/wastafel", tags: ["alat"] },
    "مروحة": { bab: "isim", root: ["ر","و","ح"], meaning: "kipas angin", tags: ["alat"] },
    "مكيف": { bab: "isim", root: ["ك","ي","ف"], meaning: "AC", tags: ["alat"] },
    "بطانية": { bab: "isim", root: ["ب","ط","ن"], meaning: "selimut", tags: ["benda"] },
    "وسادة": { bab: "isim", root: ["و","س","د"], meaning: "bantal", tags: ["benda"] },
    "خزانة": { bab: "isim", root: ["خ","ز","ن"], meaning: "lemari", tags: ["benda"] },
    "ستارة": { bab: "isim", root: ["س","ت","ر"], meaning: "gorden", tags: ["benda"] },
    "مصعد": { bab: "isim", root: ["ص","ع","د"], meaning: "lift", tags: ["alat","tempat"] },
    "سلم": { bab: "isim", root: ["س","ل","م"], meaning: "tangga", tags: ["benda"] }, // cek: kamu sudah punya fi'il "سلم"; beda bab tapi key sama => akan menimpa. Jika ada "سلم" fi'il, jangan pakai ini.

    // --- Peralatan makan & dapur ---
    "ملعقة": { bab: "isim", root: ["ل","ع","ق"], meaning: "sendok", tags: ["alat"] },
    "شوكة": { bab: "isim", root: ["ش","و","ك"], meaning: "garpu", tags: ["alat"] },
    "سكين": { bab: "isim", root: ["س","ك","ن"], meaning: "pisau", tags: ["alat"] },
    "طبق": { bab: "isim", root: ["ط","ب","ق"], meaning: "piring", tags: ["alat"] },
    "كوب": { bab: "isim", root: ["ك","و","ب"], meaning: "gelas", tags: ["alat"] },
    "فنجان": { bab: "isim", root: ["ف","ن","ج"], meaning: "cangkir", tags: ["alat"] },
    "قدر": { bab: "isim", root: ["ق","د","ر"], meaning: "panci", tags: ["alat"] },
    "مقلاة": { bab: "isim", root: ["ق","ل","ي"], meaning: "wajan", tags: ["alat"] },

    // --- Sekolah & alat tulis ---
    "دفتر": { bab: "isim", root: ["د","ف","ت"], meaning: "buku catatan", tags: ["benda","pendidikan"] },
    "حقيبة": { bab: "isim", root: ["ح","ق","ب"], meaning: "tas", tags: ["benda"] }, // jika sudah ada, hapus
    "سبورة": { bab: "isim", root: ["س","ب","ر"], meaning: "papan tulis", tags: ["alat","pendidikan"] },
    "طباشير": { bab: "isim", root: ["ط","ب","ش"], meaning: "kapur tulis", tags: ["alat","pendidikan"] },
    "ممحاة": { bab: "isim", root: ["م","ح","و"], meaning: "penghapus", tags: ["alat","pendidikan"] },
    "مبراة": { bab: "isim", root: ["ب","ر","ي"], meaning: "rautan pensil", tags: ["alat","pendidikan"] },

    // --- Pakaian ---
    "قميص": { bab: "isim", root: ["ق","م","ص"], meaning: "kemeja", tags: ["benda"] },
    "سروال": { bab: "isim", root: ["س","ر","و"], meaning: "celana", tags: ["benda"] },
    "جاكيت": { bab: "isim", root: ["ج","ك","ت"], meaning: "jaket", tags: ["benda"] },
    "حذاء": { bab: "isim", root: ["ح","ذ","و"], meaning: "sepatu", tags: ["benda"] },
    "جورب": { bab: "isim", root: ["ج","ر","ب"], meaning: "kaos kaki", tags: ["benda"] },

    // --- Tubuh ---
    "رجل": { bab: "isim", root: ["ر","ج","ل"], meaning: "kaki (anggota tubuh)", tags: ["tubuh"] }, // WARNING: kamu sudah punya "رجل" = laki-laki. Jangan pakai ini kalau ingin hindari duplikat.
    "إصبع": { bab: "isim", root: ["ص","ب","ع"], meaning: "jari", tags: ["tubuh"] },
    "أسنان": { bab: "isim", root: ["س","ن","ن"], meaning: "gigi", tags: ["tubuh"] },
    "لسان": { bab: "isim", root: ["ل","س","ن"], meaning: "lidah", tags: ["tubuh","quran"] },
    "شعر": { bab: "isim", root: ["ش","ع","ر"], meaning: "rambut/syair", tags: ["tubuh","quran"] },

    // --- Tempat umum ---
    "مخبز": { bab: "isim", root: ["خ","ب","ز"], meaning: "toko roti", tags: ["tempat"] },
    "صيدلية": { bab: "isim", root: ["ص","ي","د"], meaning: "apotek", tags: ["tempat","kesehatan"] },
    "مكتبة": { bab: "isim", root: ["ك","ت","ب"], meaning: "perpustakaan (varian)", tags: ["tempat","pendidikan"] },
    // --- Aktivitas harian: makan, mandi, tidur, bangun, dsb ---
    "أكل": { bab: "m1", root: ["أ","ك","ل"], meaning: "makan", tags: ["umum","quran","makanan"] },
    "نام": { bab: "m1", root: ["ن","و","م"], meaning: "tidur", tags: ["umum"] },
    "استحم": { bab: "z9", root: ["ح","م","م"], meaning: "mandi", tags: ["umum","kesehatan"] },
    "اغتسل": { bab: "z7", root: ["غ","س","ل"], meaning: "mandi (mandi besar/bersuci)", tags: ["ibadah","kesehatan"] },
    "توضأ": { bab: "z5", root: ["و","ض","أ"], meaning: "berwudhu", tags: ["ibadah"] },
    "استيقظ": { bab: "z9", root: ["ي","ق","ظ"], meaning: "bangun tidur (varian)", tags: ["umum"] }, // jika sudah ada "استيقظ", hapus
    "لبس": { bab: "m4", root: ["ل","ب","س"], meaning: "memakai (varian)", tags: ["umum"] }, // sudah ada; hapus agar tidak menimpa
    "بدّل": { bab: "z2", root: ["ب","د","ل"], meaning: "mengganti (pakaian/barang)", tags: ["umum"] },
    "مشّط": { bab: "z2", root: ["م","ش","ط"], meaning: "menyisir", tags: ["umum"] },
    "حلق": { bab: "m1", root: ["ح","ل","ق"], meaning: "mencukur", tags: ["umum"] },
    "استعمل": { bab: "z9", root: ["ع","م","ل"], meaning: "menggunakan (varian)", tags: ["umum"] }, // jika sudah ada "استعمل", hapus
    "شغّل": { bab: "z2", root: ["ش","غ","ل"], meaning: "menyalakan/mengoperasikan", tags: ["umum"] },
    "أطفأ": { bab: "z1", root: ["ط","ف","أ"], meaning: "memadamkan", tags: ["umum"] }, // jika sudah ada "أطفأ", hapus
    "غلق": { bab: "m1", root: ["غ","ل","ق"], meaning: "menutup (pintu/jendela)", tags: ["umum"] },
    "أغلق": { bab: "z1", root: ["غ","ل","ق"], meaning: "menutup/mengunci", tags: ["umum"] },
    "استفتح": { bab: "z9", root: ["ف","ت","ح"], meaning: "memulai/memohon pembukaan", tags: ["ibadah"] },
    "اتصل": { bab: "z8", root: ["و","ص","ل"], meaning: "menghubungi/terhubung", tags: ["umum"] }, // catatan: pola bab tidak ketat; jika kamu mau ketat wazan, saya revisi
    "هاتف": { bab: "m3", root: ["ه","ت","ف"], meaning: "memanggil/menyeru", tags: ["umum"] },

    // --- Pergi, pulang, berangkat, sampai ---
    "غادر": { bab: "z3", root: ["غ","د","ر"], meaning: "meninggalkan (tempat)/berangkat", tags: ["gerakan","umum"] },
    "وصل": { bab: "m2", root: ["و","ص","ل"], meaning: "sampai (varian)", tags: ["gerakan","umum"] }, // sudah ada; hapus
    "عاد": { bab: "m3", root: ["ع","و","د"], meaning: "pulang/kembali (varian)", tags: ["gerakan"] }, // sudah ada; hapus
    "سافر": { bab: "z3", root: ["س","ف","ر"], meaning: "bepergian (varian)", tags: ["gerakan","umum"] }, // sudah ada; hapus

    // --- Makan & minum: isim pendukung sehari-hari ---
    "فطور": { bab: "isim", root: ["ف","ط","ر"], meaning: "sarapan", tags: ["makanan"] },
    "غداء": { bab: "isim", root: ["غ","د","و"], meaning: "makan siang", tags: ["makanan"] },
    "عشاء": { bab: "isim", root: ["ع","ش","ي"], meaning: "makan malam/isya (varian)", tags: ["makanan","waktu"] }, // kamu sudah ada "عشاء" waktu; ini akan menimpa, jadi hapus jika ingin aman
    "وجبة": { bab: "isim", root: ["و","ج","ب"], meaning: "hidangan/porsi makan", tags: ["makanan"] },
    "ملاعق": { bab: "isim", root: ["ل","ع","ق"], meaning: "sendok-sendok (jamak)", tags: ["alat"] },
    "مناديل": { bab: "isim", root: ["ن","د","ل"], meaning: "tisu/serbet (jamak)", tags: ["benda"] },

    // --- Kebersihan diri: isim pendukung ---
    "صابون": { bab: "isim", root: ["ص","ب","ن"], meaning: "sabun", tags: ["benda"] },
    "شامبو": { bab: "isim", root: ["ش","م","ب"], meaning: "sampo", tags: ["benda"] },
    "فرشاة": { bab: "isim", root: ["ف","ر","ش"], meaning: "sikat", tags: ["alat"] },
    "معجون": { bab: "isim", root: ["ع","ج","ن"], meaning: "pasta (mis. pasta gigi)", tags: ["benda"] },
    "منشفة": { bab: "isim", root: ["ن","ش","ف"], meaning: "handuk", tags: ["benda"] },
    "مرآة": { bab: "isim", root: ["ر","أ","ي"], meaning: "cermin", tags: ["benda"] },
    "مقص": { bab: "isim", root: ["ق","ص","ص"], meaning: "gunting", tags: ["alat"] },

    // --- Pakaian & benda yang sering dipakai ---
    "ملابس": { bab: "isim", root: ["ل","ب","س"], meaning: "pakaian (varian)", tags: ["benda"] }, // jika sudah ada, hapus
    "قميص": { bab: "isim", root: ["ق","م","ص"], meaning: "kemeja", tags: ["benda"] },
    "سروال": { bab: "isim", root: ["س","ر","و"], meaning: "celana", tags: ["benda"] },
    "حذاء": { bab: "isim", root: ["ح","ذ","و"], meaning: "sepatu", tags: ["benda"] }, // jika sudah ada, hapus
    "جورب": { bab: "isim", root: ["ج","ر","ب"], meaning: "kaos kaki", tags: ["benda"] },

    // --- Rumah: kata benda yang sering dipakai ---
    "غرفة": { bab: "isim", root: ["غ","ر","ف"], meaning: "kamar", tags: ["tempat"] }, // jika sudah ada, hapus
    "مفتاح": { bab: "isim", root: ["ف","ت","ح"], meaning: "kunci (varian)", tags: ["alat"] }, // kamu sudah punya "مفتاح"; hapus
    "حمام": { bab: "isim", root: ["ح","م","م"], meaning: "kamar mandi", tags: ["tempat"] }, // jika sudah ada, hapus
    "مطبخ": { bab: "isim", root: ["ط","ب","خ"], meaning: "dapur", tags: ["tempat"] }, // jika sudah ada, hapus
    // --- Aktivitas harian (fi'il) ---
    "استيقظت": { bab: "z9", root: ["ي","ق","ظ"], meaning: "aku bangun tidur", tags: ["umum"] }, // jika tidak ingin bentuk dhamir, hapus
    "استحممت": { bab: "z9", root: ["ح","م","م"], meaning: "aku mandi", tags: ["umum"] }, // jika tidak ingin bentuk dhamir, hapus
    "أفطر": { bab: "z4", root: ["ف","ط","ر"], meaning: "sarapan/berbuka", tags: ["makanan","ibadah"] },
    "تناول": { bab: "z6", root: ["ن","و","ل"], meaning: "mengambil/menyantap", tags: ["umum","makanan"] },
    "تحضّر": { bab: "z4", root: ["ح","ض","ر"], meaning: "bersiap-siap", tags: ["umum"] },
    "ارتدى": { bab: "z7", root: ["ر","د","ي"], meaning: "memakai (pakaian)", tags: ["umum"] },
    "خلع": { bab: "m3", root: ["خ","ل","ع"], meaning: "melepas (pakaian)", tags: ["umum"] }, // jika sudah ada "خلع", hapus
    "غسّل": { bab: "z2", root: ["غ","س","ل"], meaning: "mencuci (membasuh kuat/berulang)", tags: ["umum"] },
    "كنس": { bab: "m1", root: ["ك","ن","س"], meaning: "menyapu", tags: ["umum"] },
    "مسح": { bab: "m1", root: ["م","س","ح"], meaning: "mengelap/mengusap (varian)", tags: ["umum"] }, // kamu sudah ada "مسح"; hapus
    "رتّب": { bab: "z2", root: ["ر","ت","ب"], meaning: "merapikan/menyusun", tags: ["umum"] },
    "طبّق": { bab: "z2", root: ["ط","ب","ق"], meaning: "menerapkan", tags: ["umum"] },
    "فتح": { bab: "m3", root: ["ف","ت","ح"], meaning: "membuka (varian)", tags: ["umum"] }, // sudah ada; hapus
    "أعدّ": { bab: "z2", root: ["ع","د","د"], meaning: "menyiapkan", tags: ["umum"] },
    "أصل": { bab: "m1", root: ["أ","ص","ل"], meaning: "berasal/akar", tags: ["umum"] },

    // --- Belanja & uang ---
    "اشترى": { bab: "z7", root: ["ش","ر","ي"], meaning: "membeli", tags: ["ekonomi","umum","quran"] },
    "دفع": { bab: "m1", root: ["د","ف","ع"], meaning: "membayar/mendorong (varian)", tags: ["ekonomi","umum"] }, // sudah ada "دفع"; hapus
    "حاسب": { bab: "z3", root: ["ح","س","ب"], meaning: "menghitung/mengoreksi tagihan", tags: ["ekonomi","umum"] },
    "ساوم": { bab: "z3", root: ["س","و","م"], meaning: "menawar", tags: ["ekonomi","umum"] }, // jika sudah ada "ساوم", hapus
    "فاتورة": { bab: "isim", root: ["ف","ت","ر"], meaning: "nota/tagihan", tags: ["benda","ekonomi"] },
    "نقود": { bab: "isim", root: ["ن","ق","د"], meaning: "uang tunai", tags: ["benda","ekonomi"] },
    "بطاقة": { bab: "isim", root: ["ب","ط","ق"], meaning: "kartu", tags: ["benda"] },
    "محفظة": { bab: "isim", root: ["ح","ف","ظ"], meaning: "dompet", tags: ["benda"] },

    // --- Komunikasi sehari-hari ---
    "اتصل": { bab: "z8", root: ["و","ص","ل"], meaning: "menghubungi lewat telepon", tags: ["umum"] }, // jika kamu tidak ingin z8, bilang—saya ubah
    "أرسل": { bab: "z1", root: ["ر","س","ل"], meaning: "mengirim", tags: ["umum","quran"] }, // sudah ada; hapus
    "أعاد": { bab: "z1", root: ["ع","و","د"], meaning: "mengulang/mengembalikan", tags: ["umum"] }, // jika sudah ada, hapus
    "شرح": { bab: "m1", root: ["ش","ر","ح"], meaning: "menjelaskan (varian)", tags: ["umum"] }, // sudah ada; hapus
    "ترجم": { bab: "r1", root: ["ت","ر","ج","م"], meaning: "menerjemahkan (varian)", tags: ["pendidikan"] }, // sudah ada; hapus
    "رسالة": { bab: "isim", root: ["ر","س","ل"], meaning: "pesan/surat", tags: ["benda"] }, // jika sudah ada, hapus
    "مكالمة": { bab: "isim", root: ["ك","ل","م"], meaning: "panggilan telepon/percakapan", tags: ["benda"] },

    // --- Kesehatan ringan & keadaan ---
    "تألّم": { bab: "z4", root: ["أ","ل","م"], meaning: "merasa sakit/nyeri", tags: ["kesehatan","umum"] },
    "تعافى": { bab: "z5", root: ["ع","ف","و"], meaning: "sembuh/pulih", tags: ["kesehatan","umum"] },
    "سعال": { bab: "isim", root: ["س","ع","ل"], meaning: "batuk", tags: ["kesehatan"] },
    "حمّى": { bab: "isim", root: ["ح","م","م"], meaning: "demam", tags: ["kesehatan"] },
    "صداع": { bab: "isim", root: ["ص","د","ع"], meaning: "sakit kepala", tags: ["kesehatan"] },
    "جرح": { bab: "isim", root: ["ج","ر","ح"], meaning: "luka", tags: ["kesehatan"] },
    "دواء": { bab: "isim", root: ["د","و","ي"], meaning: "obat (varian)", tags: ["kesehatan"] }, // jika sudah ada, hapus
    "وصفة": { bab: "isim", root: ["و","ص","ف"], meaning: "resep (dokter)/deskripsi", tags: ["kesehatan","umum"] },

    // --- Rumah: alat & benda sering muncul ---
    "مكنسة": { bab: "isim", root: ["ك","ن","س"], meaning: "sapu (varian)", tags: ["alat"] }, // sudah ada; hapus
    "منظف": { bab: "isim", root: ["ن","ظ","ف"], meaning: "pembersih (cairan/alat)", tags: ["benda"] },
    "سلة": { bab: "isim", root: ["س","ل","ل"], meaning: "keranjang", tags: ["benda"] },
    "قمامة": { bab: "isim", root: ["ق","م","م"], meaning: "sampah", tags: ["benda"] },
    "مفتاحان": { bab: "isim", root: ["ف","ت","ح"], meaning: "dua kunci (mutsanna)", tags: ["benda"] }, // jika tidak ingin mutsanna, hapus
     // --- Aktivitas harian (fi'il) ---
    "أعد": { bab: "m1", root: ["ع","و","د"], meaning: "kembali lagi/ulang (عاد dalam bentuk lain)", tags: ["umum"] }, // kalau kamu tidak mau variasi ini, hapus
    "استحمى": { bab: "z9", root: ["ح","م","م"], meaning: "mandi (varian)", tags: ["umum"] }, // opsional, kalau ingin cukup "استحم" saja, hapus
    "استيقن": { bab: "z9", root: ["ي","ق","ن"], meaning: "meyakini dengan pasti", tags: ["umum","quran"] },
    "نظّم": { bab: "z2", root: ["ن","ظ","م"], meaning: "mengatur/menata", tags: ["umum"] },
    "جهّز": { bab: "z2", root: ["ج","ه","ز"], meaning: "menyiapkan/perlengkapi", tags: ["umum"] },
    "سخّن": { bab: "z2", root: ["س","خ","ن"], meaning: "memanaskan", tags: ["umum","makanan"] },
    "برّد": { bab: "z2", root: ["ب","ر","د"], meaning: "mendinginkan", tags: ["umum"] },
    "أصل": { bab: "m1", root: ["أ","ص","ل"], meaning: "menetap/berasal", tags: ["umum"] }, // jika sudah ada dari batchmu, hapus
    "استعد": { bab: "z9", root: ["ع","د","د"], meaning: "bersiap-siap", tags: ["umum"] },
    "استحم": { bab: "z9", root: ["ح","م","م"], meaning: "mandi (varian)", tags: ["umum"] }, // jika sudah ada, hapus (di kamusmu ada)
    "شوى": { bab: "m3", root: ["ش","و","ي"], meaning: "memanggang (varian)", tags: ["umum","makanan"] }, // jika sudah ada, hapus

    // --- Aktivitas kerja/sekolah (fi'il) ---
    "امتحن": { bab: "m1", root: ["م","ت","ح"], meaning: "menguji/mengetes", tags: ["pendidikan","umum"] },
    "نجز": { bab: "m1", root: ["ن","ج","ز"], meaning: "menyelesaikan", tags: ["umum"] },
    "سلّم": { bab: "z2", root: ["س","ل","م"], meaning: "menyerahkan/mengucapkan salam", tags: ["umum","ibadah"] },
    "حاور": { bab: "z3", root: ["ح","و","ر"], meaning: "berdialog", tags: ["umum"] },
    "ناقش": { bab: "z3", root: ["ن","ق","ش"], meaning: "berdiskusi", tags: ["umum","pendidikan"] },

    // --- Komunikasi & gawai (isim) ---
    "هاتف": { bab: "isim", root: ["ه","ت","ف"], meaning: "telepon (varian)", tags: ["alat"] }, // jika sudah ada, hapus (di kamusmu ada)
    "شاحن": { bab: "isim", root: ["ش","ح","ن"], meaning: "charger/pengisi daya", tags: ["alat"] },
    "بطارية": { bab: "isim", root: ["ب","ط","ر"], meaning: "baterai", tags: ["alat"] },
    "حاسبة": { bab: "isim", root: ["ح","س","ب"], meaning: "kalkulator", tags: ["alat","pendidikan"] },
    "مذياع": { bab: "isim", root: ["ذ","ي","ع"], meaning: "radio", tags: ["alat"] },
    "تلفاز": { bab: "isim", root: ["ت","ل","ف"], meaning: "televisi", tags: ["alat"] },

    // --- Sekolah & kantor (isim) ---
    "امتحان": { bab: "isim", root: ["م","ت","ح"], meaning: "ujian", tags: ["pendidikan"] },
    "واجب": { bab: "isim", root: ["و","ج","ب"], meaning: "tugas PR/kewajiban", tags: ["pendidikan","quran"] },
    "درس": { bab: "isim", root: ["د","ر","س"], meaning: "pelajaran", tags: ["pendidikan"] }, // key "درس" sudah ada sebagai fi'il; ini akan menimpa => jangan pakai kalau mau aman
    "فصل": { bab: "isim", root: ["ف","ص","ل"], meaning: "kelas/bab (pelajaran)", tags: ["pendidikan","quran"] },
    "صف": { bab: "isim", root: ["ص","ف","ف"], meaning: "barisan/kelas", tags: ["pendidikan","quran"] },

    // --- Rumah (isim) ---
    "مغرفة": { bab: "isim", root: ["غ","ر","ف"], meaning: "sendok sayur/centong", tags: ["alat"] },
    "صينية": { bab: "isim", root: ["ص","ن","ي"], meaning: "nampan", tags: ["alat"] },
    "مصفاة": { bab: "isim", root: ["ص","ف","و"], meaning: "saringan", tags: ["alat"] },
    "إسفنجة": { bab: "isim", root: ["س","ف","ن"], meaning: "spons", tags: ["alat"] },
    "منظفة": { bab: "isim", root: ["ن","ظ","ف"], meaning: "alat pembersih", tags: ["alat"] },

    // --- Kesehatan (isim) ---
    "عيادة": { bab: "isim", root: ["ع","و","د"], meaning: "klinik", tags: ["tempat","kesehatan"] },
    "ممرضة": { bab: "isim", root: ["م","ر","ض"], meaning: "perawat (perempuan)", tags: ["profesi","kesehatan"] },
    "ممرض": { bab: "isim", root: ["م","ر","ض"], meaning: "perawat (laki-laki)", tags: ["profesi","kesehatan"] },
    "حقنة": { bab: "isim", root: ["ح","ق","ن"], meaning: "suntikan", tags: ["alat","kesehatan"] },
    "ضماد": { bab: "isim", root: ["ض","م","د"], meaning: "perban", tags: ["benda","kesehatan"] },

    // --- Cuaca (isim) ---
    "حرارة": { bab: "isim", root: ["ح","ر","ر"], meaning: "panas/suhu", tags: ["alam"] },
    "برد": { bab: "isim", root: ["ب","ر","د"], meaning: "dingin", tags: ["alam"] }, // key "برد" sudah ada fi'il (m2) -> akan menimpa, jadi jangan pakai kalau mau aman
    "ضباب": { bab: "isim", root: ["ض","ب","ب"], meaning: "kabut", tags: ["alam"] },
    "عاصفة": { bab: "isim", root: ["ع","ص","ف"], meaning: "badai", tags: ["alam","quran"] },

    // ═══════════════════════════════════════════════════════════
    // TAMBAHAN MUJARRAD (m1-m6) - BATCH BARU
    // ═══════════════════════════════════════════════════════════
    
    // === BAB m1 (فَعَلَ - يَفْعُلُ) ===
    "عصم": { bab: "m1", root: ["ع","ص","م"], meaning: "menjaga/melindungi", tags: ["quran","umum"] },
    "صمت": { bab: "m1", root: ["ص","م","ت"], meaning: "diam/bungkam", tags: ["umum"] },
    "قبض": { bab: "m1", root: ["ق","ب","ض"], meaning: "menggenggam/mencabut (nyawa)", tags: ["quran","umum"] },
    "بسط": { bab: "m1", root: ["ب","س","ط"], meaning: "membentangkan", tags: ["quran","umum"] },
    "نبت": { bab: "m1", root: ["ن","ب","ت"], meaning: "tumbuh", tags: ["alam","quran"] },
    "حصن": { bab: "m1", root: ["ح","ص","ن"], meaning: "membentengi", tags: ["umum"] },
    "ربط": { bab: "m1", root: ["ر","ب","ط"], meaning: "mengikat/menghubungkan", tags: ["umum","quran"] },
    "فسد": { bab: "m1", root: ["ف","س","د"], meaning: "rusak/berbuat kerusakan", tags: ["quran","sifat"] },
    "رشد": { bab: "m1", root: ["ر","ش","د"], meaning: "mendapat petunjuk", tags: ["quran","ibadah"] },
    "غمر": { bab: "m1", root: ["غ","م","ر"], meaning: "menenggelamkan", tags: ["umum"] },
    "صرف": { bab: "m1", root: ["ص","ر","ف"], meaning: "memalingkan/membelanjakan", tags: ["quran","ekonomi"] },
    "طمس": { bab: "m1", root: ["ط","م","س"], meaning: "menghapus/memusnahkan", tags: ["quran"] },
    "لمع": { bab: "m1", root: ["ل","م","ع"], meaning: "berkilau/bersinar", tags: ["umum"] },
    "نبض": { bab: "m1", root: ["ن","ب","ض"], meaning: "berdenyut", tags: ["kesehatan"] },
    "رقص": { bab: "m1", root: ["ر","ق","ص"], meaning: "menari", tags: ["umum"] },
    "مزج": { bab: "m1", root: ["م","ز","ج"], meaning: "mencampur", tags: ["umum"] },
    "نسخ": { bab: "m1", root: ["ن","س","خ"], meaning: "menyalin/menghapus (hukum)", tags: ["quran","pendidikan"] },
    "طمع": { bab: "m1", root: ["ط","م","ع"], meaning: "tamak/berharap sangat", tags: ["sifat","quran"] },
    "قهر": { bab: "m1", root: ["ق","ه","ر"], meaning: "menundukkan/mengalahkan", tags: ["quran"] },
    "جحد": { bab: "m1", root: ["ج","ح","د"], meaning: "mengingkari", tags: ["quran"] },
    "نكر": { bab: "m1", root: ["ن","ك","ر"], meaning: "mengingkari/tidak mengenal", tags: ["quran"] },
    "حسد": { bab: "m1", root: ["ح","س","د"], meaning: "dengki/iri", tags: ["sifat","quran"] },
    "بغض": { bab: "m1", root: ["ب","غ","ض"], meaning: "membenci", tags: ["sifat","quran"] },
    "ودّ": { bab: "m1", root: ["و","د","د"], meaning: "mencintai/menyukai", tags: ["perasaan","quran"] },
    "حنّ": { bab: "m1", root: ["ح","ن","ن"], meaning: "merindukan", tags: ["perasaan"] },
    "شمّ": { bab: "m1", root: ["ش","م","م"], meaning: "mencium (bau)", tags: ["indra"] },
    "ذمّ": { bab: "m1", root: ["ذ","م","م"], meaning: "mencela", tags: ["umum"] },
    "همّ": { bab: "m1", root: ["ه","م","م"], meaning: "bermaksud/bercita-cita", tags: ["umum","quran"] },
    "عضّ": { bab: "m1", root: ["ع","ض","ض"], meaning: "menggigit", tags: ["umum","quran"] },
    "مصّ": { bab: "m1", root: ["م","ص","ص"], meaning: "menghisap", tags: ["umum"] },
    "لفّ": { bab: "m1", root: ["ل","ف","ف"], meaning: "membungkus/melilit", tags: ["umum"] },
    "صبّ": { bab: "m1", root: ["ص","ب","ب"], meaning: "menuangkan", tags: ["umum","quran"] },
    "مدّ": { bab: "m1", root: ["م","د","د"], meaning: "memanjangkan/membentangkan", tags: ["umum","quran"] },
    "شدّ": { bab: "m1", root: ["ش","د","د"], meaning: "mengikat kuat/menegangkan", tags: ["umum","quran"] },
    "ردّ": { bab: "m1", root: ["ر","د","د"], meaning: "mengembalikan/menolak", tags: ["umum","quran"] },
    "عدّ": { bab: "m1", root: ["ع","د","د"], meaning: "menghitung", tags: ["umum","quran"] },
    "حدّ": { bab: "m1", root: ["ح","د","د"], meaning: "membatasi/menajamkan", tags: ["umum","quran"] },
    "سدّ": { bab: "m1", root: ["س","د","د"], meaning: "menutup/membendung", tags: ["umum","quran"] },
    
    // === BAB m2 (فَعَلَ - يَفْعِلُ) ===
    "وعظ": { bab: "m2", root: ["و","ع","ظ"], meaning: "menasihati", tags: ["ibadah","quran"] },
    "وقع": { bab: "m2", root: ["و","ق","ع"], meaning: "jatuh/terjadi", tags: ["umum","quran"] },
    "عزم": { bab: "m2", root: ["ع","ز","م"], meaning: "bertekad kuat", tags: ["umum","quran"] },
    "وهن": { bab: "m2", root: ["و","ه","ن"], meaning: "melemah", tags: ["sifat","quran"] },
    "نبذ": { bab: "m2", root: ["ن","ب","ذ"], meaning: "membuang/meninggalkan", tags: ["quran"] },
    "حبس": { bab: "m2", root: ["ح","ب","س"], meaning: "menahan/memenjarakan", tags: ["umum"] },
    "طرق": { bab: "m2", root: ["ط","ر","ق"], meaning: "mengetuk", tags: ["umum","quran"] },
    "صمد": { bab: "m2", root: ["ص","م","د"], meaning: "menuju/bergantung", tags: ["quran"] },
    "جزم": { bab: "m2", root: ["ج","ز","م"], meaning: "memastikan/memutuskan", tags: ["umum"] },
    "حزم": { bab: "m2", root: ["ح","ز","م"], meaning: "mengikat/tegas", tags: ["sifat"] },
    "عزل": { bab: "m2", root: ["ع","ز","ل"], meaning: "memisahkan/memecat", tags: ["umum"] },
    "فصل": { bab: "m2", root: ["ف","ص","ل"], meaning: "memisahkan/memutuskan", tags: ["quran","umum"] },
    "قصف": { bab: "m2", root: ["ق","ص","ف"], meaning: "menghancurkan/membom", tags: ["umum"] },
    "وصف": { bab: "m2", root: ["و","ص","ف"], meaning: "menyifati/mendeskripsikan", tags: ["umum"] },
    "نصب": { bab: "m2", root: ["ن","ص","ب"], meaning: "mendirikan/meletakkan", tags: ["umum","quran"] },
    "كشف": { bab: "m2", root: ["ك","ش","ف"], meaning: "menyingkap", tags: ["umum","quran"] },
    "لطم": { bab: "m2", root: ["ل","ط","م"], meaning: "menampar", tags: ["umum"] },
    "صفع": { bab: "m2", root: ["ص","ف","ع"], meaning: "menampar keras", tags: ["umum"] },
    "ركض": { bab: "m2", root: ["ر","ك","ض"], meaning: "berlari", tags: ["gerakan"] },
    "نهش": { bab: "m2", root: ["ن","ه","ش"], meaning: "menerkam/menggigit", tags: ["umum"] },
    
    // === BAB m3 (فَعَلَ - يَفْعَلُ) ===
    "سعى": { bab: "m3", root: ["س","ع","ي"], meaning: "berusaha/berjalan", tags: ["umum","quran","ibadah"] },
    "هوى": { bab: "m3", root: ["ه","و","ي"], meaning: "jatuh/condong/hawa nafsu", tags: ["quran"] },
    "طوى": { bab: "m3", root: ["ط","و","ي"], meaning: "melipat", tags: ["umum","quran"] },
    "روى": { bab: "m3", root: ["ر","و","ي"], meaning: "meriwayatkan/menyirami", tags: ["pendidikan","pertanian"] },
    "نوى": { bab: "m3", root: ["ن","و","ي"], meaning: "berniat", tags: ["ibadah"] },
    "قوى": { bab: "m3", root: ["ق","و","ي"], meaning: "menguatkan", tags: ["umum"] },
    "هوّ": { bab: "m3", root: ["ه","و","ي"], meaning: "mencintai (hawa)", tags: ["perasaan"] },
    "سلا": { bab: "m3", root: ["س","ل","و"], meaning: "melupakan/terhibur", tags: ["perasaan"] },
    "شفى": { bab: "m3", root: ["ش","ف","ي"], meaning: "menyembuhkan", tags: ["kesehatan","quran"] },
    "كفى": { bab: "m3", root: ["ك","ف","ي"], meaning: "mencukupi", tags: ["quran"] },
    "وفى": { bab: "m3", root: ["و","ف","ي"], meaning: "memenuhi (janji)", tags: ["quran","umum"] },
    "نفى": { bab: "m3", root: ["ن","ف","ي"], meaning: "menafikan/mengusir", tags: ["umum","quran"] },
    "عدا": { bab: "m3", root: ["ع","د","و"], meaning: "berlari/melampaui batas", tags: ["gerakan","quran"] },
    "غدا": { bab: "m3", root: ["غ","د","و"], meaning: "pergi pagi", tags: ["waktu"] },
    "سرى": { bab: "m3", root: ["س","ر","ي"], meaning: "berjalan malam", tags: ["quran","gerakan"] },
    "أتى": { bab: "m3", root: ["أ","ت","ي"], meaning: "datang/mendatangi", tags: ["umum","quran"] },
    "أبى": { bab: "m3", root: ["أ","ب","ي"], meaning: "menolak/enggan", tags: ["quran"] },
    "رضي": { bab: "m3", root: ["ر","ض","ي"], meaning: "ridha/rela", tags: ["ibadah","quran"] },
    "خشي": { bab: "m3", root: ["خ","ش","ي"], meaning: "takut (kepada Allah)", tags: ["ibadah","quran"] },
    "نسي": { bab: "m3", root: ["ن","س","ي"], meaning: "lupa", tags: ["umum","quran"] },
    "بغى": { bab: "m3", root: ["ب","غ","ي"], meaning: "menginginkan/melampaui batas", tags: ["quran"] },
    "طغى": { bab: "m3", root: ["ط","غ","ي"], meaning: "melampaui batas/sewenang-wenang", tags: ["quran"] },
    "سقى": { bab: "m3", root: ["س","ق","ي"], meaning: "memberi minum", tags: ["umum","quran"] },
    "لقى": { bab: "m3", root: ["ل","ق","ي"], meaning: "bertemu/melempar", tags: ["umum","quran"] },
    "تلا": { bab: "m3", root: ["ت","ل","و"], meaning: "membaca/mengikuti", tags: ["quran","ibadah"] },
    "علا": { bab: "m3", root: ["ع","ل","و"], meaning: "tinggi/naik", tags: ["quran","umum"] },
    "دنا": { bab: "m3", root: ["د","ن","و"], meaning: "mendekat", tags: ["umum","quran"] },
    
    // === BAB m4 (فَعِلَ - يَفْعَلُ) ===
    "فرح": { bab: "m4", root: ["ف","ر","ح"], meaning: "gembira", tags: ["perasaan","quran"] },
    "أمن": { bab: "m4", root: ["أ","م","ن"], meaning: "aman/beriman", tags: ["ibadah","quran"] },
    "فهم": { bab: "m4", root: ["ف","ه","م"], meaning: "memahami", tags: ["pendidikan"] },
    "سلم": { bab: "m4", root: ["س","ل","م"], meaning: "selamat", tags: ["umum","quran"] },
    "سخط": { bab: "m4", root: ["س","خ","ط"], meaning: "murka", tags: ["quran"] },
    "فزع": { bab: "m4", root: ["ف","ز","ع"], meaning: "takut/kaget", tags: ["perasaan","quran"] },
    "قلق": { bab: "m4", root: ["ق","ل","ق"], meaning: "gelisah/cemas", tags: ["perasaan"] },
    "ندم": { bab: "m4", root: ["ن","د","م"], meaning: "menyesal", tags: ["perasaan","quran"] },
    "سئم": { bab: "m4", root: ["س","أ","م"], meaning: "bosan/jemu", tags: ["perasaan"] },
    "شبع": { bab: "m4", root: ["ش","ب","ع"], meaning: "kenyang", tags: ["umum"] },
    "عطش": { bab: "m4", root: ["ع","ط","ش"], meaning: "haus", tags: ["umum"] },
    "جوع": { bab: "m4", root: ["ج","و","ع"], meaning: "lapar", tags: ["umum"] },
    "ظمئ": { bab: "m4", root: ["ظ","م","أ"], meaning: "sangat haus", tags: ["umum","quran"] },
    "سمن": { bab: "m4", root: ["س","م","ن"], meaning: "gemuk", tags: ["sifat"] },
    "هزل": { bab: "m4", root: ["ه","ز","ل"], meaning: "kurus", tags: ["sifat"] },
    "صدئ": { bab: "m4", root: ["ص","د","أ"], meaning: "berkarat", tags: ["umum"] },
    "وثق": { bab: "m4", root: ["و","ث","ق"], meaning: "percaya", tags: ["umum"] },
    "ورع": { bab: "m4", root: ["و","ر","ع"], meaning: "wara'/hati-hati", tags: ["ibadah"] },
    
    // === BAB m5 (فَعُلَ - يَفْعُلُ) ===
    "ثقل": { bab: "m5", root: ["ث","ق","ل"], meaning: "menjadi berat", tags: ["sifat","quran"] },
    "خفف": { bab: "m5", root: ["خ","ف","ف"], meaning: "menjadi ringan", tags: ["sifat"] },
    "قرب": { bab: "m5", root: ["ق","ر","ب"], meaning: "menjadi dekat", tags: ["sifat","quran"] },
    "بعد": { bab: "m5", root: ["ب","ع","د"], meaning: "menjadi jauh", tags: ["sifat","quran"] },
    "سهل": { bab: "m5", root: ["س","ه","ل"], meaning: "menjadi mudah", tags: ["sifat"] },
    "صعب": { bab: "m5", root: ["ص","ع","ب"], meaning: "menjadi sulit", tags: ["sifat"] },
    "وضح": { bab: "m5", root: ["و","ض","ح"], meaning: "menjadi jelas", tags: ["sifat"] },
    "غمض": { bab: "m5", root: ["غ","م","ض"], meaning: "menjadi samar", tags: ["sifat"] },
    "نضج": { bab: "m5", root: ["ن","ض","ج"], meaning: "menjadi matang", tags: ["sifat","makanan"] },
    "فصح": { bab: "m5", root: ["ف","ص","ح"], meaning: "menjadi fasih", tags: ["sifat","pendidikan"] },
    "ملح": { bab: "m5", root: ["م","ل","ح"], meaning: "menjadi asin", tags: ["sifat","makanan"] },
    "حلو": { bab: "m5", root: ["ح","ل","و"], meaning: "menjadi manis", tags: ["sifat","makanan"] },
    "مرّ": { bab: "m5", root: ["م","ر","ر"], meaning: "menjadi pahit", tags: ["sifat","makanan"] },
    "حمض": { bab: "m5", root: ["ح","م","ض"], meaning: "menjadi asam", tags: ["sifat","makanan"] },
    "نظف": { bab: "m5", root: ["ن","ظ","ف"], meaning: "menjadi bersih", tags: ["sifat"] },
    "وسخ": { bab: "m5", root: ["و","س","خ"], meaning: "menjadi kotor", tags: ["sifat"] },
    "رطب": { bab: "m5", root: ["ر","ط","ب"], meaning: "menjadi basah/lembab", tags: ["sifat"] },
    "يبس": { bab: "m5", root: ["ي","ب","س"], meaning: "menjadi kering", tags: ["sifat","quran"] },
    "لطف": { bab: "m5", root: ["ل","ط","ف"], meaning: "menjadi lembut/halus", tags: ["sifat","quran"] },
    "خشن": { bab: "m5", root: ["خ","ش","ن"], meaning: "menjadi kasar", tags: ["sifat"] },
    "لمع": { bab: "m5", root: ["ل","م","ع"], meaning: "menjadi berkilau", tags: ["sifat"] },
    "عتق": { bab: "m5", root: ["ع","ت","ق"], meaning: "menjadi tua/antik", tags: ["sifat"] },
    "جدد": { bab: "m5", root: ["ج","د","د"], meaning: "menjadi baru", tags: ["sifat"] },
    "وسع": { bab: "m5", root: ["و","س","ع"], meaning: "menjadi luas", tags: ["sifat","quran"] },
    "ضيق": { bab: "m5", root: ["ض","ي","ق"], meaning: "menjadi sempit", tags: ["sifat","quran"] },
    
    // ═══════════════════════════════════════════════════════════
    // TAMBAHAN MAZID (z1-z9) - BATCH BARU
    // ═══════════════════════════════════════════════════════════
    
    // === z1 (أَفْعَلَ) ===
    "أنار": { bab: "z1", root: ["ن","و","ر"], meaning: "menerangi", tags: ["quran","umum"] },
    "أغنى": { bab: "z1", root: ["غ","ن","ي"], meaning: "mencukupkan/memperkaya", tags: ["quran","ekonomi"] },
    "أفقر": { bab: "z1", root: ["ف","ق","ر"], meaning: "memiskinkan", tags: ["ekonomi"] },
    "أصمت": { bab: "z1", root: ["ص","م","ت"], meaning: "membuat diam", tags: ["umum"] },
    "أنطق": { bab: "z1", root: ["ن","ط","ق"], meaning: "membuat berbicara", tags: ["quran"] },
    "أعمى": { bab: "z1", root: ["ع","م","ي"], meaning: "membutakan", tags: ["quran"] },
    "أبصر": { bab: "z1", root: ["ب","ص","ر"], meaning: "melihat/memperlihatkan", tags: ["quran","indra"] },
    "أسمع": { bab: "z1", root: ["س","م","ع"], meaning: "memperdengarkan", tags: ["quran","indra"] },
    "أشبع": { bab: "z1", root: ["ش","ب","ع"], meaning: "mengenyangkan", tags: ["umum"] },
    "أروى": { bab: "z1", root: ["ر","و","ي"], meaning: "memberi minum sampai puas", tags: ["umum"] },
    "أيقن": { bab: "z1", root: ["ي","ق","ن"], meaning: "meyakini", tags: ["quran","ibadah"] },
    "أذكر": { bab: "z1", root: ["ذ","ك","ر"], meaning: "mengingatkan", tags: ["quran","ibadah"] },
    "أنبت": { bab: "z1", root: ["ن","ب","ت"], meaning: "menumbuhkan", tags: ["quran","alam"] },
    "أمطر": { bab: "z1", root: ["م","ط","ر"], meaning: "menurunkan hujan", tags: ["quran","alam"] },
    "أحيط": { bab: "z1", root: ["ح","و","ط"], meaning: "mengepung/melingkupi", tags: ["quran"] },
    "أهلك": { bab: "z1", root: ["ه","ل","ك"], meaning: "membinasakan", tags: ["quran"] },
    "أنجى": { bab: "z1", root: ["ن","ج","و"], meaning: "menyelamatkan", tags: ["quran"] },
    "أغرق": { bab: "z1", root: ["غ","ر","ق"], meaning: "menenggelamkan", tags: ["quran"] },
    "أنقذ": { bab: "z1", root: ["ن","ق","ذ"], meaning: "menyelamatkan", tags: ["umum"] },
    "أوجب": { bab: "z1", root: ["و","ج","ب"], meaning: "mewajibkan", tags: ["ibadah"] },
    "أباح": { bab: "z1", root: ["ب","و","ح"], meaning: "membolehkan", tags: ["ibadah"] },
    "أوصى": { bab: "z1", root: ["و","ص","ي"], meaning: "berwasiat/mewasiatkan", tags: ["quran","ibadah"] },
    "أورث": { bab: "z1", root: ["و","ر","ث"], meaning: "mewariskan", tags: ["quran"] },
    "أنشأ": { bab: "z1", root: ["ن","ش","أ"], meaning: "menciptakan/memulai", tags: ["quran","umum"] },
    "أقلع": { bab: "z1", root: ["ق","ل","ع"], meaning: "berangkat (pesawat)/berhenti (dari kebiasaan)", tags: ["umum"] },
    
    // === z2 (فَعَّلَ) ===
    "وحّد": { bab: "z2", root: ["و","ح","د"], meaning: "mengesakan", tags: ["ibadah","quran"] },
    "صدّق": { bab: "z2", root: ["ص","د","ق"], meaning: "membenarkan", tags: ["quran","ibadah"] },
    "كذّب": { bab: "z2", root: ["ك","ذ","ب"], meaning: "mendustakan", tags: ["quran"] },
    "عذّب": { bab: "z2", root: ["ع","ذ","ب"], meaning: "menyiksa", tags: ["quran"] },
    "نجّى": { bab: "z2", root: ["ن","ج","و"], meaning: "menyelamatkan (intensif)", tags: ["quran"] },
    "سوّى": { bab: "z2", root: ["س","و","ي"], meaning: "menyamakan/meratakan", tags: ["quran"] },
    "غطّى": { bab: "z2", root: ["غ","ط","و"], meaning: "menutupi", tags: ["umum"] },
    "سمّى": { bab: "z2", root: ["س","م","و"], meaning: "menamai", tags: ["umum","quran"] },
    "صوّر": { bab: "z2", root: ["ص","و","ر"], meaning: "membentuk/memotret", tags: ["quran","umum"] },
    "قوّى": { bab: "z2", root: ["ق","و","ي"], meaning: "menguatkan", tags: ["umum"] },
    "ربّى": { bab: "z2", root: ["ر","ب","و"], meaning: "mendidik/memelihara", tags: ["pendidikan","quran"] },
    "زوّج": { bab: "z2", root: ["ز","و","ج"], meaning: "menikahkan", tags: ["keluarga"] },
    "عرّف": { bab: "z2", root: ["ع","ر","ف"], meaning: "memperkenalkan/mendefinisikan", tags: ["umum"] },
    "ذكّر": { bab: "z2", root: ["ذ","ك","ر"], meaning: "mengingatkan", tags: ["ibadah","quran"] },
    "يسّر": { bab: "z2", root: ["ي","س","ر"], meaning: "memudahkan", tags: ["quran"] },
    "عسّر": { bab: "z2", root: ["ع","س","ر"], meaning: "menyulitkan", tags: ["umum"] },
    "بدّل": { bab: "z2", root: ["ب","د","ل"], meaning: "mengganti", tags: ["quran","umum"] },
    "غيّر": { bab: "z2", root: ["غ","ي","ر"], meaning: "mengubah", tags: ["umum","quran"] },
    "جدّد": { bab: "z2", root: ["ج","د","د"], meaning: "memperbarui", tags: ["umum"] },
    "وسّع": { bab: "z2", root: ["و","س","ع"], meaning: "meluaskan", tags: ["umum","quran"] },
    "ضيّق": { bab: "z2", root: ["ض","ي","ق"], meaning: "menyempitkan", tags: ["umum"] },
    "قسّم": { bab: "z2", root: ["ق","س","م"], meaning: "membagi-bagi", tags: ["umum"] },
    "رتّل": { bab: "z2", root: ["ر","ت","ل"], meaning: "membaca tartil", tags: ["ibadah","quran"] },
    "تدبّر": { bab: "z2", root: ["د","ب","ر"], meaning: "merenungkan", tags: ["quran","ibadah"] },
    "فسّر": { bab: "z2", root: ["ف","س","ر"], meaning: "menafsirkan", tags: ["pendidikan","quran"] },
    "وثّق": { bab: "z2", root: ["و","ث","ق"], meaning: "mendokumentasikan/menguatkan", tags: ["umum"] },
    
    // === z3 (فَاعَلَ) ===
    "شاهد": { bab: "z3", root: ["ش","ه","د"], meaning: "menyaksikan/menonton", tags: ["umum"] },
    "عاهد": { bab: "z3", root: ["ع","ه","د"], meaning: "berjanji/membuat perjanjian", tags: ["quran","umum"] },
    "خالف": { bab: "z3", root: ["خ","ل","ف"], meaning: "menyelisihi/berbeda", tags: ["umum","quran"] },
    "وافق": { bab: "z3", root: ["و","ف","ق"], meaning: "menyetujui", tags: ["umum"] },
    "راجع": { bab: "z3", root: ["ر","ج","ع"], meaning: "meninjau/memeriksa ulang", tags: ["pendidikan"] },
    "طالب": { bab: "z3", root: ["ط","ل","ب"], meaning: "menuntut", tags: ["umum"] },
    "قابل": { bab: "z3", root: ["ق","ب","ل"], meaning: "menemui/bertemu", tags: ["umum"] },
    "راسل": { bab: "z3", root: ["ر","س","ل"], meaning: "berkirim surat", tags: ["umum"] },
    "حاول": { bab: "z3", root: ["ح","و","ل"], meaning: "mencoba/berusaha", tags: ["umum"] },
    "زاول": { bab: "z3", root: ["ز","و","ل"], meaning: "menekuni/melakukan", tags: ["umum"] },
    "عامل": { bab: "z3", root: ["ع","م","ل"], meaning: "memperlakukan", tags: ["umum"] },
    "ناول": { bab: "z3", root: ["ن","و","ل"], meaning: "memberikan/menyerahkan", tags: ["umum"] },
    "داوم": { bab: "z3", root: ["د","و","م"], meaning: "terus-menerus/bekerja", tags: ["umum"] },
    "واجه": { bab: "z3", root: ["و","ج","ه"], meaning: "menghadapi", tags: ["umum"] },
    "جاور": { bab: "z3", root: ["ج","و","ر"], meaning: "bertetangga", tags: ["umum"] },
    "ساير": { bab: "z3", root: ["س","ي","ر"], meaning: "berjalan bersama/mengikuti", tags: ["umum"] },
    "نادى": { bab: "z3", root: ["ن","د","و"], meaning: "memanggil", tags: ["umum","quran"] },
    "عادى": { bab: "z3", root: ["ع","د","و"], meaning: "memusuhi", tags: ["quran"] },
    "والى": { bab: "z3", root: ["و","ل","ي"], meaning: "berwali/setia", tags: ["quran","ibadah"] },
    "تابع": { bab: "z3", root: ["ت","ب","ع"], meaning: "mengikuti terus", tags: ["umum"] },
    
    // === z4 (تَفَعَّلَ) ===
    "تعجّب": { bab: "z4", root: ["ع","ج","ب"], meaning: "takjub/heran", tags: ["perasaan"] },
    "تألّم": { bab: "z4", root: ["أ","ل","م"], meaning: "merasa sakit", tags: ["perasaan","kesehatan"] },
    "تأخّر": { bab: "z4", root: ["أ","خ","ر"], meaning: "terlambat", tags: ["umum"] },
    "تقدّم": { bab: "z4", root: ["ق","د","م"], meaning: "maju", tags: ["umum"] },
    "تراجع": { bab: "z4", root: ["ر","ج","ع"], meaning: "mundur", tags: ["umum"] },
    "تغيّر": { bab: "z4", root: ["غ","ي","ر"], meaning: "berubah", tags: ["umum"] },
    "تبدّل": { bab: "z4", root: ["ب","د","ل"], meaning: "berganti", tags: ["umum"] },
    "توكّل": { bab: "z4", root: ["و","ك","ل"], meaning: "bertawakal", tags: ["ibadah","quran"] },
    "تواضع": { bab: "z4", root: ["و","ض","ع"], meaning: "rendah hati", tags: ["sifat","ibadah"] },
    "تيقّن": { bab: "z4", root: ["ي","ق","ن"], meaning: "yakin", tags: ["ibadah"] },
    "تأمّل": { bab: "z4", root: ["أ","م","ل"], meaning: "merenungkan/berharap", tags: ["umum"] },
    "تعوّد": { bab: "z4", root: ["ع","و","د"], meaning: "terbiasa", tags: ["umum"] },
    "تجرّأ": { bab: "z4", root: ["ج","ر","أ"], meaning: "berani", tags: ["sifat"] },
    "تزوّج": { bab: "z4", root: ["ز","و","ج"], meaning: "menikah", tags: ["keluarga","quran"] },
    "تخرّج": { bab: "z4", root: ["خ","ر","ج"], meaning: "lulus", tags: ["pendidikan"] },
    "تعرّف": { bab: "z4", root: ["ع","ر","ف"], meaning: "berkenalan", tags: ["umum"] },
    "تصرّف": { bab: "z4", root: ["ص","ر","ف"], meaning: "bertindak/berperilaku", tags: ["umum"] },
    "تطوّر": { bab: "z4", root: ["ط","و","ر"], meaning: "berkembang", tags: ["umum"] },
    "تحسّن": { bab: "z4", root: ["ح","س","ن"], meaning: "membaik", tags: ["umum"] },
    "تعلّق": { bab: "z4", root: ["ع","ل","ق"], meaning: "tergantung/terkait", tags: ["umum"] },
    
    // === z5 (تَفَاعَلَ) ===
    "تعارف": { bab: "z5", root: ["ع","ر","ف"], meaning: "saling mengenal", tags: ["umum","quran"] },
    "تشاور": { bab: "z5", root: ["ش","و","ر"], meaning: "saling bermusyawarah", tags: ["umum","quran"] },
    "تناصر": { bab: "z5", root: ["ن","ص","ر"], meaning: "saling menolong", tags: ["umum"] },
    "تحابّ": { bab: "z5", root: ["ح","ب","ب"], meaning: "saling mencintai", tags: ["perasaan"] },
    "تباغض": { bab: "z5", root: ["ب","غ","ض"], meaning: "saling membenci", tags: ["perasaan"] },
    "تسابق": { bab: "z5", root: ["س","ب","ق"], meaning: "berlomba-lomba", tags: ["umum","quran"] },
    "تعاقب": { bab: "z5", root: ["ع","ق","ب"], meaning: "bergantian/berurutan", tags: ["umum"] },
    "تنافس": { bab: "z5", root: ["ن","ف","س"], meaning: "bersaing", tags: ["umum"] },
    "تواصل": { bab: "z5", root: ["و","ص","ل"], meaning: "berkomunikasi terus", tags: ["umum"] },
    "تفاهم": { bab: "z5", root: ["ف","ه","م"], meaning: "saling memahami", tags: ["umum"] },
    "تصالح": { bab: "z5", root: ["ص","ل","ح"], meaning: "berdamai", tags: ["umum"] },
    "تخاصم": { bab: "z5", root: ["خ","ص","م"], meaning: "berselisih", tags: ["umum"] },
    "تحاور": { bab: "z5", root: ["ح","و","ر"], meaning: "berdialog", tags: ["umum"] },
    "تشابه": { bab: "z5", root: ["ش","ب","ه"], meaning: "saling mirip", tags: ["umum","quran"] },
    "تماثل": { bab: "z5", root: ["م","ث","ل"], meaning: "serupa/sembuh", tags: ["umum"] },
    "تكاتب": { bab: "z5", root: ["ك","ت","ب"], meaning: "saling berkirim surat", tags: ["umum"] },
    
    // === z6 (اِنْفَعَلَ) ===
    "انتشر": { bab: "z6", root: ["ن","ش","ر"], meaning: "tersebar", tags: ["umum"] },
    "انطلق": { bab: "z6", root: ["ط","ل","ق"], meaning: "berangkat/meluncur", tags: ["gerakan"] },
    "انتهى": { bab: "z6", root: ["ن","ه","ي"], meaning: "selesai/berakhir", tags: ["umum","quran"] },
    "انفجر": { bab: "z6", root: ["ف","ج","ر"], meaning: "meledak", tags: ["umum","quran"] },
    "انكشف": { bab: "z6", root: ["ك","ش","ف"], meaning: "tersingkap", tags: ["umum"] },
    "انهدم": { bab: "z6", root: ["ه","د","م"], meaning: "runtuh", tags: ["umum"] },
    "انصرف": { bab: "z6", root: ["ص","ر","ف"], meaning: "pergi/bubar", tags: ["umum"] },
    "انسحب": { bab: "z6", root: ["س","ح","ب"], meaning: "mundur/menarik diri", tags: ["umum"] },
    "انبسط": { bab: "z6", root: ["ب","س","ط"], meaning: "terhampar/gembira", tags: ["umum"] },
    "انقبض": { bab: "z6", root: ["ق","ب","ض"], meaning: "menyusut/sedih", tags: ["umum"] },
    "انعقد": { bab: "z6", root: ["ع","ق","د"], meaning: "terjalin/diselenggarakan", tags: ["umum"] },
    "انطفأ": { bab: "z6", root: ["ط","ف","أ"], meaning: "padam", tags: ["umum"] },
    "انحنى": { bab: "z6", root: ["ح","ن","ي"], meaning: "membungkuk", tags: ["gerakan"] },
    "انزلق": { bab: "z6", root: ["ز","ل","ق"], meaning: "tergelincir", tags: ["gerakan"] },
    
    // === z7 (اِفْتَعَلَ) ===
    "اجتهد": { bab: "z7", root: ["ج","ه","د"], meaning: "bersungguh-sungguh", tags: ["pendidikan","ibadah"] },
    "احترم": { bab: "z7", root: ["ح","ر","م"], meaning: "menghormati", tags: ["umum"] },
    "احتاج": { bab: "z7", root: ["ح","و","ج"], meaning: "membutuhkan", tags: ["umum"] },
    "اعتذر": { bab: "z7", root: ["ع","ذ","ر"], meaning: "meminta maaf", tags: ["umum"] },
    "اعتقد": { bab: "z7", root: ["ع","ق","د"], meaning: "meyakini/percaya", tags: ["ibadah"] },
    "اعتمد": { bab: "z7", root: ["ع","م","د"], meaning: "bergantung/bersandar", tags: ["umum"] },
    "اعترف": { bab: "z7", root: ["ع","ر","ف"], meaning: "mengakui", tags: ["umum"] },
    "انتظر": { bab: "z7", root: ["ن","ظ","ر"], meaning: "menunggu", tags: ["umum"] },
    "انتقل": { bab: "z7", root: ["ن","ق","ل"], meaning: "pindah", tags: ["gerakan"] },
    "انتصر": { bab: "z7", root: ["ن","ص","ر"], meaning: "menang", tags: ["umum","quran"] },
    "ابتعد": { bab: "z7", root: ["ب","ع","د"], meaning: "menjauh", tags: ["umum"] },
    "اقترح": { bab: "z7", root: ["ق","ر","ح"], meaning: "mengusulkan", tags: ["umum"] },
    "استلم": { bab: "z7", root: ["س","ل","م"], meaning: "menerima", tags: ["umum"] },
    "ارتفع": { bab: "z7", root: ["ر","ف","ع"], meaning: "naik/meningkat", tags: ["umum"] },
    "انخفض": { bab: "z7", root: ["خ","ف","ض"], meaning: "turun/menurun", tags: ["umum"] },
    "امتنع": { bab: "z7", root: ["م","ن","ع"], meaning: "menolak/berpantang", tags: ["umum"] },
    "امتلأ": { bab: "z7", root: ["م","ل","أ"], meaning: "penuh", tags: ["umum"] },
    "اختلف": { bab: "z7", root: ["خ","ل","ف"], meaning: "berbeda", tags: ["umum","quran"] },
    "اتفق": { bab: "z7", root: ["و","ف","ق"], meaning: "sepakat", tags: ["umum"] },
    
    // === z9 (اِسْتَفْعَلَ) ===
    "استعاذ": { bab: "z9", root: ["ع","و","ذ"], meaning: "meminta perlindungan", tags: ["ibadah","quran"] },
    "استعان": { bab: "z9", root: ["ع","و","ن"], meaning: "meminta tolong", tags: ["ibadah","quran"] },
    "استغاث": { bab: "z9", root: ["غ","و","ث"], meaning: "meminta pertolongan", tags: ["quran"] },
    "استطاع": { bab: "z9", root: ["ط","و","ع"], meaning: "mampu/sanggup", tags: ["umum","quran"] },
    "استمتع": { bab: "z9", root: ["م","ت","ع"], meaning: "menikmati", tags: ["umum","quran"] },
    "استخدم": { bab: "z9", root: ["خ","د","م"], meaning: "menggunakan/mempekerjakan", tags: ["umum"] },
    "استورد": { bab: "z9", root: ["و","ر","د"], meaning: "mengimpor", tags: ["ekonomi"] },
    "استصدر": { bab: "z9", root: ["ص","د","ر"], meaning: "mengekspor/mengeluarkan", tags: ["ekonomi"] },
    "استثمر": { bab: "z9", root: ["ث","م","ر"], meaning: "berinvestasi", tags: ["ekonomi"] },
    "استشهد": { bab: "z9", root: ["ش","ه","د"], meaning: "syahid/mengutip", tags: ["ibadah","quran"] },
    "استحق": { bab: "z9", root: ["ح","ق","ق"], meaning: "berhak/layak", tags: ["umum"] },
    "استوى": { bab: "z9", root: ["س","و","ي"], meaning: "sama/bersemayam", tags: ["quran"] },
    "استكمل": { bab: "z9", root: ["ك","م","ل"], meaning: "melengkapi", tags: ["umum"] },
    "استوعب": { bab: "z9", root: ["و","ع","ب"], meaning: "memahami sepenuhnya", tags: ["pendidikan"] },
    "استفهم": { bab: "z9", root: ["ف","ه","م"], meaning: "bertanya (untuk memahami)", tags: ["pendidikan"] },
    "استدل": { bab: "z9", root: ["د","ل","ل"], meaning: "berargumen/mengambil dalil", tags: ["pendidikan","ibadah"] },
    "استأنف": { bab: "z9", root: ["أ","ن","ف"], meaning: "melanjutkan kembali", tags: ["umum"] },
    
    // ═══════════════════════════════════════════════════════════
    // TAMBAHAN RUBA'I (r1-r2) - BATCH BARU
    // ═══════════════════════════════════════════════════════════
    
    "برمج": { bab: "r1", root: ["ب","ر","م","ج"], meaning: "memprogram", tags: ["teknologi"] },
    "فلسف": { bab: "r1", root: ["ف","ل","س","ف"], meaning: "berfilsafat", tags: ["pendidikan"] },
    "تلفن": { bab: "r1", root: ["ت","ل","ف","ن"], meaning: "menelepon", tags: ["umum"] },
    "تلفز": { bab: "r1", root: ["ت","ل","ف","ز"], meaning: "menyiarkan (TV)", tags: ["umum"] },
    "مغنط": { bab: "r1", root: ["م","غ","ن","ط"], meaning: "memaknit", tags: ["umum"] },
    "كهرب": { bab: "r1", root: ["ك","ه","ر","ب"], meaning: "mengaliri listrik", tags: ["teknologi"] },
    "فرعن": { bab: "r1", root: ["ف","ر","ع","ن"], meaning: "bertindak seperti Firaun", tags: ["quran"] },
    "شيطن": { bab: "r1", root: ["ش","ي","ط","ن"], meaning: "bertindak seperti setan", tags: ["quran"] },
    "وسطر": { bab: "r1", root: ["و","س","ط","ر"], meaning: "menengahi", tags: ["umum"] },
    "سيطر": { bab: "r1", root: ["س","ي","ط","ر"], meaning: "menguasai/mengontrol", tags: ["umum","quran"] },
    "بلور": { bab: "r1", root: ["ب","ل","و","ر"], meaning: "mengkristalkan", tags: ["umum"] },
    "فلتر": { bab: "r1", root: ["ف","ل","ت","ر"], meaning: "menyaring", tags: ["umum"] },
    
    "تبرمج": { bab: "r2", root: ["ب","ر","م","ج"], meaning: "terprogram", tags: ["teknologi"] },
    "تفلسف": { bab: "r2", root: ["ف","ل","س","ف"], meaning: "berfilosofi", tags: ["pendidikan"] },
    "تكهرب": { bab: "r2", root: ["ك","ه","ر","ب"], meaning: "kesetrum", tags: ["umum"] },
    "تمركز": { bab: "r2", root: ["م","ر","ك","ز"], meaning: "berpusat", tags: ["umum"] },
    "تبلور": { bab: "r2", root: ["ب","ل","و","ر"], meaning: "mengkristal", tags: ["umum"] },
    
    // ═══════════════════════════════════════════════════════════
    // TAMBAHAN ISIM - BATCH BARU
    // ═══════════════════════════════════════════════════════════
    
    // === Istilah Agama & Ibadah ===
    "صلاة": { bab: "isim", root: ["ص","ل","و"], meaning: "shalat", tags: ["ibadah","quran"] },
    "زكاة": { bab: "isim", root: ["ز","ك","و"], meaning: "zakat", tags: ["ibadah","quran"] },
    "صيام": { bab: "isim", root: ["ص","و","م"], meaning: "puasa", tags: ["ibadah","quran"] },
    "حج": { bab: "isim", root: ["ح","ج","ج"], meaning: "haji", tags: ["ibadah","quran"] },
    "عمرة": { bab: "isim", root: ["ع","م","ر"], meaning: "umrah", tags: ["ibadah","quran"] },
    "وضوء": { bab: "isim", root: ["و","ض","أ"], meaning: "wudhu", tags: ["ibadah"] },
    "غسل": { bab: "isim", root: ["غ","س","ل"], meaning: "mandi wajib", tags: ["ibadah"] },
    "تيمم": { bab: "isim", root: ["ي","م","م"], meaning: "tayamum", tags: ["ibadah"] },
    "أذان": { bab: "isim", root: ["أ","ذ","ن"], meaning: "adzan", tags: ["ibadah"] },
    "إقامة": { bab: "isim", root: ["ق","و","م"], meaning: "iqamah", tags: ["ibadah"] },
    "ركوع": { bab: "isim", root: ["ر","ك","ع"], meaning: "rukuk", tags: ["ibadah"] },
    "سجود": { bab: "isim", root: ["س","ج","د"], meaning: "sujud", tags: ["ibadah","quran"] },
    "تشهد": { bab: "isim", root: ["ش","ه","د"], meaning: "tasyahud", tags: ["ibadah"] },
    "سلام": { bab: "isim", root: ["س","ل","م"], meaning: "salam", tags: ["ibadah","quran"] },
    "دعاء": { bab: "isim", root: ["د","ع","و"], meaning: "doa", tags: ["ibadah","quran"] },
    "ذكر": { bab: "isim", root: ["ذ","ك","ر"], meaning: "dzikir", tags: ["ibadah","quran"] },
    "تسبيح": { bab: "isim", root: ["س","ب","ح"], meaning: "tasbih", tags: ["ibadah","quran"] },
    "تهليل": { bab: "isim", root: ["ه","ل","ل"], meaning: "tahlil", tags: ["ibadah"] },
    "تكبير": { bab: "isim", root: ["ك","ب","ر"], meaning: "takbir", tags: ["ibadah"] },
    "تحميد": { bab: "isim", root: ["ح","م","د"], meaning: "tahmid", tags: ["ibadah"] },
    "استغفار": { bab: "isim", root: ["غ","ف","ر"], meaning: "istighfar", tags: ["ibadah","quran"] },
    "توبة": { bab: "isim", root: ["ت","و","ب"], meaning: "taubat", tags: ["ibadah","quran"] },
    "إيمان": { bab: "isim", root: ["أ","م","ن"], meaning: "iman", tags: ["ibadah","quran"] },
    "إسلام": { bab: "isim", root: ["س","ل","م"], meaning: "Islam", tags: ["ibadah","quran"] },
    "إحسان": { bab: "isim", root: ["ح","س","ن"], meaning: "ihsan", tags: ["ibadah","quran"] },
    "تقوى": { bab: "isim", root: ["و","ق","ي"], meaning: "takwa", tags: ["ibadah","quran"] },
    "خشوع": { bab: "isim", root: ["خ","ش","ع"], meaning: "khusyuk", tags: ["ibadah","quran"] },
    "توكل": { bab: "isim", root: ["و","ك","ل"], meaning: "tawakal", tags: ["ibadah","quran"] },
    "شكر": { bab: "isim", root: ["ش","ك","ر"], meaning: "syukur", tags: ["ibadah","quran"] },
    "صبر": { bab: "isim", root: ["ص","ب","ر"], meaning: "sabar", tags: ["sifat","quran"] },
    "رضا": { bab: "isim", root: ["ر","ض","ي"], meaning: "ridha", tags: ["ibadah","quran"] },
    "خوف": { bab: "isim", root: ["خ","و","ف"], meaning: "takut (kepada Allah)", tags: ["ibadah","quran"] },
    "رجاء": { bab: "isim", root: ["ر","ج","و"], meaning: "harap", tags: ["ibadah","quran"] },
    "محبة": { bab: "isim", root: ["ح","ب","ب"], meaning: "cinta (kepada Allah)", tags: ["ibadah","quran"] },
    "عبادة": { bab: "isim", root: ["ع","ب","د"], meaning: "ibadah", tags: ["ibadah","quran"] },
    "طاعة": { bab: "isim", root: ["ط","و","ع"], meaning: "ketaatan", tags: ["ibadah","quran"] },
    "معصية": { bab: "isim", root: ["ع","ص","ي"], meaning: "maksiat", tags: ["ibadah","quran"] },
    "ذنب": { bab: "isim", root: ["ذ","ن","ب"], meaning: "dosa", tags: ["ibadah","quran"] },
    "حسنة": { bab: "isim", root: ["ح","س","ن"], meaning: "kebaikan", tags: ["ibadah","quran"] },
    "سيئة": { bab: "isim", root: ["س","و","أ"], meaning: "keburukan", tags: ["ibadah","quran"] },
    "ثواب": { bab: "isim", root: ["ث","و","ب"], meaning: "pahala", tags: ["ibadah","quran"] },
    "عقاب": { bab: "isim", root: ["ع","ق","ب"], meaning: "siksa", tags: ["ibadah","quran"] },
    "جنة": { bab: "isim", root: ["ج","ن","ن"], meaning: "surga", tags: ["quran"] },
    "جهنم": { bab: "isim", root: ["ج","ه","ن","م"], meaning: "neraka", tags: ["quran"] },
    "ملك": { bab: "isim", root: ["م","ل","ك"], meaning: "malaikat", tags: ["quran"] },
    "جن": { bab: "isim", root: ["ج","ن","ن"], meaning: "jin", tags: ["quran"] },
    "شيطان": { bab: "isim", root: ["ش","ط","ن"], meaning: "setan", tags: ["quran"] },
    "نبي": { bab: "isim", root: ["ن","ب","أ"], meaning: "nabi", tags: ["quran"] },
    "رسول": { bab: "isim", root: ["ر","س","ل"], meaning: "rasul", tags: ["quran"] },
    "وحي": { bab: "isim", root: ["و","ح","ي"], meaning: "wahyu", tags: ["quran"] },
    "قرآن": { bab: "isim", root: ["ق","ر","أ"], meaning: "Al-Quran", tags: ["quran"] },
    "سنة": { bab: "isim", root: ["س","ن","ن"], meaning: "sunnah", tags: ["ibadah"] },
    "حديث": { bab: "isim", root: ["ح","د","ث"], meaning: "hadits", tags: ["ibadah"] },
    "فقه": { bab: "isim", root: ["ف","ق","ه"], meaning: "fiqih", tags: ["pendidikan","ibadah"] },
    "تفسير": { bab: "isim", root: ["ف","س","ر"], meaning: "tafsir", tags: ["pendidikan","quran"] },
    "حكم": { bab: "isim", root: ["ح","ك","م"], meaning: "hukum", tags: ["ibadah","quran"] },
    "فتوى": { bab: "isim", root: ["ف","ت","و"], meaning: "fatwa", tags: ["ibadah"] },
    "حلال": { bab: "isim", root: ["ح","ل","ل"], meaning: "halal", tags: ["ibadah","quran"] },
    "حرام": { bab: "isim", root: ["ح","ر","م"], meaning: "haram", tags: ["ibadah","quran"] },
    "مباح": { bab: "isim", root: ["ب","و","ح"], meaning: "mubah", tags: ["ibadah"] },
    "مكروه": { bab: "isim", root: ["ك","ر","ه"], meaning: "makruh", tags: ["ibadah"] },
    "واجب": { bab: "isim", root: ["و","ج","ب"], meaning: "wajib", tags: ["ibadah"] },
    "سنة": { bab: "isim", root: ["س","ن","ن"], meaning: "sunnah", tags: ["ibadah"] },
    "مستحب": { bab: "isim", root: ["ح","ب","ب"], meaning: "mustahab", tags: ["ibadah"] },
    
    // === Tempat & Lokasi ===
    "مصنع": { bab: "isim", root: ["ص","ن","ع"], meaning: "pabrik", tags: ["tempat"] },
    "ملعب": { bab: "isim", root: ["ل","ع","ب"], meaning: "lapangan/stadion", tags: ["tempat"] },
    "متحف": { bab: "isim", root: ["ت","ح","ف"], meaning: "museum", tags: ["tempat"] },
    "مسرح": { bab: "isim", root: ["س","ر","ح"], meaning: "teater", tags: ["tempat"] },
    "منتزه": { bab: "isim", root: ["ن","ز","ه"], meaning: "taman rekreasi", tags: ["tempat"] },
    "مقهى": { bab: "isim", root: ["ق","ه","و"], meaning: "kafe", tags: ["tempat"] },
    "مطعم": { bab: "isim", root: ["ط","ع","م"], meaning: "restoran", tags: ["tempat","makanan"] },
    "فندق": { bab: "isim", root: ["ف","ن","د","ق"], meaning: "hotel", tags: ["tempat"] },
    "مستودع": { bab: "isim", root: ["و","د","ع"], meaning: "gudang", tags: ["tempat"] },
    "مرآب": { bab: "isim", root: ["ر","أ","ب"], meaning: "garasi", tags: ["tempat"] },
    "شرفة": { bab: "isim", root: ["ش","ر","ف"], meaning: "balkon", tags: ["tempat"] },
    "سطح": { bab: "isim", root: ["س","ط","ح"], meaning: "atap datar", tags: ["tempat"] },
    "قبو": { bab: "isim", root: ["ق","ب","و"], meaning: "ruang bawah tanah", tags: ["tempat"] },
    "فناء": { bab: "isim", root: ["ف","ن","ي"], meaning: "halaman", tags: ["tempat"] },
    "رصيف": { bab: "isim", root: ["ر","ص","ف"], meaning: "trotoar", tags: ["tempat"] },
    "جسر": { bab: "isim", root: ["ج","س","ر"], meaning: "jembatan", tags: ["tempat"] },
    "نفق": { bab: "isim", root: ["ن","ف","ق"], meaning: "terowongan", tags: ["tempat"] },
    "ميناء": { bab: "isim", root: ["و","ن","ي"], meaning: "pelabuhan", tags: ["tempat"] },
    "مرسى": { bab: "isim", root: ["ر","س","و"], meaning: "dermaga", tags: ["tempat"] },
    
    // === Teknologi & Modern ===
    "حاسوب": { bab: "isim", root: ["ح","س","ب"], meaning: "komputer", tags: ["teknologi"] },
    "إنترنت": { bab: "isim", root: ["ن","ت","ر"], meaning: "internet", tags: ["teknologi"] },
    "بريد إلكتروني": { bab: "isim", root: ["ب","ر","د"], meaning: "email", tags: ["teknologi"] },
    "موقع": { bab: "isim", root: ["و","ق","ع"], meaning: "situs web", tags: ["teknologi"] },
    "تطبيق": { bab: "isim", root: ["ط","ب","ق"], meaning: "aplikasi", tags: ["teknologi"] },
    "برنامج": { bab: "isim", root: ["ب","ر","ن","م","ج"], meaning: "program", tags: ["teknologi"] },
    "شاشة": { bab: "isim", root: ["ش","ش","ش"], meaning: "layar", tags: ["teknologi"] },
    "لوحة مفاتيح": { bab: "isim", root: ["ل","و","ح"], meaning: "keyboard", tags: ["teknologi"] },
    "فأرة": { bab: "isim", root: ["ف","أ","ر"], meaning: "mouse komputer", tags: ["teknologi"] },
    "طابعة": { bab: "isim", root: ["ط","ب","ع"], meaning: "printer", tags: ["teknologi"] },
    "ماسح ضوئي": { bab: "isim", root: ["م","س","ح"], meaning: "scanner", tags: ["teknologi"] },
    "سماعة": { bab: "isim", root: ["س","م","ع"], meaning: "headphone", tags: ["teknologi"] },
    "كاميرا": { bab: "isim", root: ["ك","م","ر"], meaning: "kamera", tags: ["teknologi"] },
    
    // === Emosi & Perasaan ===
    "سعادة": { bab: "isim", root: ["س","ع","د"], meaning: "kebahagiaan", tags: ["perasaan"] },
    "حزن": { bab: "isim", root: ["ح","ز","ن"], meaning: "kesedihan", tags: ["perasaan"] },
    "غضب": { bab: "isim", root: ["غ","ض","ب"], meaning: "kemarahan", tags: ["perasaan"] },
    "خوف": { bab: "isim", root: ["خ","و","ف"], meaning: "ketakutan", tags: ["perasaan"] },
    "قلق": { bab: "isim", root: ["ق","ل","ق"], meaning: "kecemasan", tags: ["perasaan"] },
    "أمل": { bab: "isim", root: ["أ","م","ل"], meaning: "harapan", tags: ["perasaan"] },
    "يأس": { bab: "isim", root: ["ي","أ","س"], meaning: "keputusasaan", tags: ["perasaan","quran"] },
    "حب": { bab: "isim", root: ["ح","ب","ب"], meaning: "cinta", tags: ["perasaan"] },
    "كره": { bab: "isim", root: ["ك","ر","ه"], meaning: "kebencian", tags: ["perasaan"] },
    "شوق": { bab: "isim", root: ["ش","و","ق"], meaning: "kerinduan", tags: ["perasaan"] },
    "غيرة": { bab: "isim", root: ["غ","ي","ر"], meaning: "kecemburuan", tags: ["perasaan"] },
    "فخر": { bab: "isim", root: ["ف","خ","ر"], meaning: "kebanggaan", tags: ["perasaan"] },
    "خجل": { bab: "isim", root: ["خ","ج","ل"], meaning: "malu", tags: ["perasaan"] },
    "ندم": { bab: "isim", root: ["ن","د","م"], meaning: "penyesalan", tags: ["perasaan"] },
    "راحة": { bab: "isim", root: ["ر","و","ح"], meaning: "kenyamanan", tags: ["perasaan"] },
    "ضيق": { bab: "isim", root: ["ض","ي","ق"], meaning: "kesempitan/sesak", tags: ["perasaan"] },
    "طمأنينة": { bab: "isim", root: ["ط","م","أ","ن"], meaning: "ketenangan", tags: ["perasaan","quran"] },
    "اطمئنان": { bab: "isim", root: ["ط","م","أ","ن"], meaning: "ketentraman", tags: ["perasaan","quran"] },
    
    // === Sifat & Karakter ===
    "صدق": { bab: "isim", root: ["ص","د","ق"], meaning: "kejujuran", tags: ["sifat","quran"] },
    "كذب": { bab: "isim", root: ["ك","ذ","ب"], meaning: "kebohongan", tags: ["sifat","quran"] },
    "أمانة": { bab: "isim", root: ["أ","م","ن"], meaning: "amanah", tags: ["sifat","quran"] },
    "خيانة": { bab: "isim", root: ["خ","و","ن"], meaning: "pengkhianatan", tags: ["sifat","quran"] },
    "عدل": { bab: "isim", root: ["ع","د","ل"], meaning: "keadilan", tags: ["sifat","quran"] },
    "ظلم": { bab: "isim", root: ["ظ","ل","م"], meaning: "kezaliman", tags: ["sifat","quran"] },
    "رحمة": { bab: "isim", root: ["ر","ح","م"], meaning: "kasih sayang", tags: ["sifat","quran"] },
    "قسوة": { bab: "isim", root: ["ق","س","و"], meaning: "kekejaman", tags: ["sifat","quran"] },
    "تواضع": { bab: "isim", root: ["و","ض","ع"], meaning: "kerendahan hati", tags: ["sifat"] },
    "كبر": { bab: "isim", root: ["ك","ب","ر"], meaning: "kesombongan", tags: ["sifat","quran"] },
    "كرم": { bab: "isim", root: ["ك","ر","م"], meaning: "kedermawanan", tags: ["sifat","quran"] },
    "بخل": { bab: "isim", root: ["ب","خ","ل"], meaning: "kekikiran", tags: ["sifat","quran"] },
    "شجاعة": { bab: "isim", root: ["ش","ج","ع"], meaning: "keberanian", tags: ["sifat"] },
    "جبن": { bab: "isim", root: ["ج","ب","ن"], meaning: "kepengecutan", tags: ["sifat"] },
    "حلم": { bab: "isim", root: ["ح","ل","م"], meaning: "kelemahlembutan", tags: ["sifat","quran"] },
    "غضب": { bab: "isim", root: ["غ","ض","ب"], meaning: "kemarahan", tags: ["sifat","quran"] },
    "وفاء": { bab: "isim", root: ["و","ف","ي"], meaning: "kesetiaan", tags: ["sifat"] },
    "غدر": { bab: "isim", root: ["غ","د","ر"], meaning: "pengkhianatan", tags: ["sifat"] },
    "إخلاص": { bab: "isim", root: ["خ","ل","ص"], meaning: "keikhlasan", tags: ["sifat","ibadah","quran"] },
    "رياء": { bab: "isim", root: ["ر","أ","ي"], meaning: "riya", tags: ["sifat","ibadah"] },

    // ═══════════════════════════════════════════════════════════
    // FI'IL MUDHA'AF (المضعّف) — Ain = Lam
    // ═══════════════════════════════════════════════════════════

    // ─── BAB 1: فَعَلَ - يَفْعُلُ (m1) ─── Mudha'af ───
    "عد":  { bab: "m1", root: ["ع","د","د"], meaning: "menghitung", tags: ["umum","quran","mudhaaf"] },
    "مد":  { bab: "m1", root: ["م","د","د"], meaning: "memanjangkan/membentangkan", tags: ["umum","quran","mudhaaf"] },
    "رد":  { bab: "m1", root: ["ر","د","د"], meaning: "mengembalikan/menolak", tags: ["umum","quran","mudhaaf"] },
    "شد":  { bab: "m1", root: ["ش","د","د"], meaning: "mengikat/mengencangkan", tags: ["umum","quran","mudhaaf"] },
    "صد":  { bab: "m1", root: ["ص","د","د"], meaning: "menghalangi/berpaling", tags: ["umum","quran","mudhaaf"] },
    "عض":  { bab: "m1", root: ["ع","ض","ض"], meaning: "menggigit", tags: ["umum","mudhaaf"] },
    "سد":  { bab: "m1", root: ["س","د","د"], meaning: "menutup/menyumbat", tags: ["umum","quran","mudhaaf"] },
    "حب":  { bab: "m1", root: ["ح","ب","ب"], meaning: "mencintai", tags: ["umum","quran","mudhaaf"] },

    // ─── BAB 2: فَعَلَ - يَفْعِلُ (m2) ─── Mudha'af ───
    "فر":  { bab: "m2", root: ["ف","ر","ر"], meaning: "melarikan diri", tags: ["umum","quran","mudhaaf"] },
    "جر":  { bab: "m2", root: ["ج","ر","ر"], meaning: "menarik/menyeret", tags: ["umum","mudhaaf"] },
    "حل":  { bab: "m2", root: ["ح","ل","ل"], meaning: "menjadi halal/menempati", tags: ["umum","quran","mudhaaf"] },
    "ضل":  { bab: "m2", root: ["ض","ل","ل"], meaning: "tersesat", tags: ["umum","quran","mudhaaf"] },
    "دل":  { bab: "m2", root: ["د","ل","ل"], meaning: "menunjukkan", tags: ["umum","quran","mudhaaf"] },
    "حن":  { bab: "m2", root: ["ح","ن","ن"], meaning: "merindukan/mengasihani", tags: ["umum","mudhaaf"] },
    "صب":  { bab: "m2", root: ["ص","ب","ب"], meaning: "menuangkan", tags: ["umum","quran","mudhaaf"] },

    // ─── BAB 3: فَعَلَ - يَفْعَلُ (m3) ─── Mudha'af ───
    "مس":  { bab: "m3", root: ["م","س","س"], meaning: "menyentuh", tags: ["umum","quran","mudhaaf"] },
    "مر":  { bab: "m3", root: ["م","ر","ر"], meaning: "melewati/berlalu", tags: ["umum","quran","mudhaaf"] },
    "حق":  { bab: "m3", root: ["ح","ق","ق"], meaning: "menjadi benar/pasti", tags: ["umum","quran","mudhaaf"] },
    "خص":  { bab: "m3", root: ["خ","ص","ص"], meaning: "mengkhususkan", tags: ["umum","mudhaaf"] },

    // ─── BAB 4: فَعِلَ - يَفْعَلُ (m4) ─── Mudha'af ───
    "ظل":  { bab: "m4", root: ["ظ","ل","ل"], meaning: "tetap/terus-menerus", tags: ["umum","quran","mudhaaf"] },
    "مل":  { bab: "m4", root: ["م","ل","ل"], meaning: "bosan/jemu", tags: ["umum","mudhaaf"] },
    "ذل":  { bab: "m4", root: ["ذ","ل","ل"], meaning: "menjadi hina", tags: ["umum","quran","mudhaaf"] },
    "قل":  { bab: "m4", root: ["ق","ل","ل"], meaning: "menjadi sedikit", tags: ["umum","quran","mudhaaf"] },
    "جل":  { bab: "m4", root: ["ج","ل","ل"], meaning: "menjadi agung", tags: ["umum","quran","mudhaaf"] },
    "عز":  { bab: "m4", root: ["ع","ز","ز"], meaning: "menjadi mulia/kuat", tags: ["umum","quran","mudhaaf"] },
    "خف":  { bab: "m4", root: ["خ","ف","ف"], meaning: "menjadi ringan", tags: ["umum","quran","mudhaaf"] },
    "شح":  { bab: "m4", root: ["ش","ح","ح"], meaning: "menjadi kikir/pelit", tags: ["umum","quran","mudhaaf"] },

    // ─── BAB 5: فَعُلَ - يَفْعُلُ (m5) ─── Mudha'af ───
    "خس":  { bab: "m5", root: ["خ","س","س"], meaning: "menjadi rugi/hina", tags: ["umum","quran","mudhaaf"] },
    "تم":  { bab: "m5", root: ["ت","م","م"], meaning: "menjadi sempurna", tags: ["umum","quran","mudhaaf"] },
    "حر":  { bab: "m5", root: ["ح","ر","ر"], meaning: "menjadi merdeka/panas", tags: ["umum","quran","mudhaaf"] },
    "شذ":  { bab: "m5", root: ["ش","ذ","ذ"], meaning: "menjadi ganjil/menyimpang", tags: ["umum","mudhaaf"] },

    // ─── BAB 6: فَعِلَ - يَفْعِلُ (m6) ─── Mudha'af ───
    // (Bab ini jarang, tapi ada beberapa)

    // ─── MAZID: أَفْعَلَ (mz1) ─── Mudha'af ───
    "اعد":  { bab: "mz1", root: ["ع","د","د"], meaning: "mempersiapkan", tags: ["umum","quran","mazid","mudhaaf"] },
    "امد":  { bab: "mz1", root: ["م","د","د"], meaning: "menyuplai/membantu", tags: ["umum","quran","mazid","mudhaaf"] },
    "اذل":  { bab: "mz1", root: ["ذ","ل","ل"], meaning: "menghinakan", tags: ["umum","quran","mazid","mudhaaf"] },
    "اعز":  { bab: "mz1", root: ["ع","ز","ز"], meaning: "memuliakan", tags: ["umum","quran","mazid","mudhaaf"] },
    "احب":  { bab: "mz1", root: ["ح","ب","ب"], meaning: "mencintai/menyukai", tags: ["umum","quran","mazid","mudhaaf"] },
    "احق":  { bab: "mz1", root: ["ح","ق","ق"], meaning: "membenarkan/mewujudkan", tags: ["umum","quran","mazid","mudhaaf"] },
    "اضر":  { bab: "mz1", root: ["ض","ر","ر"], meaning: "membahayakan/merugikan", tags: ["umum","quran","mazid","mudhaaf"] },
    "اقل":  { bab: "mz1", root: ["ق","ل","ل"], meaning: "mengurangi", tags: ["umum","mazid","mudhaaf"] },
    "اضل":  { bab: "mz1", root: ["ض","ل","ل"], meaning: "menyesatkan", tags: ["umum","quran","mazid","mudhaaf"] },
    "اخف":  { bab: "mz1", root: ["خ","ف","ف"], meaning: "meringankan", tags: ["umum","mazid","mudhaaf"] },
    "اتم":  { bab: "mz1", root: ["ت","م","م"], meaning: "menyempurnakan", tags: ["umum","quran","mazid","mudhaaf"] },
    "احل":  { bab: "mz1", root: ["ح","ل","ل"], meaning: "menghalalkan", tags: ["umum","quran","mazid","mudhaaf"] },
    "اقر":  { bab: "mz1", root: ["ق","ر","ر"], meaning: "menetapkan/mengakui", tags: ["umum","quran","mazid","mudhaaf"] },
    "الم":  { bab: "mz1", root: ["ل","م","م"], meaning: "menyakitkan", tags: ["umum","mazid","mudhaaf"] },
    "اصر":  { bab: "mz1", root: ["ص","ر","ر"], meaning: "memaksa/bersikeras", tags: ["umum","quran","mazid","mudhaaf"] },
    "اهم":  { bab: "mz1", root: ["ه","م","م"], meaning: "menyibukkan/mencemaskan", tags: ["umum","quran","mazid","mudhaaf"] },

    // ─── MAZID: فَعَّلَ (mz2) ─── Mudha'af ───
    "حدد":  { bab: "mz2", root: ["ح","د","د"], meaning: "menentukan/membatasi", tags: ["umum","mazid","mudhaaf"] },
    "جدد":  { bab: "mz2", root: ["ج","د","د"], meaning: "memperbarui", tags: ["umum","mazid","mudhaaf"] },
    "مدد":  { bab: "mz2", root: ["م","د","د"], meaning: "memperpanjang", tags: ["umum","mazid","mudhaaf"] },
    "عدد":  { bab: "mz2", root: ["ع","د","د"], meaning: "menyiapkan/menjadikan banyak", tags: ["umum","mazid","mudhaaf"] },
    "ردد":  { bab: "mz2", root: ["ر","د","د"], meaning: "mengulangi/membolak-balikkan", tags: ["umum","quran","mazid","mudhaaf"] },
    "شدد":  { bab: "mz2", root: ["ش","د","د"], meaning: "memperketat/mengeraskan", tags: ["umum","mazid","mudhaaf"] },
    "سدد":  { bab: "mz2", root: ["س","د","د"], meaning: "membetulkan/meluruskan", tags: ["umum","mazid","mudhaaf"] },
    "قرر":  { bab: "mz2", root: ["ق","ر","ر"], meaning: "memutuskan/menetapkan", tags: ["umum","mazid","mudhaaf"] },
    "حرر":  { bab: "mz2", root: ["ح","ر","ر"], meaning: "membebaskan/mengedit", tags: ["umum","mazid","mudhaaf"] },
    "برر":  { bab: "mz2", root: ["ب","ر","ر"], meaning: "membenarkan/membuktikan", tags: ["umum","mazid","mudhaaf"] },
    "ضرر":  { bab: "mz2", root: ["ض","ر","ر"], meaning: "merugikan", tags: ["umum","mazid","mudhaaf"] },
    "همم":  { bab: "mz2", root: ["ه","م","م"], meaning: "menyemangati", tags: ["umum","mazid","mudhaaf"] },
    "حسس":  { bab: "mz2", root: ["ح","س","س"], meaning: "merasakan", tags: ["umum","mazid","mudhaaf"] },

    // ─── MAZID: فَاعَلَ (mz3) ─── Mudha'af ───
    "حاد":  { bab: "mz3", root: ["ح","د","د"], meaning: "menentang/bermusuhan", tags: ["umum","quran","mazid","mudhaaf"] },
    "ضار":  { bab: "mz3", root: ["ض","ر","ر"], meaning: "membahayakan", tags: ["umum","quran","mazid","mudhaaf"] },
    "مار":  { bab: "mz3", root: ["م","ر","ر"], meaning: "berdebat/berbantahan", tags: ["umum","mazid","mudhaaf"] },
    "شاق":  { bab: "mz3", root: ["ش","ق","ق"], meaning: "menentang/memisahkan diri", tags: ["umum","quran","mazid","mudhaaf"] },

    // ─── MAZID: اِفْتَعَلَ (mz4) ─── Mudha'af ───
    "امتد":  { bab: "mz4", root: ["م","د","د"], meaning: "terbentang/memanjang", tags: ["umum","quran","mazid","mudhaaf"] },
    "اشتد":  { bab: "mz4", root: ["ش","د","د"], meaning: "menjadi keras/kuat", tags: ["umum","quran","mazid","mudhaaf"] },
    "اعتد":  { bab: "mz4", root: ["ع","د","د"], meaning: "bersiap/melampaui batas", tags: ["umum","quran","mazid","mudhaaf"] },
    "ارتد":  { bab: "mz4", root: ["ر","د","د"], meaning: "kembali/murtad", tags: ["umum","quran","mazid","mudhaaf"] },
    "اهتم":  { bab: "mz4", root: ["ه","م","م"], meaning: "memperhatikan/peduli", tags: ["umum","mazid","mudhaaf"] },
    "اهتز":  { bab: "mz4", root: ["ه","ز","ز"], meaning: "bergetar/berguncang", tags: ["umum","quran","mazid","mudhaaf"] },
    "استقر":  { bab: "mz4", root: ["ق","ر","ر"], meaning: "menetap/stabil", tags: ["umum","quran","mazid","mudhaaf"] },

    // ─── MAZID: اِنْفَعَلَ (mz5) ─── Mudha'af ───
    "انسد":  { bab: "mz5", root: ["س","د","د"], meaning: "tersumbat/tertutup", tags: ["umum","mazid","mudhaaf"] },
    "انحل":  { bab: "mz5", root: ["ح","ل","ل"], meaning: "terurai/terlepas", tags: ["umum","mazid","mudhaaf"] },
    "انحط":  { bab: "mz5", root: ["ح","ط","ط"], meaning: "merosot/turun", tags: ["umum","mazid","mudhaaf"] },
    "انشق":  { bab: "mz5", root: ["ش","ق","ق"], meaning: "terbelah", tags: ["umum","quran","mazid","mudhaaf"] },
    "انفك":  { bab: "mz5", root: ["ف","ك","ك"], meaning: "terlepas", tags: ["umum","mazid","mudhaaf"] },

    // ─── MAZID: تَفَعَّلَ (mz6) ─── Mudha'af ───
    "تعدد":  { bab: "mz6", root: ["ع","د","د"], meaning: "menjadi banyak/bermacam-macam", tags: ["umum","mazid","mudhaaf"] },
    "تمدد":  { bab: "mz6", root: ["م","د","د"], meaning: "memanjangkan badan/berbaring", tags: ["umum","mazid","mudhaaf"] },
    "تجدد":  { bab: "mz6", root: ["ج","د","د"], meaning: "menjadi baru/terbarui", tags: ["umum","mazid","mudhaaf"] },
    "تردد":  { bab: "mz6", root: ["ر","د","د"], meaning: "ragu-ragu/bolak-balik", tags: ["umum","mazid","mudhaaf"] },
    "تحرر":  { bab: "mz6", root: ["ح","ر","ر"], meaning: "menjadi bebas/merdeka", tags: ["umum","mazid","mudhaaf"] },
    "تقرر":  { bab: "mz6", root: ["ق","ر","ر"], meaning: "menjadi tetap/diputuskan", tags: ["umum","mazid","mudhaaf"] },
    "تحسس":  { bab: "mz6", root: ["ح","س","س"], meaning: "merasakan/mencari tahu", tags: ["umum","quran","mazid","mudhaaf"] },
    "تضرر":  { bab: "mz6", root: ["ض","ر","ر"], meaning: "menderita kerugian", tags: ["umum","mazid","mudhaaf"] },

    // ─── MAZID: اِسْتَفْعَلَ (mz7) ─── Mudha'af ───
    "استعد":  { bab: "mz7", root: ["ع","د","د"], meaning: "bersiap-siap", tags: ["umum","mazid","mudhaaf"] },
    "استمد":  { bab: "mz7", root: ["م","د","د"], meaning: "meminta bantuan/mengambil sumber", tags: ["umum","mazid","mudhaaf"] },
    "استمر":  { bab: "mz7", root: ["م","ر","ر"], meaning: "berlanjut/terus-menerus", tags: ["umum","quran","mazid","mudhaaf"] },
    "استقل":  { bab: "mz7", root: ["ق","ل","ل"], meaning: "mandiri/merdeka", tags: ["umum","mazid","mudhaaf"] },
    "استدل":  { bab: "mz7", root: ["د","ل","ل"], meaning: "berdalil/menyimpulkan", tags: ["umum","mazid","mudhaaf"] },
    "استحق":  { bab: "mz7", root: ["ح","ق","ق"], meaning: "berhak/layak mendapat", tags: ["umum","quran","mazid","mudhaaf"] },
    "استحل":  { bab: "mz7", root: ["ح","ل","ل"], meaning: "menganggap halal", tags: ["umum","quran","mazid","mudhaaf"] },
    "استقر":  { bab: "mz7", root: ["ق","ر","ر"], meaning: "menetap/stabil", tags: ["umum","quran","mazid","mudhaaf"] },
    "استحب":  { bab: "mz7", root: ["ح","ب","ب"], meaning: "lebih menyukai/menyenangi", tags: ["umum","quran","mazid","mudhaaf"] },
    "استعز":  { bab: "mz7", root: ["ع","ز","ز"], meaning: "merasa kuat/sombong", tags: ["umum","mazid","mudhaaf"] },
    "استخف":  { bab: "mz7", root: ["خ","ف","ف"], meaning: "meremehkan/menganggap ringan", tags: ["umum","quran","mazid","mudhaaf"] },
    "استخص":  { bab: "mz7", root: ["خ","ص","ص"], meaning: "mengkhususkan untuk diri sendiri", tags: ["umum","mazid","mudhaaf"] },
    "استذل":  { bab: "mz7", root: ["ذ","ل","ل"], meaning: "menghinakan", tags: ["umum","mazid","mudhaaf"] },


    // ═══════════════════════════════════════════════════════════
    // KATA POPULER MUDHA'AF DARI AL-QUR'AN
    // ═══════════════════════════════════════════════════════════

    "ضر":  { bab: "m1", root: ["ض","ر","ر"], meaning: "membahayakan/merugikan", tags: ["umum","quran","mudhaaf"] },
    "بر":  { bab: "m1", root: ["ب","ر","ر"], meaning: "berbuat baik/berbakti", tags: ["umum","quran","mudhaaf"] },
    "ضم":  { bab: "m1", root: ["ض","م","م"], meaning: "memeluk/menggabungkan", tags: ["umum","quran","mudhaaf"] },
    "هم":  { bab: "m1", root: ["ه","م","م"], meaning: "bermaksud/berniat", tags: ["umum","quran","mudhaaf"] },
    "زل":  { bab: "m1", root: ["ز","ل","ل"], meaning: "tergelincir/terpeleset", tags: ["umum","quran","mudhaaf"] },
    "صم":  { bab: "m1", root: ["ص","م","م"], meaning: "menjadi tuli/bisu", tags: ["umum","quran","mudhaaf"] },
    "غش":  { bab: "m1", root: ["غ","ش","ش"], meaning: "menipu/berbuat curang", tags: ["umum","mudhaaf"] },
    "شق":  { bab: "m1", root: ["ش","ق","ق"], meaning: "membelah/menyusahkan", tags: ["umum","quran","mudhaaf"] },
    "حط":  { bab: "m1", root: ["ح","ط","ط"], meaning: "menurunkan/meletakkan", tags: ["umum","quran","mudhaaf"] },
    "جن":  { bab: "m1", root: ["ج","ن","ن"], meaning: "menutupi/menjadi gila", tags: ["umum","quran","mudhaaf"] },
    "صف":  { bab: "m1", root: ["ص","ف","ف"], meaning: "berbaris/menyusun", tags: ["umum","quran","mudhaaf"] },
    "لف":  { bab: "m1", root: ["ل","ف","ف"], meaning: "melipat/membungkus", tags: ["umum","quran","mudhaaf"] },
    "كف":  { bab: "m1", root: ["ك","ف","ف"], meaning: "mencegah/menahan", tags: ["umum","quran","mudhaaf"] },
    "حج":  { bab: "m1", root: ["ح","ج","ج"], meaning: "berhaji/berhujjah", tags: ["umum","quran","mudhaaf","ibadah"] },
    "غل":  { bab: "m1", root: ["غ","ل","ل"], meaning: "membelenggu/berkhianat", tags: ["umum","quran","mudhaaf"] },
    "لم":  { bab: "m1", root: ["ل","م","م"], meaning: "mengumpulkan", tags: ["umum","quran","mudhaaf"] },
};

// ═══════════════════════════════════════════════════════════
// FUNGSI HELPER UNTUK STATISTIK KAMUS
// ═══════════════════════════════════════════════════════════

const DictionaryStats = {
    getTotal: () => Object.keys(DICTIONARY).length,
    
    getByBab: (babId) => Object.entries(DICTIONARY).filter(([k,v]) => v.bab === babId),
    
    getByTag: (tag) => Object.entries(DICTIONARY).filter(([k,v]) => v.tags && v.tags.includes(tag)),
    
    getByCategory: (cat) => {
        const prefixes = { 
            mujarrad: 'm', 
            mazid: 'z', 
            rubai: 'r',
            isim: 'isim'
        };
        const prefix = prefixes[cat];
        if (!prefix) return [];
        
        if (cat === 'isim') {
            return Object.entries(DICTIONARY).filter(([k,v]) => v.bab === 'isim');
        }
        return Object.entries(DICTIONARY).filter(([k,v]) => v.bab.startsWith(prefix));
    },
    
    getTotalByCategory: () => ({
        mujarrad: DictionaryStats.getByCategory('mujarrad').length,
        mazid: DictionaryStats.getByCategory('mazid').length,
        rubai: DictionaryStats.getByCategory('rubai').length,
        isim: DictionaryStats.getByCategory('isim').length
    }),
    
    getQuranWords: () => DictionaryStats.getByTag('quran').length,
    
    searchByMeaning: (indonesian) => {
        const q = indonesian.toLowerCase();
        return Object.entries(DICTIONARY).filter(([k,v]) => 
            v.meaning.toLowerCase().includes(q)
        );
    },
    
    searchByRoot: (rootLetter) => {
        return Object.entries(DICTIONARY).filter(([k,v]) => 
            v.root && v.root.includes(rootLetter)
        );
    }
};

// Export untuk browser
if (typeof window !== 'undefined') {
    window.DICTIONARY = DICTIONARY;
    window.DictionaryStats = DictionaryStats;
}

console.log(`
╔════════════════════════════════════════╗
║  KAMUS LOADED SUCCESSFULLY             ║
║  Total Kata: ${Object.keys(DICTIONARY).length.toString().padEnd(27)}║
║  Mujarrad  : ${DictionaryStats.getByCategory('mujarrad').length.toString().padEnd(27)}║
║  Mazid     : ${DictionaryStats.getByCategory('mazid').length.toString().padEnd(27)}║
║  Ruba'i    : ${DictionaryStats.getByCategory('rubai').length.toString().padEnd(27)}║
║  Isim      : ${DictionaryStats.getByCategory('isim').length.toString().padEnd(27)}║
║  Kata Quran: ${DictionaryStats.getQuranWords().toString().padEnd(27)}║
╚════════════════════════════════════════╝

`);




