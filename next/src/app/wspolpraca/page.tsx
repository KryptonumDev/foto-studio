import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const currentPath = '/wspolpraca';
const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'Współpraca', path: currentPath },
];

export default async function CollaborationPage() {
  const { content } = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <DynamicComponents data={content} />
    </>
  );
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const collaborationPageQuery = `
    *[_type == "CollaborationPage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(collaborationPageQuery) });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'CollaborationPage',
    path: currentPath,
  });
}
