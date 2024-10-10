'use client';
import { useRef, useState } from 'react';
import type { ImageSliderTypes } from './ImageSlider.types';

import Cursor, { useCursor } from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';

import styles from './ImageSlider.module.scss';

export default function ImageSlider({ index, images }: ImageSliderTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);
  const { mouse, updatePosition } = useCursor();

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
        text='przewiń'
      />
      <section
        className={styles['ImageSlider']}
        onMouseMove={updatePosition}
      >
        <Slider>
          <Slider.Observer ref={ref}>
            <Slider.Slides
              className={styles.container}
              onMouseOut={() => setCursorScale(0)}
              onMouseOver={e => {
                updatePosition(e);
                setCursorScale(1);
              }}
              onMouseDown={() => setCursorScale(1.3)}
              onMouseUp={() => setCursorScale(1)}
            >
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
          </Slider.Observer>
          <div className={`${styles.controls} max-width`}>
            <Slider.Controls />
          </div>
        </Slider>
      </section>
    </>
  );
}

function getSizes(index: number): string {
  if (index % 5 === 2 || index % 5 === 4) {
    return '(min-width: 1366px) 335px, (min-width: 768px) 23vw, 93px';
  } else if (index % 5 === 1 || index % 5 === 3) {
    return '(min-width: 1366px) 402px, (min-width: 768px) 27vw, 112px';
  } else return '(min-width: 1366px) 217px, (min-width: 768px) 15vw, 60px';
}
