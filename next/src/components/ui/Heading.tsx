import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type HeadingTypes = {
  level: number;
  className?: string;
  value: PortableTextBlock[];
};

const components = (level: number, className: string) => {
  const Element = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';

  return {
    block: {
      normal: ({ children }) => <Element className={className}>{children}</Element>,
    },
  } as Partial<PortableTextReactComponents>;
};

export default function Heading({ level, value, className = '' }: HeadingTypes) {
  return (
    <PortableText
      components={components(level, className)}
      value={value}
    />
  );
}
