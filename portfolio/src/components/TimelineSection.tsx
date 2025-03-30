'use client';

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const TimelineSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  return (
    <section id="timeline" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-gradient mb-4">
            <FormattedMessage id="timeline.title" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCard('education')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl shadow-glow h-full"
              animate={{ 
                boxShadow: activeCard === 'education' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center text-white text-xl shadow-glow">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-white">
                  <FormattedMessage id="timeline.education" />
                </h3>
              </div>
              
              <div className="pl-6 border-l-2 border-primary">
                <div className="mb-8 relative">
                  <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">
                    <FormattedMessage id="timeline.education.school" />
                  </h4>
                  
                  <div className="flex items-center text-primary-light mb-2">
                    <FiMapPin className="mr-2" />
                    <span>Bandung, Indonesia</span>
                  </div>
                  
                  <div className="flex items-center text-secondary mb-4">
                    <FiCalendar className="mr-2" />
                    <FormattedMessage id="timeline.education.year" />
                  </div>
                  
                  <div className="glass-effect p-4 rounded-lg mb-4">
                    <p className="text-white font-medium mb-2">
                      <FormattedMessage id="timeline.education.degree" />
                    </p>
                    <p className="text-white/80">
                      <FormattedMessage id="timeline.education.description" />
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-white">Industrial Engineering</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-white">Data Analysis</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-white">Production Planning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setActiveCard('experience')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <motion.div 
              className="glass-navy p-8 rounded-2xl shadow-glow h-full"
              animate={{ 
                boxShadow: activeCard === 'experience' 
                  ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                  : '0 0 15px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-secondary to-secondary-light flex items-center justify-center text-dark text-xl shadow-glow">
                  <FiBriefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-white">
                  <FormattedMessage id="timeline.experience" />
                </h3>
              </div>
              
              <div className="pl-6 border-l-2 border-secondary">
                <div className="mb-8 relative">
                  <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                    <div className="w-3 h-3 bg-dark rounded-full"></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">
                    <FormattedMessage id="timeline.experience.company" />
                  </h4>
                  
                  <div className="flex items-center text-secondary mb-2">
                    <FiMapPin className="mr-2" />
                    <span>South Tangerang, Indonesia</span>
                  </div>
                  
                  <div className="flex items-center text-primary-light mb-4">
                    <FiCalendar className="mr-2" />
                    <FormattedMessage id="timeline.experience.year" />
                  </div>
                  
                  <div className="glass-effect p-4 rounded-lg mb-4">
                    <p className="text-white font-medium mb-2">
                      <FormattedMessage id="timeline.experience.position" />
                    </p>
                    <p className="text-white/80">
                      <FormattedMessage id="timeline.experience.description" />
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-white">Inventory Management</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-white">Logistics</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-white">Team Collaboration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
