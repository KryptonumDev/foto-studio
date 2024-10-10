type Link = {
  name: string;
  href: string;
}

export type _HeaderTypes = {
  logo: React.ReactNode;
  links: Link[]
}

export type HeaderQueryTypes = {
  nav: {
    links: Link[];
  };
}