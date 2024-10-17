import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';
import type { CtaTypes } from '@/components/ui/Button';

export type StationaryOfferSectionTypes = {
  index: number;
  sideImg: ImgTypes;
  content: {
    heading: PortableTextBlock[];
    cta: CtaTypes;
    paragraph: PortableTextBlock[];
  };
};
