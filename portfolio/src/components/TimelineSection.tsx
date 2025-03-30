'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <FormattedMessage id="timeline.title" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-white">
                  <FormattedMessage id="timeline.education" />
                </h3>
              </div>
              
              <div className="pl-4 border-l-2 border-purple-500">
                <div className="mb-8 relative">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white">
                    <FormattedMessage id="timeline.education.school" />
                  </h4>
                  <p className="text-purple-300 mb-2">
                    <FormattedMessage id="timeline.education.degree" />
                  </p>
                  <p className="text-white/60 mb-4">
                    <FormattedMessage id="timeline.education.year" />
                  </p>
                  <p className="text-white/80">
                    <FormattedMessage id="timeline.education.description" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-white">
                  <FormattedMessage id="timeline.experience" />
                </h3>
              </div>
              
              <div className="pl-4 border-l-2 border-pink-500">
                <div className="mb-8 relative">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white">
                    <FormattedMessage id="timeline.experience.company" />
                  </h4>
                  <p className="text-pink-300 mb-2">
                    <FormattedMessage id="timeline.experience.position" />
                  </p>
                  <p className="text-white/60 mb-4">
                    <FormattedMessage id="timeline.experience.year" />
                  </p>
                  <p className="text-white/80">
                    <FormattedMessage id="timeline.experience.description" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
