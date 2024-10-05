import { HeroHeaderAndImages_Query } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImage_Query } from '@/components/global/SimpleListAndImage';
import { ListWithContent_Query } from '@/components/global/ListWithContent';
import { AboutSection_Query } from '@/components/global/AboutSection';
import { ProgressBarSection_Query } from '@/components/global/ProgressBarSection';
import { ReviewsSection_Query } from '@/components/global/ReviewsSection';
import { FeaturedPostsSection_Query } from '@/components/global/FeaturedPostsSection';
import { IntroHeader_Query } from '@/components/global/IntroHeader';
import { ImageSlider_Query } from '@/components/global/ImageSlider';
import { StatsSection_Query } from '@/components/global/StatsSection';
import { NotFoundSection_Query } from '@/components/global/NotFoundSection';
import { HeroSection_Query } from '@/components/global/HeroSection';
import { PricesSection_Query } from '@/components/global/PricesSection';
import { StationaryOfferSection_Query } from '@/components/global/StationaryOfferSection';
import { InlineImageHeader_Query } from '@/components/global/InlineImageHeader';
import { MapSection_Query } from '@/components/global/MapSection';
import { FaqSection_Query } from '@/components/global/FaqSection';
import { ContactForm_Query } from '@/components/global/ContactForm';
import { HorizontalListWithHeader_Query } from '@/components/global/HorizontalListWithHeader';

export const DynamicComponents_Query = `
  content[] {
    _type,
    ${HeroHeaderAndImages_Query}
    ${SimpleListAndImage_Query}
    ${ListWithContent_Query}
    ${AboutSection_Query}
    ${ProgressBarSection_Query}
    ${ReviewsSection_Query}
    ${FeaturedPostsSection_Query}
    ${IntroHeader_Query}
    ${ImageSlider_Query}
    ${StatsSection_Query}
    ${NotFoundSection_Query}
    ${HeroSection_Query}
    ${PricesSection_Query}
    ${StationaryOfferSection_Query}
    ${InlineImageHeader_Query}
    ${MapSection_Query}
    ${FaqSection_Query}
    ${ContactForm_Query}
    ${HorizontalListWithHeader_Query}
  }
`;
