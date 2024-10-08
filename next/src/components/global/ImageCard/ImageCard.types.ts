import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type ImageCardTypes = {
  _id: string;
  image: ImgTypes;
  title?: string;
  subtitle?: string;
  post?: {
    title: PortableTextBlock[];
    slug: string;
  };
};
