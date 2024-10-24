import type { PortableTextBlock } from 'next-sanity';

export type IntroHeaderTypes = {
  index: number;
  heading: PortableTextBlock[];
  paragraph?: PortableTextBlock[];
};
