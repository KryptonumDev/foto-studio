import sanityFetch from '@/utils/sanity.fetch';
import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import type { BlogPostPageTypes } from './page.types';
import PostHero, { PostHero_Query } from '@/components/_Blog/PostHero';
import PostContent, { PostContent_Query } from '@/components/_Blog/PostContent';
import NextBlogPost, { NextBlogPost_Query } from '@/components/_Blog/NextBlogPost';

export const revalidate = 60;

export default async function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
  const { postHero, postContent, nextBlogPost } = await query(slug);

  return (
    <>
      <PostHero {...postHero} />
      <PostContent {...postContent} />
      <NextBlogPost {...nextBlogPost} />
    </>
  );
}

const query = async (slug: string): Promise<BlogPostPageTypes> => {
  const blogPostPageQuery = `
    *[_type == "BlogPostCollection" && slug.current == $slug][0]{
      "postHero": {
        ${PostHero_Query}
      },
      "postContent": {
        ${PostContent_Query}
      },
      "nextBlogPost": ${NextBlogPost_Query}
    }
  `;

  const data = await sanityFetch<BlogPostPageTypes>({ query: defineQuery(blogPostPageQuery), params: { slug } });

  if (!data) notFound();
  return data;
};

export async function generateStaticParams() {
  const postsQuery = `
    *[_type == "BlogPostCollection"].slug.current
  `;

  const data = await sanityFetch<string[]>({ query: defineQuery(postsQuery) });
  return data.map(slug => ({ slug }));
}
