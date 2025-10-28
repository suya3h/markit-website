import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Typewriter from 'typewriter-effect';
import projectImage1 from '../assets/Metatech.png';
import projectImage2 from '../assets/Content-creation.png'; // Make sure you have this file
import projectImage3 from '../assets/Offline-Marketing.png';       // Make sure you have this file
import icon1 from '../assets/Brand-Design.png';
import icon2 from '../assets/Digital-marketing.png';
import icon3 from '../assets/Website-Development.png';
import icon4 from '../assets/Content-Creationlogo.png';
import icon5 from '../assets/Email-marketing.png';
import icon6 from '../assets/Omni-Presence-Marketing.png';
import Avatar1 from '../assets/dr.rujuta.png';
import Avatar2 from'../assets/Metatechlogo.png';

const Home = () => {
    const videoTestimonials = [
        {
            // Make sure this filename matches your first video file
            videoSrc: "/videos/Testimony-dr-Rujuta.mp4", 
            author: "Dr Rujuta Hantodkar Warke", // Change to your client's name
            // Change to your client's role
            avatar: Avatar1 // Change to your client's photo URL
        },
        {
            // Make sure this filename matches your second video file
            videoSrc: "/videos/Testimony-Metatech.mp4",
            author: "MetaTech Technocraft LLP", // Change to your client's name
             // Change to your client's role
            avatar: Avatar2 // Change to your client's photo URL
        }
    ];
    return (
        <div className="page home">
            {/* --- Hero Section --- */}
            <section className="hero">
                <div className="container">
                    <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1><Typewriter
                              options={{
                                loop: true, // Makes the animation repeat
                                autoStart: true,
                              }}
                              onInit={(typewriter) => {
                                typewriter
                                  .typeString('Enter The Digital Market With <span class="highlight">"Mark-It"</span>')
                                  .pauseFor(2500)
                                  .deleteAll()
                                  .typeString('Designs That <span class="highlight">Increase Confidence</span>')
                                  .pauseFor(2500)
                                  .start();
                              }}
                              />
                              </h1>
                        <p>Welcome to Mark-It, where creativity meets strategy to drive your brand's success. We are a passionate team of marketing experts, designers, and content creators dedicated to elevating your brand's story.</p>
                        <div className="cta-buttons">
                            <Link to="/services" className="btn btn-primary">Get Started</Link>
                            <a href="https://drive.google.com/file/d/1_f_SuZHXhQXUnoEAXP8_Dl2jYHzskntL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Portfolio</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="stats-section">
                <div className="container">
                    <h2>Why Choose us</h2>
                    <div className="stats-grid">
                        <motion.div className="stat-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <div className="stat-number"><CountUp end={98} duration={2.5} suffix="%" enableScrollSpy scrollSpyDelay={300} /></div>
                            <div className="stat-title">Client Satisfaction</div>
                        </motion.div>
                        <motion.div className="stat-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="stat-number"><CountUp end={24} duration={2.5} suffix="%" enableScrollSpy scrollSpyDelay={300} /></div>
                            <div className="stat-title">Faster Results</div>
                        </motion.div>
                        <motion.div className="stat-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <div className="stat-number"><CountUp end={95} duration={2.5} suffix="%" enableScrollSpy scrollSpyDelay={300} /></div>
                            <div className="stat-title">Success Rate</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Services Section --- */}
            <section className="services-section" id ="services-section">
                <div className="container">
                    <h2>How Can We Work Together</h2>
                    <div className="services-grid">
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.0 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon1})`}}></div>
                            <h3>Brand Design</h3>
                            <p>Brand design becomes powerful when creativity pairs with strategy, transforming visual identity into lasting experiences..</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon2})` }}></div>
                            <h3>Digital Marketing</h3>
                            <p>Digital marketing is elevated through data-driven campaigns, where precision targeting turns every interaction into measurable growth.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon3})` }}></div>
                            <h3>Web Development & SEO</h3>
                            <p>Web development goes beyond coding with sleek, functional, and optimized websites that act as high-performing growth tools.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon4})` }}></div>
                            <h3>UGC & Content Creation</h3>
                            <p>Content creation resonates most when crafted with strategic storytelling and authentic UGC, converting attention into meaningful engagement.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon5})` }}></div>
                            <h3>Email Marketing</h3>
                            <p>Email marketing thrives with personalized campaigns and streamlined strategies that build stronger connections and conversions.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon6})` }}></div>
                            <h3>Omni-Presence Marketing</h3>
                            <p>Omni-presence marketing resonates most when driven by strategic storytelling and authentic UGC, turning attention into lasting engagement across every platform and interaction.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Portfolio Section --- */}
             <section className="portfolio-section">
                <div className="container">
                    <h2>Featured Portfolio Projects</h2>
                    <div className="new-portfolio-grid">
                        <Link to="/projects" className="portfolio-card-large">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                {/* STEP 2: Use the imported image variable here */}
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage1})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Metatech Technocraft LLP</h3>
                                    {/* <p>Complete brand identity for an innovative tech company, including logo, color palette, and marketing materials.</p> */}
                                </div>
                            </motion.div>
                        </Link>
                        <Link to="/projects" className="portfolio-card-small">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                                {/* Use the second imported image variable here */}
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage2})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Content Creation For Social Media</h3>
                                    {/* <p>A modern online shopping experience designed with a focus on user experience and conversion optimization.</p> */}
                                </div>
                            </motion.div>
                        </Link>
                        <Link to="/projects" className="portfolio-card-small">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                {/* Use the third imported image variable here */}
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage3})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Offline Advertisement Design</h3>
                                    {/* <p>Multi-location brand consistency project with a comprehensive digital marketing strategy.</p> */}
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Testimonials Section --- */}
            <section className="testimonials-section video-testimonials">
                <div className="container">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>See Why a Growing Number of Investors Choose Us</motion.h2>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation spaceBetween={50} slidesPerView={1} centeredSlides={true} loop={true}
                            autoplay={{ delay: 10000, disableOnInteraction: false }} //10000 means the delay is of 10 seconds
                            speed={1000}
                            breakpoints={{ 768: { slidesPerView: 1.5, spaceBetween: 30 }, 1024: { slidesPerView: 2.5, spaceBetween: 50 } }}
                            className="video-testimonial-swiper"
                        >
                            {videoTestimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="video-card">
                                        <div className="video-wrapper">
                                            <video controls poster={`https://via.placeholder.com/1280x720.png/111827/FFFFFF?text=Video+Preview`}>
                                                <source src={testimonial.videoSrc} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="video-author-info">
                                            <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                                            <div className="author-details">
                                                <div className="video-author">{testimonial.author}</div>
                                                <div className="video-role">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
                 {/* use this code when we need to add the section, uncomment it and make changes try not to make another. the css is still present ig*/}

            {/* --- Consultation Section ---
            <section className="consultation-section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2>Let's figure out how we can help</h2>
                        <p>Ready to take your business to the next level? Let's discuss how we can work together to achieve your marketing goals and drive sustainable growth.</p>
                        <Link to="/contact" className="btn btn-secondary" style={{ background: 'white', color: '#667eea', fontWeight: '600' }}>
                            Schedule Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;