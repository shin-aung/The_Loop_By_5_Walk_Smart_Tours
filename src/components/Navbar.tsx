import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Tours", to: "/tours" },
  { label: "Gallery", to: "/gallery" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Achievements", to: "/achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled || menuOpen ? "navbar--scrolled" : "navbar--transparent"}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <div className="navbar__logo-mark">L5</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">The Loop by 5</span>
              <span className="navbar__logo-tagline">Walk Smart Tours</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/future" className="navbar__cta">
              Future Goals
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? " navbar__mobile-menu--open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/future"
          className={({ isActive }) =>
            `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
          }
          onClick={closeMenu}
        >
          Future Goals
        </NavLink>
      </div>
    </>
  );
}
