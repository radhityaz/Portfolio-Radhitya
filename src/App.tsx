/// <reference types="vite/client" />
import React, { useState } from "react";

// Enhanced Header Component with refined glassmorphism style
const Header = ({ language, toggleLanguage }: { language: string; toggleLanguage: () => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl shadow-xl border-b border-white/30 fadeIn">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
          Portfolio Radhitya
        </h1>
        <button 
          onClick={toggleLanguage}
          className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 transition-colors duration-300 hover:bg-white/30 text-white font-semibold"
        >
          {language === "en" ? "EN" : "ID"}
        </button>
      </nav>
    </header>
  );
};

// Hero Section with glassmorphism overlay and improved card design using min-h-screen
const HeroSection = ({ language }: { language: string }) => {
  const text = language === "en" 
    ? "Welcome to My Professional Portfolio" 
    : "Selamat Datang di Portofolio Profesional Saya";
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center transition-all duration-1000 fadeIn"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background-campus.png')`, filter: "saturate(2.0) brightness(1.0)" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-10 py-12 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl slideUp">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          {text}
        </h2>
      </div>
    </section>
  );
};

// About Section with glass card, centered text, and refined layout container and padding
const AboutSection = ({ language }: { language: string }) => {
  const aboutText = language === "en" 
    ? "I am Radhitya Guntoro Adhi, an Industrial Engineering student at ITB, driven by a passion for innovative web design and dynamic interfaces. My goal is to blend creativity with professionalism in every project."
    : "Saya Radhitya Guntoro Adhi, mahasiswa Teknik Industri di ITB, dengan passion dalam desain web inovatif dan antarmuka dinamis. Saya bertekad menggabungkan kreativitas dengan profesionalisme di setiap proyek.";
  return (
    <section id="about" className="min-h-screen py-16 bg-gray-900 transition-all duration-1000 slideUp">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-bold text-white mb-6 text-center">About Me</h3>
        <div className="flex flex-col items-center justify-center w-full px-8 py-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
          <p className="text-lg text-gray-200 text-center">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

// Projects Section with glass card, centered text, and refined layout container and padding
const ProjectsSection = ({ language }: { language: string }) => {
  const projectsText = language === "en" 
    ? "My projects reflect creativity, dedication, and a commitment to excellence. Each project is a step towards achieving professional mastery."
    : "Proyek-proyek saya mencerminkan kreativitas, dedikasi, dan komitmen terhadap keunggulan. Setiap proyek adalah langkah untuk mencapai keahlian profesional.";
  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-800 transition-all duration-1000 slideUp">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-bold text-white mb-6 text-center">Projects</h3>
        <div className="flex flex-col items-center justify-center w-full px-8 py-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
          <p className="text-lg text-gray-200 text-center">
            {projectsText}
          </p>
        </div>
      </div>
    </section>
  );
};

// Gallery Section combining background images and a gallery of PNGs
const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-700 transition-all duration-1000 slideUp">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-bold text-white mb-6 text-center">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={import.meta.env.BASE_URL + "background-campus.png"} alt="Background Campus" className="w-full h-auto rounded-lg shadow-lg" />
          <img src={import.meta.env.BASE_URL + "campus-life.png"} alt="Campus Life" className="w-full h-auto rounded-lg shadow-lg" />
          <img src={import.meta.env.BASE_URL + "me.png"} alt="Me" className="w-full h-auto rounded-lg shadow-lg" />
          <img src={import.meta.env.BASE_URL + "profile.png"} alt="Profile" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

// Polished Footer Component with glassmorphism effect
const Footer = ({ language }: { language: string }) => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl py-6 border-t border-white/30 fadeIn">
      <div className="container mx-auto text-center text-gray-400 text-sm">
        &copy; 2025 Radhitya Guntoro Adhi. All rights reserved.
      </div>
    </footer>
  );
};

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "id" : "en"));
  };

  return (
    <div className="flex flex-col">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="pt-24">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ProjectsSection language={language} />
        <GallerySection />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
