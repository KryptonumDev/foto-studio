import type { ImgTypes } from '@/components/ui/Img';
import type { PortableTextBlock } from 'next-sanity';

export type PricesSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  paragraph: PortableTextBlock[];
  list: {
    name: PortableTextBlock[];
    priceLabel: string;
    paragraph: PortableTextBlock[];
    img: ImgTypes;
  }[];
};

export type ListTypes = {
  index: number;
  list: {
    name: React.ReactNode;
    priceLabel: React.ReactNode;
    paragraph: React.ReactNode;
    img: ImgTypes;
  }[];
};
