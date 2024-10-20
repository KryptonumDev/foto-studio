import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import { defineQuery } from 'next-sanity';
import { Category_Query } from '@/components/global/CategoryChips';
import { ImageCard_Query } from '@/components/global/ImageCard';
import Listing, { type ListingTypes } from '@/components/_Gallery/Listing';

export default async function GalleryPage() {
  const data = await query();

  return <Listing {...data} />;
}

const query = async (): Promise<ListingTypes> => {
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

  const data = await sanityFetch<ListingTypes>({ query: defineQuery(galleryPageQuery) });

  if (data.imageCount === 0) notFound();
  return data;
};
