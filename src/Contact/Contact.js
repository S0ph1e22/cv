import '../Contact/Contact.css'
import Title from '../components/Title'
import Formulaire from './Formulaire'
import { useTranslation } from 'react-i18next';

function Contact (){
    const { t } = useTranslation();

    return (
          <section className='contact'>
            <div className='container-contact'>
                <Title text={t('contactme_title')} className="title-contact" />
                 <Formulaire/>
            </div>
        </section>
    )
}

export default Contact