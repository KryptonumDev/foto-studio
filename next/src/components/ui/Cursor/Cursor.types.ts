import type { MotionValue } from 'framer-motion';

export type CursorTypes = {
  scale: number;
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  text?: string;
};

export type UseCursorTypes = {
  updatePosition: React.MouseEventHandler<HTMLElement>;
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
