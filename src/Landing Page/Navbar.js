import '../Landing Page/Navbar.css';
import DownloadButton from './DownloadButton';

function Navbar() {
    return (
        <nav className='lien-nav'>
            <div className='nav-container'>
                <DownloadButton />
                <a href='#Accueil'>Accueil</a>
                <a href='#Profil'>Profil</a>
                <a href='#Competences'>Compétences</a>
                <a href='#Portfolio'>Portfolio</a>
                <a href='#Contact'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar