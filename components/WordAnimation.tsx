'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface WordAnimationProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

const WordAnimation = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
}: WordAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const words = text.split(' ')

  return (
    <div ref={containerRef} className={`word-animation ${className}`}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: 'easeOut',
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default WordAnimation