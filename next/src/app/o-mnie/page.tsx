import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponentsQuery, type ComponentTypes } from '@/components/DynamicComponents';

export default async function AboutPage() {
  const { content } = await query();

  return <DynamicComponents data={content} />;
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const aboutPageQuery = `
    *[_type == "AboutPage"][0] {
      ${DynamicComponentsQuery}
    }
  `;

  return await sanityFetch({ query: defineQuery(aboutPageQuery) });
};
