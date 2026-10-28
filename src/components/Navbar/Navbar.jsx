
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Practice Areas", to: "/practice-areas" },
  { name: "Our Approach", to: "/approach" },
  { name: "Team", to: "/our-team" },

  { name: "Our Offices", to: "/offices" },
  { name: "Contact", to: "/contact" },
];

const WHATSAPP = "https://wa.me/918123838480";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (item) => {
    if (item.to === "/") {
      return location.pathname === "/" && !location.hash;
    }

    if (item.to === "/about") {
      return location.pathname === "/about";
    }

    return (
      location.pathname === "/" &&
      location.hash === item.to.replace("/", "")
    );
  };

  return (
    <header className="hol-navbar">
      {/* Top contact strip */}
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
        <Link
          to="/"
          className="hol-brand"
          onClick={closeMenu}
          aria-label="Hari Om Legal homepage"
        >
          <img
            src={logo}
            alt="Hari Om Legal"
            className="hol-brand-logo"
          />
        </Link>

        <nav
          className="hol-desktop-nav"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hol-nav-link ${
                isActive(item) ? "hol-nav-active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hol-nav-cta"
        >
          <span className="hol-cta-text">Consult an Expert</span>
          <span className="hol-cta-icon">
            <ArrowUpRight size={17} />
          </span>
        </a>

        {/* Mobile menu button */}
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

      {/* Mobile navigation */}
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
              className={`hol-mobile-link ${
                isActive(item) ? "hol-nav-active" : ""
              }`}
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
            href={WHATSAPP}
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
