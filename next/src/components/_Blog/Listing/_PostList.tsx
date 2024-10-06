'use client';
import { useState, useRef } from 'react';
import { getPosts } from '@/actions/getPosts';
import type { PostListTypes } from './Listing.types';
import PostCard, { type PostCardTypes } from '@/components/global/PostCard';
import Cursor from '@/components/ui/Cursor';
import { NUMBER_OF_POSTS_TO_FETCH } from '.';

import styles from './Listing.module.scss';

export default function PostList({ initialPosts, currentCategorySlug, postCount }: PostListTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const [posts, setPosts] = useState<PostCardTypes[]>(initialPosts);

  const loadMorePosts = async () => {
    const data = await getPosts(offset, NUMBER_OF_POSTS_TO_FETCH, currentCategorySlug);
    setPosts(prev => [...prev, ...data]);
    setOffset(prev => prev + NUMBER_OF_POSTS_TO_FETCH);
  };

  return (
    <>
      <Cursor
        text='czytaj'
        trackingAreaRef={ref}
        active={isHovering}
      />
      <div
        className={styles.posts}
        ref={ref}
      >
        {posts.map(post => (
          <PostCard
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            key={post._id}
            {...post}
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
