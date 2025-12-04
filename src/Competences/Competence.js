import '../Competences/Competence.css'
import Title from '../components/Title'
import Skills from './Skills'
import { useTranslation } from 'react-i18next';

function Competence(){
    const { t } = useTranslation();

    return(
        <section className='competence'>
            <div className='container-competence'>
            <Title text={t('myskills_title')} className="title-competence" />
            <Skills/></div>
        </section>
    )
}

export default Competence