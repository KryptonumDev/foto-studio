import type { PortableTextBlock } from 'next-sanity';
import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { ReadingTimeTypes } from '@/components/ui/ReadingTime';

export type PostHeroTypes = {
  _createdAt: string;
  title: PortableTextBlock[];
  category: CategoryTypes;
  readingContent: ReadingTimeTypes;
  paragraph?: PortableTextBlock[];
};
