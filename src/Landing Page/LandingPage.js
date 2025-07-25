import logo from '../assets/logo.png';
import '../Landing Page/LandingPage.css';

function LandingPage() {
    return (
        <div className="img-landing-page">
            <img src={logo} alt="img-landing-page" className="image-landing-page" />
        </div>
    )
}

export default LandingPage