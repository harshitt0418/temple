/**
 * VisitSection.jsx
 * Aligned with Client Reference:
 * ZERO Yellow: All icons are clean SVGs, all borders and badges are red, green or stone.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { templeInfo } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './VisitSection.module.css';

export default function VisitSection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.06 });

  return (
    <section id="visit" className={styles.section} aria-label="Visiting the temple">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="PLAN YOUR PILGRIMAGE"
            title="Come, Seek Divine Blessings"
            subtitle="దర్శన సమాచారం & ఆలయ మార్గదర్శిని"
          />
        </div>

        <div ref={gridRef} className={styles.grid}>

          {/* ── Left: Map & Contact Actions ── */}
          <div className={`${styles.mapCol} reveal-left ${gridVisible ? 'is-visible' : ''}`}>
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <span className={styles.mapHeaderIcon}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h3 className={styles.mapTempleName}>{templeInfo.name}</h3>
                  <p className={styles.mapCity}>Kurnool, Andhra Pradesh · 518 001</p>
                </div>
              </div>

              <div className={styles.mapFrame}>
                <div className={styles.mapMock}>
                  <div className={styles.mapPin}>
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-red-sacred)" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className={styles.pinPulse} />
                  </div>
                  <p className={styles.mapLocationText}>Temple Road, Near Old Bus Stand, Kurnool</p>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=Sri+Krishna+Temple+Kurnool+Andhra+Pradesh`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--primary ${styles.directionsBtn}`}
              >
                Open Directions in Google Maps
              </a>
            </div>

            {/* Quick Contact Buttons */}
            <div className={styles.quickContact}>
              <a href={`tel:${templeInfo.contact.phone1}`} className={styles.contactBtn}>
                Call Desk: {templeInfo.contact.phone1}
              </a>
              <a
                href={templeInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
              >
                WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={() => openModal('contact')}
                className={styles.contactBtn}
              >
                Send Message to Temple Trust
              </button>
            </div>
          </div>

          {/* ── Right: Guidelines & Timings ── */}
          <div className={`${styles.infoCol} reveal-right ${gridVisible ? 'is-visible' : ''}`}>

            {/* Address Card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Sacred Address</h3>
              <address className={styles.address}>
                <strong>{templeInfo.name} ({templeInfo.nameTelugu})</strong><br />
                {templeInfo.address.line1}<br />
                {templeInfo.address.city}, {templeInfo.address.state}<br />
                PIN Code: {templeInfo.address.pincode}
              </address>
            </div>

            {/* Key Darshan Timings */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>General Darshan Timings</h3>
              <ul className={styles.timingsList}>
                <li className={styles.timingRow}>
                  <span className={styles.bullet}>✦</span>
                  <span className={styles.timingName}>Morning Darshan:</span>
                  <span className={styles.timingTime}>5:30 AM – 1:00 PM</span>
                </li>
                <li className={styles.timingRow}>
                  <span className={styles.bullet}>✦</span>
                  <span className={styles.timingName}>Evening Darshan:</span>
                  <span className={styles.timingTime}>4:30 PM – 9:00 PM</span>
                </li>
                <li className={styles.timingRow}>
                  <span className={styles.bullet}>✦</span>
                  <span className={styles.timingName}>Nitya Annadanam:</span>
                  <span className={styles.timingTime}>12:30 PM – 2:30 PM</span>
                </li>
              </ul>
            </div>

            {/* How to Reach */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Reaching Kurnool</h3>
              <ul className={styles.reachList}>
                <li className={styles.reachItem}>
                  <span className={styles.reachBullet}>✦</span>
                  <span><strong>APSRTC Bus:</strong> Frequent buses connect Kurnool bus stand directly to the temple.</span>
                </li>
                <li className={styles.reachItem}>
                  <span className={styles.reachBullet}>✦</span>
                  <span><strong>Railway:</strong> Kurnool City Railway Station (KRNT) is approx. 3.2 km away.</span>
                </li>
                <li className={styles.reachItem}>
                  <span className={styles.reachBullet}>✦</span>
                  <span><strong>By Road:</strong> Located right along the historic route connected to NH-44.</span>
                </li>
              </ul>
            </div>

            {/* Devotee Guidelines */}
            <div className={`${styles.infoCard} ${styles.tipsCard}`}>
              <h3 className={styles.infoCardTitle}>Devotee Sanctum Guidelines</h3>
              <ul className={styles.tipsList}>
                <li>Traditional Indian attire is encouraged for sanctum darshan</li>
                <li>Please deposit footwear safely at the temple counters outside</li>
                <li>Maintain peaceful silence and refrain from mobile usage inside the sanctum</li>
                <li>Free blessed prasadam (teertha & tulasi) is distributed to every devotee</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
