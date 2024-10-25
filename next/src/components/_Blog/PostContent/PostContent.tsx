import { toPlainText } from 'next-sanity';
import { slugify } from '@/utils/slugify';
import type { PostContentTypes } from './PostContent.types';
import DynamicComponents from '@/components/DynamicComponents';
import ScrollNavigation from '@/components/ui/ScrollNavigation';
import ShareLink from './ShareLink';
import styles from './PostContent.module.scss';

export default function PostContent({ type, content, headings, seo }: PostContentTypes) {
  const index = content?.findIndex(data => data._type === 'ContentSectionWithHeader');
  const _headings = headings?.map(heading => ({ slug: slugify(toPlainText(heading)), text: toPlainText(heading) }));

  return (
    <section className={`${styles['PostContent']} max-width`}>
      {type === 'caseStudy' || index < 0 || !_headings || (headings && headings.length < 2) ? (
        <DynamicComponents data={content} />
      ) : (
        <>
          <DynamicComponents data={content.slice(0, index)} />
          <div className={styles.content}>
            <ScrollNavigation
              headings={_headings}
              initialActiveSection={_headings[0].slug}
              navAriaLabel='Nawigacja do sekcji artykułu'
              sectionSelector={`.${styles.content} article`}
              threshold={0.4}
              className={styles.navigation}
            >
              <ShareLink {...seo} />
            </ScrollNavigation>
            <DynamicComponents data={content.slice(index)} />
          </div>
        </>
      )}
    </section>
  );
}
