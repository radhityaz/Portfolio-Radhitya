import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import en from '../translations/en.json';
import id from '../translations/id.json';

const translations = { en, id };

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as 'en' | 'id'];

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>{t.nav.home}</li>
        <li>{t.nav.about}</li>
        <li>{t.nav.skills}</li>
        <li>{t.nav.projects}</li>
        <li>{t.nav.experience}</li>
        <li>{t.nav.contact}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
