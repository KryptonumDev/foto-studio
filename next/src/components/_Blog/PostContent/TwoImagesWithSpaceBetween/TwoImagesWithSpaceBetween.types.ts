import type { ImgTypes } from '@/components/ui/Img';

export type TwoImagesWithSpaceBetweenTypes = {
  index: number;
  images: ImgTypes[];
  alignment: 'top' | 'center' | 'bottom';
};
