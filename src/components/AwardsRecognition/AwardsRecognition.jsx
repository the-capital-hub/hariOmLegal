
import { Award, ArrowUpRight } from "lucide-react";
import "./AwardsRecognition.css";
import image1 from '../../assets/achivement/image1.png'
import image2 from '../../assets/achivement/image2.png'
import image3 from '../../assets/achivement/image3.png'
import image4 from '../../assets/achivement/image4.png'


const awards = [
  {
  image: image1,
  imageAlt:
    "Certificate awarded to Adv. Prabhu N. Savanur for Best Legal Mentor at the Karnataka Educational Awards 2026",
  title: "Best Legal Mentor",
  recipient: "Adv. Prabhu N. Savanur",
  description:
    "Our Founder, Adv. Prabhu N. Savanur, has been honoured with the Best Legal Mentor award at the Karnataka Educational Awards 2026 for his excellent service towards education.",
},
  {
  image: image2,
  imageAlt:
    "Certificate presented to Adv. Prabhu N. Savanur for Best Legal Mentor at the Karnataka Educational Awards 2026",
  title: "Best Legal Mentor",
  recipient: "Adv. Prabhu N. Savanur",
  description:
    "Adv. Prabhu N. Savanur has been recognised by the Karnataka Educational Awards 2026 for his excellent service towards education and honoured with the Best Legal Mentor award.",
},
  {
  image: image3,
  imageAlt:
    "Hari Om Legal certificate for Excellence in Legal Services at the Karnataka Educational Awards 2026",
  title: "Excellence in Legal Services",
  recipient: "Hari Om Legal",
  description:
    "Hari Om Legal has been honoured at the Karnataka Educational Awards 2026 for its excellent service towards education, receiving recognition in the category of Excellence in Legal Services.",
},
  {
  image: image4,
  imageAlt:
    "Hari Om Legal award certificate for Excellence in Legal Services at the Karnataka Educational Awards 2026",
  title: "Excellence in Legal Services",
  recipient: "Hari Om Legal",
  description:
    "Hari Om Legal has been recognised at the Karnataka Educational Awards 2026 for its excellent service towards education, receiving the distinction of Excellence in Legal Services.",
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
