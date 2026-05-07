import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

// ── Client logo imports ───────────────────────────────────────────────────────
import keeayoLogo   from '../assets/keeayoacademy.webp';
import vandanaLogo  from '../assets/vandanacreation.webp';
import metatechLogo from '../assets/Metatechlogo.webp';
import hotelLogo    from '../assets/hoteldhruva.webp';
import cafeLogo     from '../assets/cafedhruva.webp';
import chaukaLogo   from '../assets/chaukachoolha.webp';
import kidLogo      from '../assets/kidparadise.webp';
import rujuthaLogo  from '../assets/rujutha.webp';
import skinLogo     from '../assets/skinstudio.webp';

// ── Cafe Dhruva ───────────────────────────────────────────────────────────────
import cafeBurger   from '../assets/Work RE/Cafe Dhruva/Burger Final.webp';
import cafeOrange   from '../assets/Work RE/Cafe Dhruva/Orange Refresh Draft 2.webp';
import cafePizza    from '../assets/Work RE/Cafe Dhruva/Pizza Final.webp';
import cafeWA1     from '../assets/Work RE/Cafe Dhruva/WhatsApp Image 2026-03-21 at 5.03.33 PM (1).webp';
import cafeWA2     from '../assets/Work RE/Cafe Dhruva/WhatsApp Image 2026-03-21 at 5.03.33 PM.webp';
import cafeWA3     from '../assets/Work RE/Cafe Dhruva/WhatsApp Image 2026-03-21 at 5.03.34 PM (1).webp';
import cafeWA4     from '../assets/Work RE/Cafe Dhruva/WhatsApp Image 2026-03-21 at 5.03.34 PM (2).webp';
import cafeWA5     from '../assets/Work RE/Cafe Dhruva/WhatsApp Image 2026-03-21 at 5.03.34 PM.webp';
import cafeVideo   from '../assets/Work RE/Cafe Dhruva/Publicity Draft 1.mp4';

// ── Chauka Chulha ─────────────────────────────────────────────────────────────
import chaukaPng   from '../assets/Work RE/Chauka Chulha/Logo without BG.webp';
import chaukaStandee from '../assets/Work RE/Chauka Chulha/standee 8x2.webp';

// ── DR. Rujuta ────────────────────────────────────────────────────────────────
import rujA4_1    from '../assets/Work RE/DR. Rujuta/A4 (1).webp';
import rujFront   from '../assets/Work RE/DR. Rujuta/A4 - Front.webp';
import rujBack    from '../assets/Work RE/DR. Rujuta/A4 - Back.webp';
import rujCMYK    from '../assets/Work RE/DR. Rujuta/CMYK Version.webp';
import rujWA      from '../assets/Work RE/DR. Rujuta/WhatsApp Image 2026-03-21 at 5.00.30 PM.webp';

// ── Hotel Dhruva ──────────────────────────────────────────────────────────────
import hotelBanner  from '../assets/Work RE/Hotel Dhruva/BANNER DMG 1-1.webp';
import hotelCardF   from '../assets/Work RE/Hotel Dhruva/PJ CARD personal front-01.webp';
import hotelCardB   from '../assets/Work RE/Hotel Dhruva/PJ CARD personal back-01.webp';
import hotelFinal   from '../assets/Work RE/Hotel Dhruva/final.webp';

// ── Keeayo ────────────────────────────────────────────────────────────────────
import keeayoWA    from '../assets/Work RE/Keeayo/WhatsApp Image 2026-03-21 at 4.27.25 PM.webp';

// ── Kids Paradise ─────────────────────────────────────────────────────────────
import kidsWA      from '../assets/Work RE/Kids Paradise/WhatsApp Image 2026-03-21 at 4.47.52 PM.webp';

// ── Metatech ──────────────────────────────────────────────────────────────────
import metaImg1    from '../assets/Work RE/Metatech technocraft/image 1.webp';
import metaImg2    from '../assets/Work RE/Metatech technocraft/image 2.webp';
import metaImg3    from '../assets/Work RE/Metatech technocraft/image 3.webp';
import metaImg4    from '../assets/Work RE/Metatech technocraft/image 4.webp';

// ── Skinn Studio ─────────────────────────────────────────────────────────────
import skinMain    from '../assets/Work RE/SKINN STUDIO/skin std.webp';
import skinWA1     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.36.08 PM.webp';
import skinWA2     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.36.09 PM (1).webp';
import skinWA3     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.36.09 PM (2).webp';
import skinWA4     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.36.09 PM.webp';
import skinWA5     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.54 PM.webp';
import skinWA6     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.55 PM.webp';
import skinWA7     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.56 PM (1).webp';
import skinWA8     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.56 PM (2).webp';
import skinWA9     from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.56 PM.webp';
import skinWA10    from '../assets/Work RE/SKINN STUDIO/WhatsApp Image 2026-03-21 at 4.43.57 PM.webp';
import skinVideo   from '../assets/Work RE/SKINN STUDIO/WhatsApp Video 2026-03-21 at 4.43.56 PM.mp4';

// ── Vandana ───────────────────────────────────────────────────────────────────
import vanArtboard from '../assets/Work RE/VANDANA/Artboard 1.webp';
import vanLehenga  from '../assets/Work RE/VANDANA/Vandana Creations - Traditional Lehenga (3).webp';
import vanWA1      from '../assets/Work RE/VANDANA/WhatsApp Image 2026-03-21 at 4.47.53 PM.webp';
import vanWA2      from '../assets/Work RE/VANDANA/WhatsApp Image 2026-03-21 at 5.00.46 PM.webp';
import vanVideo    from '../assets/Work RE/VANDANA/Where Formal meets Fabulous.mp4';

// ── Project data ─────────────────────────────────────────────────────────────
// Each media item: { type: 'image' | 'video', src, thumb? }
const PROJECTS = [
  {
    id: 1,
    name: 'Keeayo Academy',
    logo: keeayoLogo,
    description:
      'A martial arts and fitness academy built on discipline, strength, and character. We crafted their complete digital presence to attract students and build community trust.',
    services: ['Social Media Marketing', 'Graphic Design', 'Video Editing', 'Content Creation'],
    media: [
      { type: 'image', src: keeayoWA },
    ],
  },
  {
    id: 2,
    name: 'Vandana Creations',
    logo: vandanaLogo,
    description:
      'A boutique fashion label bringing elegance and story-driven design to the modern woman. We elevated their brand identity across every digital touchpoint.',
    services: ['Brand Design', 'Social Media Marketing', 'Content Creation', 'Photography'],
    media: [
      { type: 'image',  src: vanArtboard },
      { type: 'image',  src: vanLehenga  },
      { type: 'image',  src: vanWA1      },
      { type: 'image',  src: vanWA2      },
      { type: 'video',  src: vanVideo    },
    ],
  },
  {
    id: 3,
    name: 'Metatech Technocraft LLP',
    logo: metatechLogo,
    websiteUrl: 'https://metatechtechnocraft.com/',
    description:
      'A forward-thinking technology company delivering professional-grade web and digital solutions. We built their digital brand from the ground up — strategy, identity, and growth.',
    services: ['Web Development & SEO', 'Digital Marketing', 'Brand Design', 'Email Marketing'],
    media: [
      { type: 'image', src: metaImg1 },
      { type: 'image', src: metaImg2 },
      { type: 'image', src: metaImg3 },
      { type: 'image', src: metaImg4 },
    ],
  },
  {
    id: 4,
    name: 'Hotel Dhruva',
    logo: hotelLogo,
    description:
      'A hospitality brand with a vision. We created immersive content and campaigns that communicate the warmth and excellence guests experience at Hotel Dhruva.',
    services: ['Social Media Marketing', 'Content Creation', 'Graphic Design'],
    media: [
      { type: 'image', src: hotelBanner },
      { type: 'image', src: hotelCardF  },
      { type: 'image', src: hotelCardB  },
      { type: 'image', src: hotelFinal  },
    ],
  },
  {
    id: 5,
    name: 'Cafe Dhruva',
    logo: cafeLogo,
    description:
      'A vibrant multi-cuisine café with something for everyone. Our work brought their unique atmosphere to life online, growing their social footprint and walk-in traffic.',
    services: ['Social Media Marketing', 'Brand Design', 'Content Creation', 'Video Editing'],
    media: [
      { type: 'image', src: cafeBurger  },
      { type: 'image', src: cafeOrange  },
      { type: 'image', src: cafePizza   },
      { type: 'image', src: cafeWA1     },
      { type: 'image', src: cafeWA2     },
      { type: 'image', src: cafeWA3     },
      { type: 'image', src: cafeWA4     },
      { type: 'image', src: cafeWA5     },
      { type: 'video', src: cafeVideo   },
    ],
  },
  {
    id: 6,
    name: 'Chauka Choolha',
    logo: chaukaLogo,
    description:
      'An authentic home-style restaurant celebrating traditional flavours. We connected their story with hungry audiences through targeted social campaigns and rich visual content.',
    services: ['Social Media Marketing', 'Graphic Design', 'Content Creation'],
    media: [
      { type: 'image', src: chaukaPng     },
      { type: 'image', src: chaukaStandee },
    ],
  },
  {
    id: 7,
    name: 'Kid Paradise',
    logo: kidLogo,
    description:
      "A joyful kids' play and learning space. We designed a brand and digital strategy that resonates equally with children's delight and parents' trust.",
    services: ['Brand Design', 'Social Media Marketing', 'Graphic Design'],
    media: [
      { type: 'image', src: kidsWA },
    ],
  },
  {
    id: 8,
    name: 'Rujutha Healthcare',
    logo: rujuthaLogo,
    description:
      'A committed healthcare practice dedicated to personalised patient care. We built a credible, approachable digital identity that puts patients at ease before they even walk through the door.',
    services: ['Brand Design', 'Digital Marketing', 'Content Creation', 'Social Media Marketing'],
    media: [
      { type: 'image', src: rujA4_1  },
      { type: 'image', src: rujFront },
      { type: 'image', src: rujBack  },
      { type: 'image', src: rujCMYK  },
      { type: 'image', src: rujWA    },
    ],
  },
  {
    id: 9,
    name: 'The Skin Studio',
    logo: skinLogo,
    description:
      'A premium skin clinic and beauty institute. We crafted a luxury digital experience — from social presence to lead-generation campaigns — that reflects their excellence in skincare.',
    services: ['Brand Design', 'Social Media Marketing', 'Content Creation', 'Email Marketing'],
    media: [
      { type: 'image', src: skinMain  },
      { type: 'image', src: skinWA1   },
      { type: 'image', src: skinWA2   },
      { type: 'image', src: skinWA3   },
      { type: 'image', src: skinWA4   },
      { type: 'image', src: skinWA5   },
      { type: 'image', src: skinWA6   },
      { type: 'image', src: skinWA7   },
      { type: 'image', src: skinWA8   },
      { type: 'image', src: skinWA9   },
      { type: 'image', src: skinWA10  },
      { type: 'video', src: skinVideo },
    ],
  },
];

// ── Media thumbnail (image or video — click opens in new tab) ─────────────────
const MediaThumb = ({ item, projectName, index }) => {
  const handleClick = () => {
    window.open(item.src, '_blank', 'noopener,noreferrer');
  };

  if (item.type === 'video') {
    return (
      <button
        className="proj-media-thumb proj-media-thumb--video"
        onClick={handleClick}
        aria-label={`Open ${projectName} video ${index + 1} in new tab`}
        title="Click to open video in new tab"
      >
        <video
          src={item.src}
          muted
          playsInline
          preload="metadata"
          className="proj-thumb-video"
        />
        <span className="proj-play-icon" aria-hidden="true">▶</span>
      </button>
    );
  }

  return (
    <button
      className="proj-media-thumb"
      onClick={handleClick}
      aria-label={`Open ${projectName} image ${index + 1} in new tab`}
      title="Click to open in new tab"
    >
      <img src={item.src} alt={`${projectName} work ${index + 1}`} className="proj-thumb-img" loading="lazy" decoding="async" />
    </button>
  );
};

// ── Page ─────────────────────────────────────────────────────────────────────
const Projects = () => (
  <div className="page projects-page">

    {/* ── Hero ── */}
    <section className="services-hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where <span className="highlight">Ideas</span> Become{' '}
          <span className="highlight">Results</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every project we build is <span className="highlight">tailored</span>,
          strategic, and designed to deliver real business impact.
        </motion.p>
      </div>
    </section>

    {/* ── Projects list ── */}
    <section className="services-list-section">
      <div className="container">
        <div className="services-detailed-grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="service-detailed-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              {/* Left: logo + name (+ optional visit link on hover) */}
              <div className="service-card-header proj-header">
                <div className="proj-logo-box">
                  <img src={project.logo} alt={project.name} className="proj-logo-img" loading="lazy" decoding="async" />
                </div>
                <div className="proj-title-block">
                  <h3>{project.name}</h3>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-visit-link"
                    >
                      Click here to visit the website. 🔗
                    </a>
                  )}
                </div>
              </div>

              {/* Right: revealed on hover */}
              <div className="service-content-hidden">
                <p>{project.description}</p>

                <ul className="service-tags">
                  {project.services.map((svc) => (
                    <li key={svc}>{svc}</li>
                  ))}
                </ul>

                {project.media.length > 0 && (
                  <div className="proj-media-strip">
                    {project.media.map((item, i) => (
                      <MediaThumb
                        key={i}
                        item={item}
                        projectName={project.name}
                        index={i}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
