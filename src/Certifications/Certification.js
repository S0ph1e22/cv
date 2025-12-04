import { useState, useEffect } from 'react';
import certifications from './CertificationGrid.js';
import '../Certifications/Certification.css';
import Title from '../components/Title.js';
import { useTranslation } from 'react-i18next';

function Certification() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const { t } = useTranslation();

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 768) {
        setVisibleCount(1);      // mobile
      } else if (width <= 1200) {
        setVisibleCount(2);      // tablette
      } else {
        setVisibleCount(3);      // desktop
      }
      setIndex(0); // reset à chaque changement de taille
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(certifications.length / visibleCount);
  const currentPage = Math.floor(index / visibleCount) + 1;

  const prev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - visibleCount;
      if (newIndex < 0) {
        return (totalPages - 1) * visibleCount;
      }
      return newIndex;
    });
  };

  const next = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + visibleCount;
      if (newIndex >= certifications.length) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <>
      <div className="container-title">
        <Title text={t('certificats_title')} className="title-certificats" />
      </div>

      <div className="carousel-container">
        <button onClick={prev} className="carousel-btn">◀</button>

        <div
          className="carousel-track"
          style={{ width: `${visibleCount * 320}px` }} // 300px item + 20px gap approximatif
        >
          {certifications.slice(index, index + visibleCount).map((cert) => (
            <div className="carousel-item" key={cert.id} style={{ width: '300px' }}>
              <img src={cert.image} alt={`certification-${cert.id}`} />
            </div>
          ))}
        </div>

        <button onClick={next} className="carousel-btn">▶</button>
      </div>

      <p className="compteur">
        {currentPage} / {totalPages}
      </p>
    </>
  );
}

export default Certification;
