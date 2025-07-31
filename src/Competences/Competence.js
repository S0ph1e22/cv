import '../Competences/Competence.css'
import Title from '../components/Title'
import Skills from './Skills'

function Competence(){
    return(
        <section className='competence'>
            <div className='container-competence'>
            <Title text='Mes compétences' className="title-competence" />
            <Skills/></div>
        </section>
    )
}

export default Competence