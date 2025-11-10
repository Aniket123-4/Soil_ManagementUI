import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'green-growth' | 'earth' | 'modern' | 'contrast';
type ColorMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colorMode: ColorMode;
  setTheme: (theme: Theme) => void;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'green-growth';
  });
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    return (localStorage.getItem('colorMode') as ColorMode) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.removeAttribute('data-theme');
    root.classList.remove('dark');
    
    // Apply new theme
    if (theme !== 'green-growth') {
      root.setAttribute('data-theme', theme);
    }
    
    if (colorMode === 'dark') {
      root.classList.add('dark');
    }
    
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorMode', colorMode);
  }, [theme, colorMode]);

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, colorMode, setTheme, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
