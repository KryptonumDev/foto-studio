import { useSpring, useMotionValue } from 'framer-motion';
import type { UseCursorTypes } from '../Cursor.types';

export const useCursor = (width?: number, height?: number): UseCursorTypes => {
  const x = useSpring(useMotionValue(0), { stiffness: 560, damping: 40 });
  const y = useSpring(useMotionValue(0), { stiffness: 560, damping: 40 });

  const updatePosition = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    x.set(e.clientX - (width ? width / 2 : 56));
    y.set(e.clientY - (height ? height / 2 : 56));
  };

  return {
    updatePosition,
    mouse: { x, y },
  };
};
