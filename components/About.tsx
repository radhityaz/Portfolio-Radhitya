'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import WordAnimation from './WordAnimation';
import PhotoGallery from './PhotoGallery';

const About = () => {
  const [language, setLanguage] = useState('en')
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    const handleLanguageChange = () => {
      const storedLanguage = localStorage.getItem('language')
      if (storedLanguage) {
        setLanguage(storedLanguage)
      }
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-lg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 dark:text-white">{language === 'id' ? 'Tentang Saya' : 'About Me'}</h2>
          <p className="text-gray-600 dark:text-gray-300 px-8 text-xl">
            {language === 'id' ? 'Kenali saya lebih baik dan apa yang mendorong semangat saya terhadap teknologi dan teknik.' : 'Get to know me better and what drives my passion for technology and engineering.'}
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-8 text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative border-4 border-white/30 dark:border-gray-800/30 rounded-full"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl transition-all duration-300 border-4 border-white/30 dark:border-gray-800/30 mx-auto max-w-md hover:scale-[1.02] hover:border-white/50 dark:hover:border-gray-800/50">
              <Image
                src="/profile.png"
                alt="Radhitya Guntoro Adhi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg text-center"
          >
            <h3 className="text-3xl font-semibold mb-6 dark:text-white">Radhitya Guntoro Adhi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl leading-relaxed">
              {language === 'id' ? 'Saya adalah mahasiswa Teknik Industri di Institut Teknologi Bandung (ITB), angkatan 2023, dengan rencana lulus pada tahun 2027.' : "I'm an Industrial Engineering student at Institut Teknologi Bandung (ITB), class of 2023, with an expected graduation in 2027."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl leading-relaxed">
              {language === 'id' ? 'Saya sangat percaya bahwa supremasi sipil dan kebebasan individu adalah nilai-nilai penting dalam setiap peradaban. Saat ini, saya sedang mengembangkan aplikasi perencana & pelacak studi berbasis AI untuk membantu mahasiswa mengatur waktu belajar mereka dengan lebih efektif.' : 'I firmly believe that civil supremacy and individual freedom are essential values in any civilization. Currently, I am developing an AI-based study planner & tracker app to help students manage their study time more effectively.'}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl leading-relaxed">
              {language === 'id' ? 'Selain itu, saya senang mendiskusikan tren teknologi dan tetap mengikuti perkembangan terbaru dalam pemrograman. Dalam jangka pendek, saya fokus pada peningkatan performa akademik, membangun portofolio digital, dan meningkatkan keterampilan pengembangan web saya.' : 'In addition, I enjoy discussing technology trends and staying updated on the latest developments in coding. In the short term, I am focusing on improving my academic performance, building a digital portfolio, and enhancing my web development skills.'}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
              {language === 'id' ? 'Sebagai mahasiswa Teknik Industri, saya juga memiliki minat yang besar dalam Perencanaan dan Pengendalian Produksi, Riset Operasional, serta penerapan teknologi dalam strategi bisnis.' : 'As an Industrial Engineering student, I also have a keen interest in Production Planning and Control, Operational Research, and the application of technology in business strategies.'}
            </p>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About