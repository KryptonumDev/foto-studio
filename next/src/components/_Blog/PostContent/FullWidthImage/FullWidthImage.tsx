import type { FullWidthImageTypes } from './FullWidthImage.types';
import Img from '@/components/ui/Img';
import styles from './FullWidthImage.module.scss';

export default function FullWidthImage({ img, index }: FullWidthImageTypes) {
  return (
    <div className={styles['FullWidthImage']}>
      <Img
        data={img}
        priority={index === 0}
        sizes='(min-width: 1366px) 1270px, 92vw'
      />
    </div>
  );
}
