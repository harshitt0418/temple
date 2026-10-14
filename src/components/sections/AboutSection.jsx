/**
 * AboutSection.jsx — Part 2 (Full build)
 * Rich two-column about section with CSS ornamental background,
 * scroll-reveal animations, stats, and real temple content.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import OrnamentalDivider from '../ui/OrnamentalDivider';
import styles from './AboutSection.module.css';

// Inline SVG: temple arch / gopuram silhouette illustration
function TempleSilhouette() {
  return (
    <svg
      viewBox="0 0 320 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.silhouette}
      aria-hidden="true"
    >
      {/* Base platform */}
      <rect x="30" y="440" width="260" height="20" rx="2" fill="var(--color-burgundy)" opacity="0.15"/>
      {/* Main tower body */}
      <rect x="110" y="200" width="100" height="240" rx="2" fill="var(--color-burgundy)" opacity="0.08"/>
      {/* Temple base steps */}
      <rect x="80" y="420" width="160" height="20" rx="1" fill="var(--color-burgundy)" opacity="0.12"/>
      <rect x="60" y="400" width="200" height="22" rx="1" fill="var(--color-burgundy)" opacity="0.10"/>
      {/* Central arch doorway */}
      <path d="M140 380 L140 310 Q160 290 180 310 L180 380 Z" fill="var(--color-burgundy)" opacity="0.18"/>
      {/* Shikhara tiers — gopuram style */}
      <rect x="120" y="170" width="80" height="30" rx="1" fill="var(--color-burgundy)" opacity="0.10"/>
      <rect x="130" y="145" width="60" height="28" rx="1" fill="var(--color-burgundy)" opacity="0.10"/>
      <rect x="140" y="122" width="40" height="26" rx="1" fill="var(--color-burgundy)" opacity="0.12"/>
      <rect x="148" y="102" width="24" height="22" rx="1" fill="var(--color-burgundy)" opacity="0.14"/>
      <rect x="153" y="85" width="14" height="20" rx="1" fill="var(--color-burgundy)" opacity="0.14"/>
      {/* Kalash (top finial) */}
      <ellipse cx="160" cy="78" rx="8" ry="10" fill="var(--color-gold)" opacity="0.35"/>
      <circle cx="160" cy="65" r="5" fill="var(--color-gold)" opacity="0.4"/>
      <line x1="160" y1="55" x2="160" y2="40" stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.4"/>
      <ellipse cx="160" cy="38" rx="4" ry="3" fill="var(--color-gold)" opacity="0.5"/>
      {/* Decorative horizontal lines on tower */}
      {[200, 220, 240, 260, 280, 300, 320, 340, 360].map((y, i) => (
        <line key={i} x1="110" y1={y} x2="210" y2={y} stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2"/>
      ))}
      {/* Side pillars */}
      <rect x="70" y="340" width="40" height="80" rx="1" fill="var(--color-burgundy)" opacity="0.07"/>
      <rect x="210" y="340" width="40" height="80" rx="1" fill="var(--color-burgundy)" opacity="0.07"/>
      {/* Pillar capitals */}
      <ellipse cx="90" cy="340" rx="22" ry="6" fill="var(--color-burgundy)" opacity="0.10"/>
      <ellipse cx="230" cy="340" rx="22" ry="6" fill="var(--color-burgundy)" opacity="0.10"/>
      {/* Om symbol centre */}
      <text x="160" y="245" textAnchor="middle" fontFamily="serif" fontSize="28" fill="var(--color-gold)" opacity="0.25">ॐ</text>
    </svg>
  );
}

export default function AboutSection() {
  const [textRef, textVisible]   = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className={`section section--cream ${styles.about}`}>

      {/* Background mandala watermark */}
      <div className={styles.mandalaWatermark} aria-hidden="true">
        <MandalaPattern />
      </div>

      <div className="container">
        <div className={styles.grid}>

          {/* ── Left: Text column ── */}
          <div
            ref={textRef}
            className={`${styles.textCol} reveal-left ${textVisible ? 'is-visible' : ''}`}
          >
            <SectionLabel
              eyebrow="Our Sacred Heritage"
              title="Shri Krishna Mandir"
              align="left"
              showDivider={true}
            />

            <p className={styles.lead}>
              Nestled in the heart of Kurnool, Andhra Pradesh, <strong>Shri Krishna Mandir</strong> has
              been a beacon of devotion, culture, and spiritual nourishment since 1987. Dedicated to
              the eternal Lord Sri Krishna, this sacred temple is a home for the soul.
            </p>

            <p className={styles.body}>
              The temple enshrines Lord Sri Krishna in his most radiant form — surrounded by the
              fragrance of fresh flowers, the melody of devotional music, and the warmth of a community
              that gathers in love and faith. From the predawn Mangala Aarti to the golden-lamp
              evening darshan, every moment here is an offering to the Divine.
            </p>

            <p className={styles.body}>
              Beyond the sanctum, the temple serves as a living cultural hub — conducting Vedic
              education for children, bhajan and kirtan sessions, yoga classes, and the beloved
              Janmashtami celebrations that draw devotees from across Andhra Pradesh every year.
            </p>

            <OrnamentalDivider />

            {/* Stats */}
            <div
              ref={statsRef}
              className={`${styles.statsRow} reveal ${statsVisible ? 'is-visible' : ''}`}
            >
              <div className={styles.stat}>
                <span className={styles.statNum}>1987</span>
                <span className={styles.statLabel}>Established</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true">✦</div>
              <div className={styles.stat}>
                <span className={styles.statNum}>35+</span>
                <span className={styles.statLabel}>Years of Seva</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true">✦</div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10,000+</span>
                <span className={styles.statLabel}>Annual Devotees</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                className="btn btn--primary"
                onClick={() => document.querySelector('#darshan')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Plan Your Visit →
              </button>
              <button
                className="btn btn--outline"
                onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Gallery
              </button>
            </div>
          </div>

          {/* ── Right: Visual column ── */}
          <div
            ref={imageRef}
            className={`${styles.visualCol} reveal-right ${imageVisible ? 'is-visible' : ''}`}
          >
            {/* Main illustration panel */}
            <div className={styles.mainPanel}>
              <TempleSilhouette />

              {/* Floating Om badge */}
              <div className={styles.omBadge} aria-hidden="true">
                <span className={styles.omBadgeSymbol}>ॐ</span>
                <span className={styles.omBadgeText}>Hare Krishna</span>
              </div>
            </div>

            {/* Info tiles */}
            <div className={styles.infoTiles}>
              <div className={`${styles.infoTile} reveal reveal-delay-1 ${imageVisible ? 'is-visible' : ''}`}>
                <span className={styles.infoTileIcon}>✦</span>
                <div>
                  <span className={styles.infoTileTitle}>Temple Architecture</span>
                  <span className={styles.infoTileText}>Traditional South Indian Gopuram style</span>
                </div>
              </div>
              <div className={`${styles.infoTile} reveal reveal-delay-2 ${imageVisible ? 'is-visible' : ''}`}>
                <span className={styles.infoTileIcon}>✦</span>
                <div>
                  <span className={styles.infoTileTitle}>Daily Rituals</span>
                  <span className={styles.infoTileText}>4 Aartis daily — Mangala to Shayana</span>
                </div>
              </div>
              <div className={`${styles.infoTile} reveal reveal-delay-3 ${imageVisible ? 'is-visible' : ''}`}>
                <span className={styles.infoTileIcon}>✦</span>
                <div>
                  <span className={styles.infoTileTitle}>Cultural Events</span>
                  <span className={styles.infoTileText}>Janmashtami · Radha Ashtami · Govardhan Pooja</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Mandala SVG watermark
function MandalaPattern() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <ellipse key={i} cx="200" cy="200" rx="12" ry="80"
          fill="var(--color-gold)" opacity="0.05"
          transform={`rotate(${deg} 200 200)`} />
      ))}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
        <ellipse key={i} cx="200" cy="200" rx="5" ry="100"
          stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.06"
          transform={`rotate(${deg} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="120" stroke="var(--color-gold)" strokeWidth="0.75" opacity="0.07" />
      <circle cx="200" cy="200" r="80" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.07" />
      <circle cx="200" cy="200" r="40" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.08" />
      <circle cx="200" cy="200" r="12" fill="var(--color-gold)" opacity="0.07" />
    </svg>
  );
}
