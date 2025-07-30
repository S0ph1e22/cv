import '../styles/App.css';
import LandingPage from '../Landing Page/LandingPage';
import APropos from '../A propos/APropos';
import Competence from '../Competences/Competence';


import Title from './Title';
import ProjetGrid from '../Portfolio/ProjetGrid';
import Portfolio from '../Portfolio/Portfolio';


function App() {
  return (
    <div>

      <div id='Accueil'>
          <LandingPage/> 
      </div>

      <div id = 'Profil' >
         <APropos/>
      </div>

      <div id='Competences'>
        <Competence/>
      </div>

      <div id='Portfolio'>
        <Portfolio />
        
      </div>

      <div id='Contact' className='contact'>
        <Title text='Contactez-moi' backgroundColor='#FAF2EA'/>
      </div>
    </div>
  );
}

export default App;
