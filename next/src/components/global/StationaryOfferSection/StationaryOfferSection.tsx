import type { StationaryOfferSectionTypes } from './StationaryOfferSection.types';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import styles from './StationaryOfferSection.module.scss';

export default function StationaryOfferSection({
  index,
  sideImg,
  content: { heading, cta, paragraph },
}: StationaryOfferSectionTypes) {
  return (
    <section className={`${styles['StationaryOfferSection']} max-width mb`}>
      <Img
        className={styles.sideImg}
        data={sideImg}
        priority={index === 0}
        sizes='(min-width: 1314px) 404px, (min-width: 504px) 30.8vw, 155px'
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
          <Text value={paragraph} />
        </div>
      </div>
    </section>
  );
}
