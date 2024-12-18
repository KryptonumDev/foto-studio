'use client';
import { useRef, useState } from 'react';
import type { CarouselTypes } from './ReviewsSection.types';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import Slider from '@/components/ui/Slider';
import Img from '@/components/ui/Img';
import Text from '@/components/ui/Text';
import styles from './ReviewsSection.module.scss';

export default function Carousel({ list, index }: CarouselTypes) {
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
      <Slider activeSlideClassName={styles['isActive']}>
        <Slider.Observer
          ref={ref}
          className={styles.wrapper}
        >
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
          <Slider.Container
            className={styles.container}
            onMouseMove={updatePosition}
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
                  {list.map(({ _id, img }, i) => (
                    <div
                      key={`slide-${_id}`}
                      className={`embla__slide ${styles.slide}`}
                      onClick={() => handleSlideClick(i)}
                    >
                      <Img
                        data={img}
                        priority={index === 0}
                        sizes='(min-width: 952px) 402px, (min-width: 445px) 42.2vw, 188px'
                      />
                    </div>
                  ))}
                </>
              )}
            </Slider.Slides>
          </Slider.Container>
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
        </Slider.Observer>
        <div className={`max-width ${styles.controls}`}>
          <Slider.Controls />
        </div>
      </Slider>
    </>
  );
}
