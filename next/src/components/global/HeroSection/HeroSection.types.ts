import type { PortableTextBlock } from 'next-sanity';
import type { CtaTypes } from '@/components/ui/Button';
import type { ImgTypes } from '@/components/ui/Img';

export type HeroSectionTypes = {
  index: number;
  content: {
    heading: PortableTextBlock[];
    img: ImgTypes;
    paragraph: PortableTextBlock[];
    cta: CtaTypes;
  };
  sideImg: ImgTypes;
};
