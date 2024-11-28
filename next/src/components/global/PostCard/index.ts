import { ImgData_Query } from '@/components/ui/Img';
import { Category_Query } from '../CategoryChips';
import { ReadingTime_Query } from '@/components/ui/ReadingTime';

import PostCard from './PostCard';
export default PostCard;
export type { PostCardTypes } from './PostCard.types';

export const PostCard_Query = `
  _id,
  _createdAt,
  image {
    ${ImgData_Query}
  },
  category -> {
    ${Category_Query}
  },
  title,
  "slug": slug.current,
  "readingContent": {
    ${ReadingTime_Query}
  },
`;
