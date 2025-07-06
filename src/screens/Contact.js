import React, { useState } from 'react';
import '../styles/Contact.css';
import { translations } from '../data/translations';

const Contact = ({ language = 'tr' }) => {
  const t = translations[language] || translations.tr;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({
      show: true,
      message,
      type
    });
    
    // Hide notification after 4 seconds
    setTimeout(() => {
      setNotification({
        show: false,
        message: '',
        type: 'success'
      });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification(t.contact.successMessage);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        showNotification(t.contact.errorMessage, 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification(t.contact.errorMessage, 'error');
    }
  };

  return (
    <section id="contact" className="contact">
      {/* Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="notification-message">{notification.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotification({ show: false, message: '', type: 'success' })}
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <div className="container">
        <h2>{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>{t.contact.email}</h3>
              <p>selincifci35@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>{t.contact.address}</h3>
              <p>{t.contact.addressValue}</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t.contact.subject}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.message}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {t.contact.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
