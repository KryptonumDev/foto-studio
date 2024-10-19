import type { PostContentTypes } from './PostContent.types';
import DynamicComponents from '@/components/DynamicComponents';
import styles from './PostContent.module.scss';
import SectionLinks from './SectionLinks';

export default function PostContent({ type, content, headings }: PostContentTypes) {
  const index = content.findIndex(data => data._type === 'ContentSectionWithHeader');

  return (
    <section className={`${styles['PostContent']} max-width`}>
      {type === 'caseStudy' || index < 0 || (headings && headings.length < 2) ? (
        <DynamicComponents data={content} />
      ) : (
        <>
          <DynamicComponents data={content.slice(0, index)} />
          <div className={styles.content}>
            {headings && <SectionLinks headings={headings} />}
            <DynamicComponents data={content.slice(index)} />
          </div>
        </>
      )}
    </section>
  );
}
