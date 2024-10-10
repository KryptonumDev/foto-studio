import type { MotionValue } from 'framer-motion';

export type CursorTypes = {
  text?: string;
  scale: number;
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};

export type UseCursorTypes = {
  updatePosition: React.MouseEventHandler<HTMLElement>;
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
