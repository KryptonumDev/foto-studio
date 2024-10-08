'use server';
import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import { type ImageCardTypes, ImageCard_Query } from '@/components/global/ImageCard';

export const getImages = async (
  offset: number,
  limit: number,
  currentCategorySlug?: string
): Promise<ImageCardTypes[]> => {
  const imagesQuery = `
    *[_type == "ImageCollection" ${currentCategorySlug ? '&& category->slug.current == $category' : ''}] | order(_updatedAt desc) [$from...$to] {
      ${ImageCard_Query}
    }
  `;

  return await sanityFetch({
    query: defineQuery(imagesQuery),
    params: { from: offset, to: limit + offset, category: currentCategorySlug ?? '' },
  });
};
