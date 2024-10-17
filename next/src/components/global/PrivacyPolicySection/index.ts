import PrivacyPolicySection from './PrivacyPolicySection';
export default PrivacyPolicySection;
export type { PrivacyPolicySectionTypes } from './PrivacyPolicySection.types';

export const PrivacyPolicySection_Query = `
  heading,
  list[] {
    heading,
    content
  }
`;
