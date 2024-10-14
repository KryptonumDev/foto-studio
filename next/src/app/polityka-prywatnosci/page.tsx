import { defineQuery } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';
import PrivacyPolicySection, {
  PrivacyPolicySection_Query,
  type PrivacyPolicySectionTypes,
} from '@/components/global/PrivacyPolicySection';

export default async function PrivacyPolicyPage() {
  const data = await query();

  return <PrivacyPolicySection {...data} />;
}

const query = async (): Promise<PrivacyPolicySectionTypes> => {
  const privacyPolicyPageQuery = `
    *[_type == "PrivacyPolicyPage"][0] {
      ${PrivacyPolicySection_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(privacyPolicyPageQuery) });
};
