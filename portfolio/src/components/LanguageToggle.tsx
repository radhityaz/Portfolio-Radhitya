'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage, Locale } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle: React.FC = () => {
  const { locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|id)/, '');
    
    // Navigate to the new URL with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-5 right-5 z-50 px-3 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-medium shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {locale === 'en' ? 'ID 🇮🇩' : 'EN 🇬🇧'}
    </motion.button>
  );
};

export default LanguageToggle;
