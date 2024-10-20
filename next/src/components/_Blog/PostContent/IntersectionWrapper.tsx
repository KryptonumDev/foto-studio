'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { IntersectionWrapperTypes } from './PostContent.types';
import CustomLink from '@/components/ui/CustomLink';
import styles from './PostContent.module.scss';

export default function IntersectionWrapper({
  children,
  initialActiveSection,
  headings,
  seo,
}: IntersectionWrapperTypes) {
  const [activeSection, setActiveSection] = useState(initialActiveSection);

  const shareData = {
    title: seo?.title || '',
    text: seo?.description || '',
    url: typeof window !== 'undefined' ? `${window.location.href.split('#')[0]}?feature=share` : 'fotostudio.pl',
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch {
      await navigator.clipboard.writeText(shareData.url);
      //tutaj jakoś powiadomić o skopiowaniu linku
    }
  };

  useEffect(() => {
    const contentElement = document.querySelector(`.${styles.content}`);
    if (!contentElement) return;

    const articleElements = contentElement.querySelectorAll('article');

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }),
      { threshold: 0.6 }
    );

    articleElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        aria-label='sekcje artykułu'
        className={styles.navigation}
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
        <CustomLink
          onClick={handleShare}
          className='small-text'
          text='Udostępnij artykuł'
        />
      </nav>
      {children}
    </>
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
