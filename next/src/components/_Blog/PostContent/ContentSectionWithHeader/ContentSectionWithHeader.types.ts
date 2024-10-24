import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type ContentSectionWithHeaderTypes = {
  index: number;
  blogPostType: string;
  heading: PortableTextBlock[];
  content: PortableTextBlock[];
  img?: ImgTypes;
  list?: {
    heading: PortableTextBlock[];
    content: PortableTextBlock[];
  }[];
};
