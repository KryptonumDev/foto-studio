import type { PrivacyPolicySectionTypes } from './PrivacyPolicySection.types';
import { toPlainText } from 'next-sanity';
import { slugify } from '@/utils/slugify';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import ScrollNavigation from '@/components/ui/ScrollNavigation';
import styles from './PrivacyPolicySection.module.scss';

export default function PrivacyPolicySection({ heading, list }: PrivacyPolicySectionTypes) {
  const _headings = list.map(({ heading }) => ({ slug: slugify(toPlainText(heading)), text: toPlainText(heading) }));

  return (
    <section className={`${styles['PrivacyPolicySection']} max-width mb`}>
      <header>
        <Heading
          tag='h1'
          value={heading}
          className='large-text'
        />
      </header>
      <div className={styles.container}>
        <ScrollNavigation
          headings={_headings}
          initialActiveSection={_headings[0].slug}
          navAriaLabel='Nawigacja do sekcji polityki prywatności'
          sectionSelector={`.${styles.section}`}
        />
        <div className={styles.content}>
          {list.map(({ heading, content }, i) => (
            <div
              key={`section-${_headings[i].slug}`}
              className={styles.section}
              id={`${_headings[i].slug}`}
            >
              <Heading
                value={heading}
                tag='h2'
                className='small-text'
              />
              <Text value={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
