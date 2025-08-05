import '../styles/App.css';
import LandingPage from '../Landing Page/LandingPage';
import APropos from '../A propos/APropos';
import Competence from '../Competences/Competence';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Certification from '../Certifications/Certification.js'

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

      <div id='Certifications'>
          <Certification/>
      </div>

      <div id='Portfolio'>
        <Portfolio />
      </div>

      <div id='Contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
