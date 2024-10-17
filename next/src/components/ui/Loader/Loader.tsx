import styles from './Loader.module.scss';
import type { LoaderTypes } from './Loader.types';

export default function Loader({ loading }: LoaderTypes) {
  return (
    loading && (
      <div className={styles.Loader}>
        <div className={styles.spinner}></div>
      </div>
    )
  );
}
