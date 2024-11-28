import { ImgData_Query } from '@/components/ui/Img';

import TwoImagesWithSpaceBetween from './TwoImagesWithSpaceBetween';
export default TwoImagesWithSpaceBetween;
export type { TwoImagesWithSpaceBetweenTypes } from './TwoImagesWithSpaceBetween.types';

export const TwoImagesWithSpaceBetween_Query = `
  _type == "TwoImagesWithSpaceBetween" => {
    images[] {
      ${ImgData_Query}
    },
    alignment
  },
`;
