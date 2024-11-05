'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { CarouselTypes } from './FeaturedPostsSection.types';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';
import styles from './FeaturedPostsSection.module.scss';

export default function Carousel({ index, list }: CarouselTypes) {
  const { mouse, updatePosition } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
      >
        <span>ZOBACZ</span>
      </Cursor>
      <Slider>
        <Slider.Observer ref={ref}>
          <Slider.Container
            className={styles.container}
            onMouseMove={updatePosition}
          >
            <Slider.Slides>
              {(handleSlideClick, activeIndex) => (
                <>
                  {list.map(({ image, slug, _id }, i) => (
                    <Link
                      key={_id}
                      onClick={e => {
                        if (activeIndex !== i) {
                          e.preventDefault();
                          handleSlideClick(i);
                        }
                      }}
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
                        sizes='(min-width: 1366px) 433px, (min-width: 1270px) 31.7vw, (min-width: 672px) 672px, 100vw'
                      />
                    </Link>
                  ))}
                </>
              )}
            </Slider.Slides>
          </Slider.Container>
        </Slider.Observer>
        <div className={styles.controls}>
          <Slider.Controls />
        </div>
      </Slider>
    </>
  );
}
