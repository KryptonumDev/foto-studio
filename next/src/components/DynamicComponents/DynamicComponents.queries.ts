import { HeroHeaderAndImagesQuery } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImageQuery } from '@/components/global/SimpleListAndImage';

export const DynamicComponentsQuery = `
  content[] {
    _type,
    ${HeroHeaderAndImagesQuery}
    ${SimpleListAndImageQuery}
  }
`;
