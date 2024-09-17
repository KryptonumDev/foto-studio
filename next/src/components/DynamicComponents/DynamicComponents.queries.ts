import { HeroHeaderAndImagesQuery } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImageQuery } from '@/components/global/SimpleListAndImage';
import { ListWithContentQuery } from '@/components/global/ListWithContent';
import { AboutSectionQuery } from '@/components/global/AboutSection';

export const DynamicComponentsQuery = `
  content[] {
    _type,
    ${HeroHeaderAndImagesQuery}
    ${SimpleListAndImageQuery}
    ${ListWithContentQuery}
    ${AboutSectionQuery}
  }
`;
