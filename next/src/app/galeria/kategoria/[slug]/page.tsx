import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import type { GalleryPageTypes } from '../../page.types';
import { Category_Query } from '@/components/global/CategoryChips';
import { ImageCard_Query } from '@/components/global/ImageCard';
import Listing from '@/components/_Gallery/Listing';

export default async function GalleryCategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const { categories, imageCount, images } = await query(slug);

  return (
    <Listing
      categories={categories}
      imageCount={imageCount}
      images={images}
      currentCategorySlug={slug}
    />
  );
}

const query = async (slug: string): Promise<GalleryPageTypes> => {
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

  return await sanityFetch({ query: defineQuery(galleryPageQuery), params: { category: slug } });
};

export async function generateStaticParams() {
  const categoriesQuery = `
    *[_type == "ImageCategoryCollection" && count(*[_type == "ImageCollection" && references(^._id)]) > 0].slug.current
  `;

  const data = await sanityFetch<string[]>({ query: defineQuery(categoriesQuery) });
  return data.map(slug => ({ slug }));
}
