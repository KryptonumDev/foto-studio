import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type HeadingTypes = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: PortableTextBlock[];
  className?: string;
};

const components = (tag: HeadingTypes['tag'], className: string) => {
  const Element = tag;
  return {
    block: {
      normal: ({ children }) => <Element className={className}>{children}</Element>,
    },
  } as Partial<PortableTextReactComponents>;
};

export default function Heading({ tag, value, className = '' }: HeadingTypes) {
  return (
    <PortableText
      components={components(tag, className)}
      value={value}
    />
  );
}
