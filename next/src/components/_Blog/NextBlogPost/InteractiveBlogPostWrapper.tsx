'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import styles from './NextBlogPost.module.scss';

export default function InteractiveBlogPostWrapper({ slug, children }: { slug: string; children: React.ReactNode }) {
  const { mouse, updatePosition } = useCursor();
  const router = useRouter();
  const [cursorScale, setCursorScale] = useState(0);

  useEffect(() => {
    const element = document.querySelector(`.${styles.content} img`);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) router.push(`/blog/${slug}`);
      },
      { threshold: 0.95 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [slug, router]);

  return (
    <>
      <Cursor
        text='czytaj'
        mouse={mouse}
        scale={cursorScale}
      />
      <div
        className={styles.content}
        onMouseMove={updatePosition}
        onMouseOver={e => {
          updatePosition(e);
          setCursorScale(1);
        }}
        onMouseOut={() => setCursorScale(0)}
      >
        {children}
      </div>
    </>
  );
}
