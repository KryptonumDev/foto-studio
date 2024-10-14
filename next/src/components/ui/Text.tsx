import Link from 'next/link';
import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from 'next-sanity';

export type TextTypes = {
  value: PortableTextBlock[];
  className?: string;
  tag?: 'p' | 'span';
};

const InlineLink = ({ href, text }: { href: string; text: string }) => {
  const isExternal = href.startsWith('https://');
  const Element = isExternal ? 'a' : Link;

  return (
    <Element
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
    >
      {text}
    </Element>
  );
};

const components = (tag: TextTypes['tag'], className: string) => {
  const Element = tag || 'p';
  return {
    block: {
      normal: ({ children }) => <Element className={className}>{children}</Element>,
    },
    marks: {
      link: ({ value, text }) => (
        <InlineLink
          text={text}
          href={value.url}
        />
      ),
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
