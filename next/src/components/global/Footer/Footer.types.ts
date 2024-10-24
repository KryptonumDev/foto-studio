import type { PortableTextBlock } from 'next-sanity';
import type { CtaTypes } from '@/components/ui/Button';

export type FooterQueryTypes = {
  privacyPolicy: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  footer: {
    heading: PortableTextBlock[];
    cta: CtaTypes;
  };
};
