import type { AboutSectionTypes } from './AboutSection.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Img from '@/components/ui/Img';
import styles from './AboutSection.module.scss';

export default function AboutSection({
  heading,
  index,
  img,
  content: { contentHeading, paragraph },
}: AboutSectionTypes) {
  return (
    <section className={`${styles['AboutSection']} max-width mb`}>
      <Img
        data={img}
        sizes='(min-width: 1366px) 1270px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2rem)'
        priority={index === 0}
      />
      <div className={styles.wrapper}>
        <header>
          <Heading
            value={heading}
            tag={index === 0 ? 'h1' : 'h2'}
            className='large-text'
          />
        </header>
        <div className={styles.content}>
          <Heading
            value={contentHeading}
            tag='h3'
            className='small-text'
          />
          <div className={styles.text}>
            <Text value={paragraph} />
          </div>
        </div>
      </div>
    </section>
  );
}
