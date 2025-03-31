import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import en from '../translations/en.json';
import id from '../translations/id.json';

const translations = { en, id };

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as 'en' | 'id'];

  return (
    <footer className="footer">
      <p>{t.footer.copy}</p>
    </footer>
  );
};

export default Footer;
