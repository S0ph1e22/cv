import '../Competences/ProgressBarre.css';
import { useEffect, useRef, useState } from 'react';

function ProgressBarre({label, percent}) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

    return(
        <div className="progressbarre"ref={ref}>
            <span className='progress-name'> {label} </span>
            <div className='progress-barre'>
                <div className='progress-fill' style={{ width: visible ? `${percent}%` : '0%' }}>
                     <span className='progress-text'>{percent}%</span>
                </div>
               
            </div>
        </div>
    )
}

export default ProgressBarre