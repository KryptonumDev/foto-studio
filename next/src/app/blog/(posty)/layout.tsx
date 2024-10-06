import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query } from '@/components/DynamicComponents';
import ListingHeader, { ListingHeader_Query } from '@/components/global/ListingHeader';
import type { BlogLayoutTypes } from './page.types';

export default async function BlogLayout({
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

const query = async (): Promise<BlogLayoutTypes> => {
  const blogQuery = `
   *[_type == "BlogPage"][0] {
      ${ListingHeader_Query}
      ${DynamicComponents_Query}
    }   
  `;

  return await sanityFetch({ query: defineQuery(blogQuery) });
};
