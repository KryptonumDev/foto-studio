import type { HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';

export type ComponentsMapTypes = {
  HeroHeaderAndImages: HeroHeaderAndImagesTypes;
};

export type ComponentTypes = ComponentsMapTypes[keyof ComponentsMapTypes] & {
  _type: string;
  index: number;
};
