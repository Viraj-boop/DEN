import { Phone, Mail, MapPin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              The <span className="text-gradient-gold">Design</span> Den
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transforming spaces into extraordinary experiences. Nashik's trusted interior design studio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Residential Interiors", "Commercial Interiors", "Modular Furniture", "Renovation", "Space Planning", "Interior Styling"].map((s) => (
                <span key={s} className="text-primary-foreground/60 text-sm">{s}</span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm">Near Samrat Sweets, Rajiv Nagar, Nashik</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:hello@thedesignden.in" className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                  hello@thedesignden.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://instagram.com/thedesignden" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                  @thedesignden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 The Design Den. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
