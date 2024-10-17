import { ImgData_Query } from '@/components/ui/Img';
import { CtaData_Query } from '@/components/ui/Button';

import HeroSection from './HeroSection';
export default HeroSection;
export type { HeroSectionTypes } from './HeroSection.types';

export const HeroSection_Query = `
  _type == "HeroSection" => {
    content {
      heading,
      img {
        ${ImgData_Query}
      },
      paragraph,
      cta {
        ${CtaData_Query}
      }
    },
    sideImg {
      ${ImgData_Query}
    }
  },
`;
