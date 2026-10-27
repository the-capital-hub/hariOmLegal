
import React from "react";
import { Link } from "react-router-dom";
import "./Approach.css";

const steps = [
  {
    number: "01",
    icon: "◎",
    title: "Listen",
    description:
      "We understand your situation, concerns and objectives before recommending a way forward.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Analyse",
    description:
      "We assess the relevant legal, commercial and practical considerations.",
  },
  {
    number: "03",
    icon: "⚖",
    title: "Strategise",
    description:
      "We identify available options and develop a considered legal strategy.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Advise",
    description:
      "We explain your options clearly and discuss possible next steps.",
  },
  {
    number: "05",
    icon: "◇",
    title: "Support",
    description:
      "We provide professional guidance throughout the agreed process.",
  },
];

const benefits = [
  "Clear and practical legal guidance",
  "Solutions aligned with your objectives",
  "Open and transparent communication",
  "Careful preparation and attention to detail",
  "Professional and confidential interactions",
];

const clientGroups = [
  {
    icon: "♙",
    title: "Individuals",
    description:
      "Guidance for personal legal matters, family concerns and property related issues.",
    link: "/contact",
  },
  {
    icon: "▦",
    title: "Businesses",
    description:
      "Legal support for startups, growing businesses and established companies.",
    link: "/contact",
  },
  {
    icon: "⌂",
    title: "Institutions",
    description:
      "Professional legal assistance for organisations and institutions.",
    link: "/contact",
  },
];

import consultation from '../../assets/approach/consultation.png'
import legalPreparation from '../../assets/approach/legal-preparation.png'

export default function Approach() {
  return (
    <main className="approach-page">
      {/* Hero */}
      <section className="approach-hero">
        <div className="approach-hero-bg" />

        <div className="approach-hero-content">
          <span className="approach-eyebrow">
            <span />
            OUR APPROACH
          </span>

          <h1>
            A Thoughtful
            <br />
            and Collaborative
            <br />
            <em>Approach.</em>
          </h1>

          <p>
            We take the time to understand your needs, assess the relevant
            considerations and provide clear, practical guidance tailored
            to your objectives.
          </p>

          <a href="#approach-process" className="approach-hero-link">
            <span className="approach-circle-arrow">↘</span>
            HOW WE WORK
          </a>
        </div>

        <span className="approach-hero-index">01 / OUR APPROACH</span>
      </section>

      {/* Philosophy */}
      <section className="approach-philosophy">
        <div className="approach-side-label">
          <span>01 / OUR PHILOSOPHY</span>
          <i />
          <p>
            UNDERSTAND
            <br />
            GUIDE
            <br />
            SOLVE
            <br />
            SUPPORT
          </p>
        </div>

        <div className="approach-philosophy-copy">
          <h2>
            People Focused.
            <br />
            <em>Outcome Driven.</em>
          </h2>

          <p>
            Our approach begins with understanding our clients, their
            priorities and the real world implications of their legal
            matters.
          </p>

          <p>
            We combine legal knowledge with practical insight to explore
            solutions that are appropriate to each situation and aligned
            with the client's objectives.
          </p>
        </div>

        <div className="approach-philosophy-image">
          <img
            src={consultation}
            alt="Professional lawyer consulting with a client"
          />
        </div>
      </section>

      {/* Process */}
      <section className="approach-process" id="approach-process">
        <div className="approach-section-heading">
          <div className="approach-side-label">
            <span>02 / OUR PROCESS</span>
            <i />
            <p>
              A CLEAR
              <br />
              STRUCTURED
              <br />
              CLIENT FOCUSED JOURNEY
            </p>
          </div>

          <h2>
            How We <em>Work.</em>
          </h2>

          <p>
            We follow a considered process to understand your requirements,
            explain available options and provide support at every agreed
            stage.
          </p>
        </div>

        <div className="approach-steps">
          {steps.map((step) => (
            <article className="approach-step" key={step.number}>
              <div className="approach-step-icon">{step.icon}</div>
              <span className="approach-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Practical solutions */}
      <section className="approach-solutions">
        <div className="approach-solutions-image">
          <img
            src={legalPreparation}
            alt="Legal documents being reviewed in a professional office"
            loading="lazy"
          />
        </div>

        <div className="approach-side-label">
          <span>03 / WHAT SETS US APART</span>
          <i />
          <p>
            EXPERIENCE
            <br />
            PRACTICAL THINKING
            <br />
            CLIENT COMMITMENT
          </p>
        </div>

        <div className="approach-solutions-copy">
          <h2>
            Practical Advice.
            <br />
            <em>Real Solutions.</em>
          </h2>

          <p>
            We focus on understanding the issue, identifying relevant
            considerations and discussing realistic options. Our approach
            places clarity, preparation and professional responsibility
            at the centre of every matter.
          </p>

          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span>✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="approach-text-link">
            Discuss Your Requirements <span>↗</span>
          </Link>
        </div>
      </section>

      {/* Who we work with */}
      <section className="approach-clients">
        <div className="approach-section-heading">
          <div className="approach-side-label">
            <span>04 / WHO WE WORK WITH</span>
            <i />
            <p>
              INDIVIDUALS
              <br />
              BUSINESSES
              <br />
              INSTITUTIONS
            </p>
          </div>

          <h2>
            Supporting
            <br />
            Diverse <em>Client Needs.</em>
          </h2>

          <p>
            We work with individuals, businesses and institutions, adapting
            our approach to the circumstances and requirements of each client.
          </p>
        </div>

        <div className="approach-client-grid">
          {clientGroups.map((group) => (
            <article className="approach-client-card" key={group.title}>
              <span className="approach-client-icon">{group.icon}</span>

              <div className="approach-client-copy">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <Link
                to={group.link}
                className="approach-client-arrow"
                aria-label={`Contact us about ${group.title}`}
              >
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="approach-cta">
        <div className="approach-cta-bg" />

        <div className="approach-cta-content">
          <span className="approach-eyebrow">
            <span />
            LET'S DISCUSS YOUR MATTER
          </span>

          <h2 style={{color:"white"}}>
            Your Goals.
            <br />
            <em>Our Commitment.</em>
          </h2>

          <p>
            Reach out to our team to discuss your requirements and explore
            practical next steps for your legal matter.
          </p>

          <Link to="/contact" className="approach-primary-button">
            Consult an Expert <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
