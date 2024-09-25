'use client';
import type { ImageSliderTypes } from './ImageSlider.types';

import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';

import styles from './ImageSlider.module.scss';

export default function ImageSlider({ index, images }: ImageSliderTypes) {
  return (
    <section className={styles['ImageSlider']}>
      <Slider>
        <Slider.Slides className={styles.container}>
          {images.map((data, i) => (
            <div
              key={`image-slide-${i}`}
              className={`embla__slide ${styles.slide}`}
            >
              <Img
                data={data}
                priority={index === 0}
                sizes={getSizes(i + 1)}
              />
            </div>
          ))}
        </Slider.Slides>
        <div className={`${styles.controls} max-width`}>
          <Slider.Controls />
        </div>
      </Slider>
    </section>
  );
}

function getSizes(index: number): string {
  if (index % 5 === 2 || index % 5 === 4) {
    return '(min-width: 1366px) 335px, (min-width: 768px) 23vw, 93px';
  } else if (index % 5 === 1 || index % 5 === 3) {
    return '(min-width: 1366px) 402px, (min-width: 768px) 27vw, 112px';
  } else return '(min-width: 1366px) 217px, (min-width: 768px) 15vw, 60px';
}
