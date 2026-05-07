import React, { useState, useRef } from 'react';
import '../styles/TrustedMarquee.css';

/**
 * TrustedMarquee
 * ─────────────────────────────────────────────────────────────────────────────
 * Props:
 *   logos  – Array of { src: string, alt: string } objects. Required.
 *   speed  – Animation duration in seconds for one full scroll cycle. Default 30.
 *   title  – Section heading string. Optional.
 *
 * HOW INFINITE SCROLL WORKS
 * ─────────────────────────
 * The logos array is duplicated (rendered twice) inside `.marquee-track`.
 * A CSS keyframe (`marquee-scroll`) translates the track from 0 → -50% in
 * `speed` seconds, then instantly snaps back to 0 (thanks to the `infinite`
 * iteration count). Because the first half and second half are identical, the
 * loop is completely seamless — no visible jump.
 *
 * HOW HOVER PAUSE WORKS
 * ──────────────────────
 * A React boolean state `isPaused` is toggled via `onMouseEnter` / `onMouseLeave`
 * on the `.marquee-viewport` wrapper. The state is passed as an inline style
 * `animationPlayState` on the `.marquee-track`. When `isPaused` is true, the
 * CSS animation is suspended exactly where it is; when false, it resumes from
 * that same position — so there is no jarring reset.
 */
const TrustedMarquee = ({
    logos = [],
    speed = 30,
    title = 'Brands that trust us',
}) => {
    // Tracks whether the mouse is hovering anywhere over the marquee viewport
    const [isPaused, setIsPaused] = useState(false);
    const viewportRef = useRef(null);

    if (!logos || logos.length === 0) return null;

    // Duplicate the logos array so the track is twice as wide.
    // The CSS animation scrolls exactly 50% (= the width of one full set),
    // making the loop invisible.
    const duplicated = [...logos, ...logos];

    return (
        <section className="trusted-marquee-section" aria-label={title}>
            {/* ── Section heading ── */}
            <div className="trusted-marquee-header">
                <span className="trusted-marquee-eyebrow">Our Clients</span>
                <h2 className="trusted-marquee-title">{title}</h2>
                {/* Decorative accent line */}
                <div className="trusted-marquee-accent" aria-hidden="true" />
            </div>

            {/* ── Scroll container ── */}
            {/*
             * .marquee-viewport clips the overflowing track and hosts the
             * left/right gradient fade overlays (via ::before / ::after pseudo-
             * elements in CSS).
             * Mouse events here toggle the `isPaused` state.
             */}
            <div
                className="marquee-viewport"
                ref={viewportRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-hidden="false"
            >
                <div
                    className="marquee-track"
                    style={{
                        animationDuration: `${speed}s`,
                        /* Pausing / resuming happens here — no JS timers needed */
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                >
                    {duplicated.map((logo, index) => (
                        <div
                            key={index}
                            className={`marquee-card${isPaused ? ' marquee-card--hovered' : ''}`}
                            /* Individual card hover is handled purely in CSS */
                        >
                            <div className="marquee-card-inner">
                                <img
                                    src={logo.src}
                                    alt={logo.alt || 'Company logo'}
                                    className="marquee-logo"
                                    loading="lazy"
                                    draggable="false"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedMarquee;
