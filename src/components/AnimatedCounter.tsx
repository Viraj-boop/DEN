import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", label, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl sm:text-5xl font-bold text-secondary">
        {count}{suffix}
      </span>
      <p className="text-primary-foreground/70 text-sm mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
