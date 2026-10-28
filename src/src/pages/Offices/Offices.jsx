
import React from "react";
import { Link } from "react-router-dom";
import "./Offices.css";
import delhi from '../../assets/office/delhi.png'
import mumbai from '../../assets/office/mumbai.png'

import bengaluru from '../../assets/office/bengaluru.png'
import india from '../../assets/office/india-map.png'
const offices = [
  {
    city: "New Delhi",
    address: "A 12, Connaught Place, New Delhi 110001",
    phone: "+91 11 4156 7890",
    email: "delhi@hariomlegal.in",
    image: delhi,
    map: "https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 4602 1180",
    email: "mumbai@hariomlegal.in",
    image: mumbai,
    map: "https://www.google.com/maps/search/?api=1&query=Bandra+Kurla+Complex+Mumbai",
  },
  {
    city: "Bengaluru",
    address: "Brigade Road, Bengaluru 560001",
    phone: "+91 80 4895 2200",
    email: "bengaluru@hariomlegal.in",
    image: bengaluru,
    map: "https://www.google.com/maps/search/?api=1&query=Brigade+Road+Bengaluru",
  },
];

const facilities = [
  {
    icon: "♧",
    title: "Dedicated Meeting Spaces",
    description: "Private and comfortable consultation rooms.",
  },
  {
    icon: "◇",
    title: "Confidential Environment",
    description: "Your discussions are treated with care and discretion.",
  },
  {
    icon: "▤",
    title: "Modern Facilities",
    description: "Professional spaces designed for productive meetings.",
  },
  {
    icon: "↗",
    title: "Convenient Locations",
    description: "Accessible locations for your legal consultations.",
  },
];

export default function Offices() {
  return (
    <main className="offices-page">
      {/* Hero */}
      <section className="offices-hero">
        <div className="offices-hero-image" />

        <div className="offices-hero-content">
          <span className="offices-eyebrow">
            <span />
            OUR OFFICES
          </span>

          <h1>
            Accessible
            <br />
            Legal Support
            <br />
            <em>Across Locations.</em>
          </h1>

          <p>
            We are here when you need us. Our offices are designed to provide
            a comfortable, professional and confidential environment for
            your legal consultations.
          </p>

          <a href="#office-locations" className="offices-hero-link">
            <span className="offices-round-arrow">↘</span>
            <span>FIND AN OFFICE NEAR YOU</span>
          </a>
        </div>

        <span className="offices-hero-index">01 / OUR PRESENCE</span>
      </section>

      {/* Office locations */}
      <section className="offices-locations" id="office-locations">
        <div className="offices-section-intro">
          <div className="offices-side-label">
            <span>01 / OUR PRESENCE</span>
            <div />
            <p>
              PEOPLE
              <br />
              PLACES
              <br />
              PROGRESS
            </p>
          </div>

          <h2>
            Strategic Locations
            <br />
            for <em>Greater Access.</em>
          </h2>

          <div className="offices-intro-copy">
            <p>
              Our offices are positioned to make legal support accessible
              to individuals, businesses and institutions.
            </p>
            <p>
              Each location reflects our commitment to professionalism,
              client comfort and a seamless consultation experience.
            </p>
          </div>
        </div>

        <div className="offices-grid">
          {offices.map((office) => (
            <article className="office-card" key={office.city}>
              <div className="office-card-image">
                <img src={office.image} alt={`${office.city} office`} />
                <a
                  className="office-image-arrow"
                  href={office.map}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Directions to ${office.city}`}
                >
                  ↗
                </a>
              </div>

              <div className="office-card-content">
                <h3>{office.city}</h3>
                <span className="office-title-line" />

                <div className="office-detail">
                  <span className="office-detail-icon">⌖</span>
                  <p>{office.address}</p>
                </div>

                <a className="office-detail" href={`tel:${office.phone}`}>
                  <span className="office-detail-icon">⌕</span>
                  <span>{office.phone}</span>
                </a>

                <a className="office-detail" href={`mailto:${office.email}`}>
                  <span className="office-detail-icon">✉</span>
                  <span>{office.email}</span>
                </a>

                <a
                  className="office-directions"
                  href={office.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="offices-experience">
        <div className="offices-experience-heading">
          <div className="offices-side-label">
            <span>02 / WHAT YOU CAN EXPECT</span>
            <div />
            <p>
              PROFESSIONAL
              <br />
              COMFORTABLE
              <br />
              CONFIDENTIAL
            </p>
          </div>

          <h2>
            A Better
            <br />
            Experience
            <br />
            <em>in Every Visit.</em>
          </h2>
        </div>

        <div className="offices-facilities">
          {facilities.map((facility) => (
            <div className="office-facility" key={facility.title}>
              <div className="office-facility-icon">{facility.icon}</div>
              <div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan your visit */}
      <section className="offices-visit">
        <div className="offices-map-visual">
          <img
            src={india}
            alt="Map illustration showing office locations in India"
          />
        </div>

        <div className="offices-visit-content">
          

          <h2>
            Find the <em>Nearest</em>
            <br />
            Office.
          </h2>

          <p>
            Choose a location to get directions, review contact details and
            plan your visit. We look forward to welcoming you.
          </p>

          <a
            className="offices-primary-button"
            href="https://www.google.com/maps/search/law+firm+India"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps <span>↗</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="offices-cta">
        <div className="offices-cta-background" />

        <div className="offices-cta-content">
          <span className="offices-eyebrow">
            <span />
            GET IN TOUCH
          </span>

          <h2 style={{color:"white"}}>
            Let's Discuss
            <br />
            <em>Your Legal Needs.</em>
          </h2>

          <p>
            Reach out to our team to discuss your requirements and arrange
            a consultation.
          </p>

          <Link to="/contact" className="offices-primary-button">
            Consult an Expert <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
