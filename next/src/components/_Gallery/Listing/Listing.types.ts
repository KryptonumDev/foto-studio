import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { ImageCardTypes } from '@/components/global/ImageCard';

export type ListingTypes = {
  categories: CategoryTypes[];
  imageCount: number;
  images: ImageCardTypes[];
  currentCategorySlug?: string;
  categoryName?: string;
};

export type ImageListTypes = {
  images: ImageCardTypes[];
  imageCount: number;
};
