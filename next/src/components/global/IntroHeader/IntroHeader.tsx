import type { IntroHeaderTypes } from './IntroHeader.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import styles from './IntroHeader.module.scss';

export default function IntroHeader({ index, heading, paragraph }: IntroHeaderTypes) {
  return (
    <header className={`${styles['IntroHeader']} max-width`}>
      <Heading
        tag={index === 0 ? 'h1' : 'h2'}
        value={heading}
        className='large-text'
      />
      {paragraph && <Text value={paragraph} />}
    </header>
  );
}
