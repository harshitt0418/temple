/**
 * App.jsx — Client-Ready Prototype
 * Wraps root layout with ModalProvider, DevotionalModal, and persistent BottomBar.
 */

import { ModalProvider } from './context/ModalContext';
import AnnouncementStrip from './components/layout/AnnouncementStrip';
import Header            from './components/layout/Header';
import Footer            from './components/layout/Footer';
import BottomBar         from './components/layout/BottomBar';
import ScrollProgress    from './components/ui/ScrollProgress';
import DevotionalModal   from './components/ui/DevotionalModal';
import HomePage          from './pages/HomePage';

export default function App() {
  return (
    <ModalProvider>
      {/* Accessibility: skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Gold scroll progress indicator (top of viewport) */}
      <ScrollProgress />

      {/* Global announcement ticker */}
      <AnnouncementStrip />

      {/* Sticky primary navigation with Toran & Peacock crest */}
      <Header />

      {/* Page content */}
      <HomePage />

      {/* Footer with contact */}
      <Footer />

      {/* Persistent Bottom Bar + Scroll to Top */}
      <BottomBar />

      {/* Interactive Devotional Modal for client demonstration */}
      <DevotionalModal />
    </ModalProvider>
  );
}
