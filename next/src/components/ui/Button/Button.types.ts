export type ButtonTypes = {
  href?: string;
  text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type CtaTypes = {
  href: string;
  text: string;
};
