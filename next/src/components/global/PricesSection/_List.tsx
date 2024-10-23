'use client';
import { motion, cubicBezier } from 'framer-motion';
import { useState } from 'react';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import Img from '@/components/ui/Img';
import type { ListTypes } from './PricesSection.types';

import styles from './PricesSection.module.scss';

export default function List({ list, index }: ListTypes) {
  const { mouse, updatePosition } = useCursor(138, 180);
  const [scale, setScale] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <ul
        className={styles.list}
        onMouseMove={updatePosition}
        onMouseOut={() => {
          setScale(0);
        }}
        onMouseOver={e => {
          updatePosition(e);
          setScale(1);
        }}
      >
        {list.map(({ name, priceLabel, paragraph }, i) => (
          <li
            key={`prices-section-${i}`}
            className={styles.listItem}
            onMouseEnter={() => setHoveredIndex(i)}
          >
            <header>
              {priceLabel}
              {name}
            </header>
            <div className={styles.content}>{paragraph}</div>
          </li>
        ))}
      </ul>
      <Cursor
        mouse={mouse}
        scale={scale}
        className={styles.cursor}
      >
        <motion.div
          className={styles.images}
          animate={{
            y: hoveredIndex ? hoveredIndex * -180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: cubicBezier(0.1, 0, 0.4, 1),
          }}
        >
          {list.map(({ img }, i) => (
            <Img
              key={`prices-section-img-${i}`}
              data={img}
              sizes='138px'
              priority={index === 0}
            />
          ))}
        </motion.div>
      </Cursor>
    </>
  );
}
