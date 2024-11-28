'use client';
import { useEffect, useRef, createContext, useContext, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

type ScrollStateTypes = {
  updateScroll: (element: HTMLElement) => void;
};

const SmoothScrollContext = createContext<ScrollStateTypes | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [smoothScroll, setSmoothScroll] = useState(false);

  useEffect(() => {
    const updateSmoothScrollState = () => {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobile = mobileRegex.test(navigator.userAgent) || window.innerWidth <= 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setSmoothScroll(!isMobile && !prefersReducedMotion);
    };

    updateSmoothScrollState();

    const handleResize = () => updateSmoothScrollState();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (smoothScroll && !locomotiveScrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll();
    } else if (!smoothScroll && locomotiveScrollRef.current) {
      locomotiveScrollRef.current.destroy();
      locomotiveScrollRef.current = null;
    }
  }, [smoothScroll]);

  const updateScroll = (element: HTMLElement) => {
    if (locomotiveScrollRef?.current) locomotiveScrollRef.current.addScrollElements(element);
  };

  return <SmoothScrollContext.Provider value={{ updateScroll }}>{children}</SmoothScrollContext.Provider>;
}

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  return context;
};
