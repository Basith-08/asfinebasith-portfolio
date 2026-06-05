# asfinebasith-portfolio

Portfolio pribadi As Fine Basith yang dibangun dengan React dan Vite. Website ini menampilkan profil profesional, proyek unggulan, nilai kerja, dan tautan kontak dalam tampilan portfolio yang ringan dan modern.

## Stack

- React 18
- Vite
- CSS custom

## Fitur

- Hero section dengan ringkasan profil dan fokus kerja
- Section tentang saya
- Proyek unggulan yang dikurasi
- Nilai kerja dan pendekatan teknis
- CTA ke GitHub, LinkedIn, dan email

## Menjalankan Secara Lokal

Install dependency:

```bash
npm install
```

Jalankan mode development:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Struktur Singkat

```text
src/
  components/   komponen UI utama
  data/         data konten portfolio
  App.jsx       komposisi halaman
  index.css     design system dan styling global
  main.jsx      entry React
public/
  img/          aset gambar
```

## Deploy ke Vercel

Repo ini sudah siap untuk deploy ke Vercel sebagai static site berbasis Vite.

### Opsi 1: Via Dashboard Vercel

1. Import repository `asfinebasith-portfolio` ke Vercel
2. Pastikan framework terdeteksi sebagai `Vite`
3. Gunakan konfigurasi berikut:

```text
Build Command   : npm run build
Output Directory: dist
Install Command : npm install
```

### Opsi 2: Via Vercel CLI

Login:

```bash
vercel login
```

Deploy preview:

```bash
vercel deploy
```

Deploy production:

```bash
vercel deploy --prod
```

Catatan:

- Konfigurasi deploy eksplisit ada di `vercel.json`
- Karena ini bukan lagi GitHub Pages repo utama, nama repository `asfinebasith-portfolio` aman dipakai untuk Vercel

## Catatan

- Repo ini sebelumnya berupa HTML, CSS, dan JavaScript native, lalu dimigrasikan ke React + Vite.
- Konten proyek unggulan dikelola dari `src/data/portfolio.js`.
- Styling utama dan design system ringan berada di `src/index.css`.
