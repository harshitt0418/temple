/**
 * App.jsx — Client-Ready Prototype
 * Wraps root layout with ModalProvider and DevotionalModal for authentic interactions.
 */

import { ModalProvider } from './context/ModalContext';
import AnnouncementStrip from './components/layout/AnnouncementStrip';
import Header            from './components/layout/Header';
import Footer            from './components/layout/Footer';
import ScrollProgress    from './components/ui/ScrollProgress';
import FloatingSeva      from './components/ui/FloatingSeva';
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

      {/* Sticky primary navigation */}
      <Header />

      {/* Page content */}
      <HomePage />

      {/* Footer with contact */}
      <Footer />

      {/* Floating seva button (appears after scrolling) */}
      <FloatingSeva />

      {/* Interactive Devotional Modal for client demonstration */}
      <DevotionalModal />
    </ModalProvider>
  );
}
