import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import type { BlogPageTypes } from '../../page.types';
import { Category_Query } from '@/components/global/CategoryChips';
import Listing from '@/components/_Blog/Listing';

export default async function BlogCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const { categories, postCount } = await query(slug);

  return (
    <Listing
      categories={categories}
      postCount={postCount}
      currentCategorySlug={slug}
    />
  );
}

const query = async (slug: string): Promise<BlogPageTypes> => {
  const blogPageQuery = `
   {
      "categories": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "postCount": count(*[_type == "BlogPostCollection" && category->slug.current == $category]), 
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