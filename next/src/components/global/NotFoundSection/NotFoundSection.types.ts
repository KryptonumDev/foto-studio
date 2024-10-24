import type { PortableTextBlock } from 'next-sanity';
import type { ImgTypes } from '@/components/ui/Img';
import type { CtaTypes } from '@/components/ui/Button';

export type NotFoundSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaTypes;
  images: ImgTypes[];
};
