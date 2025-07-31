import '../Contact/Formulaire.css'
import { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";



function Formulaire(){
    const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux envoyer les données à une API ou par email
    console.log(formData);
    setSuccess(true);
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
        {success && <p className="success-msg">Message envoyé avec succès !</p>}
      </form>
      <div className='info-contact'>
        <p className='tel'>
            <FiPhoneCall />
             +33 6 16 53 55 79</p>
        <p className='email'>
            <MdOutlineMailOutline />
            sophievincent25@sfr.fr </p>
      </div>
    </div>
  );
}

export default Formulaire