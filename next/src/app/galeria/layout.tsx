import sanityFetch from '@/utils/sanity.fetch';
import { defineQuery } from 'next-sanity';
import DynamicComponents, { DynamicComponents_Query } from '@/components/DynamicComponents';
import ListingHeader, { ListingHeader_Query } from '@/components/global/ListingHeader';
import type { GalleryLayoutTypes } from './page.types';

export default async function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { content, header } = await query();
  return (
    <>
      <ListingHeader header={header} />
      {children}
      <DynamicComponents data={content} />
    </>
  );
}

const query = async (): Promise<GalleryLayoutTypes> => {
  const galleryLayoutQuery = `
   *[_type == "GalleryPage"][0] {
      ${ListingHeader_Query}
      ${DynamicComponents_Query}
    }   
  `;

  return await sanityFetch({ query: defineQuery(galleryLayoutQuery) });
};
