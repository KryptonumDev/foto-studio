'use client';
import { useState, useRef, useCallback } from 'react';
import type { PostListTypes } from './Listing.types';
import { POSTS_PER_LOAD } from '@/global/constants';
import PostCard from '@/components/global/PostCard';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import styles from './Listing.module.scss';

export default function PostList({ posts, postCount }: PostListTypes) {
  const { mouse, updatePosition } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const [cursorScale, setCursorScale] = useState(0);
  const [offset, setOffset] = useState(POSTS_PER_LOAD);

  const scrollUp = useCallback(() => {
    if (!ref.current) return;
    const lastPostCard = ref.current.querySelector(`.${styles.posts} article:last-child`);
    if (lastPostCard) lastPostCard.scrollIntoView({ behavior: 'instant' });
  }, []);

  const updateOffset = () => {
    if (postCount > offset) {
      setOffset(prev => prev + POSTS_PER_LOAD);
    } else {
      setOffset(POSTS_PER_LOAD);
      requestAnimationFrame(scrollUp);
    }
  };

  return (
    <>
      <Cursor
        mouse={mouse}
        scale={cursorScale}
      >
        <span>CZYTAJ</span>
      </Cursor>
      <div
        className={styles.posts}
        ref={ref}
        onMouseMove={updatePosition}
      >
        {posts.slice(0, offset).map((post, i) => (
          <PostCard
            onMouseOver={e => {
              updatePosition(e);
              setCursorScale(1);
            }}
            onMouseOut={() => setCursorScale(0)}
            key={post._id}
            {...post}
            index={i}
          />
        ))}
      </div>
      {postCount > POSTS_PER_LOAD && (
        <div className={styles.btn}>
          <button onClick={updateOffset}>
            {postCount > offset ? `Załaduj więcej [${postCount - offset}]` : 'Pokaż mniej'}
          </button>
        </div>
      )}
    </>
  );
}
