import type { ArticleTextTypes } from './ArticleText.types';
import Text from '@/components/ui/Text';
import styles from './ArticleText.module.scss';

export default function ArticleText({ content }: ArticleTextTypes) {
  return (
    <article className={styles['ArticleText']}>
      <Text value={content} />
    </article>
  );
}
