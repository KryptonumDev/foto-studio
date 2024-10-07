import styles from './Listing.module.scss';
import type { ListingTypes } from './Listing.types';

export default function Listing({}: ListingTypes) {
  return <section className={`${styles['Listing']} max-width mb`}>Galeria zdjęć</section>;
}
