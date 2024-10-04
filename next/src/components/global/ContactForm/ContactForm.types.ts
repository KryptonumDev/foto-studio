import type { PortableTextBlock } from 'next-sanity';

export type ContactFormTypes = {
  index: number;
  paragraph: PortableTextBlock[];
  topics: string[];
};

export type ContactQueryTypes = {
  email: string;
  privacyPolicy: string;
};

export type FormTypes = {
  topics: string[];
  email: string;
  privacyPolicyLink: string;
};
