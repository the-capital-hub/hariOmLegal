
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  Scale,
  CheckCircle2,
} from "lucide-react";
import certificate from '../../assets/Certificate.pdf'
import "./ContactSection.css";

const WHATSAPP = "https://wa.me/918123838480";
const PHONE = "tel:+918123838480";
const EMAIL = "mailto:info@hariomlegal.in";

export default function ContactSection() {
  return (
    <section className="hol-contact hol-section" id="contact">
      <div className="hol-contact-inner">
        <div className="hol-contact-layout">
          {/* Left: Contact information */}
          <div className="hol-contact-copy">
            <div className="hol-contact-eyebrow">
              <span />
              START A CONVERSATION
            </div>

            <h2>
              Every matter begins
              <br />
              with a <em>conversation.</em>
            </h2>

            <p className="hol-contact-description">
              Have a legal question or need guidance on your next step?
              Reach out to our team to discuss your requirements and
              understand how we may assist you.
            </p>

            <a
              className="hol-contact-primary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            style={{color:"white"}}>
              <MessageCircle size={18} strokeWidth={1.7} />
              <span>Contact us on WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>

            <div className="hol-contact-divider">
              <span>OR REACH US DIRECTLY</span>
            </div>

            <div className="hol-contact-details">
              <a className="hol-contact-detail" href={PHONE}>
                <span className="hol-contact-detail-icon">
                  <Phone size={19} strokeWidth={1.5} />
                </span>

                <span className="hol-contact-detail-copy">
                  <small>CALL OUR TEAM</small>
                  <strong>+91 81238 38480</strong>
                </span>

                <ArrowUpRight
                  className="hol-contact-detail-arrow"
                  size={17}
                />
              </a>

              <a className="hol-contact-detail" href={EMAIL}>
                <span className="hol-contact-detail-icon">
                  <Mail size={19} strokeWidth={1.5} />
                </span>

                <span className="hol-contact-detail-copy">
                  <small>EMAIL US</small>
                  <strong>info@hariomlegal.in</strong>
                </span>

                <ArrowUpRight
                  className="hol-contact-detail-arrow"
                  size={17}
                />
              </a>
            </div>

            <div className="hol-contact-assurance">
              <span className="hol-contact-assurance-mark">
                <CheckCircle2 size={17} />
              </span>

              <p>
                Connect with our team to discuss your legal requirements
                and possible next steps.
              </p>
            </div>
          </div>

          {/* Right: Trademark information */}
          <aside className="hol-trademark-card">
            <div className="hol-trademark-top">
              <div className="hol-trademark-symbol">
                <Scale size={28} strokeWidth={1.35} />
              </div>

              <div className="hol-trademark-top-copy">
                <span>INTELLECTUAL PROPERTY</span>
                <small>HARI OM LEGAL</small>
              </div>

              <span className="hol-trademark-status">
                <CheckCircle2 size={14} />
                Registered
              </span>
            </div>

            <div className="hol-trademark-heading">
              <span className="hol-trademark-kicker">
                BRAND REGISTRATION
              </span>

              <h3>
                Registered
                <br />
                <em>trademark.</em>
              </h3>

              <p>
                Trademark registration information for reference.
              </p>
            </div>

            <div className="hol-trademark-record">
              <div className="hol-trademark-line">
                <span>Trademark number</span>
                <strong>6199060</strong>
              </div>

              <div className="hol-trademark-line">
                <span>Registration date</span>
                <strong>27 November 2023</strong>
              </div>

              <div className="hol-trademark-line">
                <span>Class</span>
                <strong>45</strong>
              </div>

              <div className="hol-trademark-line">
                <span>Registered proprietor</span>
                <strong>Prabhu N. Savanur</strong>
              </div>
            </div>

            <div className="hol-trademark-scope">
              <CheckCircle2 size={17} />
              <span>Legal services and litigation services</span>
            </div>

            <a
              className="hol-trademark-link"
              href={certificate}
              target="_blank"
              rel="noreferrer"
            >
              <span>View registration certificate</span>
              <span className="hol-trademark-link-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <p className="hol-trademark-disclaimer">
              Registration details should be verified against the
              official certificate.
            </p>

            <div className="hol-trademark-watermark" aria-hidden="true">
              HOL
            </div>
          </aside>
        </div>

        <div className="hol-contact-footer">
          <span>HARI OM LEGAL</span>
          <span>CLARITY IN LAW. CONFIDENCE IN ACTION.</span>
        </div>
      </div>
    </section>
  );
}
