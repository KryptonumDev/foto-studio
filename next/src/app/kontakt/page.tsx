import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import DynamicComponents, { DynamicComponents_Query, type ComponentTypes } from '@/components/DynamicComponents';

export default async function ContactPage() {
  const { content } = await query();

  return <DynamicComponents data={content} />;
}

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  const contactPageQuery = `
    *[_type == "ContactPage"][0] {
      ${DynamicComponents_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(contactPageQuery) });
};
