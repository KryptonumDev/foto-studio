import { CtaData_Query } from '@/components/ui/Button';
import { ImgData_Query } from '@/components/ui/Img';

import NotFoundSection from './NotFoundSection';
export default NotFoundSection;
export type { NotFoundSectionTypes } from './NotFoundSection.types';

export const NotFoundSection_Query = `
  _type == "NotFoundSection" => {
    heading,
    cta {
      ${CtaData_Query}
    },
    images[]{
      ${ImgData_Query}
    }
  },
`;
