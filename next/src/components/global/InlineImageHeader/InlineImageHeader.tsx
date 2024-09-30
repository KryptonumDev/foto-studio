import styles from './InlineImageHeader.module.scss';
import type { InlineImageHeaderTypes } from './InlineImageHeader.types';

import InlineImageHeading from '@/components/ui/InlineImageHeading';

export default function InlineImageHeader({ index, heading }: InlineImageHeaderTypes) {
  return (
    <header className={`${styles['InlineImageHeader']} max-width`}>
      <InlineImageHeading
        tag={index === 0 ? 'h1' : 'h2'}
        className='large-text'
        value={heading}
        imageSizes='(min-width: 1366px) 295px, (min-width: 768px) 31vw, 156px'
        priority={index === 0}
      />
    </header>
  );
}
