import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// We no longer need Formspree
// import { useForm, ValidationError } from '@formspree/react';

const LetsTalk = ({ isOpen, onClose }) => {
  // --- 1. Environment Variables ---
  const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
  const whatsAppNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

  // --- 2. State Hooks ---
  const [contactMethod, setContactMethod] = useState('email');
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', message: ''
  });
  
  // Local state for submission
  const [showSuccess, setShowSuccess] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [waData, setWaData] = useState({ name: '', message: '' });

  // --- 3. Handler Functions ---
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWaChange = (e) => {
    const { name, value } = e.target;
    setWaData(prev => ({ ...prev, [name]: value }));
  };

  // NEW Submit logic for Google Sheets
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to send data to URL:", SCRIPT_URL);
    setIsSubmitting(true);
    setSubmitError(null);
    

    // Use FormData to send data
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setIsSubmitting(false);
        setShowSuccess(true); 
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.error);
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      setSubmitError("Error: Could not send message. Please try again.");
      console.error("Error submitting to Google Sheet:", error);
    });
  };

  const handleWaSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Mark-it, I'm ${waData.name}. I'd like to discuss a project: ${waData.message}`;
    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${whatsAppNumber}?text=${encodedMsg}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setContactMethod('email');
      setShowSuccess(false);
      setSubmitError(null);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setWaData({ name: '', message: '' });
    }, 500);
  };

  // --- 4. Animation Variants ---
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const islandVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 } },
    exit: { y: 100, opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  // --- 5. Component JSX (NEW STRUCTURE) ---
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
          {/* --- MOVING DOODLES IN BACKGROUND --- */}
          <div className="doodle doodle-1"></div>
          <div className="doodle doodle-2"></div>
          <div className="doodle doodle-3"></div>
          <div className="doodle doodle-4"></div>
          <div className="doodle doodle-5"></div>

          <button className="close-button" onClick={handleClose}>×</button>
          
          {/* --- THE FLOATING ISLAND --- */}
          <motion.div 
            className="lets-talk-island"
            variants={islandVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="lets-talk-content">
              {showSuccess ? ( 
                <div className="lets-talk-header success-message">
                  <h1>THANK YOU!</h1>
                  <p>Your message has been sent. We'll be in touch soon.</p>
                  <button className="btn-submit" onClick={() => setShowSuccess(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="modal-body-layout">

                  {/* --- Main Content (Left) --- */}
                  <div className="modal-main-content">
                    <div className="lets-talk-header">
                      <h1>{contactMethod === 'email' ? "LET'S TALK" : "CHAT WITH US"}</h1>
                      <p>
                        {contactMethod === 'email' 
                          ? "Fill out the form below, and we'll get back to you soon."
                          : "Send us a quick message on WhatsApp."
                        }
                      </p>
                    </div>

                    <div className="contact-method-toggle">
                      <motion.div 
                        className="active-pill"
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        animate={{ x: contactMethod === 'email' ? '0%' : '100%' }}
                      />
                      <button 
                        className={`toggle-btn ${contactMethod === 'email' ? 'active' : ''}`}
                        onClick={() => setContactMethod('email')}
                      >
                        <MailIcon /> Submit
                      </button>
                      <button 
                        className={`toggle-btn ${contactMethod === 'whatsapp' ? 'active' : ''}`}
                        onClick={() => setContactMethod('whatsapp')}
                      >
                        <WhatsAppIcon /> WhatsApp
                      </button>
                    </div>

                    {contactMethod === 'email' && (
                      <div className="form-wrapper">
                        <div className="form-gradient-border email-active">
                          <form onSubmit={handleEmailSubmit} className="lets-talk-form">
                            <div className="form-section">
                              <h2>CONTACT INFO</h2>
                              <span className="required-fields-small">* REQUIRED FIELDS</span>
                              <div className="form-row">
                                <div className="form-group">
                                  <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleEmailChange} required />
                                  <label htmlFor="fullName">FULL NAME*</label>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group">
                                  <input id="email" type="email" name="email" value={formData.email} onChange={handleEmailChange} required />
                                  <label htmlFor="email">EMAIL*</label>
                                </div>
                                <div className="form-group">
                                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleEmailChange} />
                                  <label htmlFor="phone">NUMBER</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-section">
                              <h2>PROJECT DETAILS</h2>
                              <div className="form-row">
                                <div className="form-group">
                                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleEmailChange}></textarea>
                                  <label htmlFor="message">Tell us about your project...</label>
                                </div>
                              </div>
                            </div>
                            {submitError && (
                              <div className="form-error-google">{submitError}</div>
                            )}
                            <div className="form-submit-row">
                              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

                    {contactMethod === 'whatsapp' && (
                      <div className="form-wrapper">
                        <div className="form-gradient-border whatsapp-active">
                          <form onSubmit={handleWaSubmit} className="lets-talk-form">
                            <div className="form-section">
                              <h2>YOUR INFO</h2>
                              <span className="required-fields-small">* REQUIRED FIELDS</span>
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
                                <label htmlFor="waMessage">Hi, I'd like to talk about...*</label>
                              </div>
                            </div>
                            <div className="form-submit-row">
                              <button type="submit" className="btn-submit btn-whatsapp">
                                Start Chat
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* --- Sidebar (Right) --- */}
                  <div className="modal-sidebar">
                    <div className="social-links">
                      <h3>Follow Us</h3>
                      <p>Find us on our social channels to see our latest work.</p>
                      <a href="https://www.linkedin.com/company/mark-it-24/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                        LinkedIn
                      </a>
                      <a href="https://www.instagram.com/markit.co.in/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                        Instagram
                      </a>
                      <a href="https://www.behance.net/mark-it" target="_blank" rel="noopener noreferrer" className="social-link-item">
                        Behance 
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div> 
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- SVG ICON COMPONENTS ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
    <path d="M1.946 9.315c.522-.174 1.103-.349 1.767-.52 2.898-.651 5.657-.64 8.287 0 .665.17 1.245.346 1.768.52C14.6 9.73 16 11.238 16 13c0 1.762-1.4 3.27-2.28 3.685-.666.17-1.246.345-1.768.52-2.63.64-5.39.65-8.289 0-.664-.175-1.244-.35-1.767-.52C2.4 16.27 1 14.762 1 13c0-1.762 1.4-3.27 2.28-3.685zM16 12.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0 4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm7.18 4.027L14 8.243v7.104l-5.803-3.558z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
    <path d="M15.25 12.25a1 1 0 0 0-1.5 0H12.25a1 1 0 0 0 0 1.5h1.5a1 1 0 0 0 1.5 0V12.25zM12.01 2c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.45 1.26 4.96L2 22l5.25-1.38c1.47.74 3.09.9 4.76.9h.01c5.52 0 9.99-4.47 9.99-9.99S17.53 2 12.01 2zM12.01 20.13h-.01c-1.5 0-2.96-.36-4.29-1.01l-.3-.18-3.18.84.85-3.11-.2-.31c-.74-1.17-1.39-2.92-1.39-4.76 0-4.54 3.68-8.22 8.22-8.22 4.54 0 8.22 3.68 8.22 8.22s-3.68 8.22-8.22 8.22z" />
    <path d="m17.51 14.38-2.1-1.04a.75.75 0 0 0-.87.11l-.72.87c-.15.18-.42.24-.64.17A7.95 7.95 0 0 1 10.4 12.7c-.19-.32-.1-.7.17-.87l.87-.72a.75.75 0 0 0 .11-.87l-1.04-2.1a.75.75 0 0 0-.8-.47h-.14c-1.16.09-2.07.97-2.07 2.07 0 1.09.43 2.14 1.18 2.89s1.8 1.18 2.89 1.18c1.1 0 1.98-.91 2.07-2.07v-.14a.75.75 0 0 0-.47-.8z" />
  </svg>
);

export default LetsTalk;