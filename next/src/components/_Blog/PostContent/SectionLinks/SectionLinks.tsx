import type { SectionLinksTypes } from './SectionLinks.types';
import styles from './SectionLinks.module.scss';

export default function SectionLinks({}: SectionLinksTypes) {
  return <section className={styles['SectionLinks']}>SECTION LINKS</section>;
}
