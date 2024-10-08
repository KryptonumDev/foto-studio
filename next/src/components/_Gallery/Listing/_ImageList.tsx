'use client';
import { useState } from 'react';
import { getImages } from '@/actions/getImages';
import type { ImageListTypes } from './Listing.types';
import ImageCard, { type ImageCardTypes } from '@/components/global/ImageCard';
import { NUMBER_OF_IMAGES_TO_FETCH } from '.';

import styles from './Listing.module.scss';

export default function ImageList({ initialImages, imageCount, currentCategorySlug }: ImageListTypes) {
  const [offset, setOffset] = useState(NUMBER_OF_IMAGES_TO_FETCH);
  const [images, setImages] = useState<ImageCardTypes[]>(initialImages);

  const loadMoreImages = async () => {
    const data = await getImages(offset, NUMBER_OF_IMAGES_TO_FETCH, currentCategorySlug);
    setImages(prev => [...prev, ...data]);
    setOffset(prev => prev + NUMBER_OF_IMAGES_TO_FETCH);
  };

  return (
    <>
      <div className={styles.images}>
        {images.map((image, i) =>
          i % 2 === 0 ? (
            <div
              key={`group-${i}`}
              className={styles.imagesGroup}
            >
              <ImageCard {...image} />
              {images[i + 1] && <ImageCard {...images[i + 1]} />}
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
