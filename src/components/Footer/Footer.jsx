
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Scale,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/footer/logo.png";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Offices", href: "#offices" },
  { label: "Contact Us", href: "#contact" },
];

const practiceAreas = [
  "Family Law",
  "Civil Litigation & Dispute Resolution",
  "Corporate Law & Advisory",
  "Commercial Law & Contracts",
  "Criminal Law & Defence",
  "Intellectual Property Rights",
];

const offices = [
  {
    city: "Bengaluru",
    type: "Head Office",
    address:
      "No. 319/3, 5th Floor, 20th C Main Road, 80 Feet Road, Opp. Indoor Stadium, Koramangala 8th Block, Bengaluru 560095",
  },
  {
    city: "Hyderabad",
    type: "Branch Office",
    address:
      "No. 21/898, Petlabruz, Purnapul, Hyderabad 500002",
  },
  {
    city: "Pune",
    type: "Branch Office",
    address:
      "No. 107/2, Tophakhana, Shivajinagar, Pune 411005",
  },
  {
    city: "Chennai",
    type: "Branch Office",
    address: "No. 04, George Town, Chennai 600104",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hol-footer">
      {/* Consultation section */}
      <section className="hol-footer-cta">
        <div className="hol-footer-container hol-footer-cta-inner">
          <div className="hol-footer-cta-content">
            <span className="hol-footer-kicker">
              HARI OM LEGAL
            </span>

            <h2>
              Legal clarity.
              <br />
              <span>Confident decisions.</span>
            </h2>

            <p>
              Speak with our team about your legal requirements
              and the options available to you.
            </p>
          </div>

          <a
            href="https://wa.me/918123838480"
            target="_blank"
            rel="noopener noreferrer"
            className="hol-footer-primary-btn"
          >
            <span>Consult Our Team</span>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Main footer */}
      <div className="hol-footer-container">
        <div className="hol-footer-main-grid">
          {/* Brand */}
          <div className="hol-footer-brand">
            <a
              href="#home"
              className="hol-footer-logo-link"
              aria-label="Hari Om Legal homepage"
            >
              <img
                src={logo}
                alt="Hari Om Legal"
                className="hol-footer-logo"
                loading="lazy"
              />
            </a>

            <p className="hol-footer-description">
              Legal counsel and representation guided by
              professional integrity, thoughtful advice and
              a commitment to our clients.
            </p>

            <div className="hol-footer-socials">
              <a
                href="https://www.instagram.com/hari_om_legal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/hari-om-legal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918123838480"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="hol-footer-column">
            <h3>Explore</h3>
            <span className="hol-footer-accent-line" />

            <ul>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    <ArrowUpRight size={14} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/hari-om-legal-trademark.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hol-footer-certificate-link"
            >
              <Scale size={15} />
              <span>Trademark Certificate</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Practice areas */}
          <div className="hol-footer-column">
            <h3>Practice Areas</h3>
            <span className="hol-footer-accent-line" />

            <ul>
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a href="#practice-areas">
                    <ArrowUpRight size={14} />
                    <span>{area}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="hol-footer-column hol-footer-contact">
            <h3>Contact Us</h3>
            <span className="hol-footer-accent-line" />

            <a
              href="tel:+918123838480"
              className="hol-footer-contact-item"
            >
              <span className="hol-footer-contact-icon">
                <Phone size={17} />
              </span>
              <span className="hol-footer-contact-copy">
                <small>Call our office</small>
                <strong>+91 81238 38480</strong>
              </span>
            </a>

            <a
              href="mailto:info@hariomlegal.in"
              className="hol-footer-contact-item"
            >
              <span className="hol-footer-contact-icon">
                <Mail size={17} />
              </span>
              <span className="hol-footer-contact-copy">
                <small>Email us</small>
                <strong>info@hariomlegal.in</strong>
              </span>
            </a>

            <div className="hol-footer-contact-note">
              <MapPin size={16} />
              <span>Bengaluru, India</span>
            </div>

            <a
              href="https://wa.me/918123838480"
              target="_blank"
              rel="noopener noreferrer"
              className="hol-footer-whatsapp"
            >
              <FaWhatsapp />
              <span>Message on WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Office locations */}
        <section className="hol-footer-offices" id="footer-offices">
          <div className="hol-footer-offices-heading">
            <div>
              <span className="hol-footer-kicker">
                OUR LOCATIONS
              </span>
              <h3>Our offices across India</h3>
            </div>

            <span className="hol-footer-location-count">
              04 CITIES
            </span>
          </div>

          <div className="hol-footer-office-grid">
            {offices.map((office) => (
              <article
                className="hol-footer-office"
                key={office.city}
              >
                <div className="hol-footer-office-title">
                  <MapPin size={17} />
                  <h4>{office.city}</h4>
                </div>

                <span className="hol-footer-office-type">
                  {office.type}
                </span>

                <p>{office.address}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Legal disclaimer */}
        <div className="hol-footer-disclaimer">
          <Scale size={19} />
          <p>
            The information on this website is for general
            informational purposes only and does not constitute
            legal advice. Accessing this website does not by
            itself establish a lawyer client relationship.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="hol-footer-bottom">
          <p>
            © {year} Hari Om Legal. All rights reserved.
          </p>

          <a href="#home" className="hol-footer-back-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
