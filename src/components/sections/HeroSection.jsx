/**
 * HeroSection.jsx
 * Aligned with Client Reference Screenshots (02.20.48 / 02.20.48 1):
 * 1. Vaishnava Sacred Emblems Plaque (Hanuman, Shankha, Namam, Chakra, Garuda)
 * 2. Sacred Quote: "నా భక్తుడు నశింపడు" / "MY DEVOTEE NEVER PERISHES"
 * 3. Sacred Arched Portal framing Lord Sri Krishna in Golden Alankaram
 * 4. 4 Quick Action Cards (Daily Puja Schedule, Book a Seva, Festival Calendar, Temple Store)
 */

import { useState } from 'react';
import styles from './HeroSection.module.css';
import { templeInfo, quickActions } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';

// Sacred Vaishnava Emblems Strip (Gold Plaque)
function VaishnavaEmblems() {
  return (
    <div className={styles.emblemsContainer} aria-label="Vaishnava Sacred Emblems">
      <div className={styles.emblemsBar}>
        {/* Hanuman */}
        <div className={styles.emblemItem} title="Sri Hanuman">
          <svg viewBox="0 0 36 36" width="30" height="30" fill="none">
            <path
              d="M18 5 C16 5 14 7 14 10 C14 12 16 13 17 14 C15 15 13 18 13 22 L13 28 C13 29 14 30 15 30 L21 30 C22 30 23 29 23 28 L23 22 C23 18 21 15 19 14 C20 13 22 12 22 10 C22 7 20 5 18 5 Z"
              fill="#C8963C"
            />
            <path d="M14 26 C11 26 9 23 9 19 C9 15 11 12 13 11" stroke="#C8963C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <circle cx="18" cy="10" r="1.5" fill="#FAF6EE" />
          </svg>
        </div>

        <span className={styles.emblemDivider}>✦</span>

        {/* Shankha (Conch) */}
        <div className={styles.emblemItem} title="Panchajanya Shankha">
          <svg viewBox="0 0 36 36" width="30" height="30" fill="none">
            <path
              d="M18 6 C13 6 10 10 10 16 C10 22 14 28 18 30 C22 28 26 22 26 16 C26 10 23 6 18 6 Z"
              fill="#C8963C"
            />
            <path d="M18 10 C16 13 16 19 18 26" stroke="#FAF6EE" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 14 C16 15 20 15 22 14" stroke="#FAF6EE" strokeWidth="1" strokeLinecap="round" />
            <path d="M13 19 C15 20 21 20 23 19" stroke="#FAF6EE" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <span className={styles.emblemDivider}>✦</span>

        {/* Thiruman / Urdhva Pundra Namam (Center Jewel) */}
        <div className={styles.emblemNamam} title="Thiruman / Urdhva Pundra">
          <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
            {/* White outer U-shape */}
            <path
              d="M13 8 L13 23 C13 27 16 30 20 30 C24 30 27 27 27 23 L27 8 L23 8 L23 22 C23 24 22 25 20 25 C18 25 17 24 17 22 L17 8 Z"
              fill="#FFFFFF"
            />
            {/* Sacred Red Center Line (Tilakam) */}
            <path
              d="M19 6 L21 6 L21 28 L19 28 Z"
              fill="#A3241E"
            />
            <circle cx="20" cy="5" r="1.5" fill="#A3241E" />
            {/* Base floral petal */}
            <path d="M16 30 C18 33 22 33 24 30 Z" fill="#C8963C" />
          </svg>
        </div>

        <span className={styles.emblemDivider}>✦</span>

        {/* Sudarshana Chakra (Discus) */}
        <div className={styles.emblemItem} title="Sudarshana Chakra">
          <svg viewBox="0 0 36 36" width="30" height="30" fill="none">
            <circle cx="18" cy="18" r="12" stroke="#C8963C" strokeWidth="2" />
            <circle cx="18" cy="18" r="4" fill="#C8963C" />
            {/* Flames / Teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <line
                key={i}
                x1="18"
                y1="6"
                x2="18"
                y2="4"
                stroke="#C8963C"
                strokeWidth="2"
                strokeLinecap="round"
                transform={`rotate(${deg} 18 18)`}
              />
            ))}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <line
                key={i}
                x1="18"
                y1="18"
                x2="18"
                y2="7"
                stroke="#FAF6EE"
                strokeWidth="1"
                transform={`rotate(${deg} 18 18)`}
              />
            ))}
          </svg>
        </div>

        <span className={styles.emblemDivider}>✦</span>

        {/* Garuda */}
        <div className={styles.emblemItem} title="Sri Garuda">
          <svg viewBox="0 0 36 36" width="30" height="30" fill="none">
            <path
              d="M18 5 C15 5 14 7 14 10 C14 12 16 13 17 14 C15 15 13 18 13 22 L13 28 C13 29 14 30 15 30 L21 30 C22 30 23 29 23 28 L23 22 C23 18 21 15 19 14 C20 13 22 12 22 10 C22 7 21 5 18 5 Z"
              fill="#C8963C"
            />
            <path d="M22 26 C25 26 27 23 27 19 C27 15 25 12 23 11" stroke="#C8963C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <circle cx="18" cy="10" r="1.5" fill="#FAF6EE" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Icon helper for Quick Action Cards
function ActionIcon({ name }) {
  if (name === 'clock') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  if (name === 'lotus') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4c-2 4-2 8 0 12 2-4 2-8 0-12z" fill="currentColor" fillOpacity="0.3"/>
        <path d="M12 16c-3-2-6-3-9-1 2 4 6 5 9 1z"/>
        <path d="M12 16c3-2 6-3 9-1-2 4-6 5-9 1z"/>
        <path d="M7 11c-2-2-4-2-5 0 2 3 5 3 5 0z"/>
        <path d="M17 11c2-2 4-2 5 0-2 3-5 3-5 0z"/>
      </svg>
    );
  }
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    );
  }
  // store
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

export default function HeroSection() {
  const { openModal } = useModal();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleActionClick = (target) => {
    if (target === 'modal-seva') {
      openModal('seva');
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Sri Krishna Temple Hero">
      <div className={`container ${styles.container}`}>

        {/* 1. Vaishnava Emblems Plaque */}
        <VaishnavaEmblems />

        {/* 2. Sacred Quote Frame */}
        <div className={styles.quoteCard} aria-label="Sacred Verse">
          <div className={styles.quoteInner}>
            <div className={styles.quoteTelugu}>
              "{templeInfo.sacredQuote.telugu}"
            </div>
            <div className={styles.quoteEnglish}>
              "{templeInfo.sacredQuote.english}"
            </div>
            <div className={styles.quoteSource}>
              — {templeInfo.sacredQuote.source}
            </div>
          </div>
        </div>

        {/* 3. Hero Deity Arched Portal */}
        <div className={styles.portalWrapper}>
          <div className={styles.portalArch}>
            {/* Outer Decorative Temple Arch */}
            <div className={styles.archBorderOuter}>
              <div className={styles.archBorderInner}>

                {/* Subtle Radial Sunburst Rays behind Deity */}
                <div className={styles.raysContainer} aria-hidden="true">
                  <div className={styles.sunburstRays} />
                </div>

                {/* Real Deity Image extracted from reference */}
                <div className={styles.deityImageWrapper}>
                  <img
                    src="/assets/images/krishna-hero.jpg"
                    alt="Lord Sri Krishna in Golden Alankaram at Kurnool Temple"
                    className={`${styles.deityImage} ${imageLoaded ? styles.loaded : ''}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {/* Gentle gradient fade at bottom */}
                  <div className={styles.deityFade} aria-hidden="true" />
                </div>

                {/* Divine Badge at base of Arch */}
                <div className={styles.deityBadge}>
                  <span className={styles.badgeOm}>ॐ</span>
                  <span className={styles.badgeTitle}>శ్రీ కృష్ణ స్వామి వారు</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 4. Four Quick Action Cards Grid (Reference: 02.20.48) */}
        <div className={styles.quickGrid} role="region" aria-label="Quick Actions">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className={`${styles.actionCard} ${styles[`card_${action.color}`]}`}
              onClick={() => handleActionClick(action.target)}
            >
              <div className={styles.actionIconWrap}>
                <ActionIcon name={action.icon} />
              </div>
              <div className={styles.actionText}>
                <span className={styles.actionTitle}>{action.title}</span>
                <span className={styles.actionSubtitle}>{action.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
