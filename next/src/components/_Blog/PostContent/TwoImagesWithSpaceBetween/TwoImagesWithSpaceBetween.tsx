import type { TwoImagesWithSpaceBetweenTypes } from './TwoImagesWithSpaceBetween.types';
import Img from '@/components/ui/Img';
import styles from './TwoImagesWithSpaceBetween.module.scss';

export default function TwoImagesWithSpaceBetween({ images, alignment, index }: TwoImagesWithSpaceBetweenTypes) {
  return (
    <div className={`${styles['TwoImagesWithSpaceBetween']} ${styles[alignment]}`}>
      {images.map((image, i) => (
        <Img
          key={`two-images-with-space-between-${index}-${i}`}
          data={image}
          sizes={getSizes(alignment, i)}
          priority={index === 0}
        />
      ))}
    </div>
  );
}

function getSizes(alignment: TwoImagesWithSpaceBetweenTypes['alignment'], index: number): string {
  if (alignment === 'top') {
    if (index === 0) return '(min-width: 1366px) 295px, (min-width: 360px) 25vw, 133px';
    if (index === 1) return '(max-width: 1366px) 726px, (min-width: 768px) 61vw, 100vw';
  } else if (alignment === 'center') {
    if (index === 0) return '(min-width: 1366px) 401px, (min-width: 360px) 34vw, 122px';
    if (index === 1) return '(min-width: 1366px) 620px, (min-width: 360px) 52vw, 189px';
  } else {
    if (index === 0) return '(min-width: 1366px) 403px, (min-width: 768px) 48.3vw, 100vw';
    if (index === 1) return '(min-width: 1366px) 295px, (min-width: 360px) 36vw, 241px';
  }

  return '';
}
