export const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export const heroStats = [
  { value: "900+", label: "Pengguna simultan didukung" },
  { value: "2", label: "Peran profesional dijalani" },
  { value: "31+", label: "Public repositories" },
];

export const aboutCards = [
  {
    title: "Pengalaman utama saya",
    description:
      "Saya memiliki pengalaman sebagai Fullstack Developer di PT Tata Informasi Asia, dengan fokus pada pengembangan Learning Management System berbasis Laravel 11, Vue 3, PostgreSQL, Redis, Docker, dan GitLab CI/CD.",
  },
  {
    title: "Cara saya membangun sistem",
    description:
      "Saya terbiasa merancang RESTful API, menghubungkan frontend dan backend, menyusun struktur data, serta memastikan alur fitur tetap jelas dari sisi pengguna maupun implementasi teknis.",
  },
  {
    title: "Hal yang saya jaga",
    description:
      "Saya cukup dekat dengan kebutuhan performa, debugging, dan stabilitas aplikasi. Pengalaman QA juga membuat saya lebih peka terhadap validasi, testability, dan detail yang sering terlewat di tahap implementasi.",
  },
];

export const projects = [
  {
    accentClass: "accent-mint",
    badge: "Private Project • Go",
    title: "civiAlert",
    isLatest: true,
    description:
      "Bot Telegram untuk notifikasi operasional, approval pengguna, dan kontrol LMS. Proyek ini menonjolkan fokus saya pada automasi alur kerja, integrasi sistem, dan tooling internal yang dipakai pada kebutuhan operasional nyata.",
    tags: ["Go", "Telegram Bot", "Approval Flow", "LMS"],
    repoUrl: "",
    ctaLabel: "Private Repo",
  },
  {
    accentClass: "accent-sky",
    badge: "Vue 3 • TypeScript",
    title: "Garda KawalMBG Prototype",
    isLatest: false,
    description:
      "Prototype aplikasi monitoring distribusi MBG dengan peran regulator dan vendor. Saya menempatkan produk ini sebagai showcase kemampuan merancang dashboard, alur multi-role, sistem peringatan, dan pengalaman penggunaan yang terasa seperti aplikasi production.",
    tags: ["Vue 3", "TypeScript", "PrimeVue", "Pinia", "Vite"],
    repoUrl: "https://github.com/Basith-08/garda-KawalMBG-prototype",
    ctaLabel: "Repo",
  },
  {
    accentClass: "accent-violet",
    badge: "Go • Vue 3 • RBAC",
    title: "PermifyKit",
    isLatest: false,
    description:
      "Starter kit fullstack untuk implementasi Role-Based Access Control yang dirancang agar siap dikembangkan lebih lanjut. Proyek ini menunjukkan perhatian saya pada clean architecture, kontrak otorisasi, dan fondasi aplikasi web yang aman serta terstruktur.",
    tags: ["Go", "Vue 3", "PostgreSQL", "Tailwind CSS", "RBAC"],
    repoUrl: "https://github.com/Basith-08/PermifyKit",
    ctaLabel: "Repo",
  },
  {
    accentClass: "accent-rose",
    badge: "Laravel 12 • Blade • Alpine",
    title: "AuthForge",
    isLatest: false,
    description:
      "RBAC starter kit berbasis Laravel 12 dengan dashboard manajemen user, role, dan permission. Cocok ditampilkan karena memperlihatkan kemampuan saya membangun backend modular, struktur otorisasi, dan antarmuka admin yang tetap responsif.",
    tags: ["Laravel 12", "Blade", "Alpine.js", "RBAC", "Admin Dashboard"],
    repoUrl: "https://github.com/Basith-08/AuthForge",
    ctaLabel: "Repo",
  },
  {
    accentClass: "accent-gold",
    badge: "Vue 3 Design System",
    title: "Rose UI",
    isLatest: false,
    description:
      "Design system dan component library berbasis Vue 3 yang saya bangun untuk menjaga konsistensi UI dari level token hingga komponen. Proyek ini memperkuat sisi frontend engineering, reusability, dan workflow distribusi package.",
    tags: ["Vue 3", "Design System", "pnpm Workspace", "UI Library", "Tokens"],
    repoUrl: "https://github.com/Basith-08/rose-ui",
    ctaLabel: "Repo",
  },
  {
    accentClass: "accent-gold",
    badge: "Vue 3 • TypeScript • Supabase",
    title: "Laptop Sales Management System",
    isLatest: false,
    description:
      "Frontend dashboard penjualan laptop dengan alur autentikasi, transaksi, ringkasan finansial, dan kalkulasi pajak. Proyek ini layak ditampilkan sebagai contoh implementasi business dashboard yang lebih dekat ke kebutuhan aplikasi operasional.",
    tags: ["Vue 3", "TypeScript", "Supabase", "Ant Design Vue", "Dashboard"],
    repoUrl: "https://github.com/Basith-08/laptop-sales-management-system",
    ctaLabel: "Repo",
  },
  {
    accentClass: "accent-lilac",
    badge: "Kotlin • Android • MVVM",
    title: "Tailor Management System Mobile",
    isLatest: false,
    description:
      "Aplikasi Android native untuk membantu operasional usaha jahit, mulai dari data pelanggan, pesanan, invoice, hingga tracking pembayaran. Ini menjadi bukti bahwa saya tidak hanya kuat di web, tetapi juga mampu membangun aplikasi mobile dengan arsitektur yang rapi.",
    tags: ["Kotlin", "MVVM", "Room Database", "Coroutines", "Android"],
    repoUrl: "https://github.com/Basith-08/Tailor-Management-System-Mobile",
    ctaLabel: "Repo",
  },
];

export const processItems = [
  {
    number: "01",
    title: "Backend yang terstruktur",
    description:
      "Saya terbiasa memikirkan kontrak API, struktur modul, dan alur data agar fitur tidak hanya jalan, tetapi juga mudah dikembangkan.",
  },
  {
    number: "02",
    title: "Integrasi yang rapi",
    description:
      "Saya nyaman menghubungkan frontend, backend, database, dan kebutuhan bisnis menjadi alur yang konsisten serta mudah dipahami pengguna.",
  },
  {
    number: "03",
    title: "Kualitas yang terjaga",
    description:
      "Saya memperhatikan performa, validasi, debugging, dan pengujian karena kualitas aplikasi biasanya ditentukan oleh detail-detail implementasi kecil.",
  },
];
