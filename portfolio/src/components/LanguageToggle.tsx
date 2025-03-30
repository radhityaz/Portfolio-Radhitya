'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage, Locale } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle: React.FC = () => {
  const { locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative px-3 py-1.5 rounded-full glass-gold text-dark font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-1">
        {locale === 'en' ? (
          <>
            <span className="font-medium">ID</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block"
            >
              🇮🇩
            </motion.span>
          </>
        ) : (
          <>
            <span className="font-medium">EN</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block"
            >
              🇬🇧
            </motion.span>
          </>
        )}
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <motion.div 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 glass-navy px-2 py-1 rounded text-xs text-white whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
        >
          {locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        </motion.div>
      )}
    </motion.button>
  );
};

export default LanguageToggle;
