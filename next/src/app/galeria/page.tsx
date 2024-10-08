import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import type { GalleryPageTypes } from './page.types';
import { Category_Query } from '@/components/global/CategoryChips';
import Listing from '@/components/_Gallery/Listing';

export const revalidate = 60;
export const dynamicParams = true;

export default async function GalleryPage() {
  const { categories, imageCount } = await query();

  return (
    <Listing
      categories={categories}
      imageCount={imageCount}
    />
  );
}

const query = async (): Promise<GalleryPageTypes> => {
  const galleryPageQuery = `
   {
      "categories": *[_type == "ImageCategoryCollection" && count(*[_type == "ImageCollection" && references(^._id)]) > 0]{
        ${Category_Query}
      },
      "imageCount": count(*[_type == "ImageCollection"]), 
   }
  `;

  return await sanityFetch({ query: defineQuery(galleryPageQuery) });
};
