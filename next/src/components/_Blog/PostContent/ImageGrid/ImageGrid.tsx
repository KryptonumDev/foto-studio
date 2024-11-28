import type { ImageGridTypes } from './ImageGrid.types';
import Img from '@/components/ui/Img';
import styles from './ImageGrid.module.scss';

export default function ImageGrid({ images, index }: ImageGridTypes) {
  return (
    <div className={`${styles['ImageGrid']} ${styles[`images-${images.length}`]}`}>
      {images.map((data, i) => (
        <Img
          key={`image-grid-${i}`}
          data={data}
          priority={index === 0}
          sizes={images.length === 4 ? '(min-width: 768px) 25vw, 50vw' : '(min-width: 768px) 33.33vw, 50vw'}
        />
      ))}
    </div>
  );
}
