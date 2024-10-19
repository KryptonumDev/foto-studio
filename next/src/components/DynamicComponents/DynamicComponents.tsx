import type { ComponentsMapTypes, ComponentTypes } from './DynamicComponents.types';

import HeroHeaderAndImages, { type HeroHeaderAndImagesTypes } from '@/components/global/HeroHeaderAndImages';
import ImageCategoryListAndImage, {
  type ImageCategoryListAndImageTypes,
} from '@/components/global/ImageCategoryListAndImage';
import ListWithContent, { type ListWithContentTypes } from '@/components/global/ListWithContent';
import AboutSection, { type AboutSectionTypes } from '@/components/global/AboutSection';
import ProgressBarSection, { type ProgressBarSectionTypes } from '@/components/global/ProgressBarSection';
import ReviewsSection, { type ReviewsSectionTypes } from '@/components/global/ReviewsSection';
import FeaturedPostsSection, { type FeaturedPostsSectionTypes } from '@/components/global/FeaturedPostsSection';
import IntroHeader, { type IntroHeaderTypes } from '@/components/global/IntroHeader';
import ImageSlider, { type ImageSliderTypes } from '@/components/global/ImageSlider';
import StatsSection, { type StatsSectionTypes } from '@/components/global/StatsSection';
import NotFoundSection, { type NotFoundSectionTypes } from '@/components/global/NotFoundSection';
import HeroSection, { type HeroSectionTypes } from '@/components/global/HeroSection';
import PricesSection, { type PricesSectionTypes } from '@/components/global/PricesSection';
import StationaryOfferSection, { type StationaryOfferSectionTypes } from '@/components/global/StationaryOfferSection';
import InlineImageHeader, { type InlineImageHeaderTypes } from '@/components/global/InlineImageHeader';
import MapSection, { type MapSectionTypes } from '@/components/global/MapSection';
import FaqSection, { type FaqSectionTypes } from '@/components/global/FaqSection';
import ContactForm, { type ContactFormTypes } from '@/components/global/ContactForm';
import HorizontalListWithHeader, {
  type HorizontalListWithHeaderTypes,
} from '@/components/global/HorizontalListWithHeader';
import ImageGrid, { type ImageGridTypes } from '@/components/_Blog/PostContent/ImageGrid';
import FullWidthImage, { type FullWidthImageTypes } from '@/components/_Blog/PostContent/FullWidthImage';
import ThreeImagesLayout, { type ThreeImagesLayoutTypes } from '@/components/_Blog/PostContent/ThreeImagesLayout';

const componentsMap: Record<string, (props: ComponentTypes) => React.ReactNode> = {
  HeroHeaderAndImages: props => <HeroHeaderAndImages {...(props as HeroHeaderAndImagesTypes)} />,
  ImageCategoryListAndImage: props => <ImageCategoryListAndImage {...(props as ImageCategoryListAndImageTypes)} />,
  ListWithContent: props => <ListWithContent {...(props as ListWithContentTypes)} />,
  AboutSection: props => <AboutSection {...(props as AboutSectionTypes)} />,
  ProgressBarSection: props => <ProgressBarSection {...(props as ProgressBarSectionTypes)} />,
  ReviewsSection: props => <ReviewsSection {...(props as ReviewsSectionTypes)} />,
  FeaturedPostsSection: props => <FeaturedPostsSection {...(props as FeaturedPostsSectionTypes)} />,
  IntroHeader: props => <IntroHeader {...(props as IntroHeaderTypes)} />,
  ImageSlider: props => <ImageSlider {...(props as ImageSliderTypes)} />,
  StatsSection: props => <StatsSection {...(props as StatsSectionTypes)} />,
  NotFoundSection: props => <NotFoundSection {...(props as NotFoundSectionTypes)} />,
  HeroSection: props => <HeroSection {...(props as HeroSectionTypes)} />,
  PricesSection: props => <PricesSection {...(props as PricesSectionTypes)} />,
  StationaryOfferSection: props => <StationaryOfferSection {...(props as StationaryOfferSectionTypes)} />,
  InlineImageHeader: props => <InlineImageHeader {...(props as InlineImageHeaderTypes)} />,
  MapSection: props => <MapSection {...(props as MapSectionTypes)} />,
  FaqSection: props => <FaqSection {...(props as FaqSectionTypes)} />,
  ContactForm: props => <ContactForm {...(props as ContactFormTypes)} />,
  HorizontalListWithHeader: props => <HorizontalListWithHeader {...(props as HorizontalListWithHeaderTypes)} />,
  ImageGrid: props => <ImageGrid {...(props as ImageGridTypes)} />,
  FullWidthImage: props => <FullWidthImage {...(props as FullWidthImageTypes)} />,
  ThreeImagesLayout: props => <ThreeImagesLayout {...(props as ThreeImagesLayoutTypes)} />,
};

export default function DynamicComponents({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentsMapTypes;
    const DynamicComponent = componentsMap[componentType]?.({ ...item, index });
    return DynamicComponent || null;
  });
}
