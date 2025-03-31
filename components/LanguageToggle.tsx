'use client';

import { useEffect } from 'react'; // Keep useEffect if needed for other things, remove useState
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext'; // Import the custom hook

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage(); // Use the context hook. The context provider now handles initialization and persistence.

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute left-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-800 text-xs font-medium shadow-sm"
        animate={{
          x: language === 'id' ? '0%' : '100%',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {language === 'id' ? 'ID' : 'EN'}
      </motion.div>
      <span className="sr-only">Toggle language</span>
    </motion.button>
  )
}

export default LanguageToggle
