import '../styles/App.css';
import LandingPage from '../Landing Page/LandingPage';
import Navbar from '../Navigation/Navbar';
import TxtAPropos from '../A propos/TxtAPropos';
import ImgCard from '../A propos/ImgCard';
import Title from './Title';
import Skills from '../Competences/Skills';
import portrait from '../assets/portrait.png';
import cv from '../assets/porsche.png'

function App() {
  return (
    <div>
      <div className='landingPage'>
          <LandingPage/>
      </div>

      <div id='Accueil' className='navigation'>
          <Navbar />
      </div>

      <div className='title-a-propos'>
          <Title />
      </div>

      <div id = 'Profil' className='a-propos'>
          <ImgCard imageSrc={portrait} altText='Image 1' />
          <TxtAPropos />
      </div>

      <div id='Competences' className='competences'>
          <Skills/>
          <ImgCard imageSrc={cv} altText='Image 2' />

      </div>
    </div>
  );
}

export default App;
