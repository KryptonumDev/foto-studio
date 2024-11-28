import type { PortableTextBlock } from 'next-sanity';

export type PrivacyPolicySectionTypes = {
  heading: PortableTextBlock[];
  list: {
    heading: PortableTextBlock[];
    content: PortableTextBlock[];
  }[];
};

export interface IntersectionWrapperTypes {
  children: React.ReactNode;
  initialActiveSection: string;
  headings: { slug: string; text: string }[];
}
