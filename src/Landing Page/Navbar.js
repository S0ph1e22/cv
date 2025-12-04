import { useState } from 'react';
import '../Landing Page/Navbar.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className='lien-nav'>
      <div className='nav-container'>
        <button className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href='#Accueil' onClick={handleLinkClick}>{t('about_accueil')}</a>
          <a href='#Profil' onClick={handleLinkClick}>{t('about_profil')}</a>
          <a href='#Competences' onClick={handleLinkClick}>{t('skills_title')}</a>
          <a href='#Certifications' onClick={handleLinkClick}>{t('certifications_title')}</a>
          <a href='#Portfolio' onClick={handleLinkClick}>{t('about_portfolio')}</a>
          <a href='#Contact' onClick={handleLinkClick}>{t('contact_title')}</a>          
        </div>
        <div className="lang-switch">
        <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
