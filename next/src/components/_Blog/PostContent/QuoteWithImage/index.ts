import { ImgData_Query } from '@/components/ui/Img';

import QuoteWithImage from './QuoteWithImage';
export default QuoteWithImage;
export type { QuoteWithImageTypes } from './QuoteWithImage.types';

export const QuoteWithImage_Query = `
  _type == "QuoteWithImage" => {
    content,
    images[] {
      ${ImgData_Query}
    }
  },
`;
