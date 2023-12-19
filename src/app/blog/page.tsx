"use client";
import React from "react";
import useKanvasPosts from "@/model/interactions/use-kanvas";
import PostCard from "@/components/atoms/postCards";
import Header from "@/components/organism/header";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { Footer } from "@/components/organism/sections/footer";
import { GMenu } from "@/components/molecules/gewaer-menu";
import useGewaerPosts from "@/model/interactions/use-gewaer";

const cardContainerClass = "flex-col flex-wrap w-fit mx-auto justify-center  mb-96";

function Home() {
  const { kposts } = useKanvasPosts();
  const { posts } = useGewaerPosts();
  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "kanvas") {
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
          {kposts.map((kpost) => (
            <div key={kpost.id} >
              <PostCard post={kpost} />
            </div>
          ))}
        </div>
        <Footer kanvas></Footer>
      </div>
    );
  }
  if (process.env.NEXT_PUBLIC_PAGE_TYPE == "gewaer") {
    return (
      <div>
        <Header
          menu={<GMenu />}
          className="bg-gewaer-100"
          logo="/images/Gewaer.svg"
          iconColor="text-white"
        />
        ,<h1>All Posts</h1>
        <div className={cardContainerClass}>
          {posts.map((post) => (
            <div key={post.id} className="">
              <PostCard post={post} />
            </div>
          ))}
        </div>
        <Footer gewaer></Footer>
      </div>
    );
  }
}

export default Home;
