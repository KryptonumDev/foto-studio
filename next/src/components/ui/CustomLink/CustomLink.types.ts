export type CustomLinkTypes = {
  text: string;
  href?: string;
  withArrow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
