import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Deshmukh",
    role: "Homeowner, Nashik",
    text: "The Design Den transformed our 3BHK into a stunning modern home. Their attention to detail and understanding of our lifestyle was remarkable. Every corner of our house now feels both luxurious and liveable.",
    rating: 5,
  },
  {
    name: "Rahul Patil",
    role: "Café Owner, Nashik",
    text: "We hired The Design Den for our new café interiors and the result exceeded all expectations. The ambience they created has become a key part of our brand identity. Customers always compliment the design.",
    rating: 5,
  },
  {
    name: "Anjali & Suresh Kulkarni",
    role: "Homeowners, Pune",
    text: "From the initial consultation to the final handover, The Design Den was professional, creative, and transparent. They delivered our dream home on time and within budget. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label">
          <span className="gold-line" /> Testimonials
        </span>
        <h2 className="section-title mt-3 mb-12">What Our Clients Say</h2>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative bg-card border border-border p-8 sm:p-12 rounded-sm"
        >
          <Quote className="w-10 h-10 text-secondary/30 mx-auto mb-6" />
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
            ))}
          </div>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8 font-body italic">
            "{testimonials[current].text}"
          </p>
          <div>
            <p className="font-display text-lg font-semibold">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
