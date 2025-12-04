import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Cpu, Workflow, Zap, Code2, Database } from "lucide-react";

const aiFeatures = [
  {
    icon: Bot,
    title: "LLM Integration",
    description: "Integrating Large Language Models and embeddings for intelligent text processing, chatbots, and content generation.",
    tags: ["OpenAI", "Embeddings", "NLP"],
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Building automation scripts and intelligent workflows that streamline operations and reduce manual tasks.",
    tags: ["Scripts", "Pipelines", "Tasks"],
  },
  {
    icon: Database,
    title: "AI-Enhanced Backend",
    description: "Developing backend systems with predictive logic, smart decision-making, and data-driven features.",
    tags: ["APIs", "Analytics", "Logic"],
  },
];

const AIPoweredSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-powered" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4" />
            AI Integration
          </span>
          <h2 className="section-heading">
            <span className="gradient-text">AI-Powered</span> Development
          </h2>
          <p className="section-subheading mx-auto">
            Leveraging artificial intelligence to build smarter applications with 
            intelligent features, automation, and data-driven decision making.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card-hover p-8 group"
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 
                           flex items-center justify-center border border-primary/20
                           group-hover:border-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                {feature.title}
                <Zap className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary/80 
                               border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Building the future with <span className="text-foreground font-medium">intelligent systems</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPoweredSection;
