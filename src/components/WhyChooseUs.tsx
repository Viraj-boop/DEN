import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, LayoutGrid, Shield, HeartHandshake, Zap, HandCoins, Target, Clock } from "lucide-react";

const reasons = [
  { icon: Lightbulb, title: "Creativity with Purpose", num: "01" },
  { icon: LayoutGrid, title: "Smart Space Planning", num: "02" },
  { icon: Shield, title: "Honest Guidance & Analysis", num: "03" },
  { icon: HeartHandshake, title: "Stress-free Execution", num: "04" },
  { icon: Zap, title: "Expertise in Emergencies", num: "05" },
  { icon: HandCoins, title: "Transparent Transactions", num: "06" },
  { icon: Target, title: "Detail-oriented Accuracy", num: "07" },
  { icon: Clock, title: "Timely Project Delivery", num: "08" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-foreground text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label text-secondary">
            <span className="gold-line" /> Why Choose Us?
          </span>
          <h2 className="section-title text-primary-foreground mt-3">
            Why Choose The Design Den?
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
            We've built our reputation on simple yet powerful values that drive every project we undertake.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 border border-primary-foreground/10 rounded-sm hover:border-secondary/50 transition-all duration-300 hover:bg-primary-foreground/5"
            >
              <r.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-secondary font-medium">{r.num}</span>
              <h3 className="font-display text-lg font-semibold mt-2">{r.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
