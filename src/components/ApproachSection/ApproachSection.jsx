
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  ClipboardCheck,
  Scale,
} from "lucide-react";

import "./ApproachSection.css";
import aaproch from '../../assets/home/approch.jpeg'
const approach = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    text: "We listen to your concerns and understand the facts, circumstances and priorities of your matter.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Plan",
    text: "We assess the available options and develop a considered course of action for your situation.",
  },
  {
    number: "03",
    icon: Scale,
    title: "Act",
    text: "We guide you through the next steps with clear communication and focused legal support.",
  },
];

const WHATSAPP = "https://wa.me/918123838480";

export default function ApproachSection() {
  return (
    <section className="hol-approach" id="approach">
      <div className="hol-approach-inner">
        <div className="hol-approach-main">
          <div className="hol-approach-image">
            <img
              src={aaproch}
              alt="Elegant law office with Lady Justice and legal books"
              loading="lazy"
            />

            <div className="hol-approach-image-shade" />

            <div className="hol-approach-image-caption">
              <span className="hol-approach-caption-line" />
              <span>THE HARI OM LEGAL APPROACH</span>
            </div>

            <div className="hol-approach-image-bottom">
              <span>01</span>
              <span>CLARITY · CARE · COMMITMENT</span>
            </div>
          </div>

          <div className="hol-approach-content">
            <div className="hol-approach-eyebrow">
              <span />
              OUR APPROACH
            </div>

            <h2>
              Thoughtful counsel.
              <br />
              <em>Purposeful action.</em>
            </h2>

            <p className="hol-approach-description">
              Every legal matter deserves attention beyond the paperwork.
              We take time to understand your circumstances, evaluate
              your options and help you move forward with greater clarity.
            </p>

            <div className="hol-approach-promise">
              <div className="hol-approach-promise-icon">
                <Scale size={22} strokeWidth={1.4} />
              </div>

              <div>
                <h3>A considered approach to every matter</h3>
                <p>
                  Clear guidance, practical thinking and communication
                  throughout your legal journey.
                </p>
              </div>
            </div>

            <a
              className="hol-approach-cta"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            style={{color:"white"}} >
              <span >Discuss your matter</span>
              <span className="hol-approach-cta-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <span className="hol-approach-note">
              START A CONVERSATION WITH OUR TEAM
            </span>
          </div>
        </div>

        <div className="hol-approach-process">
          <div className="hol-process-heading">
            <div>
              <span className="hol-process-eyebrow">HOW WE WORK</span>
              <h3>A clear path forward.</h3>
            </div>

            <p>
              A structured process designed to help you understand
              what comes next.
            </p>
          </div>

          <div className="hol-approach-steps">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="hol-step" key={step.number}>
                  <div className="hol-step-top">
                    <span className="hol-step-number">
                      {step.number}
                    </span>

                    <div className="hol-step-icon">
                      <Icon size={22} strokeWidth={1.45} />
                    </div>

                    <ArrowUpRight
                      className="hol-step-arrow"
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h4>{step.title}</h4>

                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="hol-approach-footer">
          <span>HARI OM LEGAL</span>
          <span>CLARITY IN LAW. CONFIDENCE IN ACTION.</span>
        </div>
      </div>
    </section>
  );
}
