import { addLeadingZero } from '@/utils/add-leading-zero';
import type { ListWithContentTypes } from './ListWithContent.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import styles from './ListWithContent.module.scss';

export default function ListWithContent({ index, heading, cta, list }: ListWithContentTypes) {
  return (
    <section className={`${styles['ListWithContent']} max-width mb`}>
      <header className={styles.header}>
        <Heading
          tag={index === 0 ? 'h1' : 'h2'}
          value={heading}
          className='small-text'
        />
        <Button data={cta} />
      </header>
      <ol className={styles.list}>
        {list.map(({ _key, heading, paragraph }, i) => (
          <li key={_key}>
            <header>
              <span className='small-text'>{`[${addLeadingZero(i + 1)}]`}</span>
              <Heading
                tag={index === 0 ? 'h2' : 'h3'}
                value={heading}
                className='large-text'
              />
            </header>
            <Text value={paragraph} />
          </li>
        ))}
      </ol>
    </section>
  );
}
