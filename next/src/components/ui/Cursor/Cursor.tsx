'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { CursorTypes } from './Cursor.types';

import styles from './Cursor.module.scss';

export default function Cursor({ trackingAreaRef, text, active }: CursorTypes) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 550, damping: 30 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const trackingArea = trackingAreaRef?.current;
    if (!trackingArea) return;

    function mouseMove(e: MouseEvent) {
      cursorX.set(e.clientX - 56);
      cursorY.set(e.clientY - 56);
    }

    trackingArea.addEventListener('mousemove', mouseMove as EventListener);
    return () => trackingArea.removeEventListener('mousemove', mouseMove as EventListener);
  }, [trackingAreaRef]);

  if (!trackingAreaRef?.current) return null;

  return (
    <motion.div
      style={{ x: cursorXSpring, y: cursorYSpring }}
      initial={{ scale: 0 }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.1, delay: 0.15 }}
      className={styles['Cursor']}
    >
      {text && <span>{text}</span>}
    </motion.div>
  );
}
