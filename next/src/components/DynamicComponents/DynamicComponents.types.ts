import type { HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import type { SimpleListAndImageTypes } from '@/components/global/SimpleListAndImage';
import type { ListWithContentTypes } from '@/components/global/ListWithContent';
import type { AboutSectionTypes } from '@/components/global/AboutSection';
import type { ProgressBarSectionTypes } from '@/components/global/ProgressBarSection';
import type { ReviewsSectionTypes } from '@/components/global/ReviewsSection';

export type ComponentsMapTypes = {
  HeroHeaderAndImages: HeroHeaderAndImagesTypes;
  SimpleListAndImage: SimpleListAndImageTypes;
  ListWithContent: ListWithContentTypes;
  AboutSection: AboutSectionTypes;
  ProgressBarSection: ProgressBarSectionTypes;
  ReviewsSection: ReviewsSectionTypes;
};

export type ComponentTypes = ComponentsMapTypes[keyof ComponentsMapTypes] & {
  _type: string;
  index: number;
};
