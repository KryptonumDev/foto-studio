'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { CarouselTypes } from './FeaturedPostsSection.types';

import Cursor from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';

import styles from './FeaturedPostsSection.module.scss';

export default function Carousel({ index, list }: CarouselTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Cursor
        trackingAreaRef={ref}
        active={isHovering}
        text='zobacz'
      />
      <Slider>
        <Slider.Observer ref={ref}>
          <Slider.Slides className={styles.container}>
            {list.map(({ image, slug, _id }) => (
              <Link
                key={_id}
                href={`/blog/${slug}`}
                className={`${styles.slide} embla__slide`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Img
                  data={image}
                  priority={index === 0}
                  sizes='(min-width: 1366px) 433px, (min-width: 768px) 672px, 328px'
                />
              </Link>
            ))}
          </Slider.Slides>
        </Slider.Observer>
        <div className={styles.controls}>
          <Slider.Controls />
        </div>
      </Slider>
    </>
  );
}
