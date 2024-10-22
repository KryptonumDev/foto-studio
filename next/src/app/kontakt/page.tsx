import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const currentPath = '/kontakt';
const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'Kontakt', path: currentPath },
];

export default async function ContactPage() {
  const { content } = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <DynamicComponents data={content} />
    </>
  );
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const contactPageQuery = `
    *[_type == "ContactPage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(contactPageQuery), tags: ['ContactPage'] });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'ContactPage',
    path: currentPath,
  });
}
