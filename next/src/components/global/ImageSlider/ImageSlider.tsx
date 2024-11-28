'use client';
import { useRef, useState } from 'react';
import type { ImageSliderTypes } from './ImageSlider.types';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';
import styles from './ImageSlider.module.scss';

export default function ImageSlider({ index, images }: ImageSliderTypes) {
  const { mouse, updatePosition } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
      >
        <span>PRZEWIŃ</span>
      </Cursor>
      <section
        className={styles['ImageSlider']}
        onMouseMove={updatePosition}
      >
        <Slider>
          <Slider.Observer ref={ref}>
            <Slider.Container
              className={styles.container}
              onMouseOut={() => setCursorScale(0)}
              onMouseOver={e => {
                updatePosition(e);
                setCursorScale(1);
              }}
              onMouseDown={() => setCursorScale(1.3)}
              onMouseUp={() => setCursorScale(1)}
            >
              <Slider.Slides>
                {handleSlideClick => (
                  <>
                    {images.map((data, i) => (
                      <div
                        onClick={() => handleSlideClick(i)}
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
                  </>
                )}
              </Slider.Slides>
            </Slider.Container>
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
    return '(min-width: 1366px) 335px, (min-width: 1000px) 24.6vw, (min-width: 408px) 22.8vw, 93px';
  } else if (index % 5 === 1 || index % 5 === 3) {
    return '(min-width: 1366px) 402px, (min-width: 1000px) 29.5vw, (min-width: 409px) 27.4vw, 112px';
  } else return '(min-width: 1366px) 217px, (min-width: 1000px) 15.9vw, (min-width: 407px) 14.8vw, 60px';
}
