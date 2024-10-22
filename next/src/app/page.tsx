import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const breadcrumbsData = [{ name: 'Strona główna', path: '/' }];

export default async function HomePage() {
  const { content } = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <DynamicComponents data={content} />
    </>
  );
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const homePageQuery = `
    *[_type == "HomePage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(homePageQuery) });
};
