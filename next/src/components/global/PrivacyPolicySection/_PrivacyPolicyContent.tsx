'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { toPlainText } from 'next-sanity';
import { slugify } from '@/utils/slugify';
import type { PrivacyPolicySectionTypes } from './PrivacyPolicySection.types';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import styles from './PrivacyPolicySection.module.scss';

export default function PrivacyPolicyContent({ list }: { list: PrivacyPolicySectionTypes['list'] }) {
  const _headings = list.map(({ heading }) => ({ slug: slugify(toPlainText(heading)), text: toPlainText(heading) }));
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id !== activeSection) setActiveSection(entry.target.id);
        }),
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <nav
        aria-label='sekcje strony'
        className={styles.navigation}
      >
        <ul>
          {_headings.map(({ slug, text }) => (
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
      </nav>
      <div className={styles.content}>
        {list.map(({ heading, content }, i) => (
          <div
            key={`section-${_headings[i].slug}`}
            className={styles.section}
            id={`${_headings[i].slug}`}
          >
            <Heading
              value={heading}
              tag='h2'
              className='small-text'
            />
            <Text value={content} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ArrowIcon = () => (
  <svg
    width='18'
    height='17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m15.354 7.721-6.56-6.56L9.5.454l7.457 7.456.353.354-.353.353L9.5 16.074l-.707-.708 6.642-6.642L.481 8.22l.034-1 14.838.502Z'
      fill='#A9A9A9'
    />
  </svg>
);
