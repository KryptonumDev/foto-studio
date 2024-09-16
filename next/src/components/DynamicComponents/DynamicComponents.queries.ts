import { HeroHeaderAndImagesQuery } from '@/components/global/HeroHeaderAndImages';

export const DynamicComponentsQuery = `
  content[] {
    _type,
    ${HeroHeaderAndImagesQuery}
  }
`;
