export const ImageDataQuery = `
  asset->{
    url,
    altText,
    "lqip": metadata.lqip,
    "width": metadata.dimensions.width,
    "height": metadata.dimensions.height
  }
`;

export type ImageDataTypes = {
  asset: {
    url: string;
    lqip: string;
    width: number;
    height: number;
    altText?: string;
  };
};

export type ImageTypes = (
  | {
      data: ImageDataTypes;
      src?: never;
      width?: number;
      height?: number;
      alt?: string;
    }
  | {
      data?: never;
      src: string;
      width: number;
      height: number;
      alt: string;
    }
) & {
  sizes: string;
  priority?: boolean;
} & React.HTMLAttributes<HTMLImageElement>;
