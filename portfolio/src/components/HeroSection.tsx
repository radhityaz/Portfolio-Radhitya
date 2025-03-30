'use client';

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  
  // Random rotation for profile image
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000); // Flip every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/background-campus.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-white/80 text-xl md:text-2xl mb-2 font-light">
            <FormattedMessage id="hero.greeting" />
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <FormattedMessage id="hero.name" />
          </h1>
          <h3 className="text-white text-xl md:text-3xl mb-6">
            <FormattedMessage id="hero.title" />
          </h3>
          <p className="text-white/70 text-lg mb-8 max-w-lg">
            <FormattedMessage id="hero.subtitle" />
          </p>
          <motion.button
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FormattedMessage id="hero.cta" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
            <AnimatePresence>
              <motion.div
                className="w-full h-full rounded-2xl shadow-2xl absolute backface-hidden cursor-pointer"
                style={{ 
                  transformStyle: "preserve-3d",
                }}
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                }}
                transition={{ duration: 0.8 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front - Cartoon Profile */}
                <motion.div 
                  className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-4 border-white/20"
                  style={{ 
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                {/* Back - Real Photo */}
                <motion.div 
                  className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-4 border-white/20"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src="/images/real-profile.jpg"
                    alt="Real Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Glassmorphism effect */}
            <div className="absolute -inset-4 rounded-3xl bg-white/5 backdrop-blur-sm -z-10"></div>
            
            {/* Hint text */}
            <motion.div 
              className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Click to flip
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
