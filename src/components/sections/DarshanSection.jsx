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

      <div className="container">

        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Temple Schedule"
            title="Darshan, Pooja & Seva"
            subtitle="Come, seek the divine blessings of Lord Sri Krishna"
            light={false}
          />
        </div>

        {/* ── Darshan Timings Grid ── */}
        <div ref={cardRef} className={styles.timingsGrid}>
          {darshanTimings.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.timingCard} reveal reveal-delay-${i + 1} ${cardVisible ? 'is-visible' : ''}`}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.timingTop}>
                <div className={styles.timingIconWrap} aria-hidden="true">
                  <span className={styles.timingIcon}>{t.icon}</span>
                </div>
                <div>
                  <h3 className={styles.timingSession}>{t.session}</h3>
                </div>
              </div>

              <div className={styles.timingTimeLine} aria-hidden="true" />
              <div className={styles.timingTime}>{t.time}</div>
              {t.note && <p className={styles.timingNote}>{t.note}</p>}
            </div>
          ))}
        </div>

        {/* ── Seva section header ── */}
        <div className={styles.sevaIntro}>
          <OrnamentalDivider />
          <div className={styles.sevaHeaderText}>
            <h3 className={styles.sevaTitle}>Pooja &amp; Seva Bookings</h3>
            <p className={styles.sevaSubtitle}>Offer sacred seva in the divine name of Lord Sri Krishna — open to all devotees</p>
          </div>
        </div>

        {/* ── Seva Cards ── */}
        <div ref={sevaRef} className={styles.sevaGrid}>
          {sevaServices.map((seva, i) => (
            <div
              key={seva.id}
              className={`${styles.sevaCard} reveal reveal-delay-${i + 1} ${sevaVisible ? 'is-visible' : ''}`}
            >
              {seva.image && (
                <div className={styles.sevaImgWrapper}>
                  <img src={seva.image} alt={seva.name} className={styles.sevaImg} loading="lazy" />
                </div>
              )}
              <div className={styles.sevaTop}>
                <div>
                  <h4 className={styles.sevaName}>{seva.name}</h4>
                </div>
              </div>

              <p className={styles.sevaDesc}>{seva.description}</p>

              <div className={styles.sevaMeta}>
                <span className={styles.sevaMetaItem}>
                  <span aria-hidden="true">✦</span> {seva.timings}
                </span>
                <span className={styles.sevaMetaItem}>
                  <span aria-hidden="true">✦</span> {seva.duration}
                </span>
              </div>

              <button
                className={`btn btn--primary ${styles.sevaBtn}`}
                onClick={() => openModal('seva', seva)}
              >
                Book Seva
              </button>
            </div>
          ))}
        </div>

        {/* Donation nudge */}
        <div className={`${styles.donateNudge} reveal ${sevaVisible ? 'is-visible' : ''}`}>
          <div className={styles.nudgeContent}>
            <span className={styles.nudgeIcon} aria-hidden="true">✦</span>
            <div>
              <p className={styles.nudgeText}>
                Support the temple through <strong>Annadanam</strong>, <strong>Nityaseva</strong>,
                or <strong>Utsav Sponsorship</strong>. Every humble offering is received by the Lord.
              </p>
            </div>
          </div>
          <button className="btn btn--gold" onClick={() => openModal('donation')}>
            Donate to the Temple
          </button>
        </div>

      </div>
    </section>
  );
}
