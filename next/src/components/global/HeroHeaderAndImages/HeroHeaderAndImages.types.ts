import type { PortableTextBlock } from 'next-sanity';
import type { CtaDataTypes } from '@/components/ui/Button';
import type { ImageDataTypes } from '@/components/ui/Img';

export type HeroHeaderAndImagesTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaDataTypes;
  images: ImageDataTypes[];
};
