'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { _HeaderTypes } from './Header.types';
import styles from './Header.module.scss';

export default function Header({ logo, links }: _HeaderTypes) {
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  const getAriaCurrent = (href: string) => pathname.startsWith(href) && 'page';

  const closeMenu = useCallback(() => setOpened(false), []);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu();

    const scrollHandler = () => {
      headerRef.current?.classList.toggle(styles.scrolled, window.scrollY >= 20);
      closeMenu();
    };

    scrollHandler();
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [closeMenu]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.addEventListener('click', closeMenu);
    return () => overlay.removeEventListener('click', closeMenu);
  }, [overlayRef, closeMenu]);

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
            aria-label='Przejdź do strony głównej'
            onClick={closeMenu}
          >
            {logo}
          </Link>
          <nav id='primary-navigation'>
            <ul>
              {links.map(({ href, name }) => (
                <li key={href}>
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
        ref={overlayRef}
        className={styles.overlay}
      />
    </>
  );
}
