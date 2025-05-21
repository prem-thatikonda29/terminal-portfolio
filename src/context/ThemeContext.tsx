import React, { createContext, useContext, useState, useEffect } from "react";
import { themes, TerminalTheme, getThemeById } from "@/lib/themes";

interface ThemeContextType {
  currentTheme: TerminalTheme;
  setTheme: (themeId: string) => void;
  themesList: TerminalTheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize with default theme or from localStorage if available
  const [currentTheme, setCurrentTheme] = useState<TerminalTheme>(themes[0]);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem("terminal-theme");
    if (savedThemeId) {
      setCurrentTheme(getThemeById(savedThemeId));
    }
  }, []);

  // Set theme and save to localStorage
  const setTheme = (themeId: string) => {
    const theme = getThemeById(themeId);
    setCurrentTheme(theme);
    localStorage.setItem("terminal-theme", themeId);

    // Apply theme colors to CSS variables for easier global access
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--terminal-${key}`, value);
    });
  };

  // Apply initial theme
  useEffect(() => {
    setTheme(currentTheme.id);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme, themesList: themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
