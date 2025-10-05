import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted for: ${email}`);
    setEmail('');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-brand">Mavrick Productions</h2>
          <p className="contact-tagline">
            Professional photography and videography Services.
          </p>
          
          <div className="social-icons">
            <a href="#instagram" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#linkedin" className="social-icon" aria-label="LinkedIn">💼</a>
            <a href="#whatsapp" className="social-icon" aria-label="WhatsApp">💬</a>
          </div>

          <div className="contact-details">
            <h3 className="contact-heading">GET IN TOUCH</h3>
            <p className="contact-phone">+917426811626</p>
            <p className="contact-email">info@mavrickproductions.com</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form">
            <label className="form-label">Your Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="form-input"
            />
            <button onClick={handleSubmit} className="form-button">
              Submit Your Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;