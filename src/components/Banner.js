import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
    return (
        <div className="img-banner">
            <img src={logo} alt="img-moi" className="portrait-image-bannner" />
        </div>
    )
}

export default Banner