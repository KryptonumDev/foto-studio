import sanityFetch from '@/utils/sanity.fetch';
import { DOMAIN } from '@/global/constants';
import type { MetadataRoute } from 'next';

type QueryTypes = {
  blogCategoriesSlugs: string[];
  blogPostsSlugs: string[];
  imageCategoriesSlugs: string[];
};

const staticRoutes = ['/', '/o-mnie', '/wspolpraca', '/kontakt', '/polityka-prywatnosci', '/galeria', '/blog'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { blogCategoriesSlugs, blogPostsSlugs, imageCategoriesSlugs } = await query();

  return [
    ...staticRoutes.map(route => ({ url: `${DOMAIN}${route}` })),
    ...blogCategoriesSlugs.map(slug => ({ url: `${DOMAIN}/blog/kategoria/${slug}` })),
    ...blogPostsSlugs.map(slug => ({ url: `${DOMAIN}/blog/${slug}` })),
    ...imageCategoriesSlugs.map(slug => ({ url: `${DOMAIN}/galeria/kategoria/${slug}` })),
  ];
}

const query = async (): Promise<QueryTypes> => {
  const query = `
    {
      "blogCategoriesSlugs": *[_type == "BlogCategoryCollection" && count(*[_type == "BlogPostCollection" && references(^._id)]) > 0].slug.current,
      "blogPostsSlugs": *[_type == "BlogPostCollection"].slug.current,
      "imageCategoriesSlugs": *[_type == "ImageCategoryCollection" && count(*[_type == "ImageCollection" && references(^._id)]) > 0].slug.current,
    }
  `;

  return await sanityFetch<QueryTypes>({
    query,
    tags: ['BlogCategoryCollection', 'BlogPostCollection', 'ImageCategoryCollection'],
  });
};
