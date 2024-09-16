import { addLeadingZero } from '@/utils/add-leading-zero';
import type { ListWithContentTypes } from './ListWithContent.types';

import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Button from '@/components/ui/Button';

import styles from './ListWithContent.module.css';

export default function ListWithContent({ index, heading, cta, list }: ListWithContentTypes) {
  return (
    <section className={`${styles['list-with-content']} max-width mb`}>
      <header className={styles.header}>
        <Heading
          level={index === 0 ? 1 : 2}
          value={heading}
          className='small-heading'
        />
        <Button {...cta} />
      </header>
      <ol className={styles.list}>
        {list.map(({ _key, heading, paragraph }, index) => (
          <li key={_key}>
            <header>
              <span className='small-heading'>{`[${addLeadingZero(index + 1)}]`}</span>
              <Heading
                level={3}
                value={heading}
                className='large-text'
              />
            </header>
            <Paragraph value={paragraph} />
          </li>
        ))}
      </ol>
    </section>
  );
}
