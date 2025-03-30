'use client';

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiCode, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 'restaurant',
      image: '/images/me.png', // Using me.png as a placeholder for project image
      titleId: 'projects.restaurant.title',
      descriptionId: 'projects.restaurant.description',
      techStack: ['Python', 'Data Management', 'UI/UX Design'],
      link: '#',
      codeLink: '#',
    },
    {
      id: 'river',
      image: '/images/campus-life.png', // Using campus-life.png as a placeholder for project image
      titleId: 'projects.river.title',
      descriptionId: 'projects.river.description',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      link: '#',
      codeLink: '#',
    },
  ];
  
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-gradient mb-4">
            <FormattedMessage id="projects.title" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            <FormattedMessage id="projects.subtitle" defaultMessage="A showcase of my academic and personal projects" />
          </p>
        </motion.div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <motion.div 
                className="glass-navy rounded-2xl overflow-hidden h-full"
                animate={{ 
                  boxShadow: activeProject === project.id 
                    ? '0 0 25px rgba(42, 75, 126, 0.4)' 
                    : '0 0 15px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                  
                  {/* Project title overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      <FormattedMessage id={project.titleId} />
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-white/80 mb-6">
                    <FormattedMessage id={project.descriptionId} />
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-primary/20 text-white/90 border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium shadow-glow"
                      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(42, 75, 126, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      <span>Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.codeLink}
                      className="flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-dark font-medium"
                      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiCode />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="glass-navy rounded-2xl overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={projects[currentIndex].image}
                  alt={`Project ${currentIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  <FormattedMessage id={projects[currentIndex].titleId} />
                </h3>
                <p className="text-white/80 mb-4">
                  <FormattedMessage id={projects[currentIndex].descriptionId} />
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-primary/20 text-white/90 border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={projects[currentIndex].link}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium shadow-glow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    <span>Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={projects[currentIndex].codeLink}
                    className="flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-dark font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiCode />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <motion.button
              onClick={prevProject}
              className="w-12 h-12 rounded-full glass-navy flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(42, 75, 126, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextProject}
              className="w-12 h-12 rounded-full glass-navy flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(42, 75, 126, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/30'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
