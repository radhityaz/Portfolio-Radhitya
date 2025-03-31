'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Warehouse Worker',
    company: 'Lucky Bundle Warehouse',
    location: 'South Tangerang',
    period: '2022 - 2023',
    description: [
      'Responsible for receiving and shipping goods, as well as managing warehouse inventory.',
      'Regularly checking inventory and ensuring smooth distribution processes.',
      'Worked as part of a team to support efficient operational processes.'
    ],
    type: 'work'
  },
  {
    title: 'Member',
    company: 'BSO Cirebon MTI (Industrial Engineering Student Family)',
    location: 'ITB',
    period: '2023 - Present',
    description: [
      'Actively involved in organizing social and academic events for Industrial Engineering students at ITB.',
      'Collaborated with team members to plan and execute various student activities.',
      'Participated in community outreach programs and educational initiatives.'
    ],
    type: 'extracurricular'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional experience and extracurricular activities.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 mx-auto max-w-3xl px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-10 mx-auto`}
            >
              <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2.5 border border-white dark:border-gray-700 bg-primary"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${exp.type === 'work' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                  {exp.type === 'work' ? 'Work Experience' : 'Extracurricular'}
                </span>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.location} | {exp.period}</p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience