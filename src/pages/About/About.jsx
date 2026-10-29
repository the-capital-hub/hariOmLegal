
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./About.css";
import imageteam1 from '../../assets/about/team-consultation.png'
import imageteam2 from '../../assets/about/team-library.png'
import imageteam3 from '../../assets/about/team-meeting.png'
import storyOffice from '../../assets/about/story-office.png'
import courthouse from '../../assets/about/courthouse.png'
import clientConsultation from '../../assets/about/client-consultation.png'

const values = [
  {
    number: "01",
    icon: "♢",
    title: "Integrity",
    description: "We uphold ethical standards, honesty and transparency in every interaction.",
  },
  {
    number: "02",
    icon: "♧",
    title: "Client First",
    description: "Your interests, concerns and objectives guide our approach.",
  },
  {
    number: "03",
    icon: "⚖",
    title: "Excellence",
    description: "We pursue thoughtful preparation and quality in every matter.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Practical Solutions",
    description: "We focus on clear advice and realistic, actionable legal options.",
  },
  {
    number: "05",
    icon: "◇",
    title: "Trust",
    description: "We value confidentiality, open communication and lasting relationships.",
  },
];

const stats = [
  {
    value: "Client Focus",
    label: "Personalised Attention",
    description: "Every matter deserves a considered approach.",
    icon: "♧",
  },
  {
    value: "Clear Advice",
    label: "Practical Guidance",
    description: "Understand your options and possible next steps.",
    icon: "▤",
  },
  {
    value: "Dedicated",
    label: "Professional Support",
    description: "Thoughtful attention throughout your matter.",
    icon: "♙",
  },
  {
    value: "Confidential",
    label: "Respect for Privacy",
    description: "Your information is handled with discretion.",
    icon: "◇",
  },
];

const teamImages = [
  {
    image: imageteam1,
    alt: "Legal professionals discussing a case",
    title: "Collaborative Thinking",
    description: "Thoughtful discussion and preparation",
  },
  {
    image: imageteam3,
    alt: "Legal team meeting in a professional office",
    title: "Shared Perspective",
    description: "Working together on complex matters",
  },
  {
    image: imageteam2,
    alt: "Legal reference books in a law office library",
    title: "Knowledge and Preparation",
    description: "A considered approach to legal work",
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-hero">
        <div className="about-hero-bg" />

        <div className="about-hero-content">
          <span className="about-eyebrow">
            <span />
            ABOUT US
          </span>

          <h1>
            A Commitment
            <br />
            to Justice
            <br />
            <em>and People.</em>
          </h1>

          <p>
            Hari Om Legal is dedicated to providing practical legal
            guidance to individuals, businesses and institutions through
            a thoughtful and client focused approach.
          </p>

          <a href="#our-story" className="about-hero-link">
            <span className="about-circle-arrow">↘</span>
            OUR STORY
          </a>
        </div>

        <span className="about-hero-index">01 / ABOUT HARI OM LEGAL</span>
      </motion.section>

      {/* Story */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-story" id="our-story">
        <div className="about-side-label">
          <span>01 / OUR STORY</span>
          <i />
          <p>
            PEOPLE
            <br />
            KNOWLEDGE
            <br />
            TRUST
          </p>
        </div>

        <div className="about-story-copy">
          <h2>
            Built on Values.
            <br />
            <em>Driven by Purpose.</em>
          </h2>

          <p>
            Hari Om Legal believes that effective legal support begins
            with listening, understanding and a clear view of each
            client's needs.
          </p>

          <p>
            Our approach brings together legal knowledge, careful
            preparation and practical thinking to help clients navigate
            their matters with greater clarity and confidence.
          </p>

          <p>
            We aim to build professional relationships founded on
            integrity, communication and a commitment to responsible
            legal service.
          </p>
        </div>

        <div className="about-story-image">
          <img
            src={storyOffice}
            alt="Professional law office meeting room"
            loading="lazy"
          />
          <span>Thoughtful counsel. Meaningful relationships.</span>
        </div>
      </motion.section>

      {/* Trust principles */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-stats">
        {stats.map((item) => (
          <motion.article
            className="about-stat"
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="about-stat-icon">{item.icon}</span>
            <h3 style={{color:"white"}}>{item.value}</h3>
            <strong>{item.label}</strong>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </motion.section>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-philosophy">
        <div className="about-philosophy-image">
          <img
            src={courthouse}
            alt="Classical courthouse architecture"
            loading="lazy"
          />
        </div>

        <div className="about-side-label">
          <span>OUR PHILOSOPHY</span>
          <i />
          <p>
            INTEGRITY
            <br />
            PRACTICAL SOLUTIONS
            <br />
            LASTING IMPACT
          </p>
        </div>

        <div className="about-philosophy-copy">
          <h2 style={{color:"black"}}>
            More Than Legal Advice.
            <br />
            A Partner in <em>Your Journey.</em>
          </h2>

          <p>
            Legal matters are about more than documents and procedures.
            They involve people, decisions, responsibilities and
            important outcomes.
          </p>

          <p>
            We aim to understand the wider context of each matter and
            provide considered guidance that helps clients make informed
            decisions.
          </p>

          <Link to="/approach" className="about-text-link">
            Discover Our Approach <span>↗</span>
          </Link>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-values">
        <div className="about-values-heading">
          <div className="about-side-label">
            <span>02 / OUR VALUES</span>
            <i />
            <p>
              WHAT GUIDES US
              <br />
              IN EVERYTHING
              <br />
              WE DO
            </p>
          </div>

          <h2>
            Principles
            <br />
            That <em>Define Us.</em>
          </h2>

          <p>
            Our values shape our work, our professional relationships
            and our commitment to the people we serve.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <motion.article
              className="about-value-card"
              key={value.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: Number(value.number) * 0.035 }}
            >
              <span className="about-value-number">{value.number}</span>
              <span className="about-value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Approach */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-approach">
        <div className="about-approach-image">
          <img
            src={clientConsultation}
            alt="Lawyer consulting with a client in a private office"
            loading="lazy"
          />
        </div>

        <div className="about-side-label">
          <span>03 / OUR APPROACH</span>
          <i />
          <p>
            LISTEN
            <br />
            UNDERSTAND
            <br />
            ADVISE
            <br />
            SUPPORT
          </p>
        </div>

        <div className="about-approach-copy">
          <h2>
            A Thoughtful
            <br />
            and Collaborative
            <br />
            <em>Approach.</em>
          </h2>

          <p>
            We begin by listening carefully and understanding the
            circumstances surrounding your matter. This helps us identify
            relevant considerations and discuss available options.
          </p>

          <p>
            Clear communication and careful preparation remain central
            to our approach, so clients can understand the process and
            make informed choices at each stage.
          </p>

          <Link to="/approach" className="about-text-link">
            Explore Our Process <span>↗</span>
          </Link>
        </div>
      </motion.section>

      {/* Team gallery */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-team">
        <div className="about-values-heading about-team-heading">
          <div className="about-side-label">
            <span>04 / OUR TEAM</span>
            <i />
            <p>
              PROFESSIONAL
              <br />
              DEDICATED
              <br />
              CLIENT FOCUSED
            </p>
          </div>

          <h2>
            People Behind
            <br />
            <em>the Practice.</em>
          </h2>

          <p>
            Legal work benefits from preparation, different perspectives
            and a shared commitment to serving clients professionally.
          </p>
        </div>

        <div className="about-team-grid">
          {teamImages.map((item) => (
            <motion.article
              className="about-team-card"
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="about-team-image">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <div className="about-team-card-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-cta">
        <div className="about-cta-bg" />

        <div className="about-cta-content">
          <span className="about-eyebrow">
            <span />
            LET'S WORK TOGETHER
          </span>

          <h2 style={{color:"white"}}>
            Your Legal Goals.
            <br />
            <em>Our Commitment.</em>
          </h2>

          <p>
            Contact our team to discuss your legal requirements and
            understand the next steps.
          </p>

          <Link to="/contact" className="about-primary-button">
            Consult an Expert <span>↗</span>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
