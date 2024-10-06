'use server';
import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import { type PostCardTypes, PostCard_Query } from '@/components/global/PostCard';

export const getPosts = async (
  offset: number,
  limit: number,
  currentCategorySlug?: string
): Promise<PostCardTypes[]> => {
  const postsQuery = `
    *[_type == "BlogPostCollection" ${currentCategorySlug ? '&& category->slug.current == $category' : ''}] | order(_updatedAt desc) [$from...$to] {
      ${PostCard_Query}
    }
  `;

  return await sanityFetch({
    query: defineQuery(postsQuery),
    params: { from: offset, to: limit + offset, category: currentCategorySlug ?? '' },
  });
};
