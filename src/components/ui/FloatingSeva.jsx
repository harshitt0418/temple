/**
 * FloatingSeva.jsx
 * Floating "Book Seva" button — appears after scrolling 400px.
 * Fixed bottom-right corner. Triggers interactive Seva booking modal.
 */

import { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import styles from './FloatingSeva.module.css';

export default function FloatingSeva() {
  const { openModal } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    openModal('seva');
  };

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <button
        className={styles.button}
        onClick={handleClick}
        aria-label="Book a seva appointment"
        tabIndex={visible ? 0 : -1}
      >
        <span className={styles.icon} aria-hidden="true">ॐ</span>
        <span className={styles.text}>Book Seva</span>
      </button>
    </div>
  );
}
