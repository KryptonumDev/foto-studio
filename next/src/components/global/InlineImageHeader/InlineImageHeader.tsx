import type { InlineImageHeaderTypes } from './InlineImageHeader.types';
import InlineImageHeading from '@/components/ui/InlineImageHeading';
import styles from './InlineImageHeader.module.scss';

export default function InlineImageHeader({ index, heading }: InlineImageHeaderTypes) {
  return (
    <header className={`${styles['InlineImageHeader']} max-width`}>
      <InlineImageHeading
        tag={index === 0 ? 'h1' : 'h2'}
        className='large-text'
        value={heading}
        imageSizes='(min-width: 955px) 295px, (min-width: 505px) 30.9vw, 156px'
        priority={index === 0}
      />
    </header>
  );
}
