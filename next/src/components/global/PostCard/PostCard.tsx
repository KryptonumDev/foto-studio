import Link from 'next/link';
import { toPlainText } from 'next-sanity';
import { dateFormat } from '@/utils/date-format';
import type { PostCardTypes } from './PostCard.types';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import styles from './PostCard.module.scss';

export default function PostCard({ _createdAt, image, category, title, slug, ...anchorProps }: PostCardTypes) {
  return (
    <article className={styles['PostCard']}>
      <Link
        href={`/blog/${slug}`}
        aria-label={`Przejdź do artykułu: ${toPlainText(title)}`}
        className={styles.link}
        {...anchorProps}
      />
      <div className={styles.image}>
        <Img
          data={image}
          sizes='(min-width: 680px) 294px, 360px'
        />
      </div>
      <header>
        <p className={styles.subtitle}>
          <span>{dateFormat(_createdAt)}</span>
          <span>10 min czytania</span>
        </p>
        <Heading
          value={title}
          tag='h2'
          className='medium-text'
        />
      </header>
      <Link
        href={`/blog/kategoria/${category.slug}`}
        className={`chip ${styles.categoryLink}`}
      >
        <span>{category.categoryName}</span>
      </Link>
    </article>
  );
}
