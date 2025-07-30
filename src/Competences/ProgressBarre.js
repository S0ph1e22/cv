import '../Competences/ProgressBarre.css';

function ProgressBarre({label, percent}) {
    return(
        <div className="progressbarre">
            <span className='progress-name'> {label} </span>
            <div className='progress-barre'>
                <div className='progress-fill' style={{ width: `${percent}%`}}>
                     <span className='progress-text'>{percent}%</span>
                </div>
               
            </div>
        </div>
    )
}

export default ProgressBarre