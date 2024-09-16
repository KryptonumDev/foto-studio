import { PortableText, type PortableTextReactComponents } from 'next-sanity';
import type { HeroHeaderAndImagesTypes } from './HeroHeaderAndImages.types';

import Button from '@/components/ui/Button';
import Image from '@/components/ui/Image';

import styles from './HeroHeaderAndImages.module.css';

const components = (index: number) =>
  ({
    block: {
      normal: ({ children }) =>
        index === 0 ? <h1 className='large-text'>{children}</h1> : <h2 className='large-text'>{children}</h2>,
    },
  }) as Partial<PortableTextReactComponents>;

const imageSizes = [
  '(min-width: 1200px) 108px, (min-width: 768px) 63px, 70px',
  '(min-width: 1200px) 185px, (min-width: 768px) 108px, 86px',
  '(min-width: 1200px) 296px, (min-width: 768px) 173px, 155px',
  '(min-width: 1200px) 326px, (min-width: 768px) 174px, 156px',
  '(min-width: 1200px) 185px, (min-width: 768px) 111px, 86px',
];

export default async function HeroHeaderAndImages({ heading, images, cta, index }: HeroHeaderAndImagesTypes) {
  return (
    <section className={`${styles.hero} max-width`}>
      <header>
        <PortableText
          components={components(index)}
          value={heading}
        />
        <Button {...cta} />
      </header>
      {images.map((data, index) => (
        <Image
          key={`hero-image-${index}`}
          data={data}
          alt='hero image'
          sizes={imageSizes[index]}
          priority={true}
        />
      ))}
    </section>
  );
}
