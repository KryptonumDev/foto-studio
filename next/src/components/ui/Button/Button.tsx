import Link from 'next/link';
import type { ButtonTypes } from './Button.types';

import styles from './Button.module.scss';

export default function Button({ data, href, children, className = '', ...props }: ButtonTypes) {
  if (data) {
    href = data.href;
    children = data.text;
  }

  const isExternal = href && href.startsWith('https://');
  const Element = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      className={`${styles['Button']} ${className}`}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
      {...props}
    >
      <span className={styles.icon}>
        <ArrowIcon />
      </span>
      <span className={styles.text}>{children}</span>
    </Element>
  );
}

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='15'
    viewBox='0 0 16 15'
    fill='none'
  >
    <path d='M13.268 6.787 7.58 1.43 8.568.5 16 7.5l-7.433 7-.987-.93 5.802-5.464L0 7.68l.047-1.314 13.221.42Z' />
  </svg>
);
