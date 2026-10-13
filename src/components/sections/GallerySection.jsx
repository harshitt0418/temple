/**
 * GallerySection.jsx — Part 2 (Full build)
 * Elegant CSS ornamental panels where photos will go.
 * Masonry-style grid with hover reveals and caption overlays.
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { galleryItems } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './GallerySection.module.css';

// Ornamental panel — cream/burgundy/gold aesthetic
// Replaces stock images as per the non-negotiable visual rule
function OrnamentalPanel({ label, number }) {
  return (
    <div className={styles.panel}>
      {/* Corner frame marks */}
      <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

      {/* SVG lotus centre */}
      <svg viewBox="0 0 80 80" fill="none" className={styles.panelLotus} aria-hidden="true">
        {[0, 60, 120, 30, 90, 150].map((deg, i) => (
          <ellipse key={i} cx="40" cy="40" rx="8" ry="26"
            fill="var(--color-burgundy)" opacity={i < 3 ? 0.18 : 0.1}
            transform={`rotate(${deg} 40 40)`} />
        ))}
        <circle cx="40" cy="40" r="8" fill="var(--color-burgundy)" opacity="0.2" />
        <circle cx="40" cy="40" r="4" fill="var(--color-gold)" opacity="0.4" />
      </svg>

      <div className={styles.panelLabel}>{label}</div>
      <div className={styles.panelNum}>{String(number).padStart(2, '0')}</div>
    </div>
  );
}

export default function GallerySection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="gallery" className={`section ${styles.gallery}`} aria-label="Temple gallery">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Glimpses of Divinity"
            title="Temple Gallery"
            subtitle="Every corner of this temple holds a story of devotion"
          />
        </div>

        <div ref={gridRef} className={styles.grid}>
          {galleryItems.map((item, i) => (
            <figure
              key={item.id}
              className={`${styles.item} ${styles[`item--${item.aspect}`]} reveal reveal-delay-${Math.min(i+1,5)} ${gridVisible ? 'is-visible' : ''}`}
              aria-label={item.label}
              onClick={() => openModal('event', { name: item.label, description: `Sacred photography of ${item.label} at Shri Krishna Mandir, Kurnool.` })}
            >
              <OrnamentalPanel label={item.label} number={item.id} />
              <figcaption className={styles.caption}>
                <span className={styles.captionText}>{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Note */}
        <div className={`${styles.galleryNote} reveal ${gridVisible ? 'is-visible' : ''}`}>
          <span aria-hidden="true">📸</span>
          <p>Photography gallery coming soon — real temple photos will be placed here once provided.</p>
        </div>

        <div className={`${styles.viewAll} reveal ${gridVisible ? 'is-visible' : ''}`}>
          <button
            className="btn btn--primary"
            onClick={() => openModal('event', { name: 'Sacred Temple Photo Archive', description: 'Real high-resolution photographs of Shri Krishna Mandir sanctum, daily aartis, and annual Janmashtami processions will be featured here once provided.' })}
          >
            View Full Gallery
          </button>
          <a
            href="https://www.instagram.com/kurnool_spiritucal/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            📸 Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
