import type { HighlightedTextTypes } from './HighlightedText.types';
import Text from '@/components/ui/Text';
import styles from './HighlightedText.module.scss';

export default function HighlightedText({ content }: HighlightedTextTypes) {
  return (
    <div className={styles['HighlightedText']}>
      <Text
        value={content}
        className='small-text'
      />
    </div>
  );
}
