import type { PortableTextBlock } from 'next-sanity';
import type { ComponentTypes } from '@/components/DynamicComponents';

export type BlogLayoutTypes = {
  content: ComponentTypes[];
  header: {
    heading: PortableTextBlock[];
  };
};
