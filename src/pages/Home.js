import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Typewriter from 'typewriter-effect';

// Import your assets
import projectImage1 from '../assets/Metatech.png';
import projectImage2 from '../assets/Content-creation.png'; 
import projectImage3 from '../assets/Offline-Marketing.png';
import icon1 from '../assets/Brand-Design.png';
import icon2 from '../assets/Digital-marketing.png';
import icon3 from '../assets/Website-Development.png';
import icon4 from '../assets/Content-Creationlogo.png';
import icon5 from '../assets/Email-marketing.png';
import icon6 from '../assets/Omni-Presence-Marketing.png';
import Avatar1 from '../assets/dr.rujuta.png';
import Avatar2 from'../assets/Metatechlogo.png';

const Home = ({ onLetsTalkOpen }) => {
    
    // 1. Restored array for local videos
    const videoTestimonials = [
        {
            // Ensure this file exists at public/videos/Testimony-dr-Rujuta.mp4
            videoSrc: "/videos/Testimony-dr-Rujuta.mp4", 
            author: "Dr Rujuta Hantodkar Warke",
            avatar: Avatar1
        },
        {
            // Ensure this file exists at public/videos/Testimony-Metatech.mp4
            videoSrc: "/videos/Testimony-Metatech.mp4",
            author: "MetaTech Technocraft LLP",
            avatar: Avatar2
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
                                loop: true,
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
                        <p>Welcome to Mark-It, where creativity meets strategy to drive your brand's success. We are a passionate team of marketing experts, designers, and content creators dedicated to elevating your brand's story.</p>
                        <div className="cta-buttons">
                           <button type="button" onClick={onLetsTalkOpen} className="btn btn-primary"> Get Started</button>
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
                            <p>Content creation resonates most when crafted with strategic storytelling and authentic UGC, converting attention into meaningful engagement.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon5})` }}></div>
                            <h3>Email Marketing</h3>
                            <p>Email marketing thrives with personalized campaigns and streamlined strategies that build stronger connections and conversions.</p>
                        </motion.div>
                        <motion.div className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                            <div className="service-icon" style={{ backgroundImage: `url(${icon6})` }}></div>
                            <h3>Omni-Presence Marketing</h3>
                            <p>Omni-presence marketing resonates most when driven by strategic storytelling and authentic UGC, turning attention into lasting engagement across every platform and interaction.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Portfolio Section --- */}
            <section className="portfolio-section" id="portfolio-section">
                <div className="container">
                    <h2>Featured Portfolio Projects</h2>
                    <div className="new-portfolio-grid">
                        <button type="button" onClick={onLetsTalkOpen} className="portfolio-card-large portfolio-button">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage1})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Metatech Technocraft LLP</h3>
                                </div>
                            </motion.div>
                        </button>
                        <button type="button" onClick={onLetsTalkOpen} className="portfolio-card-small portfolio-button">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage2})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Content Creation For Social Media</h3>
                                </div>
                            </motion.div>
                        </button>
                        <button type="button" onClick={onLetsTalkOpen} className="portfolio-card-small portfolio-button">
                            <motion.div className="portfolio-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                <div className="portfolio-image" style={{ backgroundImage: `url(${projectImage3})` }}></div>
                                <div className="portfolio-content">
                                    <h3>Offline Advertisement Design</h3>
                                </div>
                            </motion.div>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Testimonials Section (RESTORED LOCAL VIDEO) --- */}
            <section className="testimonials-section video-testimonials">
                <div className="container">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>See Why a Growing Number of Investors Choose Us</motion.h2>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true} 
                            loop={false} 
                            // Autoplay removed for local video to prevent auto-scrolling while watching
                            // autoplay={{ delay: 10000, disableOnInteraction: false }}
                            speed={1000}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 }
                            }}
                            className="video-testimonial-swiper"
                        >
                            {videoTestimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="video-card">
                                        {/* 2. Restored the standard video player */}
                                        <div className="video-wrapper">
                                            <video controls playsInline>
                                                <source src={testimonial.videoSrc} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="video-author-info">
                                            <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                                            <div className="author-details">
                                                <div className="video-author">{testimonial.author}</div>
                                                {/* Removed role if not in data object to avoid empty div */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;