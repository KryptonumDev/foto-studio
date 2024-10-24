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
            sizes='(min-width: 956px) 294px, (min-width: 507px) 30.8vw, 156px'
          />
          <div className={styles.text}>
            <Text value={paragraph} />
            <Button data={cta} />
          </div>
        </div>
      </div>
      <Img
        className={styles.sideImg}
        data={sideImg}
        priority={index === 0}
        sizes='(min-width: 768px) 510px, 43.4vw'
      />
    </section>
  );
}
