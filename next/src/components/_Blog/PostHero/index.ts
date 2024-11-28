import { ReadingTime_Query } from '@/components/ui/ReadingTime';
import { Category_Query } from '@/components/global/CategoryChips';

import PostHero from './PostHero';
export default PostHero;
export type { PostHeroTypes } from './PostHero.types';

export const PostHero_Query = `
  _createdAt,
  title,
  paragraph,
  category->{
    ${Category_Query}
  },
  "readingContent": {
    ${ReadingTime_Query}
  }
`;
