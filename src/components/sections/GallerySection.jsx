/**
 * GallerySection.jsx (Chitramalika / చిత్రమాలిక)
 * Aligned with Client Reference Screenshots (02.20.50 3 & 02.20.52 2):
 * - Deep dark green backdrop (#0D1D16)
 * - Red Telugu pill: "చిత్రమాలిక"
 * - Filter pills for Sanctum, Campus, Festivals, Annadanam
 * - Real temple images extracted from client reference photos
 * - Interactive Lightbox / Modal preview
 */

import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { galleryCategories, galleryItems } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  const { openModal } = useModal();
  const [headRef, headVisible] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className={styles.section} aria-label="Temple Photo Gallery">
      <div className="container">

        {/* Section Header */}
        <div ref={headRef} className={`${styles.header} reveal ${headVisible ? 'is-visible' : ''}`}>
          <div className={styles.teluguPill}>
            <span className={styles.pillDot}>✦</span>
            <span>చిత్రమాలిక</span>
            <span className={styles.pillDot}>✦</span>
          </div>

          <h2 className={styles.title}>Temple Gallery &amp; Sanctum Glimpses</h2>
          <p className={styles.subtitle}>
            Divine glimpses of Sri Krishna sanctum, daily puja, festival processions and community Annadanam
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filters} role="tablist" aria-label="Gallery category filters">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.filterTelugu}>({cat.telugu})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Real Images Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className={styles.card}
              onClick={() => openModal('event', {
                title: item.title,
                time: item.tag,
                desc: `Authentic photograph from Sri Krishna Temple, Kurnool. Category: ${item.category}.`,
              })}
            >
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.tagBadge}>{item.tag}</span>
                  <span className={styles.zoomIcon} aria-hidden="true">🔍</span>
                </div>
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.cardTitle}>{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram / Devotee Link */}
        <div className={styles.bottomBar}>
          <a
            href="https://www.instagram.com/kurnool_spiritucal/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold"
            style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
          >
            📸 Follow @kurnool_spiritucal on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
