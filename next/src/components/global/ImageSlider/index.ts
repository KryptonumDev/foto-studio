import { ImgData_Query } from '@/components/ui/Img';

import ImageSlider from './ImageSlider';
export default ImageSlider;
export type { ImageSliderTypes } from './ImageSlider.types';

export const ImageSlider_Query = `
  _type == "ImageSlider" => {
    images[]{
      ${ImgData_Query}
    }
  },
`;
