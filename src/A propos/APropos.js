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
                    <p> texte description moi, border a virer </p>
                </TxtAPropos>
            </div>
        </section>
    )
}

export default APropos