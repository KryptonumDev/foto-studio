import type { StationaryOfferSectionTypes } from './StationaryOfferSection.types';

import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';

import styles from './StationaryOfferSection.module.scss';

export default function StationaryOfferSection({
  index,
  sideImg,
  content: {
    heading,
    cta,
    description: { mainText, additionalInfo },
  },
}: StationaryOfferSectionTypes) {
  return (
    <section className={`${styles['StationaryOfferSection']} max-width mb`}>
      <Img
        className={styles.sideImg}
        data={sideImg}
        priority={index === 0}
        sizes=''
      />
      <div className={styles.container}>
        <header>
          <Heading
            tag={index === 0 ? 'h1' : 'h2'}
            value={heading}
            className='large-text'
          />
          <Button data={cta} />
        </header>
        <div className={styles.content}>
          <Text value={mainText} />
          <Text
            value={additionalInfo}
            className='light-text'
          />
        </div>
      </div>
    </section>
  );
}
