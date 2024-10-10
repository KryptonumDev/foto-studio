import type { HorizontalListWithHeaderTypes } from './HorizontalListWithHeader.types';
import { addLeadingZero } from '@/utils/add-leading-zero';

import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';

import styles from './HorizontalListWithHeader.module.scss';

export default function HorizontalListWithHeader({ heading, subtitle, cta, list }: HorizontalListWithHeaderTypes) {
  return (
    <section className={`${styles['HorizontalListWithHeader']} max-width mb`}>
      <Heading
        tag='h2'
        value={subtitle}
        className={`${styles.subtitle} small-text`}
      />
      <div className={styles.content}>
        <header>
          <Heading
            tag='h3'
            value={heading}
            className='large-text'
          />
          <Button data={cta} />
        </header>
        <ol className={styles.list}>
          {list.map(({ text, _key }, i) => (
            <li key={_key}>
              <span>{`[${addLeadingZero(i + 1)}]`}</span>
              <Text value={text} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
