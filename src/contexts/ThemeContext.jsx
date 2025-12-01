import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('normal'); // small, normal, large
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    
    setTheme(savedTheme);
    setFontSize(savedFontSize);
    setHighContrast(savedHighContrast);
    
    applyTheme(savedTheme, savedFontSize, savedHighContrast);
  }, []);

  const applyTheme = (newTheme, newFontSize, newHighContrast) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Apply theme to both html and body
    if (newTheme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      document.getElementById('root')?.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      document.getElementById('root')?.classList.remove('dark');
    }
    
    // Apply font size
    root.classList.remove('text-small', 'text-large');
    if (newFontSize === 'small') {
      root.classList.add('text-small');
    } else if (newFontSize === 'large') {
      root.classList.add('text-large');
    }
    
    // Apply high contrast
    if (newHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme, fontSize, highContrast);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyTheme(theme, size, highContrast);
  };

  const toggleHighContrast = () => {
    const newHighContrast = !highContrast;
    setHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast.toString());
    applyTheme(theme, fontSize, newHighContrast);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        fontSize,
        highContrast,
        toggleTheme,
        changeFontSize,
        toggleHighContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
