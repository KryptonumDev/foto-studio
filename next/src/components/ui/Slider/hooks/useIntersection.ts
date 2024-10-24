import { useEffect, useState } from 'react';
import type { useIntersectionTypes } from '../Slider.types';

export function useIntersection({ containerRef }: useIntersectionTypes) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold: 0.5 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef]);

  return isIntersecting;
}
