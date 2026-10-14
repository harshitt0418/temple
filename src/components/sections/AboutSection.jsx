/**
 * AboutSection.jsx
 * Aligned with Client Reference:
 * - Pure cream background (no yellow)
 * - Dark green headings and lead text
 * - Telugu temple name: శ్రీ కృష్ణ దేవాలయం
 * - Real photograph of Sanctum Deity in sacred alankaram (/assets/images/krishna-sanctum.jpg)
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const [textRef, textVisible]   = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className={styles.section} aria-label="About Sri Krishna Temple">
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left: Text column ── */}
          <div
            ref={textRef}
            className={`${styles.textCol} reveal-left ${textVisible ? 'is-visible' : ''}`}
          >
            <SectionLabel
              eyebrow="SACRED HERITAGE & DEVOTION"
              title="Sri Krishna Temple"
              subtitle="శ్రీ కృష్ణ దేవాలయ పవిత్ర చరిత్ర — కర్నూలు"
              align="left"
              showDivider={true}
            />

            <p className={styles.lead}>
              Established in 1987 in the historic city of Kurnool, Andhra Pradesh, <strong>Sri Krishna Temple (శ్రీ కృష్ణ దేవాలయం)</strong> stands as a sacred spiritual sanctuary dedicated to the eternal divine grace of Lord Sri Krishna.
            </p>

            <p className={styles.body}>
              Enshrining the supreme Lord in his most enchanting Moolavar form adorned in radiant sacred alankaram, fresh tulasi malas, and sacred silken vastrams, the temple attracts thousands of devout pilgrims every week seeking peace, wisdom, and divine protection.
            </p>

            <p className={styles.body}>
              Beyond daily pujas and magnificent Brahmotsavams, the temple is committed to Dharmic seva through uninterrupted daily Annadanam, weekend Veda Pathashala for young children, and authentic Vaishnava sankirtan assemblies.
            </p>

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
                <span className={styles.statNum}>37+</span>
                <span className={styles.statLabel}>Years of Seva</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true">✦</div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10,000+</span>
                <span className={styles.statLabel}>Devotees Weekly</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="#darshan"
                className="btn btn--primary"
              >
                Today's Darshan Timings →
              </a>
              <a
                href="#gallery"
                className="btn btn--outline"
              >
                Chitramalika (Gallery)
              </a>
            </div>
          </div>

          {/* ── Right: Visual column with Real Deity Photo ── */}
          <div
            ref={imageRef}
            className={`${styles.visualCol} reveal-right ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className={styles.photoCard}>
              <div className={styles.photoArch}>
                <img
                  src="/assets/images/krishna-sanctum.jpg"
                  alt="Lord Sri Krishna sanctum deity in sacred alankaram"
                  className={styles.photoImage}
                  loading="lazy"
                />
                <div className={styles.photoCaption}>
                  <span className={styles.photoOm}>ॐ</span>
                  <div>
                    <span className={styles.photoTitle}>శ్రీ కృష్ణ పరమాత్మ</span>
                    <span className={styles.photoSubtitle}>Sanctum Sanctorum (గర్భాలయం)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info tiles */}
            <div className={styles.infoTiles}>
              <div className={styles.infoTile}>
                <span className={styles.infoTileBullet}>✦</span>
                <div>
                  <span className={styles.infoTileTitle}>Dravidian Gopuram Architecture</span>
                  <span className={styles.infoTileText}>Traditional South Indian sculpted vimana</span>
                </div>
              </div>
              <div className={styles.infoTile}>
                <span className={styles.infoTileBullet}>✦</span>
                <div>
                  <span className={styles.infoTileTitle}>Vedic Puja Paddhati</span>
                  <span className={styles.infoTileText}>Conducted by trained traditional archakas</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
