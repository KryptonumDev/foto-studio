'use client';
import { useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/components/ui/SmoothScroll';

export default function HeroHeaderAndImagesWrapper({ children }: { children: React.ReactNode }) {
  const { updateScroll } = useSmoothScroll();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) updateScroll(ref.current);
  }, [updateScroll]);

  return <div ref={ref}>{children}</div>;
}
