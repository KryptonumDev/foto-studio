import type { SimpleListAndImageTypes } from './SimpleListAndImage.types';
import { addLeadingZero } from '@/utils/add-leading-zero';

import Img from '@/components/ui/Img';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

import styles from './SimpleListAndImage.module.scss';

export default function SimpleListAndImage({ index, heading, list, img, imagePosition }: SimpleListAndImageTypes) {
  return (
    <section
      className={`${styles['SimpleListAndImage']} ${imagePosition === 'left' ? styles.left : styles.right} max-width mb`}
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
          {list.map(({ _key, text }, index) => (
            <li key={_key}>
              <Text
                tag='span'
                value={text}
                className='large-text'
              />
              <span className='small-text'>{`[${addLeadingZero(index + 1)}]`}</span>
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
