import '../Landing Page/DownloadButton.css'
import { FaCloudDownloadAlt  } from 'react-icons/fa';

function DownloadButton() {
  return (
    <a 
    href="/monCv.pdf" 
    download className="btn-download"
    title="Télécharger mon CV"
    >
    <FaCloudDownloadAlt />
    CV
    </a>
  )
}

export default DownloadButton