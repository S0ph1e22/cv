import '../Landing Page/Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > window.innerHeight - 50); // déclenche après la landing
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`lien-nav ${scrolled ? 'scrolled' : ''}`}>
            <a href='#Accueil'>Accueil</a>
            <a href='#Profil'>Profil</a>
            <a href='#Competences'>Compétences</a>
            <a href='#Portfolio'>Portfolio</a>
            <a href='#Contact'>Contact</a>
        </nav>
    )
}

export default Navbar