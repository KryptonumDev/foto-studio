import { defineQuery } from 'next-sanity';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import sanityFetch from '@/utils/sanity.fetch';
import PrivacyPolicySection, {
  PrivacyPolicySection_Query,
  type PrivacyPolicySectionTypes,
} from '@/components/global/PrivacyPolicySection';
import BreadcrumbsSchema from '@/global/Schema/BreadcrumbsSchema';

const currentPath = '/polityka-prywatnosci';
const breadcrumbsData = [
  { name: 'Strona główna', path: '/' },
  { name: 'Polityka prywatności', path: currentPath },
];

export default async function PrivacyPolicyPage() {
  const data = await query();

  return (
    <>
      <BreadcrumbsSchema data={breadcrumbsData} />
      <PrivacyPolicySection {...data} />
    </>
  );
}

const query = async (): Promise<PrivacyPolicySectionTypes> => {
  const privacyPolicyPageQuery = `
    *[_type == "PrivacyPolicyPage"][0] {
      ${PrivacyPolicySection_Query}
    }
  `;

  return await sanityFetch({ query: defineQuery(privacyPolicyPageQuery) });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'PrivacyPolicyPage',
    path: currentPath,
  });
}
