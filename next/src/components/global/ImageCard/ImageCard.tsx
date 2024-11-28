import Link from 'next/link';
import type { ImageCardTypes } from './ImageCard.types';
import Img from '@/components/ui/Img';
import styles from './ImageCard.module.scss';

export default function ImageCard({ index, title, subtitle, blogPost, image, sizes, ...props }: ImageCardTypes) {
  return (
    <div
      className={`${styles['ImageCard']} ${blogPost ? styles.interactive : ''}`}
      {...props}
    >
      {blogPost && (
        <>
          <Link
            href={`/blog/${blogPost.slug}`}
            aria-label={`Przejdź do artykułu: ${title}`}
            className={styles.link}
          />
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{`[ ${subtitle} ]`}</span>
        </>
      )}
      <Img
        data={image}
        sizes={sizes}
        priority={index === 0 || index === 1}
      />
    </div>
  );
}
