import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OurTeam.css";

const team = [
  ["Prabhu N Savanur","Founder","Founder of Hari Om Legal, providing leadership and strategic direction to the firm.","photo-1560250097-0b93528c311a","PS"],
  ["Chithra Jeyan","Associate","Part of the Hari Om Legal team, supporting clients across the firm's legal practice areas.","photo-1580489944761-15a19d654956","CJ"],
  ["Sriram S","Associate","Associate at Hari Om Legal, contributing to legal advisory and client representation.","photo-1500648767791-00dcc994a43e","SS"],
  ["Sandeep K S","Associate","Associate at Hari Om Legal, supporting the firm's legal matters and client requirements.","photo-1506794778202-cad84cf45f1d","SK"],
  ["Prajual S","Associate","Associate at Hari Om Legal, contributing to the firm's client focused legal practice.","photo-1504590094901-4b5f4b2b8c6b","PS"],
  ["S Vijay Kumar","Associate","Associate at Hari Om Legal, supporting legal matters and client representation.","photo-1519085360753-af0119f7cbe7","VK"],
  ["Md. Shakir Hussain","Associate","Associate at Hari Om Legal, supporting clients and the firm's legal practice.","photo-1507003211169-0a1dd7228f2d","MH"],
];

const photo = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function OurTeam() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".hol-team-page [data-team-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("hol-team-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hol-team-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className="hol-team-page">
    <section className="hol-team-hero">
      <div className="hol-team-hero-image" aria-hidden="true" />
      <div className="hol-team-hero-shade" aria-hidden="true" />
      <div className="hol-team-hero-content" data-team-reveal>
        <span className="hol-team-eyebrow"><i /> THE PEOPLE BEHIND YOUR COUNSEL</span>
        <h1>Meet Our <em>Legal Team</em></h1>
        <p className="hol-team-hero-subtitle">Experienced Professionals. Dedicated Legal Support.</p>
        <p className="hol-team-hero-copy">At Hari Om Legal, our team is committed to providing professional, diligent and client focused legal assistance.</p>
        <a className="hol-team-primary-button" href="#our-team">Meet the team <span>↘</span></a>
      </div>
      <div className="hol-team-hero-note"><span /> Trust. Accessibility. Communication.</div>
    </section>

    <section className="hol-team-intro">
      <div className="hol-team-intro-label" data-team-reveal><b>01</b><span>OUR PEOPLE</span></div>
      <div className="hol-team-intro-copy" data-team-reveal>
        <h2>Clear advice.<br/><em>Committed people.</em></h2>
        <p>We believe strong client relationships are built on trust, accessibility and consistent communication. Our team works to make every interaction considered, clear and focused on your needs.</p>
      </div>
      <div className="hol-team-intro-mark" aria-hidden="true">HOL<span>✳</span></div>
    </section>

    <section className="hol-team-directory" id="our-team">
      <div className="hol-team-directory-heading" data-team-reveal>
        <div><span className="hol-team-eyebrow hol-team-eyebrow-dark"><i/> THE PEOPLE YOU WORK WITH</span><h2>Meet the <em>team.</em></h2></div>
        <p>Professional guidance, grounded in diligence and a personal understanding of every matter.</p>
      </div>
      <div className="hol-team-grid">
        {team.map(([name, role, description, image, initials], index) => <article className="hol-team-card" key={name} data-team-reveal style={{"--team-delay": `${index % 3 * 90}ms`}}>
          <div className="hol-team-photo-wrap">
            <img src={photo(image)} alt={`Illustrative portrait for ${name}`} className="hol-team-photo" loading={index < 3 ? "eager" : "lazy"} onError={(e) => { e.currentTarget.style.display="none"; e.currentTarget.nextElementSibling.style.display="grid"; }}/>
            <div className="hol-team-photo-fallback" aria-hidden="true">{initials}</div>
            <span className="hol-team-card-number">{String(index+1).padStart(2,"0")}</span>
            {index === 0 && <span className="hol-team-founder-tag">FOUNDING LEADERSHIP</span>}
          </div>
          <div className="hol-team-card-info"><span className="hol-team-member-role">{role}</span><h3>{name}</h3><span className="hol-team-card-arrow" aria-hidden="true">↗</span><p>{description}</p></div>
        </article>)}
      </div>
      <p className="hol-team-photo-disclaimer">Portraits are illustrative placeholders and can be replaced with approved team photographs.</p>
    </section>

    <section className="hol-team-commitment">
      <div className="hol-team-commitment-image" data-team-reveal><img src={photo("photo-1521791136064-7986c2920216",1400)} alt="Professionals meeting around a table" loading="lazy"/><div className="hol-team-image-caption"><span>HARI OM LEGAL</span><span>01 / OUR COMMITMENT</span></div></div>
      <div className="hol-team-commitment-copy" data-team-reveal>
        <span className="hol-team-eyebrow hol-team-eyebrow-dark"><i/> OUR PROFESSIONAL COMMITMENT</span>
        <h2>Every matter deserves <em>our full attention.</em></h2>
        <p>We approach every engagement with dedication, precision and a strong sense of responsibility, whether assisting an individual with a personal dispute or advising an organisation on a complex commercial matter.</p>
        <div className="hol-team-values"><div><span>01</span><strong>Dedicated support</strong></div><div><span>02</span><strong>Clear communication</strong></div><div><span>03</span><strong>Thoughtful legal guidance</strong></div></div>
      </div>
    </section>

    <section className="hol-team-cta">
      <div className="hol-team-cta-image" aria-hidden="true"/>
      <div className="hol-team-cta-content" data-team-reveal>
        <span className="hol-team-eyebrow"><i/> START A CONVERSATION</span>
        <h2>Good counsel begins<br/>with a <em>conversation.</em></h2>
        <p>Tell us what you need help with. Our team is ready to listen and guide you through the next step.</p>
        <div className="hol-team-cta-actions"><Link className="hol-team-primary-button" to="/contact">Consult an expert <span>↗</span></Link><a className="hol-team-secondary-link" href="tel:+918123838480">Call +91 8123838480</a></div>
      </div>
    </section>
  </main>;
}
