import type { ComponentTypes } from '@/components/DynamicComponents';
import type { ListingTypes } from '@/components/_Blog/Listing';
import type { PortableTextBlock } from 'next-sanity';

export type BlogPageTypes = {
  categories: ListingTypes['categories'];
  postCount: ListingTypes['postCount'];
};

export type BlogLayoutTypes = {
  content: ComponentTypes[];
  header: {
    heading: PortableTextBlock[];
  };
};
