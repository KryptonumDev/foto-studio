import Link from 'next/link';
import { toPlainText } from 'next-sanity';
import { dateFormat } from '@/utils/date-format';
import type { PostCardTypes } from './PostCard.types';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import ReadingTime from '@/components/ui/ReadingTime';
import styles from './PostCard.module.scss';

export default function PostCard({
  index,
  _createdAt,
  image,
  category,
  title,
  slug,
  readingContent,
  ...anchorProps
}: PostCardTypes) {
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
          sizes='(min-width: 1366px) 294px, (min-width: 768px) 319px, 150px'
          priority={index === 0 || index === 1}
        />
      </div>
      <div className={styles.content}>
        <header>
          <p className={styles.subtitle}>
            <span>{dateFormat(_createdAt)}</span>
            <ReadingTime {...readingContent} />
          </p>
          <Heading
            value={title}
            tag='h2'
            className='small-text'
          />
        </header>
        <Link
          href={`/blog/kategoria/${category.slug}`}
          className={`chip ${styles.categoryLink}`}
        >
          <span>{category.categoryName}</span>
        </Link>
      </div>
    </article>
  );
}
