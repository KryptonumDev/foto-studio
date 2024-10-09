'use client';
import { useEffect, useRef, createContext, useContext } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

type ScrollStateTypes = {
  updateScroll: (element: HTMLElement) => void;
};

const ScrollContext = createContext<ScrollStateTypes | null>(null);

export function SmoothScrollingProvider({ children }: { children: React.ReactNode }) {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => locomotiveScrollRef.current?.destroy();
  }, []);

  const updateScroll = (element: HTMLElement) => {
    if (locomotiveScrollRef?.current) locomotiveScrollRef.current.addScrollElements(element);
  };

  return <ScrollContext.Provider value={{ updateScroll }}>{children}</ScrollContext.Provider>;
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScroll must be used within a SmoothScrollingProvider');
  return context;
};
