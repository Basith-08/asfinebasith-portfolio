import { useEffect, useState } from "react";
import { navItems } from "../data/portfolio";

const MOBILE_BREAKPOINT = 760;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <nav className="navbar">
      <a className="brand" href="#home" aria-label="Beranda As Fine Basith" onClick={closeMenu}>
        <img src="/img/navBrand.jpg" alt="Logo As Fine Basith" />
        <span>As Fine Basith</span>
      </a>

      <button
        className={`hamburger${isMenuOpen ? " active" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-menu${isMenuOpen ? " active" : ""}`} id="primary-navigation">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
