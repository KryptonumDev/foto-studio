import { DOMAIN } from '@/global/constants';

type BreadcrumbsSchemaTypes = {
  data?: {
    name: string;
    path: string;
  }[];
};

export default function BreadcrumbsSchema({ data }: BreadcrumbsSchemaTypes) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            data?.map(({ name, path }, i) => ({
              '@type': 'ListItem',
              position: ++i,
              name: name,
              item: `${DOMAIN}${path}`,
            })),
          ],
        }),
      }}
    />
  );
}
