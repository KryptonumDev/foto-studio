import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { PostCardTypes } from '@/components/global/PostCard';

export type ListingTypes = {
  categories: CategoryTypes[];
  posts: PostCardTypes[];
  postCount: number;
  categoryName?: string;
  currentCategorySlug?: string;
};

export type PostListTypes = {
  posts: PostCardTypes[];
  postCount: number;
};
