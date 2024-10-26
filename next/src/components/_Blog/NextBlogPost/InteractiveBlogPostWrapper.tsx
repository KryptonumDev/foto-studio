'use client';
import { useState } from 'react';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import styles from './NextBlogPost.module.scss';

export default function InteractiveBlogPostWrapper({ children }: { children: React.ReactNode }) {
  const { mouse, updatePosition } = useCursor();
  const [cursorScale, setCursorScale] = useState(0);

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
      >
        <span>CZYTAJ</span>
      </Cursor>
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
