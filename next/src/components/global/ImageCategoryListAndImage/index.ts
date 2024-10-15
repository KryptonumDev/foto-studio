import { ImgData_Query } from '@/components/ui/Img';
import { Category_Query } from '../CategoryChips';

import ImageCategoryListAndImage from './ImageCategoryListAndImage';

export default ImageCategoryListAndImage;
export type { ImageCategoryListAndImageTypes } from './ImageCategoryListAndImage.types';

export const ImageCategoryListAndImage_Query = `
  _type == "ImageCategoryListAndImage" => {
    heading,
    list[] {
      text,
      _key,
      imgCategory-> {
        ${Category_Query}
      }
    },
    img {
      ${ImgData_Query}
    },
    imagePosition
  },
`;
