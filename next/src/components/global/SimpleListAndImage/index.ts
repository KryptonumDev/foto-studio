import { ImageDataQuery } from '@/components/ui/Image';
import SimpleListAndImage from './SimpleListAndImage';

export default SimpleListAndImage;
export type { SimpleListAndImageTypes } from './SimpleListAndImage.types';

export const SimpleListAndImageQuery = `
  _type == "SimpleListAndImage" => {
    heading,
    list[] {
      text,
      _key
    },
    img {
      ${ImageDataQuery}
    }
  },
`;
