import type { ImgTypes } from '@/components/ui/Img';
import type { PortableTextBlock } from 'next-sanity';

export type PricesSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  paragraph: PortableTextBlock[];
  img: ImgTypes;
  list: {
    name: PortableTextBlock[];
    priceLabel: string;
    description: {
      mainText: PortableTextBlock[];
      additionalInfo: PortableTextBlock[];
    };
  }[];
};
