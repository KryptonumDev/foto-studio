import type { QuoteWithImageTypes } from './QuoteWithImage.types';
import Img from '@/components/ui/Img';
import Text from '@/components/ui/Text';
import styles from './QuoteWithImage.module.scss';

export default function QuoteWithImage({ index, content, images }: QuoteWithImageTypes) {
  return (
    <div className={`${styles['QuoteWithImage']} ${styles[`images-${images.length}`]}`}>
      <blockquote>
        <Text
          tag='span'
          value={content}
          className='large-text'
        />
      </blockquote>
      {images.map((data, i) => (
        <Img
          key={`quote-with-image-${index}-${i}`}
          data={data}
          priority={index === 0}
          sizes={
            images.length === 1
              ? '(min-width: 1366px) 402px, (min-width: 768px) 42vw, 319px'
              : i === 0
                ? '(min-width: 1366px) 250px, (min-width: 360px) 33vw, 188px'
                : '(min-width: 1366px) 900px, 100vw'
          }
        />
      ))}
    </div>
  );
}
