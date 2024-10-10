'use client';
import { useRef, useEffect } from 'react';
import { animate, useInView } from 'framer-motion';

type CounterTypes = {
  value: number;
};

const formatter = new Intl.NumberFormat('pl-PL');

export default function Counter({ value }: CounterTypes) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const element = ref.current;

    if (!element || !isInView) return;

    const controls = animate(0, value, {
      type: 'spring',
      damping: 100,
      stiffness: 200,
      onUpdate: val => (element.textContent = formatter.format(Math.round(val))),
    });

    return () => controls.stop();
  }, [ref, isInView, value]);

  return <span ref={ref}>{new Intl.NumberFormat('pl-PL').format(value)}</span>;
}
