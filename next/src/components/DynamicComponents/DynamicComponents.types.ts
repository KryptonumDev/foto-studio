import type { HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import type { SimpleListAndImageTypes } from '@/components/global/SimpleListAndImage';
import type { ListWithContentTypes } from '@/components/global/ListWithContent';
import type { AboutSectionTypes } from '@/components/global/AboutSection';
import type { ProgressBarSectionTypes } from '@/components/global/ProgressBarSection';
import type { ReviewsSectionTypes } from '@/components/global/ReviewsSection';
import type { FeaturedPostsSectionTypes } from '@/components/global/FeaturedPostsSection';
import type { IntroHeaderTypes } from '@/components/global/IntroHeader';
import type { ImageSliderTypes } from '@/components/global/ImageSlider';
import type { StatsSectionTypes } from '@/components/global/StatsSection';
import type { NotFoundSectionTypes } from '@/components/global/NotFoundSection';
import type { HeroSectionTypes } from '@/components/global/HeroSection';
import type { PricesSectionTypes } from '@/components/global/PricesSection';
import type { StationaryOfferSectionTypes } from '@/components/global/StationaryOfferSection';
import type { InlineImageHeaderTypes } from '@/components/global/InlineImageHeader';
import type { MapSectionTypes } from '@/components/global/MapSection';

export type ComponentsMapTypes = {
  HeroHeaderAndImages: HeroHeaderAndImagesTypes;
  SimpleListAndImage: SimpleListAndImageTypes;
  ListWithContent: ListWithContentTypes;
  AboutSection: AboutSectionTypes;
  ProgressBarSection: ProgressBarSectionTypes;
  ReviewsSection: ReviewsSectionTypes;
  FeaturedPostsSection: FeaturedPostsSectionTypes;
  IntroHeader: IntroHeaderTypes;
  ImageSlider: ImageSliderTypes;
  StatsSection: StatsSectionTypes;
  NotFoundSection: NotFoundSectionTypes;
  HeroSection: HeroSectionTypes;
  PricesSection: PricesSectionTypes;
  StationaryOfferSection: StationaryOfferSectionTypes;
  InlineImageHeader: InlineImageHeaderTypes;
  MapSection: MapSectionTypes;
};

export type ComponentTypes = ComponentsMapTypes[keyof ComponentsMapTypes] & {
  _type: string;
  index: number;
};
