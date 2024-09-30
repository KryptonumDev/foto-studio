import { ImgData_Query } from '@/components/ui/Img';
import InlineImageHeader from './InlineImageHeader';
export default InlineImageHeader;
export type { InlineImageHeaderTypes } from './InlineImageHeader.types';

export const InlineImageHeader_Query = `
  _type == "InlineImageHeader" => {
    heading[] {
      ...,
      children[] {
        ...,
        _type == "inlineImg" => {
          ...,
          ${ImgData_Query}
        }
      }
    },
  },
`;
