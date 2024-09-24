import { HeroHeaderAndImages_Query } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImage_Query } from '@/components/global/SimpleListAndImage';
import { ListWithContent_Query } from '@/components/global/ListWithContent';
import { AboutSection_Query } from '@/components/global/AboutSection';
import { ProgressBarSection_Query } from '@/components/global/ProgressBarSection';
import { ReviewsSection_Query } from '@/components/global/ReviewsSection';
import { FeaturedPostsSection_Query } from '@/components/global/FeaturedPostsSection';
import { IntroHeader_Query } from '@/components/global/IntroHeader';

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
  }
`;
