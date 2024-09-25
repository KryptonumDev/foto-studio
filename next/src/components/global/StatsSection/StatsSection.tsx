import type { StatsSectionTypes } from './StatsSection.types';

import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Counter from '@/components/ui/Counter';

import styles from './StatsSection.module.scss';

export default function StatsSection({ index, heading, paragraph, list }: StatsSectionTypes) {
  return (
    <section className={`${styles['StatsSection']} max-width mb`}>
      <header>
        <Heading
          tag={index === 0 ? 'h1' : 'h2'}
          value={heading}
          className='small-heading'
        />
        <div className={styles.text}>
          <Text
            tag='p'
            value={paragraph}
          />
        </div>
      </header>
      <ul className={styles.numbers}>
        {list.map(({ number, label }, i) => (
          <li key={`stats-${i}`}>
            <span className='large-text'>
              {`>`}
              <Counter value={number} />
            </span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
