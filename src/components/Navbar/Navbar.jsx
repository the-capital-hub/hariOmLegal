
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";

import logo from "../../assets/hol-logo.png";
import "./Navbar.css";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About Us", to: "about" },
  { name: "Practice Areas", to: "practice-areas" },
  { name: "Our Approach", to: "approach" },
  { name: "Our Offices", to: "offices" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="hol-navbar">
      {/* Premium contact strip */}
      <div className="hol-topbar">
        <div className="hol-topbar-inner">
          <span className="hol-topbar-message">
            Trusted Legal Counsel. Committed to Your Interests.
          </span>

          <div className="hol-topbar-contact">
            <a href="tel:+918123838480">
              <Phone size={13} />
              <span>+91 81238 38480</span>
            </a>

            <span className="hol-topbar-divider" />

            <a href="mailto:info@hariomlegal.in">
              <Mail size={14} />
              <span>info@hariomlegal.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="hol-navbar-inner">
        <a
          href="#home"
          className="hol-brand"
          onClick={closeMenu}
          aria-label="Hari Om Legal homepage"
        >
          <img
            src={logo}
            alt="Hari Om Legal"
            className="hol-brand-logo"
          />
        </a>

        <nav
          className="hol-desktop-nav"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={450}
              offset={-115}
              spy
              activeClass="hol-nav-active"
              className="hol-nav-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/918123838480"
          target="_blank"
          rel="noopener noreferrer"
          className="hol-nav-cta"
        >
          <span className="hol-cta-text">Consult an Expert</span>
          <span className="hol-cta-icon">
            <ArrowUpRight size={17} />
          </span>
        </a>

        <button
          type="button"
          className="hol-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="hol-mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="hol-mobile-menu"
        className={`hol-mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="hol-mobile-nav"
          aria-label="Mobile navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={450}
              offset={-95}
              spy
              activeClass="hol-nav-active"
              className="hol-mobile-link"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{item.name}</span>
              <ArrowUpRight size={17} />
            </Link>
          ))}

          <div className="hol-mobile-contact">
            <span>Have a legal query?</span>
            <a href="tel:+918123838480">
              <Phone size={15} />
              +91 81238 38480
            </a>
          </div>

          <a
            href="https://wa.me/918123838480"
            target="_blank"
            rel="noopener noreferrer"
            className="hol-mobile-cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>Book a Consultation</span>
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
