import React, { useEffect, useState } from "react";
import PostCard, { Imagen } from "@/components/atoms/postCards";

const cardContainerClass = "flex-col flex-wrap w-2/4 mx-auto justify-center mb-72";
const buttonContainerClass = "flex justify-center mt-4";
const loadButtonClass = "bg-blue-500 text-white px-4 py-2 m-2 rounded";

type Props = {
  posts: {
    id: string;
    title: string;
    subdesc?: string;
    image: Imagen;
    _status: string;
    _firstPublishedAt: string;
  }[];
  handleLoadMore: (direction: "forward" | "backward") => void;
  currentPage: number;
  totalPages: number;
};

const BlogCards: React.FC<Props> = ({ posts, handleLoadMore, currentPage, totalPages }) => {
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    setHasMorePosts(currentPage < totalPages);
  }, [currentPage, totalPages]);

  return (
    <div className="mx-auto section">
      <h1 className="flex-col flex-wrap w-fit mx-auto justify-center ">Principal Posts</h1>
      <div className={cardContainerClass}>
        {posts.map((post) => (
          <div key={post.id} className="">
            <PostCard post={post} />
          </div>
        ))}
        <div className={buttonContainerClass}>
          <button
            className={loadButtonClass}
            onClick={() => handleLoadMore("backward")}
            disabled={currentPage === 1}
          >
            Load Previous
          </button>
          <button
            className={loadButtonClass}
            onClick={() => handleLoadMore("forward")}
            disabled={!hasMorePosts}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
