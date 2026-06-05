export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 As Fine Basith. Fullstack developer portfolio focused on systems, products, and clean implementation.</p>
      <div className="social-links">
        <a href="https://github.com/Basith-08" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bi bi-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/asfnbsthmryn"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:asfinebasith@gmail.com" aria-label="Email">
          <i className="bi bi-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}
