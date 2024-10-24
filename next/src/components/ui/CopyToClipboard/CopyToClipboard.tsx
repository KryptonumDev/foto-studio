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
      <div className={styles.content}>
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
        <span className='small-text success-text'>{successMessage}</span>
      </p>
    </div>
  );
}

const CheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='8'
    height='6'
    fill='none'
    viewBox='0 0 8 6'
  >
    <path
      stroke='#fff'
      d='M1 3.032 2.979 5 7 1'
    />
  </svg>
);
