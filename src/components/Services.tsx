import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Palette, Sofa, PaintBucket, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    description: "Complete home transformations—from living rooms and bedrooms to kitchens and bathrooms—crafted for your lifestyle.",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description: "Offices, retail spaces, restaurants, and showrooms designed to impress clients and boost productivity.",
  },
  {
    icon: Palette,
    title: "Interior Styling",
    description: "Curated furniture, art, and décor selections that bring personality and polish to any space.",
  },
  {
    icon: Sofa,
    title: "Modular Furniture",
    description: "Custom modular solutions for kitchens, wardrobes, and living spaces with premium finishes.",
  },
  {
    icon: PaintBucket,
    title: "Renovation & Remodeling",
    description: "Breathing new life into existing spaces with structural changes, fresh finishes, and modern upgrades.",
  },
  {
    icon: Ruler,
    title: "Space Planning & Consultation",
    description: "Expert guidance on layouts, materials, and design direction to maximize every square foot.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">
            <span className="gold-line" /> What We Do
          </span>
          <h2 className="section-title mt-3">Creating Spaces, Delivering Dreams</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-card border border-border rounded-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
