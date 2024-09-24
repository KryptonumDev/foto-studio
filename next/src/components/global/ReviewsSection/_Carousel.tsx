'use client';
import type { CarouselTypes } from './ReviewsSection.types';

import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';
import Text from '@/components/ui/Text';

import styles from './ReviewsSection.module.scss';

export default function Carousel({ list, index }: CarouselTypes) {
  return (
    <Slider activeSlideClassName={styles['isActive']}>
      <div className={styles['wrapper']}>
        <Slider.Details>
          {activeIndex => (
            <header className={`${styles.details} max-width`}>
              {list.map(({ _id, title }, i) => (
                <h3
                  className={`large-text ${i === activeIndex ? styles.active : ''}`}
                  key={`title-${_id}`}
                >
                  {title}
                </h3>
              ))}
            </header>
          )}
        </Slider.Details>
        <Slider.Slides className={styles.container}>
          {list.map(({ _id, image }) => (
            <div
              key={`slide-${_id}`}
              className={`embla__slide ${styles.slide}`}
            >
              <Img
                data={image}
                priority={index === 0}
                sizes='(min-width: 1366px) 402px, (min-width: 768px) 324px, 188px'
              />
            </div>
          ))}
        </Slider.Slides>
        <Slider.Details>
          {activeIndex => (
            <div className={`${styles.details} max-width`}>
              {list.map(({ _id, content }, i) => (
                <Text
                  tag='p'
                  key={`content-${_id}`}
                  value={content}
                  className={i === activeIndex ? styles.active : ''}
                />
              ))}
            </div>
          )}
        </Slider.Details>
      </div>
      <div className={`max-width ${styles.controls}`}>
        <Slider.Controls />
      </div>
    </Slider>
  );
}
