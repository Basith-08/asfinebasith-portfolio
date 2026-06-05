export default function ContactSection() {
  return (
    <section className="section-shell contact-shell" id="contact">
      <div className="contact-card surface-panel">
        <p className="section-kicker">Mari Terhubung</p>
        <h2 className="section-title">
          Jika Anda sedang mencari developer yang kuat di backend, integrasi sistem, dan aplikasi
          web yang rapi, saya terbuka untuk berdiskusi.
        </h2>
        <p>
          Saya terbiasa bekerja pada pengembangan LMS, RESTful API, integrasi frontend-backend,
          database design, dan optimasi performa. Anda bisa melihat karya saya di GitHub atau
          terhubung langsung melalui LinkedIn dan email.
        </p>

        <p className="contact-meta">asfinebasith@gmail.com · Tangerang Selatan, Banten</p>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="https://github.com/Basith-08"
            target="_blank"
            rel="noreferrer"
          >
            Lihat GitHub Saya
          </a>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/asfnbsthmryn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="button button-ghost" href="mailto:asfinebasith@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
