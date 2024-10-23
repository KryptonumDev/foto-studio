'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { CursorTypes } from './Cursor.types';

import styles from './Cursor.module.scss';

export default function Cursor({ mouse: { x, y }, scale, children, className }: CursorTypes) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ x, y }}
      initial={{ scale: 0 }}
      animate={{ scale }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.4 }}
      className={className ? className : styles['Cursor']}
    >
      {children}
    </motion.div>
  );
}
