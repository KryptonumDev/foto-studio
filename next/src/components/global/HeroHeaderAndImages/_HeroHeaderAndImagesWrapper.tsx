'use client';
import { useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/components/ui/SmoothScroll';
import styles from './HeroHeaderAndImages.module.scss';

export default function HeroHeaderAndImagesWrapper({ children }: { children: React.ReactNode }) {
  const { updateScroll } = useSmoothScroll();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref?.current) updateScroll(ref.current);
  }, [updateScroll]);

  return (
    <section
      ref={ref}
      className={`${styles['HeroHeaderAndImages']} max-width`}
    >
      {children}
    </section>
  );
}
