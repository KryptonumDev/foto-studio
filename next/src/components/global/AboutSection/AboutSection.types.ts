import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';

export type AboutSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  img: ImgTypes;
  content: {
    contentHeading: PortableTextBlock[];
    paragraph: PortableTextBlock[];
  };
};
