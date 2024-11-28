import { ImgData_Query } from '@/components/ui/Img';

import ThreeImagesLayout from './ThreeImagesLayout';
export default ThreeImagesLayout;
export type { ThreeImagesLayoutTypes } from './ThreeImagesLayout.types';

export const ThreeImagesLayout_Query = `
  _type == "ThreeImagesLayout" => {
    images[] {
      ${ImgData_Query}
    }
  },
`;
