import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Instagram, Link2, FileText } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/nitindaswani", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nitindaswani", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nitiiinnnnn_?igsh=dXAwNDBkM3hyZmVx", label: "Instagram" },
  { icon: Link2, href: "https://linktr.ee/nitindaswani", label: "Linktree" },
  { icon: Mail, href: "mailto:nitindaswani771@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="font-heading font-bold text-lg inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Nitin</span>
              <span className="text-muted-foreground ml-1">Daswani</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nitin Daswani. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Made With */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by</span>
            <span className="text-foreground font-medium">Nitin Daswani</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border/50">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
