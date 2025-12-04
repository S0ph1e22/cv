import '../Landing Page/LandingPage.css';
import DownloadButton from './DownloadButton';
import Navbar from './Navbar';
import { FaGithub} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function LandingPage() {
    const { t } = useTranslation();

    return (
        <div className="landing-page">
            <Navbar />

            <div className='info'>
                <h1 className='mon-nom'> Sophie Vincent </h1>
                <p className='mon-job'> {t('job_title')}</p>
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