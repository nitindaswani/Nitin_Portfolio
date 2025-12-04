import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "Python & Django Developer",
    organization: "Self-learning & Personal Projects",
    period: "2023 – Present",
    description: [
      "Practiced Django MVT: routing, views, models, templates and ORM-driven CRUD workflows",
      "Built authentication flows, session management and basic REST endpoints",
      "Developed responsive frontends with HTML5, CSS3 and JavaScript for multiple project prototypes",
      "Used Git/GitHub for version control and collaborative workflows",
    ],
    icon: Briefcase,
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Lucky Institute of Professional Studies, Jodhpur",
    period: "2023 – 2026 (ongoing)",
    description: ["Pursuing degree with focus on programming, databases, and software development"],
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Senior & Secondary Education",
    organization: "Mahesh Public School",
    period: "2008 – 2023",
    description: ["Completed schooling with strong foundation in science and mathematics"],
    icon: GraduationCap,
  },
];

const certifications = [
  {
    type: "certification",
    title: "AI Prompt Engineering Workshop",
    organization: "SIN School of AI",
    period: "2024",
    description: ["Practical focus on ML concepts, prompt design, and generative AI applications"],
    icon: Award,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allItems = [...experiences, ...education, ...certifications];

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Journey</span>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            My path in software development, from learning to building real projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {allItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Icon */}
                <div className="absolute left-0 w-16 h-16 rounded-2xl glass-card flex items-center justify-center border border-primary/20">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content Card */}
                <div className="glass-card-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          item.type === "experience"
                            ? "bg-primary/20 text-primary"
                            : item.type === "education"
                            ? "bg-accent/20 text-accent"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                      <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.organization}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
