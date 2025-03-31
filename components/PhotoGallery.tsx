'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const PhotoGallery = () => {
  const images = [
    '/me.png',
    '/profile.png',
    '/jadwalinae-project.svg',
    '/restorify-project.svg',
    '/sungaikita-project.svg'
  ]

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold mb-6 dark:text-white text-center">My Moments</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt="Gallery photo"
              fill
              className="object-cover hover:opacity-90 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PhotoGallery