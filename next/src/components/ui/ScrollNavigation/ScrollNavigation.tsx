'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { ScrollNavigationTypes } from './ScrollNavigation.types';
import styles from './ScrollNavigation.module.scss';

export default function ScrollNavigation({
  children,
  initialActiveSection,
  headings,
  navAriaLabel,
  sectionSelector,
  threshold = 0.2,
  className = '',
  //renderAdditionalNavContent,
}: ScrollNavigationTypes) {
  const [activeSection, setActiveSection] = useState(initialActiveSection);

  useEffect(() => {
    const sectionElements = document.querySelectorAll(sectionSelector);
    if (!sectionElements) return;

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { threshold }
    );

    sectionElements.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionSelector, threshold]);

  return (
    <nav
      aria-label={navAriaLabel}
      className={`${styles['ScrollNavigation']} ${className}`}
    >
      <ul>
        {headings.map(({ slug, text }) => (
          <li key={`link-${slug}`}>
            <Link
              className={`${slug === activeSection ? styles.active : ''} small-text`}
              href={`#${slug}`}
            >
              <ArrowIcon /> <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
}

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='17'
    fill='none'
    viewBox='0 0 18 17'
  >
    <path
      fill='#A9A9A9'
      d='m15.354 7.721-6.56-6.56L9.5.454l7.457 7.456.353.354-.353.353L9.5 16.074l-.707-.708 6.642-6.642L.481 8.22l.034-1 14.838.502Z'
    />
  </svg>
);
