import Link from 'next/link';
import type { CustomLinkTypes } from './CustomLink.types';

import styles from './CustomLink.module.scss';

export default function CustomLink({ href, text, withArrow = true, className = '', ...props }: CustomLinkTypes) {
  const isExternal = href && href.startsWith('https://');
  const Element = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      className={`${styles['CustomLink']} ${className}`}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
      {...props}
    >
      <span>{text}</span>
      {withArrow && (
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      )}
    </Element>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={8}
    fill='none'
    viewBox='0 0 8 8'
    {...props}
  >
    <path d='M6.298 1h-5.2V0h6.907v7.348h-1v-5.64L.707 8 0 7.292 6.298 1Z' />
  </svg>
);
