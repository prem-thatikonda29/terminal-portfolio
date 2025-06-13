
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Theme {
  id: string;
  name: string;
  colors: {
    bg: string;
    text: string;
    green: string;
    command: string;
    output: string;
  };
}

interface ThemeContextType {
  themesList: Theme[];
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
}

const defaultThemes: Theme[] = [
  {
    id: 'default',
    name: 'Default Terminal',
    colors: {
      bg: '#0a0a0a',
      text: '#00ff00',
      green: '#00ff00',
      command: '#00d7ff',
      output: '#ffffff'
    }
  },
  {
    id: 'retro',
    name: 'Retro Green',
    colors: {
      bg: '#001100',
      text: '#00aa00',
      green: '#00ff00',
      command: '#00ffff',
      output: '#cccccc'
    }
  },
  {
    id: 'matrix',
    name: 'Matrix',
    colors: {
      bg: '#000000',
      text: '#00ff41',
      green: '#00ff41',
      command: '#ffffff',
      output: '#00ff41'
    }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      bg: '#0f0f23',
      text: '#ff00ff',
      green: '#00ffff',
      command: '#ffff00',
      output: '#ff6600'
    }
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultThemes[0]);

  const setTheme = (themeId: string) => {
    const theme = defaultThemes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{
      themesList: defaultThemes,
      currentTheme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
