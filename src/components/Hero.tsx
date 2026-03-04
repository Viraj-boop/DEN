import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Welcome to The Design Den",
    title: "Your Dream Space Awaits",
    description: "We transform homes and businesses into functional, stylish, and timeless spaces that reflect who you are.",
  },
  {
    image: hero2,
    subtitle: "Crafted with Precision",
    title: "Designing Spaces, Defining Lifestyles",
    description: "Every detail matters. From concept to completion, we deliver interiors that inspire and endure.",
  },
  {
    image: hero3,
    subtitle: "Luxury Meets Comfort",
    title: "Where Elegance Feels Like Home",
    description: "Our designs blend sophistication with warmth, creating spaces you'll never want to leave.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          <div className="overlay-dark" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <span className="inline-block bg-secondary/80 text-secondary-foreground px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium mb-6">
                {slides[current].subtitle}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-primary-foreground/80 text-lg sm:text-xl mb-8 max-w-lg font-body">
                {slides[current].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#contact" className="btn-secondary border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Let's Build Your Space
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
