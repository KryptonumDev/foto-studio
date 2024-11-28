import Link from 'next/link';
import type { CategoryChipsTypes } from './CategoryChips.types';
import styles from './CategoryChips.module.scss';

export default function CategoryChips({
  basePath,
  categories,
  itemCount,
  navAriaLabel,
  currentCategorySlug = '',
}: CategoryChipsTypes) {
  return (
    <div className={styles['CategoryChips']}>
      <nav
        aria-label={navAriaLabel}
        className={styles.categories}
      >
        {categories.map(({ _id, categoryName, slug }) => (
          <Link
            key={_id}
            href={slug === '' ? `/${basePath}` : `/${basePath}/kategoria/${slug}`}
            className='chip'
            aria-current={slug === currentCategorySlug ? 'page' : undefined}
            scroll={false}
          >
            <span>{categoryName}</span>
          </Link>
        ))}
      </nav>
      <span className={`${styles.count} extra-small-text`}>{`[ ${itemCount} ]`}</span>
    </div>
  );
}
