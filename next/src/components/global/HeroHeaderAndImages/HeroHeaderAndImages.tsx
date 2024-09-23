'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import type { HeroHeaderAndImagesTypes } from './HeroHeaderAndImages.types';

import Button from '@/components/ui/Button';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';

import styles from './HeroHeaderAndImages.module.css';

const imageSizes = [
  '(min-width: 1200px) 108px, (min-width: 768px) 63px, 70px',
  '(min-width: 1200px) 185px, (min-width: 768px) 108px, 86px',
  '(min-width: 1200px) 296px, (min-width: 768px) 173px, 155px',
  '(min-width: 1200px) 326px, (min-width: 768px) 174px, 156px',
  '(min-width: 1200px) 185px, (min-width: 768px) 111px, 86px',
];

export default function HeroHeaderAndImages({ heading, images, cta, index }: HeroHeaderAndImagesTypes) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const parallaxY = [
    useTransform(scrollYProgress, [0, 1], ['0%', '-250%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '-300%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '-600%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '-800%']),
  ];

  return (
    <section
      ref={ref}
      className={`${styles.hero} max-width`}
    >
      <header className='mb'>
        <Heading
          value={heading}
          level={index === 0 ? 1 : 2}
          className='large-text'
        />
        <Button data={cta} />
      </header>
      {images.map((data, index) => (
        <motion.div
          key={`hero-image-${index}`}
          className={styles.img}
          style={{ y: parallaxY[index] }}
        >
          <Img
            data={data}
            sizes={imageSizes[index]}
            priority={true}
          />
        </motion.div>
      ))}
    </section>
  );
}
