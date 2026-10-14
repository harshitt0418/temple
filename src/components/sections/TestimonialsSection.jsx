/**
 * TestimonialsSection.jsx
 * Aligned with Client Reference:
 * - Soothing cream background (zero yellow cast)
 * - Dark green headings & text
 * - Telugu subtitle
 */

import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionLabel from '../ui/SectionLabel';
import { devoteeWords } from '../../data/mock-data';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [headRef, headVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      aria-label="Words from our devotees"
    >
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="DEVOTEE EXPERIENCES & BLESSINGS"
            title="Voices of Faith"
            subtitle="భక్తుల అనుభవాలు & దివ్య ఆశీస్సులు"
          />
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {devoteeWords.map((devotee, i) => (
            <blockquote
              key={devotee.id}
              className={`${styles.card} reveal reveal-delay-${i + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              <div className={styles.quoteMarkTop} aria-hidden="true">“</div>

              <p className={styles.quoteText}>{devotee.text}</p>

              <footer className={styles.cardFooter}>
                <div className={styles.avatar} aria-hidden="true">
                  {devotee.initials}
                </div>
                <div>
                  <cite className={styles.name}>{devotee.name}</cite>
                  <span className={styles.city}>📍 {devotee.city}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
