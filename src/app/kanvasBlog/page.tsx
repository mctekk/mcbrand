"use client"
import React from 'react';
import useKanvasPosts from '@/model/interactions/use-kanvas';
import PostCard from '@/components/atoms/postCards';

const cardContainerClass = 'flex flex-wrap mx-auto justify-center';

const Home: React.FC = () => {
  
  const { posts } = useKanvasPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <div className={cardContainerClass}>
        {posts.map(post => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
