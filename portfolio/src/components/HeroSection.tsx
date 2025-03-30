'use client';

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const controls = useAnimation();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-campus.png"
          alt="Campus Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light/90 via-dark/95 to-dark"></div>
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary text-xl md:text-2xl mb-3 font-medium tracking-wide">
              <FormattedMessage id="hero.greeting" />
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="heading-gradient text-5xl md:text-6xl lg:text-7xl mb-6 animate-gradient-text">
              <FormattedMessage id="hero.name" />
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white text-2xl md:text-3xl mb-6 font-medium">
              <FormattedMessage id="hero.title" />
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <FormattedMessage id="hero.subtitle" />
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium shadow-glow flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(42, 75, 126, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FormattedMessage id="hero.cta" />
              <FiArrowDown className="ml-1" />
            </motion.button>
            
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full glass-gold text-dark font-medium flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsProjectsHovered(true)}
              onMouseLeave={() => setIsProjectsHovered(false)}
            >
              <FormattedMessage id="hero.projects" />
              <motion.div
                animate={{ x: isProjectsHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiArrowRight className="ml-1" />
              </motion.div>
              
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-secondary/20 -z-10"
                initial={{ x: "-100%" }}
                animate={{ x: isProjectsHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div 
            className="relative w-72 h-72 md:w-96 md:h-96"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image container with effects */}
            <motion.div
              className="w-full h-full rounded-2xl overflow-hidden"
              animate={{ 
                scale: isHovered ? 1.03 : 1,
                boxShadow: isHovered 
                  ? "0 20px 50px rgba(255, 215, 0, 0.2), 0 0 30px rgba(42, 75, 126, 0.4)" 
                  : "0 10px 30px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/profile.png"
                alt="Radhitya Guntoro Adhi"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
              />
              
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"
                animate={{ 
                  opacity: isHovered ? 0.7 : 0.5 
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full border-4 border-secondary/30 -z-10"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                borderColor: isHovered ? "rgba(255, 215, 0, 0.5)" : "rgba(255, 215, 0, 0.3)"
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-primary/30 -z-10"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                borderColor: isHovered ? "rgba(42, 75, 126, 0.5)" : "rgba(42, 75, 126, 0.3)"
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            
            {/* Professional title badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-navy px-6 py-3 rounded-full shadow-glow"
              animate={{ 
                y: isHovered ? -10 : 0,
                boxShadow: isHovered ? "0 10px 25px rgba(42, 75, 126, 0.3)" : "0 5px 15px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-white font-medium">Industrial Engineering Student</span>
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
          className="w-8 h-12 rounded-full border-2 border-secondary/30 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-secondary/60 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
