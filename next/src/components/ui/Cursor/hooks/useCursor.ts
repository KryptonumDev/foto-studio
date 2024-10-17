import { useSpring, useMotionValue } from 'framer-motion';
import type { UseCursorTypes } from '../Cursor.types';

export const useCursor = (): UseCursorTypes => {
  const x = useSpring(useMotionValue(0), { stiffness: 560, damping: 40 });
  const y = useSpring(useMotionValue(0), { stiffness: 560, damping: 40 });

  const updatePosition = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    x.set(e.clientX - 56);
    y.set(e.clientY - 56);
  };

  return {
    updatePosition,
    mouse: { x, y },
  };
};
