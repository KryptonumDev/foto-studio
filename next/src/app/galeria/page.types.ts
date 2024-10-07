import type { ComponentTypes } from '@/components/DynamicComponents';
import type { ListingTypes } from '@/components/_Gallery/Listing';
import type { PortableTextBlock } from 'next-sanity';

export type GalleryPageTypes = {
  categories: ListingTypes['categories'];
  imageCount: ListingTypes['imageCount'];
};

export type GalleryLayoutTypes = {
  content: ComponentTypes[];
  header: {
    heading: PortableTextBlock[];
  };
};
