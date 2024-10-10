import type { PortableTextBlock } from 'next-sanity';

export type FaqSectionTypes = {
  index: number;
  heading: PortableTextBlock[];
  list: {
    _id: string;
    question: string;
    answer: PortableTextBlock[];
  }[];
};

export type AccordionListTypes = {
  list: {
    _id: string;
    question: React.ReactNode;
    answer: React.ReactNode;
  }[];
  icon: React.ReactNode;
};
