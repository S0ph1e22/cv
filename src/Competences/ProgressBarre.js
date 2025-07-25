import '../Competences/ProgressBarre.css';

function ProgressBarre({label, value}) {
    return(
        <div className="progressbarre">
            <span className='progress-name'> {label} </span>
            <div className='progress-barre'>
                <div className='progress-fill' style={{ width: `${value * 100}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBarre