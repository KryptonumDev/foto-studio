'use client';
import { useEffect, useRef, createContext, useContext } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

type ScrollStateTypes = {
  updateScroll: (element: HTMLElement) => void;
};

const SmoothScrollContext = createContext<ScrollStateTypes | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => locomotiveScrollRef.current?.destroy();
  }, []);

  const updateScroll = (element: HTMLElement) => {
    if (locomotiveScrollRef?.current) locomotiveScrollRef.current.addScrollElements(element);
  };

  return <SmoothScrollContext.Provider value={{ updateScroll }}>{children}</SmoothScrollContext.Provider>;
}

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) throw new Error('useScroll must be used within a SmoothScrollingProvider');
  return context;
};
