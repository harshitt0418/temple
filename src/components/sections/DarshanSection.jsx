/**
 * DarshanSection.jsx — Part 2 (Full build)
 * Darshan timings + Seva services on deep burgundy background.
 * Full detail, animations, interactive seva cards.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import OrnamentalDivider from '../ui/OrnamentalDivider';
import { darshanTimings, sevaServices } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './DarshanSection.module.css';

export default function DarshanSection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.08 });
  const [sevaRef, sevaVisible] = useScrollAnimation({ threshold: 0.06 });

  return (
    <section id="darshan" className={`section ${styles.darshan}`} aria-label="Darshan timings and seva services">

      {/* Top arch */}
      <div className={styles.topWave} aria-hidden="true">
        <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,-20 1440,0 L1440,0 L0,0 Z" fill="var(--color-cream)" />
        </svg>
      </div>

      {/* Background pattern */}
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className="container">

        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Temple Schedule"
            title="Darshan, Pooja & Seva"
            subtitle="आओ, दर्शन करो — Come, seek the blessings of Lord Krishna"
            light={true}
          />
        </div>

        {/* ── Darshan Timings Grid ── */}
        <div ref={cardRef} className={styles.timingsGrid}>
          {darshanTimings.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.timingCard} reveal reveal-delay-${i + 1} ${cardVisible ? 'is-visible' : ''}`}
            >
              {/* Glow effect on hover */}
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.timingTop}>
                <div className={styles.timingIconWrap} aria-hidden="true">
                  <span className={styles.timingIcon}>{t.icon}</span>
                </div>
                <div>
                  <h3 className={styles.timingSession}>{t.session}</h3>
                  <p className={styles.timingTelugu} lang="te">{t.sessionHindi}</p>
                </div>
              </div>

              <div className={styles.timingTimeLine} aria-hidden="true" />
              <div className={styles.timingTime}>{t.time}</div>
              {t.note && <p className={styles.timingNote}>⚠ {t.note}</p>}
            </div>
          ))}
        </div>

        {/* ── Seva section header ── */}
        <div className={styles.sevaIntro}>
          <OrnamentalDivider color="var(--color-gold-pale)" />
          <div className={styles.sevaHeaderText}>
            <h3 className={styles.sevaTitle}>Pooja & Seva Bookings</h3>
            <p className={styles.sevaSubtitle}>Offer seva in the divine name of Lord Sri Krishna — open to all devotees</p>
          </div>
        </div>

        {/* ── Seva Cards ── */}
        <div ref={sevaRef} className={styles.sevaGrid}>
          {sevaServices.map((seva, i) => (
            <div
              key={seva.id}
              className={`${styles.sevaCard} reveal reveal-delay-${i + 1} ${sevaVisible ? 'is-visible' : ''}`}
            >
              <div className={styles.sevaTop}>
                <div>
                  <h4 className={styles.sevaName}>{seva.name}</h4>
                  <p className={styles.sevaTelugu} lang="te">{seva.nameHindi}</p>
                </div>
              </div>

              <p className={styles.sevaDesc}>{seva.description}</p>

              <div className={styles.sevaMeta}>
                <span className={styles.sevaMetaItem}>
                  <span aria-hidden="true">📅</span> {seva.timings}
                </span>
                <span className={styles.sevaMetaItem}>
                  <span aria-hidden="true">⏱</span> {seva.duration}
                </span>
              </div>

              <button
                className={`btn btn--outline-cream ${styles.sevaBtn}`}
                onClick={() => openModal('seva', seva)}
              >
                Book Seva
              </button>

              {/* Gold corner accent */}
              <div className={styles.sevaCorner} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Donation nudge */}
        <div className={`${styles.donateNudge} reveal ${sevaVisible ? 'is-visible' : ''}`}>
          <div className={styles.nudgeContent}>
            <span className={styles.nudgeIcon} aria-hidden="true">🙏</span>
            <div>
              <p className={styles.nudgeText}>
                Support the temple through <strong>Annadanam</strong>, <strong>Nityaseva</strong>,
                or <strong>Utsav Sponsorship</strong>. Every offering, big or small, is received by the Lord.
              </p>
            </div>
          </div>
          <button className="btn btn--gold" onClick={() => openModal('donation')}>
            Donate to the Temple
          </button>
        </div>

      </div>

      {/* Bottom wave */}
      <div className={styles.bottomWave} aria-hidden="true">
        <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
          <path d="M0,50 C480,-10 960,60 1440,50 L1440,50 L0,50 Z" fill="var(--color-cream-light)" />
        </svg>
      </div>
    </section>
  );
}
