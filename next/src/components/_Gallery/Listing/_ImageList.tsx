'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useSmoothScroll } from '@/components/ui/SmoothScroll';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import { IMAGES_PER_LOAD } from '@/global/constants';
import type { ImageListTypes } from './Listing.types';
import ImageCard from '@/components/global/ImageCard';
import styles from './Listing.module.scss';

export default function ImageList({ images, imageCount }: ImageListTypes) {
  const { mouse, updatePosition } = useCursor();
  const { updateScroll } = useSmoothScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);
  const [offset, setOffset] = useState(IMAGES_PER_LOAD);

  useEffect(() => {
    if (ref.current) updateScroll(ref.current);
  }, [updateScroll, offset]);

  const scrollUp = useCallback(() => {
    if (!ref.current) return;
    const lastImageGroup = ref.current.querySelector(`.${styles.imagesGroup}:last-child`);
    if (lastImageGroup) lastImageGroup.scrollIntoView({ behavior: 'instant' });
  }, []);

  const updateOffset = () => {
    if (imageCount > offset) {
      setOffset(prev => prev + IMAGES_PER_LOAD);
    } else {
      setOffset(IMAGES_PER_LOAD);
      requestAnimationFrame(scrollUp);
    }
  };

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
      >
        <span>ZOBACZ</span>
      </Cursor>
      <div
        className={styles.images}
        ref={ref}
        onMouseMove={updatePosition}
      >
        {images.slice(0, offset).map((image, i) =>
          i % 2 === 0 ? (
            <div
              key={`group-${i}`}
              className={styles.imagesGroup}
            >
              <ImageCard
                {...image}
                sizes={getSizes(i)}
                index={i}
                data-scroll
                data-scroll-speed={speeds[i % speeds.length]}
                {...(image.blogPost && {
                  onMouseOver: e => {
                    updatePosition(e);
                    setCursorScale(1);
                  },
                  onMouseOut: () => setCursorScale(0),
                })}
              />
              {images[i + 1] && (
                <ImageCard
                  {...images[i + 1]}
                  sizes={getSizes(i + 1)}
                  index={i + 1}
                  data-scroll
                  data-scroll-speed={speeds[(i + 1) % speeds.length]}
                  {...(images[i + 1].blogPost && {
                    onMouseOver: e => {
                      updatePosition(e);
                      setCursorScale(1);
                    },
                    onMouseOut: () => setCursorScale(0),
                  })}
                />
              )}
            </div>
          ) : null
        )}
      </div>
      {imageCount > IMAGES_PER_LOAD && (
        <div className={styles.btn}>
          <button onClick={updateOffset}>
            {imageCount > offset ? `Załaduj więcej [${imageCount - offset}]` : 'Pokaż mniej'}
          </button>
        </div>
      )}
    </>
  );
}

const speeds = [0, 0, 0.15, 0.3, 0.2, 0.1, 0.15, 0.25, 0.3, 0.15, 0.25, 0.1];

function getSizes(index: number): string {
  const i = index % 12;
  if (i === 0 || i === 8) {
    return '(min-width: 1296px) 513px, (min-width: 480px) 40vw, (min-width: 320px) 190px, 160px';
  } else if (i === 1 || i === 9) {
    return '(min-width: 1300px) 296px, (min-width: 482px) 23vw, 110px';
  } else if (i === 2 || i == 7) {
    return '(min-width: 1115px) 434px, (min-width: 440px) 39vw, 171px';
  } else if (i === 3 || i === 6) {
    return '(min-width: 1118px) 217px, (min-width: 438px) 20vw, 85px';
  } else if (i === 5 || i === 10) {
    return '(min-width: 1175px) 326px, (min-width: 461px) 28vw, 128px';
  } else return '(min-width: 1178px) 402px, (min-width: 460px) 35vw, 157px';
}
