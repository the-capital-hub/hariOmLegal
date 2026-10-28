
import { useEffect, useState } from "react";
import { ShieldCheck, XCircle } from "lucide-react";
import "./DisclaimerModal.css";

const STORAGE_KEY = "hariOmDisclaimerAccepted";

const disclaimerSections = [
  {
    title: "1. Acknowledgement and Consent",
    paragraphs: [
      "The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, the visitor acknowledges and confirms that:",
      "(a) the visitor is seeking information about Hari Om Legal (“the Firm”) of their own accord and volition;",
      "(b) there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort from the Firm or any of its members to solicit any work through this website; and",
      "(c) the information on this website is provided solely at the visitor’s request, for informational purposes.",
      "Access to the contents of this website is conditional upon the visitor’s acceptance of this Disclaimer.",
    ],
  },
  {
    title: "2. Purpose and Nature of Information",
    paragraphs: [
      "This website has been developed solely to provide general information about the Firm, its areas of practice, professional qualifications, and professional and knowledge-sharing activities, in accordance with the Advocates Act, 1961 and the Bar Council of India Rules. Nothing on this website is intended to be, or shall be construed as, an advertisement, solicitation, or invitation for professional work. The content may include material that is available in the public domain.",
    ],
  },
  {
    title: "3. No Advocate-Client Relationship",
    paragraphs: [
      "Access to this website, use of its contents, or any communication made through it does not create an advocate-client relationship between the visitor and the Firm. Such a relationship arises only upon the Firm’s express written acceptance of an engagement.",
    ],
  },
  {
    title: "4. Not Legal Advice",
    paragraphs: [
      "Nothing contained on this website constitutes legal advice, a legal opinion, or a substitute for professional legal consultation. Visitors should not act, or refrain from acting, on the basis of any information available on this website without first obtaining appropriate legal advice based on their specific facts and circumstances.",
    ],
  },
  {
    title: "5. Accuracy and Limitation of Liability",
    paragraphs: [
      "While reasonable care has been taken to ensure that the information on this website is accurate and current, the Firm makes no representation or warranty, express or implied, as to its completeness, accuracy, reliability, or suitability. To the fullest extent permitted by law, the Firm shall not be liable for any loss or damage arising from reliance on the information contained herein, or from any errors, omissions, or interpretations thereof. Visitors are advised to independently verify any information through appropriate professional or authoritative sources.",
    ],
  },
  {
    title: "6. Confidentiality of Communications",
    paragraphs: [
      "Visitors are advised not to transmit any confidential, privileged, sensitive, or commercially significant information through the contact forms, email facilities, or other communication channels available on this website, unless the Firm has expressly agreed to receive such information. The submission of information through this website does not, by itself, establish an advocate-client relationship or ensure confidentiality or legal privilege. Any information so transmitted is provided at the visitor’s sole discretion and risk.",
    ],
  },
  {
    title: "7. External Links",
    paragraphs: [
      "Links to external websites or resources are provided solely for convenience and general information. The Firm does not control, endorse, or accept responsibility for the content, accuracy, or practices of any third-party website.",
    ],
  },
  {
    title: "8. Intellectual Property and Trademark",
    paragraphs: [
      "“Hari Om Legal®,” together with its logo, trade name, and associated marks, is a registered trademark of the Firm, protected under the Trade Marks Act, 1999 and other applicable laws. No person or entity may use, reproduce, imitate, modify, display, or distribute the said trademark, in whole or in part, in any form or medium, without the prior express written consent of the Firm. Any unauthorised use shall constitute infringement and may render the offending party liable to civil and criminal remedies available under law.",
      "All content on this website, including text, graphics, design, layout, and other materials, is the property of the Firm unless otherwise stated, and is protected under the Copyright Act, 1957. It may not be reproduced, republished, or exploited without prior written permission.",
    ],
  },
  {
    title: "9. Use of Cookies and Personal Data",
    paragraphs: [
      "This website may use cookies and similar technologies to enhance functionality, improve usability, and analyse visitor interaction. By continuing to use this website, visitors consent to such use in accordance with applicable law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. Visitors may manage or disable cookies through their browser settings, although doing so may affect certain functionalities of the website.",
    ],
  },
  {
    title: "10. Governing Law and Jurisdiction",
    paragraphs: [
      "This Disclaimer shall be governed by and construed in accordance with the laws of India. Subject to applicable law, the courts at Bengaluru, Karnataka shall have exclusive jurisdiction over any dispute arising out of or in connection with the use of this website.",
    ],
  },
  {
    title: "11. Acceptance",
    paragraphs: [
      "By clicking “I Agree” or by continuing to access this website, the visitor confirms that they have read, understood, and accepted this Disclaimer.",
    ],
  },
];

function getSavedConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export default function DisclaimerModal() {
  const [accepted, setAccepted] = useState(getSavedConsent);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    if (accepted) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const preventEscape = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", preventEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", preventEscape);
    };
  }, [accepted]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
      setAccepted(true);
      setDeclined(false);
    } catch (error) {
      console.error("Unable to save disclaimer consent:", error);
      // Keep the disclaimer open if consent cannot be saved.
    }
  };

  const handleDecline = () => {
    setDeclined(true);
  };

  if (accepted) return null;

  return (
    <div className="hol-disclaimer-overlay">
      <section
        className="hol-disclaimer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hol-disclaimer-title"
      >
        <header className="hol-disclaimer-header">
          <div className="hol-disclaimer-brand">
            <span className="hol-disclaimer-icon">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </span>

            <div>
              <span className="hol-disclaimer-eyebrow">
                HARI OM LEGAL
              </span>

              <h2 id="hol-disclaimer-title">
                Website Disclaimer
              </h2>
            </div>
          </div>

          <span className="hol-disclaimer-notice">
            PLEASE READ CAREFULLY
          </span>
        </header>

        <div className="hol-disclaimer-intro">
          Before proceeding, please read and acknowledge the
          following disclaimer regarding your access to this website.
        </div>

        <div
          className="hol-disclaimer-body"
          tabIndex={0}
          aria-label="Complete website disclaimer"
        >
          {disclaimerSections.map((section) => (
            <article
              className="hol-disclaimer-section"
              key={section.title}
            >
              <h3>{section.title}</h3>

              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <footer className="hol-disclaimer-footer">
          {declined ? (
            <p className="hol-disclaimer-declined" role="status">
              You have declined the disclaimer. Website access
              remains restricted. You may review the disclaimer
              and select Accept if you wish to proceed.
            </p>
          ) : (
            <p className="hol-disclaimer-footnote">
              By selecting “I Agree”, you confirm that you have
              read and understood this disclaimer.
            </p>
          )}

          <div className="hol-disclaimer-actions">
            <button
              type="button"
              className="hol-disclaimer-decline"
              onClick={handleDecline}
            >
              <XCircle size={18} />
              Decline
            </button>

            <button
              type="button"
              className="hol-disclaimer-accept"
              onClick={handleAccept}
            >
              I Agree &amp; Accept
            </button>
          </div>

          <span className="hol-disclaimer-legal-note">
            Hari Om Legal · For informational purposes only
          </span>
        </footer>
      </section>
    </div>
  );
}
