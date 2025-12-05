import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Layers, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 5,
    suffix: "+",
    label: "Projects Completed",
    description: "Full-stack applications",
  },
  {
    icon: Layers,
    value: 10,
    suffix: "+",
    label: "Technologies Used",
    description: "Backend & frontend skills",
  },
  {
    icon: Award,
    value: 2,
    suffix: "",
    label: "Workshops Attended",
    description: "Professional certifications",
  },
  {
    icon: Calendar,
    value: 2,
    suffix: "+",
    label: "Years Learning",
    description: "Continuous growth",
  },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="gradient-text">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 md:p-8 text-center group"
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Counter */}
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>

              {/* Label */}
              <h3 className="font-heading font-semibold text-lg mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
