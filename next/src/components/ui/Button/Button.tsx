import Link from 'next/link';
import styles from './Button.module.css';
import type { ButtonTypes } from './Button.types';

export default function Button({ href, text, className = '', ...props }: ButtonTypes) {
  const isExternal = href && href.startsWith('https://');
  const Element = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      className={`${styles.button} ${className}`}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
      {...props}
    >
      <span className={styles.icon}>
        <ArrowIcon />
      </span>
      <span className={styles.text}>{text}</span>
    </Element>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg
    width='16'
    height='15'
    viewBox='0 0 16 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13.2683 6.78673L7.5795 1.42961L8.56666 0.5L16 7.5L8.56666 14.5L7.5795 13.5704L13.3824 8.10578L0 7.68017L0.0471207 6.36625L13.2683 6.78673Z' />
  </svg>
);
