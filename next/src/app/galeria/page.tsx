import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import { Category_Query } from '@/components/global/CategoryChips';
import { ImageCard_Query } from '@/components/global/ImageCard';
import Listing, { type ListingTypes } from '@/components/_Gallery/Listing';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const currentPath = '/galeria';
const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'Galeria', path: currentPath },
];

export default async function GalleryPage() {
  const data = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <Listing {...data} />
    </>
  );
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

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'GalleryPage',
    path: currentPath,
  });
}
