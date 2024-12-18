import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';

export default async function NotFoundPage() {
  const { content } = await query();

  return <DynamicComponents data={content} />;
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const notFoundPageQuery = `
    *[_type == "NotFoundPage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(notFoundPageQuery), tags: ['NotFoundPage'] });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'NotFoundPage',
    path: '/404',
  });
}
