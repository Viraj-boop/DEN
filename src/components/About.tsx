import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about.jpg";

const faqs = [
  { num: "01", question: "What sets The Design Den apart from others?" },
  { num: "02", question: "Do you handle both residential and commercial projects?" },
  { num: "03", question: "How involved will I be in the design process?" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="The Design Den studio team working on blueprints"
            className="w-full h-[500px] object-cover rounded-sm"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-sm hidden sm:block">
            <span className="font-display text-4xl font-bold">10+</span>
            <p className="text-sm mt-1">Years of Excellence</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-label">
            <span className="gold-line" /> About Us
          </span>
          <h2 className="section-title mb-6">
            About The Design Den
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Design Den is a premier interior design studio based in Nashik, with over a decade of experience and a portfolio of 200+ projects across Maharashtra. Known for exceptional space planning, thoughtful material selection, efficient project management, and creative design solutions, we specialize in transforming both residential and commercial spaces into extraordinary environments.
          </p>
          <div className="space-y-4 mb-8">
            {faqs.map((faq) => (
              <div
                key={faq.num}
                className="flex items-start gap-4 p-4 border border-border rounded-sm hover:border-primary/30 transition-colors group cursor-pointer"
              >
                <span className="text-secondary font-display text-lg font-bold">{faq.num}.</span>
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary">
            More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
