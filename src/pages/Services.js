import React from 'react';
import { motion } from 'framer-motion';

// Import your actual assets (same as Home page)
import icon1 from '../assets/brand-bg.webp';
import icon2 from '../assets/Digital-bg.webp';
import icon3 from '../assets/web-bg.webp';
import icon4 from '../assets/content-bg.webp';
import icon5 from '../assets/email-bg.webp';
import icon6 from '../assets/omni-bg.webp';

const servicesList = [
  {
    title: "Brand Design",
    description: "Your brand is more than just a logo; it's the feeling you evoke. We craft cohesive visual identities that tell your story, resonate with your audience, and set you apart in a crowded marketplace.",
    icon: icon1,
    details: ["Logo Design & Visual Identity", "Brand Strategy & Positioning", "Packaging & Merchandising", "Brand Guidelines"]
  },
  {
    title: "Digital Marketing",
    description: "Stop guessing and start growing. We deploy data-backed strategies across Meta, Google, and beyond to put your brand in front of the right people at the right time, maximizing your ROI.",
    icon: icon2,
    details: ["PPC & Performance Marketing", "Social Media Advertising", "Campaign Management", "Data Analytics & Reporting"]
  },
  {
    title: "Web Development & SEO",
    description: "Your website is your 24/7 salesperson. We build lightning-fast, visually stunning websites optimized for search engines and conversions, ensuring your digital storefront works as hard as you do.",
    icon: icon3,
    details: ["Custom Website Design", "E-commerce Solutions", "Technical & On-Page SEO", "Speed Optimization"]
  },
  {
    title: "UGC & Content Creation",
    description: "Authenticity drives sales. We produce high-quality, engaging content and leverage User Generated Content (UGC) to build trust, spark conversations, and turn viewers into loyal community members.",
    icon: icon4,
    details: ["Short-Form Video Production", "UGC Campaigns", "Product Photography", "Creative Copywriting"]
  },
  {
    title: "Email Marketing",
    description: "Unlock the power of your existing audience. We design personalized email flows and newsletters that nurture leads, increase customer retention, and drive repeat revenue on autopilot.",
    icon: icon5,
    details: ["Automated Drip Campaigns", "Newsletter Design", "List Segmentation", "A/B Testing & Optimization"]
  },
  {
    title: "Omni-Presence Marketing",
    description: "Be everywhere your customers are. We create a unified strategy that connects your social media, website, and email channels into one seamless ecosystem, amplifying your brand's voice across the digital landscape.",
    icon: icon6,
    details: ["Cross-Channel Strategy", "Retargeting Ecosystems", "Consistent Brand Messaging", "Audience Growth Tactics"]
  }
];

const Services = ({ onLetsTalkOpen }) => {
  return (
    <div className="page services-page">
      
      {/* --- Hero Section --- */}
      <section className="services-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Our Expertise. <span className="highlight">Your Growth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't believe in <span className="highlight">one-size-fits-all </span>. We build tailored digital ecosystems designed to scale your business.
          </motion.p>
        </div>
      </section>

      {/* --- Detailed Services Grid --- */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-detailed-grid">
            {servicesList.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-detailed-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-card-header">
                  <div className="service-icon-large" style={{ backgroundImage: `url(${service.icon})` }}></div>
                  <h3>{service.title}</h3>
                </div>

                {/* --- NEW WRAPPER FOR DROPDOWN EFFECT --- */}
                <div className="service-content-hidden">
                  <p>{service.description}</p>
                  
                  <ul className="service-tags">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>

                  <button onClick={onLetsTalkOpen} className="btn-text-link">
                    Get Started →
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section ---
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1}}
             
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to dominate your market?</h2>
            <p>Let's build a strategy that works as hard as you do.</p>
            <button onClick={onLetsTalkOpen} className="btn btn-primary">
              Book a Free Strategy Call
            </button>
          </motion.div>
        </div>
      </section> */}

    </div>
  );
};

export default Services;