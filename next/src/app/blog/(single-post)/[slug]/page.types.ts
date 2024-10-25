import type { PostHeroTypes } from '@/components/_Blog/PostHero';
import type { PostContentTypes } from '@/components/_Blog/PostContent';
import type { NextBlogPostTypes } from '@/components/_Blog/NextBlogPost';

export type BlogPostPageTypes = {
  postHero: PostHeroTypes;
  postContent: PostContentTypes;
  nextBlogPost?: NextBlogPostTypes;
};
