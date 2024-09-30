import { CtaTypes } from '@/components/ui/Button';
import { PortableTextBlock } from 'next-sanity';

export type MapSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  location: string;
  tel: string;
  addressLink: CtaTypes;
};
