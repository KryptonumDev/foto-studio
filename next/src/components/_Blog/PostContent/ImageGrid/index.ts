import { ImgData_Query } from '@/components/ui/Img';

import ImageGrid from './ImageGrid';
export default ImageGrid;
export type { ImageGridTypes } from './ImageGrid.types';

export const ImageGrid_Query = `
  _type == "ImageGrid" => {
    images[] {
      ${ImgData_Query}
    }
  },
`;
