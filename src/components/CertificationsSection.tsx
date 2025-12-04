import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X, Calendar, Building2 } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AI Prompt Engineering Workshop",
    issuer: "SIN School of AI",
    date: "2024",
    description: "Comprehensive training in prompt engineering techniques, LLM optimization, and AI-assisted development workflows.",
    image: "/certificates/prompt-engineering.jpg",
    skills: ["Prompt Design", "LLMs", "AI Workflows"],
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    issuer: "NullCyberX",
    date: "2024",
    duration: "45 Hours",
    description: "Intensive hands-on training in cybersecurity fundamentals, penetration testing, and ethical hacking methodologies.",
    image: "/certificates/ethical-hacking.jpg",
    skills: ["Penetration Testing", "Security", "Network Analysis"],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <>
      <section id="certifications" className="py-24 relative overflow-hidden" ref={ref}>
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-0 top-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              Credentials
            </span>
            <h2 className="section-heading">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="section-subheading mx-auto">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-card-hover p-6 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Preview */}
                <div className="relative aspect-[4/3] mb-6 rounded-xl overflow-hidden bg-secondary/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-primary/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-accent font-medium">{cert.issuer}</span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-1">{selectedCert.title}</h3>
                <p className="text-muted-foreground">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary/50 mb-6 flex items-center justify-center">
              <Award className="w-24 h-24 text-primary/30" />
            </div>

            <p className="text-muted-foreground mb-6">{selectedCert.description}</p>

            <div className="flex flex-wrap gap-2">
              {selectedCert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificationsSection;
