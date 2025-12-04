import Title from "../components/Title";
import ImgCard from "./ImgCard";
import TxtAPropos from "./TxtAPropos";
import portrait from '../assets/portrait.png';
import '../A propos/APropos.css'
import '../A propos/TxtAPropos.css'
import { useTranslation } from 'react-i18next';

function APropos(){
    const { t } = useTranslation();

    return(
        <section className="section-a-propos">
            <div className="content-a-propos">
                <ImgCard imageSrc={portrait}/>
                <TxtAPropos variant="normal">
                    <Title text={t('aboutme_title')} className="title-apropos" />
                    <p> {t('aboutme_description')} </p>
                </TxtAPropos>
            </div>
        </section>
    )
}

export default APropos