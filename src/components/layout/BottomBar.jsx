/**
 * BottomBar.jsx
 * Aligned with Client Reference Screenshots (02.20.51 & 02.20.52):
 * - Fixed persistent quick-access navigation at bottom
 * - Live Darshan (Highlighted sacred red pill)
 * - Directions (Google Maps shortcut)
 * - Temple Store (Prasadam & books)
 * - WhatsApp (Direct chat with temple desk)
 * - Floating circular red Scroll-To-Top button (↑)
 */

import { useState, useEffect } from 'react';
import { templeInfo } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './BottomBar.module.css';

export default function BottomBar() {
  const { openModal } = useModal();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLiveDarshan = () => {
    openModal('event', {
      title: 'Sri Krishna Live Darshan (ప్రత్యక్ష ప్రసారం)',
      time: 'Daily Streaming · 6:00 AM – 12:30 PM & 5:00 PM – 8:30 PM',
      desc: 'Watch real-time live darshan of Lord Sri Krishna, Suprabhata Seva, and Maha Deeparadhana from Kurnool temple sanctum.',
    });
  };

  return (
    <>
      {/* Floating Scroll to Top Red Button (↑) */}
      <button
        className={`${styles.scrollTopBtn} ${showScrollTop ? styles.showBtn : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Persistent Bottom Bar */}
      <nav className={styles.bottomBar} role="navigation" aria-label="Quick Access Bar">
        <div className={styles.inner}>

          {/* 1. Live Darshan (Active Red Pill) */}
          <button
            className={`${styles.barItem} ${styles.liveItem}`}
            onClick={handleLiveDarshan}
          >
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </div>
            <span className={styles.barLabel}>Live Darshan</span>
          </button>

          {/* 2. Directions */}
          <a
            href="https://maps.google.com/?q=Sri+Krishna+Temple+Kurnool+Andhra+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.barItem}
          >
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
            </div>
            <span className={styles.barLabel}>Directions</span>
          </a>

          {/* 3. Temple Store */}
          <button
            className={styles.barItem}
            onClick={() => openModal('seva', { name: 'Temple Store · Sacred Prasadam & Books' })}
          >
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <span className={styles.barLabel}>Store</span>
          </button>

          {/* 4. WhatsApp */}
          <a
            href={templeInfo.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.barItem} ${styles.whatsappItem}`}
          >
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.09c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.107 8.107 0 0 1-1.25-4.32c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.39 5.78c0 4.51-3.67 8.17-8.17 8.17z"/>
              </svg>
            </div>
            <span className={styles.barLabel}>WhatsApp</span>
          </a>

        </div>
      </nav>
    </>
  );
}
