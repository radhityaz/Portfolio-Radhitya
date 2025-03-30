'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 'restaurant',
      image: '/images/me.png', // Using me.png as a placeholder for project image
      titleId: 'projects.restaurant.title',
      descriptionId: 'projects.restaurant.description',
      techId: 'projects.restaurant.tech',
      link: '#',
    },
    {
      id: 'river',
      image: '/images/campus-life.png', // Using campus-life.png as a placeholder for project image
      titleId: 'projects.river.title',
      descriptionId: 'projects.river.description',
      techId: 'projects.river.tech',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <FormattedMessage id="projects.title" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  <FormattedMessage id={project.titleId} />
                </h3>
                <p className="text-white/80 mb-4">
                  <FormattedMessage id={project.descriptionId} />
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-white/90 border border-purple-500/30">
                    <FormattedMessage id={project.techId} />
                  </span>
                </div>
                
                <motion.a
                  href={project.link}
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
