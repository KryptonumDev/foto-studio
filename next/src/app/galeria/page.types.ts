import type { ComponentTypes } from '@/components/DynamicComponents';
import type { PortableTextBlock } from 'next-sanity';

export type GalleryLayoutTypes = {
  content: ComponentTypes[];
  header: {
    heading: PortableTextBlock[];
  };
};
