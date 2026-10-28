
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Scale,
} from "lucide-react";
import "./Hero.css";

const WHATSAPP = "https://wa.me/918123838480";

export default function Hero() {
  return (
    <section className="hol-hero" id="home">
      <div className="hol-hero-image" />
      <div className="hol-hero-overlay" />

      <div className="hol-hero-content">
        <div className="hol-hero-eyebrow">
          <span className="hol-eyebrow-line" />
          <span>HARI OM LEGAL</span>
          <span className="hol-eyebrow-dot">•</span>
          <span>LEGAL COUNSEL & ADVISORY</span>
        </div>

        <h1>
          Clarity in law.
          <br />
          <em>Confidence</em>
          <br />
          in every decision.
        </h1>

        <p className="hol-hero-description">
          Thoughtful legal counsel for individuals and businesses.
          We bring clarity to complex matters and purpose to every step.
        </p>

        <div className="hol-hero-actions">
          <a
            className="hol-hero-primary"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            <span>Speak to Our Team</span>
            <ArrowRight size={18} />
          </a>

          <a className="hol-hero-secondary" href="#practice-areas">
            <span>Explore Our Expertise</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hol-hero-trust">
          <div className="hol-hero-trust-icon">
            <Scale size={36} strokeWidth={1.3} />
          </div>

          <div className="hol-hero-trust-copy">
            <strong>Thoughtful counsel. Purposeful action.</strong>
            <span>Legal guidance built around your needs.</span>
          </div>
        </div>
      </div>

      <div className="hol-hero-side-note">
        <span className="hol-side-line" />
        <span>INTEGRITY · CLARITY · COMMITMENT</span>
      </div>

      <div className="hol-hero-bottom">
        <a href="#about" className="hol-hero-scroll">
          <span className="hol-scroll-circle">
            <ArrowDown size={16} />
          </span>
          <span>SCROLL TO DISCOVER</span>
        </a>

        <div className="hol-hero-counter">
          <span className="hol-counter-active">01</span>
          <span className="hol-counter-line" />
          <span>06</span>
        </div>
      </div>
    </section>
  );
}
