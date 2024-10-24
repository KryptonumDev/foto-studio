import type { PortableTextBlock } from 'next-sanity';

export type ProgressBarSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    text: PortableTextBlock[];
    _key: string;
  }[];
};
