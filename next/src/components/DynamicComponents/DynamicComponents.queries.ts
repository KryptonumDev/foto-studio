import { HeroHeaderAndImages_Query } from '@/components/global/HeroHeaderAndImages';
import { ImageCategoryListAndImage_Query } from '@/components/global/ImageCategoryListAndImage';
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
import { ImageGrid_Query } from '@/components/_Blog/PostContent/ImageGrid';
import { FullWidthImage_Query } from '@/components/_Blog/PostContent/FullWidthImage';
import { ThreeImagesLayout_Query } from '@/components/_Blog/PostContent/ThreeImagesLayout';
import { TwoImagesWithSpaceBetween_Query } from '@/components/_Blog/PostContent/TwoImagesWithSpaceBetween';
import { QuoteWithImage_Query } from '@/components/_Blog/PostContent/QuoteWithImage';
import { HighlightedText_Query } from '@/components/_Blog/PostContent/HighlightedText';
import { ArticleText_Query } from '@/components/_Blog/PostContent/ArticleText';
import { ContentSectionWithHeader_Query } from '@/components/_Blog/PostContent/ContentSectionWithHeader';

export const DynamicComponents_Query = `
  content[] {
    _type,
    ${HeroHeaderAndImages_Query}
    ${ImageCategoryListAndImage_Query}
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
    ${ImageGrid_Query}
    ${FullWidthImage_Query}
    ${ThreeImagesLayout_Query}
    ${TwoImagesWithSpaceBetween_Query}
    ${QuoteWithImage_Query}
    ${HighlightedText_Query}
    ${ArticleText_Query}
    ${ContentSectionWithHeader_Query}
  }
`;
