import { CtaDataQuery } from '@/components/ui/Button';
import { ImageDataQuery } from '@/components/ui/Img';

import HeroHeaderAndImages from './HeroHeaderAndImages';

export default HeroHeaderAndImages;

export type { HeroHeaderAndImagesTypes } from './HeroHeaderAndImages.types';

export const HeroHeaderAndImagesQuery = `
  _type == "HeroHeaderAndImages" => {
    heading,
    cta { 
      ${CtaDataQuery}
    },
    images[] {
      ${ImageDataQuery} 
    }
  },
`;
