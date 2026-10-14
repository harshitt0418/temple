/**
 * TestimonialsSection.jsx — Part 2 (New section)
 * Devotee words / community testimonials.
 * Deep burgundy background with elegant quote cards.
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
      className={`section ${styles.testimonials}`}
      aria-label="Words from our devotees"
    >
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <SectionLabel
            eyebrow="Devotee Stories"
            title="Words of Faith"
            subtitle="What our devotees say about Shri Krishna Mandir"
            light={true}
          />
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {devoteeWords.map((devotee, i) => (
            <blockquote
              key={devotee.id}
              className={`${styles.card} reveal reveal-delay-${i + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              {/* Large quote mark */}
              <div className={styles.quoteMarkTop} aria-hidden="true">"</div>

              <p className={styles.quoteText}>{devotee.text}</p>

              <div className={styles.quoteMark} aria-hidden="true">"</div>

              <footer className={styles.cardFooter}>
                <div className={styles.avatar} aria-hidden="true">
                  {devotee.initials}
                </div>
                <div>
                  <cite className={styles.name}>{devotee.name}</cite>
                  <span className={styles.city}>✦ {devotee.city}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
