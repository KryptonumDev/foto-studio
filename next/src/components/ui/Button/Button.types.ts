export type ButtonTypes = (
  | {
      data: CtaTypes;
      href?: never;
      children?: never;
      loading?: boolean;
    }
  | {
      data?: never;
      href?: string;
      children: string | React.ReactNode;
      loading?: boolean;
    }
) &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type CtaTypes = {
  href: string;
  text: string;
};
