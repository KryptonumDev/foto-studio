import type { PricesSectionTypes } from './PricesSection.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import List from './_List';
import styles from './PricesSection.module.scss';

export default function PricesSection({ index, heading, paragraph, list }: PricesSectionTypes) {
  const _list = list.map(({ name, priceLabel, paragraph, img }) => ({
    name: (
      <Heading
        value={name}
        tag={index === 0 ? 'h2' : 'h3'}
        className='large-text'
      />
    ),
    priceLabel: <span className='small-text'>{`[ ${priceLabel} ]`}</span>,
    paragraph: <Text value={paragraph} />,
    img,
  }));

  return (
    <section className={`${styles['PricesSection']} max-width mb`}>
      <header className={styles.header}>
        <Heading
          value={heading}
          tag={index === 0 ? 'h1' : 'h2'}
          className='small-text'
        />
        <Text value={paragraph} />
      </header>
      <List
        list={_list}
        index={index}
      />
    </section>
  );
}
