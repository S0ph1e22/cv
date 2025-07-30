import '../Portfolio/Portfolio.css'
import Title from '../components/Title'
import ProjetGrid from './ProjetGrid'

function Portfolio(){
    return (
        <section className='portfolio'>
            <div className='container-title'>
                <Title text='Mes projets' className="title-portfolio" />
            </div>
            <div className='container-projet'>
                <ProjetGrid/>
            </div>
        </section>
    )
}

export default Portfolio