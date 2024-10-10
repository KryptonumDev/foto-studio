import type { FeaturedPostsSectionTypes } from './FeaturedPostsSection.types';

import Heading from '@/components/ui/Heading';
import Carousel from './_Carousel';

import styles from './FeaturedPostsSection.module.scss';

export default function FeaturedPostsSection({ index, heading, list }: FeaturedPostsSectionTypes) {
  return (
    <section className={`${styles['FeaturedPostsSection']} max-width mb`}>
      <header>
        <Heading
          tag={index === 0 ? 'h1' : 'h2'}
          value={heading}
          className='small-text'
        />
      </header>
      <Carousel
        list={list}
        index={index}
      />
    </section>
  );
}
