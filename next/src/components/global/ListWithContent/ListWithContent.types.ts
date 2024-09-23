import type { PortableTextBlock } from 'next-sanity';
import type { CtaDataTypes } from '@/components/ui/Button';

export type ListWithContentTypes = {
  index: number;
  heading: PortableTextBlock[];
  cta: CtaDataTypes;
  list: {
    _key: string;
    heading: PortableTextBlock[];
    paragraph: PortableTextBlock[];
  }[];
};
