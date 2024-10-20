import { toPlainText } from 'next-sanity';
import { slugify } from '@/utils/slugify';
import type { PostContentTypes } from './PostContent.types';
import DynamicComponents from '@/components/DynamicComponents';
import IntersectionWrapper from './IntersectionWrapper';
import styles from './PostContent.module.scss';

export default function PostContent({ type, content, seo, headings }: PostContentTypes) {
  const index = content.findIndex(data => data._type === 'ContentSectionWithHeader');
  const _headings = headings?.map(heading => ({ slug: slugify(toPlainText(heading)), text: toPlainText(heading) }));

  return (
    <section className={`${styles['PostContent']} max-width`}>
      {type === 'caseStudy' || index < 0 || !_headings || (headings && headings.length < 2) ? (
        <DynamicComponents data={content} />
      ) : (
        <>
          <DynamicComponents data={content.slice(0, index)} />
          <div className={styles.content}>
            <IntersectionWrapper
              headings={_headings}
              initialActiveSection={_headings[0].slug}
              seo={seo}
            >
              <DynamicComponents data={content.slice(index)} />
            </IntersectionWrapper>
          </div>
        </>
      )}
    </section>
  );
}
