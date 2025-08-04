import '../Competences/Skills.css';
import ProgressBarre from './ProgressBarre';

function Skills () {
    const backendSkills = [
        { label: 'PHP', value:0.65},
        { label: 'Python', value:0.65},
        { label: 'Django', value:0.65},
        { label: 'MySQL', value:0.65},
        { label: 'Node.js', value:0.7},
    ]

    const frontendSkills = [
        { label: 'Bootstrap', value:0.6},
        { label: 'CSS/SCSS', value:0.7},
        { label: 'React.js', value:0.7},
        { label: 'JavaScript / JQuery', value:0.75},
        { label: 'HTML', value:0.8},
    ]

    const cmsSkills = [
        {label: 'Wordpress', value: 0.7},
    ]

    const outilsSkills =[
        {label: 'Git/Github', value:0.7},
        {label: 'VS Code', value:0.85},
    ]
    

    return (
        <section id='Competences' className='competence-section'>
            <div className='competence-backend'>
                <h3> Back-end </h3>
                {backendSkills.map((skill,index)=> (
                    <ProgressBarre
                        key={`backend-${index}`} 
                        label={skill.label} 
                        percent={Math.round(skill.value * 100)} />
                ))}
            </div>

            <div className="competence-frontend">
                <h3>Front-end</h3>
                {frontendSkills.map((skill, index) => (
            <ProgressBarre 
                key={`frontend-${index}`} 
                label={skill.label} 
                percent={Math.round(skill.value * 100)} />
            ))}
            </div>

            <div className='cms'>
                <h3> CMS </h3>
                {cmsSkills.map((skill, index) => (
            <ProgressBarre 
                key={`frontend-${index}`} 
                label={skill.label} 
                percent={Math.round(skill.value * 100)} />
            ))}
            </div>

              <div className='outils'>
                <h3> Outils </h3>
                {outilsSkills.map((skill, index) => (
            <ProgressBarre 
                key={`frontend-${index}`} 
                label={skill.label} 
                percent={Math.round(skill.value * 100)} />
            ))}
            </div>

        </section>
    )
}

export default Skills