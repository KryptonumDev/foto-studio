import type { ImgTypes } from '@/components/ui/Img';
import type { CategoryTypes } from '@/components/global/CategoryChips';
import type { PortableTextBlock } from 'next-sanity';

export type PostCardTypes = {
  _id: string;
  _createdAt: string;
  image: ImgTypes;
  category: CategoryTypes;
  title: PortableTextBlock[];
  slug: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
