import '../Competences/ProgressBarre.css';

function ProgressBarre({label, percent}) {

    let fillColor = '';

    if (percent < 40) {
        fillColor = '#f44336';
    } else if (percent < 70) {
        fillColor = '#ff9800'; 
    } else {
        fillColor = '#4caf50';
    }

    return(
        <div className="progressbarre">
            <span className='progress-name'> {label} </span>
            <div className='progress-barre'>
                <div className='progress-fill' style={{ width: `${percent}%`, backgroundColor: fillColor}}>
                     <span className='progress-text'>{percent}%</span>
                </div>
               
            </div>
        </div>
    )
}

export default ProgressBarre