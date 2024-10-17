import { CtaData_Query } from '@/components/ui/Button';
import { ImgData_Query } from '@/components/ui/Img';

import HeroHeaderAndImages from './HeroHeaderAndImages';
export default HeroHeaderAndImages;
export type { HeroHeaderAndImagesTypes } from './HeroHeaderAndImages.types';

export const HeroHeaderAndImages_Query = `
  _type == "HeroHeaderAndImages" => {
    heading,
    cta { 
      ${CtaData_Query}
    },
    images[] {
      ${ImgData_Query} 
    }
  },
`;
