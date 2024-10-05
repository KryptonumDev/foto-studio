'use client';
import { useState } from 'react';
import type { CopyToClipboard } from './CopyToClipboard.types';

import styles from './CopyToClipboard.module.scss';

export default function CopyToClipboard({ label, value, successMessage }: CopyToClipboard) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    } catch (error) {
      alert(`Nie udało się skopiować: ${value}`);
    }
  };

  return (
    <div className={styles['CopyToClipboard']}>
      <div>
        {label && <span className='small-text'>{label}</span>}
        <button
          className='medium-text'
          onClick={handleCopyToClipboard}
        >
          {value}
        </button>
      </div>
      <p className={`${styles.message} ${isCopied ? styles.visible : ''}`}>
        <span className={styles.icon}>
          <CheckIcon />
        </span>
        <span className='small-text'>{successMessage}</span>
      </p>
    </div>
  );
}

const CheckIcon = ({ ...props }) => (
  <svg
    width='8'
    height='6'
    viewBox='0 0 8 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 3.03175L2.97872 5L7 1'
      stroke='white'
    />
  </svg>
);
