import Link from 'next/link';
import type { CategoryChipsTypes } from './CategoryChips.types';
import styles from './CategoryChips.module.scss';

export default function CategoryChips({ categories, postCount, currentCategorySlug = '' }: CategoryChipsTypes) {
  return (
    <div className={styles['CategoryChips']}>
      <nav
        aria-label='kategorie postów'
        className={styles.categories}
      >
        {categories.map(({ _id, categoryName, slug }) => (
          <Link
            key={_id}
            href={slug === '' ? '/blog' : `/blog/kategoria/${slug}`}
            className='chip'
            aria-current={slug === currentCategorySlug ? 'page' : undefined}
            scroll={false}
          >
            <span>{categoryName}</span>
          </Link>
        ))}
      </nav>
      <span className={`${styles.count} extra-small-text`}>{`[ ${postCount} ]`}</span>
    </div>
  );
}
