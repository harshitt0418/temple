/**
 * Footer.jsx
 * Rich cultural footer with temple info, quick links, timings,
 * and social icons. Deep burgundy background.
 */

import { templeInfo, darshanTimings, navLinks } from '../../data/mock-data';
import OrnamentalDivider from '../ui/OrnamentalDivider';
import { useModal } from '../../context/ModalContext';
import styles from './Footer.module.css';

// Social icon placeholder SVGs
const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  ),
};

export default function Footer() {
  const { openModal } = useModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer} role="contentinfo">
      {/* Top ornamental border */}
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* ── Column 1: Temple Identity ── */}
        <div className={styles.col}>
          <div className={styles.footerBrand}>
            <img src="/assets/logos/logo-reverse.png" alt="Shri Krishna Mandir Logo" className={styles.footerLogoImg} />
            <div>
              <h3 className={styles.footerName}>{templeInfo.name}</h3>
              <p className={styles.footerDeity}>{templeInfo.locationTagline}</p>
            </div>
          </div>

          <p className={styles.footerTagline}>{templeInfo.tagline}</p>

          <OrnamentalDivider color="var(--color-gold-pale)" />

          {/* Social Links */}
          <div className={styles.social}>
            <a
              href={templeInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Temple Instagram"
            >
              <SocialIcons.Instagram />
            </a>
            <a
              href={templeInfo.social.facebook}
              className={styles.socialLink}
              aria-label="Temple Facebook"
            >
              <SocialIcons.Facebook />
            </a>
            <a
              href={templeInfo.social.youtube}
              className={styles.socialLink}
              aria-label="Temple YouTube"
            >
              <SocialIcons.Youtube />
            </a>
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Quick Links</h4>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.footerLink}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className={styles.linkDot} aria-hidden="true">✦</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Darshan Timings ── */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Darshan Timings</h4>
          <ul className={styles.timingsList}>
            {darshanTimings.map((t) => (
              <li key={t.id} className={styles.timingItem}>
                <span className={styles.timingIcon} aria-hidden="true">✦</span>
                <div>
                  <span className={styles.timingSession}>{t.session}</span>
                  <span className={styles.timingTime}>{t.time}</span>
                  {t.note && <span className={styles.timingNote}>{t.note}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: Contact ── */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Visit & Contact</h4>

          <address className={styles.address}>
            <div className={styles.addressItem}>
              <span className={styles.addressIcon} aria-hidden="true">✦</span>
              <span>
                {templeInfo.address.line1},<br />
                {templeInfo.address.line2},<br />
                {templeInfo.address.city} — {templeInfo.address.pincode}
              </span>
            </div>

            <div className={styles.addressItem}>
              <span className={styles.addressIcon} aria-hidden="true">✦</span>
              <div>
                <a href={`tel:${templeInfo.contact.phone1}`} className={styles.contactLink}>
                  {templeInfo.contact.phone1}
                </a>
                <a href={`tel:${templeInfo.contact.phone2}`} className={styles.contactLink}>
                  {templeInfo.contact.phone2}
                </a>
              </div>
            </div>

            <div className={styles.addressItem}>
              <span className={styles.addressIcon} aria-hidden="true">✦</span>
              <a href={`mailto:${templeInfo.contact.email}`} className={styles.contactLink}>
                {templeInfo.contact.email}
              </a>
            </div>
          </address>

          {/* Enquiry CTA */}
          <button
            type="button"
            className={`btn btn--outline-cream ${styles.enquiryBtn}`}
            onClick={() => openModal('contact')}
          >
            Send Enquiry
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {currentYear} {templeInfo.name}. All rights reserved.
          </p>
          <p className={styles.devotion}>
            <span aria-hidden="true">ॐ</span>&nbsp;
            Designed with devotion for devotees of Lord Sri Krishna
          </p>
        </div>
      </div>
    </footer>
  );
}
