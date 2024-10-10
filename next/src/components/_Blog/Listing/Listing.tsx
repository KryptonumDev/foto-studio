import type { ListingTypes } from './Listing.types';
import CategoryChips from '@/components/global/CategoryChips';
import PostList from './_PostList';
import styles from './Listing.module.scss';

export default function Listing({ categories, postCount, posts, currentCategorySlug }: ListingTypes) {
  const _categories = [{ _id: 'all', categoryName: 'Wszystkie', slug: '' }, ...categories];

  return (
    <section className={`${styles['Listing']} max-width mb`}>
      <CategoryChips
        basePath='blog'
        categories={_categories}
        itemCount={postCount}
        currentCategorySlug={currentCategorySlug}
      />
      <PostList
        posts={posts}
        postCount={postCount}
      />
    </section>
  );
}
