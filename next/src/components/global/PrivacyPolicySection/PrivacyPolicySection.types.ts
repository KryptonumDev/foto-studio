import type { PortableTextBlock } from 'next-sanity';

export type PrivacyPolicySectionTypes = {
  heading: PortableTextBlock[];
  list: {
    heading: PortableTextBlock[];
    content: PortableTextBlock[];
  }[];
};
