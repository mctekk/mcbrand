"use client"
import React from 'react';
import PostCard from '@/components/atoms/postCards';
import useGewaerPosts from '@/model/interactions/use-gewaer';
import { GMenu } from '@/components/molecules/gewaer-menu';
import Header from '@/components/organism/header';
import { Footer } from '@/components/organism/sections/footer';

const cardContainerClass = 'flex flex-wrap mx-auto justify-center mb-52';

const Home: React.FC = () => {
  
  const { posts } = useGewaerPosts();

  return (
    <div>
        <Header
      menu={<GMenu />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
      <h1>All Posts</h1>
      <div className={cardContainerClass}>
        {posts.map(post => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Footer gewaer></Footer>
    </div>
  );
};

export default Home;
