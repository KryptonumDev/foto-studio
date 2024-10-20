import type { PortableTextBlock } from 'next-sanity';
import type { ComponentTypes } from '@/components/DynamicComponents';

export type PostContentTypes = {
  type: string;
  content: ComponentTypes[];
  seo?: {
    title: string;
    description: string;
  };
  headings?: PortableTextBlock[][];
};

export interface IntersectionWrapperTypes {
  children: React.ReactNode;
  initialActiveSection: string;
  headings: { slug: string; text: string }[];
  seo?: {
    title: string;
    description: string;
  };
}
