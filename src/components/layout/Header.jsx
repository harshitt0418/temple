/**
 * Header.jsx
 * Primary navigation header — sticky, scroll-aware.
 * Logo (placeholder for real asset) + nav links + CTA button.
 * Mobile: hamburger menu with slide-in drawer.
 */

import { useState, useEffect, useCallback } from 'react';
import { navLinks, templeInfo } from '../../data/mock-data';
import { useModal } from '../../context/ModalContext';
import styles from './Header.module.css';

// Logo placeholder — SVG Om symbol with "TEMPLE" wordmark
// This will be replaced with the real logo asset in Part 2
function LogoPlaceholder() {
  return (
    <div className={styles.logo} aria-label={`${templeInfo.name} Logo`}>
      <div className={styles.logoIcon} aria-hidden="true">
        {/* Stylised Om — sacred character */}
        <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
          <circle cx="24" cy="24" r="22" stroke="var(--color-gold)" strokeWidth="1.5" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Noto Serif Devanagari, serif"
            fontSize="26"
            fill="var(--color-burgundy-deep)"
          >
            ॐ
          </text>
        </svg>
      </div>
      <div className={styles.logoText}>
        <span className={styles.logoName}>{templeInfo.name}</span>
        <span className={styles.logoTagline}>{templeInfo.deityDevanagari}</span>
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
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMobileOpen(false);
    // Smooth scroll to section
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
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className={styles.logoLink}
            aria-label="Go to home"
          >
            <LogoPlaceholder />
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

          {/* CTA — Donate / Seva */}
          <div className={styles.actions}>
            <button
              className="btn btn--primary"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
              onClick={() => openModal('seva')}
            >
              Book Seva
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

        {/* Gold bottom accent line */}
        <div className={styles.goldAccent} aria-hidden="true" />
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div className={styles.drawerHeader}>
          <span className={styles.drawerOm} aria-hidden="true">ॐ</span>
          <span className={styles.drawerTitle}>{templeInfo.name}</span>
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
            🪔 Book Seva Appointment
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
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
