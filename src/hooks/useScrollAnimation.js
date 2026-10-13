/**
 * useScrollAnimation.js
 * Custom hook — triggers a CSS class when the element enters the viewport.
 * Used by every section for elegant scroll-in reveal animations.
 */

import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options;

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}
