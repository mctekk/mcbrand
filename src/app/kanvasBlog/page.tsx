"use client"
import React from 'react';
import useKanvasPosts from '@/model/interactions/use-kanvas';
import PostCard from '@/components/atoms/postCards';
import Header from '@/components/organism/header';
import { KanvasMenu } from '@/components/molecules/kanvas-menu';
import { Footer } from '@/components/organism/sections/footer';

const cardContainerClass = 'flex flex-wrap mx-auto justify-center mb-72';

const Home: React.FC = () => {
  
  const { posts } = useKanvasPosts();

  return (
    <div>
      <Header
      menu={<KanvasMenu />}
      className="bg-sky-600"
      logo="/images/kanvasL.svg"
      iconColor="text-white"
    />
      <h1>All Posts</h1>
      <div className={cardContainerClass}>
        {posts.map(post => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Footer kanvas></Footer>
    </div>
  );
};

export default Home;
