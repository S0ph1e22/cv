import Title from "../components/Title";
import ImgCard from "./ImgCard";
import TxtAPropos from "./TxtAPropos";
import portrait from '../assets/portrait.png';
import '../A propos/APropos.css'
import '../A propos/TxtAPropos.css'

function APropos(){
    return(
        <section className="section-a-propos">
            <div className="content-a-propos">
                <ImgCard imageSrc={portrait}/>
                <TxtAPropos variant="normal">
                    <Title text='A propos de moi' className="title-apropos" />
                    <p> Développeuse web full-stack junior, je conçois des sites et applications en alliant front-end et back-end.
                        Formée aux technologies telles que HTML, CSS, JavaScript, React, ainsi que Node.js et MongoDB, j’aime créer des applications claires, efficaces et agréables à utiliser, du design à la logique métier.
                        J’aime relever des défis techniques, apprendre de nouvelles technologies et construire des projets de A à Z.
                        Curieuse, rigoureuse et autonome, je suis à la recherche d’une opportunité pour contribuer à des projets concrets au sein d’une équipe dynamique. 
                    </p>
                </TxtAPropos>
            </div>
        </section>
    )
}

export default APropos