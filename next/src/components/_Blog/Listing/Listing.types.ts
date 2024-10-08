import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { PostCardTypes } from '@/components/global/PostCard';

export type ListingTypes = {
  categories: CategoryTypes[];
  postCount: number;
  currentCategorySlug?: string;
};

export type PostListTypes = {
  initialPosts: PostCardTypes[];
  postCount: number;
  currentCategorySlug?: string;
};