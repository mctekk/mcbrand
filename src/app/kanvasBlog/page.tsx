"use client";
import React from "react";
import useKanvasPosts from "@/model/interactions/use-kanvas";
import PostCard from "@/components/atoms/postCards";
import useGewaerPosts from "@/model/interactions/use-gewaer";

const cardContainerClass = "flex flex-wrap mx-auto justify-center";

const Home: React.FC = () => {
  let posts: any[] = [];
  let type = process.env.PAGE_TYPE ||""
  if (type == "kanvas") {
    const kanvasPosts = useKanvasPosts();
    posts = kanvasPosts.posts || [];
  }

  if (type === "gewaer") {
    const gewaerPosts = useGewaerPosts();
    posts = gewaerPosts.posts || [];
  }
 
console.log(posts)
  return (
    <div>
      <h1>All Posts</h1>
      <div className={cardContainerClass}>
        {posts.map((post) => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
