import type { HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import type { ImageCategoryListAndImageTypes } from '@/components/global/ImageCategoryListAndImage';
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
import type { FaqSectionTypes } from '@/components/global/FaqSection';
import type { ContactFormTypes } from '@/components/global/ContactForm';
import type { HorizontalListWithHeaderTypes } from '@/components/global/HorizontalListWithHeader';
import type { ImageGridTypes } from '@/components/_Blog/PostContent/ImageGrid';
import type { FullWidthImageTypes } from '@/components/_Blog/PostContent/FullWidthImage';
import type { ThreeImagesLayoutTypes } from '@/components/_Blog/PostContent/ThreeImagesLayout';
import type { TwoImagesWithSpaceBetweenTypes } from '@/components/_Blog/PostContent/TwoImagesWithSpaceBetween';
import type { QuoteWithImageTypes } from '@/components/_Blog/PostContent/QuoteWithImage';
import type { HighlightedTextTypes } from '@/components/_Blog/PostContent/HighlightedText';
import type { ArticleTextTypes } from '@/components/_Blog/PostContent/ArticleText';
import type { ContentSectionWithHeaderTypes } from '@/components/_Blog/PostContent/ContentSectionWithHeader';

export type ComponentsMapTypes = {
  HeroHeaderAndImages: HeroHeaderAndImagesTypes;
  ImageCategoryListAndImage: ImageCategoryListAndImageTypes;
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
  FaqSection: FaqSectionTypes;
  ContactForm: ContactFormTypes;
  HorizontalListWithHeader: HorizontalListWithHeaderTypes;
  ImageGrid: ImageGridTypes;
  FullWidthImage: FullWidthImageTypes;
  ThreeImagesLayout: ThreeImagesLayoutTypes;
  TwoImagesWithSpaceBetween: TwoImagesWithSpaceBetweenTypes;
  QuoteWithImage: QuoteWithImageTypes;
  HighlightedText: HighlightedTextTypes;
  ArticleText: ArticleTextTypes;
  ContentSectionWithHeader: ContentSectionWithHeaderTypes;
};

export type ComponentTypes = ComponentsMapTypes[keyof ComponentsMapTypes] & {
  _type: string;
  index: number;
  hasPrimaryHeading: boolean;
};
