import type { CategoryTypes } from '@/components/global/CategoryChips';

export type ListingTypes = {
  categories: CategoryTypes[];
  imageCount: number;
  currentCategorySlug?: string;
};
