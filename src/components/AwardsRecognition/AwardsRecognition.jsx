
import { Award, ArrowUpRight } from "lucide-react";
import "./AwardsRecognition.css";
import image1 from '../../assets/achivement/image1.jpeg'
import image2 from '../../assets/achivement/image2.jpeg'


const awards = [
  {
    image: image1,
    imageAlt:
      "Hari Om Legal certificate for Excellence in Legal Services",
    title: "Excellence in Legal Services",
    recipient: "Hari Om Legal",
    description:
      "Hari Om Legal has been recognised at the Karnataka Educational Awards 2026 in the category of Excellence in Legal Services.",
  },
  {
    image: image2,
    imageAlt:
      "Advocate Prabhu N. Savanur receiving Best Legal Mentor recognition",
    title: "Best Legal Mentor",
    recipient: "Adv. Prabhu N. Savanur",
    description:
      "Our Founder, Adv. Prabhu N. Savanur, has been recognised at the Karnataka Educational Awards 2026 in the category of Best Legal Mentor.",
  },
];

export default function AwardsRecognition() {
  return (
    <section className="hol-awards" id="awards">
      <div className="hol-awards-inner">
        <div className="hol-awards-heading">
          <div>
            <div className="hol-awards-eyebrow">
              <span />
              AWARDS &amp; RECOGNITION
            </div>

            <h2>
              Acknowledging excellence.
              <br />
              <em>Honouring dedication.</em>
            </h2>
          </div>

          <p>
            Recognition that reflects our commitment to legal
            excellence and our founder's contribution to mentorship.
          </p>
        </div>

        <div className="hol-awards-grid">
          {awards.map((award, index) => (
            <article className="hol-award-card" key={award.title}>
              <a
                className="hol-award-image"
                href={award.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${award.title} certificate`}
              >
                <img src={award.image} alt={award.imageAlt} loading="lazy" />

                <span className="hol-award-view">
                  View certificate
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <div className="hol-award-content">
                <span className="hol-award-year">
                  KARNATAKA EDUCATIONAL AWARDS 2026
                </span>

                <h3>{award.title}</h3>

                <p>{award.description}</p>

                <div className="hol-award-recipient">
                  <Award size={19} />
                  <span>{award.recipient}</span>
                  <span className="hol-award-number">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hol-awards-footer">
          <span>HARI OM LEGAL</span>
          <p>Committed to excellence, guided by integrity.</p>
        </div>
      </div>
    </section>
  );
}
