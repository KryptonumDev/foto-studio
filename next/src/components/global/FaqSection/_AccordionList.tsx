'use client';
import { useState } from 'react';
import { cubicBezier, motion } from 'framer-motion';
import type { AccordionListTypes } from './FaqSection.types';
import styles from './FaqSection.module.scss';

export default function AccordionList({ list, ArrowIcon }: AccordionListTypes) {
  const [activeIndex, setActiveIndex] = useState(0);

  const togglePanel = (index: number) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setActiveIndex(prev => (prev === index ? -1 : index));
    };
  };

  return (
    <div className={styles.accordionList}>
      {list?.map(({ _id, question, answer }, i) => (
        <details
          open
          key={_id}
          data-opened={activeIndex === i}
          onClick={togglePanel(i)}
        >
          <summary>
            <div className={styles.icon}>{ArrowIcon}</div>
            {question}
          </summary>
          <motion.div
            className={styles.answer}
            initial={false}
            animate={{ height: i === activeIndex ? 'auto' : 0, opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.2, ease: cubicBezier(0.1, 0, 0.4, 1) }}
          >
            {answer}
          </motion.div>
        </details>
      ))}
    </div>
  );
}
