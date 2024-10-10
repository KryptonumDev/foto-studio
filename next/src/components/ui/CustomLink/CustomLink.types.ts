export type CustomLinkTypes = {
  href: string;
  text: string;
  withArrow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
