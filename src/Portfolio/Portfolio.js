import '../Portfolio/Portfolio.css'
import Title from '../components/Title'
import ProjetGrid from './ProjetGrid'
import { useTranslation } from 'react-i18next';

function Portfolio(){
    const { t } = useTranslation();

    return (
        <section className='portfolio'>
            <div className='container-title'>
                <Title text={t('project_title')} className="title-portfolio" />
            </div>
            <div className='container-projet'>
                <ProjetGrid/>
            </div>
        </section>
    )
}

export default Portfolio