import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import Seo, { OpenGraphImage_Query } from '@/global/Seo';
import type { Metadata } from 'next';
import type { QueryMetadataTypes, QueryTypes } from './Seo.types';

/**
 * Performs an SEO query.
 * @param {string} name - The name of the SEO query for GROQ. It will be `*[_id == "${name}"][0]` or `*[_type=='${name}' && slug.current == $slug][0]` if the `dynamicSlug` is provided.
 * @param {string} path - The canonical path for the URL.
 * @param {string} [dynamicSlug] - Optional. Used to query dynamic pages, like blog posts.
 * @returns {Promise<Metadata>} Returns a promise of the SEO object.
 */
export const QueryMetadata = async ({ name, path, dynamicSlug }: QueryMetadataTypes): Promise<Metadata> => {
  const customQuery = dynamicSlug ? `*[_type == '${name}' && slug.current == $slug][0]` : `*[_id == "${name}"][0]`;

  const { title, description, openGraphImage } = await query(customQuery, name, dynamicSlug);

  return Seo({
    title,
    description,
    path,
    ...(openGraphImage?.url && { openGraphImage }),
  });
};

const query = async (customQuery: string, tag: string, dynamicSlug?: string): Promise<QueryTypes> => {
  const seo = await sanityFetch<QueryTypes>({
    query: /* groq */ `
      ${customQuery} {
        "title": seo.title,
        "description": seo.description,
        "openGraphImage": {
          ${OpenGraphImage_Query}
        },
      }
    `,
    tags: [tag],
    ...(dynamicSlug && { params: { slug: dynamicSlug } }),
  });
  !seo && notFound();
  return { ...seo };
};
