import '../Landing Page/DownloadButton.css'
import { FaCloudDownloadAlt  } from 'react-icons/fa';

function DownloadButton() {
  return (
    <a 
    href="/Sophie Vincent.pdf" 
    download className="btn-download"
    title="Télécharger mon CV"
    >
    <FaCloudDownloadAlt />
    CV
    </a>
  )
}

export default DownloadButton