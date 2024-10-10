import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type SimpleListAndImageTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    _key: string;
    text: PortableTextBlock[];
  }[];
  img: ImgTypes;
  imagePosition: string;
};
