import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type TextTypes = {
  value: PortableTextBlock[];
  className?: string;
  tag?: 'p' | 'span';
};

const components = (tag: TextTypes['tag'], className: string) => {
  const Element = tag || 'p';
  return {
    block: {
      normal: ({ children }) => <Element className={className}>{children}</Element>,
    },
    list: {
      bullet: ({ children }) => <ul className={`circle-marker ${className}`}>{children}</ul>,
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
