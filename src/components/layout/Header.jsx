/**
 * Header.jsx
 * Authentic Hindu Temple Header with Traditional Toran Banner,
 * Peacock Feather Sacred Crest, and Bilingual Title (English + Telugu).
 * Aligned with Client Reference Screenshots.
 */

import { useState, useEffect, useCallback } from 'react';
import { navLinks, templeInfo } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './Header.module.css';

// Traditional Toran Banner SVG (repeating scalloped temple garland)
function ToranBanner() {
  return (
    <div className={styles.toranContainer} aria-hidden="true">
      <svg className={styles.toranSvg} viewBox="0 0 1200 24" preserveAspectRatio="repeat-x" fill="none">
        <pattern id="toranPattern" width="60" height="24" patternUnits="userSpaceOnUse">
          {/* Main scalloped triangle / pennant */}
          <path d="M0 0 L60 0 L30 18 Z" fill="#7B1C28" />
          <path d="M4 0 L56 0 L30 15 Z" fill="#8B2626" />
          {/* Gold bead border */}
          <circle cx="30" cy="18" r="2.5" fill="#E2B860" />
          <circle cx="15" cy="9" r="1.5" fill="#E2B860" />
          <circle cx="45" cy="9" r="1.5" fill="#E2B860" />
          <circle cx="0" cy="2" r="2" fill="#C8963C" />
          <circle cx="60" cy="2" r="2" fill="#C8963C" />
        </pattern>
        <rect width="100%" height="24" fill="url(#toranPattern)" />
      </svg>
    </div>
  );
}

// Sacred Peacock Feather Crest Logo
function PeacockLogo() {
  return (
    <div className={styles.logo} aria-label={`${templeInfo.name} Logo`}>
      <div className={styles.logoBadge} aria-hidden="true">
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none">
          {/* Dark Green Circular Base */}
          <circle cx="24" cy="24" r="22" fill="#13281F" stroke="#C8963C" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="19" stroke="#E2B860" strokeWidth="0.75" strokeDasharray="2 2" />
          {/* Peacock Feather Crest */}
          <path
            d="M24 8 C18 14 16 22 24 38 C32 22 30 14 24 8 Z"
            fill="#1E4D38"
            stroke="#C8963C"
            strokeWidth="0.8"
          />
          {/* Feather eye */}
          <ellipse cx="24" cy="18" rx="4.5" ry="6" fill="#0E291E" />
          <ellipse cx="24" cy="18" rx="3" ry="4" fill="#C8963C" />
          <circle cx="24" cy="18" r="2" fill="#8B2626" />
          <circle cx="24" cy="17" r="0.8" fill="#FFFFFF" />
          {/* Stem & flutes */}
          <path d="M24 24 L24 40" stroke="#C8963C" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={styles.logoText}>
        <span className={styles.logoName}>{templeInfo.name}</span>
        <span className={styles.logoTelugu}>{templeInfo.nameTelugu}</span>
      </div>
    </div>
  );
}

export default function Header() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        {/* Scalloped Traditional Toran Banner */}
        <ToranBanner />

        <div className={`container ${styles.inner}`}>
          {/* Temple Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className={styles.logoLink}
            aria-label="Sri Krishna Temple Home"
          >
            <PeacockLogo />
          </a>

          {/* Desktop Navigation */}
          <nav
            className={styles.nav}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles.navItem}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${activeSection === link.href ? styles.active : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Header Actions */}
          <div className={styles.actions}>
            {/* Heart / Devotee Wishlist Button */}
            <button
              className={styles.heartButton}
              onClick={() => openModal('seva')}
              aria-label="Saved Devotional Sevas"
              title="Saved Sevas"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>

            {/* Book Seva Primary CTA */}
            <button
              className="btn btn--primary"
              style={{ fontSize: '0.875rem', padding: '0.55rem 1.25rem' }}
              onClick={() => openModal('seva')}
            >
              🪔 Book Seva
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* Subtle Bottom Gold/Parchment Edge */}
        <div className={styles.goldAccent} aria-hidden="true" />
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogoWrap}>
            <span className={styles.drawerOm}>ॐ</span>
            <div>
              <span className={styles.drawerTitle}>{templeInfo.name}</span>
              <span className={styles.drawerTelugu}>{templeInfo.nameTelugu}</span>
            </div>
          </div>
          <button
            className={styles.drawerClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav role="navigation" aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileNavLink} ${activeSection === link.href ? styles.mobileActive : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerCta}>
          <button
            className="btn btn--primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMobileOpen(false); openModal('seva'); }}
          >
            🪔 Book Seva Online
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
