'use client';
import { motion } from 'framer-motion';
import type { CursorTypes } from './Cursor.types';

import styles from './Cursor.module.scss';

export default function Cursor({ mouse: { x, y }, text, scale }: CursorTypes) {
  return (
    <motion.div
      style={{ x, y }}
      initial={{ scale: 0 }}
      animate={{ scale }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.4 }}
      className={styles['Cursor']}
    >
      {text && <span>{text}</span>}
    </motion.div>
  );
}
