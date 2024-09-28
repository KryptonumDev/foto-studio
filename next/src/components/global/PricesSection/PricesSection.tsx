import type { PricesSectionTypes } from './PricesSection.types';

import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Img from '@/components/ui/Img';

import styles from './PricesSection.module.scss';

export default function PricesSection({ index, heading, paragraph, list }: PricesSectionTypes) {
  return (
    <section className={`${styles['PricesSection']} max-width mb`}>
      <header className={styles.header}>
        <Heading
          value={heading}
          tag={index === 0 ? 'h1' : 'h2'}
          className='small-heading'
        />
        <Text value={paragraph} />
      </header>
      <ul className={styles.list}>
        {list.map(({ name, priceLabel, img, description: { mainText, additionalInfo } }, i) => (
          <li
            key={`prices-section-${i}`}
            className={styles.listItem}
          >
            <header>
              <span className='small-heading'>{`[ ${priceLabel} ]`}</span>
              <Heading
                value={name}
                tag='h3'
                className='large-text'
              />
            </header>
            <div className={styles.content}>
              <Text value={mainText} />
              {additionalInfo && (
                <div className={`${styles.info} light-text`}>
                  <Text value={additionalInfo} />
                </div>
              )}
            </div>
            {img && (
              <Img
                data={img}
                priority={index === 0}
                sizes='(min-width: 768px) 138px, 113px'
                className={styles.img}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
