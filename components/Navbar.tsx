'use client'

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext'; // Import useLanguage
import en from '@/translations/en.json'; // Import translations
import id from '@/translations/id.json'; // Import translations

// Define translation structure (adjust as needed)
const translations = { en, id };

const Navbar = () => {
  const { language } = useLanguage(); // Get language from context
  const t = translations[language as 'en' | 'id']; // Select translations

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navLinks structure (target only, name comes from translations)
  const navLinks = [
    { key: 'home', target: 'hero' },
    { key: 'about', target: 'about' },
    { key: 'skills', target: 'skills' },
    { key: 'projects', target: 'projects' },
    { key: 'experience', target: 'experience' },
    { key: 'contact', target: 'contact' },
  ];

  // Check if translations are loaded before rendering links
  if (!t?.nav) {
    // Optional: Render a loading state or null while translations load/are missing
    // This prevents errors if the JSON structure isn't ready yet.
    // You might want a more robust loading strategy depending on complexity.
    console.warn(`Navbar translations for language '${language}' not found or incomplete.`);
    // For now, let's return null or a basic structure to avoid crashing.
    // Alternatively, provide default names if t.nav is missing.
    // return null; // Or a loading indicator
  }


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.h1 
              className="text-xl font-bold cursor-pointer font-heading tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Radhitya<span className="text-primary">Adhi</span>
            </motion.h1>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {t?.nav && navLinks.map((link) => ( // Check t.nav before mapping
              <motion.div
                key={link.key} // Use key from navLinks
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ScrollLink
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`text-sm font-medium cursor-pointer transition-all duration-300 hover:text-primary ${
                    isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-white'
                  }`}
                  activeClass="text-primary"
                >
                  {t.nav[link.key as keyof typeof t.nav] || link.key} {/* Use translation, fallback to key */}
                </ScrollLink>
              </motion.div>
            ))}
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 p-2 rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {t?.nav && navLinks.map((link) => ( // Check t.nav before mapping
                <motion.div
                  key={link.key} // Use key from navLinks
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ScrollLink
                      key={link.target}
                      to={link.target}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-gray-800 dark:text-white text-sm font-medium py-2 cursor-pointer hover:text-primary transition-colors"
                      activeClass="text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav[link.key as keyof typeof t.nav] || link.key} {/* Use translation, fallback to key */}
                  </ScrollLink>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
