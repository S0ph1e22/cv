import TxtAPropos from '../A propos/TxtAPropos';
import '../Landing Page/LandingPage.css';
import DownloadButton from './DownloadButton';
import Navbar from './Navbar';
import { FaGithub} from 'react-icons/fa';

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />

            <div className='info'>
                <h1 className='mon-nom'> Sophie Vincent </h1>
                <p className='mon-job'> Développeur web</p>
            </div>

            <div className="section-txt">
                <TxtAPropos variant="special">
                Mini texte de présentation rapide ou pas
                </TxtAPropos>
            </div>

           <div className="section-github">
                <a
                    href="https://github.com/S0ph1e22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                    >
                     <FaGithub />
                    GitHub
                </a>
                <DownloadButton />
            </div>
        </div>
    )
}

export default LandingPage