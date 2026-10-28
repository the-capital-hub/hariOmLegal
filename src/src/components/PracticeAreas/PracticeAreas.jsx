
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./PracticeAreas.css";
import services from '../../assets/home/services.png'
const featuredImage =
  services;

export default function PracticeAreas({ practices = [] }) {
  const featured = practices[0];
  const remaining = practices.slice(1);

  return (
    <section className="hol-practices hol-section" id="practice-areas">
      <div className="hol-practices-inner">
        <header className="hol-practices-heading">
          <div className="hol-practices-heading-main">
            <div className="hol-practices-eyebrow">
              <span className="hol-practices-eyebrow-line" />
              OUR AREAS OF EXPERTISE
            </div>

            <h2>
              Legal matters.
              <br />
              <em>Considered carefully.</em>
            </h2>
          </div>

          <p className="hol-practices-intro">
            Every situation deserves a considered approach.
            Explore our areas of practice and find the legal
            guidance relevant to your needs.
          </p>
        </header>

        <div className="hol-practices-layout">
          {/* LEFT: Featured practice */}
          {featured && (
            <article className="hol-practice-featured">
              <div className="hol-practice-featured-image">
                <img
                  src={featuredImage}
                  alt="Legal books and documents in a professional law office"
                  loading="lazy"
                />

                <div className="hol-practice-featured-overlay" />

                <div className="hol-featured-topline">
                  <span>FEATURED PRACTICE</span>
                  <span>01 / {String(practices.length).padStart(2, "0")}</span>
                </div>

                <div className="hol-featured-content">
                  <div className="hol-featured-icon">
                    {featured.icon &&
                      (() => {
                        const Icon = featured.icon;
                        return <Icon size={24} strokeWidth={1.4} />;
                      })()}
                  </div>

                  <h3>{featured.title}</h3>

                  <p>{featured.description}</p>

                  <a
                    href="#contact"
                    className="hol-featured-link"
                    aria-label={`Discuss your ${featured.title} matter`}
                  >
                    <span>DISCUSS YOUR MATTER</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                <span className="hol-featured-watermark">
                  H O L
                </span>
              </div>
            </article>
          )}

          {/* RIGHT: Remaining practice areas */}
          <div className="hol-practices-list">
            <div className="hol-practices-list-heading">
              <span>OUR SERVICES</span>
              <span>
                {String(remaining.length).padStart(2, "0")} AREAS
              </span>
            </div>

            {remaining.map((practice, index) => {
              const Icon = practice.icon;

              return (
                <article
                  className="hol-practice-row"
                  key={practice.number ?? practice.title}
                >
                  <span className="hol-practice-row-number">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="hol-practice-row-icon">
                    {Icon && (
                      <Icon size={21} strokeWidth={1.45} />
                    )}
                  </div>

                  <div className="hol-practice-row-copy">
                    <h3>{practice.title}</h3>
                    <p>{practice.description}</p>
                  </div>

                  <a
                    href="#contact"
                    className="hol-practice-row-link"
                    aria-label={`Enquire about ${practice.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              );
            })}

            <a href="#contact" className="hol-practices-contact">
              <span>Need guidance on your matter?</span>

              <strong>
                Speak with our team
                <ArrowRight size={16} />
              </strong>
            </a>
          </div>
        </div>

        <div className="hol-practices-footer">
          <span>HARI OM LEGAL</span>
          <span>CLARITY IN LAW. CONFIDENCE IN ACTION.</span>
        </div>
      </div>
    </section>
  );
}
