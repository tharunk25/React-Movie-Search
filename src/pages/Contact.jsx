import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page page-transition container">
      <div className="contact-wrapper glass-panel">
        <h1 className="gradient-text">Get in Touch</h1>
        <p className="contact-subtitle">Have questions or suggestions? We'd love to hear from you.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Your message..."
              rows="5"
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
