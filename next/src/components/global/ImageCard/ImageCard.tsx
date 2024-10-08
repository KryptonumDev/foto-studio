import Img from '@/components/ui/Img';
import styles from './ImageCard.module.scss';
import type { ImageCardTypes } from './ImageCard.types';

export default function ImageCard({ title, subtitle, image }: ImageCardTypes) {
  return (
    <div className={styles['ImageCard']}>
      {title && <span className={styles.title}>{title}</span>}
      {subtitle && <span className={styles.subtitle}>{`[ ${subtitle} ]`}</span>}
      <Img
        data={image}
        sizes='(min-width: 1366px) 513px, 40vw'
      />
    </div>
  );
}
