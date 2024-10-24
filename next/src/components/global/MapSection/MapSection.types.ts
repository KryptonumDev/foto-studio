import type { CtaTypes } from '@/components/ui/Button';
import type { PortableTextBlock } from 'next-sanity';

export type MapSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  location: string;
  tel: string;
  addressLink: CtaTypes;
};
