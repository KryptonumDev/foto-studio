import type { MapSectionTypes } from './MapSection.types';
import { formatPhoneNumber } from '@/utils/format-phone-number';
import Heading from '@/components/ui/Heading';
import CustomLink from '@/components/ui/CustomLink';
import styles from './MapSection.module.scss';

export default function MapSection({ index, heading, location, tel, addressLink }: MapSectionTypes) {
  return (
    <section className={`${styles['MapSection']} max-width mb`}>
      <div className={styles.map}>
        <iframe
          title='Mapa lokalizacji studia fotograficznego Adam Chrapek Foto Studio'
          src={location}
          width='100%'
          height='100%'
          loading='lazy'
        ></iframe>
      </div>
      <div className={styles.container}>
        <header>
          <Heading
            value={heading}
            tag={index === 0 ? 'h1' : 'h2'}
            className='large-text'
          />
        </header>
        <address>
          <CustomLink {...addressLink} />
          <CustomLink
            href={`tel:${tel}`}
            text={formatPhoneNumber(tel)}
            withArrow={false}
          />
        </address>
      </div>
    </section>
  );
}
