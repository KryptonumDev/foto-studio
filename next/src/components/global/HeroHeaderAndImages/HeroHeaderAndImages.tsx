'use client';
import { useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/components/ui/SmoothScroll';
import type { HeroHeaderAndImagesTypes } from './HeroHeaderAndImages.types';

import Button from '@/components/ui/Button';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';

import styles from './HeroHeaderAndImages.module.scss';

const imageSizes = [
  '(min-width: 1200px) 108px, (min-width: 768px) 9vw, 70px',
  '(min-width: 1200px) 185px, (min-width: 768px) 15vw, 86px',
  '(min-width: 1200px) 296px, (min-width: 768px) 23vw, 155px',
  '(min-width: 1200px) 326px, (min-width: 768px) 23vw, 156px',
  '(min-width: 1200px) 185px, (min-width: 768px) 15vw, 86px',
];

const imageSpeeds = [0.25, 0.05, 0.2, 0.35, 0.25];

export default function HeroHeaderAndImages({ heading, images, cta, index }: HeroHeaderAndImagesTypes) {
  const ref = useRef<HTMLElement>(null);
  const { updateScroll } = useSmoothScroll();

  useEffect(() => {
    if (ref?.current) updateScroll(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles['HeroHeaderAndImages']} max-width`}
    >
      <header className='mb'>
        <Heading
          value={heading}
          tag={index === 0 ? 'h1' : 'h2'}
          className='large-text'
        />
        <Button data={cta} />
      </header>
      {images.map((data, i) => (
        <div
          data-scroll
          data-scroll-speed={imageSpeeds[i]}
          key={`hero-image-${index}`}
          className={styles.item}
        >
          <Img
            data={data}
            sizes={imageSizes[i]}
            priority={index === 0}
          />
        </div>
      ))}
    </section>
  );
}
