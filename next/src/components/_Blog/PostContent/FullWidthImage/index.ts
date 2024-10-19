import { ImgData_Query } from '@/components/ui/Img';

import FullWidthImage from './FullWidthImage';
export default FullWidthImage;
export type { FullWidthImageTypes } from './FullWidthImage.types';

export const FullWidthImage_Query = `
  _type == "FullWidthImage" => {
    img {
      ${ImgData_Query}
    }
  },
`;
