import type { ImgTypes } from '@/components/ui/Img';

export type ImageCardTypes = {
  image: ImgTypes;
  sizes: string;
  title?: string;
  subtitle?: string;
  ['data-scroll']?: boolean;
  ['data-scroll-speed']?: number;
};
