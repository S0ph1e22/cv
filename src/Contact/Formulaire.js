import '../Contact/Formulaire.css';
import { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

emailjs.init('rLy8O5saW39xVGzzpr2mh');

function Formulaire() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formData,
    process.env.REACT_APP_EMAILJS_USER_ID
  )

    .then(() => {
      setSuccess(true);
      setError(false);
      setFormData({ nom: '', email: '', message: '' });
    })
    .catch(() => {
      setError(true);
      setSuccess(false);
    });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nom"
          placeholder={t('name_placeholder')} 
          value={formData.nom}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity(t('contact_required_name'))}
          onInput={(e) => e.target.setCustomValidity('')}
        />
        <input
          type="email"
          name="email"
          placeholder={t('email_placeholder')} 
          value={formData.email}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity(t('contact_required_email'))}
          onInput={(e) => e.target.setCustomValidity('')}
        />
        <textarea
          name="message"
          placeholder={t('message_placehoder')} 
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity(t('contact_required_message'))}
          onInput={(e) => e.target.setCustomValidity('')}
        />
        <button type="submit">{t('btn_send')} </button>
        {success && <p className="success-msg">{t('contact_success')}</p>}
        {error && <p className="error-msg">{t('contact_error')}</p>}
      </form>
      
      <div className='info-contact'>
        <p className='tel'>
          <FiPhoneCall />
          +33 6 16 53 55 79
        </p>
        <p className='email'>
          <MdOutlineMailOutline />
          sophievincent25@sfr.fr
        </p>
      </div>
    </div>
  );
}

export default Formulaire;
