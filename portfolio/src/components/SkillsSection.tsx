'use client';

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { FiCode, FiPackage, FiDatabase, FiZap } from 'react-icons/fi';

// Define skills with proficiency levels
const skills = {
  programming: [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'SQL', level: 70 },
  ],
  frameworks: [
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Microsoft Excel', level: 90 },
  ],
  databases: [
    { name: 'SQL', level: 70 },
    { name: 'Excel Data Management', level: 85 },
  ],
  other: [
    { name: 'Web Development', level: 75 },
    { name: 'Data Analysis', level: 80 },
  ],
};

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding bg-dark relative overflow-hidden">
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
            <FormattedMessage id="skills.title" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            <FormattedMessage id="skills.subtitle" defaultMessage="A collection of technologies and tools I've worked with" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCategory('programming')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl h-full"
              animate={{ 
                boxShadow: activeCategory === 'programming' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center text-white shadow-glow">
                  <FiCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  <FormattedMessage id="skills.programming" />
                </h3>
              </div>
              
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.programming.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={item}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-light">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCategory('frameworks')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl h-full"
              animate={{ 
                boxShadow: activeCategory === 'frameworks' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-secondary-light flex items-center justify-center text-dark shadow-glow">
                  <FiPackage className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  <FormattedMessage id="skills.frameworks" />
                </h3>
              </div>
              
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.frameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={item}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Databases & Systems */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCategory('databases')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl h-full"
              animate={{ 
                boxShadow: activeCategory === 'databases' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center text-white shadow-glow">
                  <FiDatabase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  <FormattedMessage id="skills.databases" />
                </h3>
              </div>
              
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.databases.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={item}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-light">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCategory('other')}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl h-full"
              animate={{ 
                boxShadow: activeCategory === 'other' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-secondary-light flex items-center justify-center text-dark shadow-glow">
                  <FiZap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  <FormattedMessage id="skills.other" />
                </h3>
              </div>
              
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.other.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={item}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
