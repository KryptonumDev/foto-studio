import { DynamicComponents_Query } from '@/components/DynamicComponents';

import PostContent from './PostContent';
export default PostContent;
export type { PostContentTypes } from './PostContent.types';

export const PostContent_Query = `
  type,
  type == "article" => {
    "headings": content[_type == "ContentSectionWithHeader"].heading
  },
  ${DynamicComponents_Query}
`;
