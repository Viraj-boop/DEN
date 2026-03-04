import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const projects = [
  { image: project1, title: "Modern Executive Office", category: "Commercial" },
  { image: project2, title: "Marble Spa Bathroom", category: "Residential" },
  { image: project3, title: "Upscale Restaurant Lounge", category: "Commercial" },
  { image: project4, title: "Luxury Walk-in Wardrobe", category: "Residential" },
  { image: hero1, title: "Contemporary Living Room", category: "Residential" },
  { image: hero2, title: "Designer Gourmet Kitchen", category: "Residential" },
];

const filters = ["All", "Residential", "Commercial"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">
            <span className="gold-line" /> Our Portfolio
          </span>
          <h2 className="section-title mt-3">Featured Projects</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm uppercase tracking-wider font-medium px-5 py-2 transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer rounded-sm"
              onClick={() => setLightbox(i)}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-wider text-secondary">{p.category}</span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mt-1">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox].image}
            alt={filtered[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
