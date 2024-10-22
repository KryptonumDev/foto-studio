import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import { Suspense } from 'react';
import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import { Category_Query } from '@/components/global/CategoryChips';
import { PostCard_Query } from '@/components/global/PostCard';
import Listing, { type ListingTypes } from '@/components/_Blog/Listing';
import Loading from '@/app/loading';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'Blog', path: '/blog' },
];

export default async function BlogCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const { categoryName, ...data } = await query(slug);

  return (
    <>
      <BreadcrumbsSchema
        data={[...breadcrumbsData, { name: categoryName as string, path: `/blog/kategoria/${slug}` }]}
      />
      <Suspense fallback={<Loading />}>
        <Listing
          currentCategorySlug={slug}
          {...data}
        />
      </Suspense>
    </>
  );
}

const query = async (slug: string): Promise<ListingTypes> => {
  const blogPageQuery = `
   {
      "categoryName": *[_type == "BlogCategoryCollection" && slug.current == $category][0].categoryName,
      "categories": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "postCount": count(*[_type == "BlogPostCollection" && category->slug.current == $category]), 
      "posts": *[_type == "BlogPostCollection" && category->slug.current == $category] | order(_updatedAt desc) {
        ${PostCard_Query}
      }
   }
  `;

  const data = await sanityFetch<ListingTypes>({ query: defineQuery(blogPageQuery), params: { category: slug } });

  if (data.postCount === 0) notFound();
  return data;
};

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  return await QueryMetadata({
    name: 'BlogCategoryCollection',
    path: `/blog/kategoria/${slug}`,
    dynamicSlug: slug,
  });
}

export async function generateStaticParams() {
  const categoriesQuery = `
    *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0].slug.current
  `;

  const data = await sanityFetch<string[]>({ query: defineQuery(categoriesQuery) });
  return data.map(slug => ({ slug }));
}
