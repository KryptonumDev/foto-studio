import type { HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import type { SimpleListAndImageTypes } from '@/components/global/SimpleListAndImage';
import type { ListWithContentTypes } from '@/components/global/ListWithContent';
import type { AboutSectionTypes } from '@/components/global/AboutSection';

export type ComponentsMapTypes = {
  HeroHeaderAndImages: HeroHeaderAndImagesTypes;
  SimpleListAndImage: SimpleListAndImageTypes;
  ListWithContent: ListWithContentTypes;
  AboutSection: AboutSectionTypes;
};

export type ComponentTypes = ComponentsMapTypes[keyof ComponentsMapTypes] & {
  _type: string;
  index: number;
};
