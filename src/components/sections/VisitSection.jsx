/**
 * VisitSection.jsx — Part 2 (Full build)
 * How to reach + contact + map placeholder with full detail.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { templeInfo, darshanTimings } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './VisitSection.module.css';

export default function VisitSection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.06 });

  return (
    <section id="visit" className={`section ${styles.visit}`} aria-label="Visiting the temple">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Plan Your Visit"
            title="Come, Seek Blessings"
            subtitle="All are welcome — with folded hands and open hearts"
          />
        </div>

        <div ref={gridRef} className={styles.grid}>

          {/* ── Left: Map placeholder ── */}
          <div className={`${styles.mapCol} reveal-left ${gridVisible ? 'is-visible' : ''}`}>
            <div className={styles.mapWrap}>
              {/* Map placeholder — replace with Google Maps iframe */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapPinIcon} aria-hidden="true">📍</div>
                <p className={styles.mapPlaceholderTitle}>Shri Krishna Mandir</p>
                <p className={styles.mapPlaceholderSub}>Kurnool, Andhra Pradesh</p>
                <p className={styles.mapNote}>
                  Replace this block with a Google Maps embed:
                  <br />
                  <code className={styles.mapCode}>{'<iframe src="https://maps.google.com/..." />'}</code>
                </p>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=Shri+Krishna+Mandir+Kurnool+Andhra+Pradesh`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--primary ${styles.directionsBtn}`}
            >
              📍 Get Directions on Google Maps
            </a>

            {/* Quick contact */}
            <div className={styles.quickContact}>
              <a href={`tel:${templeInfo.contact.phone1}`} className={styles.contactBtn}>
                📞 Call Us
              </a>
              <a href={`https://wa.me/?text=Jai%20Shri%20Krishna!%20I%20would%20like%20to%20enquire%20about%20Shri%20Krishna%20Mandir%20Kurnool`}
                target="_blank" rel="noopener noreferrer"
                className={styles.contactBtn}>
                💬 WhatsApp
              </a>
              <button
                type="button"
                onClick={() => openModal('contact')}
                className={styles.contactBtn}
              >
                ✉ Email Desk
              </button>
            </div>
          </div>

          {/* ── Right: Info cards ── */}
          <div className={`${styles.infoCol} reveal-right ${gridVisible ? 'is-visible' : ''}`}>

            {/* Address */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>📍 Temple Address</h3>
              <address className={styles.address}>
                <strong>Shri Krishna Mandir</strong><br />
                {templeInfo.address.line1}<br />
                {templeInfo.address.city}, {templeInfo.address.state}<br />
                PIN: {templeInfo.address.pincode}
              </address>
            </div>

            {/* Timings */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>⏰ Darshan Timings</h3>
              <ul className={styles.timingsList}>
                {darshanTimings.map((t) => (
                  <li key={t.id} className={styles.timingRow}>
                    <span>{t.icon}</span>
                    <span className={styles.timingName}>{t.session}</span>
                    <span className={styles.timingTime}>{t.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to reach */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>🗺 How to Reach</h3>
              <ul className={styles.reachList}>
                {[
                  { icon: '🚌', label: 'Bus', val: 'Multiple APSRTC buses stop near the temple' },
                  { icon: '🚗', label: 'By Road', val: 'Kurnool is connected via NH-44 · Parking available' },
                  { icon: '🚂', label: 'Train', val: 'Kurnool City Railway Station — 3 km away' },
                  { icon: '✈️', label: 'Nearest Airport', val: 'Kurnool Airport — under development · Hyderabad 215 km' },
                ].map((item) => (
                  <li key={item.label} className={styles.reachItem}>
                    <span className={styles.reachIcon}>{item.icon}</span>
                    <span><strong>{item.label}:</strong> {item.val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visitor tips */}
            <div className={`${styles.infoCard} ${styles.tipsCard}`}>
              <h3 className={styles.infoCardTitle}>🙏 Visitor Guidelines</h3>
              <ul className={styles.tipsList}>
                <li>Remove footwear at the temple entrance</li>
                <li>Dress modestly — traditional attire preferred</li>
                <li>Maintain silence in the sanctum</li>
                <li>Photography permitted in common areas only</li>
                <li>Free prasad distributed after each aarti</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
