import type { ImgTypes } from '@/components/ui/Img';
import type { PortableTextBlock } from 'next-sanity';

export type PricesSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  paragraph: PortableTextBlock[];
  list: {
    name: PortableTextBlock[];
    priceLabel: string;
    img: ImgTypes;
    description: {
      mainText: PortableTextBlock[];
      additionalInfo: PortableTextBlock[];
    };
  }[];
};
