/**
 * FestivalsSection.jsx — Part 2 (Full build)
 * Upcoming festivals with rich card design, timeline view,
 * Janmashtami featured prominently, scroll animations.
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
    <section id="festivals" className={`section section--cream-light ${styles.festivals}`} aria-label="Upcoming festivals">

      {/* Top decorative border */}
      <div className={styles.topBorder} aria-hidden="true">
        <svg viewBox="0 0 1440 20" fill="none" preserveAspectRatio="none">
          <path d="M0,10 Q360,0 720,10 Q1080,20 1440,10" stroke="var(--color-gold)" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>

      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Sacred Calendar"
            title="Upcoming Festivals & Events"
            subtitle="Celebrate the divine — join us in devotion and community"
          />
        </div>

        {/* Featured: Janmashtami banner */}
        {upcomingFestivals.filter(f => f.highlight).map(festival => (
          <div
            key={festival.id}
            className={`${styles.featuredCard} reveal ${headVisible ? 'is-visible' : ''}`}
          >
            {/* Decorative left panel */}
            <div className={styles.featuredLeft}>
              <div className={styles.featuredOm} aria-hidden="true">ॐ</div>
              <div className={styles.featuredDate}>{festival.date}</div>
              <div className={styles.featuredDay}>{festival.day}</div>
            </div>

            {/* Content */}
            <div className={styles.featuredContent}>
              <div className={styles.featuredBadge}>✦ Grand Festival</div>
              <h3 className={styles.featuredName}>{festival.name}</h3>
              <p className={styles.featuredTelugu} lang="te">{festival.nameTelugu}</p>
              <p className={styles.featuredDesc}>{festival.description}</p>
              <div className={styles.featuredActions}>
                <button
                  className="btn btn--primary"
                  onClick={() => openModal('event', festival)}
                >
                  Get Event Details
                </button>
                <button
                  className="btn btn--outline"
                  onClick={() => openModal('donation', { cause: 'Janmashtami' })}
                >
                  Volunteer / Donate
                </button>
              </div>
            </div>

            {/* Right decorative motif */}
            <div className={styles.featuredDecor} aria-hidden="true">
              <svg viewBox="0 0 120 200" fill="none" className={styles.featuredSvg}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <ellipse key={i} cx="60" cy="100" rx="10" ry="60"
                    fill="var(--color-gold)" opacity="0.1"
                    transform={`rotate(${deg} 60 100)`} />
                ))}
                <circle cx="60" cy="100" r="15" fill="var(--color-gold)" opacity="0.15" />
                <text x="60" y="106" textAnchor="middle" fontFamily="serif" fontSize="14" fill="var(--color-gold)" opacity="0.5">ॐ</text>
              </svg>
            </div>
          </div>
        ))}

        {/* Other festivals grid */}
        <h3 className={styles.moreEventsTitle}>More Sacred Occasions</h3>

        <div ref={gridRef} className={styles.grid}>
          {upcomingFestivals.filter(f => !f.highlight).map((festival, i) => (
            <article
              key={festival.id}
              className={`${styles.card} reveal reveal-delay-${i + 1} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Date ribbon */}
              <div className={styles.dateRibbon}>
                <span className={styles.dateText}>{festival.date}</span>
                <span className={styles.dayText}>{festival.day}</span>
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.cardName}>{festival.name}</h4>
                <p className={styles.cardTelugu} lang="te">{festival.nameTelugu}</p>
                <p className={styles.cardDesc}>{festival.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <button
                  className="btn btn--outline"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  onClick={() => openModal('event', festival)}
                >
                  More Info
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full calendar link */}
        <div className={`${styles.calendarCta} reveal ${gridVisible ? 'is-visible' : ''}`}>
          <p className={styles.calendarText}>
            View the complete temple festival calendar for all upcoming events, poojas, and ekadashi timings.
          </p>
          <button
            className="btn btn--primary"
            onClick={() => openModal('event', { name: 'Full Festival Calendar', date: 'Year 2026 - 2027' })}
          >
            View Full Festival Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
