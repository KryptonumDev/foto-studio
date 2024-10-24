import type { ThreeImagesLayoutTypes } from './ThreeImagesLayout.types';
import Img from '@/components/ui/Img';
import styles from './ThreeImagesLayout.module.scss';

export default function ThreeImagesLayout({ images, index }: ThreeImagesLayoutTypes) {
  return (
    <div className={styles['ThreeImagesLayout']}>
      {images.map((img, i) => (
        <Img
          data={img}
          key={`three-images-layout-${i}`}
          sizes={i === 0 ? '100vw' : '(min-width: 1366px) 397px, (min-width: 768px) 30vw, 50vw'}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
