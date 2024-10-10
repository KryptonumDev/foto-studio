import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import type { GalleryPageTypes } from './page.types';
import { Category_Query } from '@/components/global/CategoryChips';
import { ImageCard_Query } from '@/components/global/ImageCard';
import Listing from '@/components/_Gallery/Listing';

export default async function GalleryPage() {
  const { categories, imageCount, images } = await query();

  return (
    <Listing
      categories={categories}
      imageCount={imageCount}
      images={images}
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
      "images": *[_type == "ImageCollection"] | order(_updatedAt desc)  {
        ${ImageCard_Query}
      }
   }
  `;

  return await sanityFetch({ query: defineQuery(galleryPageQuery) });
};
