import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "blue" | "purple" | "white";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeVariables: Record<Theme, Record<string, string>> = {
  blue: {
    "--background": "222 47% 6%",
    "--foreground": "210 40% 98%",
    "--card": "222 47% 11%",
    "--card-foreground": "210 40% 98%",
    "--primary": "217 99% 61%",
    "--primary-foreground": "222 47% 6%",
    "--secondary": "217 33% 17%",
    "--secondary-foreground": "210 40% 98%",
    "--muted": "217 33% 17%",
    "--muted-foreground": "215 20% 65%",
    "--accent": "199 89% 74%",
    "--accent-foreground": "222 47% 6%",
    "--border": "217 33% 20%",
  },
  purple: {
    "--background": "270 50% 6%",
    "--foreground": "270 20% 98%",
    "--card": "270 45% 11%",
    "--card-foreground": "270 20% 98%",
    "--primary": "280 100% 65%",
    "--primary-foreground": "270 50% 6%",
    "--secondary": "270 30% 17%",
    "--secondary-foreground": "270 20% 98%",
    "--muted": "270 30% 17%",
    "--muted-foreground": "270 15% 65%",
    "--accent": "320 90% 70%",
    "--accent-foreground": "270 50% 6%",
    "--border": "270 30% 20%",
  },
  white: {
    "--background": "0 0% 98%",
    "--foreground": "222 47% 11%",
    "--card": "0 0% 100%",
    "--card-foreground": "222 47% 11%",
    "--primary": "217 99% 50%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "220 14% 96%",
    "--secondary-foreground": "222 47% 11%",
    "--muted": "220 14% 96%",
    "--muted-foreground": "220 9% 46%",
    "--accent": "199 89% 48%",
    "--accent-foreground": "0 0% 100%",
    "--border": "220 13% 91%",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as Theme) || "blue";
    }
    return "blue";
  });

  useEffect(() => {
    const root = document.documentElement;
    const variables = themeVariables[theme];

    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    localStorage.setItem("portfolio-theme", theme);
    
    // Update body class for theme-specific styles
    document.body.classList.remove("theme-blue", "theme-purple", "theme-white");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
