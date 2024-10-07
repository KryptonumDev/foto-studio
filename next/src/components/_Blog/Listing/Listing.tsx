import type { ListingTypes } from './Listing.types';
import { getPosts } from '@/actions/getPosts';
import CategoryChips from '@/components/global/CategoryChips';
import PostList from './_PostList';
import { NUMBER_OF_POSTS_TO_FETCH } from '.';
import styles from './Listing.module.scss';

export default async function Listing({ categories, postCount, currentCategorySlug }: ListingTypes) {
  const _categories = [{ _id: 'all', categoryName: 'Wszystkie', slug: '' }, ...categories];
  const initialPosts = await getPosts(0, NUMBER_OF_POSTS_TO_FETCH, currentCategorySlug);

  return (
    <section className={`${styles['Listing']} max-width mb`}>
      <CategoryChips
        basePath='blog'
        categories={_categories}
        itemCount={postCount}
        currentCategorySlug={currentCategorySlug}
      />
      <PostList
        initialPosts={initialPosts}
        currentCategorySlug={currentCategorySlug}
        postCount={postCount}
      />
    </section>
  );
}
