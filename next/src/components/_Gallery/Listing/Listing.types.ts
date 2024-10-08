import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { ImageCardTypes } from '@/components/global/ImageCard';

export type ListingTypes = {
  categories: CategoryTypes[];
  imageCount: number;
  currentCategorySlug?: string;
};

export type ImageListTypes = {
  initialImages: ImageCardTypes[];
  imageCount: number;
  currentCategorySlug?: string;
};
