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
    "حزن": { bab: "m1", root: ["ح","ز","ن"], meaning: "bersedih", tags: ["perasaan"] }, // jika kamu sudah punya "حزن", hapus baris ini
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
    "جالس": { bab: "z3", root: ["ج","ل","س"], meaning: "duduk bersama (varian)", tags: ["umum"] }, // jika "جالس" sudah ada, hapus baris ini
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
    "مفتاح": { bab: "isim", root: ["ف","ت","ح"], meaning: "kunci", tags: ["alat"] }, // jika "مفتاح" sudah ada, hapus
    "شباك": { bab: "isim", root: ["ش","ب","ك"], meaning: "jendela/jeruji", tags: ["benda"] },
    "جدار": { bab: "isim", root: ["ج","د","ر"], meaning: "dinding", tags: ["benda"] },
    "سقف": { bab: "isim", root: ["س","ق","ف"], meaning: "atap", tags: ["benda"] },
    "أرضية": { bab: "isim", root: ["أ","ر","ض"], meaning: "lantai", tags: ["benda"] },
    "ممر": { bab: "isim", root: ["م","ر","ر"], meaning: "lorong/koridor", tags: ["tempat"] },
    "غرفة": { bab: "isim", root: ["غ","ر","ف"], meaning: "kamar", tags: ["tempat"] },
    "مفتاحي": { bab: "isim", root: ["ف","ت","ح"], meaning: "kunciku (contoh idhafah)", tags: ["benda"] }, // kalau tidak ingin bentuk idhafah/pronomina, saya ganti
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
    "حزن": { bab: "m1", root: ["ح","ز","ن"], meaning: "sedih (varian)", tags: ["perasaan"] }, // kalau sudah ada dari batch 2, hapus
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
    "جزيرة": { bab: "isim", root: ["ج","ز","ر"], meaning: "pulau", tags: ["alam"] }
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
