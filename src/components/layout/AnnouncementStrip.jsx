/**
 * AnnouncementStrip.jsx
 * Marquee-style announcement ticker at the very top of the page.
 * Dark green background, cream text, sacred red separators between items.
 */

import { useState } from 'react';
import { announcements } from '../../data/mock-data';
import styles from './AnnouncementStrip.module.css';

export default function AnnouncementStrip() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Duplicate items so the marquee loops smoothly
  const tickerItems = [...announcements, ...announcements];

  return (
    <div className={styles.strip} role="marquee" aria-label="Temple Announcements">
      <div className={styles.inner}>
        {/* Static label */}
        <div className={styles.label} aria-hidden="true">
          <span className={styles.om}>ॐ</span>
          <span className={styles.labelText}>NOTICES</span>
        </div>

        {/* Scrolling ticker */}
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            {tickerItems.map((text, idx) => (
              <span key={idx} className={styles.tickerItem}>
                {text}
                <span className={styles.separator} aria-hidden="true"> ✦ </span>
              </span>
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          className={styles.close}
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcements"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
