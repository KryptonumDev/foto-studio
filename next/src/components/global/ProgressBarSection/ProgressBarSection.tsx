'use client';
import { useEffect, useRef, Fragment } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import type { ProgressBarSectionTypes } from './ProgressBarSection.types';

import InlineImageHeading from '@/components/ui/InlineImageHeading';
import Paragraph from '@/components/ui/Paragraph';

import styles from './ProgressBarSection.module.css';
import { addLeadingZero } from '@/utils/add-leading-zero';

export default function ProgressBarSection({ heading, index, list }: ProgressBarSectionTypes) {
  const HeadingElement = index === 0 ? 'h1' : 'h2';

  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-73.5%']);
  const progressStep = useTransform(scrollYProgress, [0, 1], [0, 26]);

  useMotionValueEvent(progressStep, 'change', latest => {
    if (!containerRef?.current) return;

    const container = containerRef.current;
    const step = Math.round(latest);

    if (step > 25) return;

    const prevActiveLine = container.querySelector(`.${styles.active}`) as HTMLSpanElement;
    if (prevActiveLine) prevActiveLine.classList.remove(styles.active);

    const nextActiveLine = container.querySelector(`span[data-step='${step}']`) as HTMLSpanElement;
    if (nextActiveLine) nextActiveLine.classList.add(styles.active);
  });

  useEffect(() => {
    if (!containerRef?.current) return;

    const container = containerRef.current;
    const list = container.querySelector(`.${styles.points}`) as HTMLElement;
    const sticky = container.querySelector(`.${styles.sticky}`) as HTMLElement;
    const header = document.querySelector('#header') as HTMLElement;

    function updateLayout() {
      const headerHeight = header.getBoundingClientRect().height;
      let top = window.innerHeight - sticky.clientHeight;

      if (top > 0) top /= 2;
      if (top < headerHeight) top += Math.min(top, Math.max(headerHeight - top, 0)) - 10;

      sticky.style.top = `${top}px`;
      container.style.height = `${list.scrollWidth - sticky.clientWidth + sticky.clientHeight}px`;
    }

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles['progress-bar-section']} max-width mb`}
    >
      <div className={styles.sticky}>
        <header className={styles.header}>
          <HeadingElement className='large-text'>
            <InlineImageHeading
              value={heading}
              imageSizes='(min-width: 1366px) 619px, (min-width: 768px) 343px, 328px'
              priority={index === 0}
            />
          </HeadingElement>
        </header>
        <motion.ol
          style={{ x }}
          className={styles.points}
        >
          {list.map(({ text, _key }, i) => (
            <li key={_key}>
              <span>{`[${addLeadingZero(i + 1)}]`}</span>
              <Paragraph value={text} />
            </li>
          ))}
        </motion.ol>
        <div className={styles.progress}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Fragment key={i}>{renderLines(i)}</Fragment>
          ))}
          <div className={styles.step}>
            <span className={styles.value}>25</span>
            <span
              className={styles.stripe}
              data-step={25}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const renderLines = (i: number) => {
  const value = i * 5 - 25;

  return (
    <>
      <div className={styles.step}>
        <span className={styles.value}>{value}</span>
        <span data-step={value} />
      </div>
      <div className={styles.lines}>
        {Array.from({ length: 4 }).map((_, j) => (
          <span
            key={j}
            data-step={value + j + 1}
          />
        ))}
      </div>
    </>
  );
};
