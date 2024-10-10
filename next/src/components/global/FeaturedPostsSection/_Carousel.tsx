'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { CarouselTypes } from './FeaturedPostsSection.types';

import Cursor, { useCursor } from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';

import styles from './FeaturedPostsSection.module.scss';

export default function Carousel({ index, list }: CarouselTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);
  const { mouse, updatePosition } = useCursor();

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
        text='zobacz'
      />
      <Slider>
        <Slider.Observer ref={ref}>
          <Slider.Slides
            className={styles.container}
            onMouseMove={updatePosition}
          >
            {list.map(({ image, slug, _id }) => (
              <Link
                key={_id}
                href={`/blog/${slug}`}
                className={`${styles.slide} embla__slide`}
                onMouseOut={() => setCursorScale(0)}
                onMouseOver={e => {
                  updatePosition(e);
                  setCursorScale(1);
                }}
                onMouseDown={() => setCursorScale(1.3)}
                onMouseUp={() => setCursorScale(1)}
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
