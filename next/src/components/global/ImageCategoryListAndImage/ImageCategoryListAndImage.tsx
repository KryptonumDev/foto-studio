'use client';
import { useState } from 'react';
import Link from 'next/link';
import { toPlainText } from 'next-sanity';
import { addLeadingZero } from '@/utils/add-leading-zero';
import type { ImageCategoryListAndImageTypes } from './ImageCategoryListAndImage.types';
import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import styles from './ImageCategoryListAndImage.module.scss';

export default function ImageCategoryListAndImage({
  index,
  heading,
  list,
  imagePosition,
}: ImageCategoryListAndImageTypes) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className={`${styles['ImageCategoryListAndImage']} ${styles[imagePosition]} max-width mb`}>
      <div className={styles.content}>
        <header>
          <Heading
            tag={index === 0 ? 'h1' : 'h2'}
            value={heading}
            className='small-text'
          />
        </header>
        <ol className={styles.list}>
          {list.map(({ _key, text, imgCategory: { slug } }, i) => (
            <li key={_key}>
              <Link
                className={styles.link}
                href={`/galeria/kategoria/${slug}`}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                <span className='large-text'>{toPlainText(text)}</span>
                <span className='small-text'>{`[${addLeadingZero(i + 1)}]`}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.image}>
        {list.map(({ _key, img }, i) => (
          <Img
            key={`image-${_key}`}
            data={img}
            sizes='(min-width: 1045px) 434px, (min-width: 376px) 42vw, 156px'
            priority={index === 0}
            className={hoveredIndex === i ? styles.active : ''}
          />
        ))}
      </div>
    </section>
  );
}
