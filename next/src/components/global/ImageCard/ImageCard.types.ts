import type { ImgTypes } from '@/components/ui/Img';

export type ImageCardTypes = {
  index: number;
  image: ImgTypes;
  sizes: string;
  title?: string;
  subtitle?: string;
  blogPost?: {
    slug: string;
  };
  ['data-scroll']?: boolean;
  ['data-scroll-speed']?: number;
} & React.HTMLAttributes<HTMLElement>;
