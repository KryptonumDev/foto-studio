import { ImgData_Query } from '@/components/ui/Img';
import ImageCard from './ImageCard';
export default ImageCard;
export type { ImageCardTypes } from './ImageCard.types';

export const ImageCard_Query = `
  title,
  subtitle,
  image {
    ${ImgData_Query}
  }
`;
