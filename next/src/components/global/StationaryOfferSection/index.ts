import { CtaData_Query } from '@/components/ui/Button';
import { ImgData_Query } from '@/components/ui/Img';

import StationaryOfferSection from './StationaryOfferSection';
export default StationaryOfferSection;
export type { StationaryOfferSectionTypes } from './StationaryOfferSection.types';

export const StationaryOfferSection_Query = `
  _type == "StationaryOfferSection" => {
    content {
      heading,
      cta {
        ${CtaData_Query}
      },
      paragraph
    },
    sideImg {
      ${ImgData_Query}
    }
  },
`;
