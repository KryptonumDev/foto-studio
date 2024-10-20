import { ImgData_Query } from '@/components/ui/Img';

import NextBlogPost from './NextBlogPost';
export default NextBlogPost;
export type { NextBlogPostTypes } from './NextBlogPost.types';

export const NextBlogPost_Query = `
  coalesce(
    *[_type == "BlogPostCollection" && _id > ^._id][0],
    *[_type == "BlogPostCollection" && _id != ^._id][0]
  ) {
    type,
    title,
    image {
      ${ImgData_Query}
    },
    "slug": slug.current
  }
`;
