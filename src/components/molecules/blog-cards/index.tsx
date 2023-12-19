import PostCard, { Imagen } from "@/components/atoms/postCards";
import React from "react";

const cardContainerClass = "flex flex-wrap mx-auto justify-center mb-72";
type Props = {
  posts: {
    id: string;
    title: string;
    subDesc: string;
    image: Imagen;
    _status: string;
    _firstPublishedAt: string;
  }[];
};

export default function BlogCards({ posts }: Props) {
  return (
    <>
      <h1>All Posts</h1>
      <div className={cardContainerClass}>
        {posts.map((post) => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
