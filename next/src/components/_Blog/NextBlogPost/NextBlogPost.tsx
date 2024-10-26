import type { NextBlogPostTypes } from './NextBlogPost.types';
import InteractiveBlogPostWrapper from './InteractiveBlogPostWrapper';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';
import Img from '@/components/ui/Img';
import styles from './NextBlogPost.module.scss';

export default function NextBlogPost({ slug, type, title, image }: NextBlogPostTypes) {
  return (
    <div className={`${styles['NextBlogPost']} max-width mb`}>
      <header>
        <h2 className='small-text'>{type === 'caseStudy' ? 'Czytaj kolejne case study' : 'Czytaj kolejny artykuł'}</h2>
      </header>
      <InteractiveBlogPostWrapper>
        <Link
          className={styles.link}
          href={`/blog/${slug}`}
        />
        <Heading
          tag='h3'
          value={title}
          className='large-text'
        />
        <Img
          data={image}
          priority={false}
          sizes='(min-width: 1366px) 294px, (min-width: 450px) 41.5vw, 188px'
        />
      </InteractiveBlogPostWrapper>
    </div>
  );
}
