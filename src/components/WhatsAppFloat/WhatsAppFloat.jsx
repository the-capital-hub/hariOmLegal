import { MessageCircle } from "lucide-react";
import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "918123838480";

const MESSAGE = encodeURIComponent(
  "Hello Hari Om Legal, I would like to enquire about your legal services."
);

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hari Om Legal on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2.2} />
      <span className="whatsapp-float-tooltip">
        Chat with us
      </span>
    </a>
  );
}