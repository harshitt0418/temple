/**
 * HomePage.jsx — Part 2 (Full build)
 * Assembles all sections in the defined order.
 *
 * Section order:
 *  1. AnnouncementStrip  — rendered in App
 *  2. Header             — rendered in App
 *  3. Hero
 *  4. About
 *  5. Darshan, Pooja & Seva
 *  6. Festivals & Announcements
 *  7. Gallery
 *  8. School / Community
 *  9. Testimonials       — NEW in Part 2
 * 10. Visit
 * 11. Footer             — rendered in App
 */

import HeroSection          from '../components/sections/HeroSection';
import AboutSection         from '../components/sections/AboutSection';
import DarshanSection       from '../components/sections/DarshanSection';
import FestivalsSection     from '../components/sections/FestivalsSection';
import GallerySection       from '../components/sections/GallerySection';
import SchoolSection        from '../components/sections/SchoolSection';
import TestimonialsSection  from '../components/sections/TestimonialsSection';
import VisitSection         from '../components/sections/VisitSection';

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <DarshanSection />
      <FestivalsSection />
      <GallerySection />
      <SchoolSection />
      <TestimonialsSection />
      <VisitSection />
    </main>
  );
}
