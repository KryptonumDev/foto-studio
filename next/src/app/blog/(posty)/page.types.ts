import type { PortableTextBlock } from 'next-sanity';
import type { ComponentTypes } from '@/components/DynamicComponents';
import type { ListingTypes } from '@/components/_Blog/Listing';

export type BlogPageTypes = {
  categories: ListingTypes['categories'];
  postCount: ListingTypes['postCount'];
  posts: ListingTypes['posts'];
};

export type BlogLayoutTypes = {
  content: ComponentTypes[];
  header: {
    heading: PortableTextBlock[];
  };
};
