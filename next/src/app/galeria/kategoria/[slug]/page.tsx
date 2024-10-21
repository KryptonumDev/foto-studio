import { defineQuery } from 'next-sanity';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import sanityFetch from '@/utils/sanity.fetch';
import { Category_Query } from '@/components/global/CategoryChips';
import { ImageCard_Query } from '@/components/global/ImageCard';
import Listing, { type ListingTypes } from '@/components/_Gallery/Listing';
import Loading from '@/app/loading';

export default async function GalleryCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const data = await query(slug);

  return (
    <Suspense fallback={<Loading />}>
      <Listing
        currentCategorySlug={slug}
        {...data}
      />
    </Suspense>
  );
}

const query = async (slug: string): Promise<ListingTypes> => {
  const galleryPageQuery = `
   {
      "categories": *[_type == "ImageCategoryCollection" && count(*[_type == "ImageCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "imageCount": count(*[_type == "ImageCollection" && category->slug.current == $category]), 
      "images": *[_type == "ImageCollection" && category->slug.current == $category] | order(_updatedAt desc) {
        ${ImageCard_Query}
      }
   }
  `;

  const data = await sanityFetch<ListingTypes>({ query: defineQuery(galleryPageQuery), params: { category: slug } });

  if (data.imageCount === 0) notFound();
  return data;
};

export async function generateStaticParams() {
  const categoriesQuery = `
    *[_type == "ImageCategoryCollection" && count(*[_type == "ImageCollection" && references(^._id)]) > 0].slug.current
  `;

  const data = await sanityFetch<string[]>({ query: defineQuery(categoriesQuery) });
  return data.map(slug => ({ slug }));
}
