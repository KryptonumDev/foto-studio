import { HeroHeaderAndImages_Query } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImage_Query } from '@/components/global/SimpleListAndImage';
import { ListWithContent_Query } from '@/components/global/ListWithContent';
import { AboutSection_Query } from '@/components/global/AboutSection';
import { ProgressBarSection_Query } from '@/components/global/ProgressBarSection';

export const DynamicComponents_Query = `
  content[] {
    _type,
    ${HeroHeaderAndImages_Query}
    ${SimpleListAndImage_Query}
    ${ListWithContent_Query}
    ${AboutSection_Query}
    ${ProgressBarSection_Query}
  }
`;
