# TechStore Landing Page

Landing page modern dan responsif yang dibangun menggunakan React, Vite, dan CSS Native sebagai bagian dari Technical Test Front-End Developer Intern – NIEC Indonesia.

## Project Overview

Project ini merupakan single-page landing page yang bertujuan untuk mendemonstrasikan kemampuan dasar Front-End, meliputi:

- Fundamental React (komponen, hooks, dan state)
- Integrasi API menggunakan DummyJSON
- Struktur kode yang bersih dan terpisah
- Penerapan responsive design
- Implementasi UI/UX modern

## 🛠️ Tech Stack

- [ ] **React 18** – Library UI berbasis komponen
- [ ] **Vite** – Build tool dan development server
- [ ] **CSS Native** –
- [ ] **DummyJSON API** – API dummy untuk data produk

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Komponen navigasi
│   ├── Hero.jsx         # Komponen hero section
│   ├── Card.jsx         # Komponen kartu produk (reusable)
│   └── Footer.jsx       # Komponen footer
├── pages/
│   └── Home.jsx         # Halaman utama dan logika data
├── services/
│   └── api.js           # Layer service untuk API
├── App.jsx              # Root component aplikasi
├── main.jsx             # Entry point aplikasi
└── index.css            # Global styles
```

## 🌐 API Used

**Base URL:** `https://dummyjson.com`

**Endpoint:** `/products?limit={number}`

**Data yang digunakan:**

- Nama produk
- Deskripsi singkat
- Harga
- Gambar produk
- Rating

## 🚀 How to Run

### Prerequisites

- Node.js versi 16 atau lebih baru
- npm atau yarn

### Installation

1. Clone repository:

```bash
   git clone
   cd techstore-landing-page
```

2. Install dependencies:

```bash
   npm install
```

3. Jalankan development server:

```bash
   npm run dev
```

4. Buka browser:

```
   http://localhost:5173
```

### Build for Production

1. Build project:

```bash
   npm run build
```

2. Preview hasil build:

```bash
   npm run preview
```

## Features Implemented

### Required Features

- ✅ React functional components
- ✅ React Hooks (useState, useEffect)
- ✅ Integrasi API menggunakan async/await
- ✅ Pemisahan komponen yang rapi
- ✅ Loading state
- ✅ Error handling
- ✅ Responsive design (mobile-friendly)

### Additional Features

- ✅ Komponen Card yang reusable
- ✅ Fitur Load More (menambah 6 produk setiap klik)
- ✅ Hover effect dan transisi halus
- ✅ Navbar sticky
- ✅ Smooth scrolling

## Approach and Technical Decisions

### Component Architecture

- [ ] Pemisahan tanggung jawab ke dalam komponen terpisah
- [ ] Komponen Card dibuat reusable
- [ ] Logika bisnis ditempatkan di level halaman (Home.jsx)

### State Management

- [ ] `useState` digunakan untuk data produk, loading, error, dan limit
- [ ] `useEffect` digunakan untuk pemanggilan API
- [ ] Penanganan error dilakukan secara sederhana dan jelas

### API Service Layer

- [ ] Pemanggilan API dipisahkan ke dalam `services/api.js`
- [ ] Kode lebih mudah dirawat dan scalable
- [ ] Error handling terpusat

### Styling Strategy

- [ ] Menggunakan CSS Native
- [ ] Pendekatan utility-first
- [ ] Mobile-first responsive design

### User Experience

- [ ] Loading indicator saat data dimuat
- [ ] Tampilan error dengan opsi retry
- [ ] Progressive loading dengan Load More
- [ ] Animasi dan transisi ringan

## Responsive Breakpoints

- [ ] **Mobile:** < 640px
- [ ] **Tablet:** 640px – 1024px
- [ ] **Desktop:** > 1024px

## Testing Checklist

- [ ] Semua komponen tampil dengan benar
- [ ] API berhasil dipanggil
- [ ] Loading state berfungsi
- [ ] Error handling berjalan
- [ ] Load More menambah jumlah data
- [ ] Tampilan responsif di perangkat mobile
- [ ] Navigasi berfungsi
- [ ] Tidak ada error di console

## License

This project is created for educational purposes.

---

**Dibuat untuk Technical Test NIEC Indonesia**  
**Posisi:** IT Developer Intern
