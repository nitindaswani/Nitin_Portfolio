import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, TrendingUp, Lightbulb, Target, Rocket, LineChart } from "lucide-react";

const learningGoals = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Exploring supervised & unsupervised learning algorithms, neural networks, and deep learning fundamentals.",
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Building skills in data visualization, statistical analysis, and extracting insights from complex datasets.",
  },
  {
    icon: Rocket,
    title: "AI-Driven Development",
    description: "Integrating AI capabilities into backend systems for intelligent automation and smart features.",
  },
];

const AILearningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-learning" className="py-24 relative overflow-hidden" ref={ref}>
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
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Continuous Growth
          </span>
          <h2 className="section-heading">
            Exploring <span className="gradient-text">AI, ML & Data Analysis</span>
          </h2>
          <p className="section-subheading mx-auto">
            Passionate about expanding into artificial intelligence and machine learning to build 
            smarter, data-driven applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Learning Goals Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {learningGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card-hover p-8 text-center group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 
                           flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <goal.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-xl mb-3">{goal.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-accent" />
            <span className="text-accent font-medium">My Vision</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm committed to rapidly learning and implementing real projects in AI, ML, and data analysis. 
            My goal is to build <span className="text-foreground font-medium">AI-driven automation tools</span>, 
            <span className="text-foreground font-medium"> intelligent backend features</span>, and 
            <span className="text-foreground font-medium"> analytics-driven applications</span> that make a meaningful impact.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-primary">
            <Target className="w-5 h-5" />
            <span className="font-medium">Always Learning, Always Building</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AILearningSection;
