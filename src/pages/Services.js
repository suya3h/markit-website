import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals.",
      features: ["Market Research", "Competitor Analysis", "Strategic Planning", "Performance Tracking"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all major social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      title: "SEO & Content",
      description: "Improve your search rankings with optimized content and SEO strategies.",
      features: ["Keyword Research", "Content Writing", "Technical SEO", "Link Building"]
    },
    {
      title: "PPC Advertising",
      description: "Targeted paid advertising campaigns that deliver measurable results.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"]
    },
    {
      title: "Brand Design",
      description: "Create compelling visual identities that resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Web Design"]
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance.",
      features: ["Performance Tracking", "Custom Dashboards", "Monthly Reports", "ROI Analysis"]
    }
  ];

  return (
    <motion.div 
      className="page services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive marketing solutions to grow your business</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
