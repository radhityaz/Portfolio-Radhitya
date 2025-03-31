'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useRef, useEffect } from 'react'; // Removed useState
import WordAnimation from './WordAnimation';
import { useLanguage } from '@/context/LanguageContext'; // Import useLanguage
import en from '@/translations/en.json'; // Import translations
import id from '@/translations/id.json'; // Import translations

// Define translation structure
const translations = { en, id };

const Hero = () => {
  const { language } = useLanguage(); // Get language from context
  const t = translations[language as 'en' | 'id']; // Select translations
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Removed the useEffect that managed internal language state

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y: backgroundY }}
      >
        <Image
          src="/background-campus.png"
          alt="ITB Campus Background"
          fill
          priority
          className="object-cover opacity-20 dark:opacity-10"
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            {/* Use translations if available, otherwise fallback or show loading */}
            {t?.hero ? (
              <>
                <WordAnimation
                  text={t.hero.greeting}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight dark:text-white"
                  delay={0.2}
                />
                <WordAnimation
                  text={t.hero.title}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                  delay={0.5}
                  staggerDelay={0.03}
                />
                <WordAnimation
                  text={t.hero.description}
                  className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                  delay={0.8}
                  staggerDelay={0.02}
                />
                <div className="flex flex-wrap gap-4">
                  <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                    duration={500}
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 cursor-pointer shadow-md"
                  >
                    {t.hero.viewProjects}
                  </ScrollLink>
                  <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                    duration={500}
                    className="bg-white/90 dark:bg-dark/90 hover:bg-gray-100/90 dark:hover:bg-gray-800/90 text-primary/90 border border-primary/80 font-medium py-2 px-6 rounded-full transition-colors duration-300 cursor-pointer shadow-md"
                  >
                    {t.hero.contactMe}
                  </ScrollLink>
                </div>
              </>
            ) : (
              // Optional: Loading state or fallback text if t.hero is not ready
              <p>Loading hero text...</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/real-profile.jpg"
                alt="Radhitya Guntoro Adhi"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </ScrollLink>
      </motion.div>
    </section>
  )
}

export default Hero
