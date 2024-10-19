import type { PortableTextBlock } from 'next-sanity';
import type { ComponentTypes } from '@/components/DynamicComponents';

export type PostContentTypes = {
  type: string;
  content: ComponentTypes[];
  headings?: PortableTextBlock[][];
};
