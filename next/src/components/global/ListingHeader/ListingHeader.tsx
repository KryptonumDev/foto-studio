import type { ListingHeaderTypes } from './ListingHeader.types';
import Heading from '@/components/ui/Heading';
import styles from './ListingHeader.module.scss';

export default function ListingHeader({ header: { heading } }: ListingHeaderTypes) {
  return (
    <header className={`${styles['ListingHeader']} max-width`}>
      <Heading
        value={heading}
        tag='h1'
        className='large-text'
      />
    </header>
  );
}
