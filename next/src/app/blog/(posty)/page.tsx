import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import type { BlogPageTypes } from './page.types';
import { Category_Query } from '@/components/global/CategoryChips';
import Listing from '@/components/_Blog/Listing';

export default async function BlogPage() {
  const { categories, postCount } = await query();

  return (
    <Listing
      categories={categories}
      postCount={postCount}
    />
  );
}

const query = async (): Promise<BlogPageTypes> => {
  const blogPageQuery = `
   {
      "categories": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "postCount": count(*[_type == "BlogPostCollection"]), 
   }
  `;

  return await sanityFetch({ query: defineQuery(blogPageQuery) });
};
