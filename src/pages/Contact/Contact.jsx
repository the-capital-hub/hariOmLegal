
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import bengaluru from '../../assets/contact/bengaluru.png';

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
const offices = [
  {
    city: "Bengaluru",
    officeType: "Head Office",
    address:
      "No. 319/3, 5th Floor, 20th C Main Road, 80 Feet Road, Opp. Indoor Stadium, Koramangala 8th Block, Bengaluru, Karnataka 560095",
    image: bengaluru,
    map: "https://www.google.com/maps/search/?api=1&query=Hari+Om+Legal+No+319%2F3+5th+Floor+20th+C+Main+Road+Koramangala+8th+Block+Bengaluru+560095",
  },
  {
    city: "Hyderabad",
    officeType: "Branch Office",
    address:
      "No. 21/898, Petlabruz, Purnapul, Hyderabad, Telangana 500002",
    image: bengaluru,
    map: "https://www.google.com/maps/search/?api=1&query=Hari+Om+Legal+No+21%2F898+Petlabruz+Purnapul+Hyderabad+500002",
  },
  {
    city: "Pune",
    officeType: "Branch Office",
    address:
      "No. 107/2, Tophakhana, Shivajinagar, Pune, Maharashtra 411005",
    image: bengaluru,
    map: "https://www.google.com/maps/search/?api=1&query=Hari+Om+Legal+No+107%2F2+Tophakhana+Shivajinagar+Pune+411005",
  },
  {
    city: "Chennai",
    officeType: "Branch Office",
    address: "No. 04, George Town, Chennai, Tamil Nadu 600104",
    image: bengaluru,
    map: "https://www.google.com/maps/search/?api=1&query=Hari+Om+Legal+No+04+George+Town+Chennai+600104",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      `Legal enquiry: ${form.subject}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Subject: ${form.subject}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:info@hariomlegal.in?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-image" />

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </span>

          <h1>
            Let's Start
            <br />
            a Conversation.
            <br />
            <em>We're Here to Help.</em>
          </h1>

          <p>
            Whether you have a question, need legal advice or want to
            schedule a consultation, our team is ready to assist you.
          </p>

          <a href="#contact-form" className="contact-hero-link">
            <span className="contact-round-arrow">↘</span>
            CONTACT US TODAY
          </a>
        </div>

        <span className="contact-hero-index">01 / CONTACT</span>
      </section>

      {/* Contact form and direct details */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-section-heading">
          <div className="contact-side-label">
            <span>01 / CONTACT FORM</span>
            <div />
            <p>
              YOUR
              <br />
              MATTER
              <br />
              OUR PRIORITY
            </p>
          </div>

          <h2>
            Tell Us About
            <br />
            Your <em>Requirements.</em>
          </h2>

          <p className="contact-heading-copy">
            Fill out the form and our team will get back to you at the
            earliest. Information shared with us is treated with care
            and confidentiality.
          </p>
        </div>

        <div className="contact-form-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject <span>*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={updateForm}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Civil Litigation">Civil Litigation</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Property Matters">Property Matters</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Legal Consultation">Legal Consultation</option>
                  <option value="Other Enquiry">Other Enquiry</option>
                </select>
              </div>

              <div className="contact-field contact-message-field">
                <label htmlFor="contact-message">
                  Your Message <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="How can we help you?"
                  maxLength={500}
                  required
                  rows={4}
                />
                <span className="contact-character-count">
                  {form.message.length}/500
                </span>
              </div>
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>↗</span>
            </button>

            {submitted && (
              <p className="contact-form-notice" role="status">
                Your email application should open with your enquiry.
                Please send the email to complete your request.
              </p>
            )}
          </form>

          <aside className="contact-direct">
            <h3>Direct Contact</h3>

            <a className="contact-direct-item" href="tel:+918123838480">
              <span className="contact-direct-icon">♧</span>
              <span>
                <strong>+91 81238 38480</strong>
                <small>Call us to discuss your enquiry</small>
              </span>
            </a>

            <a
              className="contact-direct-item"
              href="mailto:info@hariomlegal.in"
            >
              <span className="contact-direct-icon">✉</span>
              <span>
                <strong>info@hariomlegal.in</strong>
                <small>Send us your enquiry by email</small>
              </span>
            </a>

            <div className="contact-direct-item">
              <span className="contact-direct-icon">⌖</span>
              <span>
                <strong>Bengaluru Head Office</strong>
                <small>No. 319/3, 5th Floor, 20th C Main Road, Koramangala 8th Block, Bengaluru 560095</small>
              </span>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/company/hari-om-legal/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn/>
                </a>
                <a
                  href="https://www.instagram.com/hariom_legal?rpxt=eTZicmttenp3aW9u&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram/>
                </a>
                <a
                  href="https://wa.me/918123838480"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp/>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Offices */}
      <section className="contact-offices">
        <div className="contact-section-heading contact-office-heading">
          <div className="contact-side-label">
            <span>02 / OUR OFFICES</span>
            <div />
            <p>
              VISIT US
              <br />
              MEET OUR TEAM
              <br />
              DISCUSS YOUR MATTER
            </p>
          </div>

          <h2>
            Our <em>Locations.</em>
          </h2>

          <p className="contact-heading-copy">
            Find the right location for your consultation. Contact our
            team to confirm availability before visiting.
          </p>
        </div>

        <div className="contact-offices-grid">
          {offices.map((office) => (
            <article className="contact-office-card" key={office.city}>
              <a
                className="contact-office-image"
                href={office.map}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${office.city} on Google Maps`}
              >
                <img src={office.image} alt={`${office.city} office`} />
                <span>↗</span>
              </a>

              <div className="contact-office-card-content">
                <span className={`contact-office-type${office.officeType === "Head Office" ? " is-head-office" : ""}`}>
                  {office.officeType}
                </span>
                <h3>{office.city}</h3>
                <p>
                  <span>⌖</span>
                  {office.address}
                </p>

                <a
                  href={office.map}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-directions"
                >
                  Get Directions <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quick contact */}
      <section className="contact-quick-section">
        <div className="contact-map">
          <iframe
            title="Find legal offices in India"
            src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-quick-content">
         

          <h2>
            Quick Contact
            <br />
            <em>Options.</em>
          </h2>

          <p>
            For enquiries, reach out to us directly by phone or email.
            Our team is here to help you understand the next steps.
          </p>

          <div className="contact-quick-buttons">
            <a className="contact-call-button" href="tel:+918123838480">
              <span>♧</span> Call Now
            </a>

            <a
              className="contact-email-button"
              href="mailto:info@hariomlegal.in"
            >
              <span>✉</span> Email Us
            </a>
          </div>

          <a
            className="contact-whatsapp-link"
            href="https://wa.me/918123838480"
            target="_blank"
            rel="noreferrer"
          >
            Prefer WhatsApp? Message our team ↗
          </a>
        </div>
      </section>

      <section className="contact-bottom-cta">
        <div>
          <span className="contact-eyebrow">
            <span />
            HARI OM LEGAL
          </span>
          <h2 style={{color:"white"}}>
            Every Conversation
            <br />
            <em>Begins With Trust.</em>
          </h2>
          <p>
            Tell us what you need. We will help you understand your options.
          </p>
        </div>

        <Link to="/practice-areas" className="contact-bottom-button">
          Explore Our Expertise <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
