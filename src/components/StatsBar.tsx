import AnimatedCounter from "./AnimatedCounter";

const StatsBar = () => (
  <section className="bg-foreground py-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <AnimatedCounter end={200} suffix="+" label="Projects Completed" />
      <AnimatedCounter end={10} suffix="+" label="Years Experience" />
      <AnimatedCounter end={8} suffix="+" label="Cities Served" />
      <AnimatedCounter end={150} suffix="+" label="Happy Clients" />
    </div>
  </section>
);

export default StatsBar;
