import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';
import type { CategoryTypes } from '../CategoryChips';

export type ImageCategoryListAndImageTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    _key: string;
    text: PortableTextBlock[];
    imgCategory: CategoryTypes;
  }[];
  img: ImgTypes;
  imagePosition: 'left' | 'right';
};
