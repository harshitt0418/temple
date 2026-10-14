/**
 * DarshanSection.jsx
 * Aligned with Client Reference Screenshots (02.20.49 & 02.20.49 1):
 * - Cream background (zero yellow cast)
 * - Dark green headings & timestamps
 * - Day Schedule with date navigator
 * - Deep dark green "Visiting Hours" card with live pulse indicator
 * - Sacred Seva booking cards
 */

import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { daySchedule, visitingHours, sevaServices } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './DarshanSection.module.css';

export default function DarshanSection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const dates = [
    'Today · Oct 11, 2026 (Navaratri Day 7)',
    'Tomorrow · Oct 12, 2026 (Durgashtami)',
    'Sun · Oct 13, 2026 (Mahanavami)',
    'Mon · Oct 14, 2026 (Vijayadashami)',
  ];

  const handlePrevDate = () => {
    setCurrentDateIndex((prev) => (prev > 0 ? prev - 1 : dates.length - 1));
  };

  const handleNextDate = () => {
    setCurrentDateIndex((prev) => (prev < dates.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="darshan" className={styles.section} aria-label="Darshan timings and day schedule">
      <div className="container">

        {/* Section Heading */}
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="DAILY SCHEDULE & TIMINGS"
            title="Today at the Temple"
            subtitle="శ్రీవారి నిత్య పూజా & దర్శన విశేషాలు"
          />
        </div>

        {/* Main Schedule Container */}
        <div className={styles.scheduleWrapper}>

          {/* 1. Date Selector Header Bar */}
          <div className={styles.dateBar}>
            <button
              className={styles.dateNavBtn}
              onClick={handlePrevDate}
              aria-label="Previous date"
            >
              ‹
            </button>
            <span className={styles.dateText}>{dates[currentDateIndex]}</span>
            <button
              className={styles.dateNavBtn}
              onClick={handleNextDate}
              aria-label="Next date"
            >
              ›
            </button>
          </div>

          {/* 2. Timeline List */}
          <div className={styles.timelineList}>
            {daySchedule.map((item, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${item.highlight ? styles.itemHighlight : ''}`}
              >
                <div className={styles.timeBadge}>
                  <span className={styles.timeText}>{item.time}</span>
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <span className={styles.itemTelugu}>{item.telugu}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 3. Visiting Hours Card (Reference: 02.20.49 1) */}
        <div id="visiting-hours" className={styles.visitingCard}>
          <div className={styles.visitingLeft}>
            <div className={styles.visitingIconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C8963C" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className={styles.visitingText}>
              <h3 className={styles.visitingTitle}>Temple Visiting Hours</h3>
              <p className={styles.visitingHoursText}>
                Morning: <strong>{visitingHours.morning}</strong> &nbsp;|&nbsp; Evening: <strong>{visitingHours.evening}</strong>
              </p>
              {/* Live Status Indicator */}
              <div className={styles.liveStatus}>
                <span className={styles.pulseDot} aria-hidden="true" />
                <span className={styles.liveText}>{visitingHours.statusText}</span>
              </div>
            </div>
          </div>

          <div className={styles.visitingRight}>
            <a
              href="#visit"
              className="btn btn--gold"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
            >
              Plan Your Visit
            </a>
          </div>
        </div>

        {/* 4. Sacred Seva Bookings Grid */}
        <div className={styles.sevaSection}>
          <div className={styles.sevaHeader}>
            <span className={styles.sevaEyebrow}>DIVINE OFFERINGS</span>
            <h3 className={styles.sevaSectionTitle}>Pooja &amp; Seva Bookings</h3>
            <p className={styles.sevaSectionSubtitle}>
              శ్రీ కృష్ణ స్వామి వారికి భక్తితో సమర్పించు నిత్య సేవలు
            </p>
          </div>

          <div className={styles.sevaGrid}>
            {sevaServices.map((seva) => (
              <div key={seva.id} className={styles.sevaCard}>
                <div className={styles.sevaCardTop}>
                  <div className={styles.sevaIconCircle}>🪔</div>
                  <span className={styles.sevaDonationBadge}>{seva.suggestedDonation}</span>
                </div>

                <h4 className={styles.sevaName}>{seva.name}</h4>
                <p className={styles.sevaTelugu}>{seva.nameTelugu}</p>
                <p className={styles.sevaDesc}>{seva.description}</p>

                <div className={styles.sevaMeta}>
                  <span className={styles.sevaMetaItem}>
                    <span>📅</span> {seva.timings}
                  </span>
                  <span className={styles.sevaMetaItem}>
                    <span>⏱</span> {seva.duration}
                  </span>
                </div>

                <button
                  className="btn btn--primary"
                  style={{ width: '100%', marginTop: '1rem', padding: '0.6rem 1rem', fontSize: '0.875rem' }}
                  onClick={() => openModal('seva', seva)}
                >
                  Book This Seva
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
