import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "10+ years in digital marketing with expertise in brand strategy."
    },
    {
      name: "Mike Chen",
      role: "Data Analyst",
      bio: "Specialist in performance marketing and conversion optimization."
    },
    {
      name: "Emily Davis",
      role: "Account Manager",
      bio: "Client relationship expert ensuring project success."
    }
  ];

  return (
    <motion.div 
      className="page about"
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
          <h1>About MarketPro</h1>
          <p>Dedicated to driving your business forward through innovative marketing solutions.</p>
        </motion.div>

        <section className="about-content">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 2018, MarketPro has grown from a small startup to a leading 
              digital marketing agency. We believe in the power of creative storytelling 
              combined with data-driven strategies to create meaningful connections between 
              brands and their audiences.
            </p>
            <p>
              Our team of passionate marketers, designers, and strategists work together 
              to deliver results that exceed expectations and drive real business growth.
            </p>
          </motion.div>

          <motion.div 
            className="mission-vision"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To empower businesses with innovative marketing strategies that drive growth and create lasting impact.</p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>To be the leading marketing agency that transforms how brands connect with their audiences.</p>
            </div>
          </motion.div>
        </section>

        <section className="team">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;

