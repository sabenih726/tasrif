```md
<div align="center">

# ﷽

# TASHRIF SHOROF PRO  
Kamus Konjugasi Bahasa Arab (Fi'il & Isim) — PWA Offline

<!-- Badges -->
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-0ea5e9?style=for-the-badge)](#)
[![Offline](https://img.shields.io/badge/Works-Offline-f59e0b?style=for-the-badge)](#)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=000)](#)
[![License MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

</div>

---

## Deskripsi

**TASHRIF SHOROF PRO** adalah aplikasi kamus & generator **tashrif (konjugasi)** bahasa Arab berbasis **PWA** yang dapat berjalan **offline**. Mendukung pencarian kata dengan **Arab**, **Latin/transliterasi**, maupun **Indonesia**.

---

## Fitur

- **Fi'il**
  - Mujarrad, Mazid, Ruba'i
  - Tashrif **Istilahi** (format tabel)
  - Tashrif **Lughawi** (dengan dhamir)
  - Badge jenis fi'il (shahih, mu'tal, mudha'af, mahmuz)
- **Isim**
  - Jamid & Musytaq (bergantung analyzer)
  - Info akar (root), wazan, gender, arti
  - Bentuk-bentuk isim (jika tersedia/hasil analisis)
- **Pencarian**
  - Input: Arab / Latin / Indonesia
  - Auto-detect & mode manual (pilih bab)
- **PWA**
  - Offline caching via Service Worker
  - Icon & manifest siap install ke home screen

---

## Demo (GitHub Pages)

Jika repo ini diaktifkan GitHub Pages, akses:

- `https://<username>.github.io/<repo>/`

Contoh:

- `https://username.github.io/tashrif-shorof-pro/`

> Ganti `<username>` dan `<repo>` sesuai milik Anda.

---

## Cara Menjalankan (Local)

### Opsi 1 — VS Code Live Server (disarankan untuk PWA)

1. Install extension **Live Server**
2. Klik kanan `index.html` → **Open with Live Server**
3. Akses dari URL yang diberikan (mis. `http://127.0.0.1:5500`)

### Opsi 2 — Python HTTP Server

```bash
python -m http.server 8000
```

Lalu buka:

- `http://localhost:8000`

> Catatan: Untuk PWA & service worker, jalankan via server (bukan `file://`).

---

## Struktur Proyek (umum)

```txt
.
├─ index.html
├─ manifest.json
├─ sw.js
├─ css/
│  └─ style.css
├─ js/
│  ├─ app.js
│  ├─ tashrif-engine.js
│  ├─ isim-analyzer.js
│  ├─ dictionary.js
│  ├─ transliterator.js
│  └─ babs.js
└─ icons/
   ├─ icon-192.png
   └─ icon-512.png
```

---

## Catatan Data Kamus

Format entri contoh:

```js
"طاولة": { bab: "isim", root: ["ط","و","ل"], meaning: "meja", tags: ["benda"] }
```

Field yang dipakai aplikasi:
- `bab` (mis. `isim`, atau id bab fi'il)
- `root` (array huruf akar)
- `meaning` (arti Indonesia)
- `tags` (opsional)

---

## PWA Icon (Logo)

Logo PWA utama diambil dari **`manifest.json`** pada bagian:

```json
"icons": [
  { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
  { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
]
```

Di HTML juga ada:
- `apple-touch-icon` untuk iOS
- `favicon` untuk tab browser

---

## Kontribusi

Kontribusi dipersilakan.

1. Fork repo ini
2. Buat branch fitur: `git checkout -b fitur-anda`
3. Commit: `git commit -m "feat: ..."`
4. Push & buat Pull Request

---

## Lisensi

MIT License — lihat file [LICENSE](LICENSE).
```
