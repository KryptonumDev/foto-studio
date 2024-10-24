import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type QuoteWithImageTypes = {
  index: number;
  content: PortableTextBlock[];
  images: ImgTypes[];
};
