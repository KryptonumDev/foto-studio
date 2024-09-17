import type { AboutSectionTypes } from './AboutSection.types';

import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Image from '@/components/ui/Image';

import styles from './AboutSection.module.css';

export default function AboutSection({
  heading,
  index,
  img,
  content: { contentHeading, paragraph },
}: AboutSectionTypes) {
  return (
    <section className={`${styles['about-section']} max-width mb`}>
      <Image
        data={img}
        sizes='(min-width: 1366px) 1272px, (min-width: 768px) 672px, 328px'
        priority={index === 0}
      />
      <div className={styles.wrapper}>
        <header>
          <Heading
            value={heading}
            level={index === 0 ? 1 : 2}
            className='large-text'
          />
        </header>
        <div className={styles.content}>
          <Heading
            value={contentHeading}
            level={3}
            className='small-heading'
          />
          <div className={styles.paragraph}>
            <Paragraph value={paragraph} />
          </div>
        </div>
      </div>
    </section>
  );
}
