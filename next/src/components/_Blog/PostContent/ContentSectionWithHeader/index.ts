import { ImgData_Query } from '@/components/ui/Img';
import ContentSectionWithHeader from './ContentSectionWithHeader';
export default ContentSectionWithHeader;
export type { ContentSectionWithHeaderTypes } from './ContentSectionWithHeader.types';

export const ContentSectionWithHeader_Query = `
  _type == "ContentSectionWithHeader" => {
    "blogPostType": ^.type,
    heading,
    content,
    list[]{
      heading,
      content
    },
    img {
      ${ImgData_Query}
    }
  },
`;
