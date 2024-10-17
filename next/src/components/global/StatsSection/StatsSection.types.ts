import type { PortableTextBlock } from 'next-sanity';

export type StatsSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  paragraph: PortableTextBlock[];
  list: {
    number: number;
    label: string;
  }[];
};
