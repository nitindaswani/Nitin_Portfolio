import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Palette } from "lucide-react";
import { useState } from "react";

const themes = [
  { id: "blue" as const, label: "Ocean Blue", color: "hsl(217 99% 61%)" },
  { id: "purple" as const, label: "Neon Purple", color: "hsl(280 100% 65%)" },
  { id: "white" as const, label: "Soft White", color: "hsl(220 14% 96%)" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Palette className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
      </motion.button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 top-full mt-2 p-2 glass-card min-w-[160px] z-50"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left text-sm
                           ${theme === t.id ? "bg-primary/10 text-primary" : "hover:bg-white/5"}`}
              >
                <span
                  className="w-4 h-4 rounded-full border-2 border-white/20"
                  style={{ background: t.color }}
                />
                {t.label}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
