import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type FeaturedPostsSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    _id: string;
    image: ImgTypes;
    slug: string;
  }[];
};

export type CarouselTypes = {
  index: number;
  list: FeaturedPostsSectionTypes['list'];
};
