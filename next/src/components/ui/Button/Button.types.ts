export type ButtonPropsTypes = (
  | {
      data: CtaDataTypes;
      href?: never;
      children?: never;
    }
  | {
      data?: never;
      href?: string;
      children: string | React.ReactNode;
    }
) &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type CtaDataTypes = {
  href: string;
  text: string;
};
