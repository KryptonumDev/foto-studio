import type { ReviewsSectionTypes } from './ReviewsSection.types';

import Heading from '@/components/ui/Heading';
import Carousel from './_Carousel';

import styles from './ReviewsSection.module.scss';

export default function ReviewsSection({ heading, index, list }: ReviewsSectionTypes) {
  return (
    <section className={`${styles['ReviewsSection']} mb`}>
      <header className='max-width'>
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
