import type { PortableTextBlock } from 'next-sanity';
import type { CtaTypes } from '@/components/ui/Button';
import type { ImageDataTypes } from '@/components/ui/Image';

export type HeroHeaderAndImagesTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaTypes;
  images: ImageDataTypes[];
};
