import { motion } from "framer-motion";

interface SectionDividerProps {
  flip?: boolean;
}

const SectionDivider = ({ flip = false }: SectionDividerProps) => {
  return (
    <div className={`relative h-24 overflow-hidden ${flip ? "rotate-180" : ""}`}>
      {/* Main Diagonal Divider */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${flip ? "-5deg" : "5deg"}, 
            transparent 40%, 
            hsl(var(--primary) / 0.05) 50%, 
            transparent 60%)`,
        }}
      />
      
      {/* Frosted Glass Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 backdrop-blur-[1px]"
        style={{
          background: `linear-gradient(${flip ? "-3deg" : "3deg"}, 
            transparent 45%, 
            hsl(var(--card) / 0.1) 50%, 
            transparent 55%)`,
        }}
      />
      
      {/* Neon Edge Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.5) 50%, transparent 100%)",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.3)",
          transform: `rotate(${flip ? "-3deg" : "3deg"})`,
        }}
      />
    </div>
  );
};

export default SectionDivider;
