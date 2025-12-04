import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Clean MVT patterns, ORM-driven workflows, and scalable API design",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "SQL, SQLite, MySQL with optimized queries and data modeling",
  },
  {
    icon: Code2,
    title: "Full-Stack Capable",
    description: "Responsive frontends with HTML, CSS, JS integrated with Django",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quick iteration from concept to working prototype",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-40 top-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-medium mb-4 block"
            >
              About Me
            </motion.span>
            <h2 className="section-heading">
              Building the{" "}
              <span className="gradient-text">Backend</span> of Tomorrow
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Python & Django developer based in Jodhpur, Rajasthan, passionate about 
                building modern web applications with clean backend architecture and smooth 
                user experiences.
              </p>
              <p>
                Currently pursuing my BCA at Lucky Institute of Professional Studies, I focus on 
                authentication systems, REST APIs, database models, CRUD operations, and 
                structured backend architecture.
              </p>
              <p>
                My goal is to write maintainable, readable, production-ready code and grow as 
                a backend engineer. I'm actively seeking opportunities where I can contribute 
                to meaningful projects and expand my technical experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "5+", label: "Projects" },
                { value: "2+", label: "Years Learning" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
