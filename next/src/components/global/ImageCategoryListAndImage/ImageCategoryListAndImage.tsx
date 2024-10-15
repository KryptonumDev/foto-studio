import Link from 'next/link';
import { toPlainText } from 'next-sanity';
import type { ImageCategoryListAndImageTypes } from './ImageCategoryListAndImage.types';
import { addLeadingZero } from '@/utils/add-leading-zero';

import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';

import styles from './ImageCategoryListAndImage.module.scss';

export default function ImageCategoryListAndImage({
  index,
  heading,
  list,
  img,
  imagePosition,
}: ImageCategoryListAndImageTypes) {
  return (
    <section
      className={`${styles['ImageCategoryListAndImage']} ${imagePosition === 'left' ? styles.left : styles.right} max-width mb`}
    >
      <div className={styles.content}>
        <header>
          <Heading
            tag={index === 0 ? 'h1' : 'h2'}
            value={heading}
            className='small-text'
          />
        </header>
        <ol className={styles.list}>
          {list.map(({ _key, text, imgCategory: { slug } }, index) => (
            <li key={_key}>
              <Link
                className={styles.link}
                href={`/galeria/kategoria/${slug}`}
              >
                <span className='large-text'>{toPlainText(text)}</span>
                <span className='small-text'>{`[${addLeadingZero(index + 1)}]`}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <Img
        data={img}
        sizes='(min-width: 1366px) 434px, (min-width: 768px) 41.5vw, 156px'
        priority={index === 0}
        className={styles.image}
      />
    </section>
  );
}
