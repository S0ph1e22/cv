import '../Competences/Skills.css';
import ProgressBarre from './ProgressBarre';

function Skills () {
    const backendSkills = [
        { label: 'Node.js', value:0.7},
        { label: 'PHP', value:0.3}
    ]

    const frontendSkills = [
        { label: 'HTML', value:0.7},
        { label: 'CSS', value:0.7},
    ]

    return (
        <section id='Competences' className='competence-section'>
            <h1> Mes compétences </h1>

            <div className='competence-backend'>
                <h3> Back-end </h3>
                {backendSkills.map((skill,index)=> (
                    <ProgressBarre key={`backend-${index}`} label={skill.label} value={skill.value} />
                ))}
            </div>
            <div className="competence-frontend">
                <h3>Front-end</h3>
                {frontendSkills.map((skill, index) => (
            <ProgressBarre key={`frontend-${index}`} label={skill.label} value={skill.value} />
            ))}
            </div>
        </section>
    )
}

export default Skills