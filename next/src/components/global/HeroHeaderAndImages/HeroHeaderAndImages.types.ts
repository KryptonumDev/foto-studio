import type { PortableTextBlock } from 'next-sanity';
import type { CtaTypes } from '@/components/ui/Button';
import type { ImgTypes } from '@/components/ui/Img';

export type HeroHeaderAndImagesTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaTypes;
  images: ImgTypes[];
};
