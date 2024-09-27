import type { HeroSectionTypes } from './HeroSection.types';

import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/Button';

import styles from './HeroSection.module.scss';

export default function HeroSection({ index, sideImg, content: { heading, img, paragraph, cta } }: HeroSectionTypes) {
  return (
    <section className={`${styles['HeroSection']} max-width`}>
      <div className={styles.container}>
        <header>
          <Heading
            value={heading}
            tag={index === 0 ? 'h1' : 'h2'}
            className='large-text'
          />
        </header>
        <div className={styles.content}>
          <Img
            data={img}
            priority={index === 0}
            sizes=''
          />
          <div className={styles.text}>
            <Text
              value={paragraph}
              tag='p'
            />
            <Button data={cta} />
          </div>
        </div>
      </div>
      <Img
        className={styles.sideImg}
        data={sideImg}
        priority={index === 0}
        sizes=''
      />
    </section>
  );
}
