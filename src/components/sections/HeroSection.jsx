/**
 * HeroSection.jsx — Sacred Ornamental Prototype
 * Devotional sanctum background with pure CSS & SVG sacred illumination,
 * animated Om pulse, quick timings strip, and smooth interaction.
 */

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { templeInfo } from '../../data/mock-data';

// Sacred Sanctum SVG Illumination (Zero Yellow — Sacred Red, Forest Tint & Pearl Radiance)
function SanctumBackdrop() {
  return (
    <div className={styles.sanctumBackdrop} aria-hidden="true">
      <svg className={styles.sanctumSvg} viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sanctumGlow" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#8B2626" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#5C1220" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0E2419" stopOpacity="0.98" />
          </radialGradient>
          <linearGradient id="goldBeam" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8B2626" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Deep background */}
        <rect width="1440" height="900" fill="url(#sanctumGlow)" />

        {/* Sacred Radiance Beams */}
        <polygon points="720,0 580,900 860,900" fill="url(#goldBeam)" opacity="0.7" />
        <polygon points="720,0 400,900 1040,900" fill="url(#goldBeam)" opacity="0.4" />

        {/* Sacred Temple Gopuram Arch Motif */}
        <path d="M380,900 L380,440 Q720,200 1060,440 L1060,900 Z" stroke="#8B2626" strokeWidth="1.5" strokeOpacity="0.45" fill="none" />
        <path d="M450,900 L450,480 Q720,260 990,480 L990,900 Z" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.25" fill="none" />

        {/* Floating Sacred Lotus Geometry */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <ellipse key={i} cx="720" cy="340" rx="8" ry="90" fill="#FFFFFF" opacity="0.08" transform={`rotate(${deg} 720 340)`} />
        ))}

        {/* Diya Light Core */}
        <circle cx="720" cy="340" r="160" fill="#8B2626" opacity="0.25" />
        <circle cx="720" cy="340" r="6" fill="#FFFFFF" opacity="0.95" />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Temple hero section">

      {/* ── Sacred Sanctum Background ── */}
      <div className={styles.background} aria-hidden="true">
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero-poster.jpg"
        >
          <source src="/assets/videos/temple-hero.mp4" type="video/mp4" />
        </video>
        <SanctumBackdrop />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.vignette} aria-hidden="true" />
      </div>

      {/* ── Sacred border frame ── */}
      <div className={styles.borderFrame} aria-hidden="true">
        <span className={styles.cornerTL} />
        <span className={styles.cornerTR} />
        <span className={styles.cornerBL} />
        <span className={styles.cornerBR} />
      </div>

      {/* ── Content ── */}
      <div className={`container ${styles.content} ${visible ? styles.contentVisible : ''}`}>

        {/* Om invocation row */}
        <div className={styles.invocation} aria-label="Sri Krishna invocation">
          <div className={styles.invocationLine} aria-hidden="true" />
          <div className={styles.invocationCenter}>
            <span className={styles.om} aria-hidden="true">ॐ</span>
            <span className={styles.deityLabel}>Hare Krishna · Hare Rama</span>
          </div>
          <div className={styles.invocationLine} aria-hidden="true" />
        </div>

        {/* Main temple name */}
        <h1 className={styles.heading}>
          Shri Krishna<br />
          <span className={styles.headingAccent}>Mandir</span>
        </h1>

        {/* Divider ornament */}
        <div className={styles.heroDivider} aria-hidden="true">
          <span className={styles.heroDividerLine} />
          <span className={styles.heroDividerGem}>✦</span>
          <span className={styles.heroDividerGem} style={{ opacity: 0.5 }}>✦</span>
          <span className={styles.heroDividerGem}>✦</span>
          <span className={styles.heroDividerLine} />
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>
          A sacred sanctuary of devotion, culture &amp; community
          <br />
          <span className={styles.location}>✦ Kurnool, Andhra Pradesh</span>
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <button
            className={`btn btn--gold ${styles.ctaPrimary}`}
            onClick={() => scrollTo('#darshan')}
          >
            ✦ Darshan Timings
          </button>
          <button
            className={`btn btn--outline-cream ${styles.ctaSecondary}`}
            onClick={() => scrollTo('#about')}
          >
            About the Temple
          </button>
        </div>

        {/* Quick darshan strip */}
        <div className={styles.quickTimings} aria-label="Quick darshan timings">
          <div className={styles.quickTiming}>
            <span className={styles.qtIcon}>✦</span>
            <div>
              <span className={styles.qtLabel}>Morning</span>
              <span className={styles.qtTime}>6 AM – 12 PM</span>
            </div>
          </div>
          <div className={styles.qtDivider} aria-hidden="true">|</div>
          <div className={styles.quickTiming}>
            <span className={styles.qtIcon}>✦</span>
            <div>
              <span className={styles.qtLabel}>Evening</span>
              <span className={styles.qtTime}>4 PM – 8:30 PM</span>
            </div>
          </div>
          <div className={styles.qtDivider} aria-hidden="true">|</div>
          <div className={styles.quickTiming}>
            <span className={styles.qtIcon}>✦</span>
            <div>
              <span className={styles.qtLabel}>Aarti</span>
              <span className={styles.qtTime}>8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollLabel}>Scroll to explore</span>
        </div>
      </div>

      {/* Bottom arch wave */}
      <div className={styles.bottomArch} aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-cream)" />
        </svg>
      </div>
    </section>
  );
}
