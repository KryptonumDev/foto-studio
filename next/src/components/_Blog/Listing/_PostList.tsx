'use client';
import { useState } from 'react';
import type { PostListTypes } from './Listing.types';
import PostCard from '@/components/global/PostCard';
import Cursor, { useCursor } from '@/components/ui/Cursor';
import { NUMBER_OF_POSTS_TO_FETCH } from '.';

import styles from './Listing.module.scss';

export default function PostList({ posts, postCount }: PostListTypes) {
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const [cursorScale, setCursorScale] = useState(0);
  const { mouse, updatePosition } = useCursor();

  const loadMorePosts = () => setOffset(prev => prev + NUMBER_OF_POSTS_TO_FETCH);

  return (
    <>
      <Cursor
        text='czytaj'
        mouse={mouse}
        scale={cursorScale}
      />
      <div
        className={styles.posts}
        onMouseMove={updatePosition}
      >
        {posts.slice(0, offset).map((post, i) => (
          <PostCard
            onMouseOver={e => {
              updatePosition(e);
              setCursorScale(1);
            }}
            onMouseOut={() => setCursorScale(0)}
            onMouseDown={() => setCursorScale(1.3)}
            onMouseUp={() => setCursorScale(1)}
            key={post._id}
            {...post}
            index={i}
          />
        ))}
      </div>
      {postCount > offset && (
        <div className={styles.loadMore}>
          <button onClick={loadMorePosts}>
            Załaduj więcej <span>{`[${postCount - offset}]`}</span>
          </button>
        </div>
      )}
    </>
  );
}
