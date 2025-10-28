import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const LetsTalk = ({ isOpen, onClose }) => {
  // --- STATE FOR TOGGLE ---
  const [contactMethod, setContactMethod] = useState('email'); // 'email' or 'whatsapp'

  // --- STATE FOR EMAIL FORM (WITH VALIDATION) ---
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [validationError, setValidationError] = useState(null);
  const [state, handleSubmit] = useForm(process.env.Markit_FORMSPREE_ID); // <-- Put your Formspree ID here

  // --- STATE FOR WHATSAPP FORM ---
  const [waData, setWaData] = useState({
    name: '',
    message: ''
  });

  // --- HANDLERS FOR EMAIL FORM ---
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailValidateAndSubmit = (e) => {
    e.preventDefault();
    if (!formData.email && !formData.phone) {
      setValidationError("Please provide either an Email or a Phone Number.");
      return;
    }
    setValidationError(null);
    handleSubmit(e); // Submit to Formspree
  };

  // --- HANDLERS FOR WHATSAPP FORM ---
  const handleWaChange = (e) => {
    const { name, value } = e.target;
    setWaData(prev => ({ ...prev, [name]: value }));
  };

  const handleWaSubmit = (e) => {
    e.preventDefault();
    
    // --- !! IMPORTANT !! ---
    // --- REPLACE THIS WITH YOUR FULL WHATSAPP NUMBER (including country code, no + or 00) ---
    const whatsAppNumber = "1234567890"; // e.g., 919876543210 for an Indian number

    const msg = `Hello Mark-it, I'm ${waData.name}. I'd like to discuss a project: ${waData.message}`;
    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${whatsAppNumber}?text=${encodedMsg}`;
    
    window.open(url, '_blank'); // Open WhatsApp in a new tab
    onClose(); // Close the modal
  };

  // --- Reset forms when modal closes ---
  const handleClose = () => {
    onClose();
    // A small delay to allow exit animation to finish
    setTimeout(() => {
      setContactMethod('email');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setWaData({ name: '', message: '' });
      setValidationError(null);
      // Note: We can't easily reset Formspree 'state.succeeded' but
      // it will be reset when the component unmounts and remounts.
    }, 500);
  };

  const modalVariants = {
    hidden: { y: '100vh', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { y: '100vh', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lets-talk-overlay"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="close-button" onClick={handleClose}>×</button>
          
          <div className="lets-talk-content">
            {state.succeeded ? (
              // --- EMAIL SUCCESS MESSAGE ---
              <div className="lets-talk-header success-message">
                <h1>THANK YOU!</h1>
                <p>Your message has been sent. We'll be in touch soon.</p>
                <button className="btn btn-submit" onClick={handleClose}>Close</button>
              </div>
            ) : (
              // --- TOGGLE AND FORMS ---
              <>
                <div className="contact-method-toggle">
                  <button 
                    className={`toggle-btn ${contactMethod === 'email' ? 'active' : ''}`}
                    onClick={() => setContactMethod('email')}
                  >
                    <MailIcon /> Email Us
                  </button>
                  <button 
                    className={`toggle-btn ${contactMethod === 'whatsapp' ? 'active' : ''}`}
                    onClick={() => setContactMethod('whatsapp')}
                  >
                    <WhatsAppIcon /> Chat on WhatsApp
                  </button>
                </div>

                {/* --- EMAIL FORM (Formspree) --- */}
                {contactMethod === 'email' && (
                  <div className="form-wrapper">
                    <div className="lets-talk-header">
                      <h1>LET'S TALK</h1>
                      <p>Fill out the form below, and we'll get back to you as soon as possible.</p>
                      <span>* REQUIRED FIELDS</span>
                    </div>
                    <form onSubmit={handleEmailValidateAndSubmit} className="lets-talk-form">
                      <div className="form-section">
                        <h2>CONTACT INFO</h2>
                        <div className="form-row">
                          <div className="form-group">
                            <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleEmailChange} required />
                            <label htmlFor="firstName">FIRST NAME*</label>
                          </div>
                          <div className="form-group">
                            <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleEmailChange} required />
                            <label htmlFor="lastName">LAST NAME*</label>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <input id="email" type="email" name="_replyto" value={formData.email} onChange={handleEmailChange} />
                            <label htmlFor="email">EMAIL</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                          </div>
                          <div className="form-group">
                            <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleEmailChange} />
                            <label htmlFor="phone">PHONE</label>
                          </div>
                        </div>
                        {validationError && <div className="form-error">{validationError}</div>}
                      </div>
                      <div className="form-section">
                        <h2>PROJECT DETAILS</h2>
                        <div className="form-group">
                          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleEmailChange}></textarea>
                          <label htmlFor="message">Tell us about your project...</label>
                        </div>
                      </div>
                      <div className="form-submit-row">
                        <button type="submit" className="btn btn-submit" disabled={state.submitting}>
                          {state.submitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* --- WHATSAPP FORM (wa.me link) --- */}
                {contactMethod === 'whatsapp' && (
                  <div className="form-wrapper">
                    <div className="lets-talk-header">
                      <h1>CHAT WITH US</h1>
                      <p>Send us a quick message on WhatsApp, and we'll reply right away.</p>
                    </div>
                    <form onSubmit={handleWaSubmit} className="lets-talk-form">
                      <div className="form-section">
                        <h2>YOUR INFO</h2>
                        <div className="form-row">
                          <div className="form-group">
                            <input id="waName" type="text" name="name" value={waData.name} onChange={handleWaChange} required />
                            <label htmlFor="waName">YOUR NAME*</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-section">
                        <h2>YOUR MESSAGE</h2>
                        <div className="form-group">
                          <textarea id="waMessage" name="message" rows="4" value={waData.message} onChange={handleWaChange} required></textarea>
                          <label htmlFor="waMessage">Hi, I'd like to talk about...</label>
                        </div>
                      </div>
                      <div className="form-submit-row">
                        <button type="submit" className="btn btn-submit btn-whatsapp">
                          Start Chat
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- SVG ICON COMPONENTS (Place these at the bottom of the file) ---

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.946 9.315c.522-.174 1.103-.349 1.767-.52 2.898-.651 5.657-.64 8.287 0 .665.17 1.245.346 1.768.52C14.6 9.73 16 11.238 16 13c0 1.762-1.4 3.27-2.28 3.685-.666.17-1.246.345-1.768.52-2.63.64-5.39.65-8.289 0-.664-.175-1.244-.35-1.767-.52C2.4 16.27 1 14.762 1 13c0-1.762 1.4-3.27 2.28-3.685zM16 12.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0 4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm7.18 4.027L14 8.243v7.104l-5.803-3.558z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.25 12.25a1 1 0 0 0-1.5 0H12.25a1 1 0 0 0 0 1.5h1.5a1 1 0 0 0 1.5 0V12.25zM12.01 2c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.45 1.26 4.96L2 22l5.25-1.38c1.47.74 3.09.9 4.76.9h.01c5.52 0 9.99-4.47 9.99-9.99S17.53 2 12.01 2zM12.01 20.13h-.01c-1.5 0-2.96-.36-4.29-1.01l-.3-.18-3.18.84.85-3.11-.2-.31c-.74-1.17-1.39-2.92-1.39-4.76 0-4.54 3.68-8.22 8.22-8.22 4.54 0 8.22 3.68 8.22 8.22s-3.68 8.22-8.22 8.22z" />
    <path d="m17.51 14.38-2.1-1.04a.75.75 0 0 0-.87.11l-.72.87c-.15.18-.42.24-.64.17A7.95 7.95 0 0 1 10.4 12.7c-.19-.32-.1-.7.17-.87l.87-.72a.75.75 0 0 0 .11-.87l-1.04-2.1a.75.75 0 0 0-.8-.47h-.14c-1.16.09-2.07.97-2.07 2.07 0 1.09.43 2.14 1.18 2.89s1.8 1.18 2.89 1.18c1.1 0 1.98-.91 2.07-2.07v-.14a.75.75 0 0 0-.47-.8z" />
  </svg>
);

export default LetsTalk;