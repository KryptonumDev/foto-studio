import { type PortableTextReactComponents, PortableText } from 'next-sanity';
import type { SimpleListAndImageTypes } from './SimpleListAndImage.types';
import { addLeadingZero } from '@/utils/add-leading-zero';

import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';

import styles from './SimpleListAndImage.module.css';

const components = {
  block: {
    normal: ({ children }) => <span className='large-text'>{children}</span>,
  },
} as Partial<PortableTextReactComponents>;

export default function SimpleListAndImage({ index, heading, list, img }: SimpleListAndImageTypes) {
  return (
    <section className={`${styles['simple-list']} max-width mb`}>
      <div>
        <header className={styles.header}>
          <Heading
            level={index === 0 ? 1 : 2}
            value={heading}
            className='small-heading'
          />
        </header>
        <ol className={styles.list}>
          {list.map(({ _key, text }, index) => (
            <li key={_key}>
              <PortableText
                key={_key}
                components={components}
                value={text}
              />
              <span className='small-heading'>{`[${addLeadingZero(index + 1)}]`}</span>
            </li>
          ))}
        </ol>
      </div>
      <Img
        data={img}
        sizes='(min-width: 1366px) 434px, (min-width: 768px) 319px, 156px'
        priority={index === 0}
        className={styles.image}
      />
    </section>
  );
}
