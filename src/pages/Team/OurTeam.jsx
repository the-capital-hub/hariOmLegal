import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ArrowUpRight,
  Scale,
  ShieldCheck,
  MessagesSquare,
  BookOpen,
} from "lucide-react";
import "./OurTeam.css";

import team1 from "../../assets/about/team-consultation.png";
import team2 from "../../assets/about/team-library.png";
import team3 from "../../assets/about/team-meeting.png";

import founder from "../../assets/team/Founder.png";
import Chithra from "../../assets/team/Chithra.png";
import Sriram from "../../assets/team/Sriram.png";
import Sandeep from "../../assets/team/Sandeep.png";
import Prajual from "../../assets/team/Prajual.png";
import Vijay from "../../assets/team/Vijay.png";
import Shakir from "../../assets/team/Shakir.png";

const teamMembers = [
  {
    name: "Chithra Jeyan",
    role: "Associate",
    description:
      "Supporting clients with careful attention across the firm's legal practice areas.",
    image: Chithra,
  },
  {
    name: "Sriram S",
    role: "Associate",
    description:
      "Contributing to legal advisory, preparation and client representation.",
    image: Sriram,
  },
  {
    name: "Sandeep K S",
    role: "Associate",
    description:
      "Supporting legal matters with diligence and a client focused approach.",
    image: Sandeep,
  },
  {
    name: "Prajual S",
    role: "Associate",
    description:
      "Working collaboratively to understand client needs and legal requirements.",
    image: Prajual,
  },
  {
    name: "S Vijay Kumar",
    role: "Associate",
    description:
      "Supporting legal research, preparation and client service.",
    image: Vijay,
  },
  {
    name: "Md. Shakir Hussain",
    role: "Associate",
    description:
      "Contributing to thoughtful legal support and client relationships.",
    image: Shakir,
  },
];

const principles = [
  {
    icon: Scale,
    number: "01",
    title: "Integrity",
    description:
      "Ethical judgement and professional responsibility in every interaction.",
  },
  {
    icon: MessagesSquare,
    number: "02",
    title: "Clarity",
    description:
      "Straightforward communication so clients can make informed decisions.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Preparation",
    description:
      "Careful research and considered attention to every matter.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Discretion",
    description:
      "Respect for privacy and responsible handling of client information.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`team-eyebrow ${
        light ? "team-eyebrow-light" : ""
      }`}
    >
      <span aria-hidden="true" />
      {children}
    </span>
  );
}

export default function OurTeam() {
  return (
    <main className="our-team-page">
      {/* Hero */}
      <section
        className="team-hero"
        aria-labelledby="team-hero-title"
      >
        <div className="team-hero-image" aria-hidden="true" />
        <div className="team-hero-grain" aria-hidden="true" />

        <div className="team-hero-content">
          <Eyebrow light>
            HARI OM LEGAL · OUR PEOPLE
          </Eyebrow>

          <h1 id="team-hero-title">
            Good counsel
            <br />
            begins with <em>good people.</em>
          </h1>

          <p className="team-hero-lead">
            A committed team bringing care, preparation and
            perspective to every client relationship.
          </p>

          <div className="team-hero-actions">
            <a
              href="#team-directory"
              className="team-primary-button"
            >
              Meet the team
              <ArrowUpRight size={17} />
            </a>

            <span className="team-hero-caption">
              THOUGHTFUL COUNSEL. PERSONAL ATTENTION.
            </span>
          </div>
        </div>

        <div className="team-hero-side-note">
          <span>01</span>
          <i aria-hidden="true" />
          THE PEOPLE BEHIND THE PRACTICE
        </div>
      </section>

      {/* Introduction */}
      {/* <section
        className="team-intro"
        aria-labelledby="team-intro-title"
      >
        <div className="team-intro-kicker">
          <span>OUR APPROACH</span>
          <span className="team-kicker-line" />
        </div>

        <div className="team-intro-main">
          <h2 id="team-intro-title">
            Legal experience, with a{" "}
            <em>human perspective.</em>
          </h2>

          <p>
            Every matter has its own context. We listen carefully,
            work through the details and help clients understand
            their options with clarity and confidence.
          </p>
        </div>

        <figure className="team-intro-photo">
          <img
            src={team3}
            alt="Legal professionals discussing a matter"
            loading="lazy"
          />

          <figcaption>
            <span>HARI OM LEGAL</span>
            <span>Built on trust and diligence</span>
          </figcaption>
        </figure>
      </section> */}

      {/* Principles */}
      <section
        className="team-principles"
        aria-label="Our professional principles"
      >
        <div className="team-principles-heading">
          <Eyebrow dark>WHAT GUIDES US</Eyebrow>

          <h2>
            Principles that shape{" "}
            <em>our practice.</em>
          </h2>
        </div>

        <div className="team-principles-grid">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="team-principle"
                key={item.title}
              >
                <div className="team-principle-top">
                  <Icon size={23} strokeWidth={1.5} />
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Team directory */}
      <section
        className="team-directory"
        id="team-directory"
        aria-labelledby="team-directory-title"
      >
        <div className="team-directory-heading">
          <div>
            <Eyebrow>THE PEOPLE</Eyebrow>

            <h2 id="team-directory-title">
              Meet the <em>team.</em>
            </h2>
          </div>

          <p>
            Different perspectives, one shared commitment to
            thoughtful legal service and meaningful client
            relationships.
          </p>
        </div>

        {/* Founder feature */}
        <article className="team-founder-feature">
          <div className="team-founder-photo">
            <img
              src={founder}
              alt="Prabhu N Savanur, Founder of Hari Om Legal"
              loading="lazy"
            />

            <span className="team-founder-photo-label">
              FOUNDING LEADERSHIP
            </span>
          </div>

          <div className="team-founder-content">
            <span className="team-member-role">
              FOUNDER
            </span>

            <h3>Prabhu N Savanur</h3>

            <p>
              Providing leadership and strategic direction to
              Hari Om Legal, with a focus on professional standards
              and client trust.
            </p>

            <div className="team-founder-award">
              <span className="team-award-icon">
                <Award size={21} strokeWidth={1.6} />
              </span>

              <span>
                <strong>Best Legal Mentor</strong>
                <small>
                  Karnataka Educational Awards 2026
                </small>
              </span>
            </div>

            <span className="team-founder-signature">
              Leadership · Integrity · Service
            </span>
          </div>
        </article>

        {/* Associates */}
        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <article
              className="team-member-card"
              key={member.name}
              style={{
                "--team-delay": `${index * 55}ms`,
              }}
            >
              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />

                <span className="team-member-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="team-member-image-arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="team-member-copy">
                <span className="team-member-role">
                  {member.role}
                </span>

                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section
        className="team-commitment"
        aria-labelledby="team-commitment-title"
      >
        <div className="team-commitment-photo">
          <img
            src={team2}
            alt="Legal research materials and reference books"
            loading="lazy"
          />
        </div>

        <div className="team-commitment-content">
          <Eyebrow>OUR COMMITMENT</Eyebrow>

          <h2 id="team-commitment-title">
            Every matter deserves{" "}
            <em>careful attention.</em>
          </h2>

          <p>
            We approach each engagement with diligence and
            responsibility. Our aim is to help clients understand
            their circumstances, consider available options and
            decide on their next steps.
          </p>

          <Link
            to="/approach"
            className="team-text-link"
          >
            Explore our approach
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="team-cta"
        aria-labelledby="team-cta-title"
      >
        <div className="team-cta-image" aria-hidden="true" />

        <div className="team-cta-content">
          <Eyebrow light>START A CONVERSATION</Eyebrow>

          <h2 id="team-cta-title">
            A clearer way <em>forward.</em>
          </h2>

          <p>
            Tell us what you need help with. Our team is ready to
            listen and discuss the next steps.
          </p>

          <Link
            to="/contact"
            className="team-primary-button"
          >
            Discuss your matter
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <span className="team-cta-mark">H / O</span>
      </section>
    </main>
  );
}