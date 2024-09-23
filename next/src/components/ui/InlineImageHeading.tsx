import {
  PortableText,
  type PortableTextReactComponents,
  type PortableTextTypeComponentProps,
  type PortableTextBlock,
} from 'next-sanity';
import Img, { type ImageDataTypes } from '@/components/ui/Img';

export type HeadingTypes = {
  value: PortableTextBlock[];
  imageSizes: string;
  priority: boolean;
};

const components = (imageSizes: string, priority: boolean) =>
  ({
    block: {
      normal: ({ children }) => {
        return <span>{children}</span>;
      },
    },
    types: {
      inlineImg: ({ value }: PortableTextTypeComponentProps<ImageDataTypes & { _key: string; _type: string }>) => {
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

export default function InlineImageHeading({ value, imageSizes, priority }: HeadingTypes) {
  return (
    <PortableText
      components={components(imageSizes, priority)}
      value={value}
    />
  );
}
