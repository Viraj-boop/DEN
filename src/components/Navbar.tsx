import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>The </span>
            <span className="text-gradient-gold">Design</span>
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}> Den</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+919876543210" className="btn-primary mt-2 justify-center">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
