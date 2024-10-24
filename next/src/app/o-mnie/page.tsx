import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const currentPath = '/o-mnie';
const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'O mnie', path: currentPath },
];

export default async function AboutPage() {
  const { content } = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <DynamicComponents data={content} />
    </>
  );
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const aboutPageQuery = `
    *[_type == "AboutPage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(aboutPageQuery), tags: ['AboutPage'] });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'AboutPage',
    path: currentPath,
  });
}
