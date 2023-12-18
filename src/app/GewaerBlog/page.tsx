"use client"
import React from 'react';
import PostCard from '@/components/atoms/postCards';
import useGewaerPosts from '@/model/interactions/use-gewaer';

const cardContainerClass = 'flex flex-wrap mx-auto justify-center';

const Home: React.FC = () => {
  
  const { posts } = useGewaerPosts();

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
