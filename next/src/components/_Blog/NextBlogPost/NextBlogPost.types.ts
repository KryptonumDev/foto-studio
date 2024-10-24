import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type NextBlogPostTypes = {
  type: string;
  title: PortableTextBlock[];
  image: ImgTypes;
  slug: string;
};
