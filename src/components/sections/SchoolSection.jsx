/**
 * SchoolSection.jsx
 * Aligned with Client Reference:
 * - Pure cream background (no yellow)
 * - Dark green headings & text
 * - Telugu subtitles for activities
 * - Real photograph of Annadanam Prasad (/assets/images/annadanam-prasad.jpg)
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { schoolActivities } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './SchoolSection.module.css';

export default function SchoolSection() {
  const { openModal } = useModal();
  const [textRef, textVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.08 });

  return (
    <section id="school" className={styles.section} aria-label="Temple school and community">
      <div className="container">
        <div className={styles.layout}>

          {/* ── Left: Content ── */}
          <div ref={textRef} className={`${styles.content} reveal-left ${textVisible ? 'is-visible' : ''}`}>
            <SectionLabel
              eyebrow="COMMUNITY & DHARMIC LEARNING"
              title="Heritage School & Annadanam"
              subtitle="వేద పాఠశాల & నిత్య అన్నదాన ట్రస్ట్"
              align="left"
              showDivider={true}
            />

            <p className={styles.intro}>
              Rooted in timeless Vedic traditions, <strong>Sri Krishna Temple</strong> conducts a weekend Veda Pathashala, Sanskrit shloka circles, and spiritual education to instill cultural pride and devotion in younger generations.
            </p>

            <div ref={cardsRef} className={styles.activitiesGrid}>
              {schoolActivities.map((activity, i) => (
                <div
                  key={activity.id}
                  className={`${styles.activityCard} reveal reveal-delay-${i+1} ${cardsVisible ? 'is-visible' : ''}`}
                >
                  <div className={styles.activityIcon} aria-hidden="true">{activity.icon}</div>
                  <div className={styles.activityContent}>
                    <h4 className={styles.activityName}>{activity.name}</h4>
                    <p className={styles.activityTelugu}>{activity.telugu}</p>
                    <p className={styles.activityDesc}>{activity.description}</p>
                    <div className={styles.activityMeta}>
                      <span className={styles.metaTag}>✦ {activity.schedule}</span>
                      <span className={styles.metaTag}>✦ {activity.ageGroup}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <button
                className="btn btn--primary"
                onClick={() => openModal('school')}
              >
                Enrol Your Child
              </button>
              <button
                className="btn btn--outline"
                onClick={() => openModal('donation', { cause: 'Nitya Annadanam' })}
              >
                Sponsor Annadanam
              </button>
            </div>
          </div>

          {/* ── Right: Visual panel with Real Annadanam Photo ── */}
          <div className={`${styles.visual} reveal-right ${textVisible ? 'is-visible' : ''}`}>
            {/* Real Annadanam Card */}
            <div className={styles.annadanamCard}>
              <div className={styles.imageWrap}>
                <img
                  src="/assets/images/annadanam-prasad.jpg"
                  alt="Maha Annadanam hot pongal and meal distribution at Sri Krishna Temple"
                  className={styles.annadanamImage}
                  loading="lazy"
                />
                <div className={styles.annadanamBadge}>
                  <span>✦ నిత్య అన్నదానం · Nitya Annadanam</span>
                </div>
              </div>

              <div className={styles.annadanamBody}>
                <h4 className={styles.annadanamTitle}>Over 500 Blessed Meals Served Daily</h4>
                <p className={styles.annadanamDesc}>
                  Every pilgrim visiting the temple is fed with wholesome ghee pongal, hot sambar rice, and prasadam prepared in pure temple kitchen with sacred devotion.
                </p>

                <div className={styles.sponsorBar}>
                  <div>
                    <span className={styles.sponsorLabel}>One Day Sponsorship</span>
                    <span className={styles.sponsorAmount}>₹ 1,500</span>
                  </div>
                  <button
                    className="btn btn--primary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}
                    onClick={() => openModal('donation', { cause: 'Annadanam One Day' })}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            {/* Values chips */}
            <div className={styles.chips}>
              {['Veda Chanting', 'Annadanam', 'Sanskrit', 'Vaishnava Kirtan', 'Gita Classes', 'Seva'].map((v) => (
                <span key={v} className={styles.chip}>✦ {v}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
