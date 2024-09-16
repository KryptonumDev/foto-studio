import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type ParagraphTypes = {
  className?: string;
  value: PortableTextBlock[];
};

const components = (className: string) =>
  ({
    block: {
      normal: ({ children }) => <p className={className}>{children}</p>,
    },
  }) as Partial<PortableTextReactComponents>;

export default function Paragraph({ value, className = '' }: ParagraphTypes) {
  return (
    <PortableText
      components={components(className)}
      value={value}
    />
  );
}
