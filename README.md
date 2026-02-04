📖 TASHRIF SHOROF PRO — Majelis Kalibata
Aplikasi web (single-page) untuk analisis Sharaf dengan bantuan Google Gemini API. Mendukung analisis FI’IL dan ISIM serta menampilkan:

Tashrif Istilahi (10 bentuk dasar)
Tashrif Lughawi (14 dhamir) untuk madhi, mudhari, amr
UI bergaya brutalist + TailwindCSS dengan Arabic font (Amiri)
✨ Fitur
Input kata Arab (contoh: نَصَرَ / كَاتِب)
Pilihan jenis kata:
AUTO (deteksi otomatis)
FI'IL
ISIM
Pilihan model (saat ini tersedia: gemini-2.5-flash-preview-09-2025)
Manajemen API Key:
Simpan API Key di localStorage
Toggle tampil/sembunyikan API Key
Test API Key ke endpoint Gemini
Badge status: API KEY REQUIRED / TESTING / AI READY / INVALID
Tampilan hasil:
FI’IL: bab, pola, akar kata, 10 bentuk, + tabs Lughawi (Madhi/Mudhari/Amr)
ISIM: kategori, subkategori, akar, wazan, gender, arti, forms (mufrad/mutsanna/jamak/dll), kata terkait
Error modal + success toast
Responsive layout (mobile → desktop)
🧱 Tech Stack
HTML + Vanilla JavaScript (tanpa bundler)
TailwindCSS via CDN
Font Awesome icons
Google Fonts:
Amiri (Arabic)
Space Mono (UI monospace)
Bebas Neue (judul)
Google Gemini API (Generative Language API)
✅ Persyaratan
Browser modern (Chrome/Edge/Firefox)
Gemini API Key dari Google AI Studio / Google Cloud
🚀 Cara Menjalankan (Local)
Karena ini file HTML dengan script inline dan fetch API, cukup jalankan dengan salah satu cara berikut:

Opsi 1 — Buka langsung
Buka file index.html di browser.
Opsi 2 — Pakai local server (recommended)
Beberapa browser lebih stabil kalau pakai server.

VSCode Live Server

Install extension Live Server
Klik kanan index.html → Open with Live Server
Python

Bash

python -m http.server 5500
Lalu buka:

text

http://localhost:5500
🔑 Setup Gemini API Key
Buka aplikasi
Pada section Konfigurasi API Key
Masukkan API Key (biasanya diawali AIza...)
Klik SIMPAN
Aplikasi akan otomatis test API key:
Jika valid: badge menjadi AI READY
Jika error: badge menjadi API KEY INVALID
API key disimpan di browser menggunakan:

localStorage key: tashrif_gemini_api_key
Catatan keamanan: karena memakai localStorage, jangan gunakan device publik.

🧠 Cara Pakai
Pilih Jenis Kata (AUTO / FI’IL / ISIM)
Pilih Model
Input kata Arab (contoh: نَصَرَ)
Klik ANALISIS
Hasil akan muncul sesuai jenis:
FI’IL → tabel Tashrif Istilahi + tab Tashrif Lughawi
ISIM → info grid + daftar bentuk (forms) + related words
📦 Format Output JSON (Kontrak AI)
Aplikasi mengharapkan Gemini mengembalikan JSON responseMimeType: "application/json".

FI’IL
Field utama:

type: "fiil"
bab_title
main_pattern
root
rows (10 baris)
tashrif_lughawi: madhi, mudhari, amr
ISIM
Field utama:

type: "isim"
word, category, subcategory, wazan, root
meaning, gender, number_type
derived_from, derived_from_meaning
forms[]
related_words[]
📁 Struktur File (saran)
Kalau kamu mau rapikan jadi repo:

text

tashrif-shorof-pro/
├─ index.html
└─ README.md
(Opsional) pecah menjadi:

text

├─ index.html
├─ app.js
├─ styles.css
└─ README.md
🧩 Troubleshooting
1) Badge “API KEY REQUIRED”
Belum ada API key tersimpan → masukkan API key dan simpan.
2) “API KEY INVALID” / error API key
API key salah / tidak aktif
Pastikan key valid dan layanan Generative Language API dapat diakses
Coba buat API key baru di Google AI Studio / Google Cloud Console
3) “Response tidak valid”
Output Gemini tidak sesuai JSON yang diminta
Biasanya karena model mengembalikan teks tambahan. Coba ulangi, atau perketat prompt.
🗺️ Roadmap (opsional)
Dropdown model lebih banyak (Flash/Pro)
Tombol “copy hasil” atau “export PDF”
Offline mode untuk beberapa pola umum (tanpa AI)
Riwayat analisis (history)
📄 License
Tentukan sesuai kebutuhan (mis. MIT / private).
