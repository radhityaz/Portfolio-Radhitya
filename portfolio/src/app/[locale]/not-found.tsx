'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function LocalizedNotFound() {
  const { locale } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 mb-6">
          {locale === 'en' ? 'This page could not be found.' : 'Halaman tidak ditemukan.'}
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          {locale === 'en' 
            ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
            : 'Halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.'}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/${locale}`} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium shadow-lg inline-block">
            {locale === 'en' ? 'Go Back Home' : 'Kembali ke Beranda'}
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-600/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
