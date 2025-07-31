import '../Competences/Skills.css';
import ProgressBarre from './ProgressBarre';

function Skills () {
    const backendSkills = [
        { label: 'Node.js', value:0.7},
        { label: 'PHP', value:0.3},
        { label: 'Python', value:0.3},
        { label: 'Django', value:0.3},
        { label: 'MySQL', value:0.3},
    ]

    const frontendSkills = [
        { label: 'HTML', value:0.7},
        { label: 'CSS/SCSS', value:0.5},
        { label: 'JavaScript / JQuery', value:0.5},
        { label: 'React.js', value:0.5},
    ]

    const cmsSkills = [
        {label: 'Wordpress', value: 0.7},
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

        </section>
    )
}

export default Skills