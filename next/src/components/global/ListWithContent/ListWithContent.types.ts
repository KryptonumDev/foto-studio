import type { PortableTextBlock } from 'next-sanity';
import type { CtaTypes } from '@/components/ui/Button';

export type ListWithContentTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaTypes;
  list: {
    _key: string;
    heading: PortableTextBlock[];
    paragraph: PortableTextBlock[];
  }[];
};
