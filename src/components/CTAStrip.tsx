import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTAStrip = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.3) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Available for <span className="gradient-text">Internships</span> & <span className="gradient-text">Freelance</span> Development
            </h3>
          </div>
          
          <motion.a
            href="#contact"
            className="btn-primary flex items-center gap-2 group whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Build Something</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;
