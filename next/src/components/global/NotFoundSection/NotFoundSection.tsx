import type { NotFoundSectionTypes } from './NotFoundSection.types';
import Heading from '@/components/ui/Heading';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/Button';
import styles from './NotFoundSection.module.scss';

export default function NotFoundSection({ index, heading, cta, images }: NotFoundSectionTypes) {
  return (
    <section className={`${styles['NotFoundSection']} max-width mb`}>
      <header>
        <div>
          <span className='small-text'>{`[ PAGE 404 ]`}</span>
          <Heading
            value={heading}
            tag={index === 0 ? 'h1' : 'h2'}
            className='large-text'
          />
        </div>
        <Button data={cta} />
      </header>
      <div className={styles.images}>
        {images.map((data, i) => (
          <Img
            data={data}
            sizes='(min-width: 1366px) 294px, (min-width: 768px) 30.7vw, 33.3vw)'
            priority={index === 0}
            key={`not-found-${i}`}
          />
        ))}
      </div>
    </section>
  );
}
