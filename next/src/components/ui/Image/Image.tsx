import NextImage from 'next/image';
import type { ImageTypes } from './Image.types';

const defaultPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUltCqBwABcQDWMIsO5gAAAABJRU5ErkJggg==';

export default function Image({ data, src, width, height, alt, sizes, priority, ...props }: ImageTypes) {
  const placeholder = data?.asset?.lqip || defaultPlaceholder;

  if (data) {
    src = data.asset?.url;
    width = width || data.asset?.width;
    height = height || data.asset?.height;
    alt = alt || data.asset?.altText;
  }

  return (
    <NextImage
      src={src!}
      width={width}
      height={height}
      alt={alt || ''}
      sizes={sizes}
      priority={priority}
      {...((width! > 40 || height! > 40) && {
        blurDataURL: placeholder,
        placeholder: 'blur',
      })}
      {...props}
    />
  );
}
