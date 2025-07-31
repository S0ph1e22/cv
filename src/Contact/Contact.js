import '../Contact/Contact.css'
import Title from '../components/Title'
import Formulaire from './Formulaire'

function Contact (){
    return (
          <section className='contact'>
            <div className='container-contact'>
                <Title text='Contactez-moi' className="title-contact" />
                 <Formulaire/>
            </div>
        </section>
    )
}

export default Contact