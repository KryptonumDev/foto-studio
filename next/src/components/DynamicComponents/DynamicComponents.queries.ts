import { HeroHeaderAndImagesQuery } from '@/components/global/HeroHeaderAndImages';
import { SimpleListAndImageQuery } from '@/components/global/SimpleListAndImage';
import { ListWithContentQuery } from '@/components/global/ListWithContent';

export const DynamicComponentsQuery = `
  content[] {
    _type,
    ${HeroHeaderAndImagesQuery}
    ${SimpleListAndImageQuery}
    ${ListWithContentQuery}
  }
`;
