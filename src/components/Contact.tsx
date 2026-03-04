import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hi, I'm ${form.name}.\n\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/919876543210?text=${whatsappMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your message is ready to send!" });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">
            <span className="gold-line" /> Get In Touch
          </span>
          <h2 className="section-title mt-3">Let's Create Something Beautiful</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground text-sm">Near Samrat Sweets, Rajiv Nagar, Nashik</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Call / WhatsApp</h4>
                  <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Email Us</h4>
                  <a href="mailto:hello@thedesignden.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    hello@thedesignden.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 10:00 AM - 07:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Follow Us</h4>
                  <a
                    href="https://instagram.com/thedesignden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    @thedesignden
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.78!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Design Den location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-8 rounded-sm border border-border"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">Send Us a Message</h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
