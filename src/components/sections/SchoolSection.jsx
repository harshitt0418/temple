/**
 * SchoolSection.jsx — Part 2 (Full build)
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
    <section id="school" className={`section section--cream ${styles.school}`} aria-label="Temple school and community">
      <div className="container">
        <div className={styles.layout}>

          {/* ── Left: Content ── */}
          <div ref={textRef} className={`${styles.content} reveal-left ${textVisible ? 'is-visible' : ''}`}>
            <SectionLabel
              eyebrow="Grow in Dharma"
              title="School & Community"
              subtitle="Rooted in tradition. Growing with the community."
              align="left"
              showDivider={true}
            />

            <p className={styles.intro}>
              The temple runs a vibrant <strong>Vedic Cultural School</strong> every weekend,
              offering children and adults an authentic connection to Indian heritage — Sanskrit,
              devotional music, yoga, and Dharmic values — all taught by trained and dedicated teachers.
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
                    <p className={styles.activityDesc}>{activity.description}</p>
                    <div className={styles.activityMeta}>
                      <span className={styles.metaTag}>📅 {activity.schedule}</span>
                      <span className={styles.metaTag}>👤 {activity.ageGroup}</span>
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
                onClick={() => openModal('school', { program: 'Brochure Request' })}
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* ── Right: Visual panel ── */}
          <div className={`${styles.visual} reveal-right ${textVisible ? 'is-visible' : ''}`}>
            {/* School illustration panel */}
            <div className={styles.visualPanel}>
              <div className={styles.panelInner}>
                <div className={styles.panelOm} aria-hidden="true">ॐ</div>
                <div className={styles.panelTitle}>Vedic Cultural School</div>
                <div className={styles.panelSubtitle}>Shri Krishna Mandir, Kurnool</div>

                <div className={styles.panelDivider} aria-hidden="true">✦ ✦ ✦</div>

                <ul className={styles.panelList}>
                  <li>📖 Sanskrit & Vedic Studies</li>
                  <li>🎵 Bhajan & Kirtan</li>
                  <li>🧘 Yoga & Pranayama</li>
                  <li>💃 Classical Arts</li>
                  <li>🍲 Annadanam Seva</li>
                </ul>

                <div className={styles.panelCta}>
                  <span className={styles.panelCtaText}>Admissions Open</span>
                  <span className={styles.panelCtaBadge}>2027–28</span>
                </div>
              </div>
            </div>

            {/* Values chips */}
            <div className={styles.chips}>
              {['Devotion', 'Culture', 'Sanskrit', 'Yoga', 'Community', 'Seva'].map(v => (
                <span key={v} className={styles.chip}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
