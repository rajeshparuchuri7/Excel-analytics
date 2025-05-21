import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  // Check if user has previously set a preference, otherwise use system preference
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('darkMode');
  const initialDarkMode = storedTheme !== null ? storedTheme === 'true' : prefersDarkMode;
  
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', darkMode);
    
    // Store the preference
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}