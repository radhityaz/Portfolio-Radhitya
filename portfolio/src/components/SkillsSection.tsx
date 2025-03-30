'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

// Define skills
const skills = {
  programming: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  frameworks: ['React', 'Next.js', 'Microsoft Excel'],
  databases: ['SQL', 'Excel Data Management'],
  other: ['Web Development', 'Data Analysis'],
};

const SkillsSection: React.FC = () => {
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
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <FormattedMessage id="skills.title" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <motion.div
            className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold ml-3 text-white">
                <FormattedMessage id="skills.programming" />
              </h3>
            </div>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.programming.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white/80"
                  variants={item}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold ml-3 text-white">
                <FormattedMessage id="skills.frameworks" />
              </h3>
            </div>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.frameworks.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white/80"
                  variants={item}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Databases & Systems */}
          <motion.div
            className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold ml-3 text-white">
                <FormattedMessage id="skills.databases" />
              </h3>
            </div>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.databases.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white/80"
                  variants={item}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold ml-3 text-white">
                <FormattedMessage id="skills.other" />
              </h3>
            </div>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.other.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white/80"
                  variants={item}
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
