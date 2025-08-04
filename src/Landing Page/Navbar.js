import { useState } from 'react';
import '../Landing Page/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href='#Accueil' onClick={handleLinkClick}>Accueil</a>
          <a href='#Profil' onClick={handleLinkClick}>Profil</a>
          <a href='#Competences' onClick={handleLinkClick}>Compétences</a>
          <a href='#Portfolio' onClick={handleLinkClick}>Portfolio</a>
          <a href='#Contact' onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
