import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type ReviewsSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    _id: string;
    title: string;
    content: PortableTextBlock[];
    img: ImgTypes;
  }[];
};

export type CarouselTypes = {
  list: ReviewsSectionTypes['list'];
  index: number;
};
