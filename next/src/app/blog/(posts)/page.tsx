import sanityFetch from '@/utils/sanity.fetch';
import { defineQuery } from 'next-sanity';
import { Category_Query } from '@/components/global/CategoryChips';
import { PostCard_Query } from '@/components/global/PostCard';
import Listing, { type ListingTypes } from '@/components/_Blog/Listing';

export default async function BlogPage() {
  const data = await query();

  return <Listing {...data} />;
}

const query = async (): Promise<ListingTypes> => {
  const blogPageQuery = `
   {
      "categories": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "postCount": count(*[_type == "BlogPostCollection"]), 
      "posts": *[_type == "BlogPostCollection"] | order(_updatedAt desc){
        ${PostCard_Query}
      }
   }
  `;

  return await sanityFetch({ query: defineQuery(blogPageQuery) });
};
