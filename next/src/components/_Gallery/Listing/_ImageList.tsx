'use client';
import { useEffect, useState, useRef } from 'react';
import type { ImageListTypes } from './Listing.types';
import { useSmoothScroll } from '@/components/ui/SmoothScroll';
import ImageCard from '@/components/global/ImageCard';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import { NUMBER_OF_IMAGES_TO_FETCH } from '.';

import styles from './Listing.module.scss';

export default function ImageList({ images, imageCount }: ImageListTypes) {
  const [cursorScale, setCursorScale] = useState(0);
  const [offset, setOffset] = useState(NUMBER_OF_IMAGES_TO_FETCH);
  const { updateScroll } = useSmoothScroll();
  const ref = useRef<HTMLDivElement>(null);
  const { mouse, updatePosition } = useCursor();

  const loadMoreImages = () => setOffset(prev => prev + NUMBER_OF_IMAGES_TO_FETCH);

  useEffect(() => {
    if (ref?.current) updateScroll(ref.current);
  }, [offset]);

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
        text='zobacz'
      />
      <div
        ref={ref}
        className={styles.images}
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
                data-scroll-speed={speeds[i % 10]}
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
                  data-scroll-speed={speeds[(i + 1) % 10]}
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
      {imageCount > offset && (
        <div className={styles.loadMore}>
          <button onClick={loadMoreImages}>
            Załaduj więcej <span>{`[${imageCount - offset}]`}</span>
          </button>
        </div>
      )}
    </>
  );
}

const speeds = [0.25, 0.1, 0.15, 0.3, 0.2, 0.1, 0.15, 0.25, 0.3, 0.15];

function getSizes(index: number): string {
  const i = index % 12;
  if (i === 0 || i === 8) {
    return '(min-width: 1366px) 513px, (min-width: 768px) 40vw';
  } else if (i === 1 || i === 9) {
    return '(min-width: 1366px) 296px, (min-width: 768px) 23vw';
  } else if (i === 2 || i == 7) {
    return '(min-width: 1366px) 434px, (min-width: 768px) 39vw';
  } else if (i === 3 || i === 6) {
    return '(min-width: 1366px) 217px, (min-width: 768px) 20vw';
  } else if (i === 5 || i === 10) {
    return '(min-width: 1366px) 326px, (min-width: 768px) 28vw';
  } else return '(min-width: 1366px) 402px, (min-width: 768px) 35vw';
}
