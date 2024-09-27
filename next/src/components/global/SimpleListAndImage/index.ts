import { ImgData_Query } from '@/components/ui/Img';
import SimpleListAndImage from './SimpleListAndImage';

export default SimpleListAndImage;
export type { SimpleListAndImageTypes } from './SimpleListAndImage.types';

export const SimpleListAndImage_Query = `
  _type == "SimpleListAndImage" => {
    heading,
    list[] {
      text,
      _key
    },
    img {
      ${ImgData_Query}
    },
    imagePosition
  },
`;
