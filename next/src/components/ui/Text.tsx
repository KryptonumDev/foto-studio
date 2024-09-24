import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type TextTypes = {
  tag: 'p' | 'span';
  value: PortableTextBlock[];
  className?: string;
};

const components = (tag: TextTypes['tag'], className: string) => {
  const Element = tag;
  return {
    block: {
      normal: ({ children }) => <Element className={className}>{children}</Element>,
    },
  } as Partial<PortableTextReactComponents>;
};

export default function Text({ tag, value, className = '' }: TextTypes) {
  return (
    <PortableText
      components={components(tag, className)}
      value={value}
    />
  );
}
