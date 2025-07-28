import '../styles/App.css';
import LandingPage from '../Landing Page/LandingPage';
import TxtAPropos from '../A propos/TxtAPropos';
import ImgCard from '../A propos/ImgCard';
import Title from './Title';
import Skills from '../Competences/Skills';
import portrait from '../assets/portrait.png';
import cv from '../assets/cv.png'
import DownloadButton from '../Competences/DownloadButton';

function App() {
  return (
    <div>
      <div id='Accueil' className='landingPage'>
          <LandingPage/> 
      </div>

      <div className='title'>
        <Title text = 'A propos de moi' />
      </div>

      <div id = 'Profil' className='a-propos'>
          <ImgCard imageSrc={portrait} altText='Image 1' />
          <TxtAPropos />
      </div>

      <div className='title-competences'>
        <Title text = 'Mes compétences' backgroundColor= '#E0F7FA'/>
      </div>

      <div id='Competences' className='competences'>
          <Skills/>
          <div className='cv-btn'>
            <ImgCard imageSrc={cv} altText='Image 2' width="350px" height="auto" />
            <DownloadButton />
          </div>
      </div>

      <div id='Portfolio' className='portfolio'>
        <Title text='Portfolio'backgroundColor='#F7F6CF'/>

      </div>
    </div>
  );
}

export default App;
