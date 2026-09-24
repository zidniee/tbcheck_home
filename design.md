# Design Specification: Website Resmi Produk & Perilisan TBCheck (Official Product Website)

## 1. Konsep Utama & Tujuan Website Resmi

Website Resmi **TBCheck** (`tbcheck.id` / `tbcheck.solusikode.my.id`) dirancang sebagai **website publik resmi perkenalan produk & pemasaran** (*official product presentation & release website*), serupa dengan website resmi aplikasi ternama (*seperti Halodoc, Ada Health, Strava, Notion, atau Spotify*).

Website ini berfokus untuk **mengenalkan, memperagakan (*showcase*), mengedukasi, dan mempromosikan aplikasi TBCheck** kepada pengguna umum, pasien TBC, dokter spesialis, serta fasilitas pelayanan kesehatan dan instansi pemerintah — tanpa menjalankan fitur internal aplikasi di web.

---

## 2. Peta Situs & Navigasi Website Resmi (Sitemap)

```text
tbcheck.id/
├── /                     [1. Beranda (Home Overview & Product Showcase)]
├── /teknologi            [2. Teknologi AI & Riset Akustik Batuk]
├── /solusi               [3. Solusi Pasien, Dokter & Instansi Kesehatan]
├── /privasi-keamanan     [4. Privasi Data Pasien & Kepatuhan UU PDP]
├── /download             [5. Pusat Unduhan Aplikasi & Catatan Rilis Kronologis]
├── /bantuan              [6. Pusat Bantuan & FAQ]
└── /kontak               [7. Kemitraan Faskes & Kontak]
```

---

## 3. Rincian Desain & Konten Tiap Halaman Website

### 3.1 Halaman Beranda (Home Overview - `/`)
- **Tujuan**: Menghadirkan kesan pertama yang profesional dan terpercaya, memamerkan tampilan aplikasi seluler TBCheck, serta mengarahkan pengunjung untuk mengunduh aplikasi.
- **Struktur & Komponen**:
  1. **Navbar & Logo**:
     - Gunakan aset `/logoText.png` sebagai logo utama di navbar.
  2. **Hero Section (Product Showcase)**:
     - Judul: *"Solusi Skrining TBC AI Akustik & Pendamping Terapi Digital Pertama di Indonesia"*
     - Subjudul: *"Deteksi dini risiko TBC dari suara batuk secara 100% offline dan dampingi masa pengobatan 6 bulan hingga sembuh total."*
     - Tombol CTA Utama: `[Unduh APK v1.0.0]` `[Lihat di Play Store]` (Gunakan ikon `/playstore-icon.png` pada tombol Play Store)
     - Mockup Produk HP Interaktif: Menampilkan antarmuka aplikasi TBCheck (Gunakan aset utama: `/memegang ponsel tbcheck.png`).
  3. **Banner Metrik Pencapaian**:
     - Model AI Ringan 9.6 KB | Sensitivitas Skrining 91.7% | 100% Pemrosesan Offline | Sertifikasi Kepatuhan UU PDP.
  4. **Showcase 4 Pilar Utama Aplikasi**:
     - *Fitur 1: Skrining Suara Batuk AI (5 Detik Result)* - (Gunakan aset visual: `/cek batuk.png`)
     - *Fitur 2: Pendamping Terapi & Alarm Obat Optimistik* - (Gunakan aset visual: `/care-notification.png`)
     - *Fitur 3: Edukasi Herbal & Fitokimia* - (Gunakan aset visual: `/fitokimia.png`)
     - *Fitur 4: Peta Risiko Geospasial Epidemiologi*.
  5. **Cara Kerja Aplikasi (3 Langkah Mudah)**:
     - Step 1: Rekam suara batuk 5 detik di aplikasi.
     - Step 2: AI On-Device menganalisis spektrum audio secara instant.
     - Step 3: Dapatkan skor risiko & rekomendasi langkah kesehatan.
  6. **Testimoni & Kemitraan**:
     - Logo mitra kesehatan, keselarasan pedoman Kemenkes RI & WHO, serta penafian medis resmi.

---

### 3.2 Halaman Teknologi AI & Riset Akustik (`/teknologi`)
- **Tujuan**: Memaparkan keunggulan teknis, inovasi riset, dan validasi ilmiah dari *engine* AI akustik TBCheck kepada publik medis dan akademisi.
- **Struktur & Komponen**:
  1. **Showcase Teknologi Analisis Suara (MFCC & Edge AI)**:
     - (Gunakan aset ilustrasi: `/ai.png`)
     - Penjelasan tentang bagaimana TBCheck menggunakan mekanisme **MFCC** untuk mengekstrak dan mengubah suara batuk menjadi pola data yang lebih eksplisit dan mudah dipahami oleh sistem, dipadukan dengan **Edge AI (On-Device Inference)** agar berjalan tanpa internet, latensi < 5 ms, dan privasi 100% terjaga.
  2. **Infografis Pipeline Pemrosesan Sinyal Audio (DSP Pipeline)**:
     - Diagram visual yang ramah awam tentang bagaimana suara batuk direkam, dibersihkan (High-pass filter), dan diekstrak polanya menggunakan MFCC hingga menghasilkan skor risiko (Visual Score).
  3. **Penjelasan Algoritma Sliding-Window + Mean-Top3**:
     - Bagaimana aplikasi seluler memproses rekaman batuk 5 detik dengan keakuratan tinggi (peningkatan AUC dari 0.51 ke 0.64).
  4. **Validasi Riset & Benchmark Datasets**:
     - Tabel perbandingan hasil uji pada dataset CODA dan OWN (ROC-AUC 0.782, Recall 91.7%).

---

### 3.3 Halaman Solusi Pasien, Dokter & Instansi (`/solusi`)
- **Tujuan**: Menjelaskan manfaat dan nilai tambah (*value proposition*) aplikasi TBCheck bagi berbagai kelompok pengguna.
- **Struktur & Komponen**:
  1. **Solusi untuk Pasien & Masyarakat**:
     - Skrining mandiri mudah dari rumah, pengingat minum obat 6 bulan agar tidak putus berobat, dan materi edukasi fitokimia.
  2. **Solusi untuk Dokter & Tenaga Kesehatan**:
     - (Gunakan aset visual: `/aplikasi-dashboard.png` untuk mengilustrasikan dashboard dokter)
     - Dashboard pemantauan kepatuhan berobat pasien secara *real-time*, rekam medis digital terenkripsi, dan fitur rujukan pasien.
  3. **Solusi untuk Dinas Kesehatan & Instansi**:
     - Fitur simulasi epidemiologi populasi SVIR dan visualisasi peta potensi risiko penularan TBC geospasial (H3 Index).

---

### 3.4 Halaman Privasi Data & Kepatuhan UU PDP (`/privasi-keamanan`)
- **Tujuan**: Memberikan transparansi dan jaminan keamanan data medis pasien sesuai standar hukum **UU PDP No. 27/2022**.
- **Struktur & Komponen**:
  1. **Prinsip Perlindungan Data Pasien**:
     - **Zero-Cloud Audio Storage**: Berkas suara batuk diproses 100% di dalam smartphone dan **tidak pernah diunggah ke server**.
     - **Enkripsi AES-256**: Data kuesioner medis dan jawaban klinis dienkripsi menggunakan algoritma AES-256-CBC.
     - **Pseudonimisasi PII**: Identitas pribadi (email/telepon) di-hash satu arah menggunakan SHA-256.
     - **Kendali Persetujuan Pasien (*Patient Consent*)**: Pasien berhak menentukan akses berbagi data rekam medis.
  2. **Pernyataan Kebijakan Privasi Resmi & Sertifikasi Keamanan**.

---

### 3.5 Halaman Pusat Unduhan & Riwayat Perilisan Kronologis (`/download`)
- **Tujuan**: Halaman resmi distribusi aplikasi (*official release center*) yang dilengkapi kartu unduhan rilis terbaru serta lini masa riwayat versi (*release notes*) secara kronologis untuk memudahkan pelacakan pembaruan aplikasi di masa mendatang.
- **Struktur & Komponen Utama**:

  1. **Kartu Unduhan Utama Rilis Terbaru (Latest Release Card)**:
     - **Versi Tag**: `v1.0.0 Stable Release` (Badge: `Latest / Production`)
     - **Tanggal Perilisan**: `3 September 2026`
     - **Ukuran Berkas**: `24.5 MB`
     - **Minimum OS**: `Android 8.0 (Oreo) ke atas`
     - **Direct Action**: Tombol **[Unduh APK Direct Download (v1.0.0)]**
     - **Store Badges**: Google Play Store & Apple App Store (Status: *Dalam Proses Distribusi*)
     - **SHA-256 Verification Hash**:
       `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
     - **Sertifikasi Biner**: *Signed APK (Release Key) | Clean Security Scan*.

  2. **Bagian Riwayat Versi Kronologis (Chronological Version History Timeline)**:
     - Tata letak linier kronologis (*vertical timeline UI*) dari versi terbaru ke versi lama (descending order).
     - **Setiap Item Riwayat Versi Mencakup**:
       - **Badge Header**: Nomor Versi (misal: `v1.0.0`, `v0.9.5 Beta`, `v0.9.0 Alpha`), Tanggal Rilis, dan Label Status (`Production`, `Beta`, `Archived`).
       - **Kategori Catatan Perilisan (Release Notes Categories)**:
         - **Fitur Baru (*New Features*)**: Peluncuran teknologi deteksi suara akustik (MFCC), fitur pendamping pengobatan TBC 6 bulan, dan radar Faskes PostGIS.
         - **Peningkatan Performa (*Performance & AI Upgrades*)**: Optimasi *Sliding-Window + Mean-Top3* pada audio 5 detik (AUC naik ke 0.64), latensi inferensi <5 ms.
         - **Privasi & Keamanan (*Security & UU PDP*)**: Implementasi enkripsi AES-256-CBC pada payload kuesioner klinis dan *zero-cloud audio storage*.
         - **Perbaikan Bug (*Bug Fixes*)**: Perbaikan error validasi backend (400 Bad Request), optimasi *Optimistic UI* pada jadwal obat.
       - **Tautan Arsip Download Versi Lama**: Tombol opsional `[Unduh APK Versi v0.9.5]` untuk keperluan testing / pengujian kompatibilitas.

  3. **Panduan Instalasi Berkas APK**:
     - Petunjuk langkah demi langkah mengaktifkan izin *"Install from Unknown Sources"* pada Android 8.0+.

---

### 3.6 Halaman Pusat Bantuan & FAQ (`/bantuan`)
- **Tujuan**: Menyediakan jawaban atas pertanyaan umum dan panduan bantuan penggunaan aplikasi.
- **Struktur & Komponen**:
  1. **Pertanyaan Umum (FAQ)**:
     - *"Apakah TBCheck menggantikan diagnosis dokter?"* (Penjelasan status skrining awal).
     - *"Bagaimana cara melakukan skrining batuk yang benar?"*
     - *"Apakah aplikasi dapat digunakan tanpa koneksi internet?"*
  2. **Panduan Masalah Teknis**:
     - Solusi jika izin mikrofon ditolak, petunjuk pembaruan aplikasi.
  3. **Kontak Layanan Darurat TBC & Hotline Kemenkes**.

---

### 3.7 Halaman Kemitraan & Kontak (`/kontak`)
- **Tujuan**: Membuka saluran komunikasi resmi untuk kerjasama faskes, instansi, media, dan pertanyaan umum.
- **Struktur & Komponen**:
  1. **Formulir Kontak Resmi**:
     - Nama, Email, Instansi/Faskes, Jenis Kemitraan, dan Pesan.
  2. **Informasi Alamat & Kantor**:
     - Lokasi kantor pusat TBCheck, email dukungan, dan media sosial resmi.
  3. **Unduh Press Kit & Brosur Resmi**:
     - Logo resmi, tangkapan layar HD aplikasi, dan brosur perkenalan produk untuk media & rumah sakit.

---

## 4. Spesifikasi Desain UI/UX & Komponen Web

### 4.1 Gaya Visual & Palette (Modern App Showcase)
- **Primary Accent**: Medical Teal (`#0F766E`) & Cyan Pulse (`#0D9488`)
- **Background Slate**: Dark Mode Slate (`#0F172A`) & Clean Light Mode Surface (`#F8FAFC`)
- **Glassmorphism Showcase Cards**: Card transparan bermotif halus dengan `backdrop-filter: blur(16px)`
- **Typography**: Google Fonts `Plus Jakarta Sans` (Judul & CTA) & `Inter` (Teks Penjelas).

### 4.2 Responsivitas & Performa
- Tata letak 100% responsif (Desktop, Tablet, Mobile) dengan pergerakan menu *hamburger* intuitif.
- Performa pemuatan cepat (<1 detik) dengan teknik lazy-loading gambar & mockup.
