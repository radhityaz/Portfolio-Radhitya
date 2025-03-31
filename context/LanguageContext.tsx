'use client'
import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

// Define the shape of the context value
interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en', // Default language
  toggleLanguage: () => { console.warn('toggleLanguage function called without a Provider'); }, // Default no-op function
});

// Define the props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState('en'); // Default language state

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === 'id' ? 'en' : 'id';
      // Persist the new language preference
      try {
        localStorage.setItem('language', newLang);
        // Optionally dispatch an event if needed elsewhere, though context is preferred
        // window.dispatchEvent(new Event('languageChange'));
      } catch (error) {
        console.error("Failed to access localStorage:", error);
      }
      return newLang;
    });
  };

  // Effect to load the saved language from localStorage when the component mounts
  useEffect(() => {
    let storedLang = 'en'; // Default to English if localStorage is not available or empty
    try {
      const item = localStorage.getItem('language');
      if (item === 'id' || item === 'en') {
        storedLang = item;
      }
    } catch (error) {
      console.error("Failed to access localStorage:", error);
    }
    setLanguage(storedLang);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Provide the language state and toggle function to children components
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy consumption of the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
