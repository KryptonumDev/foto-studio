import type { CtaTypes } from '@/components/ui/Button';
import type { PortableTextBlock } from 'next-sanity';

export type HorizontalListWithHeaderTypes = {
  index: number;
  heading: PortableTextBlock[];
  subtitle: PortableTextBlock[];
  cta: CtaTypes;
  list: {
    text: PortableTextBlock[];
    _key: string;
  }[];
};
