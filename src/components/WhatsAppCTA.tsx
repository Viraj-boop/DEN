import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20interior%20design%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="btn-whatsapp"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppCTA;
