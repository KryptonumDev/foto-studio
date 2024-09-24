'use client';
import Link from 'next/link';
import type { CarouselTypes } from './FeaturedPostsSection.types';

import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';

import styles from './FeaturedPostsSection.module.scss';

export default function Carousel({ index, list }: CarouselTypes) {
  return (
    <Slider>
      <Slider.Slides className={styles.container}>
        {list.map(({ image, slug, _id }) => (
          <Link
            key={_id}
            href={`/blog/${slug}`}
            className={`${styles.slide} embla__slide`}
          >
            <Img
              data={image}
              priority={index === 0}
              sizes='(min-width: 1366px) 433px, (min-width: 768px) 672px, 328px'
            />
          </Link>
        ))}
      </Slider.Slides>
      <div className={styles.controls}>
        <Slider.Controls />
      </div>
    </Slider>
  );
}
