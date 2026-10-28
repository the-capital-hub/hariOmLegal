
import {
  ArrowRight,
  ArrowUpRight,
  Landmark,
  Gavel,
  Users,
  BriefcaseBusiness,
  House,
  HeartHandshake,
  Scale,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./PracticeAreas.css";
import image1 from '../../assets/practiceimages/constitutional-law.png'
import image2 from '../../assets/practiceimages/civil-law.png'
import image3 from '../../assets/practiceimages/criminal-law.png'
import image4 from '../../assets/practiceimages/corporate-law.png'
import image5 from '../../assets/practiceimages/property-law.png'
import image6 from '../../assets/practiceimages/family-law.png'
import image7 from '../../assets/practiceimages/dispute-resolution.png'
import image8 from '../../assets/practiceimages/compliance.png'
import image from '../../assets/practiceimages/constitutional-law.png'
const practices = [
  {
    number: "01",
    title: "Constitutional Law",
    description:
      "Advice and representation on constitutional rights, governance and public law matters.",
    icon: Landmark,
    image: image1,
    alt: "Indian courthouse architecture",
  },
  {
    number: "02",
    title: "Civil Law",
    description:
      "Dispute resolution, property matters, contracts and other civil litigation.",
    icon: Gavel,
    image: image2,
    alt: "Legal professional reviewing documents",
  },
  {
    number: "03",
    title: "Criminal Law",
    description:
      "Defence and representation in criminal proceedings at all stages.",
    icon: Users,
    image: image3,
    alt: "Gavel and law books on a desk",
  },
  {
    number: "04",
    title: "Corporate & Commercial Law",
    description:
      "Advisory on business setup, contracts, compliance and commercial transactions.",
    icon: BriefcaseBusiness,
    image: image4,
    alt: "Business professionals shaking hands",
  },
  {
    number: "05",
    title: "Real Estate & Property Law",
    description:
      "Advisory and dispute resolution on property transactions, title and related matters.",
    icon: House,
    image: image5,
    alt: "Contemporary commercial property",
  },
  {
    number: "06",
    title: "Family Law",
    description:
      "Guidance on matrimonial matters, divorce, child custody, succession and inheritance.",
    icon: HeartHandshake,
    image: image6,
    alt: "Hands resting on legal documents",
  },
  {
    number: "07",
    title: "Dispute Resolution",
    description:
      "Representation before courts, tribunals and alternative dispute resolution forums.",
    icon: Scale,
    image: image7,
    alt: "Legal professionals discussing a dispute",
  },
  {
    number: "08",
    title: "Regulatory & Compliance",
    description:
      "Advisory on regulatory requirements, legal compliance and risk management.",
    icon: FileText,
    image: image8,
    alt: "Legal compliance books",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We take the time to understand your objectives and the specific details of your matter.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "We assess the legal position, potential options and likely implications.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We develop a clear and practical strategy tailored to your goals.",
  },
  {
    number: "04",
    title: "Action",
    description:
      "We provide dedicated support to help you move forward with confidence.",
  },
];

export default function PracticeAreas() {
  return (
    <main className="hol-practice">
      {/* Hero */}
      <section className="pa-hero">
        <div className="pa-hero-image" />
        <div className="pa-hero-overlay" />

        <div className="pa-hero-content">
          <div className="pa-eyebrow">
            <span />
            PRACTICE AREAS
          </div>

          <h1>
            Comprehensive
            <br />
            Legal Solutions
            <br />
            <em>for a Complex World.</em>
          </h1>

          <p>
            From individuals to businesses, we provide tailored
            legal counsel across a wide range of practice areas,
            backed by experience, insight and a client first approach.
          </p>

          <a href="#pa-expertise" className="pa-explore">
            <span className="pa-explore-icon">
              <ArrowRight size={19} />
            </span>
            EXPLORE OUR EXPERTISE
          </a>
        </div>

        <div className="pa-hero-index">03 / PRACTICE AREAS</div>
      </section>

      {/* Expertise introduction */}
      <section className="pa-intro" id="pa-expertise">
        <div className="pa-intro-label">
          <span className="pa-kicker">01 / OUR EXPERTISE</span>
          <span className="pa-intro-rule" />
          <p>
            PRACTICAL
            <br />
            SOLUTIONS
            <br />
            REAL IMPACT
          </p>
        </div>

        <div className="pa-intro-heading">
          <h2>
            Areas of Practice
            <br />
            Built Around
            <br />
            <em>Your Needs.</em>
          </h2>
        </div>

        <div className="pa-intro-copy">
          <p>
            We offer legal advisory and representation across a
            wide range of practice areas, with a focus on delivering
            practical, reliable and strategic solutions.
          </p>

          <p>
            Our multidisciplinary approach allows us to address
            complex legal issues with clarity and an understanding
            of the relevant legal and commercial context.
          </p>
        </div>
      </section>

      {/* Practice cards */}
      <section className="pa-cards-section">
        <div className="pa-cards-grid">
          {practices.map((practice) => {
            const Icon = practice.icon;

            return (
              <article className="pa-card" key={practice.number}>
                <div className="pa-card-content">
                  <div className="pa-card-top">
                    <span className="pa-card-number">
                      {practice.number}
                    </span>

                    <Icon
                      className="pa-card-icon"
                      size={27}
                      strokeWidth={1.35}
                    />

                    <span className="pa-card-arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  <h3>{practice.title}</h3>
                  <p>{practice.description}</p>
                </div>

                <div className="pa-card-image-wrap">
                  <img
                    src={practice.image}
                    alt={practice.alt}
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="pa-process" id="pa-approach">
        <div className="pa-process-label">
          <span className="pa-kicker">02 / OUR APPROACH</span>
          <span className="pa-intro-rule" />
          <p>
            CLEAR PROCESS
            <br />
            STRONGER OUTCOMES
          </p>
        </div>

        <div className="pa-process-main">
          <div className="pa-process-heading">
            <h2>
              How <em>We Work.</em>
            </h2>
            <p>
              A structured and client focused approach to every matter.
            </p>
          </div>

          <div className="pa-steps">
            {steps.map((step, index) => (
              <article className="pa-step" key={step.number}>
                <div className="pa-step-top">
                  <span>{step.number}</span>
                  {index !== steps.length - 1 && (
                    <span className="pa-step-line">
                      <ArrowRight size={14} />
                    </span>
                  )}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="pa-cta" id="pa-contact">
        <div className="pa-cta-image" />
        <div className="pa-cta-overlay" />

        <div className="pa-cta-content">
          <div className="pa-eyebrow">
            <span />
            LET US DISCUSS YOUR LEGAL NEEDS
          </div>

          <h2 style={{color:"white"}}>
            Speak to Our Team
            <br />
            <em>Today.</em>
          </h2>

          <p>
            Get in touch to discuss your matter and the
            options available to you.
          </p>

          <a
            href="https://wa.me/918123838480"
            target="_blank"
            rel="noreferrer"
            className="pa-cta-button"
          >
            Consult an Expert
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
