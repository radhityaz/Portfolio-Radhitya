'use client';

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload } from 'react-icons/fi';

const AboutSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark to-dark-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-gradient mb-4">
            <FormattedMessage id="about.title" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-glow">
              <Image
                src="/images/campus-life.png"
                alt="Campus Life"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"
                animate={{ opacity: isHovered ? 0.7 : 0.5 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Caption */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 glass-navy transform"
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Institut Teknologi Bandung</h3>
                <p className="text-white/80">Industrial Engineering Student</p>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-secondary/30 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/30 rounded-full -z-10"></div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-navy p-8 rounded-2xl shadow-glow">
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                <FormattedMessage id="about.description" />
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                <FormattedMessage id="about.description2" />
              </p>
              
              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a 
                  href="https://github.com/radhityaz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-dark font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="w-5 h-5" />
                  GitHub
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/radhitya-guntoro-adhi-8869b1314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-dark font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/radhityadhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-dark font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiInstagram className="w-5 h-5" />
                  Instagram
                </motion.a>
              </div>
              
              {/* Resume download button */}
              <motion.a 
                href="/resume.pdf" 
                download
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium shadow-glow"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(42, 75, 126, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
