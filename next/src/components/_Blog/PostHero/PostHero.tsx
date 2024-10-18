import Link from 'next/link';
import { dateFormat } from '@/utils/date-format';
import type { PostHeroTypes } from './PostHero.types';
import ReadingTime from '@/components/ui/ReadingTime';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import styles from './PostHero.module.scss';

export default function PostHero({ _createdAt, title, paragraph, category, readingContent }: PostHeroTypes) {
  return (
    <section className={`${styles['PostHero']} ${paragraph ? styles['with-paragraph'] : ''} max-width`}>
      <header>
        <Heading
          tag='h1'
          value={title}
          className='large-text'
        />
      </header>
      <div className={styles.content}>
        <div className={styles.details}>
          <Link
            href={`/blog/kategoria/${category.slug}`}
            className={`chip ${styles.categoryLink}`}
          >
            <span>{category.categoryName}</span>
          </Link>
          <span>{dateFormat(_createdAt)}</span>
          <ReadingTime {...readingContent} />
        </div>
        {paragraph && <Text value={paragraph} />}
      </div>
    </section>
  );
}
