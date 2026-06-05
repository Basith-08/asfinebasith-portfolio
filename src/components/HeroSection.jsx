import { heroStats } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Fullstack Development • REST API • Vue 3 • LMS</p>
        <h1>
          Saya membangun aplikasi web yang rapi di backend, jelas di alur produk, dan stabil saat
          digunakan.
        </h1>
        <p className="hero-text">
          Saya As Fine Basith, mahasiswa informatika dengan pengalaman sebagai Fullstack Developer
          di PT Tata Informasi Asia. Saya berfokus pada pengembangan aplikasi web berbasis Laravel
          dan Vue, perancangan RESTful API, integrasi frontend-backend, desain database, dan
          optimasi performa untuk kebutuhan sistem yang dipakai secara nyata.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Lihat Karya Pilihan
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/Basith-08"
            target="_blank"
            rel="noreferrer"
          >
            Buka GitHub
          </a>
        </div>

        <div className="hero-stats" aria-label="Ringkasan profil">
          {heroStats.map((stat) => (
            <article className="hero-stat surface-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-card">
          <div className="portrait-ring"></div>
          <img src="/img/profil.png" alt="Foto profil As Fine Basith" className="portrait" />
        </div>

        <div className="floating-note note-top">
          <span>Teknologi yang sering saya gunakan</span>
          <strong>Laravel 11, Vue 3, PostgreSQL, Redis</strong>
        </div>

        <div className="floating-note note-bottom">
          <span>Pengalaman terbaru</span>
          <strong>Fullstack Developer pada sistem LMS</strong>
        </div>
      </div>
    </section>
  );
}
