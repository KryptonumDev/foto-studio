import Link from 'next/link';
import type { CustomLinkTypes } from './CustomLink.types';

import styles from './CustomLink.module.css';

export default async function CustomLink({ href, text, className = '', ...props }: CustomLinkTypes) {
  const isExternal = href.startsWith('https://');
  const Element = isExternal ? 'a' : Link;

  return (
    <Element
      href={href}
      className={`${styles.link} ${className}`}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
      {...props}
    >
      <span>{text}</span>
      <ArrowIcon className={styles.icon} />
    </Element>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg
    width='8'
    height='8'
    viewBox='0 0 8 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.29765 1H1.09852V0H7.50474H8.00474V0.5V7.34838H7.00474V1.70711L0.706814 7.99983L0 7.29243L6.29765 1Z'
    />
  </svg>
);
