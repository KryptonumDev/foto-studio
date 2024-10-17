export type ButtonTypes = (
  | {
      data: CtaTypes;
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

export type CtaTypes = {
  href: string;
  text: string;
};
