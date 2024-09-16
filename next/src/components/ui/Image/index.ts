import Image from './Image';
export default Image;

export type { ImageDataTypes } from './Image.types';

export const ImageDataQuery = `
  asset->{
    url,
    altText,
    "lqip": metadata.lqip,
    "width": metadata.dimensions.width,
    "height": metadata.dimensions.height
  }
`;
