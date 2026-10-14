/**
 * FestivalsSection.jsx
 * Aligned with Client Reference:
 * ZERO Yellow: All badges, borders, icons are red, green, white, or stone.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { upcomingFestivals } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './FestivalsSection.module.css';

export default function FestivalsSection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.06 });

  return (
    <section id="festivals" className={styles.section} aria-label="Upcoming festivals and events">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="SACRED CALENDAR & UTSAVAMS"
            title="Upcoming Festivals & Events"
            subtitle="రాబోవు పండుగలు & వైభవ ఉత్సవాలు"
          />
        </div>

        {/* Festival Cards List */}
        <div ref={gridRef} className={styles.festivalsList}>
          {upcomingFestivals.map((event, index) => (
            <article
              key={event.id}
              className={`${styles.festivalCard} ${event.highlight ? styles.cardHighlight : ''} reveal reveal-delay-${index + 1} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Left Date Badge */}
              <div className={styles.dateBadge}>
                <span className={styles.dateMonth}>{event.month}</span>
                <span className={styles.dateDay}>{event.day}</span>
              </div>

              {/* Main Event Body */}
              <div className={styles.cardContent}>
                <div className={styles.headerRow}>
                  <div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventTelugu}>{event.telugu}</p>
                  </div>
                  {event.highlight && (
                    <span className={styles.featuredBadge}>✦ Mahotsavam</span>
                  )}
                </div>

                <div className={styles.eventTimeWrap}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span className={styles.timeText}>{event.time}</span>
                </div>

                <p className={styles.eventDesc}>{event.desc}</p>

                <div className={styles.cardActions}>
                  <button
                    className="btn btn--primary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                    onClick={() => openModal('event', event)}
                  >
                    View Schedule &amp; Sevas
                  </button>
                  <button
                    className="btn btn--outline"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                    onClick={() => openModal('seva', { name: `${event.title} Seva` })}
                  >
                    Book Utsav Seva
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Festival Calendar CTA */}
        <div className={styles.calendarBanner}>
          <div className={styles.calendarTextWrap}>
            <div className={styles.calendarIcon}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--color-red-sacred)" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <h4 className={styles.calendarTitle}>Complete Annual Temple Almanac (Panchangam)</h4>
              <p className={styles.calendarSubtitle}>
                Download or view complete timings for Ekadashi, Purnima, Masa Shivaratri and Krishna Janmashtami.
              </p>
            </div>
          </div>
          <button
            className="btn btn--green"
            onClick={() => openModal('event', { title: 'Annual Panchangam 2026-2027', time: 'Full Calendar' })}
          >
            Download Panchangam
          </button>
        </div>

      </div>
    </section>
  );
}
