import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "TechStart Brand Launch",
      category: "Branding & Digital Strategy",
      description: "Complete brand identity and digital marketing strategy for a tech startup, resulting in 300% increase in brand awareness.",
      results: ["300% Brand Awareness", "150% Lead Generation", "200% Social Engagement"]
    },
    {
      title: "E-commerce Growth Campaign",
      category: "PPC & Social Media",
      description: "Multi-channel marketing campaign for online retailer, driving significant revenue growth through targeted advertising.",
      results: ["250% ROI", "400% Sales Increase", "180% Customer Acquisition"]
    },
    {
      title: "Local Business SEO",
      category: "SEO & Content Marketing",
      description: "Local SEO optimization and content strategy for restaurant chain, improving local search visibility.",
      results: ["500% Local Visibility", "320% Website Traffic", "150% Foot Traffic"]
    },
    {
      title: "SaaS Product Launch",
      category: "Digital Strategy & Content",
      description: "Comprehensive launch strategy for B2B SaaS platform, focusing on thought leadership and lead generation.",
      results: ["1000+ Qualified Leads", "50% Conversion Rate", "250% Pipeline Growth"]
    }
  ];

  return (
    <motion.div 
      className="page projects"
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
          <h1>Our Projects</h1>
          <p>Success stories from our amazing clients</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-results">
                <h4>Results:</h4>
                <ul>
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex}>{result}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
