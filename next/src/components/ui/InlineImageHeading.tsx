import {
  PortableText,
  type PortableTextReactComponents,
  type PortableTextTypeComponentProps,
  type PortableTextBlock,
} from 'next-sanity';
import Img, { type ImgTypes } from '@/components/ui/Img';

export type HeadingTypes = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: PortableTextBlock[];
  imageSizes: string;
  priority: boolean;
  className?: string;
};

const components = (imageSizes: string, priority: boolean) =>
  ({
    block: {
      normal: ({ children }) => {
        return <span>{children}</span>;
      },
    },
    types: {
      inlineImg: ({ value }: PortableTextTypeComponentProps<ImgTypes & { _key: string; _type: string }>) => {
        return (
          <Img
            data={value}
            sizes={imageSizes}
            priority={priority}
          />
        );
      },
    },
  }) as Partial<PortableTextReactComponents>;

export default function InlineImageHeading({ tag, value, imageSizes, priority, className = '' }: HeadingTypes) {
  const Element = tag;
  return (
    <Element className={className}>
      <PortableText
        components={components(imageSizes, priority)}
        value={value}
      />
    </Element>
  );
}
