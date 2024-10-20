import { slugify } from '@/utils/slugify';
import { toPlainText } from 'next-sanity';
import type { ContentSectionWithHeaderTypes } from './ContentSectionWithHeader.types';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import styles from './ContentSectionWithHeader.module.scss';

export default function ContentSectionWithHeader({
  blogPostType,
  index,
  heading,
  content,
  img,
  list,
}: ContentSectionWithHeaderTypes) {
  return (
    <article
      id={`${slugify(toPlainText(heading))}`}
      className={`${styles['ContentSectionWithHeader']} ${styles[blogPostType]} ${index === 0 ? styles['first'] : ''} ${img ? styles['with-image'] : ''}`}
    >
      {img && (
        <Img
          data={img}
          priority={index === 0}
          sizes='(min-width: 550px) 511px, 100vw'
        />
      )}
      <div className={styles.content}>
        <Heading
          value={heading}
          tag='h2'
          className='small-text'
        />
        <div className={styles.text}>
          <Text value={content} />
        </div>
        {list && (
          <ul className={styles.list}>
            {list.map((item, i) => (
              <li key={`list-${index}-${i}`}>
                <Text
                  value={item.heading}
                  tag='span'
                  className='small-text'
                />
                <Text
                  value={item.content}
                  tag='span'
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
