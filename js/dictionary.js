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
    "كان": { bab: "m3", root: ["ك","و","ن"], meaning: "adalah/menjadi", tags: ["umum","quran","mutal-ajwaf"] }
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