'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { _HeaderTypes } from './Header.types';
import styles from './Header.module.scss';

export default function Header({ logo, links }: _HeaderTypes) {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  const getAriaCurrent = (href: string) => pathname.startsWith(href) && 'page';

  const closeMenu = () => setOpened(false);

  const handleEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu();

  const scrollHandler = () => headerRef.current?.classList.toggle(styles.scrolled, window.scrollY >= 20);

  useEffect(() => {
    scrollHandler();
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <>
      <header
        id='header'
        ref={headerRef}
        data-state={opened ? 'opened' : 'closed'}
        className={`${styles['Header']} ${styles.scrolled}`}
      >
        <div className='max-width'>
          <Link
            href='/'
            aria-label='Strona główna'
            onClick={closeMenu}
          >
            {logo}
          </Link>
          <nav id='primary-navigation'>
            <ul>
              {links.map(({ href, name }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    aria-current={getAriaCurrent(href)}
                    onClick={closeMenu}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={styles.menuButton}
            aria-controls='primary-navigation'
            aria-expanded={opened}
            onClick={() => setOpened(prev => !prev)}
            aria-label={opened ? 'Zamknij nawigację' : 'Pokaż nawigację'}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div
        className={styles.overlay}
        onClick={closeMenu}
        aria-label='Zamknij nawigację'
      />
    </>
  );
}
