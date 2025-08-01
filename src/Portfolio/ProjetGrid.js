import "./ProjetGrid.css";
import projets from "./Projets";
import { FaGithub } from "react-icons/fa";

function ProjetGrid() {

  return (
    <div className="grid">
          {projets.map((projet, index) => (
            <div 
            key={projet.id} 
            className={`projet-row ${index % 2 === 0 ? "image-left" : "image-right"}`}
            >
         <div className="projet-image">
          <div className="projet-card">
            <img src={projet.image} alt={`Projet ${projet.id}`} />
            <div className="technos">
              <div className="tech-icons">
                {projet.technos.map((IconComp, i) => (
                  <IconComp key={i} className="tech-icon" />
                ))}
              </div>
              <a
                href={projet.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github-projet"
                title="Voir le code sur GitHub"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className={`projet-texte ${index % 2 === 0 ? "texte-noir" : "texte-blanc"}`}>
            <h3>
             <a
                  className={`lien-cliquable ${index % 2 === 0 ? "lien-noir" : "lien-blanc"}`}
                  href={projet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {projet.lien}
              </a>
            </h3>
            <p className="projet-description">{projet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjetGrid;
