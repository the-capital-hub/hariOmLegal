
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Scale,
  ShieldCheck,
  HeartHandshake,
  Building2,
  FileText,
  Gavel,
  Lightbulb,
  BriefcaseBusiness,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  MessageCircle,
  Landmark,
  Users,
} from "lucide-react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import about from '../../assets/home/aboutImage.jpeg'
import PracticeAreas from "../../components/PracticeAreas/PracticeAreas";
import ApproachSection from "../../components/ApproachSection/ApproachSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const WHATSAPP = "https://wa.me/918123838480";
const PHONE = "tel:+918123838480";
const EMAIL = "mailto:info@hariomlegal.in";

const practices = [
  {
    number: "01",
    title: "Family Law",
    description: "Considered legal guidance for family matters and personal disputes.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Civil Litigation",
    description: "Practical representation for civil disputes and legal remedies.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Corporate Law",
    description: "Legal advisory for businesses, governance and compliance.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Commercial Law",
    description: "Clear advice on contracts, transactions and business disputes.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Criminal Defence",
    description: "Focused legal representation throughout criminal proceedings.",
    icon: Gavel,
  },
  {
    number: "06",
    title: "Intellectual Property",
    description: "Guidance on intellectual property rights and protection.",
    icon: Lightbulb,
  },
];
import loca1 from '../../assets/home/bng.jpeg'
import loca2 from '../../assets/home/che.jpeg'
import loca3 from '../../assets/home/pune.jpeg'

import loca4 from '../../assets/home/hyb.jpeg'


const offices = [
  {
    city: "Bengaluru",
    label: "Head Office",
    address:
      "No. 319/3, 5th Floor, 20th C Main Road, 80 Feet Road, Opp. Indoor Stadium, Koramangala 8th Block, Bengaluru 560095",
    image:
      loca1,
    map: "https://www.google.com/maps/search/?api=1&query=Koramangala+8th+Block+Bengaluru",
  },
  {
    city: "Hyderabad",
    label: "Regional Office",
    address:
      "No. 21/898, Petlabruz, Purnapul, Hyderabad 500002",
    image:
      loca4,
    map: "https://www.google.com/maps/search/?api=1&query=Petlabruz+Purnapul+Hyderabad",
  },
  {
    city: "Pune",
    label: "Regional Office",
    address: "No. 107/2, Tophakhana, Shivajinagar, Pune 411005",
    image:
      loca3,
    map: "https://www.google.com/maps/search/?api=1&query=Tophakhana+Shivajinagar+Pune",
  },
  {
    city: "Chennai",
    label: "Regional Office",
    address: "No. 04, George Town, Chennai 600104",
    image:
      loca2,
    map: "https://www.google.com/maps/search/?api=1&query=George+Town+Chennai",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We listen carefully to understand your circumstances and objectives.",
    icon: Users,
  },
  {
    number: "02",
    title: "Strategise",
    text: "We assess the matter and identify a considered legal approach.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Represent",
    text: "We guide you through the process with clarity and purpose.",
    icon: ShieldCheck,
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="hol-home">
      
        <Hero/>
      





     


<section className="hol-about hol-section" id="about">
  <div className="hol-about-inner">
    <div className="hol-about-visual">
      <img
        src={about}
        alt="Professional legal office with law books and Lady Justice"
        loading="lazy"
      />

      <div className="hol-about-image-overlay" />


      <div className="hol-about-seal">
        <Scale size={27} strokeWidth={1.4} />
        <span>OUR PRINCIPLES</span>
        <strong>Integrity.</strong>
        <strong>Clarity.</strong>
        <strong>Commitment.</strong>
      </div>

      <div className="hol-about-caption">
        <span>HARI OM LEGAL</span>
        <p>Law with purpose. Counsel with care.</p>
      </div>
    </div>

    <div className="hol-about-copy">
      <div className="hol-about-eyebrow">
          <span />
          ABOUT
        </div>
      

      <h2>
        Legal expertise.
        <br />
        <em>Human understanding.</em>
      </h2>

      <p className="hol-about-lead">
        Every legal matter has a human side.
        <span> We begin by understanding yours.</span>
      </p>

      <p className="hol-about-description">
        At Hari Om Legal, we believe effective counsel begins with
        listening, clear communication and a thoughtful understanding
        of each client's circumstances. We work with individuals and
        businesses across a range of legal matters, helping them
        approach complex decisions with greater clarity and purpose.
      </p>

      <div className="hol-about-proof">
        <div className="hol-about-proof-item">
          <span className="hol-about-proof-number">01</span>
          <div>
            <h3>Client focused</h3>
            <p>Advice shaped around your needs</p>
          </div>
        </div>

        <div className="hol-about-proof-item">
          <span className="hol-about-proof-number">02</span>
          <div>
            <h3>Strategic thinking</h3>
            <p>Considered guidance at every step</p>
          </div>
        </div>

        <div className="hol-about-proof-item">
          <span className="hol-about-proof-number">03</span>
          <div>
            <h3>Personal attention</h3>
            <p>Careful attention to every matter</p>
          </div>
        </div>

        <div className="hol-about-proof-item">
          <span className="hol-about-proof-number">04</span>
          <div>
            <h3>Multi city presence</h3>
            <p>Bengaluru, Hyderabad, Pune and Chennai</p>
          </div>
        </div>
      </div>

      <a className="hol-about-link" href="#approach">
        <span>Discover our approach</span>
        <ArrowRight size={17} />
      </a>
    </div>
  </div>
</section>




     
<PracticeAreas practices={practices} />

<ApproachSection/>
      

      
<section className="hol-offices hol-section" id="offices">
  <div className="hol-offices-inner">
    <div className="hol-offices-heading">
      <div className="hol-offices-heading-main">
        <div className="hol-offices-eyebrow">
          <span />
          OUR LOCATIONS
        </div>

        <h2>
          Closer to you.
          <br />
          <em>Wherever you need us.</em>
        </h2>
      </div>

      <div className="hol-offices-heading-side">
        <p>
          Our presence across key cities helps you connect with
          our team for a considered approach to your legal needs.
        </p>

        <span className="hol-offices-city-count">
          <strong>{String(offices.length).padStart(2, "0")}</strong>
          <span>CITIES</span>
        </span>
      </div>
    </div>

    <div className="hol-office-grid">
      {offices.map((office, index) => (
        <article className="hol-office-card" key={office.city}>
          <a
            className="hol-office-image"
            href={office.map}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${office.city} on Google Maps`}
          >
            <img
              src={office.image}
              alt={`${office.city} city`}
              loading="lazy"
            />

            <div className="hol-office-image-shade" />

            <span className="hol-office-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="hol-office-image-link">
              <ArrowUpRight size={19} />
            </span>

            <span className="hol-office-image-caption">
              HARI OM LEGAL
            </span>
          </a>

          <div className="hol-office-content">
            <div className="hol-office-meta">
              <span className="hol-office-label">
                {office.label}
              </span>
              <MapPin size={15} />
            </div>

            <h3>{office.city}</h3>

            <p className="hol-office-address">
              {office.address}
            </p>

            <a
              className="hol-office-map-link"
              href={office.map}
              target="_blank"
              rel="noreferrer"
            >
              <span>Explore location</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      ))}
    </div>

    <div className="hol-offices-bottom">
      <span>HARI OM LEGAL</span>
      <p>Please contact our team before planning an office visit.</p>
      <a href="#contact">
        Get in touch <ArrowUpRight size={15} />
      </a>
    </div>
  </div>
</section>

<ContactSection/>



    </main>
  );
}
