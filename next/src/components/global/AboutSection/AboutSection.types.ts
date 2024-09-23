import type { PortableTextBlock } from 'next-sanity';
import type { ImageDataTypes } from '@/components/ui/Img';

export type AboutSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  img: ImageDataTypes;
  content: {
    contentHeading: PortableTextBlock[];
    paragraph: PortableTextBlock[];
  };
};
