import type { ImageCardTypes } from './ImageCard.types';
import Img from '@/components/ui/Img';
import styles from './ImageCard.module.scss';

export default function ImageCard({ index, title, subtitle, image, sizes, ...props }: ImageCardTypes) {
  return (
    <div
      className={styles['ImageCard']}
      {...props}
    >
      {title && <span className={styles.title}>{title}</span>}
      {subtitle && <span className={styles.subtitle}>{`[ ${subtitle} ]`}</span>}
      <Img
        data={image}
        sizes={sizes}
        priority={index === 0 || index === 1}
      />
    </div>
  );
}
