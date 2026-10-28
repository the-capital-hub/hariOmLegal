import React from "react";
import { Link } from "react-router-dom";
import "./OurTeam.css";

// Illustrative placeholders only. Replace these image imports with approved team portraits when available.
import team1 from "../../assets/about/team-consultation.png";
import team2 from "../../assets/about/team-meeting.png";
import team3 from "../../assets/about/team-library.png";

const teamMembers = [
  {
    name: "Prabhu N Savanur",
    role: "Founder",
    description:
      "Founder of Hari Om Legal, providing leadership and strategic direction to the firm.",
    image: team1,
    number: "01",
    initials: "PS",
  },
  {
    name: "Chithra Jeyan",
    role: "Associate",
    description:
      "Part of the Hari Om Legal team, supporting clients across the firm's legal practice areas.",
    image: team2,
    number: "02",
    initials: "CJ",
  },
  {
    name: "Sriram S",
    role: "Associate",
    description:
      "Associate at Hari Om Legal, contributing to legal advisory and client representation.",
    image: team3,
    number: "03",
    initials: "SS",
  },
  {
    name: "Sandeep K S",
    role: "Associate",
    description:
      "Associate at Hari Om Legal, supporting the firm's legal matters and client requirements.",
    image: team1,
    number: "04",
    initials: "SK",
  },
  {
    name: "Prajual S",
    role: "Associate",
    description:
      "Associate at Hari Om Legal, contributing to the firm's client focused legal practice.",
    image: team2,
    number: "05",
    initials: "PS",
  },
  {
    name: "S Vijay Kumar",
    role: "Associate",
    description:
      "Associate at Hari Om Legal, supporting legal matters and client representation.",
    image: team3,
    number: "06",
    initials: "VK",
  },
  {
    name: "Md. Shakir Hussain",
    role: "Associate",
    description:
      "Associate at Hari Om Legal, supporting clients and the firm's legal practice.",
    image: team1,
    number: "07",
    initials: "MH",
  },
];

const principles = [
  {
    icon: "♢",
    title: "Trust",
    description:
      "Building professional relationships through accessibility and communication.",
  },
  {
    icon: "⚖",
    title: "Diligence",
    description:
      "Careful preparation and thoughtful attention to every matter.",
  },
  {
    icon: "◇",
    title: "Responsibility",
    description: "Client focused support grounded in professional commitment.",
  },
  {
    icon: "♧",
    title: "Clarity",
    description:
      "Practical guidance that helps clients understand their options.",
  },
];

export default function OurTeam() {
  return (
    <main className="our-team-page">
      <section className="team-hero">
        <div className="team-hero-bg" />
        <div className="team-hero-content">
          <span className="team-eyebrow">
            <span /> OUR PEOPLE
          </span>
          <h1>
            Meet Our
            <br />
            <em>Legal Team.</em>
          </h1>
          <p className="team-hero-subtitle">
            Experienced Professionals. Dedicated Legal Support.
          </p>
          <p>
            At Hari Om Legal, our team is committed to providing professional,
            diligent and client focused legal assistance.
          </p>
          <a href="#team-directory" className="team-hero-link">
            <span className="team-circle-arrow">↘</span> MEET THE TEAM
          </a>
        </div>
        <span className="team-hero-index">04 / OUR TEAM</span>
      </section>

      <section className="team-intro">
        <div className="team-side-label">
          <span>01 / OUR PEOPLE</span>
          <i />
          <p>
            TRUST
            <br />
            ACCESSIBILITY
            <br />
            COMMUNICATION
          </p>
        </div>
        <div className="team-intro-copy">
          <h2>
            Experienced People.
            <br />
            <em>Shared Purpose.</em>
          </h2>
          <p>
            We believe strong client relationships are built on trust,
            accessibility and consistent communication.
          </p>
          <p>
            Our team brings a considered and collaborative perspective to legal
            work, with a commitment to providing professional support across the
            firm's practice areas.
          </p>
        </div>
        <div className="team-intro-image">
          <img
            src={team2}
            alt="Illustrative legal team meeting"
            loading="lazy"
          />
          <span>Professional support. A shared commitment.</span>
        </div>
      </section>

      <section className="team-stats">
        {principles.map((item, index) => (
          <article className="team-stat" key={item.title}>
            <span className="team-stat-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <strong>
              {
                [
                  "Client relationships",
                  "Thoughtful preparation",
                  "Professional standards",
                  "Practical guidance",
                ][index]
              }
            </strong>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="team-directory" id="team-directory">
        <div className="team-directory-heading">
          <div className="team-side-label">
            <span>02 / OUR LEGAL TEAM</span>
            <i />
            <p>
              DEDICATED
              <br />
              PROFESSIONAL
              <br />
              CLIENT FOCUSED
            </p>
          </div>
          <h2>
            The People
            <br />
            <em>Behind the Practice.</em>
          </h2>
          <p>
            Meet the professionals supporting Hari Om Legal's client focused
            approach to legal assistance.
          </p>
        </div>
        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            
<article
  className={`team-member-card ${
    index === 0 ? "team-member-card-founder" : ""
  }`}
  key={member.number}
  style={{ "--team-delay": `${(index % 3) * 90}ms` }}
>

              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={`Illustrative placeholder for ${member.name}`}
                  loading="lazy"
                />
                <span className="team-member-number">{member.number}</span>
                {index === 0 && (
                  <span className="team-member-founder">FOUNDER</span>
                )}
                <span className="team-member-initials" aria-hidden="true">
                  {member.initials}
                </span>
              </div>
              <div className="team-member-copy">
                <span className="team-member-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="team-image-note">
          The current photographs are illustrative placeholders. Replace them
          with approved team portraits for the final website.
        </p>
      </section>

      <section className="team-commitment">
        <div className="team-commitment-image">
          <img
            src={team3}
            alt="Legal reference library representing preparation and knowledge"
            loading="lazy"
          />
        </div>
        <div className="team-side-label">
          <span>03 / OUR COMMITMENT</span>
          <i />
          <p>
            DEDICATION
            <br />
            PRECISION
            <br />
            RESPONSIBILITY
          </p>
        </div>
        <div className="team-commitment-copy">
          <h2>
            Professional Care.
            <br />
            <em>Personal Attention.</em>
          </h2>
          <p>
            We approach every engagement with dedication, precision and a strong
            sense of responsibility, whether assisting an individual with a
            personal dispute or advising an organisation on a complex commercial
            matter.
          </p>
          <p>
            Our focus is on clear communication, careful preparation and a
            professional working relationship throughout each engagement.
          </p>
          <Link to="/approach" className="team-text-link">
            Discover Our Approach <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="team-cta">
        <div className="team-cta-bg" />
        <div className="team-cta-content">
          <span className="team-eyebrow">
            <span /> LET'S WORK TOGETHER
          </span>
          <h2>
            Your Matter Matters.
            <br />
            <em>Let's Talk.</em>
          </h2>
          <p>
            Contact our team to discuss your legal requirements and understand
            the next steps.
          </p>
          <Link to="/contact" className="team-primary-button">
            Consult an Expert <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
