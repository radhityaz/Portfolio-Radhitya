'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

// Import language files
import enMessages from '@/translations/en.json';
import idMessages from '@/translations/id.json';

// Define available locales
export type Locale = 'en' | 'id';

// Define context type
type LanguageContextType = {
  locale: Locale;
  messages: Record<string, string>;
  setLocale: (locale: Locale) => void;
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Messages by locale
const messages: Record<Locale, Record<string, string>> = {
  en: enMessages,
  id: idMessages,
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('id'); // Default to Indonesian

  const value = {
    locale,
    messages: messages[locale],
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
