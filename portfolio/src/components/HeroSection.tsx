import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import en from '../translations/en.json';
import id from '../translations/id.json';

const translations = { en, id };

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as 'en' | 'id'];

  return (
    <section className="hero">
      <h1>{t.hero.greeting}</h1>
      <p>{t.hero.description}</p>
    </section>
  );
};

export default HeroSection;
