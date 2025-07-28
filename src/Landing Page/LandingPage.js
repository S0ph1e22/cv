import logo from '../assets/logo.png';
import '../Landing Page/LandingPage.css';
import Navbar from './Navbar';

function LandingPage() {
    return (
        <div className="img-landing-page">
            <Navbar />
            <img src={logo} alt="img-landing-page" className="image-landing-page" />
            <div className='info'>
                <h1 className='mon-nom'> Sophie Vincent </h1>
                <p className='mon-job'> Développeur web</p>
            </div>
            <div className='scroll-down'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                </svg>
</div>

        </div>
    )
}

export default LandingPage