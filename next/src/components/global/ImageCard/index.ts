import { ImgData_Query } from '@/components/ui/Img';
import ImageCard from './ImageCard';
export default ImageCard;
export type { ImageCardTypes } from './ImageCard.types';

export const ImageCard_Query = `
  image {
    ${ImgData_Query}
  },
  title,
  subtitle,
  blogPost->{
    "slug": slug.current
  }
`;
