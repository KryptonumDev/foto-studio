import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import { Category_Query } from '@/components/global/CategoryChips';
import { PostCard_Query } from '@/components/global/PostCard';
import Listing, { type ListingTypes } from '@/components/_Blog/Listing';

export default async function BlogCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const data = await query(slug);

  return (
    <Listing
      currentCategorySlug={slug}
      {...data}
    />
  );
}

const query = async (slug: string): Promise<ListingTypes> => {
  const blogPageQuery = `
   {
      "categories": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "postCount": count(*[_type == "BlogPostCollection" && category->slug.current == $category]), 
      "posts": *[_type == "BlogPostCollection" && category->slug.current == $category] | order(_updatedAt desc) {
        ${PostCard_Query}
      }
   }
  `;

  return await sanityFetch({ query: defineQuery(blogPageQuery), params: { category: slug } });
};

export async function generateStaticParams() {
  const categoriesQuery = `
    *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0].slug.current
  `;

  const data = await sanityFetch<string[]>({ query: defineQuery(categoriesQuery) });
  return data.map(slug => ({ slug }));
}
